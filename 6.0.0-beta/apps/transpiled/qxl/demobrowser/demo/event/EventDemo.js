(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.handler.Input": {},
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "qx.bom.Element": {}
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
   * Native pointer events
   *
   * @tag noPlayground
   *
   * @use(qx.event.handler.Input)
   */
  qx.Class.define("qxl.demobrowser.demo.event.EventDemo", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.event.EventDemo.prototype.main.base.call(this);
        var btnClear = document.getElementById("btnClear");

        if (btnClear) {
          qx.bom.Element.addListener(btnClear, "tap", this._clearLog, this);
        }
      },
      _initLogger: function _initLogger(columns, el, maxLogSize) {
        this.__tableHead = "<table><tr><th>" + columns.join("</th><th>") + "</th></tr>";
        this.__maxLogSize = maxLogSize || 50;
        this.__logDiv = el;

        this._clearLog();
      },
      _clearLog: function _clearLog() {
        this.__logDiv.innerHTML = this.__tableHead + "</table>";
        this.__logs = [];
      },
      _log: function _log(values) {
        this.__logs.unshift(values);

        this.__logs = this.__logs.slice(0, this.__maxLogSize);
        var str = [this.__tableHead];

        for (var i = 0; i < this.__logs.length; i++) {
          str.push("<tr><td>", this.__logs[i].join("</td><td>"), "</td></tr>");
        }

        str.push("</table>");
        this.__logDiv.innerHTML = str.join("");
        this.__logDiv.scrollTop = 0;
      },
      __tableHead: null,
      __maxLogSize: null,
      __logDiv: null,
      __logs: null
    },

    /*
     *****************************************************************************
        DESTRUCT
     *****************************************************************************
     */
    destruct: function destruct() {
      this.__logDiv = this.__logs = null;
    }
  });
  qxl.demobrowser.demo.event.EventDemo.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=EventDemo.js.map?dt=1562276971105