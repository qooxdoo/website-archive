/** qooxdoo v3.0.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
(function(){
if (!window.qx) window.qx = qxWeb.$$qx;
var qx = window.qx;

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"json":true,"qx.application":"library.Application","qx.debug":false,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.debug.io":false,"qx.debug.ui.queue":false,"qx.globalErrorHandling":false,"qx.optimization.variants":true,"qx.revision":"","qx.theme":"qx.theme.Modern","qx.version":"3.0.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

qx.$$packageData = {};

/** qooxdoo v3.0.1 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
qx.$$packageData['0']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};

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
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * This module offers a cross browser storage implementation. The API is aligned
 * with the API of the HTML web storage (http://www.w3.org/TR/webstorage/) which is
 * also the preferred implementation used. As fallback for IE < 8, we use user data.
 * If both techniques are unsupported, we supply a in memory storage, which is
 * of course, not persistent.
 */
qx.Bootstrap.define("qx.module.Storage", {
  statics : {
    /**
     * Store an item in the storage.
     *
     * @attachStatic {qxWeb, localStorage.setItem}
     * @param key {String} The identifier key.
     * @param value {var} The data, which will be stored as JSON.
     */
    setLocalItem : function(key, value){

      qx.bom.Storage.getLocal().setItem(key, value);
    },
    /**
     * Returns the stored item.
     *
     * @attachStatic {qxWeb, localStorage.getItem}
     * @param key {String} The identifier to get the data.
     * @return {var} The stored data.
     */
    getLocalItem : function(key){

      return qx.bom.Storage.getLocal().getItem(key);
    },
    /**
     * Removes an item form the storage.
     * @attachStatic {qxWeb, localStorage.removeItem}
     * @param key {String} The identifier.
     */
    removeLocalItem : function(key){

      qx.bom.Storage.getLocal().removeItem(key);
    },
    /**
     * Returns the amount of key-value pairs stored.
     * @attachStatic {qxWeb, localStorage.getLength}
     * @return {Number} The length of the storage.
     */
    getLocalLength : function(){

      return qx.bom.Storage.getLocal().getLength();
    },
    /**
     * Returns the named key at the given index.
     * @attachStatic {qxWeb, localStorage.getKey}
     * @param index {Number} The index in the storage.
     * @return {String} The key stored at the given index.
     */
    getLocalKey : function(index){

      return qx.bom.Storage.getLocal().getKey(index);
    },
    /**
     * Deletes every stored item in the storage.
     * @attachStatic {qxWeb, localStorage.clear}
     */
    clearLocal : function(){

      qx.bom.Storage.getLocal().clear();
    },
    /**
     * Helper to access every stored item.
     *
     * @attachStatic {qxWeb, localStorage.forEach}
     * @param callback {Function} A function which will be called for every item.
     *   The function will have two arguments, first the key and second the value
     *    of the stored data.
     * @param scope {var} The scope of the function.
     */
    forEachLocal : function(callback, scope){

      qx.bom.Storage.getLocal().forEach(callback, scope);
    },
    /**
     * Store an item in the storage.
     *
     * @attachStatic {qxWeb, sessionStorage.setItem}
     * @param key {String} The identifier key.
     * @param value {var} The data, which will be stored as JSON.
     */
    setSessionItem : function(key, value){

      qx.bom.Storage.getSession().setItem(key, value);
    },
    /**
     * Returns the stored item.
     *
     * @attachStatic {qxWeb, sessionStorage.getItem}
     * @param key {String} The identifier to get the data.
     * @return {var} The stored data.
     */
    getSessionItem : function(key){

      return qx.bom.Storage.getSession().getItem(key);
    },
    /**
     * Removes an item form the storage.
     * @attachStatic {qxWeb, sessionStorage.removeItem}
     * @param key {String} The identifier.
     */
    removeSessionItem : function(key){

      qx.bom.Storage.getSession().removeItem(key);
    },
    /**
     * Returns the amount of key-value pairs stored.
     * @attachStatic {qxWeb, sessionStorage.getLength}
     * @return {Number} The length of the storage.
     */
    getSessionLength : function(){

      return qx.bom.Storage.getSession().getLength();
    },
    /**
     * Returns the named key at the given index.
     * @attachStatic {qxWeb, sessionStorage.getKey}
     * @param index {Number} The index in the storage.
     * @return {String} The key stored at the given index.
     */
    getSessionKey : function(index){

      return qx.bom.Storage.getSession().getKey(index);
    },
    /**
     * Deletes every stored item in the storage.
     * @attachStatic {qxWeb, sessionStorage.clear}
     */
    clearSession : function(){

      qx.bom.Storage.getSession().clear();
    },
    /**
     * Helper to access every stored item.
     *
     * @attachStatic {qxWeb, sessionStorage.forEach}
     * @param callback {Function} A function which will be called for every item.
     *   The function will have two arguments, first the key and second the value
     *    of the stored data.
     * @param scope {var} The scope of the function.
     */
    forEachSession : function(callback, scope){

      qx.bom.Storage.getSession().forEach(callback, scope);
    }
  },
  defer : function(statics){

    qxWeb.$attachStatic({
      "localStorage" : {
        setItem : statics.setLocalItem,
        getItem : statics.getLocalItem,
        removeItem : statics.removeLocalItem,
        getLength : statics.getLocalLength,
        getKey : statics.getLocalKey,
        clear : statics.clearLocal,
        forEach : statics.forEachLocal
      },
      "sessionStorage" : {
        setItem : statics.setSessionItem,
        getItem : statics.getSessionItem,
        removeItem : statics.removeSessionItem,
        getLength : statics.getSessionLength,
        getKey : statics.getSessionKey,
        clear : statics.clearSession,
        forEach : statics.forEachSession
      }
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

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * This is a cross browser storage implementation. The API is aligned with the
 * API of the HTML web storage (http://www.w3.org/TR/webstorage/) which is also
 * the preferred implementation used. As fallback for IE < 8, we use user data.
 * If both techniques are unsupported, we supply a in memory storage, which is
 * of course, not persistent.
 */
qx.Bootstrap.define("qx.bom.Storage", {
  statics : {
    __impl : null,
    /**
     * Get an instance of a local storage.
     * @return {qx.bom.storage.Web|qx.bom.storage.UserData|qx.bom.storage.Memory}
     *   An instance of a storage implementation.
     */
    getLocal : function(){

      // always use HTML5 web storage if available
      if(qx.core.Environment.get("html.storage.local")){

        return qx.bom.storage.Web.getLocal();
      } else if(qx.core.Environment.get("html.storage.userdata")){

        // IE <8 fallback
        // as fallback,use the userdata storage for IE5.5 - 8
        return qx.bom.storage.UserData.getLocal();
      };
      // as last fallback, use a in memory storage (this one is not persistent)
      return qx.bom.storage.Memory.getLocal();
    },
    /**
     * Get an instance of a session storage.
     * @return {qx.bom.storage.Web|qx.bom.storage.UserData|qx.bom.storage.Memory}
     *   An instance of a storage implementation.
     */
    getSession : function(){

      // always use HTML5 web storage if available
      if(qx.core.Environment.get("html.storage.local")){

        return qx.bom.storage.Web.getSession();
      } else if(qx.core.Environment.get("html.storage.userdata")){

        // IE <8 fallback
        // as fallback,use the userdata storage for IE5.5 - 8
        return qx.bom.storage.UserData.getSession();
      };
      // as last fallback, use a in memory storage (this one is not persistent)
      return qx.bom.storage.Memory.getSession();
    }
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

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * Storage implementation using HTML web storage:
 * http://www.w3.org/TR/webstorage/
 *
 * @require(qx.bom.storage.Web#getLength)
 * @require(qx.bom.storage.Web#setItem)
 * @require(qx.bom.storage.Web#getItem)
 * @require(qx.bom.storage.Web#removeItem)
 * @require(qx.bom.storage.Web#clear)
 * @require(qx.bom.storage.Web#getKey)
 * @require(qx.bom.storage.Web#forEach)
 */
qx.Bootstrap.define("qx.bom.storage.Web", {
  statics : {
    __local : null,
    __session : null,
    /**
     * Static accessor for the local storage.
     * @return {qx.bom.storage.Web} An instance of a local storage.
     */
    getLocal : function(){

      if(this.__local){

        return this.__local;
      };
      return this.__local = new qx.bom.storage.Web("local");
    },
    /**
     * Static accessor for the session storage.
     * @return {qx.bom.storage.Web} An instance of a session storage.
     */
    getSession : function(){

      if(this.__session){

        return this.__session;
      };
      return this.__session = new qx.bom.storage.Web("session");
    }
  },
  /**
   * Create a new instance. Usually, you should take the static
   * accessors to get your instance.
   *
   * @param type {String} type of storage, either
   *   <code>local</code> or <code>session</code>.
   */
  construct : function(type){

    this.__type = type;
  },
  members : {
    __type : null,
    /**
     * Returns the internal used storage (the native object).
     *
     * @internal
     * @return {Storage} The native storage implementation.
     */
    getStorage : function(){

      return window[this.__type + "Storage"];
    },
    /**
     * Returns the amount of key-value pairs stored.
     * @return {Integer} The length of the storage.
     */
    getLength : function(){

      return this.getStorage(this.__type).length;
    },
    /**
     * Store an item in the storage.
     *
     * @param key {String} The identifier key.
     * @param value {var} The data, which will be stored as JSON.
     */
    setItem : function(key, value){

      value = qx.lang.Json.stringify(value);
      try{

        this.getStorage(this.__type).setItem(key, value);
      } catch(e) {

        throw new Error("Storage full.");
      };
    },
    /**
     * Returns the stored item.
     *
     * @param key {String} The identifier to get the data.
     * @return {var} The stored data.
     */
    getItem : function(key){

      var item = this.getStorage(this.__type).getItem(key);
      if(qx.lang.Type.isString(item)){

        item = qx.lang.Json.parse(item);
      } else if(item && item.value && qx.lang.Type.isString(item.value)){

        item = qx.lang.Json.parse(item.value);
      };
      return item;
    },
    /**
     * Removes an item form the storage.
     * @param key {String} The identifier.
     */
    removeItem : function(key){

      this.getStorage(this.__type).removeItem(key);
    },
    /**
     * Deletes every stored item in the storage.
     */
    clear : function(){

      var storage = this.getStorage(this.__type);
      if(!storage.clear){

        for(var i = storage.length - 1;i >= 0;i--){

          storage.removeItem(storage.key(i));
        };
      } else {

        storage.clear();
      };
    },
    /**
     * Returns the named key at the given index.
     * @param index {Integer} The index in the storage.
     * @return {String} The key stored at the given index.
     */
    getKey : function(index){

      return this.getStorage(this.__type).key(index);
    },
    /**
     * Helper to access every stored item.
     *
     * @param callback {Function} A function which will be called for every item.
     *   The function will have two arguments, first the key and second the value
     *    of the stored data.
     * @param scope {var} The scope of the function.
     */
    forEach : function(callback, scope){

      var length = this.getLength();
      for(var i = 0;i < length;i++){

        var key = this.getKey(i);
        callback.call(scope, key, this.getItem(key));
      };
    }
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)
   ________________________________________________________________________

   This class contains code based on the following work:

    http://www.JSON.org/json2.js
    2009-06-29

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html

************************************************************************ */
/**
 * JSON (JavaScript Object Notation) parser, serializer for qooxdoo
 *
 * This class implements EcmaScript 3.1 JSON support.
 *
 * http://wiki.ecmascript.org/doku.php?id=es3.1:json_support
 *
 * If the browser supports native JSON the browser implementation is used.
 */
qx.Bootstrap.define("qx.lang.Json", {
  statics : {
    /**
     * @type {JSON} The JSON object to use. If the browser has native JSON support
     *   this member points to <code>window.JSON</code>. Otherwise it points to
     *   the qooxdoo implementation {@link JsonImpl}.
     */
    JSON : window.JSON,
    /**
     * This method produces a JSON text from a JavaScript value.
     *
     * When an object value is found, if the object contains a toJSON
     * method, its toJSON method will be called and the result will be
     * stringified. A toJSON method does not serialize: it returns the
     * value represented by the name/value pair that should be serialized,
     * or undefined if nothing should be serialized. The toJSON method
     * will be passed the key associated with the value, and this will be
     * bound to the object holding the key.
     *
     * For example, this would serialize Dates as ISO strings.
     *
     * <pre class="javascript">
     *     Date.prototype.toJSON = function (key) {
     *         function f(n) {
     *             // Format integers to have at least two digits.
     *             return n < 10 ? '0' + n : n;
     *         }
     *
     *         return this.getUTCFullYear()   + '-' +
     *              f(this.getUTCMonth() + 1) + '-' +
     *              f(this.getUTCDate())      + 'T' +
     *              f(this.getUTCHours())     + ':' +
     *              f(this.getUTCMinutes())   + ':' +
     *              f(this.getUTCSeconds())   + 'Z';
     *     };
     * </pre>
     *
     * You can provide an optional replacer method. It will be passed the
     * key and value of each member, with this bound to the containing
     * object. The value that is returned from your method will be
     * serialized. If your method returns undefined, then the member will
     * be excluded from the serialization.
     *
     * If the replacer parameter is an array of strings, then it will be
     * used to select the members to be serialized. It filters the results
     * such that only members with keys listed in the replacer array are
     * stringified.
     *
     * Values that do not have JSON representations, such as undefined or
     * functions, will not be serialized. Such values in objects will be
     * dropped; in arrays they will be replaced with null. You can use
     * a replacer function to replace those with JSON values.
     * JSON.stringify(undefined) returns undefined.
     *
     * The optional space parameter produces a stringification of the
     * value that is filled with line breaks and indentation to make it
     * easier to read.
     *
     * If the space parameter is a non-empty string, then that string will
     * be used for indentation. If the space parameter is a number, then
     * the indentation will be that many spaces.
     *
     * Example:
     *
     * <pre class="javascript">
     * text = JSON.stringify(['e', {pluribus: 'unum'}]);
     * // text is '["e",{"pluribus":"unum"}]'
     *
     *
     * text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
     * // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'
     *
     * text = JSON.stringify([new Date()], function (key, value) {
     *     return this[key] instanceof Date ?
     *         'Date(' + this[key] + ')' : value;
     * });
     * // text is '["Date(---current time---)"]'
     * </pre>
     *
     * @signature function(value, replacer, space)
     *
     * @param value {var} any JavaScript value, usually an object or array.
     *
     * @param replacer {Function?} an optional parameter that determines how
     *    object values are stringified for objects. It can be a function or an
     *    array of strings.
     *
     * @param space {String?} an optional parameter that specifies the
     *    indentation of nested structures. If it is omitted, the text will
     *    be packed without extra whitespace. If it is a number, it will specify
     *    the number of spaces to indent at each level. If it is a string
     *    (such as '\t' or '&nbsp;'), it contains the characters used to indent
     *    at each level.
     *
     * @return {String} The JSON string of the value
     */
    stringify : null,
    // will be set in the defer block
    /**
     * This method parses a JSON text to produce an object or array.
     * It can throw a SyntaxError exception.
     *
     * The optional reviver parameter is a function that can filter and
     * transform the results. It receives each of the keys and values,
     * and its return value is used instead of the original value.
     * If it returns what it received, then the structure is not modified.
     * If it returns undefined then the member is deleted.
     *
     * Example:
     *
     * <pre class="javascript">
     * // Parse the text. Values that look like ISO date strings will
     * // be converted to Date objects.
     *
     * myData = JSON.parse(text, function (key, value)
     * {
     *   if (typeof value === 'string')
     *   {
     *     var a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
     *     if (a) {
     *       return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
     *     }
     *   }
     *   return value;
     * });
     *
     * myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
     *     var d;
     *     if (typeof value === 'string' &&
     *             value.slice(0, 5) === 'Date(' &&
     *             value.slice(-1) === ')') {
     *         d = new Date(value.slice(5, -1));
     *         if (d) {
     *             return d;
     *         }
     *     }
     *     return value;
     * });
     * </pre>
     *
     * @signature function(text, reviver)
     *
     * @param text {String} JSON string to parse
     *
     * @param reviver {Function?} Optional reviver function to filter and
     *    transform the results
     *
     * @return {Object} The parsed JSON object
     */
    parse : null
  },
  defer : function(statics){

    statics.stringify = statics.JSON.stringify;
    statics.parse = statics.JSON.parse;
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * Fallback storage implementation usable in IE browsers. It is recommended to use
 * these implementation only in IE < 8 because IE >= 8 supports
 * {@link qx.bom.storage.Web}.
 *
 * @require(qx.bom.storage.UserData#getLength)
 * @require(qx.bom.storage.UserData#setItem)
 * @require(qx.bom.storage.UserData#getItem)
 * @require(qx.bom.storage.UserData#removeItem)
 * @require(qx.bom.storage.UserData#clear)
 * @require(qx.bom.storage.UserData#getKey)
 * @require(qx.bom.storage.UserData#forEach)
 */
qx.Bootstrap.define("qx.bom.storage.UserData", {
  statics : {
    __local : null,
    __session : null,
    // global id used as key for the storage
    __id : 0,
    /**
     * Returns an instance of {@link qx.bom.storage.UserData} used to store
     * data persistent.
     * @return {qx.bom.storage.UserData} A storage instance.
     */
    getLocal : function(){

      if(this.__local){

        return this.__local;
      };
      return this.__local = new qx.bom.storage.UserData("local");
    },
    /**
     * Returns an instance of {@link qx.bom.storage.UserData} used to store
     * data persistent.
     * @return {qx.bom.storage.UserData} A storage instance.
     */
    getSession : function(){

      if(this.__session){

        return this.__session;
      };
      return this.__session = new qx.bom.storage.UserData("session");
    }
  },
  /**
   * Create a new instance. Usually, you should take the static
   * accessors to get your instance.
   *
   * @param storeName {String} type of storage.
   */
  construct : function(storeName){

    // create a dummy DOM element used for storage
    this.__el = document.createElement("div");
    this.__el.style["display"] = "none";
    document.getElementsByTagName("head")[0].appendChild(this.__el);
    this.__el.addBehavior("#default#userdata");
    this.__storeName = storeName;
    // load the inital data which might be stored
    this.__el.load(this.__storeName);
    // set up the internal reference maps
    this.__storage = {
    };
    this.__reference = {
    };
    // initialize
    var value = this.__el.getAttribute("qx" + qx.bom.storage.UserData.__id);
    while(value != undefined){

      value = qx.lang.Json.parse(value);
      // save the data in the internal storage
      this.__storage[value.key] = value.value;
      // save the reference
      this.__reference[value.key] = "qx" + qx.bom.storage.UserData.__id;
      qx.bom.storage.UserData.__id++;
      value = this.__el.getAttribute("qx" + qx.bom.storage.UserData.__id);
    };
  },
  members : {
    __el : null,
    __storeName : "qxtest",
    // storage which holds the key and the value
    __storage : null,
    // reference store which holds the key and the key used to store
    __reference : null,
    /**
     * Returns the map used to keep a in memory copy of the stored data.
     * @return {Map} The stored data.
     * @internal
     */
    getStorage : function(){

      return this.__storage;
    },
    /**
     * Returns the amount of key-value pairs stored.
     * @return {Integer} The length of the storage.
     */
    getLength : function(){

      return Object.keys(this.__storage).length;
    },
    /**
     * Store an item in the storage.
     *
     * @param key {String} The identifier key.
     * @param value {var} The data, which will be stored as JSON.
     */
    setItem : function(key, value){

      // override case
      if(this.__reference[key]){

        var storageKey = this.__reference[key];
      } else {

        var storageKey = "qx" + qx.bom.storage.UserData.__id;
        qx.bom.storage.UserData.__id++;
      };
      // build and save the data used to store both, key and value
      var storageValue = qx.lang.Json.stringify({
        key : key,
        value : value
      });
      this.__el.setAttribute(storageKey, storageValue);
      this.__el.save(this.__storeName);
      // also update the internal mappings
      this.__storage[key] = value;
      this.__reference[key] = storageKey;
    },
    /**
     * Returns the stored item.
     *
     * @param key {String} The identifier to get the data.
     * @return {var} The stored data.
     */
    getItem : function(key){

      return this.__storage[key] || null;
    },
    /**
     * Removes an item form the storage.
     * @param key {String} The identifier.
     */
    removeItem : function(key){

      // check if the item is availabel
      var storageName = this.__reference[key];
      if(storageName == undefined){

        return;
      };
      // remove the item
      this.__el.removeAttribute(storageName);
      // decrease the id because we removed one item
      qx.bom.storage.UserData.__id--;
      // update the internal maps
      delete this.__storage[key];
      delete this.__reference[key];
      // check if we have deleted the last item
      var lastStoreName = "qx" + qx.bom.storage.UserData.__id;
      if(this.__el.getAttribute(lastStoreName)){

        // if not, move the last item to the deleted spot
        var lastItem = this.__el.getAttribute("qx" + qx.bom.storage.UserData.__id);
        this.__el.removeAttribute(lastStoreName);
        this.__el.setAttribute(storageName, lastItem);
        // update the reference map
        var lastKey = qx.lang.Json.parse(lastItem).key;
        this.__reference[lastKey] = storageName;
      };
      this.__el.save(this.__storeName);
    },
    /**
     * Deletes every stored item in the storage.
     */
    clear : function(){

      // delete all entries from the storage
      for(var key in this.__reference){

        this.__el.removeAttribute(this.__reference[key]);
      };
      this.__el.save(this.__storeName);
      // reset the internal maps
      this.__storage = {
      };
      this.__reference = {
      };
    },
    /**
     * Returns the named key at the given index.
     * @param index {Integer} The index in the storage.
     * @return {String} The key stored at the given index.
     */
    getKey : function(index){

      return Object.keys(this.__storage)[index];
    },
    /**
     * Helper to access every stored item.
     *
     * @param callback {Function} A function which will be called for every item.
     *   The function will have two arguments, first the key and second the value
     *    of the stored data.
     * @param scope {var} The scope of the function.
     */
    forEach : function(callback, scope){

      var length = this.getLength();
      for(var i = 0;i < length;i++){

        var key = this.getKey(i);
        callback.call(scope, key, this.getItem(key));
      };
    }
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * Fallback storage implementation which offers the same API as every other storage
 * but is not persistent. Basically, its just a storage API on a JavaScript map.
 *
 * @require(qx.bom.storage.Memory#getLength)
 * @require(qx.bom.storage.Memory#setItem)
 * @require(qx.bom.storage.Memory#getItem)
 * @require(qx.bom.storage.Memory#removeItem)
 * @require(qx.bom.storage.Memory#clear)
 * @require(qx.bom.storage.Memory#getKey)
 * @require(qx.bom.storage.Memory#forEach)
 */
qx.Bootstrap.define("qx.bom.storage.Memory", {
  statics : {
    __local : null,
    __session : null,
    /**
     * Returns an instance of {@link qx.bom.storage.Memory} which is of course
     * not persisted on reload.
     * @return {qx.bom.storage.Memory} A memory storage.
     */
    getLocal : function(){

      if(this.__local){

        return this.__local;
      };
      return this.__local = new qx.bom.storage.Memory();
    },
    /**
     * Returns an instance of {@link qx.bom.storage.Memory} which is of course
     * not persisted on reload.
     * @return {qx.bom.storage.Memory} A memory storage.
     */
    getSession : function(){

      if(this.__session){

        return this.__session;
      };
      return this.__session = new qx.bom.storage.Memory();
    }
  },
  construct : function(){

    this.__storage = {
    };
  },
  members : {
    __storage : null,
    /**
     * Returns the internal used map.
     * @return {Map} The storage.
     * @internal
     */
    getStorage : function(){

      return this.__storage;
    },
    /**
     * Returns the amount of key-value pairs stored.
     * @return {Integer} The length of the storage.
     */
    getLength : function(){

      return Object.keys(this.__storage).length;
    },
    /**
     * Store an item in the storage.
     *
     * @param key {String} The identifier key.
     * @param value {var} The data, which will be stored as JSON.
     */
    setItem : function(key, value){

      value = qx.lang.Json.stringify(value);
      this.__storage[key] = value;
    },
    /**
     * Returns the stored item.
     *
     * @param key {String} The identifier to get the data.
     * @return {var} The stored data.
     */
    getItem : function(key){

      var item = this.__storage[key];
      if(qx.lang.Type.isString(item)){

        item = qx.lang.Json.parse(item);
      };
      return item;
    },
    /**
     * Removes an item form the storage.
     * @param key {String} The identifier.
     */
    removeItem : function(key){

      delete this.__storage[key];
    },
    /**
     * Deletes every stored item in the storage.
     */
    clear : function(){

      this.__storage = {
      };
    },
    /**
     * Returns the named key at the given index.
     * @param index {Integer} The index in the storage.
     * @return {String} The key stored at the given index.
     */
    getKey : function(index){

      var keys = Object.keys(this.__storage);
      return keys[index];
    },
    /**
     * Helper to access every stored item.
     *
     * @param callback {Function} A function which will be called for every item.
     *   The function will have two arguments, first the key and second the value
     *    of the stored data.
     * @param scope {var} The scope of the function.
     */
    forEach : function(callback, scope){

      var length = this.getLength();
      for(var i = 0;i < length;i++){

        var key = this.getKey(i);
        callback.call(scope, key, this.getItem(key));
      };
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