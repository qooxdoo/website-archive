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
      "qx.ui.layout.VBox": {},
      "qx.ui.container.Composite": {},
      "qx.ui.indicator.ProgressBar": {},
      "qx.ui.form.Slider": {},
      "qx.ui.basic.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Adrian Olaru (adrianolaru)
  
  ************************************************************************ */
  qx.Class.define("qxl.demobrowser.demo.widget.ProgressBar", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.widget.ProgressBar.prototype.main.base.call(this);
        var root = this.getRoot();
        var box = new qx.ui.layout.VBox();
        var container = new qx.ui.container.Composite(box);
        var pb = new qx.ui.indicator.ProgressBar(0, 200);
        var slider = new qx.ui.form.Slider().set({
          minimum: 0,
          maximum: 200
        });
        var info = new qx.ui.basic.Label();
        root.add(container, {
          left: 0,
          top: 0
        });
        container.add(pb);
        container.add(slider);
        container.add(info);
        box.setSpacing(10);
        container.setPadding(20);
        info.setValue("Completed: 0 (0%)"); //set up the progressbar value with slider's value

        slider.addListener("changeValue", function (e) {
          pb.setValue(e.getData());
        }); //get real time change from the progressbar

        pb.addListener("change", function (e) {
          info.setValue("Completed: " + pb.getValue() + " (" + e.getData() + "%)");
          info.setTextColor("black");
        }); //when complete make the info text green

        pb.addListener("complete", function (e) {
          info.setTextColor("green");
        });
      }
    }
  });
  qxl.demobrowser.demo.widget.ProgressBar.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=ProgressBar.js.map?dt=1562140828674