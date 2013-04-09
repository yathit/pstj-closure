goog.provide('pstj.ng.Template');

goog.require('goog.array');
goog.require('goog.dom.classlist');
goog.require('goog.dom.dataset');
goog.require('goog.dom.query');
goog.require('pstj.ng.filters');
goog.require('pstj.ui.Templated');
goog.require('pstj.ds.ListItem');

/**
 * @fileoverview Provides easy to use html templating with declarative data
 * binding similar to what angular JS is doing but much more simple to use and
 * requireing less code. It has also severe limitations and is designed to be
 * used for very simple use cases. Please read example!
 *
 * @author regardingscot@gmail.com (Peter StJ)
 */

/**
 * @constructor
 * @extends {pstj.ui.Templated}
 * @param {string=} opt_nullvalue The default value to apply to models when
 * there is no relevant data.
 */
pstj.ng.Template = function(opt_nullvalue) {
  goog.base(this);
  if (goog.isString(opt_nullvalue)) this.nullValue = opt_nullvalue;
};
goog.inherits(pstj.ng.Template, pstj.ui.Templated);

goog.scope(function() {
  var Template = pstj.ng.Template;
  var _ = pstj.ng.Template.prototype;
  var query = goog.dom.query;
  var dataset = goog.dom.dataset;
  var array = goog.array;
  var ngfilter = pstj.ng.filters;
  var classlist = goog.dom.classlist;

  /**
   * The regular expression used to figure out the filter name and value
   * @type {RegExp}
   * @protected
   */
  Template.RE = /^([^\(]*)\((.*)\)$/;

  /**
   * The list of elements that has model attached to them declaratively.
   * @type {{length: number}}
   * @private
   */
  _.templateElements_;

  /**
   * The default value to use to adds as data when no relevant data is found on
   * the model.
   * @type {string}
   * @private
   */
  _.nullValue_ = '&nbsp;';

  /** @inheritDoc */
  _.decorateInternal = function(el) {
    goog.base(this, 'decorateInternal', el);
    // call 1 way data bindings
    this.templateElements_ = query('[data-model]');
    classlist.remove(el, goog.getCssName('cloak'));
    this.applyTemplate();
  };

  /** @inheritDoc */
  _.setModel = function(model) {
    if (!(model instanceof pstj.ds.ListItem)) {
      if (goog.isObject(model)) {
        model = new pstj.ds.ListItem(/** @type {!Object} */(model));
      } else {
        throw new Error('The model of ngtemplate instance must be an object');
      }
    }
    goog.base(this, 'setModel', model);
    this.applyTemplate();
  };

  /**
   * Make it return ListItem.
   * @override
   * @return {pstj.ds.ListItem} Hopefully casted.
   */
  _.getModel;

  /**
   * Used to apply the data on the model derived from the template.
   */
  _.applyTemplate = function() {
    if (goog.isDefAndNotNull(this.getModel())) {
      this.applyModel();
    }
  };

  /**
   * Applies the model on the template.
   * @protected
   */
  _.applyModel = function() {
    var model = this.getModel();
    var currentElement = null;
    var modelName;
    var data;
    for (var i = 0; i < this.templateElements_.length; i++) {
      currentElement = this.templateElements_[i];
      modelName = dataset.get(currentElement, 'model');
      if (goog.isString(modelName)) {
        data = model.getProp(modelName);
        if (goog.isNull(data)) {
          currentElement.innerHTML = this.nullValue_;
        } else {
          this.applyFilteredModel(currentElement, data);
        }
      }
    }
  };

  /**
   * Applies the data on the element inner HTML by first filtering it with the
   * registered filter names.
   * @protected
   * @param {Element} el The element to work with.
   * @param {number|string|boolean} data The data to apply in the html. Note
   * that if the data is not s primitive it will be converted to a string before
   * it is run by the filters.
   */
  _.applyFilteredModel = function(el, data) {

    // first of all, get our filter
    var filter = dataset.get(el, 'filter');
    if (goog.isString(filter)) {
      el.innerHTML = this.applyFilterOnData_(data, filter);
    } else {
      el.innerHTML = data.toString();
    }
  };

  /**
   * Applies the filtering information on the data and resurns the filtered
   * result as string.
   *
   * The filters are applied in the order they are written on and the result is
   * piped to the next filter and so on until all filter are executed. The
   * result is then returned as string.
   *
   * Example:
   * data-filter="timeoffset(hh:mm)|append( passed since midnight)"
   * and data provided as
   * data = 3600;
   * will result in
   * 1:00 passed since midnight
   *
   * @param {number|string|boolean} data The data record to use.
   * @param {string} filter The filter to apply on the data.
   * @return {string} The result of the filter as string.
   * @private
   */
  _.applyFilterOnData_ = function(data, filter) {
    var filters = filter.split('|');
    var result = data;

    // For each filter in the filter value apply the filter on the result from
    // the previous filter and return the result afterwards.
    array.forEach(filters, function(item) {
      var fname;
      var fvalue;
      // We expect the filters that accept arguments to be written as
      // filterName(argument1, argument2,...)|filterName2|filter3(whatever)
      // To extract it we use regulr expression, but because regexp is expensive
      // we first try to check for at least the '(' simbol.
      if (item.indexOf('(') != -1) {
        var tmp = Template.RE.exec(item);
        // at this stage tmp will be wither null (when there is no additional
        // data to the filter or an array or matches (1 - filter name, 2 filter
        // config).
        if (goog.isNull(tmp)) {
          // filter name === item (the whole thing is the filter name).
          fname = item;
        } else {
          fname = tmp[1];
          fvalue = tmp[2];
        }
      } else {
        fname = item;
      }
      // if there is a named filter with this name, call it with the values
      // else just return the data.
      if (pstj.ng.filters.hasFilter(fname)) {
        result = pstj.ng.filters.apply(fname, result, fvalue);
      }
    });
    return result.toString();
  };
});
