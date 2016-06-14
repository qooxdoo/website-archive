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
     2007-2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Romeo Kenfack (rkenfack)

************************************************************************ */
/**
 * Module for handling of HTML5 data-* attributes
 */
qx.Bootstrap.define("qx.module.Dataset", {
  statics : {
    /**
     * Sets an HTML "data-*" attribute on each item in the collection
     *
     * @attach {qxWeb}
     * @param name {String} Name of the attribute [CamelCase variant]
     * @param value {var} New value of the attribute
     * @return {qxWeb} The collection for chaining
     */
    setData : function(name, value){

      this._forEachElement(function(item){

        qx.bom.element.Dataset.set(item, name, value);
      });
      return this;
    },
    /**
     *
     * Returns the value of the given HTML "data-*" attribute for the first item in the collection
     *
     * @attach {qxWeb}
     * @param name {String} Name of the attribute [CamelCase variant]
     * @return {var} The value of the attribute
     *
     */
    getData : function(name){

      if(this[0] && this[0].nodeType === 1){

        return qx.bom.element.Dataset.get(this[0], name);
      };
    },
    /**
     * Returns a map containing all the HTML "data-*" attributes of the specified element
     *
     * @attach {qxWeb}
     * @return {Map} The map containing the "data-*" attributes
     *
     */
    getAllData : function(){

      if(this[0] && this[0].nodeType === 1){

        return qx.bom.element.Dataset.getAll(this[0]);
      };
      return {
      };
    },
    /**
    * Checks if any element in the collection has a "data-*" attribute
    * @return {Boolean} True if any element in the collection has a "data-*" attribute
    */
    hasData : function(){

      return qx.bom.element.Dataset.hasData(this[0]);
    },
    /**
     * Remove an HTML "data-*" attribute from the given DOM element
     *
     * @attach {qxWeb}
     * @param name {String} Name of the attribute
     * @return {qxWeb} The collection for chaining
     */
    removeData : function(name){

      if(this[0] && this[0].nodeType === 1){

        qx.bom.element.Dataset.remove(this[0], name);
      };
      return this;
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      "getData" : statics.getData,
      "setData" : statics.setData,
      "removeData" : statics.removeData,
      "getAllData" : statics.getAllData,
      "hasData" : statics.hasData
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Author:
     * Gabriel Munteanu (gabios)

************************************************************************ */
/**
 * Data-* attribute handling for DOM HTML elements.
 *
 * This feature set is supported cross-browser
 * through one common interface and is independent of the differences between
 * the multiple implementations.
 *
 */
qx.Bootstrap.define("qx.bom.element.Dataset", {
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */
  statics : {
    /**
     * Sets a data attribute on the given DOM element.
     *
     * @param element {Element} The DOM element to modify
     * @param name {String} Name of the attribute [CamelCase variant]
     * @param value {var} New value of the attribute
     */
    set : function(element, name, value){

      if(element.dataset){

        name = qx.lang.String.camelCase(name);
        if((value === null) || (value == undefined)){

          delete element.dataset[name];
        } else {

          element.dataset[name] = value;
        };
      } else {

        if(value === undefined){

          value = null;
        };
        qx.bom.element.Attribute.set(element, "data-" + qx.lang.String.hyphenate(name), value);
      };
    },
    /**
     * Returns the value of the given HTML "data-*" attribute
     *
     * @param element {Element} The DOM element to query
     * @param name {String} Name of the attribute [CamelCase variant]
     * @return {var} The value of the attribute
     *
     */
    get : function(element, name){

      if(element.dataset){

        name = qx.lang.String.camelCase(name);
        return (!element.dataset[name] ? undefined : element.dataset[name]);
      } else {

        var attrName = "data-" + qx.lang.String.hyphenate(name);
        return element.hasAttribute(attrName) ? qx.bom.element.Attribute.get(element, attrName) : undefined;
      };
    },
    /**
     * Returns a map containing all the HTML "data-*" attributes of the specified element
     *
     * @param element {Element} The DOM element to query
     * @return {Map} The map containing all the "data-*" attributes
     */
    getAll : function(element){

      if(element.dataset){

        return element.dataset;
      } else {

        var res = {
        },attr = element.attributes;
        for(var i = 0;i < attr.length;i++){

          if(attr[i].name.match(RegExp("^data-(.*)"))){

            var key = RegExp.$1;
            res[qx.lang.String.camelCase(key)] = element.getAttribute(attr[i].name);
          };
        };
        return res;
      };
    },
    /**
    * Checks if any element in the collection has a "data-*" attribute
    * @param element {Element} The DOM Element to check the presence of data-* attrubutes on.
    * @return {Boolean} True if any element in the collection has a "data-*" attribute
    */
    hasData : function(element){

      return Object.keys(qxWeb(element).getAllData()).length > 0;
    },
    /**
     * Remove an HTML "data-*" attribute from the given DOM element
     *
     * @param element {Element} The DOM element to modify
     * @param name {String} Name of the attribute
     */
    remove : function(element, name){

      this.set(element, name, undefined);
    }
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