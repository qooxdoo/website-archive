(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.ui.layout.Grid": {},
      "qx.ui.container.Composite": {},
      "qx.ui.virtual.core.Scroller": {},
      "qx.ui.virtual.layer.GridLines": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
     * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * @tag test
   */
  qx.Class.define("qxl.demobrowser.demo.virtual.Pane_GridLines", {
    extend: qx.application.Standalone,

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       */
      main: function main() {
        // Call super class
        qxl.demobrowser.demo.virtual.Pane_GridLines.prototype.main.base.call(this);
        var layout = new qx.ui.layout.Grid(5, 5);
        layout.setRowFlex(0, 1);
        layout.setColumnFlex(0, 1);
        layout.setColumnFlex(1, 1);
        layout.setColumnFlex(2, 1);
        var container = new qx.ui.container.Composite(layout);
        this.getRoot().add(container, {
          edge: 5
        });
        var scroller = new qx.ui.virtual.core.Scroller(100, 10000, 60, 100);
        var gl1 = new qx.ui.virtual.layer.GridLines("horizontal");
        gl1.setLineSize(1, 3);
        gl1.setLineColor(2, "red");
        var gl2 = new qx.ui.virtual.layer.GridLines("vertical");
        scroller.getPane().addLayer(gl1);
        scroller.getPane().addLayer(gl2);
        container.add(scroller, {
          row: 0,
          column: 0
        });
        var scroller = new qx.ui.virtual.core.Scroller(100, 10000, 60, 100);
        var gl3 = new qx.ui.virtual.layer.GridLines("vertical");
        gl3.setLineSize(1, 5);
        gl3.setLineColor(1, "blue");
        scroller.getPane().addLayer(gl3);
        container.add(scroller, {
          row: 0,
          column: 1
        });
        var scroller = new qx.ui.virtual.core.Scroller(100, 10000, 60, 100);
        var gl4 = new qx.ui.virtual.layer.GridLines("horizontal");
        scroller.getPane().addLayer(gl4);
        container.add(scroller, {
          row: 0,
          column: 2
        });
      }
    }
  });
  qxl.demobrowser.demo.virtual.Pane_GridLines.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Pane_GridLines.js.map?dt=1562187679284