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
     2004-2011 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)

************************************************************************ */
/**
 * A wrapper of the XMLHttpRequest host object (or equivalent). The interface is
 * similar to <a href="http://www.w3.org/TR/XMLHttpRequest/">XmlHttpRequest</a>.
 *
 * Hides browser inconsistencies and works around bugs found in popular
 * implementations.
 *
 * <div class="desktop">
 * Example:
 *
 * <pre class="javascript">
 *  var req = new qx.bom.request.Xhr();
 *  req.onload = function() {
 *    // Handle data received
 *    req.responseText;
 *  }
 *
 *  req.open("GET", url);
 *  req.send();
 * </pre>
 * </div>
 *
 * @ignore(XDomainRequest)
 * @ignore(qx.event, qx.event.GlobalError.*)
 *
 * @require(qx.bom.request.Xhr#open)
 * @require(qx.bom.request.Xhr#send)
 * @require(qx.bom.request.Xhr#on)
 * @require(qx.bom.request.Xhr#onreadystatechange)
 * @require(qx.bom.request.Xhr#onload)
 * @require(qx.bom.request.Xhr#onloadend)
 * @require(qx.bom.request.Xhr#onerror)
 * @require(qx.bom.request.Xhr#onabort)
 * @require(qx.bom.request.Xhr#ontimeout)
 * @require(qx.bom.request.Xhr#setRequestHeader)
 * @require(qx.bom.request.Xhr#getAllResponseHeaders)
 * @require(qx.bom.request.Xhr#getRequest)
 * @require(qx.bom.request.Xhr#overrideMimeType)
 * @require(qx.bom.request.Xhr#dispose)
 * @require(qx.bom.request.Xhr#isDisposed)
 *
 * @group (IO)
 */
qx.Bootstrap.define("qx.bom.request.Xhr", {
  extend : Object,
  construct : function(){

    var boundFunc = qx.Bootstrap.bind(this.__onNativeReadyStateChange, this);
    // GlobalError shouldn't be included in qx.Website builds so use it
    // if it's available but otherwise ignore it (see ignore stated above).
    if(qx.event && qx.event.GlobalError && qx.event.GlobalError.observeMethod){

      this.__onNativeReadyStateChangeBound = qx.event.GlobalError.observeMethod(boundFunc);
    } else {

      this.__onNativeReadyStateChangeBound = boundFunc;
    };
    this.__onNativeAbortBound = qx.Bootstrap.bind(this.__onNativeAbort, this);
    this.__onTimeoutBound = qx.Bootstrap.bind(this.__onTimeout, this);
    this.__initNativeXhr();
    this._emitter = new qx.event.Emitter();
    // BUGFIX: IE
    // IE keeps connections alive unless aborted on unload
    if(window.attachEvent){

      this.__onUnloadBound = qx.Bootstrap.bind(this.__onUnload, this);
      window.attachEvent("onunload", this.__onUnloadBound);
    };
  },
  statics : {
    UNSENT : 0,
    OPENED : 1,
    HEADERS_RECEIVED : 2,
    LOADING : 3,
    DONE : 4
  },
  events : {
    /** Fired at ready state changes. */
    "readystatechange" : "qx.bom.request.Xhr",
    /** Fired on error. */
    "error" : "qx.bom.request.Xhr",
    /** Fired at loadend. */
    "loadend" : "qx.bom.request.Xhr",
    /** Fired on timeouts. */
    "timeout" : "qx.bom.request.Xhr",
    /** Fired when the request is aborted. */
    "abort" : "qx.bom.request.Xhr",
    /** Fired on successful retrieval. */
    "load" : "qx.bom.request.Xhr"
  },
  members : {
    /*
    ---------------------------------------------------------------------------
      PUBLIC
    ---------------------------------------------------------------------------
    */
    /**
     * @type {Number} Ready state.
     *
     * States can be:
     * UNSENT:           0,
     * OPENED:           1,
     * HEADERS_RECEIVED: 2,
     * LOADING:          3,
     * DONE:             4
     */
    readyState : 0,
    /**
     * @type {String} The response of the request as text.
     */
    responseText : "",
    /**
     * @type {Object} The response of the request as a Document object.
     */
    responseXML : null,
    /**
     * @type {Number} The HTTP status code.
     */
    status : 0,
    /**
     * @type {String} The HTTP status text.
     */
    statusText : "",
    /**
     * @type {Number} Timeout limit in milliseconds.
     *
     * 0 (default) means no timeout. Not supported for synchronous requests.
     */
    timeout : 0,
    /**
     * Initializes (prepares) request.
     *
     * @ignore(XDomainRequest)
     *
     * @param method {String?"GET"}
     *  The HTTP method to use.
     * @param url {String}
     *  The URL to which to send the request.
     * @param async {Boolean?true}
     *  Whether or not to perform the operation asynchronously.
     * @param user {String?null}
     *  Optional user name to use for authentication purposes.
     * @param password {String?null}
     *  Optional password to use for authentication purposes.
     */
    open : function(method, url, async, user, password){

      this.__checkDisposed();
      // Mimick native behavior
      if(typeof url === "undefined"){

        throw new Error("Not enough arguments");
      } else if(typeof method === "undefined"){

        method = "GET";
      };
      // Reset flags that may have been set on previous request
      this.__abort = false;
      this.__send = false;
      this.__conditional = false;
      // Store URL for later checks
      this.__url = url;
      if(typeof async == "undefined"){

        async = true;
      };
      this.__async = async;
      // BUGFIX
      // IE < 9 and FF < 3.5 cannot reuse the native XHR to issue many requests
      if(!this.__supportsManyRequests() && this.readyState > qx.bom.request.Xhr.UNSENT){

        // XmlHttpRequest Level 1 requires open() to abort any pending requests
        // associated to the object. Since we're dealing with a new object here,
        // we have to emulate this behavior. Moreover, allow old native XHR to be garbage collected
        //
        // Dispose and abort.
        //
        this.dispose();
        // Replace the underlying native XHR with a new one that can
        // be used to issue new requests.
        this.__initNativeXhr();
      };
      // Restore handler in case it was removed before
      this.__nativeXhr.onreadystatechange = this.__onNativeReadyStateChangeBound;
      try{

        {
        };
        this.__nativeXhr.open(method, url, async, user, password);
      } catch(OpenError) {

        // Only work around exceptions caused by cross domain request attempts
        if(!qx.util.Request.isCrossDomain(url)){

          // Is same origin
          throw OpenError;
        };
        if(!this.__async){

          this.__openError = OpenError;
        };
        if(this.__async){

          // Try again with XDomainRequest
          // (Success case not handled on purpose)
          // - IE 9
          if(window.XDomainRequest){

            this.readyState = 4;
            this.__nativeXhr = new XDomainRequest();
            this.__nativeXhr.onerror = qx.Bootstrap.bind(function(){

              this._emit("readystatechange");
              this._emit("error");
              this._emit("loadend");
            }, this);
            {
            };
            this.__nativeXhr.open(method, url, async, user, password);
            return;
          };
          // Access denied
          // - IE 6: -2146828218
          // - IE 7: -2147024891
          // - Legacy Firefox
          window.setTimeout(qx.Bootstrap.bind(function(){

            if(this.__disposed){

              return;
            };
            this.readyState = 4;
            this._emit("readystatechange");
            this._emit("error");
            this._emit("loadend");
          }, this));
        };
      };
      // BUGFIX: IE < 9
      // IE < 9 tends to cache overly agressive. This may result in stale
      // representations. Force validating freshness of cached representation.
      if(qx.core.Environment.get("engine.name") === "mshtml" && qx.core.Environment.get("browser.documentmode") < 9 && this.__nativeXhr.readyState > 0){

        this.__nativeXhr.setRequestHeader("If-Modified-Since", "-1");
      };
      // BUGFIX: Firefox
      // Firefox < 4 fails to trigger onreadystatechange OPENED for sync requests
      if(qx.core.Environment.get("engine.name") === "gecko" && parseInt(qx.core.Environment.get("engine.version"), 10) < 2 && !this.__async){

        // Native XHR is already set to readyState DONE. Fake readyState
        // and call onreadystatechange manually.
        this.readyState = qx.bom.request.Xhr.OPENED;
        this._emit("readystatechange");
      };
    },
    /**
     * Sets an HTTP request header to be used by the request.
     *
     * Note: The request must be initialized before using this method.
     *
     * @param key {String}
     *  The name of the header whose value is to be set.
     * @param value {String}
     *  The value to set as the body of the header.
     * @return {qx.bom.request.Xhr} Self for chaining.
     */
    setRequestHeader : function(key, value){

      this.__checkDisposed();
      // Detect conditional requests
      if(key == "If-Match" || key == "If-Modified-Since" || key == "If-None-Match" || key == "If-Range"){

        this.__conditional = true;
      };
      this.__nativeXhr.setRequestHeader(key, value);
      return this;
    },
    /**
     * Sends request.
     *
     * @param data {String|Document?null}
     *  Optional data to send.
     * @return {qx.bom.request.Xhr} Self for chaining.
     */
    send : function(data){

      this.__checkDisposed();
      // BUGFIX: IE & Firefox < 3.5
      // For sync requests, some browsers throw error on open()
      // while it should be on send()
      //
      if(!this.__async && this.__openError){

        throw this.__openError;
      };
      // BUGFIX: Opera
      // On network error, Opera stalls at readyState HEADERS_RECEIVED
      // This violates the spec. See here http://www.w3.org/TR/XMLHttpRequest2/#send
      // (Section: If there is a network error)
      //
      // To fix, assume a default timeout of 10 seconds. Note: The "error"
      // event will be fired correctly, because the error flag is inferred
      // from the statusText property. Of course, compared to other
      // browsers there is an additional call to ontimeout(), but this call
      // should not harm.
      //
      if(qx.core.Environment.get("engine.name") === "opera" && this.timeout === 0){

        this.timeout = 10000;
      };
      // Timeout
      if(this.timeout > 0){

        this.__timerId = window.setTimeout(this.__onTimeoutBound, this.timeout);
      };
      // BUGFIX: Firefox 2
      // "NS_ERROR_XPC_NOT_ENOUGH_ARGS" when calling send() without arguments
      data = typeof data == "undefined" ? null : data;
      // Whitelisting the allowed data types regarding the spec
      // -> http://www.w3.org/TR/XMLHttpRequest2/#the-send-method
      // All other data input will be transformed to a string to e.g. prevent
      // an SendError in Firefox (at least <= 31) and to harmonize it with the
      // behaviour of all other browsers (Chrome, IE and Safari)
      var dataType = qx.Bootstrap.getClass(data);
      data = (data !== null && this.__dataTypeWhiteList.indexOf(dataType) === -1) ? data.toString() : data;
      // Some browsers may throw an error when sending of async request fails.
      // This violates the spec which states only sync requests should.
      try{

        {
        };
        this.__nativeXhr.send(data);
      } catch(SendError) {

        if(!this.__async){

          throw SendError;
        };
        // BUGFIX
        // Some browsers throws error when file not found via file:// protocol.
        // Synthesize readyState changes.
        if(this._getProtocol() === "file:"){

          this.readyState = 2;
          this.__readyStateChange();
          var that = this;
          window.setTimeout(function(){

            if(that.__disposed){

              return;
            };
            that.readyState = 3;
            that.__readyStateChange();
            that.readyState = 4;
            that.__readyStateChange();
          });
        };
      };
      // BUGFIX: Firefox
      // Firefox fails to trigger onreadystatechange DONE for sync requests
      if(qx.core.Environment.get("engine.name") === "gecko" && !this.__async){

        // Properties all set, only missing native readystatechange event
        this.__onNativeReadyStateChange();
      };
      // Set send flag
      this.__send = true;
      return this;
    },
    /**
     * Abort request - i.e. cancels any network activity.
     *
     * Note:
     *  On Windows 7 every browser strangely skips the loading phase
     *  when this method is called (because readyState never gets 3).
     *
     *  So keep this in mind if you rely on the phases which are
     *  passed through. They will be "opened", "sent", "abort"
     *  instead of normally "opened", "sent", "loading", "abort".
     *
     * @return {qx.bom.request.Xhr} Self for chaining.
     */
    abort : function(){

      this.__checkDisposed();
      this.__abort = true;
      this.__nativeXhr.abort();
      if(this.__nativeXhr){

        this.readyState = this.__nativeXhr.readyState;
      };
      return this;
    },
    /**
     * Helper to emit events and call the callback methods.
     * @param event {String} The name of the event.
     */
    _emit : function(event){

      if(this["on" + event]){

        this["on" + event]();
      };
      this._emitter.emit(event, this);
    },
    /**
     * Event handler for XHR event that fires at every state change.
     *
     * Replace with custom method to get informed about the communication progress.
     */
    onreadystatechange : function(){
    },
    /**
     * Event handler for XHR event "load" that is fired on successful retrieval.
     *
     * Note: This handler is called even when the HTTP status indicates an error.
     *
     * Replace with custom method to listen to the "load" event.
     */
    onload : function(){
    },
    /**
     * Event handler for XHR event "loadend" that is fired on retrieval.
     *
     * Note: This handler is called even when a network error (or similar)
     * occurred.
     *
     * Replace with custom method to listen to the "loadend" event.
     */
    onloadend : function(){
    },
    /**
     * Event handler for XHR event "error" that is fired on a network error.
     *
     * Replace with custom method to listen to the "error" event.
     */
    onerror : function(){
    },
    /**
    * Event handler for XHR event "abort" that is fired when request
    * is aborted.
    *
    * Replace with custom method to listen to the "abort" event.
    */
    onabort : function(){
    },
    /**
    * Event handler for XHR event "timeout" that is fired when timeout
    * interval has passed.
    *
    * Replace with custom method to listen to the "timeout" event.
    */
    ontimeout : function(){
    },
    /**
     * Add an event listener for the given event name.
     *
     * @param name {String} The name of the event to listen to.
     * @param listener {Function} The function to execute when the event is fired
     * @param ctx {var?} The context of the listener.
     * @return {qx.bom.request.Xhr} Self for chaining.
     */
    on : function(name, listener, ctx){

      this._emitter.on(name, listener, ctx);
      return this;
    },
    /**
     * Get a single response header from response.
     *
     * @param header {String}
     *  Key of the header to get the value from.
     * @return {String}
     *  Response header.
     */
    getResponseHeader : function(header){

      this.__checkDisposed();
      return this.__nativeXhr.getResponseHeader(header);
    },
    /**
     * Get all response headers from response.
     *
     * @return {String} All response headers.
     */
    getAllResponseHeaders : function(){

      this.__checkDisposed();
      return this.__nativeXhr.getAllResponseHeaders();
    },
    /**
     * Overrides the MIME type returned by the server
     * and must be called before @send()@.
     *
     * Note:
     *
     * * IE doesn't support this method so in this case an Error is thrown.
     * * after calling this method @getResponseHeader("Content-Type")@
     *   may return the original (Firefox 23, IE 10, Safari 6) or
     *   the overriden content type (Chrome 28+, Opera 15+).
     *
     *
     * @param mimeType {String} The mimeType for overriding.
     * @return {qx.bom.request.Xhr} Self for chaining.
     */
    overrideMimeType : function(mimeType){

      this.__checkDisposed();
      if(this.__nativeXhr.overrideMimeType){

        this.__nativeXhr.overrideMimeType(mimeType);
      } else {

        throw new Error("Native XHR object doesn't support overrideMimeType.");
      };
      return this;
    },
    /**
     * Get wrapped native XMLHttpRequest (or equivalent).
     *
     * Can be XMLHttpRequest or ActiveX.
     *
     * @return {Object} XMLHttpRequest or equivalent.
     */
    getRequest : function(){

      return this.__nativeXhr;
    },
    /*
    ---------------------------------------------------------------------------
      HELPER
    ---------------------------------------------------------------------------
    */
    /**
     * Dispose object and wrapped native XHR.
     * @return {Boolean} <code>true</code> if the object was successfully disposed
     */
    dispose : function(){

      if(this.__disposed){

        return false;
      };
      window.clearTimeout(this.__timerId);
      // Remove unload listener in IE. Aborting on unload is no longer required
      // for this instance.
      if(window.detachEvent){

        window.detachEvent("onunload", this.__onUnloadBound);
      };
      // May fail in IE
      try{

        this.__nativeXhr.onreadystatechange;
      } catch(PropertiesNotAccessable) {

        return false;
      };
      // Clear out listeners
      var noop = function(){
      };
      this.__nativeXhr.onreadystatechange = noop;
      this.__nativeXhr.onload = noop;
      this.__nativeXhr.onerror = noop;
      // Abort any network activity
      this.abort();
      // Remove reference to native XHR
      this.__nativeXhr = null;
      this.__disposed = true;
      return true;
    },
    /**
     * Check if the request has already beed disposed.
     * @return {Boolean} <code>true</code>, if the request has been disposed.
     */
    isDisposed : function(){

      return !!this.__disposed;
    },
    /*
    ---------------------------------------------------------------------------
      PROTECTED
    ---------------------------------------------------------------------------
    */
    /**
     * Create XMLHttpRequest (or equivalent).
     *
     * @return {Object} XMLHttpRequest or equivalent.
     */
    _createNativeXhr : function(){

      var xhr = qx.core.Environment.get("io.xhr");
      if(xhr === "xhr"){

        return new XMLHttpRequest();
      };
      if(xhr == "activex"){

        return new window.ActiveXObject("Microsoft.XMLHTTP");
      };
      qx.Bootstrap.error(this, "No XHR support available.");
    },
    /**
     * Get protocol of requested URL.
     *
     * @return {String} The used protocol.
     */
    _getProtocol : function(){

      var url = this.__url;
      var protocolRe = /^(\w+:)\/\//;
      // Could be http:// from file://
      if(url !== null && url.match){

        var match = url.match(protocolRe);
        if(match && match[1]){

          return match[1];
        };
      };
      return window.location.protocol;
    },
    /*
    ---------------------------------------------------------------------------
      PRIVATE
    ---------------------------------------------------------------------------
    */
    /**
     * @type {Object} XMLHttpRequest or equivalent.
     */
    __nativeXhr : null,
    /**
     * @type {Boolean} Whether request is async.
     */
    __async : null,
    /**
     * @type {Function} Bound __onNativeReadyStateChange handler.
     */
    __onNativeReadyStateChangeBound : null,
    /**
     * @type {Function} Bound __onNativeAbort handler.
     */
    __onNativeAbortBound : null,
    /**
     * @type {Function} Bound __onUnload handler.
     */
    __onUnloadBound : null,
    /**
     * @type {Function} Bound __onTimeout handler.
     */
    __onTimeoutBound : null,
    /**
     * @type {Boolean} Send flag
     */
    __send : null,
    /**
     * @type {String} Requested URL
     */
    __url : null,
    /**
     * @type {Boolean} Abort flag
     */
    __abort : null,
    /**
     * @type {Boolean} Timeout flag
     */
    __timeout : null,
    /**
     * @type {Boolean} Whether object has been disposed.
     */
    __disposed : null,
    /**
     * @type {Number} ID of timeout timer.
     */
    __timerId : null,
    /**
     * @type {Error} Error thrown on open, if any.
     */
    __openError : null,
    /**
     * @type {Boolean} Conditional get flag
     */
    __conditional : null,
    /**
     * @type {Array} Whitelist with all allowed data types for the request payload
     */
    __dataTypeWhiteList : null,
    /**
     * Init native XHR.
     */
    __initNativeXhr : function(){

      // Create native XHR or equivalent and hold reference
      this.__nativeXhr = this._createNativeXhr();
      // Track native ready state changes
      this.__nativeXhr.onreadystatechange = this.__onNativeReadyStateChangeBound;
      // Track native abort, when supported
      if(this.__nativeXhr.onabort){

        this.__nativeXhr.onabort = this.__onNativeAbortBound;
      };
      // Reset flags
      this.__disposed = this.__send = this.__abort = false;
      // Initialize data white list
      this.__dataTypeWhiteList = ["ArrayBuffer", "Blob", "HTMLDocument", "String", "FormData"];
    },
    /**
     * Track native abort.
     *
     * In case the end user cancels the request by other
     * means than calling abort().
     */
    __onNativeAbort : function(){

      // When the abort that triggered this method was not a result from
      // calling abort()
      if(!this.__abort){

        this.abort();
      };
    },
    /**
     * Handle native onreadystatechange.
     *
     * Calls user-defined function onreadystatechange on each
     * state change and syncs the XHR status properties.
     */
    __onNativeReadyStateChange : function(){

      var nxhr = this.__nativeXhr,propertiesReadable = true;
      {
      };
      // BUGFIX: IE, Firefox
      // onreadystatechange() is called twice for readyState OPENED.
      //
      // Call onreadystatechange only when readyState has changed.
      if(this.readyState == nxhr.readyState){

        return;
      };
      // Sync current readyState
      this.readyState = nxhr.readyState;
      // BUGFIX: IE
      // Superfluous onreadystatechange DONE when aborting OPENED
      // without send flag
      if(this.readyState === qx.bom.request.Xhr.DONE && this.__abort && !this.__send){

        return;
      };
      // BUGFIX: IE
      // IE fires onreadystatechange HEADERS_RECEIVED and LOADING when sync
      //
      // According to spec, only onreadystatechange OPENED and DONE should
      // be fired.
      if(!this.__async && (nxhr.readyState == 2 || nxhr.readyState == 3)){

        return;
      };
      // Default values according to spec.
      this.status = 0;
      this.statusText = this.responseText = "";
      this.responseXML = null;
      if(this.readyState >= qx.bom.request.Xhr.HEADERS_RECEIVED){

        // In some browsers, XHR properties are not readable
        // while request is in progress.
        try{

          this.status = nxhr.status;
          this.statusText = nxhr.statusText;
          this.responseText = nxhr.responseText;
          this.responseXML = nxhr.responseXML;
        } catch(XhrPropertiesNotReadable) {

          propertiesReadable = false;
        };
        if(propertiesReadable){

          this.__normalizeStatus();
          this.__normalizeResponseXML();
        };
      };
      this.__readyStateChange();
      // BUGFIX: IE
      // Memory leak in XMLHttpRequest (on-page)
      if(this.readyState == qx.bom.request.Xhr.DONE){

        // Allow garbage collecting of native XHR
        if(nxhr){

          nxhr.onreadystatechange = function(){
          };
        };
      };
    },
    /**
     * Handle readystatechange. Called internally when readyState is changed.
     */
    __readyStateChange : function(){

      // Cancel timeout before invoking handlers because they may throw
      if(this.readyState === qx.bom.request.Xhr.DONE){

        // Request determined DONE. Cancel timeout.
        window.clearTimeout(this.__timerId);
      };
      // Always fire "readystatechange"
      this._emit("readystatechange");
      if(this.readyState === qx.bom.request.Xhr.DONE){

        this.__readyStateChangeDone();
      };
    },
    /**
     * Handle readystatechange. Called internally by
     * {@link #__readyStateChange} when readyState is DONE.
     */
    __readyStateChangeDone : function(){

      // Fire "timeout" if timeout flag is set
      if(this.__timeout){

        this._emit("timeout");
        // BUGFIX: Opera
        // Since Opera does not fire "error" on network error, fire additional
        // "error" on timeout (may well be related to network error)
        if(qx.core.Environment.get("engine.name") === "opera"){

          this._emit("error");
        };
        this.__timeout = false;
      } else {

        if(this.__abort){

          this._emit("abort");
        } else {

          if(this.__isNetworkError()){

            this._emit("error");
          } else {

            this._emit("load");
          };
        };
      };
      // Always fire "onloadend" when DONE
      this._emit("loadend");
    },
    /**
     * Check for network error.
     *
     * @return {Boolean} Whether a network error occured.
     */
    __isNetworkError : function(){

      var error;
      // Infer the XHR internal error flag from statusText when not aborted.
      // See http://www.w3.org/TR/XMLHttpRequest2/#error-flag and
      // http://www.w3.org/TR/XMLHttpRequest2/#the-statustext-attribute
      //
      // With file://, statusText is always falsy. Assume network error when
      // response is empty.
      if(this._getProtocol() === "file:"){

        error = !this.responseText;
      } else {

        error = !this.statusText;
      };
      return error;
    },
    /**
     * Handle faked timeout.
     */
    __onTimeout : function(){

      // Basically, mimick http://www.w3.org/TR/XMLHttpRequest2/#timeout-error
      var nxhr = this.__nativeXhr;
      this.readyState = qx.bom.request.Xhr.DONE;
      // Set timeout flag
      this.__timeout = true;
      // No longer consider request. Abort.
      nxhr.abort();
      this.responseText = "";
      this.responseXML = null;
      // Signal readystatechange
      this.__readyStateChange();
    },
    /**
     * Normalize status property across browsers.
     */
    __normalizeStatus : function(){

      var isDone = this.readyState === qx.bom.request.Xhr.DONE;
      // BUGFIX: Most browsers
      // Most browsers tell status 0 when it should be 200 for local files
      if(this._getProtocol() === "file:" && this.status === 0 && isDone){

        if(!this.__isNetworkError()){

          this.status = 200;
        };
      };
      // BUGFIX: IE
      // IE sometimes tells 1223 when it should be 204
      if(this.status === 1223){

        this.status = 204;
      };
      // BUGFIX: Opera
      // Opera tells 0 for conditional requests when it should be 304
      //
      // Detect response to conditional request that signals fresh cache.
      if(qx.core.Environment.get("engine.name") === "opera"){

        if(isDone && // Done
        this.__conditional && // Conditional request
        !this.__abort && // Not aborted
        this.status === 0){

          this.status = 304;
        };
      };
    },
    /**
     * Normalize responseXML property across browsers.
     */
    __normalizeResponseXML : function(){

      // BUGFIX: IE
      // IE does not recognize +xml extension, resulting in empty responseXML.
      //
      // Check if Content-Type is +xml, verify missing responseXML then parse
      // responseText as XML.
      if(qx.core.Environment.get("engine.name") == "mshtml" && (this.getResponseHeader("Content-Type") || "").match(/[^\/]+\/[^\+]+\+xml/) && this.responseXML && !this.responseXML.documentElement){

        var dom = new window.ActiveXObject("Microsoft.XMLDOM");
        dom.async = false;
        dom.validateOnParse = false;
        dom.loadXML(this.responseText);
        this.responseXML = dom;
      };
    },
    /**
     * Handler for native unload event.
     */
    __onUnload : function(){

      try{

        // Abort and dispose
        if(this){

          this.dispose();
        };
      } catch(e) {
      };
    },
    /**
     * Helper method to determine whether browser supports reusing the
     * same native XHR to send more requests.
     * @return {Boolean} <code>true</code> if request object reuse is supported
     */
    __supportsManyRequests : function(){

      var name = qx.core.Environment.get("engine.name");
      var version = qx.core.Environment.get("browser.version");
      return !(name == "mshtml" && version < 9 || name == "gecko" && version < 3.5);
    },
    /**
     * Throw when already disposed.
     */
    __checkDisposed : function(){

      if(this.__disposed){

        throw new Error("Already disposed");
      };
    }
  },
  defer : function(){

    qx.core.Environment.add("qx.debug.io", false);
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
     * Tristan Koch (tristankoch)
     * Richard Sternagel (rsternagel)

************************************************************************ */
/**
 * Static helpers for handling HTTP requests.
 */
qx.Bootstrap.define("qx.util.Request", {
  statics : {
    /**
     * Whether URL given points to resource that is cross-domain,
     * i.e. not of same origin.
     *
     * @param url {String} URL.
     * @return {Boolean} Whether URL is cross domain.
     */
    isCrossDomain : function(url){

      var result = qx.util.Uri.parseUri(url),location = window.location;
      if(!location){

        return false;
      };
      var protocol = location.protocol;
      // URL is relative in the sence that it points to origin host
      if(!(url.indexOf("//") !== -1)){

        return false;
      };
      if(protocol.substr(0, protocol.length - 1) == result.protocol && location.host === result.host && location.port === result.port){

        return false;
      };
      return true;
    },
    /**
     * Determine if given HTTP status is considered successful.
     *
     * @param status {Number} HTTP status.
     * @return {Boolean} Whether status is considered successful.
     */
    isSuccessful : function(status){

      return (status >= 200 && status < 300 || status === 304);
    },
    /**
     * Determine if given HTTP method is valid.
     *
     * @param method {String} HTTP method.
     * @return {Boolean} Whether method is a valid HTTP method.
     */
    isMethod : function(method){

      var knownMethods = ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS", "TRACE", "CONNECT", "PATCH"];
      return (knownMethods.indexOf(method) !== -1) ? true : false;
    },
    /**
     * Request body is ignored for HTTP method GET and HEAD.
     *
     * See http://www.w3.org/TR/XMLHttpRequest2/#the-send-method.
     *
     * @param method {String} The HTTP method.
     * @return {Boolean} Whether request may contain body.
     */
    methodAllowsRequestBody : function(method){

      return !((/^(GET|HEAD)$/).test(method));
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
     * Carsten Lergenmueller (carstenl)
     * Fabian Jakobs (fbjakobs)
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/**
 * Determines browser-dependent information about the transport layer.
 *
 * This class is used by {@link qx.core.Environment} and should not be used
 * directly. Please check its class comment for details how to use it.
 *
 * @internal
 */
qx.Bootstrap.define("qx.bom.client.Transport", {
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */
  statics : {
    /**
     * Returns the maximum number of parallel requests the current browser
     * supports per host addressed.
     *
     * Note that this assumes one connection can support one request at a time
     * only. Technically, this is not correct when pipelining is enabled (which
     * it currently is only for IE 8 and Opera). In this case, the number
     * returned will be too low, as one connection supports multiple pipelined
     * requests. This is accepted for now because pipelining cannot be
     * detected from JavaScript and because modern browsers have enough
     * parallel connections already - it's unlikely an app will require more
     * than 4 parallel XMLHttpRequests to one server at a time.
     *
     * @internal
     * @return {Integer} Maximum number of parallel requests
     */
    getMaxConcurrentRequestCount : function(){

      var maxConcurrentRequestCount;
      // Parse version numbers.
      var versionParts = qx.bom.client.Engine.getVersion().split(".");
      var versionMain = 0;
      var versionMajor = 0;
      var versionMinor = 0;
      // Main number
      if(versionParts[0]){

        versionMain = versionParts[0];
      };
      // Major number
      if(versionParts[1]){

        versionMajor = versionParts[1];
      };
      // Minor number
      if(versionParts[2]){

        versionMinor = versionParts[2];
      };
      // IE 8 gives the max number of connections in a property
      // see http://msdn.microsoft.com/en-us/library/cc197013(VS.85).aspx
      if(window.maxConnectionsPerServer){

        maxConcurrentRequestCount = window.maxConnectionsPerServer;
      } else if(qx.bom.client.Engine.getName() == "opera"){

        // Opera: 8 total
        // see http://operawiki.info/HttpProtocol
        maxConcurrentRequestCount = 8;
      } else if(qx.bom.client.Engine.getName() == "webkit"){

        // Safari: 4
        // http://www.stevesouders.com/blog/2008/03/20/roundup-on-parallel-connections/
        // Bug #6917: Distinguish Chrome from Safari, Chrome has 6 connections
        //       according to
        //      http://stackoverflow.com/questions/561046/how-many-concurrent-ajax-xmlhttprequest-requests-are-allowed-in-popular-browser
        maxConcurrentRequestCount = 4;
      } else if(qx.bom.client.Engine.getName() == "gecko" && ((versionMain > 1) || ((versionMain == 1) && (versionMajor > 9)) || ((versionMain == 1) && (versionMajor == 9) && (versionMinor >= 1)))){

        // FF 3.5 (== Gecko 1.9.1): 6 Connections.
        // see  http://gemal.dk/blog/2008/03/18/firefox_3_beta_5_will_have_improved_connection_parallelism/
        maxConcurrentRequestCount = 6;
      } else {

        // Default is 2, as demanded by RFC 2616
        // see http://blogs.msdn.com/ie/archive/2005/04/11/407189.aspx
        maxConcurrentRequestCount = 2;
      };;;
      return maxConcurrentRequestCount;
    },
    /**
     * Checks whether the app is loaded with SSL enabled which means via https.
     *
     * @internal
     * @return {Boolean} <code>true</code>, if the app runs on https
     */
    getSsl : function(){

      return window.location.protocol === "https:";
    },
    /**
     * Checks what kind of XMLHttpRequest object the browser supports
     * for the current protocol, if any.
     *
     * The standard XMLHttpRequest is preferred over ActiveX XMLHTTP.
     *
     * @internal
     * @return {String}
     *  <code>"xhr"</code>, if the browser provides standard XMLHttpRequest.<br/>
     *  <code>"activex"</code>, if the browser provides ActiveX XMLHTTP.<br/>
     *  <code>""</code>, if there is not XHR support at all.
     */
    getXmlHttpRequest : function(){

      // Standard XHR can be disabled in IE's security settings,
      // therefore provide ActiveX as fallback. Additionaly,
      // standard XHR in IE7 is broken for file protocol.
      var supports = window.ActiveXObject ? (function(){

        if(window.location.protocol !== "file:"){

          try{

            new window.XMLHttpRequest();
            return "xhr";
          } catch(noXhr) {
          };
        };
        try{

          new window.ActiveXObject("Microsoft.XMLHTTP");
          return "activex";
        } catch(noActiveX) {
        };
      })() : (function(){

        try{

          new window.XMLHttpRequest();
          return "xhr";
        } catch(noXhr) {
        };
      })();
      return supports || "";
    }
  },
  defer : function(statics){

    qx.core.Environment.add("io.maxrequests", statics.getMaxConcurrentRequestCount);
    qx.core.Environment.add("io.ssl", statics.getSsl);
    qx.core.Environment.add("io.xhr", statics.getXmlHttpRequest);
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
     * Martin Wittemann (wittemann)

************************************************************************ */
/**
 * This module provides basic IO functionality. It contains three ways to load
 * data:
 *
 * * XMLHttpRequest
 * * Script tag
 * * Script tag using JSONP
 *
 * @require(qx.bom.request.Xhr#open)
 *
 * @group (IO)
 */
qx.Bootstrap.define("qx.module.Io", {
  statics : {
    /**
     * Returns a configured XMLHttpRequest object. Using the send method will
     * finally send the request.
     *
     * @param url {String} Mandatory URL to load the data from.
     * @param settings {Map?} Optional settings map which may contain one of
     *   the following settings:
     * <ul>
     * <li><code>method</code> The method of the request. Default: <code>GET</code></li>
     * <li><code>async</code> flag to mark the request as asynchronous. Default: <code>true</code></li>
     * <li><code>header</code> A map of request headers.</li>
     * </ul>
     *
     * @attachStatic {qxWeb, io.xhr}
     * @return {qx.bom.request.Xhr} The request object.
     */
    xhr : function(url, settings){

      if(!settings){

        settings = {
        };
      };
      var xhr = new qx.bom.request.Xhr();
      xhr.open(settings.method, url, settings.async);
      if(settings.header){

        var header = settings.header;
        for(var key in header){

          xhr.setRequestHeader(key, header[key]);
        };
      };
      return xhr;
    },
    /**
     * Returns a predefined script tag wrapper which can be used to load data
     * from cross-domain origins.
     *
     * @param url {String} Mandatory URL to load the data from.
     * @attachStatic {qxWeb, io.script}
     * @return {qx.bom.request.Script} The request object.
     */
    script : function(url){

      var script = new qx.bom.request.Script();
      script.open("get", url);
      return script;
    },
    /**
     * Returns a predefined script tag wrapper which can be used to load data
     * from cross-domain origins via JSONP.
     *
     * @param url {String} Mandatory URL to load the data from.
     * @param settings {Map?} Optional settings map which may contain one of
     *   the following settings:
     *
     * * <code>callbackName</code>: The name of the callback which will
     *      be called by the loaded script.
     * * <code>callbackParam</code>: The name of the callback expected by the server
     * @attachStatic {qxWeb, io.jsonp}
     * @return {qx.bom.request.Jsonp} The request object.
     */
    jsonp : function(url, settings){

      var script = new qx.bom.request.Jsonp();
      if(settings && settings.callbackName){

        script.setCallbackName(settings.callbackName);
      };
      if(settings && settings.callbackParam){

        script.setCallbackParam(settings.callbackParam);
      };
      script.setPrefix("qxWeb.$$");
      // needed in case no callback name is given
      script.open("get", url);
      return script;
    }
  },
  defer : function(statics){

    qxWeb.$attachStatic({
      io : {
        xhr : statics.xhr,
        script : statics.script,
        jsonp : statics.jsonp
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
     * Tristan Koch (tristankoch)

************************************************************************ */
/**
 * Script loader with interface similar to
 * <a href="http://www.w3.org/TR/XMLHttpRequest/">XmlHttpRequest</a>.
 *
 * The script loader can be used to load scripts from arbitrary sources.
 * <span class="desktop">
 * For JSONP requests, consider the {@link qx.bom.request.Jsonp} transport
 * that derives from the script loader.
 * </span>
 *
 * <div class="desktop">
 * Example:
 *
 * <pre class="javascript">
 *  var req = new qx.bom.request.Script();
 *  req.onload = function() {
 *    // Script is loaded and parsed and
 *    // globals set are available
 *  }
 *
 *  req.open("GET", url);
 *  req.send();
 * </pre>
 * </div>
 *
 * @ignore(qx.core, qx.core.Environment.*)
 * @require(qx.bom.request.Script#_success)
 * @require(qx.bom.request.Script#abort)
 * @require(qx.bom.request.Script#dispose)
 * @require(qx.bom.request.Script#isDisposed)
 * @require(qx.bom.request.Script#getAllResponseHeaders)
 * @require(qx.bom.request.Script#getResponseHeader)
 * @require(qx.bom.request.Script#setDetermineSuccess)
 * @require(qx.bom.request.Script#setRequestHeader)
 *
 * @group (IO)
 */
qx.Bootstrap.define("qx.bom.request.Script", {
  construct : function(){

    this.__initXhrProperties();
    this.__onNativeLoadBound = qx.Bootstrap.bind(this._onNativeLoad, this);
    this.__onNativeErrorBound = qx.Bootstrap.bind(this._onNativeError, this);
    this.__onTimeoutBound = qx.Bootstrap.bind(this._onTimeout, this);
    this.__headElement = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    this._emitter = new qx.event.Emitter();
    // BUGFIX: Browsers not supporting error handler
    // Set default timeout to capture network errors
    //
    // Note: The script is parsed and executed, before a "load" is fired.
    this.timeout = this.__supportsErrorHandler() ? 0 : 15000;
  },
  events : {
    /** Fired at ready state changes. */
    "readystatechange" : "qx.bom.request.Script",
    /** Fired on error. */
    "error" : "qx.bom.request.Script",
    /** Fired at loadend. */
    "loadend" : "qx.bom.request.Script",
    /** Fired on timeouts. */
    "timeout" : "qx.bom.request.Script",
    /** Fired when the request is aborted. */
    "abort" : "qx.bom.request.Script",
    /** Fired on successful retrieval. */
    "load" : "qx.bom.request.Script"
  },
  members : {
    /**
     * @type {Number} Ready state.
     *
     * States can be:
     * UNSENT:           0,
     * OPENED:           1,
     * LOADING:          2,
     * LOADING:          3,
     * DONE:             4
     *
     * Contrary to {@link qx.bom.request.Xhr#readyState}, the script transport
     * does not receive response headers. For compatibility, another LOADING
     * state is implemented that replaces the HEADERS_RECEIVED state.
     */
    readyState : null,
    /**
     * @type {Number} The status code.
     *
     * Note: The script transport cannot determine the HTTP status code.
     */
    status : null,
    /**
     * @type {String} The status text.
     *
     * The script transport does not receive response headers. For compatibility,
     * the statusText property is set to the status casted to string.
     */
    statusText : null,
    /**
     * @type {Number} Timeout limit in milliseconds.
     *
     * 0 (default) means no timeout.
     */
    timeout : null,
    /**
     * @type {Function} Function that is executed once the script was loaded.
     */
    __determineSuccess : null,
    /**
     * Add an event listener for the given event name.
     *
     * @param name {String} The name of the event to listen to.
     * @param listener {Function} The function to execute when the event is fired
     * @param ctx {var?} The context of the listener.
     * @return {qx.bom.request.Script} Self for chaining.
     */
    on : function(name, listener, ctx){

      this._emitter.on(name, listener, ctx);
      return this;
    },
    /**
     * Initializes (prepares) request.
     *
     * @param method {String}
     *   The HTTP method to use.
     *   This parameter exists for compatibility reasons. The script transport
     *   does not support methods other than GET.
     * @param url {String}
     *   The URL to which to send the request.
     */
    open : function(method, url){

      if(this.__disposed){

        return;
      };
      // Reset XHR properties that may have been set by previous request
      this.__initXhrProperties();
      this.__abort = null;
      this.__url = url;
      if(this.__environmentGet("qx.debug.io")){

        qx.Bootstrap.debug(qx.bom.request.Script, "Open native request with " + "url: " + url);
      };
      this._readyStateChange(1);
    },
    /**
     * Appends a query parameter to URL.
     *
     * This method exists for compatibility reasons. The script transport
     * does not support request headers. However, many services parse query
     * parameters like request headers.
     *
     * Note: The request must be initialized before using this method.
     *
     * @param key {String}
     *  The name of the header whose value is to be set.
     * @param value {String}
     *  The value to set as the body of the header.
     * @return {qx.bom.request.Script} Self for chaining.
     */
    setRequestHeader : function(key, value){

      if(this.__disposed){

        return null;
      };
      var param = {
      };
      if(this.readyState !== 1){

        throw new Error("Invalid state");
      };
      param[key] = value;
      this.__url = qx.util.Uri.appendParamsToUrl(this.__url, param);
      return this;
    },
    /**
     * Sends request.
     * @return {qx.bom.request.Script} Self for chaining.
     */
    send : function(){

      if(this.__disposed){

        return null;
      };
      var script = this.__createScriptElement(),head = this.__headElement,that = this;
      if(this.timeout > 0){

        this.__timeoutId = window.setTimeout(this.__onTimeoutBound, this.timeout);
      };
      if(this.__environmentGet("qx.debug.io")){

        qx.Bootstrap.debug(qx.bom.request.Script, "Send native request");
      };
      // Attach script to DOM
      head.insertBefore(script, head.firstChild);
      // The resource is loaded once the script is in DOM.
      // Assume HEADERS_RECEIVED and LOADING and dispatch async.
      window.setTimeout(function(){

        that._readyStateChange(2);
        that._readyStateChange(3);
      });
      return this;
    },
    /**
     * Aborts request.
     * @return {qx.bom.request.Script} Self for chaining.
     */
    abort : function(){

      if(this.__disposed){

        return null;
      };
      this.__abort = true;
      this.__disposeScriptElement();
      this._emit("abort");
      return this;
    },
    /**
     * Helper to emit events and call the callback methods.
     * @param event {String} The name of the event.
     */
    _emit : function(event){

      this["on" + event]();
      this._emitter.emit(event, this);
    },
    /**
     * Event handler for an event that fires at every state change.
     *
     * Replace with custom method to get informed about the communication progress.
     */
    onreadystatechange : function(){
    },
    /**
     * Event handler for XHR event "load" that is fired on successful retrieval.
     *
     * Note: This handler is called even when an invalid script is returned.
     *
     * Warning: Internet Explorer < 9 receives a false "load" for invalid URLs.
     * This "load" is fired about 2 seconds after sending the request. To
     * distinguish from a real "load", consider defining a custom check
     * function using {@link #setDetermineSuccess} and query the status
     * property. However, the script loaded needs to have a known impact on
     * the global namespace. If this does not work for you, you may be able
     * to set a timeout lower than 2 seconds, depending on script size,
     * complexity and execution time.
     *
     * Replace with custom method to listen to the "load" event.
     */
    onload : function(){
    },
    /**
     * Event handler for XHR event "loadend" that is fired on retrieval.
     *
     * Note: This handler is called even when a network error (or similar)
     * occurred.
     *
     * Replace with custom method to listen to the "loadend" event.
     */
    onloadend : function(){
    },
    /**
     * Event handler for XHR event "error" that is fired on a network error.
     *
     * Note: Some browsers do not support the "error" event.
     *
     * Replace with custom method to listen to the "error" event.
     */
    onerror : function(){
    },
    /**
    * Event handler for XHR event "abort" that is fired when request
    * is aborted.
    *
    * Replace with custom method to listen to the "abort" event.
    */
    onabort : function(){
    },
    /**
    * Event handler for XHR event "timeout" that is fired when timeout
    * interval has passed.
    *
    * Replace with custom method to listen to the "timeout" event.
    */
    ontimeout : function(){
    },
    /**
     * Get a single response header from response.
     *
     * Note: This method exists for compatibility reasons. The script
     * transport does not receive response headers.
     *
     * @param key {String}
     *  Key of the header to get the value from.
     * @return {String|null} Warning message or <code>null</code> if the request
     * is disposed
     */
    getResponseHeader : function(key){

      if(this.__disposed){

        return null;
      };
      if(this.__environmentGet("qx.debug")){

        qx.Bootstrap.debug("Response header cannot be determined for " + "requests made with script transport.");
      };
      return "unknown";
    },
    /**
     * Get all response headers from response.
     *
     * Note: This method exists for compatibility reasons. The script
     * transport does not receive response headers.
     * @return {String|null} Warning message or <code>null</code> if the request
     * is disposed
     */
    getAllResponseHeaders : function(){

      if(this.__disposed){

        return null;
      };
      if(this.__environmentGet("qx.debug")){

        qx.Bootstrap.debug("Response headers cannot be determined for" + "requests made with script transport.");
      };
      return "Unknown response headers";
    },
    /**
     * Determine if loaded script has expected impact on global namespace.
     *
     * The function is called once the script was loaded and must return a
     * boolean indicating if the response is to be considered successful.
     *
     * @param check {Function} Function executed once the script was loaded.
     *
     */
    setDetermineSuccess : function(check){

      this.__determineSuccess = check;
    },
    /**
     * Dispose object.
     */
    dispose : function(){

      var script = this.__scriptElement;
      if(!this.__disposed){

        // Prevent memory leaks
        if(script){

          script.onload = script.onreadystatechange = null;
          this.__disposeScriptElement();
        };
        if(this.__timeoutId){

          window.clearTimeout(this.__timeoutId);
        };
        this.__disposed = true;
      };
    },
    /**
     * Check if the request has already beed disposed.
     * @return {Boolean} <code>true</code>, if the request has been disposed.
     */
    isDisposed : function(){

      return !!this.__disposed;
    },
    /*
    ---------------------------------------------------------------------------
      PROTECTED
    ---------------------------------------------------------------------------
    */
    /**
     * Get URL of request.
     *
     * @return {String} URL of request.
     */
    _getUrl : function(){

      return this.__url;
    },
    /**
     * Get script element used for request.
     *
     * @return {Element} Script element.
     */
    _getScriptElement : function(){

      return this.__scriptElement;
    },
    /**
     * Handle timeout.
     */
    _onTimeout : function(){

      this.__failure();
      if(!this.__supportsErrorHandler()){

        this._emit("error");
      };
      this._emit("timeout");
      if(!this.__supportsErrorHandler()){

        this._emit("loadend");
      };
    },
    /**
     * Handle native load.
     */
    _onNativeLoad : function(){

      var script = this.__scriptElement,determineSuccess = this.__determineSuccess,that = this;
      // Aborted request must not fire load
      if(this.__abort){

        return;
      };
      // BUGFIX: IE < 9
      // When handling "readystatechange" event, skip if readyState
      // does not signal loaded script
      if(this.__environmentGet("engine.name") === "mshtml" && this.__environmentGet("browser.documentmode") < 9){

        if(!(/loaded|complete/).test(script.readyState)){

          return;
        } else {

          if(this.__environmentGet("qx.debug.io")){

            qx.Bootstrap.debug(qx.bom.request.Script, "Received native readyState: loaded");
          };
        };
      };
      if(this.__environmentGet("qx.debug.io")){

        qx.Bootstrap.debug(qx.bom.request.Script, "Received native load");
      };
      // Determine status by calling user-provided check function
      if(determineSuccess){

        // Status set before has higher precedence
        if(!this.status){

          this.status = determineSuccess() ? 200 : 500;
        };
      };
      if(this.status === 500){

        if(this.__environmentGet("qx.debug.io")){

          qx.Bootstrap.debug(qx.bom.request.Script, "Detected error");
        };
      };
      if(this.__timeoutId){

        window.clearTimeout(this.__timeoutId);
      };
      window.setTimeout(function(){

        that._success();
        that._readyStateChange(4);
        that._emit("load");
        that._emit("loadend");
      });
    },
    /**
     * Handle native error.
     */
    _onNativeError : function(){

      this.__failure();
      this._emit("error");
      this._emit("loadend");
    },
    /*
    ---------------------------------------------------------------------------
      PRIVATE
    ---------------------------------------------------------------------------
    */
    /**
     * @type {Element} Script element
     */
    __scriptElement : null,
    /**
     * @type {Element} Head element
     */
    __headElement : null,
    /**
     * @type {String} URL
     */
    __url : "",
    /**
     * @type {Function} Bound _onNativeLoad handler.
     */
    __onNativeLoadBound : null,
    /**
     * @type {Function} Bound _onNativeError handler.
     */
    __onNativeErrorBound : null,
    /**
     * @type {Function} Bound _onTimeout handler.
     */
    __onTimeoutBound : null,
    /**
     * @type {Number} Timeout timer iD.
     */
    __timeoutId : null,
    /**
     * @type {Boolean} Whether request was aborted.
     */
    __abort : null,
    /**
     * @type {Boolean} Whether request was disposed.
     */
    __disposed : null,
    /*
    ---------------------------------------------------------------------------
      HELPER
    ---------------------------------------------------------------------------
    */
    /**
     * Initialize properties.
     */
    __initXhrProperties : function(){

      this.readyState = 0;
      this.status = 0;
      this.statusText = "";
    },
    /**
     * Change readyState.
     *
     * @param readyState {Number} The desired readyState
     */
    _readyStateChange : function(readyState){

      this.readyState = readyState;
      this._emit("readystatechange");
    },
    /**
     * Handle success.
     */
    _success : function(){

      this.__disposeScriptElement();
      this.readyState = 4;
      // By default, load is considered successful
      if(!this.status){

        this.status = 200;
      };
      this.statusText = "" + this.status;
    },
    /**
     * Handle failure.
     */
    __failure : function(){

      this.__disposeScriptElement();
      this.readyState = 4;
      this.status = 0;
      this.statusText = null;
    },
    /**
     * Looks up whether browser supports error handler.
     *
     * @return {Boolean} Whether browser supports error handler.
     */
    __supportsErrorHandler : function(){

      var isLegacyIe = this.__environmentGet("engine.name") === "mshtml" && this.__environmentGet("browser.documentmode") < 9;
      var isOpera = this.__environmentGet("engine.name") === "opera";
      return !(isLegacyIe || isOpera);
    },
    /**
     * Create and configure script element.
     *
     * @return {Element} Configured script element.
     */
    __createScriptElement : function(){

      var script = this.__scriptElement = document.createElement("script");
      script.src = this.__url;
      script.onerror = this.__onNativeErrorBound;
      script.onload = this.__onNativeLoadBound;
      // BUGFIX: IE < 9
      // Legacy IEs do not fire the "load" event for script elements.
      // Instead, they support the "readystatechange" event
      if(this.__environmentGet("engine.name") === "mshtml" && this.__environmentGet("browser.documentmode") < 9){

        script.onreadystatechange = this.__onNativeLoadBound;
      };
      return script;
    },
    /**
     * Remove script element from DOM.
     */
    __disposeScriptElement : function(){

      var script = this.__scriptElement;
      if(script && script.parentNode){

        this.__headElement.removeChild(script);
      };
    },
    /**
     * Proxy Environment.get to guard against env not being present yet.
     *
     * @param key {String} Environment key.
     * @return {var} Value of the queried environment key
     * @lint environmentNonLiteralKey(key)
     */
    __environmentGet : function(key){

      if(qx && qx.core && qx.core.Environment){

        return qx.core.Environment.get(key);
      } else {

        if(key === "engine.name"){

          return qx.bom.client.Engine.getName();
        };
        if(key === "browser.documentmode"){

          return qx.bom.client.Browser.getDocumentMode();
        };
        if(key == "qx.debug.io"){

          return false;
        };
        throw new Error("Unknown environment key at this phase");
      };
    }
  },
  defer : function(){

    if(qx && qx.core && qx.core.Environment){

      qx.core.Environment.add("qx.debug.io", false);
    };
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
     * Tristan Koch (tristankoch)

************************************************************************ */
/**
 * A special script loader handling JSONP responses. Automatically
 * provides callbacks and populates responseJson property.
 *
 * Example:
 *
 * <pre class="javascript">
 *  var req = new qx.bom.request.Jsonp();
 *
 *  // Some services have a fixed callback name
 *  // req.setCallbackName("callback");
 *
 *  req.onload = function() {
 *    // Handle data received
 *    req.responseJson;
 *  }
 *
 *  req.open("GET", url);
 *  req.send();
 * </pre>
 *
 * @require(qx.bom.request.Script#open)
 * @require(qx.bom.request.Script#on)
 * @require(qx.bom.request.Script#onreadystatechange)
 * @require(qx.bom.request.Script#onload)
 * @require(qx.bom.request.Script#onloadend)
 * @require(qx.bom.request.Script#onerror)
 * @require(qx.bom.request.Script#onabort)
 * @require(qx.bom.request.Script#ontimeout)
 * @require(qx.bom.request.Script#send)
 *
 * @group (IO)
 */
qx.Bootstrap.define("qx.bom.request.Jsonp", {
  extend : qx.bom.request.Script,
  construct : function(){

    // Borrow super-class constructor
    qx.bom.request.Script.apply(this);
    this.__generateId();
  },
  members : {
    /**
     * @type {Object} Parsed JSON response.
     */
    responseJson : null,
    /**
     * @type {Number} Identifier of this instance.
     */
    __id : null,
    /**
     * @type {String} Callback parameter.
     */
    __callbackParam : null,
    /**
     * @type {String} Callback name.
     */
    __callbackName : null,
    /**
     * @type {Boolean} Whether callback was called.
     */
    __callbackCalled : null,
    /**
     * @type {Boolean} Whether a custom callback was created automatically.
     */
    __customCallbackCreated : null,
    /**
     * @type {String} The generated URL for the current request
     */
    __generatedUrl : null,
    /**
     * @type {Boolean} Whether request was disposed.
     */
    __disposed : null,
    /** Prefix used for the internal callback name. */
    __prefix : "",
    /**
     * Initializes (prepares) request.
     *
     * @param method {String}
     *   The HTTP method to use.
     *   This parameter exists for compatibility reasons. The script transport
     *   does not support methods other than GET.
     * @param url {String}
     *   The URL to which to send the request.
     */
    open : function(method, url){

      if(this.__disposed){

        return;
      };
      var query = {
      },callbackParam,callbackName,that = this;
      // Reset properties that may have been set by previous request
      this.responseJson = null;
      this.__callbackCalled = false;
      callbackParam = this.__callbackParam || "callback";
      callbackName = this.__callbackName || this.__prefix + "qx.bom.request.Jsonp." + this.__id + ".callback";
      // Default callback
      if(!this.__callbackName){

        // Store globally available reference to this object
        this.constructor[this.__id] = this;
      } else {

        // Dynamically create globally available callback (if it does not
        // exist yet) with user defined name. Delegate to this object’s
        // callback method.
        if(!window[this.__callbackName]){

          this.__customCallbackCreated = true;
          window[this.__callbackName] = function(data){

            that.callback(data);
          };
        } else {

          {
          };
        };
      };
      {
      };
      query[callbackParam] = callbackName;
      this.__generatedUrl = url = qx.util.Uri.appendParamsToUrl(url, query);
      this.__callBase("open", [method, url]);
    },
    /**
     * Callback provided for JSONP response to pass data.
     *
     * Called internally to populate responseJson property
     * and indicate successful status.
     *
     * Note: If you write a custom callback you’ll need to call
     * this method in order to notify the request about the data
     * loaded. Writing a custom callback should not be necessary
     * in most cases.
     *
     * @param data {Object} JSON
     */
    callback : function(data){

      if(this.__disposed){

        return;
      };
      // Signal callback was called
      this.__callbackCalled = true;
      {

        data = qx.lang.Json.stringify(data);
        data = qx.lang.Json.parse(data);
      };
      // Set response
      this.responseJson = data;
      // Delete global reference to this
      this.constructor[this.__id] = undefined;
      this.__deleteCustomCallback();
    },
    /**
     * Set callback parameter.
     *
     * Some JSONP services expect the callback name to be passed labeled with a
     * special URL parameter key, e.g. "jsonp" in "?jsonp=myCallback". The
     * default is "callback".
     *
     * @param param {String} Name of the callback parameter.
     * @return {qx.bom.request.Jsonp} Self reference for chaining.
     */
    setCallbackParam : function(param){

      this.__callbackParam = param;
      return this;
    },
    /**
     * Set callback name.
     *
     * Must be set to the name of the callback function that is called by the
     * script returned from the JSONP service. By default, the callback name
     * references this instance’s {@link #callback} method, allowing to connect
     * multiple JSONP responses to different requests.
     *
     * If the JSONP service allows to set custom callback names, it should not
     * be necessary to change the default. However, some services use a fixed
     * callback name. This is when setting the callbackName is useful. A
     * function is created and made available globally under the given name.
     * The function receives the JSON data and dispatches it to this instance’s
     * {@link #callback} method. Please note that this function is only created
     * if it does not exist before.
     *
     * @param name {String} Name of the callback function.
     * @return {qx.bom.request.Jsonp} Self reference for chaining.
     */
    setCallbackName : function(name){

      this.__callbackName = name;
      return this;
    },
    /**
     * Set the prefix used in front of 'qx.' in case 'qx' is not available
     * (for qx.Website e.g.)
     * @internal
     * @param prefix {String} The prefix to put in front of 'qx'
     */
    setPrefix : function(prefix){

      this.__prefix = prefix;
    },
    /**
     * Returns the generated URL for the current / last request
     *
     * @internal
     * @return {String} The current generated URL for the request
     */
    getGeneratedUrl : function(){

      return this.__generatedUrl;
    },
    dispose : function(){

      // In case callback was not called
      this.__deleteCustomCallback();
      this.__callBase("dispose");
    },
    /**
     * Handle native load.
     */
    _onNativeLoad : function(){

      // Indicate erroneous status (500) if callback was not called.
      //
      // Why 500? 5xx belongs to the range of server errors. If the callback was
      // not called, it is assumed the server failed to provide an appropriate
      // response. Since the exact reason of the error is unknown, the most
      // generic message ("500 Internal Server Error") is chosen.
      this.status = this.__callbackCalled ? 200 : 500;
      this.__callBase("_onNativeLoad");
    },
    /**
     *  Delete custom callback if dynamically created before.
     */
    __deleteCustomCallback : function(){

      if(this.__customCallbackCreated && window[this.__callbackName]){

        window[this.__callbackName] = undefined;
        this.__customCallbackCreated = false;
      };
    },
    /**
     * Call overriden method.
     *
     * @param method {String} Name of the overriden method.
     * @param args {Array} Arguments.
     */
    __callBase : function(method, args){

      qx.bom.request.Script.prototype[method].apply(this, args || []);
    },
    /**
     * Generate ID.
     */
    __generateId : function(){

      // Add random digits to date to allow immediately following requests
      // that may be send at the same time
      this.__id = "qx" + (new Date().valueOf()) + ("" + Math.random()).substring(2, 5);
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