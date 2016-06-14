/** qooxdoo v4.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
(function(){
if (!window.qx) window.qx = qxWeb.$$qx;
var qx = window.qx;

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"json":true,"qx.application":"library.Application","qx.debug":true,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.debug.io":false,"qx.debug.ui.queue":false,"qx.globalErrorHandling":false,"qx.optimization.variants":true,"qx.revision":"","qx.theme":"qx.theme.Modern","qx.version":"4.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

qx.$$packageData = {};

/** qooxdoo v4.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
qx.$$packageData['0']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */
/**
 * Abstract class to compute the position of an object on one axis.
 */
qx.Bootstrap.define("qx.util.placement.AbstractAxis", {
  extend : Object,
  statics : {
    /**
     * Computes the start of the object on the axis
     *
     * @param size {Integer} Size of the object to align
     * @param target {Map} Location of the object to align the object to. This map
     *   should have the keys <code>start</code> and <code>end</code>.
     * @param offsets {Map} Map with all offsets on each side.
     *   Comes with the keys <code>start</code> and <code>end</code>.
     * @param areaSize {Integer} Size of the axis.
     * @param position {String} Alignment of the object on the target. Valid values are
     *   <ul>
     *   <li><code>edge-start</code> The object is placed before the target</li>
     *   <li><code>edge-end</code> The object is placed after the target</li>
     *   <li><code>align-start</code>The start of the object is aligned with the start of the target</li>
     *   <li><code>align-center</code>The center of the object is aligned with the center of the target</li>
     *   <li><code>align-end</code>The end of the object is aligned with the end of the object</li>
     *   </ul>
     * @return {Integer} The computed start position of the object.
     * @abstract
     */
    computeStart : function(size, target, offsets, areaSize, position){

      throw new Error("abstract method call!");
    },
    /**
     * Computes the start of the object by taking only the attachment and
     * alignment into account. The object by be not fully visible.
     *
     * @param size {Integer} Size of the object to align
     * @param target {Map} Location of the object to align the object to. This map
     *   should have the keys <code>start</code> and <code>end</code>.
     * @param offsets {Map} Map with all offsets on each side.
     *   Comes with the keys <code>start</code> and <code>end</code>.
     * @param position {String} Accepts the same values as the <code> position</code>
     *   argument of {@link #computeStart}.
     * @return {Integer} The computed start position of the object.
     */
    _moveToEdgeAndAlign : function(size, target, offsets, position){

      switch(position){case "edge-start":
      return target.start - offsets.end - size;case "edge-end":
      return target.end + offsets.start;case "align-start":
      return target.start + offsets.start;case "align-center":
      return target.start + parseInt((target.end - target.start - size) / 2, 10) + offsets.start;case "align-end":
      return target.end - offsets.end - size;};
    },
    /**
     * Whether the object specified by <code>start</code> and <code>size</code>
     * is completely inside of the axis' range..
     *
     * @param start {Integer} Computed start position of the object
     * @param size {Integer} Size of the object
     * @param areaSize {Integer} The size of the axis
     * @return {Boolean} Whether the object is inside of the axis' range
     */
    _isInRange : function(start, size, areaSize){

      return start >= 0 && start + size <= areaSize;
    }
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */
/**
 * Places the object directly at the specified position. It is not moved if
 * parts of the object are outside of the axis' range.
 */
qx.Bootstrap.define("qx.util.placement.DirectAxis", {
  statics : {
    /**
     * Computes the start of the object by taking only the attachment and
     * alignment into account. The object by be not fully visible.
     *
     * @param size {Integer} Size of the object to align
     * @param target {Map} Location of the object to align the object to. This map
     *   should have the keys <code>start</code> and <code>end</code>.
     * @param offsets {Map} Map with all offsets on each side.
     *   Comes with the keys <code>start</code> and <code>end</code>.
     * @param position {String} Accepts the same values as the <code> position</code>
     *   argument of {@link #computeStart}.
     * @return {Integer} The computed start position of the object.
     */
    _moveToEdgeAndAlign : qx.util.placement.AbstractAxis._moveToEdgeAndAlign,
    /**
     * Computes the start of the object on the axis
     *
     * @param size {Integer} Size of the object to align
     * @param target {Map} Location of the object to align the object to. This map
     *   should have the keys <code>start</code> and <code>end</code>.
     * @param offsets {Map} Map with all offsets on each side.
     *   Comes with the keys <code>start</code> and <code>end</code>.
     * @param areaSize {Integer} Size of the axis.
     * @param position {String} Alignment of the object on the target. Valid values are
     *   <ul>
     *   <li><code>edge-start</code> The object is placed before the target</li>
     *   <li><code>edge-end</code> The object is placed after the target</li>
     *   <li><code>align-start</code>The start of the object is aligned with the start of the target</li>
     *   <li><code>align-center</code>The center of the object is aligned with the center of the target</li>
     *   <li><code>align-end</code>The end of the object is aligned with the end of the object</li>
     *   </ul>
     * @return {Integer} The computed start position of the object.
     */
    computeStart : function(size, target, offsets, areaSize, position){

      return this._moveToEdgeAndAlign(size, target, offsets, position);
    }
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */
/**
 * Places the object to the target. If parts of the object are outside of the
 * range this class places the object at the best "edge", "alignment"
 * combination so that the overlap between object and range is maximized.
 */
qx.Bootstrap.define("qx.util.placement.KeepAlignAxis", {
  statics : {
    /**
     * Computes the start of the object by taking only the attachment and
     * alignment into account. The object by be not fully visible.
     *
     * @param size {Integer} Size of the object to align
     * @param target {Map} Location of the object to align the object to. This map
     *   should have the keys <code>start</code> and <code>end</code>.
     * @param offsets {Map} Map with all offsets on each side.
     *   Comes with the keys <code>start</code> and <code>end</code>.
     * @param position {String} Accepts the same values as the <code> position</code>
     *   argument of {@link #computeStart}.
     * @return {Integer} The computed start position of the object.
     */
    _moveToEdgeAndAlign : qx.util.placement.AbstractAxis._moveToEdgeAndAlign,
    /**
     * Whether the object specified by <code>start</code> and <code>size</code>
     * is completely inside of the axis' range..
     *
     * @param start {Integer} Computed start position of the object
     * @param size {Integer} Size of the object
     * @param areaSize {Integer} The size of the axis
     * @return {Boolean} Whether the object is inside of the axis' range
     */
    _isInRange : qx.util.placement.AbstractAxis._isInRange,
    /**
     * Computes the start of the object on the axis
     *
     * @param size {Integer} Size of the object to align
     * @param target {Map} Location of the object to align the object to. This map
     *   should have the keys <code>start</code> and <code>end</code>.
     * @param offsets {Map} Map with all offsets on each side.
     *   Comes with the keys <code>start</code> and <code>end</code>.
     * @param areaSize {Integer} Size of the axis.
     * @param position {String} Alignment of the object on the target. Valid values are
     *   <ul>
     *   <li><code>edge-start</code> The object is placed before the target</li>
     *   <li><code>edge-end</code> The object is placed after the target</li>
     *   <li><code>align-start</code>The start of the object is aligned with the start of the target</li>
     *   <li><code>align-center</code>The center of the object is aligned with the center of the target</li>
     *   <li><code>align-end</code>The end of the object is aligned with the end of the object</li>
     *   </ul>
     * @return {Integer} The computed start position of the object.
     */
    computeStart : function(size, target, offsets, areaSize, position){

      var start = this._moveToEdgeAndAlign(size, target, offsets, position);
      var range1End,range2Start;
      if(this._isInRange(start, size, areaSize)){

        return start;
      };
      if(position == "edge-start" || position == "edge-end"){

        range1End = target.start - offsets.end;
        range2Start = target.end + offsets.start;
      } else {

        range1End = target.end - offsets.end;
        range2Start = target.start + offsets.start;
      };
      if(range1End > areaSize - range2Start){

        start = Math.max(0, range1End - size);
      } else {

        start = range2Start;
      };
      return start;
    }
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */
/**
 * Places the object according to the target. If parts of the object are outside
 * of the axis' range the object's start is adjusted so that the overlap between
 * the object and the axis is maximized.
 */
qx.Bootstrap.define("qx.util.placement.BestFitAxis", {
  statics : {
    /**
     * Whether the object specified by <code>start</code> and <code>size</code>
     * is completely inside of the axis' range..
     *
     * @param start {Integer} Computed start position of the object
     * @param size {Integer} Size of the object
     * @param areaSize {Integer} The size of the axis
     * @return {Boolean} Whether the object is inside of the axis' range
     */
    _isInRange : qx.util.placement.AbstractAxis._isInRange,
    /**
     * Computes the start of the object by taking only the attachment and
     * alignment into account. The object by be not fully visible.
     *
     * @param size {Integer} Size of the object to align
     * @param target {Map} Location of the object to align the object to. This map
     *   should have the keys <code>start</code> and <code>end</code>.
     * @param offsets {Map} Map with all offsets on each side.
     *   Comes with the keys <code>start</code> and <code>end</code>.
     * @param position {String} Accepts the same values as the <code> position</code>
     *   argument of {@link #computeStart}.
     * @return {Integer} The computed start position of the object.
     */
    _moveToEdgeAndAlign : qx.util.placement.AbstractAxis._moveToEdgeAndAlign,
    /**
     * Computes the start of the object on the axis
     *
     * @param size {Integer} Size of the object to align
     * @param target {Map} Location of the object to align the object to. This map
     *   should have the keys <code>start</code> and <code>end</code>.
     * @param offsets {Map} Map with all offsets on each side.
     *   Comes with the keys <code>start</code> and <code>end</code>.
     * @param areaSize {Integer} Size of the axis.
     * @param position {String} Alignment of the object on the target. Valid values are
     *   <ul>
     *   <li><code>edge-start</code> The object is placed before the target</li>
     *   <li><code>edge-end</code> The object is placed after the target</li>
     *   <li><code>align-start</code>The start of the object is aligned with the start of the target</li>
     *   <li><code>align-center</code>The center of the object is aligned with the center of the target</li>
     *   <li><code>align-end</code>The end of the object is aligned with the end of the object</li>
     *   </ul>
     * @return {Integer} The computed start position of the object.
     */
    computeStart : function(size, target, offsets, areaSize, position){

      var start = this._moveToEdgeAndAlign(size, target, offsets, position);
      if(this._isInRange(start, size, areaSize)){

        return start;
      };
      if(start < 0){

        start = Math.min(0, areaSize - size);
      };
      if(start + size > areaSize){

        start = Math.max(0, areaSize - size);
      };
      return start;
    }
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * The Placement module provides a convenient way to align two elements relative
 * to each other using various pre-defined algorithms.
 *
 * @require(qx.util.placement.KeepAlignAxis#computeStart)
 * @require(qx.util.placement.BestFitAxis#computeStart)
 * @require(qx.util.placement.DirectAxis#computeStart)
 */
qxWeb.define("qx.module.Placement", {
  statics : {
    /**
     * Moves the first element in the collection, aligning it with the given
     * target.
     *
     * <div>
     * <strong>NOTE:</strong> The <code>placeTo</code> method also works for hidden
     * elements. However, the visibility / display styles are only manipulated during
     * the placement operation. As a result a previously hidden element <strong>stays hidden</strong>
     * </div>
     *
     * <div>
     * <strong>NOTE:</strong> If the target is changing its position due e.g. a DOM manipulation the
     * placed element <strong>is not</strong> updated automatically. You have to call <code>placeTo</code>
     * again to place the element to the target. The element is <strong>always</strong> positioned by using
     * <code>position:absolute</code> independently on the chosen <code>position</code> and <code>mode</code>.
     * </div>
     *
     * @attach{qxWeb}
     * @param target {Element} Placement target
     * @param position {String} Alignment of the object with the target, any of
     * <code>"top-left"</code>, <code>"top-center"</code>, <code>"top-right"</code>,
     * <code>"bottom-left"</code>, <code>"bottom-center"</code>, <code>"bottom-right"</code>,
     * <code>"left-top"</code>, <code>"left-middle"</code>, <code>"left-bottom"</code>,
     * <code>"right-top"</code>, <code>"right-middle"</code>, <code>"right-bottom"</code>
     * @param offsets {Map?null} Map with the desired offsets between the two elements.
     * Must contain the keys <code>left</code>, <code>top</code>,
     * <code>right</code> and <code>bottom</code>
     * @param modeX {String?"direct"} Horizontal placement mode. Valid values are:
     *   <ul>
     *   <li><code>direct</code>: place the element directly at the given
     *   location.</li>
     *   <li><code>keep-align</code>: if the element is partially outside of the
     *   visible area, it is moved to the best fitting 'edge' and 'alignment' of
     *   the target.
     *   It is guaranteed the the new position attaches the object to one of the
     *   target edges and that it is aligned with a target edge.</li>
     *   <li><code>best-fit</code>: If the element is partially outside of the visible
     *   area, it is moved into the view port, ignoring any offset and position
     *   values.</li>
     *   </ul>
     * @param modeY {String?"direct"} Vertical placement mode. Accepts the same values as
     *   the 'modeX' argument.
     * @return {qxWeb} The collection for chaining
     */
    placeTo : function(target, position, offsets, modeX, modeY){

      if(!this[0] || !target){

        return this;
      };
      target = qxWeb(target);
      // make sure the DOM elements are rendered so we can get the size of them.
      // It's not necessary to move them out of the viewport - just out of the
      // layout flow.
      var visible = this.isRendered();
      var displayStyleValue = null;
      var visibilityStyleValue = null;
      if(!visible){

        // do not use the computed style value otherwise we will mess up the styles
        // when resetting them, since these styles might also be set via a CSS class.
        displayStyleValue = this[0].style.display;
        visibilityStyleValue = this[0].style.visibility;
        this.setStyles({
          position : "absolute",
          visibility : "hidden",
          display : "block"
        });
      };
      var axes = {
        x : qx.module.Placement._getAxis(modeX),
        y : qx.module.Placement._getAxis(modeY)
      };
      var size = {
        width : this.getWidth(),
        height : this.getHeight()
      };
      var parent = this.getParents();
      var area = {
        width : parent.getWidth(),
        height : parent.getHeight()
      };
      offsets = offsets || {
        top : 0,
        right : 0,
        bottom : 0,
        left : 0
      };
      var split = position.split("-");
      var edge = split[0];
      var align = split[1];
      var newPosition = {
        x : qx.module.Placement._getPositionX(edge, align),
        y : qx.module.Placement._getPositionY(edge, align)
      };
      var targetLocation;
      var parentPositioning = parent.getStyle("position");
      if(parentPositioning == "relative" || parentPositioning == "static"){

        targetLocation = target.getOffset();
      } else {

        var targetPos = target.getPosition();
        targetLocation = {
          top : targetPos.top,
          bottom : targetPos.top + target.getHeight(),
          left : targetPos.left,
          right : targetPos.left + target.getWidth()
        };
      };
      var newLocation = qx.module.Placement._computePlacement(axes, size, area, targetLocation, offsets, newPosition);
      while(parent.length > 0){

        if(parent.getStyle("position") == "relative"){

          var offset = parent.getOffset();
          var borderTop = parseInt(parent.getStyle("border-top-width")) || 0;
          var borderLeft = parseInt(parent.getStyle("border-left-width")) || 0;
          newLocation.left -= (offset.left + borderLeft);
          newLocation.top -= (offset.top + borderTop);
          parent = [];
        } else {

          parent = parent.getParents();
        };
      };
      // Reset the styles to hide the element if it was previously hidden
      if(!visible){

        this[0].style.display = displayStyleValue;
        this[0].style.visibility = visibilityStyleValue;
      };
      this.setStyles({
        position : "absolute",
        left : newLocation.left + "px",
        top : newLocation.top + "px"
      });
      return this;
    },
    /**
     * Returns the appropriate axis implementation for the given placement
     * mode
     *
     * @param mode {String} Placement mode
     * @return {Object} Placement axis class
     */
    _getAxis : function(mode){

      switch(mode){case "keep-align":
      return qx.util.placement.KeepAlignAxis;case "best-fit":
      return qx.util.placement.BestFitAxis;case "direct":default:
      return qx.util.placement.DirectAxis;};
    },
    /**
     * Returns the computed coordinates for the element to be placed
     *
     * @param axes {Map} Map with the keys <code>x</code> and <code>y</code>. Values
     * are the axis implementations
     * @param size {Map} Map with the keys <code>width</code> and <code>height</code>
     * containing the size of the placement target
     * @param area {Map} Map with the keys <code>width</code> and <code>height</code>
     * containing the size of the two elements' common parent (available space for
     * placement)
     * @param target {Map} Location of the object to align the object to. This map
     * should have the keys <code>left</code>, <code>top</code>, <code>right</code>
     * and <code>bottom</code>
     * @param offsets {Map} Map of offsets (top, right, bottom, left)
     * @param position {Map} Map with the keys <code>x</code> and <code>y</code>,
     * containing the type of positioning for each axis
     * @return {Map} Map with the keys <code>left</code> and <code>top</code>
     * containing the computed coordinates to which the element should be moved
     */
    _computePlacement : function(axes, size, area, target, offsets, position){

      var left = axes.x.computeStart(size.width, {
        start : target.left,
        end : target.right
      }, {
        start : offsets.left,
        end : offsets.right
      }, area.width, position.x);
      var top = axes.y.computeStart(size.height, {
        start : target.top,
        end : target.bottom
      }, {
        start : offsets.top,
        end : offsets.bottom
      }, area.height, position.y);
      return {
        left : left,
        top : top
      };
    },
    /**
     * Returns the X axis positioning type for the given edge and alignment
     * values
     *
     * @param edge {String} edge value
     * @param align {String} align value
     * @return {String} X positioning type
     */
    _getPositionX : function(edge, align){

      if(edge == "left"){

        return "edge-start";
      } else if(edge == "right"){

        return "edge-end";
      } else if(align == "left"){

        return "align-start";
      } else if(align == "center"){

        return "align-center";
      } else if(align == "right"){

        return "align-end";
      };;;;
    },
    /**
     * Returns the Y axis positioning type for the given edge and alignment
     * values
     *
     * @param edge {String} edge value
     * @param align {String} align value
     * @return {String} Y positioning type
     */
    _getPositionY : function(edge, align){

      if(edge == "top"){

        return "edge-start";
      } else if(edge == "bottom"){

        return "edge-end";
      } else if(align == "top"){

        return "align-start";
      } else if(align == "middle"){

        return "align-center";
      } else if(align == "bottom"){

        return "align-end";
      };;;;
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      "placeTo" : statics.placeTo
    });
  }
});


var exp = envinfo["qx.export"];
if (exp) {
  for (var name in exp) {
    var c = exp[name].split(".");
    var root = window;
    for (var i=0; i < c.length; i++) {
      root = root[c[i]];
    };
    window[name] = root;
  }
}

window["qx"] = undefined;
try {
  delete window.qx;
} catch(e) {}

})();