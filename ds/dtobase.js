goog.provide('pstj.ds.DtoBase');

goog.require('goog.array');
goog.require('goog.async.Delay');
goog.require('goog.events');
goog.require('goog.events.EventTarget');


/** @extends {goog.events.EventTarget} */
pstj.ds.DtoBase = goog.defineClass(goog.events.EventTarget, {
  constructor: function() {
    goog.events.EventTarget.call(this);
  },

  /**
   * Handles the change by queuing update for the instance.em
   * @protected
   * @final
   */
  handleChange: function() {
    pstj.ds.DtoBase.addToQueue_(this);
  },

  /** @override */
  toJSON: function() {
    throw new Error('Serialization not implemented');
  },

  /**
   * Configures the instance based on a new map with values.
   * @param {Object<string, *>} map
   */
  fromJSON: function(map) {
    this.handleChange();
  },

  statics: {
    /**
     * The events that this class can produce.
     * @enum {string}
     */
    EventType: {
      CHANGE: goog.events.getUniqueId('change'),
      SORT: goog.events.getUniqueId('sort')
    },

    /**
     * @final
     * @private
     * @type {!goog.async.Delay}
     */
    updateDelay_: (new goog.async.Delay(function() {
      if (!goog.array.isEmpty(pstj.ds.DtoBase.updateQueue_)) {
        goog.array.forEach(pstj.ds.DtoBase.updateQueue_, function(item) {
          item.dispatchEvent(pstj.ds.DtoBase.EventType.CHANGE);
        });
        goog.array.clear(pstj.ds.DtoBase.updateQueue_);
      }
    }, 200)),

    /**
     * @final
     * @private
     * @type {Array<pstj.ds.DtoBase>}
     */
    updateQueue_: [],

    /**
     * Adds an item to the update queue. The queue is pushed back for at least
     * the end of the update cycle so no duplicates will be possible.
     * @param {pstj.ds.DtoBase} item The instance we need to dispatch update
     *    event for.
     * @private
     */
    addToQueue_: function(item) {
      goog.array.insert(pstj.ds.DtoBase.updateQueue_, item);
      pstj.ds.DtoBase.updateDelay_.start();
    }
  }
});
