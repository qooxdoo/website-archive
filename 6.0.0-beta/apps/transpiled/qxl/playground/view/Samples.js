(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "qx.ui.basic.Label": {
        "construct": true
      },
      "qx.ui.list.List": {},
      "qx.event.type.Event": {},
      "qx.locale.Manager": {},
      "qx.ui.toolbar.ToolBar": {},
      "qx.ui.toolbar.Button": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /**
   * Container for the examples.
   *
   * @ignore(require)
   * @ignore(ace)
   * @asset(qxl/playground/*)
   * @asset(qx/icon/${qx.icontheme}/16/actions/document-save.png)
   * @asset(qx/icon/${qx.icontheme}/16/places/user-trash.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/document-save-as.png)
   * @asset(qx/icon/${qx.icontheme}/16/actions/format-text-direction-ltr.png)
   */
  qx.Class.define("qxl.playground.view.Samples", {
    extend: qx.ui.container.Composite,
    construct: function construct() {
      qx.ui.container.Composite.constructor.call(this); // layout stuff

      var layout = new qx.ui.layout.VBox();
      this.setLayout(layout);
      this.setDecorator("main"); // caption

      var caption = new qx.ui.basic.Label(this.tr("Samples")).set({
        font: "bold",
        padding: 5,
        allowGrowX: true,
        allowGrowY: true
      });
      this.add(caption); // list

      this.add(this._createList(), {
        flex: 1
      }); // toolbar

      this.add(this._createToolbar()); // make sure we are on a white background

      this.setBackgroundColor("white");
    },
    events: {
      /** Change event which signals the change of an example.*/
      "selectSample": "qx.event.type.Data",

      /** Event triggered by the save button. */
      "save": "qx.event.type.Event",

      /** Event triggered by the save as button. */
      "saveAs": "qx.event.type.Event",

      /** Event triggered by the delete button. */
      "delete": "qx.event.type.Event",

      /** Event triggered by the rename button. */
      "rename": "qx.event.type.Event",

      /** Cancelable event fired before the selection changes. */
      "beforeSelectSample": "qx.event.type.Event"
    },
    properties: {
      /** Model property which contains the data for showing the examples. */
      model: {
        check: "qx.data.IListData",
        event: "changeModel",
        apply: "_applyModel"
      },

      /** Storage for the application mode. */
      mode: {
        check: "String",
        apply: "_applyMode",
        init: ""
      },

      /** Storage for the current selected sample, if any. */
      currentSample: {
        apply: "_applyCurrentSample",
        nullable: true
      }
    },
    members: {
      __list: null,
      __deleteButton: null,
      __renameButton: null,

      /**
       * Selects the given example. If non is given, the selection will be
       * removed.
       * @param sample {qx.core.Obejct} The sample to select.
       */
      select: function select(sample) {
        this.__list.getSelection().setItem(0, sample);
      },

      /**
       * Selects a sample by the given code.
       * @param code {String} The code which the sample contains.
       */
      selectByCode: function selectByCode(code) {
        var model = this.__list.getModel();

        for (var i = 0; i < model.length; i++) {
          if (model.getItem(i).getCode() == code) {
            this.select(model.getItem(i));
            return;
          }
        }
      },

      /**
       * Creating helper which is responsible for creating the list.
       */
      _createList: function _createList() {
        // create and configure the list
        this.__list = new qx.ui.list.List();

        this.__list.setAppearance("sample-list");

        this.__list.setLabelPath("name"); // CAREFUL: HACK TO GET THE SELECTION PREVENTED


        this.__list._manager.detatchPointerEvents(); // store the old pointer handler


        var oldHandler = this.__list._manager.handleTap;
        var self = this; // attach a new handler function

        this.__list._manager.handleTap = function (e) {
          // fire the cancelable event
          var changeOk = self.fireEvent("beforeSelectSample", qx.event.type.Event, [false, true]);

          if (changeOk) {
            // if not canceled, execute the original handler
            oldHandler.call(self.__list._manager, e);
          }
        };

        this.__list._manager.attachPointerEvents(); // ////////////////////////////////////////////
        // set the delegate


        this.__list.setDelegate({
          // filter: only show samples for the current mode
          filter: function filter(data) {
            return data.getMode() == self.getMode();
          },
          // group the samples by category
          group: function group(data) {
            if (data.getCategory() == "static") {
              return qx.locale.Manager.tr("Static");
            } else {
              return qx.locale.Manager.tr("User");
            }
          }
        }); // selection change handler


        this.__list.getSelection().addListener("change", function () {
          var sample = this.__list.getSelection().getItem(0);

          if (sample) {
            this.fireDataEvent("selectSample", sample);
          }
        }, this);

        return this.__list;
      },

      /**
       * Helper for creating the toolbar.
       */
      _createToolbar: function _createToolbar() {
        // crate and initialize the toolbar
        var toolbar = new qx.ui.toolbar.ToolBar();
        toolbar.setDecorator("separator-vertical");
        toolbar.setBackgroundColor("white"); // save button

        var saveButton = new qx.ui.toolbar.Button(null, "icon/16/actions/document-save.png");
        toolbar.add(saveButton);
        saveButton.setToolTipText(this.tr("Save"));
        saveButton.addListener("execute", function () {
          this.fireEvent("save");
        }, this); // save as button

        var saveAsButton = new qx.ui.toolbar.Button(null, "icon/16/actions/document-save-as.png");
        toolbar.add(saveAsButton);
        saveAsButton.setToolTipText(this.tr("Save As"));
        saveAsButton.addListener("execute", function () {
          this.fireEvent("saveAs");
        }, this); // delete button

        this.__deleteButton = new qx.ui.toolbar.Button(null, "icon/16/places/user-trash.png");
        toolbar.add(this.__deleteButton);

        this.__deleteButton.setToolTipText(this.tr("Delete"));

        this.__deleteButton.addListener("execute", function () {
          this.fireEvent("delete");
        }, this); // rename button


        this.__renameButton = new qx.ui.toolbar.Button(null, "icon/16/actions/format-text-direction-ltr.png");
        toolbar.add(this.__renameButton);

        this.__renameButton.setToolTipText(this.tr("Rename"));

        this.__renameButton.addListener("execute", function () {
          this.fireEvent("rename");
        }, this);

        return toolbar;
      },
      // property apply
      _applyCurrentSample: function _applyCurrentSample(value) {
        this.select(value); // only change the state of the buttons of they are available

        if (this.__deleteButton && this.__renameButton) {
          if (value && value.getCategory() != "static") {
            this.__deleteButton.setEnabled(true);

            this.__renameButton.setEnabled(true);
          } else {
            this.__deleteButton.setEnabled(false);

            this.__renameButton.setEnabled(false);
          }
        }
      },
      // property apply
      _applyModel: function _applyModel(value) {
        if (value) {
          this.__list.setModel(value);
        }
      },
      // property apply
      _applyMode: function _applyMode(value) {
        // refresh is needed because the filter has changed
        this.__list.refresh();
      }
    }
  });
  qxl.playground.view.Samples.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Samples.js.map?dt=1562140830331