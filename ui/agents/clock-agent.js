goog.provide('pstj.ui.ClockAgent');

goog.require('pstj.ds.IClock');
goog.require('pstj.ds.TimeProvider');
goog.require('pstj.ui.Agent');

/**
 * Provides agent for the time providing data source. It will use the model of
 *   the component to set the time as an object with property time.
 * @constructor
 * @extends {pstj.ui.Agent}
 * @implements {pstj.ds.IClock}
 */
pstj.ui.ClockAgent = function() {
  goog.base(this, null);
  /**
   * @protected
   * @type {number}
   */
  this.time = 0;
  /**
   * @private
   * @type {pstj.ds.TimeProvider}
   */
  this.timeprovier_ = pstj.ds.TimeProvider.getInstance();
  this.setTimeProvider(this.timeprovider_);
};
goog.inherits(pstj.ui.ClockAgent, pstj.ui.Agent);
goog.addSingletonGetter(pstj.ui.ClockAgent);

goog.scope(function() {

  var _ = pstj.ui.ClockAgent.prototype;

  /**
   * Allows the developer to set prefered time provider.
   * @param {pstj.ds.TimeProvider} time_provider The time provider to use.
   */
  _.setTimeProvider = function(time_provider) {
    this.timeprovider_.removeSubscriber(this);
    this.timeprovider_ = time_provider;
    this.timeprovider_.addSubscriber(this);
  };

  /**
   * Implements the interface for time provider.
   * @param {!number} time The current system time.
   */
  _.setTime = function(time) {
    this.time = time;
    this.forEach(this.set_, this);
  };

  /** @inheritDoc */
  _.updateCache = function(component) {
    component.setModel(this.time);
  };

  /**
   * Sets the time, function is internal.
   * @param {goog.ui.Component} component The component to update.
   * @private
   */
  _.set_ = function(component) {
    this.updateCache(component);
  };

});