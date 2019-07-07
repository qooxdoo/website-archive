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
      "qx.ui.tabview.TabView": {},
      "qx.ui.tabview.Page": {},
      "qx.ui.layout.Grow": {},
      "qx.ui.window.Manager": {},
      "qx.ui.window.Desktop": {},
      "qx.ui.window.Window": {}
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
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   *
   * @asset(qx/icon/${qx.icontheme}/32/actions/go-home.png)
   */
  qx.Class.define("qxl.demobrowser.demo.widget.Desktop", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.widget.Desktop.prototype.main.base.call(this);
        var tabView = new qx.ui.tabview.TabView();
        this.getRoot().add(tabView, {
          edge: 0
        });
        var page = new qx.ui.tabview.Page("Desktop", "icon/32/actions/go-home.png");
        page.setLayout(new qx.ui.layout.Grow());
        tabView.add(page);
        var windowManager = new qx.ui.window.Manager();
        var desktop = new qx.ui.window.Desktop(windowManager);
        desktop.set({
          decorator: "main",
          backgroundColor: "background-pane"
        });
        page.add(desktop);
        var winDefs = [[300, 200, 30, 50], [250, 250, 150, 70], [400, 300, 300, 60]];

        for (var i = 0; i < winDefs.length; i++) {
          var def = winDefs[i];
          var win = new qx.ui.window.Window("Window #" + (i + 1)).set({
            width: def[0],
            height: def[1],
            showClose: false,
            showMinimize: false
          });
          win.moveTo(def[2], def[3]);
          desktop.add(win);
          win.open();
        }
      }
    }
  });
  qxl.demobrowser.demo.widget.Desktop.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Desktop.js.map?dt=1562512204609