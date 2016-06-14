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
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Richard Sternagel (rsternagel)

************************************************************************ */
/**
 * This modules eases the communication with a RESTful web service by providing
 * a client-side wrapper of a REST resource.
 *
 * See {@link qx.bom.rest.Resource}.
 *
 * @group (IO)
 */
qx.Bootstrap.define("qx.module.Rest", {
  statics : {
    /**
     * @param description {Map?} Each key of the map is interpreted as
     *  <code>action</code> name. The value associated to the key must be a map
     *  with the properties <code>method</code> and <code>url</code>.
     *  <code>check</code> is optional. Also see {@link qx.bom.rest.Resource#map}.
     *
     * For example:
     *
     * <pre class="javascript">
     * { get: {method: "GET", url: "/photos/{id}", check: { id: /\d+/ } }
     * </pre>
     *
     * @attachStatic {qxWeb, rest.resource}
     * @return {qx.bom.rest.Resource} The resource object.
     */
    resource : function(description){

      return new qx.bom.rest.Resource(description);
    }
  },
  defer : function(statics){

    qxWeb.$attachStatic({
      "rest" : {
        "resource" : statics.resource
      }
    });
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Richard Sternagel (rsternagel)

************************************************************************ */
/**
 * Client-side wrapper of a REST resource.
 *
 * Each instance represents a resource in terms of REST. A number of actions
 * (usually HTTP methods) unique to the resource can be defined and invoked.
 * A resource with its actions is configured declaratively by passing a resource
 * description to the constructor, or programatically using {@link #map}.
 *
 * Each action is associated to a route. A route is a combination of method,
 * URL pattern and optional parameter constraints.
 *
 * An action is invoked by calling a method with the same name. When a URL
 * pattern of a route contains positional parameters, those parameters must be
 * passed when invoking the associated action. Also, constraints defined in the
 * route must be satisfied.
 *
 * When an action is invoked, a request is configured according to the associated
 * route, is passed the URL parameters, request body data, and finally send.
 * What kind of request is send can be configured by overwriting {@link #_getRequest}.
 *
 * No contraints on the action's name or the scope of the URLs are imposed. However,
 * if you want to follow RESTful design patterns it is recommended to name actions
 * the same as the HTTP action.
 *
 * <pre class="javascript">
 * var description = {
 *  "get": { method: "GET", url: "/photo/{id}" },
 *  "put": { method: "PUT", url: "/photo/{id}"},
 *  "post": { method: "POST", url: "/photos/"}
 * };
 * var photo = new qx.bom.rest.Resource(description);
 * // Can also be written: photo.invoke("get", {id: 1});
 * photo.get({id: 1});
 *
 * // Additionally sets request data (provide it as string or set the content type)
 * // In a RESTful environment this creates a new resource with the given 'id'
 * photo.configureRequest(function(req) {
 *  req.setRequestHeader("Content-Type", "application/json");
 * });
 * photo.put({id: 1}, {title: "Monkey"});
 *
 * // Additionally sets request data (provide it as string or set the content type)
 * // In a RESTful environment this adds a new resource to the resource collection 'photos'
 * photo.configureRequest(function(req) {
 *  req.setRequestHeader("Content-Type", "application/json");
 * });
 * photo.post(null, {title: "Monkey"});
 * </pre>
 *
 * To check for existence of URL parameters or constrain them to a certain format, you
 * can add a <code>check</code> property to the description. See {@link #map} for details.
 *
 * <pre class="javascript">
 * var description = {
 *  "get": { method: "GET", url: "/photo/{id}", check: { id: /\d+/ } }
 * };
 * var photo = new qx.bom.rest.Resource(description);
 * // photo.get({id: "FAIL"});
 * // -- Error: "Parameter 'id' is invalid"
 * </pre>
 *
 * If your description happens to use the same action more than once, consider
 * defining another resource.
 *
 * <pre class="javascript">
 * var description = {
 *  "get": { method: "GET", url: "/photos"},
 * };
 * // Distinguish "photo" (singular) and "photos" (plural) resource
 * var photos = new qx.bom.rest.Resource(description);
 * photos.get();
 * </pre>
 *
 * Basically, all routes of a resource should point to the same URL (resource in
 * terms of HTTP). One acceptable exception of this constraint are resources where
 * required parameters are part of the URL (<code>/photos/1/</code>) or filter
 * resources. For instance:
 *
 * <pre class="javascript">
 * var description = {
 *  "get": { method: "GET", url: "/photos/{tag}" }
 * };
 * var photos = new qx.bom.rest.Resource(description);
 * photos.get();
 * photos.get({tag: "wildlife"})
 * </pre>
 *
 * Strictly speaking, the <code>photos</code> instance represents two distinct resources
 * and could therefore just as well mapped to two distinct resources (for instance,
 * named photos and photosTagged). What style to choose depends on the kind of data
 * returned. For instance, it seems sensible to stick with one resource if the filter
 * only limits the result set (i.e. the invidual results have the same properties).
 *
 * In order to respond to successful (or erroneous) invocations of actions,
 * either listen to the generic "success" or "error" event and get the action
 * from the event data, or listen to action specific events defined at runtime.
 * Action specific events follow the pattern "&lt;action&gt;Success" and
 * "&lt;action&gt;Error", e.g. "indexSuccess".
 *
 * @group (IO)
 * @ignore(qx.core.Object.*)
 */
qx.Bootstrap.define("qx.bom.rest.Resource", {
  extend : qx.event.Emitter,
  /**
   * @param description {Map?} Each key of the map is interpreted as
   *  <code>action</code> name. The value associated to the key must be a map
   *  with the properties <code>method</code> and <code>url</code>.
   *  <code>check</code> is optional. Also see {@link #map}.
   *
   * For example:
   *
   * <pre class="javascript">
   * { get: {method: "GET", url: "/photos/{id}", check: { id: /\d+/ }} }
   * </pre>
   *
   * @see qx.bom.rest
   * @see qx.io.rest
   */
  construct : function(description){

    this.__requests = {
    };
    this.__routes = {
    };
    this.__pollTimers = {
    };
    this.__longPollHandlers = {
    };
    try{

      if(typeof description !== "undefined"){

        {

          qx.core.Assert.assertMap(description);
        };
        this.__mapFromDescription(description);
      };
    } catch(e) {

      this.dispose();
      throw e;
    };
  },
  events : {
    /**
     * Fired when any request was successful.
     *
     * The action the successful request is associated to, as well as the
     * request itself, can be retrieved from the event’s properties.
     * Additionally, an action specific event is fired that follows the pattern
     * "<action>Success", e.g. "indexSuccess".
     */
    "success" : "qx.bom.rest.Resource",
    /**
     * Fired when request associated to action given in prefix was successful.
     *
     * For example, "indexSuccess" is fired when <code>index()</code> was
     * successful.
     */
    "actionSuccess" : "qx.bom.rest.Resource",
    /**
     * Fired when any request fails.
     *
     * The action the failed request is associated to, as well as the
     * request itself, can be retrieved from the event’s properties.
     * Additionally, an action specific event is fired that follows the pattern
     * "<action>Error", e.g. "indexError".
     */
    "error" : "qx.bom.rest.Resource",
    /**
     * Fired when any request associated to action given in prefix fails.
     *
     * For example, "indexError" is fired when <code>index()</code> failed.
     */
    "actionError" : "qx.bom.rest.Resource"
  },
  statics : {
    /**
     * Number of milliseconds below a long-poll request is considered immediate and
     * subject to throttling checks.
     */
    POLL_THROTTLE_LIMIT : 100,
    /**
     * Number of immediate long-poll responses accepted before throttling takes place.
     */
    POLL_THROTTLE_COUNT : 30,
    /**
     * A symbol used in checks to declare required parameter.
     */
    REQUIRED : true,
    /**
     * Get placeholders from URL.
     *
     * @param url {String} The URL to parse for placeholders.
     * @return {Array} Array of placeholders without the placeholder prefix.
     */
    placeholdersFromUrl : function(url){

      var placeholderRe = /\{(\w+)(=\w+)?\}/g,match,placeholders = [];
      // With g flag set, searching begins at the regex object's
      // lastIndex, which is zero initially and increments with each match.
      while((match = placeholderRe.exec(url))){

        placeholders.push(match[1]);
      };
      return placeholders;
    }
  },
  members : {
    __requests : null,
    __routes : null,
    __baseUrl : null,
    __pollTimers : null,
    __longPollHandlers : null,
    __configureRequestCallback : null,
    /**
     * @type {Map} Request callbacks for 'onsuccess', 'onfail' and 'onloadend' - see {@link #setRequestHandler}.
     */
    __requestHandler : null,
    /**
     * @type {Function} Function which returns instances from {@link qx.io.request.AbstractRequest}.
     */
    __begetRequest : null,
    //
    // Request
    //
    /**
     * Set a request factory function to switch the request implementation.
     * The created requests have to implement {@link qx.io.request.AbstractRequest}.
     *
     * @param fn {Function} Function which returns request instances.
     *
     * @internal
     */
    setRequestFactory : function(fn){

      this.__begetRequest = fn;
    },
    /**
     * Sets request callbacks for 'onsuccess', 'onfail' and 'onloadend'.
     *
     * @param handler {Map} Map defining callbacks and their context.
     *
     * For example:
     *
     * <pre class="javascript">
     * {
     *   onsuccess: {
     *    callback: function(req, action) { ... },
     *    context: obj
     *   }
     *   onfail: {
     *    callback: function(req, action) { ... },
     *    context: obj
     *   }
     *   onloadend: {
     *    callback: function(req, action) { ... },
     *    context: obj
     *   }
     * }
     * </pre>
     *
     * @internal
     */
    setRequestHandler : function(handler){

      this.__requestHandler = handler;
    },
    /**
     * Provides the request callbacks for 'onsuccess', 'onfail' and 'onloadend'.
     *
     * @return {Map} Map defining callbacks and their context.
     *
     * For example:
     *
     * <pre class="javascript">
     * {
     *   onsuccess: {
     *    callback: function(req, action) { ... },
     *    context: obj
     *   }
     *   onfail: {
     *    callback: function(req, action) { ... },
     *    context: obj
     *   }
     *   onloadend: {
     *    callback: function(req, action) { ... },
     *    context: obj
     *   }
     * }
     * </pre>
     */
    _getRequestHandler : function(){

      return (this.__requestHandler === null) ? {
        onsuccess : {
          callback : function(req, action){

            return function(){

              var response = {
                "id" : parseInt(req.toHashCode(), 10),
                "response" : req.getResponse(),
                "request" : req,
                "action" : action
              };
              this.emit(action + "Success", response);
              this.emit("success", response);
            };
          },
          context : this
        },
        onfail : {
          callback : function(req, action){

            return function(){

              var response = {
                "id" : parseInt(req.toHashCode(), 10),
                "response" : req.getResponse(),
                "request" : req,
                "action" : action
              };
              this.emit(action + "Error", response);
              this.emit("error", response);
            };
          },
          context : this
        },
        onloadend : {
          callback : function(req, action){

            return function(){

              req.dispose();
            };
          },
          context : this
        }
      } : this.__requestHandler;
    },
    /**
     * Retrieve the currently stored request objects for an action.
     *
     * @param action {String} The action (e.g. "get", "post" ...).
     * @return {Array|null} Request objects.
     *
     * @internal
     */
    getRequestsByAction : function(action){

      var hasRequests = (this.__requests !== null && action in this.__requests);
      return hasRequests ? this.__requests[action] : null;
    },
    /**
     * Configure request.
     *
     * @param callback {Function} Function called before request is send.
     *   Receives request, action, params and data.
     *
     * <pre class="javascript">
     * res.configureRequest(function(req, action, params, data) {
     *   if (action === "index") {
     *     req.setRequestHeader("Accept", "application/json");
     *   }
     * });
     * </pre>
     */
    configureRequest : function(callback){

      this.__configureRequestCallback = callback;
    },
    /**
     * Get request.
     *
     * May be overriden to change type of request.
     * @return {qx.bom.request.SimpleXhr|qx.io.request.AbstractRequest} Request object
     */
    _getRequest : function(){

      return (this.__begetRequest === null) ? new qx.bom.request.SimpleXhr() : this.__begetRequest();
    },
    /**
     * Create request.
     *
     * @param action {String} The action the created request is associated to.
     * @return {qx.bom.request.SimpleXhr|qx.io.request.AbstractRequest} Request object
     */
    __createRequest : function(action){

      var req = this._getRequest();
      if(!qx.lang.Type.isArray(this.__requests[action])){

        this.__requests[action] = [];
      };
      this.__requests[action].push(req);
      return req;
    },
    //
    // Routes and actions
    //
    /**
     * Map action to combination of method and URL pattern.
     *
     * <pre class="javascript">
     *   res.map("get", "GET", "/photos/{id}", {id: /\d+/});
     *
     *   // GET /photos/123
     *   res.get({id: "123"});
     * </pre>
     *
     * @param action {String} Action to associate to request.
     * @param method {String} Method to configure request with.
     * @param url {String} URL to configure request with. May contain positional
     *   parameters (<code>{param}</code>) that are replaced by values given when the action
     *   is invoked. Parameters are optional, unless a check is defined. A default
     *   value can be provided (<code>{param=default}</code>).
     * @param check {Map?} Map defining parameter constraints, where the key is
     *   the URL parameter and the value a regular expression (to match string) or
     *   <code>qx.bom.rest.Resource.REQUIRED</code> (to verify existence).
     */
    map : function(action, method, url, check){

      this.__routes[action] = [method, url, check];
      // Track requests
      this.__requests[action] = [];
      // Undefine generic getter when action is named "get"
      if(action == "get"){

        this[action] = undefined;
      };
      // Do not overwrite existing "non-action" methods unless the method is
      // null (i.e. because it exists as a stub for documentation)
      if(typeof this[action] !== "undefined" && this[action] !== null && this[action].action !== true){

        throw new Error("Method with name of action (" + action + ") already exists");
      };
      this.__declareEvent(action + "Success");
      this.__declareEvent(action + "Error");
      this[action] = qx.lang.Function.bind(function(){

        Array.prototype.unshift.call(arguments, action);
        return this.invoke.apply(this, arguments);
      }, this);
      // Method is safe to overwrite
      this[action].action = true;
    },
    /**
     * Invoke action with parameters.
     *
     * Internally called by actions dynamically created.
     *
     * May be overriden to customize action and parameter handling.
     *
     * @lint ignoreUnused(successHandler, failHandler, loadEndHandler)
     *
     * @param action {String} Action to invoke.
     * @param params {Map} Map of parameters inserted into URL when a matching
     *  positional parameter is found.
     * @param data {Map|String} Data to be send as part of the request.
     *  See {@link qx.bom.request.SimpleXhr#getRequestData}.
     *  See {@link qx.io.request.AbstractRequest#requestData}.
     * @return {Number} Id of the action's invocation.
     */
    invoke : function(action, params, data){

      var req = this.__createRequest(action),params = params == null ? {
      } : params,config = this._getRequestConfig(action, params);
      // Cache parameters
      this.__routes[action].params = params;
      // Check parameters
      this.__checkParameters(params, config.check);
      // Configure request
      this.__configureRequest(req, config, data);
      // Run configuration callback, passing in pre-configured request
      if(this.__configureRequestCallback){

        this.__configureRequestCallback.call(this, req, action, params, data);
      };
      // Configure JSON request (content type may have been set in configuration callback)
      this.__configureJsonRequest(req, config, data);
      var reqHandler = this._getRequestHandler();
      // Handle successful request
      req.addListenerOnce("success", reqHandler.onsuccess.callback(req, action), reqHandler.onsuccess.context);
      // Handle erroneous request
      req.addListenerOnce("fail", reqHandler.onfail.callback(req, action), reqHandler.onfail.context);
      // Handle loadend (Note that loadEnd is fired after "success")
      req.addListenerOnce("loadEnd", reqHandler.onloadend.callback(req, action), reqHandler.onloadend.context);
      req.send();
      return parseInt(req.toHashCode(), 10);
    },
    /**
     * Set base URL.
     *
     * The base URL is prepended to the URLs given in the description.
     * Changes affect all future invocations.
     *
     * @param baseUrl {String} Base URL.
     */
    setBaseUrl : function(baseUrl){

      this.__baseUrl = baseUrl;
    },
    /**
     * Check parameters.
     *
     * @param params {Map} Parameters.
     * @param check {Map} Checks.
     */
    __checkParameters : function(params, check){

      if(typeof check !== "undefined"){

        {

          qx.core.Assert.assertObject(check, "Check must be object with params as keys");
        };
        Object.keys(check).forEach(function(param){

          {

            if(check[param] !== true){

              {

                qx.core.Assert.assertRegExp(check[param]);
              };
            };
          };
          // Missing parameter
          if(check[param] === qx.bom.rest.Resource.REQUIRED && typeof params[param] === "undefined"){

            throw new Error("Missing parameter '" + param + "'");
          };
          // Ignore invalid checks
          if(!(check[param] && typeof check[param].test == "function")){

            return;
          };
          // Invalid parameter
          if(!check[param].test(params[param])){

            throw new Error("Parameter '" + param + "' is invalid");
          };
        });
      };
    },
    /**
     * Configure request.
     *
     * @param req {qx.bom.request.SimpleXhr|qx.io.request.AbstractRequest} Request.
     * @param config {Map} Configuration.
     * @param data {Map} Data.
     */
    __configureRequest : function(req, config, data){

      req.setUrl(config.url);
      if(!req.setMethod && config.method !== "GET"){

        throw new Error("Request (" + req.classname + ") doesn't support other HTTP methods than 'GET'");
      };
      if(req.setMethod){

        req.setMethod(config.method);
      };
      if(data){

        req.setRequestData(data);
      };
    },
    /**
     * Serialize data to JSON when content type indicates.
     *
     * @param req {qx.bom.request.SimpleXhr|qx.io.request.AbstractRequest} Request.
     * @param config {Map} Configuration.
     * @param data {Map} Data.
     */
    __configureJsonRequest : function(req, config, data){

      if(data){

        var contentType = req.getRequestHeader("Content-Type");
        if(req.getMethod && qx.util.Request.methodAllowsRequestBody(req.getMethod())){

          if(/application\/.*\+?json/.test(contentType)){

            data = qx.lang.Json.stringify(data);
            req.setRequestData(data);
          };
        };
      };
    },
    /**
     * Abort action.
     *
     * Example:
     *
     * <pre class="javascript">
     *   // Abort all invocations of action
     *   res.get({id: 1});
     *   res.get({id: 2});
     *   res.abort("get");
     *
     *   // Abort specific invocation of action (by id)
     *   var actionId = res.get({id: 1});
     *   res.abort(actionId);
     * </pre>
     *
     * @param varargs {String|Number} Action of which all invocations to abort
     *  (when string), or a single invocation of an action to abort (when number)
     */
    abort : function(varargs){

      if(qx.lang.Type.isNumber(varargs)){

        var id = varargs;
        var post = qx.core.ObjectRegistry.getPostId();
        var req = qx.core.ObjectRegistry.fromHashCode(id + post);
        if(req){

          req.abort();
        };
      } else {

        var action = varargs;
        var reqs = this.__requests[action];
        if(this.__requests[action]){

          reqs.forEach(function(req){

            req.abort();
          });
        };
      };
    },
    /**
     * Resend request associated to action.
     *
     * Replays parameters given when action was invoked originally.
     *
     * @param action {String} Action to refresh.
     */
    refresh : function(action){

      this.invoke(action, this.__routes[action].params);
    },
    /**
     * Periodically invoke action.
     *
     * Replays parameters given when action was invoked originally. When the
     * action was not yet invoked and requires parameters, parameters must be
     * given.
     *
     * Please note that IE tends to cache overly agressive. One work-around is
     * to disable caching on the client side by configuring the request with
     * <code>setCache(false)</code>. If you control the server, a better
     * work-around is to include appropriate headers to explicitly control
     * caching. This way you still avoid requests that can be correctly answered
     * from cache (e.g. when nothing has changed since the last poll). Please
     * refer to <a href="http://www.mnot.net/javascript/xmlhttprequest/cache.html">
     * XMLHttpRequest Caching Test</a> for available options.
     *
     * @lint ignoreUnused(intervalListener)
     *
     * @param action {String} Action to poll.
     * @param interval {Number} Interval in ms.
     * @param params {Map?} Map of parameters. See {@link #invoke}.
     * @param immediately {Boolean?false} <code>true</code>, if the poll should
     *   invoke a call immediately.
     */
    poll : function(action, interval, params, immediately){

      // Dispose timer previously created for action
      if(this.__pollTimers[action]){

        this.stopPollByAction(action);
      };
      // Fallback to previous params
      if(typeof params == "undefined"){

        params = this.__routes[action].params;
      };
      // Invoke immediately
      if(immediately){

        this.invoke(action, params);
      };
      var intervalListener = (function(scope){

        return function(){

          var req = scope.__requests[action][0];
          if(!immediately && !req){

            scope.invoke(action, params);
            return;
          };
          if(req.isDone() || req.isDisposed()){

            scope.refresh(action);
          };
        };
      })(this);
      this._startPoll(action, intervalListener, interval);
    },
    /**
     * Start a poll process.
     *
     * @param action {String} Action to poll.
     * @param listener {Function} The function to repeatedly execute at the given interval.
     * @param interval {Number} Interval in ms.
     */
    _startPoll : function(action, listener, interval){

      this.__pollTimers[action] = {
        "id" : window.setInterval(listener, interval),
        "interval" : interval,
        "listener" : listener
      };
    },
    /**
     * Stops a poll process by the associated action.
     *
     * @param action {String} Action to poll.
     */
    stopPollByAction : function(action){

      if(action in this.__pollTimers){

        var intervalId = this.__pollTimers[action].id;
        window.clearInterval(intervalId);
      };
    },
    /**
     * Restarts a poll process by the associated action.
     *
     * @param action {String} Action to poll.
     */
    restartPollByAction : function(action){

      if(action in this.__pollTimers){

        var timer = this.__pollTimers[action];
        this.stopPollByAction(action);
        this._startPoll(action, timer.listener, timer.interval);
      };
    },
    /**
     * Long-poll action.
     *
     * Use Ajax long-polling to continously fetch a resource as soon as the
     * server signals new data. The server determines when new data is available,
     * while the client keeps open a request. Requires configuration on the
     * server side. Basically, the server must not close a connection until
     * new data is available. For a high level introduction to long-polling,
     * refer to <a href="http://en.wikipedia.org/wiki/Comet_(programming)#Ajax_with_long_polling">
     * Ajax with long polling</a>.
     *
     * Uses {@link #refresh} internally. Make sure you understand the
     * implications of IE's tendency to cache overly agressive.
     *
     * Note no interval is given on the client side.
     *
     * @lint ignoreUnused(longPollHandler)
     *
     * @param action {String} Action to poll.
     * @return {String} Id of handler responsible for long-polling. To stop
     *  polling, remove handler using {@link qx.core.Object#removeListenerById}.
     */
    longPoll : function(action){

      var res = this,lastResponse,// Keep track of last response
      immediateResponseCount = 0;
      // Count immediate responses
      // Throttle to prevent high load on server and client
      function throttle(){

        var isImmediateResponse = lastResponse && ((new Date()) - lastResponse) < res._getThrottleLimit();
        if(isImmediateResponse){

          immediateResponseCount += 1;
          if(immediateResponseCount > res._getThrottleCount()){

            {

              qx.Bootstrap.debug("Received successful response more than " + res._getThrottleCount() + " times subsequently, each within " + res._getThrottleLimit() + " ms. Throttling.");
            };
            return true;
          };
        };
        // Reset counter on delayed response
        if(!isImmediateResponse){

          immediateResponseCount = 0;
        };
        return false;
      };
      var handlerId = this.__longPollHandlers[action] = this.addListener(action + "Success", function longPollHandler(){

        if(res.isDisposed()){

          return;
        };
        if(!throttle()){

          lastResponse = new Date();
          res.refresh(action);
        };
      });
      this.invoke(action);
      return handlerId;
    },
    /**
     * Get request configuration for action and parameters.
     *
     * This is were placeholders are replaced with parameters.
     *
     * @param action {String} Action associated to request.
     * @param params {Map} Parameters to embed in request.
     * @return {Map} Map of configuration settings. Has the properties
     *   <code>method</code>, <code>url</code> and <code>check</code>.
     */
    _getRequestConfig : function(action, params){

      var route = this.__routes[action];
      // Not modify original params
      var params = qx.lang.Object.clone(params);
      if(!qx.lang.Type.isArray(route)){

        throw new Error("No route for action " + action);
      };
      var method = route[0],url = this.__baseUrl !== null ? this.__baseUrl + route[1] : route[1],check = route[2],placeholders = qx.bom.rest.Resource.placeholdersFromUrl(url);
      params = params || {
      };
      placeholders.forEach(function(placeholder){

        // Placeholder part of template and default value
        var re = new RegExp("{" + placeholder + "=?(\\w+)?}"),defaultValue = url.match(re)[1];
        // Fill in default or empty string when missing
        if(typeof params[placeholder] === "undefined"){

          if(defaultValue){

            params[placeholder] = defaultValue;
          } else {

            params[placeholder] = "";
          };
        };
        url = url.replace(re, params[placeholder]);
      });
      return {
        method : method,
        url : url,
        check : check
      };
    },
    /**
     * Override to adjust the throttle limit.
     * @return {Integer} Throttle limit in milliseconds
     */
    _getThrottleLimit : function(){

      return qx.bom.rest.Resource.POLL_THROTTLE_LIMIT;
    },
    /**
     * Override to adjust the throttle count.
     * @return {Integer} Throttle count
     */
    _getThrottleCount : function(){

      return qx.bom.rest.Resource.POLL_THROTTLE_COUNT;
    },
    /**
     * Map actions from description.
     *
     * Allows to decoratively define routes.
     *
     * @param description {Map} Map that defines the routes.
     */
    __mapFromDescription : function(description){

      Object.keys(description).forEach(function(action){

        var route = description[action],method = route.method,url = route.url,check = route.check;
        {

          qx.core.Assert.assertString(method, "Method must be string for route '" + action + "'");
          qx.core.Assert.assertString(url, "URL must be string for route '" + action + "'");
        };
        this.map(action, method, url, check);
      }, this);
    },
    /**
     * Declare event at runtime.
     *
     * @param type {String} Type of event.
     */
    __declareEvent : function(type){

      if(!this.constructor.$$events){

        this.constructor.$$events = {
        };
      };
      if(!this.constructor.$$events[type]){

        this.constructor.$$events[type] = "qx.bom.rest.Resource";
      };
    },
    /*
    ---------------------------------------------------------------------------
      DISPOSER
    ---------------------------------------------------------------------------
    */
    /**
     * Returns true if the object is disposed.
     *
     * @return {Boolean} Whether the object has been disposed
     */
    isDisposed : function(){

      return this.$$disposed || false;
    },
    /**
     * Dispose this object
     *
     */
    dispose : function(){

      // Check first
      if(this.$$disposed){

        return;
      };
      // Mark as disposed (directly, not at end, to omit recursions)
      this.$$disposed = true;
      {

        if(qx.core.Environment.get("qx.debug.dispose.level") > 2){

          qx.Bootstrap.debug(this, "Disposing " + this.classname + "[" + this.toHashCode() + "]");
        };
      };
      this.destruct();
      {

        if(qx.core.Environment.get("qx.debug.dispose.level") > 0){

          var key,value;
          for(key in this){

            value = this[key];
            // Check for Objects but respect values attached to the prototype itself
            if(value !== null && typeof value === "object" && !(qx.Bootstrap.isString(value))){

              // Check prototype value
              // undefined is the best, but null may be used as a placeholder for
              // private variables (hint: checks in qx.Class.define). We accept both.
              if(this.constructor.prototype[key] != null){

                continue;
              };
              var ff2 = navigator.userAgent.indexOf("rv:1.8.1") != -1;
              var ie6 = navigator.userAgent.indexOf("MSIE 6.0") != -1;
              // keep the old behavior for IE6 and FF2
              if(ff2 || ie6){

                if(qx.core.Object && value instanceof qx.core.Object || qx.core.Environment.get("qx.debug.dispose.level") > 1){

                  qx.Bootstrap.warn(this, "Missing destruct definition for '" + key + "' in " + this.classname + "[" + this.toHashCode() + "]: " + value);
                  delete this[key];
                };
              } else {

                if(qx.core.Environment.get("qx.debug.dispose.level") > 1){

                  qx.Bootstrap.warn(this, "Missing destruct definition for '" + key + "' in " + this.classname + "[" + this.toHashCode() + "]: " + value);
                  delete this[key];
                };
              };
            };
          };
        };
      };
    },
    /**
     * Desctructs the Resource.
     *
     * All created requests, routes and pollTimers will be disposed.
     */
    destruct : function(){

      var action;
      for(action in this.__requests){

        if(this.__requests[action]){

          this.__requests[action].forEach(function(req){

            req.dispose();
          });
        };
      };
      if(this.__pollTimers){

        for(action in this.__pollTimers){

          this.stopPollByAction(action);
        };
      };
      if(this.__longPollHandlers){

        for(action in this.__longPollHandlers){

          var id = this.__longPollHandlers[action];
          this.removeListenerById(id);
        };
      };
      this.__requests = this.__routes = this.__pollTimers = null;
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
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Richard Sternagel (rsternagel)

************************************************************************ */
/**
 * This class is internal because it's tailored to {@link qx.io.rest.Resource}
 * which needs more functionality than {@link qx.bom.request.Xhr} provides.
 * The usage of {@link qx.io.request.Xhr} isn't possible either due to it's qx.Class nature.
 *
 * For alternatives to this class have a look at:
 *
 * * "qx.bom.request.Xhr" (low level, cross-browser XHR abstraction compatible with spec)
 * * "qx.io.request.Xhr" (high level XHR abstraction)
 *
 * A wrapper of {@link qx.bom.request.Xhr} which offers:
 *
 * * set/get HTTP method, URL, request data and headers
 * * retrieve the parsed response as object (content-type recognition)
 * * more fine-grained events such as success, fail, ...
 * * supports hash code for request identification
 *
 * It does *not* comply the interface defined by {@link qx.bom.request.IRequest}.
 *
 * <div class="desktop">
 * Example:
 *
 * <pre class="javascript">
 *  var req = new qx.bom.request.SimpleXhr("/some/path/file.json");
 *  req.setRequestData({"a":"b"});
 *  req.once("success", function successHandler() {
 *    var response = req.getResponse();
 *  }, this);
 *  req.once("fail", function successHandler() {
 *    var response = req.getResponse();
 *  }, this);
 *  req.send();
 * </pre>
 * </div>
 *
 * @internal
 */
qx.Bootstrap.define("qx.bom.request.SimpleXhr", {
  extend : Object,
  /**
   * @param url {String?} The URL of the resource to request.
   * @param method {String?"GET"} The HTTP method.
   */
  construct : function(url, method){

    if(url !== undefined){

      this.setUrl(url);
    };
    this.useCaching(true);
    this.setMethod((method !== undefined) ? method : "GET");
    this._transport = this._registerTransportListener(this._createTransport());
    qx.core.ObjectRegistry.register(this);
    this.__requestHeaders = {
    };
    this.__parser = this._createResponseParser();
  },
  members : {
    /*
    ---------------------------------------------------------------------------
      PUBLIC
    ---------------------------------------------------------------------------
    */
    /**
     * Sets a request header.
     *
     * @param key {String} Key of the header.
     * @param value {String} Value of the header.
     * @return {qx.bom.request.SimpleXhr} Self for chaining.
     */
    setRequestHeader : function(key, value){

      this.__requestHeaders[key] = value;
      return this;
    },
    /**
     * Gets a request header.
     *
     * @param key {String} Key of the header.
     * @return {String} The value of the header.
     */
    getRequestHeader : function(key){

      return this.__requestHeaders[key];
    },
    /**
     * Sets the URL.
     *
     * @param url {String} URL to be requested.
     * @return {qx.bom.request.SimpleXhr} Self for chaining.
     */
    setUrl : function(url){

      if(qx.lang.Type.isString(url)){

        this.__url = url;
      };
      return this;
    },
    /**
     * Gets the URL.
     *
     * @return {String} URL to be requested.
     */
    getUrl : function(){

      return this.__url;
    },
    /**
     * Sets the HTTP-Method.
     *
     * @param method {String} The method.
     * @return {qx.bom.request.SimpleXhr} Self for chaining.
     */
    setMethod : function(method){

      if(qx.util.Request.isMethod(method)){

        this.__method = method;
      };
      return this;
    },
    /**
     * Gets the HTTP-Method.
     *
     * @return {String} The method.
     */
    getMethod : function(){

      return this.__method;
    },
    /**
     * Sets the request data to be send as part of the request.
     *
     * The request data is transparently included as URL query parameters or embedded in the
     * request body as form data.
     *
     * @param data {String|Object} The request data.
     * @return {qx.bom.request.SimpleXhr} Self for chaining.
     */
    setRequestData : function(data){

      if(qx.lang.Type.isString(data) || qx.lang.Type.isObject(data)){

        this.__requestData = data;
      };
      return this;
    },
    /**
     * Gets the request data.
     *
     * @return {String} The request data.
     */
    getRequestData : function(){

      return this.__requestData;
    },
    /**
     * Gets parsed response.
     *
     * If problems occured an empty string ("") is more likely to be returned (instead of null).
     *
     * @return {String|null} The parsed response of the request.
     */
    getResponse : function(){

      if(this.__response !== null){

        return this.__response;
      } else {

        return (this._transport.responseXML !== null) ? this._transport.responseXML : this._transport.responseText;
      };
      return null;
    },
    /**
     * Gets low-level transport.
     *
     * Note: To be used with caution!
     *
     * This method can be used to query the transport directly,
     * but should be used with caution. Especially, it
     * is not advisable to call any destructive methods
     * such as <code>open</code> or <code>send</code>.
     *
     * @return {Object} An instance of a class found in
     *  <code>qx.bom.request.*</code>
     */
    // This method mainly exists so that some methods found in the
    // low-level transport can be deliberately omitted here,
    // but still be accessed should it be absolutely necessary.
    //
    // Valid use cases include to query the transport’s responseXML
    // property if performance is critical and any extra parsing
    // should be avoided at all costs.
    //
    getTransport : function(){

      return this._transport;
    },
    /**
     * Sets (i.e. override) the parser for the response parsing.
     *
     * @see qx.util.ResponseParser#setParser
     *
     * @param parser {String|Function}
     * @return {Function} The parser function
     */
    setParser : function(parser){

      return this.__parser.setParser(parser);
    },
    /**
     * Sets the timout limit in milliseconds.
     *
     * @param millis {Number} limit in milliseconds.
     * @return {qx.bom.request.SimpleXhr} Self for chaining.
     */
    setTimeout : function(millis){

      if(qx.lang.Type.isNumber(millis)){

        this.__timeout = millis;
      };
      return this;
    },
    /**
     * The current timeout in milliseconds.
     *
     * @return {Number} The current timeout in milliseconds.
     */
    getTimeout : function(){

      return this.__timeout;
    },
    /**
     * Whether to allow request to be answered from cache.
     *
     * Allowed values:
     *
     * * <code>true</code>: Allow caching (Default)
     * * <code>false</code>: Prohibit caching. Appends 'nocache' parameter to URL.
     *
     * Consider setting a Cache-Control header instead. A request’s Cache-Control
     * header may contain a number of directives controlling the behavior of
     * any caches in between client and origin server and allows therefore a more
     * fine grained control over caching. If such a header is provided, the setting
     * of setCache() will be ignored.
     *
     * * <code>"no-cache"</code>: Force caches to submit request in order to
     * validate the freshness of the representation. Note that the requested
     * resource may still be served from cache if the representation is
     * considered fresh. Use this directive to ensure freshness but save
     * bandwidth when possible.
     * * <code>"no-store"</code>: Do not keep a copy of the representation under
     * any conditions.
     *
     * See <a href="http://www.mnot.net/cache_docs/#CACHE-CONTROL">
     * Caching tutorial</a> for an excellent introduction to Caching in general.
     * Refer to the corresponding section in the
     * <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">
     * HTTP 1.1 specification</a> for more details and advanced directives.
     *
     * It is recommended to choose an appropriate Cache-Control directive rather
     * than prohibit caching using the nocache parameter.
     *
     * @param value {Boolean}
     * @return {qx.bom.request.SimpleXhr} Self for chaining.
     */
    useCaching : function(value){

      if(qx.lang.Type.isBoolean(value)){

        this.__cache = value;
      };
      return this;
    },
    /**
     * Whether requests are cached.
     *
     * @return {Boolean} Whether requests are cached.
     */
    isCaching : function(){

      return this.__cache;
    },
    /**
     * Whether request completed (is done).
    
     * @return {Boolean} Whether request is completed.
     */
    isDone : function(){

      return (this._transport.readyState === qx.bom.request.Xhr.DONE);
    },
    /**
     * Returns unique hash code of object.
     *
     * @return {Integer} unique hash code of the object
     */
    toHashCode : function(){

      return this.$$hash;
    },
    /**
     * Returns true if the object is disposed.
     *
     * @return {Boolean} Whether the object has been disposed
     */
    isDisposed : function(){

      return !!this.__disposed;
    },
    /**
     * Sends request.
     *
     * Relies on set before:
     * * a HTTP method
     * * an URL
     * * optional request headers
     * * optional request data
     */
    send : function(){

      var curTimeout = this.getTimeout(),hasRequestData = (this.getRequestData() !== null),hasCacheControlHeader = this.__requestHeaders.hasOwnProperty("Cache-Control"),isBodyForMethodAllowed = qx.util.Request.methodAllowsRequestBody(this.getMethod()),curContentType = this.getRequestHeader("Content-Type"),serializedData = this._serializeData(this.getRequestData(), curContentType);
      // add GET params if needed
      if(this.getMethod() === "GET" && hasRequestData){

        this.setUrl(qx.util.Uri.appendParamsToUrl(this.getUrl(), serializedData));
      };
      // cache prevention
      if(this.isCaching() === false && !hasCacheControlHeader){

        // Make sure URL cannot be served from cache and new request is made
        this.setUrl(qx.util.Uri.appendParamsToUrl(this.getUrl(), {
          nocache : new Date().valueOf()
        }));
      };
      // set timeout
      if(curTimeout){

        this._transport.timeout = curTimeout;
      };
      // initialize request
      this._transport.open(this.getMethod(), this.getUrl(), true);
      // set all previously stored headers on initialized request
      for(var key in this.__requestHeaders){

        this._transport.setRequestHeader(key, this.__requestHeaders[key]);
      };
      // send
      if(!isBodyForMethodAllowed){

        // GET & HEAD
        this._transport.send();
      } else {

        // POST & PUT ...
        if(typeof curContentType === "undefined"){

          // by default, set content-type urlencoded for requests with body
          this._transport.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        };
        this._transport.send(serializedData);
      };
    },
    /**
     * Aborts request.
     *
     * Cancels any network activity.
     * @return {qx.bom.request.SimpleXhr} Self for chaining.
     */
    abort : function(){

      this._transport.abort();
      return this;
    },
    /**
     * Disposes object and wrapped transport.
     * @return {Boolean} <code>true</code> if the object was successfully disposed
     */
    dispose : function(){

      if(this._transport.dispose()){

        this.__parser = null;
        this.__disposed = true;
        return true;
      };
      return false;
    },
    /*
    ---------------------------------------------------------------------------
      PROTECTED
    ---------------------------------------------------------------------------
    */
    /**
     * Holds transport.
     */
    _transport : null,
    /**
     * Creates XHR transport.
     *
     * May be overriden to change type of resource.
     * @return {qx.bom.request.IRequest} Transport.
     */
    _createTransport : function(){

      return new qx.bom.request.Xhr();
    },
    /**
     * Registers common listeners on given transport.
     *
     * @param transport {qx.bom.request.IRequest} Transport.
     * @return {qx.bom.request.IRequest} Transport.
     */
    _registerTransportListener : function(transport){

      transport.onreadystatechange = qx.lang.Function.bind(this._onReadyStateChange, this);
      transport.onloadend = qx.lang.Function.bind(this._onLoadEnd, this);
      transport.ontimeout = qx.lang.Function.bind(this._onTimeout, this);
      transport.onerror = qx.lang.Function.bind(this._onError, this);
      transport.onabort = qx.lang.Function.bind(this._onAbort, this);
      return transport;
    },
    /**
     * Creates response parser.
     *
     * @return {qx.util.ResponseParser} parser.
     */
    _createResponseParser : function(){

      return new qx.util.ResponseParser();
    },
    /**
     * Sets the response.
     *
     * @param response {String} The parsed response of the request.
     */
    _setResponse : function(response){

      this.__response = response;
    },
    /**
     * Serializes data.
     *
     * @param data {String|Map} Data to serialize.
     * @param contentType {String?} Content-Type which influences the serialisation.
     * @return {String|null} Serialized data.
     */
    _serializeData : function(data, contentType){

      var isPost = this.getMethod() === "POST",isJson = /application\/.*\+?json/.test(contentType);
      if(!data){

        return null;
      };
      if(qx.lang.Type.isString(data)){

        return data;
      };
      if(isJson && (qx.lang.Type.isObject(data) || qx.lang.Type.isArray(data))){

        return qx.lang.Json.stringify(data);
      };
      if(qx.lang.Type.isObject(data)){

        return qx.util.Uri.toParameter(data, isPost);
      };
      return null;
    },
    /*
    ---------------------------------------------------------------------------
      PRIVATE
    ---------------------------------------------------------------------------
    */
    /**
     * {Array} Request headers.
     */
    __requestHeaders : null,
    /**
     * {Object} Request data (i.e. body).
     */
    __requestData : null,
    /**
     * {String} HTTP method to use for request.
     */
    __method : "",
    /**
     * {String} Requested URL.
     */
    __url : "",
    /**
     * {Object} Response data.
     */
    __response : null,
    /**
     * {Function} Parser.
     */
    __parser : null,
    /**
     * {Boolean} Whether caching will be enabled.
     */
    __cache : null,
    /**
     * {Number} The current timeout in milliseconds.
     */
    __timeout : null,
    /**
     * {Boolean} Whether object has been disposed.
     */
    __disposed : null,
    /*
    ---------------------------------------------------------------------------
      EVENT HANDLING
    ---------------------------------------------------------------------------
    */
    /**
     * Adds an event listener for the given event name which is executed only once.
     *
     * @param name {String} The name of the event to listen to.
     * @param listener {Function} The function to execute when the event is fired
     * @param ctx {var?} The context of the listener.
     * @return {qx.bom.request.Xhr} Self for chaining.
     */
    addListenerOnce : function(name, listener, ctx){

      this._transport._emitter.once(name, listener, ctx);
      return this;
    },
    /**
     * Handles "readyStateChange" event.
     */
    _onReadyStateChange : function(){

      {
      };
      if(this.isDone()){

        this.__onReadyStateDone();
      };
    },
    /**
     * Called internally when readyState is DONE.
     */
    __onReadyStateDone : function(){

      {
      };
      var response = this._transport.responseText;
      var contentType = this._transport.getResponseHeader("Content-Type");
      // Successful HTTP status
      if(qx.util.Request.isSuccessful(this._transport.status)){

        {
        };
        this._setResponse(this.__parser.parse(response, contentType));
        this._transport._emit("success");
      } else {

        try{

          this._setResponse(this.__parser.parse(response, contentType));
        } catch(e) {
        };
        // A remote error failure
        if(this._transport.status !== 0){

          this._transport._emit("fail");
        };
      };
    },
    /**
     * Handles "loadEnd" event.
     */
    _onLoadEnd : function(){

      this._transport._emit("loadEnd");
    },
    /**
     * Handles "abort" event.
     */
    _onAbort : function(){

      this._transport._emit("abort");
    },
    /**
     * Handles "timeout" event.
     */
    _onTimeout : function(){

      this._transport._emit("timeout");
      // A network error failure
      this._transport._emit("fail");
    },
    /**
     * Handles "error" event.
     */
    _onError : function(){

      this._transport._emit("error");
      // A network error failure
      this._transport._emit("fail");
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
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/**
 * Contains detection for QuickTime, Windows Media, DivX, Silverlight adn gears.
 * If no version could be detected the version is set to an empty string as
 * default.
 *
 * This class is used by {@link qx.core.Environment} and should not be used
 * directly. Please check its class comment for details how to use it.
 *
 * @internal
 */
qx.Bootstrap.define("qx.bom.client.Plugin", {
  statics : {
    /**
     * Checkes for the availability of google gears plugin.
     *
     * @internal
     * @return {Boolean} <code>true</code> if gears is available
     */
    getGears : function(){

      return !!(window.google && window.google.gears);
    },
    /**
     * Checks for ActiveX availability.
     *
     * @internal
     * @return {Boolean} <code>true</code> if ActiveX is available
     */
    getActiveX : function(){

      if(typeof window.ActiveXObject === "function"){

        return true;
      };
      try{

        // in IE11 Preview, ActiveXObject is undefined but instances can
        // still be created
        return (typeof (new window.ActiveXObject("Microsoft.XMLHTTP")) === "object" || typeof (new window.ActiveXObject("MSXML2.DOMDocument.6.0")) === "object");
      } catch(ex) {

        return false;
      };
    },
    /**
     * Checks for Skypes 'Click to call' availability.
     *
     * @internal
     * @return {Boolean} <code>true</code> if the plugin is available.
     */
    getSkype : function(){

      // IE Support
      if(qx.bom.client.Plugin.getActiveX()){

        try{

          new ActiveXObject("Skype.Detection");
          return true;
        } catch(e) {
        };
      };
      var mimeTypes = navigator.mimeTypes;
      if(mimeTypes){

        // FF support
        if("application/x-skype" in mimeTypes){

          return true;
        };
        // webkit support
        for(var i = 0;i < mimeTypes.length;i++){

          var desc = mimeTypes[i];
          if(desc.type.indexOf("skype.click2call") != -1){

            return true;
          };
        };
      };
      return false;
    },
    /**
     * Database of supported features.
     * Filled with additional data at initialization
     */
    __db : {
      quicktime : {
        plugin : ["QuickTime"],
        control : "QuickTimeCheckObject.QuickTimeCheck.1"
      },
      wmv : {
        plugin : ["Windows Media"],
        control : "WMPlayer.OCX.7"
      },
      divx : {
        plugin : ["DivX Web Player"],
        control : "npdivx.DivXBrowserPlugin.1"
      },
      silverlight : {
        plugin : ["Silverlight"],
        control : "AgControl.AgControl"
      },
      pdf : {
        plugin : ["Chrome PDF Viewer", "Adobe Acrobat"],
        control : "AcroPDF.PDF"
      }
    },
    /**
     * Fetches the version of the quicktime plugin.
     * @return {String} The version of the plugin, if available,
     *   an empty string otherwise
     * @internal
     */
    getQuicktimeVersion : function(){

      var entry = qx.bom.client.Plugin.__db["quicktime"];
      return qx.bom.client.Plugin.__getVersion(entry.control, entry.plugin);
    },
    /**
     * Fetches the version of the windows media plugin.
     * @return {String} The version of the plugin, if available,
     *   an empty string otherwise
     * @internal
     */
    getWindowsMediaVersion : function(){

      var entry = qx.bom.client.Plugin.__db["wmv"];
      return qx.bom.client.Plugin.__getVersion(entry.control, entry.plugin);
    },
    /**
     * Fetches the version of the divx plugin.
     * @return {String} The version of the plugin, if available,
     *   an empty string otherwise
     * @internal
     */
    getDivXVersion : function(){

      var entry = qx.bom.client.Plugin.__db["divx"];
      return qx.bom.client.Plugin.__getVersion(entry.control, entry.plugin);
    },
    /**
     * Fetches the version of the silverlight plugin.
     * @return {String} The version of the plugin, if available,
     *   an empty string otherwise
     * @internal
     */
    getSilverlightVersion : function(){

      var entry = qx.bom.client.Plugin.__db["silverlight"];
      return qx.bom.client.Plugin.__getVersion(entry.control, entry.plugin);
    },
    /**
     * Fetches the version of the pdf plugin.
     *
     * There are two built-in PDF viewer shipped with browsers:
     *
     * <ul>
     *  <li>Chrome PDF Viewer</li>
     *  <li>PDF.js (Firefox)</li>
     * </ul>
     *
     * While the Chrome PDF Viewer is implemented as plugin and therefore
     * detected by this method PDF.js is <strong>not</strong>.
     *
     * See the dedicated environment key (<em>plugin.pdfjs</em>) instead,
     * which you might check additionally.
     *
     * @return {String} The version of the plugin, if available,
     *  an empty string otherwise
     * @internal
     */
    getPdfVersion : function(){

      var entry = qx.bom.client.Plugin.__db["pdf"];
      return qx.bom.client.Plugin.__getVersion(entry.control, entry.plugin);
    },
    /**
     * Checks if the quicktime plugin is available.
     * @return {Boolean} <code>true</code> if the plugin is available
     * @internal
     */
    getQuicktime : function(){

      var entry = qx.bom.client.Plugin.__db["quicktime"];
      return qx.bom.client.Plugin.__isAvailable(entry.control, entry.plugin);
    },
    /**
     * Checks if the windows media plugin is available.
     * @return {Boolean} <code>true</code> if the plugin is available
     * @internal
     */
    getWindowsMedia : function(){

      var entry = qx.bom.client.Plugin.__db["wmv"];
      return qx.bom.client.Plugin.__isAvailable(entry.control, entry.plugin);
    },
    /**
     * Checks if the divx plugin is available.
     * @return {Boolean} <code>true</code> if the plugin is available
     * @internal
     */
    getDivX : function(){

      var entry = qx.bom.client.Plugin.__db["divx"];
      return qx.bom.client.Plugin.__isAvailable(entry.control, entry.plugin);
    },
    /**
     * Checks if the silverlight plugin is available.
     * @return {Boolean} <code>true</code> if the plugin is available
     * @internal
     */
    getSilverlight : function(){

      var entry = qx.bom.client.Plugin.__db["silverlight"];
      return qx.bom.client.Plugin.__isAvailable(entry.control, entry.plugin);
    },
    /**
     * Checks if the pdf plugin is available.
     *
     * There are two built-in PDF viewer shipped with browsers:
     *
     * <ul>
     *  <li>Chrome PDF Viewer</li>
     *  <li>PDF.js (Firefox)</li>
     * </ul>
     *
     * While the Chrome PDF Viewer is implemented as plugin and therefore
     * detected by this method PDF.js is <strong>not</strong>.
     *
     * See the dedicated environment key (<em>plugin.pdfjs</em>) instead,
     * which you might check additionally.
     *
     * @return {Boolean} <code>true</code> if the plugin is available
     * @internal
     */
    getPdf : function(){

      var entry = qx.bom.client.Plugin.__db["pdf"];
      return qx.bom.client.Plugin.__isAvailable(entry.control, entry.plugin);
    },
    /**
     * Internal helper for getting the version of a given plugin.
     *
     * @param activeXName {String} The name which should be used to generate
     *   the test ActiveX Object.
     * @param pluginNames {Array} The names with which the plugins are listed in
     *   the navigator.plugins list.
     * @return {String} The version of the plugin as string.
     */
    __getVersion : function(activeXName, pluginNames){

      var available = qx.bom.client.Plugin.__isAvailable(activeXName, pluginNames);
      // don't check if the plugin is not available
      if(!available){

        return "";
      };
      // IE checks
      if(qx.bom.client.Engine.getName() == "mshtml"){

        try{

          var obj = new ActiveXObject(activeXName);
          var version;
          // pdf version detection
          if(obj.GetVersions && obj.GetVersions()){

            version = obj.GetVersions().split(',');
            if(version.length > 1){

              version = version[0].split('=');
              if(version.length === 2){

                return version[1];
              };
            };
          };
          version = obj.versionInfo;
          if(version != undefined){

            return version;
          };
          version = obj.version;
          if(version != undefined){

            return version;
          };
          version = obj.settings.version;
          if(version != undefined){

            return version;
          };
        } catch(ex) {

          return "";
        };
        return "";
      } else {

        var plugins = navigator.plugins;
        var verreg = /([0-9]\.[0-9])/g;
        for(var i = 0;i < plugins.length;i++){

          var plugin = plugins[i];
          for(var j = 0;j < pluginNames.length;j++){

            if(plugin.name.indexOf(pluginNames[j]) !== -1){

              if(verreg.test(plugin.name) || verreg.test(plugin.description)){

                return RegExp.$1;
              };
            };
          };
        };
        return "";
      };
    },
    /**
     * Internal helper for getting the availability of a given plugin.
     *
     * @param activeXName {String} The name which should be used to generate
     *   the test ActiveX Object.
     * @param pluginNames {Array} The names with which the plugins are listed in
     *   the navigator.plugins list.
     * @return {Boolean} <code>true</code>, if the plugin available
     */
    __isAvailable : function(activeXName, pluginNames){

      // IE checks
      if(qx.bom.client.Engine.getName() == "mshtml"){

        if(!this.getActiveX()){

          return false;
        };
        try{

          new ActiveXObject(activeXName);
        } catch(ex) {

          return false;
        };
        return true;
      } else {

        var plugins = navigator.plugins;
        if(!plugins){

          return false;
        };
        var name;
        for(var i = 0;i < plugins.length;i++){

          name = plugins[i].name;
          for(var j = 0;j < pluginNames.length;j++){

            if(name.indexOf(pluginNames[j]) !== -1){

              return true;
            };
          };
        };
        return false;
      };
    }
  },
  defer : function(statics){

    qx.core.Environment.add("plugin.gears", statics.getGears);
    qx.core.Environment.add("plugin.quicktime", statics.getQuicktime);
    qx.core.Environment.add("plugin.quicktime.version", statics.getQuicktimeVersion);
    qx.core.Environment.add("plugin.windowsmedia", statics.getWindowsMedia);
    qx.core.Environment.add("plugin.windowsmedia.version", statics.getWindowsMediaVersion);
    qx.core.Environment.add("plugin.divx", statics.getDivX);
    qx.core.Environment.add("plugin.divx.version", statics.getDivXVersion);
    qx.core.Environment.add("plugin.silverlight", statics.getSilverlight);
    qx.core.Environment.add("plugin.silverlight.version", statics.getSilverlightVersion);
    qx.core.Environment.add("plugin.pdf", statics.getPdf);
    qx.core.Environment.add("plugin.pdf.version", statics.getPdfVersion);
    qx.core.Environment.add("plugin.activex", statics.getActiveX);
    qx.core.Environment.add("plugin.skype", statics.getSkype);
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
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Fabian Jakobs (fjakobs)

************************************************************************ */
/**
 * Cross browser XML document creation API
 *
 * The main purpose of this class is to allow you to create XML document objects in a
 * cross-browser fashion. Use <code>create</code> to create an empty document,
 * <code>fromString</code> to create one from an existing XML text. Both methods
 * return a *native DOM object*. That means you use standard DOM methods on such
 * an object (e.g. <code>createElement</code>).
 *
 * The following links provide further information on XML documents:
 *
 * * <a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#i-Document">W3C Interface Specification</a>
 * * <a href="http://msdn2.microsoft.com/en-us/library/ms535918.aspx">MS xml Object</a>
 * * <a href="http://msdn2.microsoft.com/en-us/library/ms764622.aspx">MSXML GUIDs and ProgIDs</a>
 * * <a href="https://developer.mozilla.org/en-US/docs/Parsing_and_serializing_XML">MDN Parsing and Serializing XML</a>
 */
qx.Bootstrap.define("qx.xml.Document", {
  statics : {
    /** @type {String} ActiveX class name of DOMDocument (IE specific) */
    DOMDOC : null,
    /** @type {String} ActiveX class name of XMLHttpRequest (IE specific) */
    XMLHTTP : null,
    /**
     * Whether the given element is a XML document or element
     * which is part of a XML document.
     *
     * @param elem {Document|Element} Any DOM Document or Element
     * @return {Boolean} Whether the document is a XML document
     */
    isXmlDocument : function(elem){

      if(elem.nodeType === 9){

        return elem.documentElement.nodeName !== "HTML";
      } else if(elem.ownerDocument){

        return this.isXmlDocument(elem.ownerDocument);
      } else {

        return false;
      };
    },
    /**
     * Create an XML document.
     *
     * Returns a native DOM document object, set up for XML.
     *
     * @param namespaceUri {String ? null} The namespace URI of the document element to create or null.
     * @param qualifiedName {String ? null} The qualified name of the document element to be created or null.
     * @return {Document} empty XML object
     */
    create : function(namespaceUri, qualifiedName){

      // ActiveX - This is the preferred way for IE9 as well since it has no XPath
      // support when using the native implementation.createDocument
      if(qx.core.Environment.get("plugin.activex")){

        var obj = new ActiveXObject(this.DOMDOC);
        //The SelectionLanguage property is no longer needed in MSXML 6; trying
        // to set it causes an exception in IE9.
        if(this.DOMDOC == "MSXML2.DOMDocument.3.0"){

          obj.setProperty("SelectionLanguage", "XPath");
        };
        if(qualifiedName){

          var str = '<\?xml version="1.0" encoding="utf-8"?>\n<';
          str += qualifiedName;
          if(namespaceUri){

            str += " xmlns='" + namespaceUri + "'";
          };
          str += " />";
          obj.loadXML(str);
        };
        return obj;
      };
      if(qx.core.Environment.get("xml.implementation")){

        return document.implementation.createDocument(namespaceUri || "", qualifiedName || "", null);
      };
      throw new Error("No XML implementation available!");
    },
    /**
     * The string passed in is parsed into a DOM document.
     *
     * @param str {String} the string to be parsed
     * @return {Document} XML document with given content
     * @signature function(str)
     */
    fromString : function(str){

      // Legacy IE/ActiveX
      if(qx.core.Environment.get("plugin.activex")){

        var dom = qx.xml.Document.create();
        dom.loadXML(str);
        return dom;
      };
      if(qx.core.Environment.get("xml.domparser")){

        var parser = new DOMParser();
        return parser.parseFromString(str, "text/xml");
      };
      throw new Error("No XML implementation available!");
    }
  },
  /*
  *****************************************************************************
     DEFER
  *****************************************************************************
  */
  defer : function(statics){

    // Detecting available ActiveX implementations.
    if(qx.core.Environment.get("plugin.activex")){

      // According to information on the Microsoft XML Team's WebLog
      // it is recommended to check for availability of MSXML versions 6.0 and 3.0.
      // http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx
      var domDoc = ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.3.0"];
      var httpReq = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0"];
      for(var i = 0,l = domDoc.length;i < l;i++){

        try{

          // Keep both objects in sync with the same version.
          // This is important as there were compatibility issues detected.
          new ActiveXObject(domDoc[i]);
          new ActiveXObject(httpReq[i]);
        } catch(ex) {

          continue;
        };
        // Update static constants
        statics.DOMDOC = domDoc[i];
        statics.XMLHTTP = httpReq[i];
        // Stop loop here
        break;
      };
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
     * Daniel Wagner (d_wagner)

************************************************************************ */
/**
 * Internal class which contains the checks used by {@link qx.core.Environment}.
 * All checks in here are marked as internal which means you should never use
 * them directly.
 *
 * This class should contain all XML-related checks
 *
 * @internal
 */
qx.Bootstrap.define("qx.bom.client.Xml", {
  statics : {
    /**
     * Checks if XML is supported
     *
     * @internal
     * @return {Boolean} <code>true</code> if XML is supported
     */
    getImplementation : function(){

      return document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("XML", "1.0");
    },
    /**
     * Checks if an XML DOMParser is available
     *
     * @internal
     * @return {Boolean} <code>true</code> if DOMParser is supported
     */
    getDomParser : function(){

      return typeof window.DOMParser !== "undefined";
    },
    /**
     * Checks if the proprietary selectSingleNode method is available on XML DOM
     * nodes.
     *
     * @internal
     * @return {Boolean} <code>true</code> if selectSingleNode is available
     */
    getSelectSingleNode : function(){

      return typeof qx.xml.Document.create().selectSingleNode !== "undefined";
    },
    /**
     * Checks if the proprietary selectNodes method is available on XML DOM
     * nodes.
     *
     * @internal
     * @return {Boolean} <code>true</code> if selectSingleNode is available
     */
    getSelectNodes : function(){

      return typeof qx.xml.Document.create().selectNodes !== "undefined";
    },
    /**
     * Checks availablity of the getElementsByTagNameNS XML DOM method.
     *
     * @internal
     * @return {Boolean} <code>true</code> if getElementsByTagNameNS is available
     */
    getElementsByTagNameNS : function(){

      return typeof qx.xml.Document.create().getElementsByTagNameNS !== "undefined";
    },
    /**
     * Checks if MSXML-style DOM Level 2 properties are supported.
     *
     * @internal
     * @return {Boolean} <code>true</code> if DOM Level 2 properties are supported
     */
    getDomProperties : function(){

      var doc = qx.xml.Document.create();
      return ("getProperty" in doc && typeof doc.getProperty("SelectionLanguage") === "string");
    },
    /**
     * Checks if the getAttributeNS and setAttributeNS methods are supported on
     * XML DOM elements
     *
     * @internal
     * @return {Boolean} <code>true</code> if get/setAttributeNS is supported
     */
    getAttributeNS : function(){

      var docElem = qx.xml.Document.fromString("<a></a>").documentElement;
      return typeof docElem.getAttributeNS === "function" && typeof docElem.setAttributeNS === "function";
    },
    /**
     * Checks if the createElementNS method is supported on XML DOM documents
     *
     * @internal
     * @return {Boolean} <code>true</code> if createElementNS is supported
     */
    getCreateElementNS : function(){

      return typeof qx.xml.Document.create().createElementNS === "function";
    },
    /**
     * Checks if the proprietary createNode method is supported on XML DOM
     * documents
     *
     * @internal
     * @return {Boolean} <code>true</code> if DOM Level 2 properties are supported
     */
    getCreateNode : function(){

      return typeof qx.xml.Document.create().createNode !== "undefined";
    },
    /**
     * Checks if the proprietary getQualifiedItem method is supported for XML
     * element attributes
     *
     * @internal
     * @return {Boolean} <code>true</code> if DOM Level 2 properties are supported
     */
    getQualifiedItem : function(){

      var docElem = qx.xml.Document.fromString("<a></a>").documentElement;
      return typeof docElem.attributes.getQualifiedItem !== "undefined";
    }
  },
  defer : function(statics){

    qx.core.Environment.add("xml.implementation", statics.getImplementation);
    qx.core.Environment.add("xml.domparser", statics.getDomParser);
    qx.core.Environment.add("xml.selectsinglenode", statics.getSelectSingleNode);
    qx.core.Environment.add("xml.selectnodes", statics.getSelectNodes);
    qx.core.Environment.add("xml.getelementsbytagnamens", statics.getElementsByTagNameNS);
    qx.core.Environment.add("xml.domproperties", statics.getDomProperties);
    qx.core.Environment.add("xml.attributens", statics.getAttributeNS);
    qx.core.Environment.add("xml.createelementns", statics.getCreateElementNS);
    qx.core.Environment.add("xml.createnode", statics.getCreateNode);
    qx.core.Environment.add("xml.getqualifieditem", statics.getQualifiedItem);
  }
});

/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2013 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Richard Sternagel (rsternagel)

************************************************************************ */
/**
 * Parsers for parsing response strings (especially for XHR).
 *
 * Known parsers are: <code>"json"</code> and <code>"xml"</code>.
 *
 * @require(qx.util.ResponseParser#parse)
 */
qx.Bootstrap.define("qx.util.ResponseParser", {
  /**
   * @param parser {String|Function} See {@link #setParser}.
   */
  construct : function(parser){

    if(parser !== undefined){

      this.setParser(parser);
    };
  },
  statics : {
    /**
     * @type {Map} Map of parser functions. Parsers defined here can be
     * referenced symbolically, e.g. with {@link #setParser}.
     *
     * Known parsers are: <code>"json"</code> and <code>"xml"</code>.
     */
    PARSER : {
      json : qx.lang.Json.parse,
      xml : qx.xml.Document.fromString
    }
  },
  members : {
    __parser : null,
    /**
     * Returns given response parsed with parser
     * determined by {@link #_getParser}.
     *
     * @param response {String} response (e.g JSON/XML string)
     * @param contentType {String} contentType (e.g. 'application/json')
     * @return {String|Object} The parsed response of the request.
     */
    parse : function(response, contentType){

      var parser = this._getParser(contentType);
      if(typeof parser === "function"){

        if(response !== ""){

          return parser.call(this, response);
        };
      };
      return response;
    },
    /**
     * Set parser used to parse response once request has
     * completed successfully.
     *
     * Usually, the parser is correctly inferred from the
     * content type of the response. This method allows to force the
     * parser being used, e.g. if the content type returned from
     * the backend is wrong or the response needs special parsing.
     *
     * Parser most typically used can be referenced symbolically.
     * To cover edge cases, a function can be given. When parsing
     * the response, this function is called with the raw response as
     * first argument.
     *
     * @param parser {String|Function}
     *
     * Can be:
     *
     * <ul>
     *   <li>A parser defined in {@link qx.util.ResponseParser#PARSER},
     *       referenced by string.</li>
     *   <li>The function to invoke.
     *       Receives the raw response as argument.</li>
     * </ul>
     *
     * @return {Function} The parser function
     */
    setParser : function(parser){

      // Symbolically given known parser
      if(typeof qx.util.ResponseParser.PARSER[parser] === "function"){

        return this.__parser = qx.util.ResponseParser.PARSER[parser];
      };
      {

        qx.core.Assert.assertFunction(parser);
      };
      return this.__parser = parser;
    },
    /**
     * Gets the parser.
     *
     * If not defined explicitly using {@link #setParser},
     * the parser is inferred from the content type.
     *
     * Override this method to extend the list of content types
     * being handled.
     *
     * @param contentType {String}
     * @return {Function|null} The parser function or <code>null</code> if the
     * content type is undetermined.
     *
     */
    _getParser : function(contentType){

      var parser = this.__parser,contentTypeOrig = "",contentTypeNormalized = "";
      // Use user-provided parser, if any
      if(parser){

        return parser;
      };
      // See http://restpatterns.org/Glossary/MIME_Type
      contentTypeOrig = contentType || "";
      // Ignore parameters (e.g. the character set)
      contentTypeNormalized = contentTypeOrig.replace(/;.*$/, "");
      if(/^application\/(\w|\.)*\+?json$/.test(contentTypeNormalized)){

        parser = qx.util.ResponseParser.PARSER.json;
      };
      if(/^application\/xml$/.test(contentTypeNormalized)){

        parser = qx.util.ResponseParser.PARSER.xml;
      };
      // Deprecated
      if(/[^\/]+\/[^\+]+\+xml$/.test(contentTypeOrig)){

        parser = qx.util.ResponseParser.PARSER.xml;
      };
      return parser;
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