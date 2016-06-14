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
     2011-2012 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (wittemann)
     * Daniel Wagner (danielwagner)

************************************************************************ */
/**
 * Text selection manipulation module
 */
qx.Bootstrap.define("qx.module.TextSelection", {
  statics : {
    /**
     * Get the text selection of the first element.
     *
     * @return {String|null}
     */
    getTextSelection : function(){

      var el = this[0];
      if(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        return el ? qx.bom.Selection.get(el) : null;
      };
      return null;
    },
    /**
     * Get the length of the text selection of the first element.
     *
     *
     * @return {Integer|null}
     *
     * @attach {qxWeb}
     */
    getTextSelectionLength : function(){

      var el = this[0];
      if(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        return el ? qx.bom.Selection.getLength(el) : null;
      };
      return null;
    },
    /**
     * Get the start of the text selection of the first element.
     *
     * @return {Integer|null}
     *
     * @attach {qxWeb}
     */
    getTextSelectionStart : function(){

      var el = this[0];
      if(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        return el ? qx.bom.Selection.getStart(el) : null;
      };
      return null;
    },
    /**
     * Get the end of the text selection of the first element.
     *
     * @return {Integer|null}
     *
     * @attach {qxWeb}
     */
    getTextSelectionEnd : function(){

      var el = this[0];
      if(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        return el ? qx.bom.Selection.getEnd(el) : null;
      };
      return null;
    },
    /**
     * Set the text selection of the first element in the collection
     * with the given start and end value.
     * If no end value is passed the selection will extend to the end.
     *
     * @param start {Integer} start of the selection (zero based)
     * @param end {Integer} end of the selection
     * @return {qxWeb} The collection for chaining.
     *
     * @attach {qxWeb}
     */
    setTextSelection : function(start, end){

      var el = this[0];
      if(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        if(el){

          qx.bom.Selection.set(el, start, end);
        };
      };
      return this;
    },
    /**
     * Clears the text selection of all elements.
     *
     * @return {qxWeb} The collection for chaining.
     *
     * @attach {qxWeb}
     */
    clearTextSelection : function(){

      this._forEachElement(function(el){

        if(!qx.module.TextSelection.__isInput(el)){

          el = qx.module.TextSelection.__getTextNode(el);
        };
        if(el){

          qx.bom.Selection.clear(el);
        };
      });
      return this;
    },
    /**
     * Checks if the given DOM node is a text input field or textarea
     *
     * @param el {Element} The node to check
     * @return {Boolean} <code>true</code> if the given node is an input field
     *
     * @attach {qxWeb}
     */
    __isInput : function(el){

      var tag = el.tagName ? el.tagName.toLowerCase() : null;
      return (tag === "input" || tag === "textarea");
    },
    /**
     * Returns the first text child node of the given element
     *
     * @param el {Element} DOM element
     * @return {Node|null} text node
     *
     * @attach {qxWeb}
     */
    __getTextNode : function(el){

      for(var i = 0,l = el.childNodes.length;i < l;i++){

        if(el.childNodes[i].nodeType === 3){

          return el.childNodes[i];
        };
      };
      return null;
    }
  },
  defer : function(statics){

    qxWeb.$attach({
      "getTextSelection" : statics.getTextSelection,
      "getTextSelectionLength" : statics.getTextSelectionLength,
      "getTextSelectionStart" : statics.getTextSelectionStart,
      "getTextSelectionEnd" : statics.getTextSelectionEnd,
      "setTextSelection" : statics.setTextSelection,
      "clearTextSelection" : statics.clearTextSelection
    });
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
     * Alexander Steitz (aback)

************************************************************************ */
/**
 * Low-level selection API to select elements like input and textarea elements
 * as well as text nodes or elements which their child nodes.
 *
 * @ignore(qx.bom.Element, qx.bom.Element.blur)
 */
qx.Bootstrap.define("qx.bom.Selection", {
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */
  statics : {
    /**
     * Returns the native selection object.
     *
     * @signature function(documentNode)
     * @param documentNode {document} Document node to retrieve the connected selection from
     * @return {Selection} native selection object
     */
    getSelectionObject : qx.core.Environment.select("html.selection", {
      "selection" : function(documentNode){

        return documentNode.selection;
      },
      // suitable for gecko, opera, webkit and mshtml >= 9
      "default" : function(documentNode){

        return qx.dom.Node.getWindow(documentNode).getSelection();
      }
    }),
    /**
     * Returns the current selected text.
     *
     * @signature function(node)
     * @param node {Node} node to retrieve the selection for
     * @return {String|null} selected text as string
     */
    get : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        // to get the selected text in legacy IE you have to work with the TextRange
        // of the selection object. So always pass the document node to the
        // Range class to get this TextRange object.
        var rng = qx.bom.Range.get(qx.dom.Node.getDocument(node));
        return rng.text;
      },
      // suitable for gecko, opera and webkit
      "default" : function(node){

        if(this.__isInputOrTextarea(node)){

          return node.value.substring(node.selectionStart, node.selectionEnd);
        } else {

          return this.getSelectionObject(qx.dom.Node.getDocument(node)).toString();
        };
      }
    }),
    /**
     * Returns the length of the selection
     *
     * @signature function(node)
     * @param node {Node} Form node or document/window to check.
     * @return {Integer|null} length of the selection or null
     */
    getLength : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        var selectedValue = this.get(node);
        // get the selected part and split it by linebreaks
        var split = qx.util.StringSplit.split(selectedValue, /\r\n/);
        // return the length substracted by the count of linebreaks
        // legacy IE counts linebreaks as two chars
        // -> harmonize this to one char per linebreak
        return selectedValue.length - (split.length - 1);
      },
      "default" : function(node){

        if(qx.core.Environment.get("engine.name") == "opera"){

          var selectedValue,selectedLength,split;
          if(this.__isInputOrTextarea(node)){

            var start = node.selectionStart;
            var end = node.selectionEnd;
            selectedValue = node.value.substring(start, end);
            selectedLength = end - start;
          } else {

            selectedValue = qx.bom.Selection.get(node);
            selectedLength = selectedValue.length;
          };
          // get the selected part and split it by linebreaks
          split = qx.util.StringSplit.split(selectedValue, /\r\n/);
          // substract the count of linebreaks
          // Opera counts each linebreak as two chars
          // -> harmonize this to one char per linebreak
          return selectedLength - (split.length - 1);
        };
        // suitable for gecko and webkit
        if(this.__isInputOrTextarea(node)){

          return node.selectionEnd - node.selectionStart;
        } else {

          return this.get(node).length;
        };
      }
    }),
    /**
     * Returns the start of the selection
     *
     * @signature function(node)
     * @param node {Node} node to check for
     * @return {Integer} start of current selection or "-1" if the current
     *                   selection is not within the given node
     */
    getStart : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        if(this.__isInputOrTextarea(node)){

          var documentRange = qx.bom.Range.get();
          // Check if the document.selection is the text range inside the input element
          if(!node.contains(documentRange.parentElement())){

            return -1;
          };
          var range = qx.bom.Range.get(node);
          var len = node.value.length;
          // Synchronize range start and end points
          range.moveToBookmark(documentRange.getBookmark());
          range.moveEnd('character', len);
          return len - range.text.length;
        } else {

          var range = qx.bom.Range.get(node);
          var parentElement = range.parentElement();
          // get a range which holds the text of the parent element
          var elementRange = qx.bom.Range.get();
          try{

            // IE throws an invalid argument error when the document has no selection
            elementRange.moveToElementText(parentElement);
          } catch(ex) {

            return 0;
          };
          // Move end points of full range so it starts at the user selection
          // and ends at the end of the element text.
          var bodyRange = qx.bom.Range.get(qx.dom.Node.getBodyElement(node));
          bodyRange.setEndPoint("StartToStart", range);
          bodyRange.setEndPoint("EndToEnd", elementRange);
          // selection is at beginning
          if(elementRange.compareEndPoints("StartToStart", bodyRange) == 0){

            return 0;
          };
          var moved;
          var steps = 0;
          while(true){

            moved = bodyRange.moveStart("character", -1);
            // Starting points of both ranges are equal
            if(elementRange.compareEndPoints("StartToStart", bodyRange) == 0){

              break;
            };
            // Moving had no effect -> range is at begin of body
            if(moved == 0){

              break;
            } else {

              steps++;
            };
          };
          return ++steps;
        };
      },
      "default" : function(node){

        if(qx.core.Environment.get("engine.name") === "gecko" || qx.core.Environment.get("engine.name") === "webkit"){

          if(this.__isInputOrTextarea(node)){

            return node.selectionStart;
          } else {

            var documentElement = qx.dom.Node.getDocument(node);
            var documentSelection = this.getSelectionObject(documentElement);
            // gecko and webkit do differ how the user selected the text
            // "left-to-right" or "right-to-left"
            if(documentSelection.anchorOffset < documentSelection.focusOffset){

              return documentSelection.anchorOffset;
            } else {

              return documentSelection.focusOffset;
            };
          };
        };
        if(this.__isInputOrTextarea(node)){

          return node.selectionStart;
        } else {

          return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node)).anchorOffset;
        };
      }
    }),
    /**
     * Returns the end of the selection
     *
     * @signature function(node)
     * @param node {Node} node to check
     * @return {Integer} end of current selection
     */
    getEnd : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        if(this.__isInputOrTextarea(node)){

          var documentRange = qx.bom.Range.get();
          // Check if the document.selection is the text range inside the input element
          if(!node.contains(documentRange.parentElement())){

            return -1;
          };
          var range = qx.bom.Range.get(node);
          var len = node.value.length;
          // Synchronize range start and end points
          range.moveToBookmark(documentRange.getBookmark());
          range.moveStart('character', -len);
          return range.text.length;
        } else {

          var range = qx.bom.Range.get(node);
          var parentElement = range.parentElement();
          // get a range which holds the text of the parent element
          var elementRange = qx.bom.Range.get();
          try{

            // IE throws an invalid argument error when the document has no selection
            elementRange.moveToElementText(parentElement);
          } catch(ex) {

            return 0;
          };
          var len = elementRange.text.length;
          // Move end points of full range so it ends at the user selection
          // and starts at the start of the element text.
          var bodyRange = qx.bom.Range.get(qx.dom.Node.getBodyElement(node));
          bodyRange.setEndPoint("EndToEnd", range);
          bodyRange.setEndPoint("StartToStart", elementRange);
          // selection is at beginning
          if(elementRange.compareEndPoints("EndToEnd", bodyRange) == 0){

            return len - 1;
          };
          var moved;
          var steps = 0;
          while(true){

            moved = bodyRange.moveEnd("character", 1);
            // Ending points of both ranges are equal
            if(elementRange.compareEndPoints("EndToEnd", bodyRange) == 0){

              break;
            };
            // Moving had no effect -> range is at begin of body
            if(moved == 0){

              break;
            } else {

              steps++;
            };
          };
          return len - (++steps);
        };
      },
      "default" : function(node){

        if(qx.core.Environment.get("engine.name") === "gecko" || qx.core.Environment.get("engine.name") === "webkit"){

          if(this.__isInputOrTextarea(node)){

            return node.selectionEnd;
          } else {

            var documentElement = qx.dom.Node.getDocument(node);
            var documentSelection = this.getSelectionObject(documentElement);
            // gecko and webkit do differ how the user selected the text
            // "left-to-right" or "right-to-left"
            if(documentSelection.focusOffset > documentSelection.anchorOffset){

              return documentSelection.focusOffset;
            } else {

              return documentSelection.anchorOffset;
            };
          };
        };
        if(this.__isInputOrTextarea(node)){

          return node.selectionEnd;
        } else {

          return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node)).focusOffset;
        };
      }
    }),
    /**
     * Utility method to check for an input or textarea element
     *
     * @param node {Node} node to check
     * @return {Boolean} Whether the given nodt is an input or textarea element
     */
    __isInputOrTextarea : function(node){

      return qx.dom.Node.isElement(node) && (node.nodeName.toLowerCase() == "input" || node.nodeName.toLowerCase() == "textarea");
    },
    /**
     * Sets a selection at the given node with the given start and end.
     * For text nodes, input and textarea elements the start and end parameters
     * set the boundaries at the text.
     * For element nodes the start and end parameters are used to select the
     * childNodes of the given element.
     *
     * @signature function(node, start, end)
     * @param node {Node} node to set the selection at
     * @param start {Integer} start of the selection
     * @param end {Integer} end of the selection
     * @return {Boolean} whether a selection is drawn
     */
    set : qx.core.Environment.select("html.selection", {
      "selection" : function(node, start, end){

        var rng;
        // if the node is the document itself then work on with the body element
        if(qx.dom.Node.isDocument(node)){

          node = node.body;
        };
        if(qx.dom.Node.isElement(node) || qx.dom.Node.isText(node)){

          switch(node.nodeName.toLowerCase()){case "input":case "textarea":case "button":
          if(end === undefined){

            end = node.value.length;
          };
          if(start >= 0 && start <= node.value.length && end >= 0 && end <= node.value.length){

            rng = qx.bom.Range.get(node);
            rng.collapse(true);
            rng.moveStart("character", start);
            rng.moveEnd("character", end - start);
            rng.select();
            return true;
          };
          break;case "#text":
          if(end === undefined){

            end = node.nodeValue.length;
          };
          if(start >= 0 && start <= node.nodeValue.length && end >= 0 && end <= node.nodeValue.length){

            // get a range of the body element
            rng = qx.bom.Range.get(qx.dom.Node.getBodyElement(node));
            // use the parent node -> "moveToElementText" expects an element
            rng.moveToElementText(node.parentNode);
            rng.collapse(true);
            rng.moveStart("character", start);
            rng.moveEnd("character", end - start);
            rng.select();
            return true;
          };
          break;default:
          if(end === undefined){

            end = node.childNodes.length - 1;
          };
          // check start and end -> childNodes
          if(node.childNodes[start] && node.childNodes[end]){

            // get the TextRange of the body element
            // IMPORTANT: only with a range of the body the method "moveElementToText" is available
            rng = qx.bom.Range.get(qx.dom.Node.getBodyElement(node));
            // position it at the given node
            rng.moveToElementText(node.childNodes[start]);
            rng.collapse(true);
            // create helper range
            var newRng = qx.bom.Range.get(qx.dom.Node.getBodyElement(node));
            newRng.moveToElementText(node.childNodes[end]);
            // set the end of the range to the end of the helper range
            rng.setEndPoint("EndToEnd", newRng);
            rng.select();
            return true;
          };};
        };
        return false;
      },
      // suitable for gecko, opera, webkit and mshtml >=9
      "default" : function(node, start, end){

        // special handling for input and textarea elements
        var nodeName = node.nodeName.toLowerCase();
        if(qx.dom.Node.isElement(node) && (nodeName == "input" || nodeName == "textarea")){

          // if "end" is not given set it to the end
          if(end === undefined){

            end = node.value.length;
          };
          // check boundaries
          if(start >= 0 && start <= node.value.length && end >= 0 && end <= node.value.length){

            node.focus();
            node.select();
            node.setSelectionRange(start, end);
            return true;
          };
        } else {

          var validBoundaries = false;
          var sel = qx.dom.Node.getWindow(node).getSelection();
          var rng = qx.bom.Range.get(node);
          // element or text node?
          // for elements nodes the offsets are applied to childNodes
          // for text nodes the offsets are applied to the text content
          if(qx.dom.Node.isText(node)){

            if(end === undefined){

              end = node.length;
            };
            if(start >= 0 && start < node.length && end >= 0 && end <= node.length){

              validBoundaries = true;
            };
          } else if(qx.dom.Node.isElement(node)){

            if(end === undefined){

              end = node.childNodes.length - 1;
            };
            if(start >= 0 && node.childNodes[start] && end >= 0 && node.childNodes[end]){

              validBoundaries = true;
            };
          } else if(qx.dom.Node.isDocument(node)){

            // work on with the body element
            node = node.body;
            if(end === undefined){

              end = node.childNodes.length - 1;
            };
            if(start >= 0 && node.childNodes[start] && end >= 0 && node.childNodes[end]){

              validBoundaries = true;
            };
          };;
          if(validBoundaries){

            // collapse the selection if needed
            if(!sel.isCollapsed){

              sel.collapseToStart();
            };
            // set start and end of the range
            rng.setStart(node, start);
            // for element nodes set the end after the childNode
            if(qx.dom.Node.isText(node)){

              rng.setEnd(node, end);
            } else {

              rng.setEndAfter(node.childNodes[end]);
            };
            // remove all existing ranges and add the new one
            if(sel.rangeCount > 0){

              sel.removeAllRanges();
            };
            sel.addRange(rng);
            return true;
          };
        };
        return false;
      }
    }),
    /**
     * Selects all content/childNodes of the given node
     *
     * @param node {Node} text, element or document node
     * @return {Boolean} whether a selection is drawn
     */
    setAll : function(node){

      return qx.bom.Selection.set(node, 0);
    },
    /**
     * Clears the selection on the given node.
     *
     * @param node {Node} node to clear the selection for
     */
    clear : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        var rng = qx.bom.Range.get(node);
        var parent = rng.parentElement();
        var documentRange = qx.bom.Range.get(qx.dom.Node.getDocument(node));
        // only collapse if the selection is really on the given node
        // -> compare the two parent elements of the ranges with each other and
        // the given node
        if(qx.dom.Node.isText(node)){

          node = node.parentNode;
        };
        if(parent == documentRange.parentElement() && parent == node){

          var sel = qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node));
          sel.empty();
        };
      },
      "default" : function(node){

        var sel = qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node));
        var nodeName = node.nodeName.toLowerCase();
        // if the node is an input or textarea element use the specialized methods
        if(qx.dom.Node.isElement(node) && (nodeName == "input" || nodeName == "textarea")){

          node.setSelectionRange(0, 0);
          if(qx.bom.Element && qx.bom.Element.blur){

            qx.bom.Element.blur(node);
          };
        } else if(qx.dom.Node.isDocument(node) || nodeName == "body"){

          sel.collapse(node.body ? node.body : node, 0);
        } else {

          var rng = qx.bom.Range.get(node);
          if(!rng.collapsed){

            var compareNode;
            var commonAncestor = rng.commonAncestorContainer;
            // compare the parentNode of the textNode with the given node
            // (if this node is an element) to decide whether the selection
            // is cleared or not.
            if(qx.dom.Node.isElement(node) && qx.dom.Node.isText(commonAncestor)){

              compareNode = commonAncestor.parentNode;
            } else {

              compareNode = commonAncestor;
            };
            if(compareNode == node){

              sel.collapse(node, 0);
            };
          };
        };
      }
    })
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
     * Alexander Steitz (aback)

************************************************************************ */
/**
 * Low-level Range API which is used together with the low-level Selection API.
 * This is especially useful whenever a developer want to work on text level,
 * e.g. for an editor.
 */
qx.Bootstrap.define("qx.bom.Range", {
  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */
  statics : {
    /**
     * Returns the range object of the given node.
     *
     * @signature function(node)
     * @param node {Node} node to get the range of
     * @return {Range} valid range of given selection
     */
    get : qx.core.Environment.select("html.selection", {
      "selection" : function(node){

        // check for the type of the given node
        // for legacy IE the nodes input, textarea, button and body
        // have access to own TextRange objects. Everything else is
        // gathered via the selection object.
        if(qx.dom.Node.isElement(node)){

          switch(node.nodeName.toLowerCase()){case "input":
          switch(node.type){case "text":case "password":case "hidden":case "button":case "reset":case "file":case "submit":
          return node.createTextRange();default:
          return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node)).createRange();};
          break;case "textarea":case "body":case "button":
          return node.createTextRange();default:
          return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node)).createRange();};
        } else {

          if(node == null){

            node = window;
          };
          // need to pass the document node to work with multi-documents
          return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(node)).createRange();
        };
      },
      // suitable for gecko, opera and webkit
      "default" : function(node){

        var doc = qx.dom.Node.getDocument(node);
        // get the selection object of the corresponding document
        var sel = qx.bom.Selection.getSelectionObject(doc);
        if(sel.rangeCount > 0){

          return sel.getRangeAt(0);
        } else {

          return doc.createRange();
        };
      }
    })
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
     * Adrian Olaru (adrianolaru)

   ======================================================================

   This class contains code based on the following work:

   * Cross-Browser Split
     http://blog.stevenlevithan.com/archives/cross-browser-split
     Version 1.0.1

     Copyright:
       (c) 2006-2007, Steven Levithan <http://stevenlevithan.com>

     License:
       MIT: http://www.opensource.org/licenses/mit-license.php

     Authors:
       * Steven Levithan

************************************************************************ */
/**
 * Implements an ECMA-compliant, uniform cross-browser split method
 */
qx.Bootstrap.define("qx.util.StringSplit", {
  statics : {
    /**
     * ECMA-compliant, uniform cross-browser split method
     *
     * @param str {String} Incoming string to split
     * @param separator {RegExp} Specifies the character to use for separating the string.
     *   The separator is treated as a string or a  regular expression. If separator is
     *   omitted, the array returned contains one element consisting of the entire string.
     * @param limit {Integer?} Integer specifying a limit on the number of splits to be found.
     * @return {String[]} split string
     */
    split : function(str, separator, limit){

      // if `separator` is not a regex, use the native `split`
      if(Object.prototype.toString.call(separator) !== "[object RegExp]"){

        return String.prototype.split.call(str, separator, limit);
      };
      var output = [],lastLastIndex = 0,flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.sticky ? "y" : ""),separator = RegExp(separator.source, flags + "g"),// make `global` and avoid `lastIndex` issues by working with a copy
      separator2,match,lastIndex,lastLength,compliantExecNpcg = /()??/.exec("")[1] === undefined;
      // NPCG: nonparticipating capturing group
      str = str + "";
      // type conversion
      if(!compliantExecNpcg){

        separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags);
      };
      /* behavior for `limit`: if it's...
      - `undefined`: no limit.
      - `NaN` or zero: return an empty array.
      - a positive number: use `Math.floor(limit)`.
      - a negative number: no limit.
      - other: type-convert, then use the above rules. */
      if(limit === undefined || +limit < 0){

        limit = Infinity;
      } else {

        limit = Math.floor(+limit);
        if(!limit){

          return [];
        };
      };
      while(match = separator.exec(str)){

        lastIndex = match.index + match[0].length;
        // `separator.lastIndex` is not reliable cross-browser
        if(lastIndex > lastLastIndex){

          output.push(str.slice(lastLastIndex, match.index));
          // fix browsers whose `exec` methods don't consistently return `undefined` for nonparticipating capturing groups
          if(!compliantExecNpcg && match.length > 1){

            match[0].replace(separator2, function(){

              for(var i = 1;i < arguments.length - 2;i++){

                if(arguments[i] === undefined){

                  match[i] = undefined;
                };
              };
            });
          };
          if(match.length > 1 && match.index < str.length){

            Array.prototype.push.apply(output, match.slice(1));
          };
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if(output.length >= limit){

            break;
          };
        };
        if(separator.lastIndex === match.index){

          separator.lastIndex++;
        };
      };
      if(lastLastIndex === str.length){

        if(lastLength || !separator.test("")){

          output.push("");
        };
      } else {

        output.push(str.slice(lastLastIndex));
      };
      return output.length > limit ? output.slice(0, limit) : output;
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