#!/usr/bin/node

// How to run: nodejs/compiler.js  assets/icons.xml

// Inlcude support for closure library.
require('../../../library/closure/goog/bootstrap/nodejs.js');

goog.provide('pstj.bin');

goog.require('goog.array');
goog.require('goog.dom.classlist');
goog.require('goog.Promise');
goog.require('goog.string');

// node requires
var fs = require('fs');
var jsdom = require('jsdom').jsdom;
var serializeDoc = require('jsdom').serializeDocument;


// Define the paths here
var INPUT_TEMPLATE = 'templates/renderers.tpl';
var OUTPUT_TEMPLATE = 'templates/icons.soy';
var JS_OUTPUT = 'autogenerated/iconname.js';

goog.scope(function() {
var _ = pstj.bin;
var array = goog.array;
var object = goog.object;
var string = goog.string;

/**
 * Usable entry point
 * @param {string} xmlfile Path to the file of XML/SVG icons to process.
 */
_.processXMLFile = function(xmlfile) {
  goog.Promise.all([
    _.getFileContent(xmlfile),
    _.getFileContent(INPUT_TEMPLATE),
  ])
  .then(_.start)
  .then(_.writeFiles)
  .then(function() {
    console.log('Done');
  })
  .thenCatch(function(err) {
    console.log(err);
    process.exit(1);
  });
};


_.writeFiles = function(results) {
  return goog.Promise.all([
    _.putFileContent(OUTPUT_TEMPLATE, results[0]),
    _.putFileContent(JS_OUTPUT, results[1])
  ]);
};

_.putFileContent = function(fn, content) {
  return new goog.Promise(function(resolve, reject) {
    fs.writeFile(fn, content, {
      encoding: 'UTF-8'
    }, function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};


_.start = function(results) {
  var xml = results[0];
  var template = results[1];
  var config = {};
  var doc = _.makeDocument(_.wrapHtmlString(xml));
  _.removeIsAttribute(doc);
  _.templatizeClassNames(doc);
  _.createMapAndTemplates(config, doc);
  _.createClasses(config, template);
  return [config.templates.join('\n'), config.classes];
};


_.createClasses = function(config, template) {
  var TAB = _.Text.TAB;
  var requires = ['goog.require(\'pstj.material.icons\');'];
  var classes = [];
  var ifelse = [];
  var enums = [];
  object.forEach(config.map, function(value, key, obj) {
    // Constructs the renderer classes
    classes.push('/** Renderer for ' + key + ' */');
    classes.push('icon.' + key + ' = goog.defineClass(' +'IR, {');
    classes.push(TAB + '/**');
    classes.push(TAB + ' * @constructor');
    classes.push(TAB + ' * @extends {IR}');
    classes.push(TAB + ' */');
    classes.push(TAB + 'constructor: function() {');
    classes.push(TAB + TAB + 'goog.base(this);');
    classes.push(TAB + '},\n\n');
    classes.push(TAB + '/** @inheritDoc */');
    classes.push(TAB + 'getTemplate: function(m) {');
    classes.push(TAB + TAB + 'return pstj.material.icons.' + key + '(m);');
    classes.push(TAB + '}');
    classes.push('});');
    classes.push('goog.addSingletonGetter(icon.' + key + ');\n\n');

    // Register the names and branches
    ifelse.push(TAB + '//Branch for ' + key);
    array.forEach(value, function(name, i, list) {
      enums.push(TAB + _.getEnum(name) + ': \'' + name + '\',');
      ifelse.push(TAB + ((i == 0) ? 'if (' : (TAB + TAB)) +
          'iconName == pstj.material.icon.Name.' + _.getEnum(name) +
          ((i == list.length - 1) ? ') {' : ' ||'));
    });
    ifelse.push(TAB + TAB + 'return icon.' + key + '.getInstance();');
    ifelse.push(TAB + '}\n');
  });

  var parts = template.split('//INSERTION');
  config.classes = ([
    '// File auto generated, please do not edit!\n',
    parts[0],
    requires.join('\n'),
    parts[1],
    ifelse.join('\n'),
    parts[2],
    classes.join('\n'),
    parts[3],
    enums.join('\n'),
    parts[4]
  ]).join('');
};

_.getEnum = function(name) {
  return name.toUpperCase().replace('-', '_');
};


/**
 * Given a valid document, returns configuration object with all the
 * soy templates as map Name -> template content as list of string
 * and the map of names as map Name -> 'name,..'
 */
_.createMapAndTemplates = function(config, doc) {
  var templates = _.getClearSoyTemplate();
  var map = {};
  array.forEach(doc.querySelectorAll('svg[name]'), function(svg) {
    var names = _.getNames(svg);
    var name = _.getRendererName(names[0]);
    _.removeNameAttribute(svg);
    _.addSoyTemplate(templates, svg, name);
    object.set(map, name, names);
  });
  config.templates = templates;
  config.map = map;
};


/**
 * Removes the name attrobute from an element.
 * @param {Element} el
 */
_.removeNameAttribute = function(el) {
  el.removeAttribute('name');
};


/**
 * Creates a soy template instance as list of strings (to be combined with
 * new line) from an element using the provided name.
 * @param {Array.<string>} template
 * @param {Element} el
 * @param {string} name
 */
_.addSoyTemplate = function(template, el, name) {
  var html = el.outerHTML;
  html = array.map(el.outerHTML.split('\n'), function(part) {
    return _.Text.TAB + part;
  }).join('\n');
  template.push('/** Template for ' + name + ' */');
  template.push('{template .' + name + '}');
  template.push(html);
  template.push('{/template}\n');
};


/**
 * Given an element returns the name attribute as list of string separated
 * by the comma.
 * @param {Element}
 * @return {Array.<string>}
 */
_.getNames = function(el) {
  var names = el.getAttribute('name').split(',');
  if (array.isEmpty(names)) throw new Error('No names found on svg element');
  return names;
};


/**
 * Given a hiphened string returns ClassName compatible representation.
 * @param {string} name
 * @return {string}
 */
_.getRendererName = function(name) {
  return string.toTitleCase(string.toCamelCase(name));
};


/**
 * Wraps (assumed to be) fragment of html into valid HTML document.
 * @param {string} fragment
 * @return {string}
 */
_.wrapHtmlString = function(fragment) {
  return _.Text.PRE + fragment + _.Text.POST;
};


_.getClearSoyTemplate = function() {
  var tpl = [];
  tpl.push('/** Auto-generated, please do not edit! */');
  tpl.push('{namespace pstj.material.icons}\n\n');
  return tpl;
};


/**
 * Retrieves file content asynchrnously.
 * @param {string} xmlfile
 * @return {goog.Promise.<string>}
 */
_.getFileContent = function(xmlfile) {
  return new goog.Promise(function(resolve, reject) {
    fs.readFile(xmlfile, {
      encoding: 'UTF-8'
    }, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};


/**
 * Creates the virtual document.
 * @param {string} htmlstring
 * @return {Document}
 */
_.makeDocument = function(htmlstring) {
  return jsdom(htmlstring);
};


/**
 * Removes the 'is' attribute that can be left as artefact from the original
 * templates.
 * @param {Document}
 * @return {Document}
 */
_.removeIsAttribute = function(doc) {
  array.forEach(doc.querySelectorAll('[is]'), function(el) {
    el.removeAttribute('is');
  });
  return doc;
};


/**
 * Given a document it will convert all dom nodes that have class name
 * to use the soy class names convention
 * @param {Document}
 * @return {Document}
 */
_.templatizeClassNames = function(doc) {
  var els = doc.querySelectorAll('[class]');
  goog.array.forEach(els, function(el) {
    var classnames = goog.dom.classlist.get(el);
    if (classnames.length > 0 && classnames[0][0] != '{') {
      var res = [];
      goog.array.forEach(classnames, function(name, idx) {
        if (idx != 0) {
          res.push(' ');
        }
        res.push('{css ');
        res.push(name);
        res.push('}');
      });
      goog.dom.classlist.set(el, res.join(''));
    }
  });
  return doc;
};


/**
 * Provides the needed strings.
 * @enum {string}
 */
_.Text = {
  PRE: '<!doctype html><html><head></head><body>',
  POST: '</body></html>',
  TAB: '  '
};

});  // goog.scope

pstj.bin.processXMLFile(process.argv[2]);