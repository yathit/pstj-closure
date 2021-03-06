/**
 * @fileoverview The main incentive behind this class implementation is to allow
 * the use of translation in place of absolute positioning to emulate smoother
 * movement on large screens for gradded objects. Beyond that the class is the
 * same as the default dragger provided by google.
 *
 * @author regardingscot@gmail.com (PeterStJ)
 */

goog.provide('pstj.fx.Dragger');

goog.require('goog.async.AnimationDelay');
goog.require('goog.fx.Dragger');
goog.require('pstj.style.css');



/**
 * A class that allows mouse or touch-based dragging (moving) of an element.
 * Extends the original dragger and replaces the movement with a transformation.
 *
 * @constructor
 * @extends {goog.fx.Dragger}
 * @param {Element} target The element that will be dragged.
 * @param {Element=} opt_handle An optional handle to control the drag, if
 *   null the target is used.
 * @param {goog.math.Rect=} opt_limits Object containing left, top, width, and
 *   height.
 */
pstj.fx.Dragger = function(target, opt_handle, opt_limits) {
  goog.base(this, target, opt_handle, opt_limits);
  /**
   * Amount of pixels to offset the drag element with from the mouse in order to
   *   allow the underlying drop target to detect the mouse events.
   * @type {!number}
   * @protected
   */
  this.dragPadding = 0;
  /**
   * Stores the last known X position where the =dragged element should be put
   *   on.
   * @type {number}
   * @private
   */
  this.paintX_ = 0;
  /**
   * Stores the last known Y position where the dragged element should be put
   *   on.
   * @type {number}
   * @private
   */
  this.paintY_ = 0;
  /**
   * Flag if the last known position has been changed and redraw is required.
   * @type {boolean}
   * @private
   */
  this.isDirty_ = false;
  /**
   * Fererence to the RAF object.
   * @type {goog.async.AnimationDelay}
   * @private
   */
  this.raf_ = new goog.async.AnimationDelay(goog.bind(this.updateUI, this));
};
goog.inherits(pstj.fx.Dragger, goog.fx.Dragger);


/**
 * Notifies the state machine of the dragger that the paint is required at a
 *  later stage.
 */
pstj.fx.Dragger.prototype.repaint = function() {
  this.isDirty_ = true;
  if (!this.raf_.isActive()) this.raf_.start();
};


/**
 * The repaint method of the dragger. It is called by the RAF.
 * @protected
 */
pstj.fx.Dragger.prototype.updateUI = function() {
  if (!this.isDirty_) {
    this.onUpdateCycleEnd();
    return;
  }
  this.isDirty_ = false;
  this.raf_.start();
  pstj.style.css.setTranslation(this.target, this.paintX_, this.paintY_);
};


/**
 * Allows the implementors to invoke function when the update cycle (animation
 *   frames) ends. This will allow to continue on postponed work if one was
 *   queued to prevent dropping of frames durring animation.
 * @protected
 */
pstj.fx.Dragger.prototype.onUpdateCycleEnd = goog.nullFunction;


/** @inheritDoc */
pstj.fx.Dragger.prototype.defaultAction = function(x, y) {
  if (pstj.style.css.canUseTransform) {
    this.calculatePaintPositions(x, y);
    this.repaint();
  } else {
    goog.base(this, 'defaultAction', x, y);
  }
};


/**
 * Calculates the next paint positions.
 * @param {number} x The X of the coordinate.
 * @param {number} y The Y of the coordinate.
 * @protected
 */
pstj.fx.Dragger.prototype.calculatePaintPositions = function(x, y) {
  this.paintX_ = ((this.startX - x) * -1) + this.dragPadding;
  this.paintY_ = ((this.startY - y) * -1) + this.dragPadding;
};


/** @inheritDoc */
pstj.fx.Dragger.prototype.disposeInternal = function() {
  this.raf_.dispose();
  goog.base(this, 'disposeInternal');
};


/** @inheritDoc */
pstj.fx.Dragger.prototype.doDrag = function(e, x, y, dragFromScroll) {
  this.defaultAction(e.clientX, e.clientY);
  this.dispatchEvent(new goog.fx.DragEvent(
      goog.fx.Dragger.EventType.DRAG, this, e.clientX, e.clientY, e, x, y));
};
