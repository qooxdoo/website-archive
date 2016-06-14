addSample(".accordion", {
  html: [
    '<div id="accordion-example">',
    '  <ul>',
    '    <li data-qx-accordion-page="#page0"><button>First Page</button></li>',
    '    <li id="page0">First Page Content</li>',
    '    <li data-qx-accordion-page="#page1"><button>Second Page</button></li>',
    '    <li id="page1">Second Page Content</li>',
    '  </ul>',
    '</div>'
  ],
  javascript: function() {
q("#accordion-example").accordion();
  },
  executable: true,
  showMarkup: true
});

addSample(".accordion", {
  javascript: function() {
    // programmatic Accordion creation (no pre-existing markup)
    var accordion = q.create('<div></div>')
    .appendTo(document.body)
    .accordion()
    .addButton('First Page', '#page0');

    accordion.find("ul").append(q.create('<li id="page0" class="qx-accordion-page">First Page Content</li>'));
    accordion.addButton('Second Page', '#page1')
    .find("ul").append(q.create('<li id="page1" class="qx-accordion-page">Second Page Content</li>'));
    accordion.render();
  },
  executable: true
});
;addSample(".animate", function() {
  q('#someElement').animate({
    'duration': 150,
    'timing': 'ease-out',
    'keep': 100,
    'keyFrames': {
      0: { 'height': '250px' },
      100: { 'height': '120px' }
    },
    'repeat': 1,
    'alternate': false,
    'delay': 0
  });
});


addSample(".animateReverse", function() {
  q('#someElement').animateReverse({
    'duration': 150,
    'keyFrames': {
      0: { 'height': '250px' },
      100: { 'height': '120px' }
    }
  });
});

addSample(".fadeIn", {
  html: ['<div id="myId">',
         '  Test',
         '</div>'],
  javascript: function() {
    q("#myId").fadeIn();
  },
  executable: true
});

addSample(".fadeOut", {
  html: ['<div id="myId">',
         '  Test',
         '</div>'],
  javascript: function() {
    q("#myId").fadeOut();
  },
  executable: true
});

addSample(".isEnded", function() {
  q('#someElement').animate(desc);
  if (q('#someElement').isEnded()) { /* ... */}
});

addSample(".isPlaying", function() {
  q('#someElement').animate(desc);
  if (q('#someElement').isPlaying()) { /* ... */}
});

addSample(".pause", function() {
  q('#someElement').animate(desc);
  q('#pauseButton').on("click", function() {
    q('#someElement').pause();
  });
});

addSample(".play", function() {
  q('#someElement').animate(desc);
  q('#playButton').on("click", function() {
    q('#someElement').play();
  });
});

addSample(".stop", function() {
  q('#someElement').animate(desc);
  q('#stopButton').on("click", function() {
    q('#someElement').stop();
  });
});;addSample("Array.every", {
  javascript: function() {
var a = [1, 2, 3, 4, 5];
a.every(function(item) {
  console.log(item);
  return item !== 3; // break the loop after 3
});
  },
  executable: true
});

addSample("Array.some", {
  javascript: function() {
var a = [1, 2, 3, 4, 5];
a.some(function(item) {
  console.log(item);
  return item == 3; // break the loop after 3
});
  },
  executable: true
});

addSample("Array.forEach", {
  javascript: function() {
var a = [1, 2, 3, 4, 5];
a.forEach(function(item) {
  console.log(item);
});
  },
  executable: true
});;addSample(".getAttribute", {
  html: ['<a id="myId" href="http://qooxdoo.org">',
         '  qooxdoo',
         '</a>'],
  javascript: function() {
    var link = q("#myId").getAttribute("href");
    q("#myId").setHtml(link);
  },
  executable: true
});

addSample(".setAttributes", {
  html: ['<div id="container"></div>'],
  javascript: function() {var input = q.create('<input type="text"></input>');
input.setAttributes({
  value: 'foo',
  placeholder: 'Search ...',
  name: 'searchBox',
  tabIndex: 5,
  style: 'color:red'
});
input.appendTo('#container');
},
  executable: true
});

addSample(".removeAttribute", {
  html: ['<p class="foo">Foo</p>',
         '<p class="bar">Bar</p>',
         '<p class="foo bar">Foo Bar</p>'],
  css: ['.foo {color: red;}',
        '.bar {font-weight: bold;}'],
  javascript: function() {
    // remove the 'class' attribute from all p elements
    q("p").removeAttribute("class");
  },
  executable: true
});

addSample(".getHtml", {
  html: ['<div id="myId">',
         '  <b>qooxdoo</b>',
         '</div>'],
  javascript: function() {
    console.log(q("#myId").getHtml());
  },
  executable: true
});


addSample(".getValue", {
  html: ['<input id="myId" value="123">',
         '</input>'],
  javascript: function() {
    console.log(q("input").getValue());
  },
  executable: true
});
;addSample(".block", {
  html: ['<div id="myId">',
         '  Test',
         '</div>'],
  javascript: function() {
    q("#myId").block("red", 0.4);
  },
  executable: true
});

addSample(".unblock", {
  html: ['<div id="myId">',
         '  Test',
         '</div>'],
  javascript: function() {
    q("#myId").block("red", 0.4);
    window.setTimeout(function() {
      q("#myId").unblock();
    }, 2000);
  },
  executable: true
});

addSample(".getBlocker", {
  html: ['<div id="myId">',
         '  Test',
         '</div>'],
  javascript: function() {
    q("#myId").block("red", 0.4);
    var blockerElement = q("#myId").getBlocker();
    blockerElement.on("click", function(e) {
      // react on user clicks at the blocker element itself
    });
  },
  executable: true
});;addSample(".button", {
  html: ['<button id="button-example"></button>'],
  javascript: function() {
    q("#button-example").button("Label");
  },
  executable: true,
  showMarkup: true
});

addSample("button.setLabel", {
  html: ['<button id="button-example"></button>'],
  javascript: function() {
    q("#button-example").button().setLabel("Label");
  },
  executable: true
});

addSample("button.setIcon", {
  html: ['<button id="button-example">Label</button>'],
  javascript: function() {
    q("#button-example").button().setIcon("samples/edit-clear.png");
  },
  executable: true
});

addSample("button.setMenu", {
  html: [
    '<ul id="button-menu">',
    '  <li>Item 1</li>',
    '  <li>Item 2</li>',
    '</ul>',
    '<button id="button-example"></button>'
  ],
  javascript: function() {
    q("#button-example").button().setMenu(q("#button-menu"));
  },
  executable: true
});
;addSample(".calendar", {
  html : ['<div id="calendar-example"></div>'],
  javascript: function() {
    q("#calendar-example").calendar(new Date());
  },
  executable: true,
  showMarkup: true
});
;addSample("q.cookie.set", function() {
  q.cookie.set("someKey", "someValue", 365);
});

addSample("q.cookie.get", function() {
  var cookieValue = q.cookie.get("someKey");
});
;addSample("q", function() {
  q("#myId");         // containing the element with the id 'myId'
  q(".myClass");      // finds all elements with the class 'myClass'
  q("li");            // finds all 'li' elements
  q(":header");       // finds all header elements (h1 to h6)
  q("#list :header"); // finds all header elements in the element with the id 'list'
});

addSample("q", {
  html: ['<div id="main">',
         '  <h2>first header</h2>',
         '  <p>para 1 (within)</p>',
         '  <p>para 2 (within)</p>',
         '  <div>div 1</div>',
         '</div>',
         '<p>para 3 (outside)</p>'],
  javascript: function() {
    // example for context element

    q("p", q("#main")).setStyle("color", "red");
    // also possible:
    // q("p", document.getElementById("#main")).setStyle("color", "red");
  },
  executable: true
});

addSample("q.define", function() {
  q.define("MyObject", {
    construct : function() {},
    members : {
      method : function() {}
    }
  });
});

addSample("q.define", function() {
  q.define("MyObject", {
    statics : {
      method : function() {}
    }
  });
});

addSample("q.define", function() {
  q.define("MyObject", {
    statics : {
      method : function() {
        // call another static method of this class
        this.otherMethod();
      },
      otherMethod : function() {}
    }
  });
});

addSample("q.define", {javascript :function() {
  // base class
  var Dog = q.define({
    members : {
      bark : function() {
        console.log("wuff");
      }
    }
  });

  // extended class
  var Dachshund = q.define({
    extend : Dog,
    members : {
      bark : function() {
        this.base(arguments); // call 'bark' of Dog
        console.log("wuuuuuuff");
      }
    }
  });
  // create an instance
  var myDog = new Dachshund();
  myDog.bark();
}, executable: true});

addSample("q.define", {
  javascript:function() {
var Dog = q.define({
  statics : {
    complexData : null,

    bark : function() {
      console.log("wuff");
    }
  },
  defer : function(statics) {
    // inside the 'defer' block you have access to the statics
    // e.g. to use the plugin API and add method to q
    q.$attachStatic({
      'bark' : statics.bark
    });

    // or to initialize complex data types
    statics.complexData = [];
  }
});

// works
q.bark();
console.log(Dog.complexData.length);
}, executable: true });

addSample(".concat", {
  html: ['<ul>',
         '  <li class="info">item 1</li>',
         '  <li class="info">item 2</li>',
         '  <li class="desc">item 3</li>',
         '  <li>item 4</li>',
         '</ul>'],
  css: ['.combined {',
        '  color: red;',
        '}'],
  javascript: function() {
    // combine two collections and add class 'combined'
    q(".info").concat(q(".desc")).addClass("combined");
  },
  executable: true
});

addSample(".filter", {
  html: ['<ul>',
         '  <li>item 0</li>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '  <li>item 3</li>',
         '</ul>'],
  css: ['.even {',
        '  color: red;',
        '}'],
  javascript: function() {
    // remember regarding odd/even: counting begins at 0
    q("li").filter(":even").addClass("even");
  },
  executable: true
});

addSample(".map", {
  html: ['<ul id="list-one">',
         '  <li>item 1</li>',
         '  <li class="desc">item 2</li>',
         '</ul>',
         '<ul id="list-two">',
         '  <li>item 1</li>',
         '  <li class="desc">item 2</li>',
         '</ul>',
         '<ul id="result">',
         '  <!-- append result goes here -->',
         '</ul>'],
  css: ['#list-one {',
        '  color: pink;',
        '}',
        '#list-two {',
        '  color: red;',
        '}',
        '#result {',
        '  color: firebrick;',
        '}'],
  javascript: function() {
    // q.map() => map method which operates on collections
    var parentNodes = q('.desc').map(function(elem) {
      return elem.parentNode;
    }).toArray();

    // Array.map() => map method which operates on arrays
    var ids = parentNodes.map(function(elem) {
      return elem.id;
    });

    q("#result").append("<li>"+ids.join(" *** ")+"</li>");
  },
  executable: true
});

addSample(".slice", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '  <li>item 3</li>',
         '  <li>item 4</li>',
         '</ul>'],
  css: ['.selected {',
        '  color: red;',
        '}'],
  javascript: function() {
    var collection = q("li").slice(1,3).addClass("selected");
    // (collection.length === 2) => item 2, item 3
  },
  executable: true
});

addSample(".splice", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '  <li>item 3</li>',
         '  <li>item 4</li>',
         '</ul>'],
  javascript: function() {
    var collection = q("li");
    // (collection.length === 4)
    var removed = collection.splice(1,2);
    // (removed.length === 3) => item 2, item 3, item 4
    // (collection.length === 1) => item 1
  }
});

addSample("q.$attach", {
  html: ['<div id="root-elem">',
         '  <div>foo <span>should be red</span>, foo <span>should be red</span></div>',
         '  <div>bar</div>',
         '</div>'],
  css: ['.important {',
        '  color: red;',
        '}'],
  javascript: function() {
    // simple sample to get an idea
    q.$attach({"test" : 123}); // q("#id").test == 123

    // more sophisticated sample
    var addClassToEveryChildNamed = function(classToAdd, childElementName) {
      // access to DOM collection (e.g. things captured by q("#id"))
      this._forEachElement(function(item) {
        q(item).getChildren().forEach(function(innerItem) {
          if (q.getNodeName(innerItem) === childElementName.toLowerCase()) {
            q(innerItem).addClass(classToAdd);
          }
        });
      });

      // return this, to allow further method chaining
      return this;
    };

    // make function available with another name (same would be also fine)
    q.$attach({"addClassToEveryChildByName": addClassToEveryChildNamed});

    // try out new method
    q("#root-elem div").addClassToEveryChildByName("important", "span");
  },
  executable: true
});

addSample("q.$attachStatic",function(){
  // simple sample to get an idea
  q.$attachStatic({"test" : 123}); // q.test == 123

  // functionality which does work on DOM collections    => use attach()
  // functionality which doesn't work on DOM collections => use attachStatic()
  var includeStylesheet = function(uri, doc) {
    // ...
  };

  q.$attachStatic({"includeStylesheet": includeStylesheet});
  q.includeStylesheet("http://example.org/", doc);
});


addSample(".debug", function() {
// This code only works in the 'qx.debug' mode. In production mode this method
// simply does nothing and returns the collection.

// Suppose you have the following chain of methods
q("#mySelector").getParents().getSiblings().setStyle('color', '#f00');

// Comparable to the 'logThis' method.
// Can be inserted at any point in the chain and blocks the further processing. If you like to use a
// non-blocking method take a look at the 'logThis' method.
// -> calls the native debugger of your favorite browser for easy introspection
q("#mySelector").getParents().debug().getSiblings().setStyle('color', '#f00');
q("#mySelector").getParents().getSiblings().debug().setStyle('color', '#f00');
});


addSample(".logThis", function() {
// This code only works in the 'qx.debug' mode. In production mode this method
// simply does nothing and returns the collection.

// Suppose you have the following chain of methods
q("#mySelector").getParents().getSiblings().setStyle('color', '#f00');

// Comparable to the 'debug' method.
// Instead of a hard stop using the debugger (like the 'debug' method) this method is non-blocking
// -> logs certains infos (length, DOM elements and the collection instance) to your console
q("#mySelector").getParents().logThis().getSiblings().setStyle('color', '#f00');
q("#mySelector").getParents().getSiblings().logThis().setStyle('color', '#f00');
});;addSample(".addClass", {
  html: ['<ul>',
         '  <li class="pristine">item 1</li>',
         '  <li>item 2</li>',
         '  <li>item 3</li>',
         '</ul>'],
  css: ['.pristine {',
        '  color: blue;',
        '}',
        '.edited {',
        '  color: red;',
        '}'],
  javascript: function() {
    q(":not(li.pristine)").addClass("edited");
  },
  executable: true
});

addSample(".addClasses", {
  html: ['<ul>',
         '  <li class="hint">item 0</li>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '  <li>item 3</li>',
         '</ul>'],
  css: ['.hint {',
        '  color: red;',
        '}',
        '.hint.odd {',
        '  background-color: #ffd;',
        '}'],
  javascript: function() {
    // remember regarding odd/even: counting begins at 0
    q("li:odd").addClasses(["hint", "odd"]);
  },
  executable: true
});

addSample(".getClass", {
  html: ['<ul>',
         '  <li class="first">item 1</li>',
         '  <li class="second">item 2</li>',
         '  <li>item 3</li>',
         '  <li>item 4</li>',
         '</ul>'],
  javascript: function() {
    var className = q("li").getClass();
    // (className === "first")
  }
});

addSample(".getStyle", {
  html: ['<ul>',
         '  <li class="hint">item 1</li>',
         '  <li>item 2</li>',
         '  <li class="info">item 3</li>',
         '  <li>item 4</li>',
         '</ul>'],
  css: ['.hint {',
        '  color: red;',
        '}',
        '.info {',
        '  padding: 10px;',
        '}'],
  javascript: function() {
    var collection = q("li.hint");
    var color = collection.getStyle("color");
    // (color === "rgb(255, 0, 0)")
    var paddingTop = q("li.info").getStyle("padding-top");
    // (paddingTop === "10px")
  },
  executable: true
});

addSample(".getStyles", {
  html: ['<ul>',
         '  <li class="hint">item 1</li>',
         '  <li>item 2</li>',
         '  <li>item 3</li>',
         '</ul>'],
  css: ['.hint {',
        '  color: red;',
        '  padding-left: 10px;',
        '}'],
  javascript: function() {
    var styles = q("li").getStyles(["color", "padding-left"]);
    // styles === {"color":"rgb(255, 0, 0)",
    //             "padding-left": "10px"}
  },
  executable: true
});

addSample(".hasClass", {
  html: ['<ul>',
         '  <li class="selected">item 1</li>',
         '  <li>item 2</li>',
         '  <li>item 3</li>',
         '</ul>'],
  css: [
        '.selected {',
        '  color: red;',
        '}'],
  javascript: function() {
    var isFirstSelected = q("li").hasClass("selected");
    // (isFirstSelected === true)
    var isLastSelected = q("li:last").hasClass("selected");
    // (isLastSelected === false)
  }
});

addSample(".hide", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '  <li>item 3</li>',
         '</ul>'],
  javascript: function() {
    // index is 0-based
    q("li:nth(1)").hide();
  },
  executable: true
});

addSample(".removeClass", {
  html: ['<ul>',
         '  <li class="hint red">item 1</li>',
         '  <li class="red">item 2</li>',
         '  <li class="blue">item 3</li>',
         '  <li>item 4</li>',
         '</ul>'],
  css: [
        '.hint {',
        '  background-color: #ffd;',
        '}',
        '.red {',
        '  color: red;',
        '}',
        '.blue {',
        '  color: blue;',
        '}'],
  javascript: function() {
    q("li").removeClass("red");
  },
  executable: true
});

addSample(".removeClasses", {
  html: ['<ul>',
         '  <li class="hint red">item 1</li>',
         '  <li class="red">item 2</li>',
         '  <li class="blue">item 3</li>',
         '  <li>item 4</li>',
         '</ul>'],
  css: [
        '.hint {',
        '  background-color: #ffd;',
        '}',
        '.red {',
        '  color: red;',
        '}',
        '.blue {',
        '  color: blue;',
        '}'],
  javascript: function() {
    q("li").removeClasses(["red", "blue"]);
  },
  executable: true
});

addSample(".replaceClass", {
  html: ['<ul>',
         '  <li class="hint red">item 1</li>',
         '  <li class="red">item 2</li>',
         '  <li class="blue">item 3</li>',
         '  <li>item 4</li>',
         '</ul>'],
  css: [
        '.hint {',
        '  background-color: #ffd;',
        '}',
        '.red {',
        '  color: red;',
        '}',
        '.blue {',
        '  color: blue;',
        '}',
        '.green {',
        '  color: green;',
        '}'],
  javascript: function() {
    q("li").replaceClass("red", "green");
  },
  executable: true
});

addSample(".setStyle", {
  html: ['<ul>',
         '  <li>item one</li>',
         '  <li>item two</li>',
         '  <li>item three</li>',
         '</ul>'],
  javascript: function() {
    q("li:contains(two)").setStyle("color", "red");
  },
  executable: true
});

addSample(".setStyles", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '  <li>item 3</li>',
         '</ul>'],
  javascript: function() {
    var stylesMap = {
      "color": "red",
      "padding-left": "10px",
      "background-color": "#ffd"
    };
    q("li").setStyles(stylesMap);
  },
  executable: true
});

addSample(".toggleClass", {
  html: ['<ul>',
         '  <li class="selected">item 1</li>',
         '  <li class="selected">item 2</li>',
         '  <li>item 3</li>',
         '  <li>item 4</li>',
         '</ul>'],
  css: ['.selected {',
        '  color: red;',
        '}'],
  javascript: function() {
    q("li").toggleClass("selected");
  },
  executable: true
});

addSample(".show", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '  <li class="hidden">item 3</li>',
         '  <li>item 4</li>',
         '</ul>'],
  css: ['.hidden {',
        '  display: none;',
        '}'],
  javascript: function() {
    q("li:first").hide();
    q("li").show();
  },
  executable: true
});

addSample(".toggleClasses", {
  html: ['<ul>',
         '  <li class="selected">item 1</li>',
         '  <li class="selected">item 2</li>',
         '  <li>item 3</li>',
         '  <li>item 4</li>',
         '</ul>'],
  css: ['.selected {',
        '  color: red;',
        '}',
        '.edited {',
        '  background-color: #ffd;',
        '}'],
  javascript: function() {
    q("li").toggleClasses(["selected", "edited"]);
  },
  executable: true
});
;addSample(".getAllData", {
  html: ['<div id="myId" data-x="1" data-y="2"></div>'],
  javascript: function() {
    var data = q("#myId").getAllData();
    q("#myId").setHtml("X:" + data.x + " " + "Y:" + data.y);
  },
  executable: true
});

addSample(".getData", {
  html: ['<div id="myId" data-x="1"></div>'],
  javascript: function() {
    q("#myId").setHtml(q("#myId").getData("x"));
  },
  executable: true
});

addSample(".removeData", {
  html: ['<div id="myId" data-x="1">init</div>'],
  javascript: function() {
    q("#myId").removeData("x");
    q("#myId").setHtml(q("#myId").getData("x"));
  },
  executable: true
});

addSample(".setData", {
  html: ['<div id="myId" data-x="1"></div>'],
  javascript: function() {
    q("#myId").setData("x", 2);
    q("#myId").setHtml(q("#myId").getData("x"));
  },
  executable: true
});;addSample(".datepicker", {
  html : ['<input type="text" id="datepicker-example"></input>'],
  javascript: function() {
q("#datepicker-example").datepicker(new Date());
  },
  executable: true,
  showMarkup: true
});

addSample(".datepicker", {
  html : ['<input type="text" id="datepicker-example"></input>'],
  javascript: function() {
var datepicker = q("#datepicker-example").datepicker(new Date());
// customize the format function to change the value which is
// set to the input element
datepicker.setConfig('format', function(date) {
  return date.toLocaleString();
});

// Update the datepicker by rendering it
datepicker.render();
  },
  executable: true,
  showMarkup: true
});

addSample(".datepicker", {
  html : ['<input type="text" id="datepicker-example"></input>'],
  javascript: function() {
var datepicker = q("#datepicker-example").datepicker(new Date());

// configure calendar widget
// only allow to select week days
datepicker.getCalendar().setConfig('selectableWeekdays', [ 1, 2, 3, 4, 5 ]);

// only allow to select today and future days
datepicker.getCalendar().setConfig('minDate', new Date());

// Update the datepicker by rendering it
datepicker.render();
  },
  executable: true,
  showMarkup: true
});

addSample(".datepicker", {
  html : ['<input type="text" id="datepicker-example"></input>'],
  javascript: function() {
var datepicker = q("#datepicker-example").datepicker(new Date());

// allow user input on the connected input element
datepicker.setConfig('readonly', false);

// Update the datepicker by rendering it
datepicker.render();
  },
  executable: true,
  showMarkup: true
});;addSample("q.env.get", {
  html: ['<div id="data"></div>'],
  javascript: function() {
    var data = [
      "browser.name: " +  q.env.get("browser.name"),
      "browser.version: " + q.env.get("browser.version")
      ].join("<br>");
    q("#data").setHtml(data);
  },
  executable: true
});

addSample("q.env.add", {
  javascript: function() {
    q.env.add("my.setting", 123);
    console.log(q.env.get("my.setting"));
  },
  executable: true
});;addSample("q.ready", function() {
  q.ready(function() {
    // ready to go
  });
});

addSample("q.ready", function() {

  var myClass = q.define("myNamespace.myClass", {
    statics: {
      myMethod : function() {
        this.anotherMethod();
      },

      anotherMethod : function() {
        // do something
      }
    }
  });

  // Use 'ready' together with a named function and
  // call your method with scope correction
  q.ready(myClass.myMethod.bind(myClass));
});


addSample(".on", function() {
  // Suppose you like to have one extra parameter besides your event instance
  // e.g. you like to call the 'listenerFunction' within a for loop and pass the
  // current index.
  var listenerFunction = function(loopCounter, event) {
    // outputs the value of the 'i' variable
    console.log("current loopCounter is: ", loopCounter);

    // outputs the event instance
    console.log("event: ", event);
  };

  // Use 'Function.bind' method to pass the local 'i' variable
  // to the 'listenerFunction' as first argument
  for (var i=0; i<10; i++) {
    q("div#myTarget" + i).on("click", listenerFunction.bind(this, i));
  }
});

addSample(".on", function() {
  // handle keyup event with scope correction
  var handleFilterInput = function(ev) {
    // event object
    console.log(ev);

    // get input value
    var value = q(ev.getTarget()).getValue();

    // if target is a checkbox you could do something like this when handling the change event
    q(ev.getTarget()).getAttribute('checked');
  };

  q('#someElement').on('keyup', handleFilterInput, this);
});

addSample(".on", {
  javascript: function() {
// advanced example with event handling - the handler is called only if no "resize" events
// where triggered for at least 500 milliseconds
var resizeHandler = function() {
  alert("current viewport is: " + q(window).getWidth() + " x " + q(window).getHeight());
};

var winCollection = q(window);
winCollection.on("resize", q.func.debounce(resizeHandler, 500), winCollection);
  },
  executable: true
});


addSample(".off", function() {
// adding a handler to your collection (happened earlier)
var myHandler = function(e) {
  var target = e.getTarget();
  // more code ...
};
q("#navigationBar").on("tap", myHandler);

// removing the listener - it's important to remove it with the same arguments
q("#navigationBar").off("tap", myHandler);

// this WON'T remove the listener, since you hand in a different context
// same for adding a listener with a context and forget to pass the third argument
q("#navigationBar").off("tap", myHandler, window); // WRONG: listener still there
});


addSample(".allOff", function() {
// before removing DOM elements, remove *all tap* listeners
q("#navigationBar").allOff("tap").remove();

// before removing DOM elements, remove *all* listeners
q("#navigationBar").allOff().remove();
}
);


addSample(".hasListener", {
  javascript: function() {
var myListener = function(e) {};

// sample code to demonstrate the pitfall with the context parameter
q(document.body).on('pointerdown', myListener, q(window));

// result will *always* be 'false'
// -> the context to check for is a *new* collection instance and *not* identical to the one used with the 'on' method
console.log(q(document.body).hasListener('pointerdown', myListener, q(window)));

// this will work
var context = q(window);
q(document.body).on('pointerdown', myListener, context);

// result will be 'true'
console.log(q(document.body).hasListener('pointerdown', myListener, context));
  },
  executable: true
});


addSample(".emit", {
  html: [ '<div id="target"></div>' ],
  javascript: function() {/* BE AWARE OF OVERUSING THIS PATTERN. IT CAN RESULT IN BAD / UNMAINTAINABLE CODE */

var target = q('#target');
// normally the listener and emitteer code won't be placed together
// just for demo cases packaged here together

// listener code
// there can be as many as callbacks registered as you like
// can be used for a 1:n communication
target.on('customEvent', function(data) {
  // 'data' is the payload of the event
  // in our case we can do the following:
  data.sampleMethod();
  var index = data.index;
});

// emitter code
// you can define whatever you like to as payload / data
target.emit('customEvent', {
  index: 3,
  sampleMethod: function() { alert('sampleMethod called!'); }
});
},
executable: true
});

addSample(".hover", {
    html: ['<div id="hover">Hover element</div>'],
    javascript: function() {
q("#hover").hover(function() {
  this.setStyles({ color: "#ff0000",
                   backgroundColor: "#00ff00" });
}, function() {
  this.setStyles({ color: "#00ff00",
                  backgroundColor: "#ff0000" });
  });
},
    executable: true
});

addSample(".hover", {
    html: ['<div id="container">',
     '  <div id="header">Header</div>',
     '  <div id="content">',
     '    <div id="visible">',
     '      <div id="box-content">Visible</div>',
     '    </div>',
     '   <div id="hover">',
     '     <div class="trigger">Hover area</div>',
     '   </div>',
     '  </div>',
     '</div>' ],
    css: [ '#header {',
      '  background-color: orange;',
      '  font-size: 5rem;',
    '}',
    '#container {',
      '  border: 1px solid green;',
      '  width: 300px;',
    '}',

    '#content {',
      '  overflow: hidden;',
      '  height: 400px;',
    '}',

    '#visible {',
      '  background-color: red;',
      '  position: relative;',
    '}',

    '#visible #box-content {',
      '  height: 400px;',
    '}',

    '.trigger {',
      '  position: relative;',
      '  background-color: purple;',
      '  height: 50px;',
    '}',

    '#hover {',
      '  background-color: yellow;',
      '  position: relative;',
      '  height: 400px;',
      '  top: -50px;',
    '}' ],
    javascript: function() {
var animationEndPosition = '-400px';

// animation description
var desc = {
  'keep': 100,
  'keyFrames': {
    0: { 'top': '-50px' },
    100: { 'top': animationEndPosition }
  },
  'delay': 0,
  'duration': 400
};

// setup / memorize collection to minimize DOM access
var mouseOver = false;
var hover = q('#hover');
var trigger = q('#hover .trigger');

// hover in
var hoverIn = function(e) {

  // if the user hovered over our 'trigger' element
  if (e.getTarget() == trigger[0]) {

    mouseOver = true;

    // start animation if no animation currently runs and there is a need for animation
    // -> the top position is not the target position
    if (hover.isPlaying() === false && hover.getStyle('top') === desc.keyFrames['0'].top) {
      desc.keyFrames['100'].top = animationEndPosition;
      hover.animate(desc);
      hover.setProperty('direction', 'forward');
    }
  }
};

// hover out
var hoverOut = function(e) {

  // extended check to be sure we're out of the 'content' element
  var mouseOver = q(e.getRelatedTarget()).isChildOf(this);

  if (mouseOver === false) {

    // since we might manipulated the description we set it for safety
    desc.keyFrames['100'].top = animationEndPosition;

    // if no animation runs and it's necessary to animate
    // -> safely reverse it
    if (hover.isPlaying() === false && hover.getStyle('top') === desc.keyFrames['100'].top) {

      hover.animateReverse(desc);
      hover.setProperty('direction', 'reverse');
    }
    // 'break' the forward animation if the user hovers out during this animation
    else if (hover.isPlaying() && hover.getProperty('direction') === 'forward') {

      // get the current pos and then stop the animation - order is important here
      var currentTopPosition = hover.getStyle('top');

      hover.stop();

      // begin with the current position - not the 'whole' animation
      desc.keyFrames['100'].top = currentTopPosition;
      hover.animateReverse(desc);
      hover.setProperty('direction', 'reverse');
    }

  }
};

// check for hover events at the 'content' element
q('#content').hover(hoverIn, hoverOut);
},
    executable: true
});

addSample(".onMatchTarget", function() {
q(document).onMatchTarget('pointerdown', '.demo-cell', function(target, event) {
  // whenever a 'pointerdown' on an event target occurs and the given selector matches
});
});

addSample(".onMatchTarget", {
  html: ['<ul id="test">',
    '  <li>List item</li>',
    '  <li class="special">List item</li>',
    '  <li>List item</li>',
    '  <li class="special">List item</li>',
    '  <li>List item</li>',
    '  <li>List item</li>',
    '</ul>'],
  css: ['.special {',
    '  background-color: #f00',
    '}'
  ],
  javascript: function() {
q('ul#test').onMatchTarget('pointerdown', '.special', function(target, event) {
  // whenever a 'pointerdown' on an event target occurs and the given selector matches
  console.log('pointer down on: ', target);
  console.log('pointer event instance: ', event);
});
},
  executable: true
});

addSample("keyboard-keyup", {
  html: [ '<input type="text" id="website"></input>',
    '<div id="textContainer"></div>'
  ],
  css: ['#website {',
    '  position: relative;',
    '  left: 50px;',
    '  top: 50px;',
    '  border: 1px solid #ADD8E6;',
    '  width: 50%;',
    '}',
    '',
    '#textContainer {',
    '  position: relative;',
    '  margin: 0 50px;',
    '  padding: 10px;',
    '  top: 75px;',
    '  background-color: #eee;',
    '  display: block;',
    '  height: 150px;',
    '  overflow: auto;',
    '  font-size: 12px;',
    '  font-family: Verdana;',
    '}'
  ],
  javascript: function() {
// Catch the key the user hit and display it in the div element
// IMPORTANT: use the 'keyup' or 'keydown' event when working with the 'getKeyIdentifier' method
// The 'keypress' event is due browser incompatibilities not recommended
// (e.g. some identifiers like 'Enter' or 'Backspace' are simply not working for Chrome)
q('#website').on('keyup', function(e) {
  var userInput = e.getKeyIdentifier();

  var content = q('#textContainer').getAttribute('text');
  // special case if the div element has no content
  content = content === null ? '' : content;

  q('#textContainer').setAttribute('text', content + ' ' + userInput);
});
},
executable: true
});

addSample("keyboard-keyup", {
  html: [ '<input type="text" id="website"></input>',
    '<div id="textContainer"></div>'
  ],
  css: ['#website {',
    '  position: relative;',
    '  left: 50px;',
    '  top: 50px;',
    '  border: 1px solid #ADD8E6;',
    '  width: 50%;',
    '}',
    '',
    '#textContainer {',
    '  position: relative;',
    '  margin: 0 50px;',
    '  padding: 10px;',
    '  top: 75px;',
    '  background-color: #eee;',
    '  display: block;',
    '  height: 150px;',
    '  overflow: auto;',
    '  font-size: 12px;',
    '  font-family: Verdana;',
    '}'
  ],
  javascript: function() {
// Use the 'keyup' event to sync the the value of an input element with a div element.
// Hint: do not use the 'keypress' event. The value of the input element is (yet) not updated at this time
// and you would get an old value.
q('#website').on('keyup', function(e) {
  // target is the input element
  var inputValue = q(e.getTarget()).getValue();

  // Sync with the div element by using the value of the input element in favor
  // of the value supplied by the event.
  // The value of 'e.getKeyIdentifier()' would return the key the user hit, but then
  // you have to handle Backspace, Delete and other special keys to sync the input and div element correctly.
  q('#textContainer').setAttribute('text', inputValue);
});
},
executable: true
});;addSample("q.io.xhr", function() {
  var getData = function(callback) {
    var xmlhttp = q.io.xhr("/resource", {
      header: {
        'Accept': 'application/json'
      }
    });

    xmlhttp.on('loadend', function(callback, xhr) {
      if (xhr.responseText) {
        // when there is a response, pass it back to the callback function and correct scope
        callback(this, JSON.parse(xhr.responseText));
      }
    }.bind(this, callback));

    // send request now
    xmlhttp.send();
  };

  // calling this function
  getData(function(that, responseData) {
    // handle response
    console.log(responseData);
  });
});
;addSample("q.create", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 4</li>',
         '</ul>'],
  css: ['.new {',
        '  color: red;',
        '}'],
  javascript: function() {
    var items = '<li class="new">item 2</li><li class="new">item 3</li>';
    q.create(items).insertAfter("li:first");
  },
  executable: true
});

addSample("q.create", function() {
  // won't work as expected - the result will only contain the 'title' element
  var headElement = q.create('<head><title>My title</title></head>');

  // better approach is to use
  var headElement = q.create('<head>').append('<title>My title</title>');
});

addSample(".after", {
  html: ['<ul id="move-pool">',
         '  <li>staying 1</li>',
         '  <li class="moveable">move-me 1</li>',
         '  <li class="moveable">move-me 2</li>',
         '  <li>staying 2</li>',
         '</ul>',
         '<ul id="target">',
         '  <li>target 1</li>',
         '  <li>target 2</li>',
         '</ul>'],
  css: ['#move-pool {',
        '  background-color: #dff;',
        '  margin-bottom: 15px;',
        '}',
        '#target {',
        '  background-color: #ffd;',
        '}',
        '.moveable {',
        '  color: red;',
        '}'],
  javascript: function() {
    // existing elements get relocated (not cloned!)
    q("#target li").after(q(".moveable"));

    // same as:
    // q(".moveable").insertAfter(q("#target li"));
  },
  executable: true
});

addSample(".after", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  css: ['.created {',
        '  color: red;',
        '}'],
  javascript: function() {
    q("li").after('<li class="created">new item</li>');
  },
  executable: true
});

addSample(".append", {
  html: ['<ul>',
         '  <li class="moveable">move-me</li>',
         '</ul>',
         '<ul id="target">',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  css: ['.moveable {',
        '  color: red;',
        '}'],
  javascript: function() {
    // existing elements get relocated (not cloned!)
    q("#target").append(q(".moveable"));
    // note: the first <ul>-elem still exists (now empty)

    // same as:
    // q(".moveable").appendTo(q("#target"));
  },
  executable: true
});

addSample(".append", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  javascript: function() {
    q("ul").append('<li>item 3</li>');

    // same as:
    // q.create('<li>item 3</li>').appendTo("ul");
  },
  executable: true
});

addSample(".appendTo", {
  html: ['<ul>',
         '  <li class="moveable">move-me</li>',
         '</ul>',
         '<ul id="target">',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  css: ['.moveable {',
        '  color: red;',
        '}'],
  javascript: function() {
    // existing elements get relocated (not cloned!)
    q(".moveable").appendTo(q("#target"));
    // note: the first <ul>-elem still exists (now empty)

    // same as:
    // q("#target").append(q(".moveable"));
  },
  executable: true
});

addSample(".appendTo", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  javascript: function() {
    q.create('<li>item 3</li>').appendTo("ul");

    // same as:
    // q("ul").append('<li>item 3</li>');
  },
  executable: true
});

addSample(".before", {
  html: ['<ul id="move-pool">',
         '  <li>staying 1</li>',
         '  <li class="moveable">move-me 1</li>',
         '  <li class="moveable">move-me 2</li>',
         '  <li>staying 2</li>',
         '</ul>',
         '<ul id="target">',
         '  <li>target 1</li>',
         '  <li>target 2</li>',
         '</ul>'],
  css: ['#move-pool {',
        '  background-color: #dff;',
        '  margin-bottom: 15px;',
        '}',
        '#target {',
        '  background-color: #ffd;',
        '}',
        '.moveable {',
        '  color: red;',
        '}'],
  javascript: function() {
    // existing elements get relocated (not cloned!)
    q("#target li").before(q(".moveable"));
  },
  executable: true
});

addSample(".before", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  css: ['.created {',
        '  color: red;',
        '}'],
  javascript: function() {
    q("li").before('<li class="created">new item</li>');
  },
  executable: true
});

addSample(".blur", {
  html: ['<form action="#">',
         '  <div class="row">',
         '    <label for="name">name</label>',
         '    <input id="name" type="text" />',
         '  </div>',
         '  <div class="row">',
         '    <label for="password">password</label>',
         '    <input id="password" type="text" />',
         '  </div>',
         '</form>'],
  javascript: function() {
    // :first is default - being explicit here
    q("input:first").focus();

    // blur focus after 3sec
    setTimeout(function() {
      q("input:first").blur();
    }, 3000);
  },
  executable: true
});

addSample(".clone", {
  html: ['<ul id="clone-pool">',
         '  <li class="cloneable">clone-me 1</li>',
         '  <li class="cloneable">clone-me 2</li>',
         '</ul>',
         '<ul id="target">',
         '  <li>target 1</li>',
         '  <li>target 2</li>',
         '</ul>'],
  css: ['#clone-pool {',
        '  background-color: #dff;',
        '  margin-bottom: 15px;',
        '}',
        '#target {',
        '  background-color: #ffd;',
        '}',
        '.cloneable {',
        '  color: red;',
        '}'],
  javascript: function() {
    // caution: ids would be copied, too!
    q(".cloneable").clone().appendTo(q("#target"));
  },
  executable: true
});

addSample(".empty", {
  html: ['<div>',
         '  <p>para 1</p>',
         '  <ul id="remove-my-children">',
         '    <li>item 1</li>',
         '    <li>item 2</li>',
         '  </ul>',
         '  <p>para 2</p>',
         '</div>'],
  javascript: function() {
    q("#remove-my-children").empty();

    // see .remove() if <ul>-elem should not stay
  },
  executable: true
});

addSample(".focus", {
  html: ['<form action="#">',
         '  <div class="row">',
         '    <label for="name">name</label>',
         '    <input id="name" type="text" />',
         '  </div>',
         '  <div class="row">',
         '    <label for="password">password</label>',
         '    <input id="password" type="text" />',
         '  </div>',
         '</form>'],
  javascript: function() {
    // :first is default - being explicit here
    q("input:first").focus();
  },
  executable: true
});

addSample(".getScrollTop", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  javascript: function() {
    var scrollTop = q("li:last").getScrollTop();
    // (scrollTop === 0)
  },
  executable: true
});

addSample(".getScrollLeft", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  javascript: function() {
    var scrollLeft = q("li:last").getScrollLeft();
    // (scrollLeft === 0)
  },
  executable: true
});

addSample(".insertAfter", {
  html: ['<ul id="move-pool">',
         '  <li>staying 1</li>',
         '  <li class="moveable">move-me 1</li>',
         '  <li class="moveable">move-me 2</li>',
         '  <li>staying 2</li>',
         '</ul>',
         '<ul id="target">',
         '  <li>target 1</li>',
         '  <li>target 2</li>',
         '</ul>'],
  css: ['#move-pool {',
        '  background-color: #dff;',
        '  margin-bottom: 15px;',
        '}',
        '#target {',
        '  background-color: #ffd;',
        '}',
        '.moveable {',
        '  color: red;',
        '}'],
  javascript: function() {
    // existing elements get relocated (not cloned!)
    q(".moveable").insertAfter(q("#target li:last"));

    // same as:
    // q("#target li:last").after(q(".moveable"));
  },
  executable: true
});

addSample(".insertBefore", {
  html: ['<ul id="move-pool">',
         '  <li>staying 1</li>',
         '  <li class="moveable">move-me 1</li>',
         '  <li class="moveable">move-me 2</li>',
         '  <li>staying 2</li>',
         '</ul>',
         '<ul id="target">',
         '  <li>target 1</li>',
         '  <li>target 2</li>',
         '</ul>'],
  css: ['#move-pool {',
        '  background-color: #dff;',
        '  margin-bottom: 15px;',
        '}',
        '#target {',
        '  background-color: #ffd;',
        '}',
        '.moveable {',
        '  color: red;',
        '}'],
  javascript: function() {
    // existing elements get relocated (not cloned!)
    q(".moveable").insertBefore(q("#target li:first"));

    // same as:
    // q("#target li:first").before(q(".moveable"));
  },
  executable: true
});

addSample(".remove", {
  html: ['<div>',
         '  <p>para 1</p>',
         '  <ul id="remove-me-and-my-children">',
         '    <li>item 1</li>',
         '    <li>item 2</li>',
         '  </ul>',
         '  <p>para 2</p>',
         '</div>'],
  javascript: function() {
    q("#remove-me-and-my-children").remove();

    // see .empty() if <ul>-elem should stay
  },
  executable: true
});

addSample(".setScrollTop", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  css: ['ul {',
       '  border: 1px solid #ddd;',
       '  width: 200px;',
       '  height: 100px;',
       '  overflow: auto;',
       ' }',
       'li {',
       '  width:400px;',
       '  height:100px;',
       '}'],
  javascript: function() {
    q("ul").setScrollTop(70);
  },
  executable: true
});

addSample(".setScrollLeft", {
  html: ['<ul>',
         '  <li>a veeeeeeeeeeery long item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  css: ['ul {',
       '  border: 1px solid #ddd;',
       '  width: 200px;',
       '  height: 100px;',
       '  overflow: auto;',
       ' }',
       'li {',
       '  width:400px;',
       '  height:100px;',
       '}'],
  javascript: function() {
    q("ul").setScrollLeft(50);
  },
  executable: true
});

addSample(".wrap", {
  html: ['<div>',
         '  <p>para 1</p>',
         '  <!-- <div class="wrapper"> -->',
         '    <p>para 2</p>',
         '  <!-- </div> -->',
         '  <!-- <div class="wrapper"> -->',
         '    <p>para 3</p>',
         '  <!-- </div> -->',
         '  <p>para 4</p>',
         '</div>'],
  css: ['div .wrapper p {',
        '  background-color: #dff;',
        '}',
        'div p {',
        '  background-color: #ffd;',
        '}'],
  javascript: function() {
    q("p").slice(1,3).wrap('<div class="wrapper">');
  },
  executable: true
});
;addSample("q.matchMedia", {
  javascript: function() {
    var isLandscape = q.matchMedia("all and (orientation:landscape)").matches;  // true or false
  }
});

addSample("q.matchMedia", {
  javascript: function() {
    var mql = qxWeb.matchMedia("screen and (min-width: 480px)");
    mql.on("change",function(mql) {
      // Do your stuff
    });
  }
});

addSample("q.addSizeClasses", {
  javascript: function() {
    q.addSizeClasses();

    console.log(q("html").getClass());
  },
  executable: true
});
;addSample("q.messaging.on", function() {
  q.messaging.on("get", "/address/{id}", function(data) {
    var id = data.params.id; // 1234
    // do something with the id...
  },this);
});

addSample("q.messaging.onAny", function() {
  q.messaging.onAny("/address/{id}", function(data) {
    var id = data.params.id; // 1234
    // do something with the id...
  },this);
});

addSample("q.messaging.emit", function() {
  q.messaging.emit("get", "/address/1234"); // emit a message on the 'get' channel
});

addSample("q.messaging.remove", function() {
  q.messaging.remove(id); // id must be the return of an 'on' call
});
;addSample("q.placeholder.update", {
  html: ['<input type="text" placeholder="abc"></input>'],
  javascript: function() {
    // make sure the placeholders work on older browsres
    q.placeholder.update();
  },
  executable: true
});;addSample(".placeTo", {
  html: ['<div id="target">',
         '  Test',
         '</div>',
         '<div id="popup">Popup</div>'],
  css : ['div {',
         '  position: absolute;',
         '  background-color: #ddd;',
         '  padding: 5px;',
         '}',
         '',
         '#popup {',
         '  background-color: red;',
         '}'],
  javascript: function() {
    q("#popup").placeTo("#target", "right-top", {left: 10});
  },
  executable: true
});;addSample("rating.setValue", {
  javascript: function() {
    q.create("<div>").rating().appendTo(document).setValue(5);
  },
  executable: true
});

addSample("rating.getValue", {
  javascript: function() {
    console.log(
      q.create("<div>").rating().appendTo(document).getValue()
    );
  },
  executable: true
});

addSample(".rating", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").rating();
    // some time later
    q("#target").setTemplate("symbol", "•");
    // update the rating
    q("#target").render();
  },
  executable: true
});

addSample(".rating", {
  javascript: function() {
    q.create("<div>").rating(3, "π", 7).appendTo(document);
  },
  executable: true
});

addSample(".rating", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").rating();
  },
  executable: true,
  showMarkup: true
});
;addSample("q.rest.resource", function() {
  // init
  // ----
  var resourceDesc = {
    "get": { method: "GET", url: "/photo/{id}" },
    "put": { method: "PUT", url: "/photo/{id}"}
  };
  var resource = q.rest.resource(resourceDesc);
  resource.setBaseUrl("http://example.org");

  // add listener (GET/PUT)
  // ----------------------
  resource.on("getSuccess", function(e) {
    // the response of a successful GET request
    console.log(e.response);
  });
  resource.on("getError", function(e) {
    // the response of a failing GET request
    console.log(e.response);
  });
  resource.on("putSuccess", function(e) {
    // the response of a successful PUT request
    console.log(e.response);
  });
  resource.on("putError", function(e) {
    // the response of a failing PUT request
    console.log(e.response);
  });

  // finally interact with resource
  // ------------------------------
  photo.get({id: 1});  // also possible: photo.invoke("get", {id: 1});

  // additionally sets request data (provide it as string or set the content type)
  // - in a RESTful environment this creates a new resource with the given 'id'
  photo.configureRequest(function(req) {
    req.setRequestHeader("Content-Type", "application/json");
  });
  photo.put({id: 1}, {title: "Monkey"});
});


;addSample(".slider", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").slider();
  },
  executable: true
});

addSample(".slider", {
  javascript: function() {
    q.create("<div>").slider().appendTo(document);
  },
  executable: true
});

addSample(".slider", {
  html: [
    '<div id="target">',
    '  <button class="qx-slider-knob"></button>',
    '</div>'
  ],
  javascript: function() {
    q("#target").slider(20, 10);
  },
  executable: true,
  showMarkup: true
});

addSample(".slider", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").slider(4, [2, 4, 8, 16, 32]);
  },
  executable: true
});

addSample("slider.setValue", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").slider().setValue(50);
  },
  executable: true
});

addSample("slider.getValue", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    console.log(q("#target").slider(30).getValue());
  },
  executable: true
});

addSample(".slider", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target")
    .slider()
    .setConfig("minimum", 20)
    .setConfig("maximum", 80)
    .render();
  },
  executable: true
});

addSample(".slider", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target")
    .slider()
    .setConfig("step", 0.1)
    .setConfig("offset", 30)
    .render();
  },
  executable: true
});

addSample(".slider", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target")
    .slider()
    .setTemplate("knobContent", "{{value}}%")
    .render();
  },
  executable: true
});;addSample("q.localStorage.setItem", {
  javascript: function() {
    q.localStorage.setItem("myItem", 123);
    console.log(q.localStorage.getItem("myItem"));
  },
  executable: true
});

addSample("q.localStorage.getItem", {
  javascript: function() {
    q.localStorage.setItem("myItem", 123);
    console.log(q.localStorage.getItem("myItem"));
  },
  executable: true
});;(function() {
  var defaultHtml = [
      '<div id="tabs-example">',
      '  <ul>',
      '    <li data-qx-tabs-page="#page0"><button>First Page</button></li>',
      '    <li data-qx-tabs-page="#page1"><button>Second Page</button></li>',
      '  </ul>',
      '  <div id="page0">First Page Content</div>',
      '  <div id="page1">Second Page Content</div>',
      '</div>'
    ];

  addSample(".tabs", {
    html : defaultHtml,
    javascript: function() {
      q("#tabs-example").tabs();
    },
    executable: true,
    showMarkup: true
  });

  addSample(".tabs", {
    html : defaultHtml,
    javascript: function() {
      q("#tabs-example").tabs("justify", 1);
    },
    executable: true
  });

  addSample(".tabs", {
    html : defaultHtml,
    javascript: function() {
      q("#tabs-example").tabs().on("changeSelected", function(index) {
        console.log("Selected index", index)
      });
    },
    executable: true
  });


  addSample("tabs.addButton", {
    html : [
      '<div id="tabs-example"></div>'
    ],
    javascript: function() {
      q("#tabs-example")
      .tabs()
      .addButton("Button 1")
      .addButton("Button 2");
    },
    executable: true
  });

  addSample("tabs.addButton", {
    html : [
      '<div id="tabs-example"></div>'
    ],
    javascript: function() {
      q("#tabs-example")
      .tabs()
      .setTemplate("button", "<li><button>{{{content}}} {{{content}}}</button></li>")
      .addButton("Button 1");
    },
    executable: true
  });


  addSample(".tabs", {
    html : defaultHtml,
    javascript: function() {
      q("#tabs-example")
      .tabs()
      .setConfig("align", "right")
      .render();
    },
    executable: true
  });

  addSample("tabs.select", {
    html : defaultHtml,
    javascript: function() {
      q("#tabs-example")
      .tabs()
      .select(1);
    },
    executable: true
  });
})();
;addSample("q.template.render", function() {
  var webappData = {
    groupId: 23,
    artifactid: 42,
    detailLink: "/webapps/23/42"
  };

  var entryTemplate = '&lt;li&gt;' +
                      '&lt;a href="{{link}}"&gt;{{groupid}} - {{artifactid}}&lt;/a&gt;' +
                      '&lt;/li&gt;';

  q('#app-list').append(q.template.render(entryTemplate, {
    groupid: webappData.groupId,
    artifactid: webappData.artifactid,
    link: webappData.detailLink
  }));
});

addSample("q.template.renderToNode", function() {
  var webappData = {
    artifacts : [
      { groupId: 23, artifactid: 42, detailLink: "/webapps/23/42" },
      { groupId: 23, artifactid: 43, detailLink: "/webapps/23/43" },
      { groupId: 23, artifactid: 44, detailLink: "/webapps/23/44" }
    ]
  };
  var entryTemplate = '<div>{{#artifacts}}<p><a href="{{detailLink}}">{{groupId}} - {{artifactid}}</a>{{/artifacts}}</p></div>';

  var renderedCollection = q.template.renderToNode(entryTemplate, webappData);  
  renderedCollection.on("click", function(e){
    alert("clicked at " + e.getTarget().innerHTML);
    e.preventDefault();
  });

  renderedCollection.appendTo(document.body);
});

;addSample(".setTextSelection", {
  html: ['<p>This text is in a paragraph element</p>'],
  javascript: function() {
    q("p").setTextSelection(0, 9);
  },
  executable: true
});
;addSample(".scale", {
  html: ['<div id="myId">',
         '  Test',
         '</div>'],
  javascript: function() {
    q("#myId").scale(3);
  },
  executable: true
});

addSample(".skew", {
  html: ['<div id="myId">',
         '  Test',
         '</div>'],
  javascript: function() {
    q("#myId").skew("30deg");
  },
  executable: true
});

addSample(".rotate", {
  html: ['<div id="myId">',
         '  Test',
         '</div>'],
  css : ['div {',
         'position: absolute;',
         '}'],
  javascript: function() {
    q("#myId").rotate(["30deg", "20deg", "10deg"]); // X, Y, Z
  },
  executable: true
});

addSample(".translate", {
  html: ['<div id="myId">',
         '  Test',
         '</div>'],
  javascript: function() {
    q("#myId").translate(["10px", "20px"]); // X, Y
  },
  executable: true
});

addSample(".transform", {
  html: ['<div id="myId">',
         '  Test',
         '</div>'],
  javascript: function() {
    q("#myId").transform({skew: "10deg", rotate: "-10deg"});
  },
  executable: true
});;addSample("q.getDocument", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  javascript: function() {
    var doc = q.getDocument(q("li:first")[0]);
    q("ul").append("<li>"+doc.title+"</li>");
  },
  executable: true
});

addSample("q.getNodeName", {
  html: ['<ul>',
         '  <li id="info">item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  javascript: function() {
    var nodeName = q.getNodeName(q("#info")[0]);
    // (nodeName === "li")
  },
  executable: true
});

addSample("q.getNodeText", {
  html: ['<ul>',
         '  <li id="less">text 1</li>',
         '  <li id="more">text 2 <span>span</span> text 2</li>',
         '</ul>'],
  javascript: function() {
    var nodeTextLess = q.getNodeText(q("#less")[0]);
    // (nodeTextLess === "text 1")
    var nodeTextMore = q.getNodeText(q("#more")[0]);
    // (nodeTextMore === "text 2 span text 2")
  },
  executable: true
});

addSample("q.getWindow", {
  html: ['<ul>',
         '  <li id="info">item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  javascript: function() {
    var wndw = q.getWindow(q("#info")[0]);
    q("ul").append("<li>"+wndw.location.href+"</li>");
  },
  executable: true
});

addSample("q.isBlockNode", {
  html: ['<ul>',
         '  <li id="info">item 1</li>',
         '  <li><span id="desc">item 2</span></li>',
         '</ul>'],
  javascript: function() {
    var isBlockNode1 = q.isBlockNode(q("#info")[0]);
    // (isBlockNode1 === true)
    var isBlockNode2 = q.isBlockNode(q("#desc")[0]);
    // (isBlockNode2 === false)

    // note:
    // (q.isBlockNode({}) === false)
    // (q.isBlockNode(null) === false)
  },
  executable: true
});

addSample("q.isDocument", {
  html: ['<ul>',
         '  <li id="info">item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  javascript: function() {
    var doc = q.getDocument(q("#info")[0]);
    var isDoc = q.isDocument(doc);
    // (isDoc === true)

    // note:
    // (q.isDocument({}) === false);
    // (q.isDocument(null) === false;
  },
  executable: true
});

addSample("q.isElement", {
  html: ['<ul>',
         '  <li id="info">item 1</li>',
         '  <li><span id="desc">item 2</span></li>',
         '</ul>'],
  javascript: function() {
    var isElement1 = q.isElement(q("#info")[0]);
    // (isElement1 === true)
    var isElement2 = q.isElement(q("#desc")[0]);
    // (isElement2 === true)

    // note:
    // (q.isElement({}) === false)
    // (q.isElement(null) === false)
  },
  executable: true
});

addSample("q.isNode", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  javascript: function() {
    var isNode1 = q.isNode(q("li:first"));
    // (isNode1 === true)

    // note:
    // (q.isNode({}) === false)
    // (q.isNode(null) === false)
  },
  executable: true
});

addSample("q.isNodeName", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  javascript: function() {
    var isNodeName1 = q.isNodeName(q("li:first"), "li");
    // (isNodeName1 === true)

    // note:
    // (q.isNodeName({}, "li") === false)
    // (q.isNodeName(null, "li") === false)
  },
  executable: true
});

addSample("q.isTextNode", {
  html: ['<ul>',
         '  <li id="less">text</li>',
         '  <li id="more">text <span>span</span> text</li>',
         '</ul>'],
  javascript: function() {
    var lessContents = q("#less").getContents()[0];
    var isTextNode1 = q.isTextNode(lessContents);
    // (isTextNode1 === true)

    var moreContents = q("#more").getChildren().getContents()[0];
    var isTextNode2 = q.isTextNode(moreContents);
    // (isTextNode2 === true)

    // note:
    // (q.isTextNode("") === false)
    // (q.isTextNode(null) === false)
  },
  executable: true
});

addSample("q.isWindow", {
  html: ['<ul>',
         '  <li id="info">item 1</li>',
         '  <li>item 2</li>',
         '</ul>'],
  javascript: function() {
    var isWindow = q.isWindow(q.getWindow(q("#info")[0]));
    // (isWindow === true)

    // note:
    // (q.isWindow({}) === false)
    // (q.isWindow(null) === false)
  },
  executable: true
});

addSample(".add", {
  html: ['<ul>',
         '  <li>item 0</li>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '  <li>item 3</li>',
         '</ul>'],
  css: [
        '.selected {',
        '  color: red;',
        '}'],
  javascript: function() {
    // remember regarding odd/even: counting begins at 0
    q("li:odd").add(q("li:first")).addClass("selected");
  },
  executable: true
});

addSample(".eq", {
  html: ['<ul>',
         '  <li>item 1</li>',
         '  <li>item 2</li>',
         '  <li>item 3</li>',
         '</ul>'],
  css: [
        '.selected {',
        '  color: red;',
        '}'],
  javascript: function() {
    // index is 0-based
    q("li").eq(1).addClass("selected");
  },
  executable: true
});

addSample(".find", {
  html: ['<ul id="level1">',
         '  <li>item 1.1</li>',
         '  <li>item 1.2',
         '    <ul id="level2">',
         '      <li>item 1.2.1</li>',
         '      <li>item 1.2.2',
         '       <ul id="level3">',
         '         <li>item 1.2.2.1</li>',
         '       </ul>',
         '      </li>',
         '    </ul>',
         '  </li>',
         '</ul>'],
  css: ['.desc {',
        '  color: red;',
        '}'],
  javascript: function() {
    q('#level1 li').find("li").addClass("desc");
  },
  executable: true
});

addSample(".forEach", {
  html: ['<div>',
         '  <p>para 1</p>',
         '  <p>para 2</p>',
         '  <span>span 1</span>',
         '  <span>span 2</span>',
         '</div>'],
  css: ['.selected {',
        '  color: red;',
        '}'],
  javascript: function() {
    q("div").getChildren().forEach(function(item) {
        var current = q(item);
        if (current.is("span") && current.getPrev().is("p")) {
            current.addClass("selected");
        }
    });
  },
  executable: true
});

addSample(".getAncestors", {
  html: ['<ul id="level1">',
         '  <li>item 1.1</li>',
         '  <li>item 1.2',
         '    <ul id="level2">',
         '      <li>item 1.2.1</li>',
         '      <li>item 1.2.2',
         '       <ul id="level3">',
         '         <li>item 1.2.2.1</li>',
         '       </ul>',
         '      </li>',
         '    </ul>',
         '  </li>',
         '</ul>'],
  css: ['.ancestor {',
        '  color: red;',
        '}',
        '.sublist {',
        '  background-color: #ffd;',
        '}'],
  javascript: function() {
    var col = q("#level3");
    col.getAncestors("li > ul").addClass("sublist");
    col.getAncestors().addClass("ancestor");
  },
  executable: true
});

addSample(".getAncestorsUntil", {
  html: ['<ul id="level1">',
         '  <li>item 1.1</li>',
         '  <li>item 1.2',
         '    <ul id="level2">',
         '      <li>item 1.2.1</li>',
         '      <li>item 1.2.2',
         '       <ul id="level3">',
         '         <li>item 1.2.2.1</li>',
         '       </ul>',
         '      </li>',
         '    </ul>',
         '  </li>',
         '</ul>'],
  css: ['.ancestor {',
        '  color: red;',
        '}',
        '.until {',
        '  background-color: #ffd;',
        '}'],
  javascript: function() {
    var col = q("#level3");
    col.getAncestorsUntil("#level2").addClass("until");
    col.getAncestorsUntil().addClass("ancestor");
  },
  executable: true
});

addSample(".getChildren", {
  html: ['<ul>',
         '  <li>text',
         '    <span>without desc</span>',
         '    text',
         '  </li>',
         '  <li>text',
         '    <span class="desc">with desc</span>',
         '    text',
         '  </li>',
         '</ul>'],
  css: ['.featured {',
        '  background-color: #ffd;',
        '}',
        '.selected {',
        '  color: red;',
        '}'],
  javascript: function() {
    // all children
    q("ul").getChildren().addClass("featured");

    // only children which match '.desc'
    q("li").getChildren(".desc").addClass("selected");
  },
  executable: true
});

addSample(".getClosest", {
  html: ['<ul id="level1">',
         '  <li>item 1.1</li>',
         '  <li>item 1.2',
         '    <ul id="level2">',
         '      <li>item 1.2.1</li>',
         '      <li>item 1.2.2',
         '       <ul id="level3">',
         '         <li>item 1.2.2.1</li>',
         '       </ul>',
         '      </li>',
         '    </ul>',
         '  </li>',
         '</ul>'],
  css: ['.closest-ul {',
        '  color: red;',
        '}',
        '.closest-li {',
        '  background-color: #ffd;',
        '}'],
  javascript: function() {
    var col = q("#level3");
    col.getClosest("ul").addClass("closest-ul");
    col.getClosest("li").addClass("closest-li");
  },
  executable: true
});

addSample(".getContents", {
  html: ['<ul>',
         '  <li id="less">text</li>',
         '  <li id="more">text <span>span</span> text</li>',
         '</ul>'],
  javascript: function() {
    var lessContents = q("#less").getContents();
    // (lessContents.length === 1) => [tn]
    var moreContents = q("#more").getContents();
    // (lessContents.length === 3) => [tn, eln, tn]

    // legend:
    // tn = textNodeObj
    // eln = elementNodeObj (e.g. HTMLSpanElement)
  },
  executable: true
});

addSample(".getFirst", {
  html: ['<div>',
         '  <p>para 1</p>',
         '  <ul>',
         '    <li>item 1</li>',
         '    <li>item 2</li>',
        '   </ul>',
         '  <p>para 2</p>',
         '</div>'],
  css: [
        '.selected {',
        '  color: red;',
        '}'],
  javascript: function() {
    q("div").getChildren().getFirst().addClass("selected");
  },
  executable: true
});

addSample(".getLast", {
  html: ['<div>',
         '  <p>para 1</p>',
         '  <ul>',
         '    <li>item 1</li>',
         '    <li>item 2</li>',
        '   </ul>',
         '  <p>para 2</p>',
         '</div>'],
  css: [
        '.selected {',
        '  color: red;',
        '}'],
  javascript: function() {
    q("div").getChildren().getLast().addClass("selected");
  },
  executable: true
});

addSample(".getNext", {
  html: ['<div>',
         '  <p>para 1</p>',
         '  <div>',
         '    <p>inner para 1a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 1b</p>',
         '  </div>',
         '  <p class="desc">desc para 1</p>',
         '</div>',
         '<div>',
         '  <p>para 2</p>',
         '  <div>',
         '    <p>inner para 2a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 2b</p>',
         '  </div>',
         '  <p class="desc">desc para 2</p>',
         '</div>'],
  css: ['.bgcolor {',
        '  background-color: #ffd;',
        '}',
        '.color {',
        '  color: red;',
        '}',
        '.letterspacing {',
        '  letter-spacing: 10px;',
        '}'],
  javascript: function() {
    q("p").getNext().addClass("bgcolor");
    // (length === 1)

    q("p").getNextUntil(".desc").addClass("letterspacing");
    // (length === 2)

    q("p").getNextAll().addClass("color");
    // (length === 3)
  },
  executable: true
});

addSample(".getNextAll", {
  html: ['<div>',
         '  <p>para 1</p>',
         '  <div>',
         '    <p>inner para 1a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 1b</p>',
         '  </div>',
         '  <p class="desc">desc para 1</p>',
         '</div>',
         '<div>',
         '  <p>para 2</p>',
         '  <div>',
         '    <p>inner para 2a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 2b</p>',
         '  </div>',
         '  <p class="desc">desc para 2</p>',
         '</div>'],
  css: ['.bgcolor {',
        '  background-color: #ffd;',
        '}',
        '.color {',
        '  color: red;',
        '}',
        '.letterspacing {',
        '  letter-spacing: 10px;',
        '}'],
  javascript: function() {
    q("p").getNext().addClass("bgcolor");
    // (length === 1)

    q("p").getNextUntil(".desc").addClass("letterspacing");
    // (length === 2)

    q("p").getNextAll().addClass("color");
    // (length === 3)
  },
  executable: true
});

addSample(".getNextUntil", {
  html: ['<div>',
         '  <p>para 1</p>',
         '  <div>',
         '    <p>inner para 1a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 1b</p>',
         '  </div>',
         '  <p class="desc">desc para 1</p>',
         '</div>',
         '<div>',
         '  <p>para 2</p>',
         '  <div>',
         '    <p>inner para 2a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 2b</p>',
         '  </div>',
         '  <p class="desc">desc para 2</p>',
         '</div>'],
  css: ['.bgcolor {',
        '  background-color: #ffd;',
        '}',
        '.color {',
        '  color: red;',
        '}',
        '.letterspacing {',
        '  letter-spacing: 10px;',
        '}'],
  javascript: function() {
    q("p").getNext().addClass("bgcolor");
    // (length === 1)

    q("p").getNextUntil(".desc").addClass("letterspacing");
    // (length === 2)

    q("p").getNextAll().addClass("color");
    // (length === 3)
  },
  executable: true
});

addSample(".getOffsetParent", {
  html: ['<ul id="level1">',
         '  <li>item 1.1</li>',
         '  <li class="positioned">item 1.2',
         '    <ul id="level2">',
         '      <li>item 1.2.1</li>',
         '      <li>item 1.2.2',
         '       <ul id="level3">',
         '         <li>item 1.2.2.1</li>',
         '       </ul>',
         '      </li>',
         '    </ul>',
         '  </li>',
         '</ul>'],
  css: ['.positioned {',
        '  position: relative;',
        '}',
        '.selected {',
        '  background-color: #ffd;',
        '}'],
  javascript: function() {
    q("#level3").getOffsetParent().addClass("selected");
  },
  executable: true
});

addSample(".getParents", {
  html: ['<div>',
         '  <p>para <span>span 1</span> para</p>',
         '  <span>span 2</span>',
         '</div>'],
  css: ['.selected {',
        '  color: red;',
        '}',
        '.featured {',
        '  background-color: #ffd;',
        '}'],
  javascript: function() {
    q("span").getParents().addClass("selected");
    q("span").getParents("div > p").addClass("featured");
  },
  executable: true
});

addSample(".getPrev", {
  html: ['<div>',
         '  <p class="desc">desc para 1</p>',
         '  <div>',
         '    <p>inner para 1a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 1b</p>',
         '  </div>',
         '  <p>para 1</p>',
         '</div>',
         '<div>',
         '  <p class="desc">desc para 2</p>',
         '  <div>',
         '    <p>inner para 2a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 2b</p>',
         '  </div>',
         '  <p>para 2</p>',
         '</div>'],
  css: ['.bgcolor {',
        '  background-color: #ffd;',
        '}',
        '.color {',
        '  color: red;',
        '}',
        '.letterspacing {',
        '  letter-spacing: 10px;',
        '}'],
  javascript: function() {
    q("p").getPrev().addClass("bgcolor");
    // (length === 1)

    q("p").getPrevUntil(".desc").addClass("letterspacing");
    // (length === 2)

    q("p").getPrevAll().addClass("color");
    // (length === 3)
  },
  executable: true
});

addSample(".getPrevAll", {
  html: ['<div>',
         '  <p class="desc">desc para 1</p>',
         '  <div>',
         '    <p>inner para 1a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 1b</p>',
         '  </div>',
         '  <p>para 1</p>',
         '</div>',
         '<div>',
         '  <p class="desc">desc para 2</p>',
         '  <div>',
         '    <p>inner para 2a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 2b</p>',
         '  </div>',
         '  <p>para 2</p>',
         '</div>'],
  css: ['.bgcolor {',
        '  background-color: #ffd;',
        '}',
        '.color {',
        '  color: red;',
        '}',
        '.letterspacing {',
        '  letter-spacing: 10px;',
        '}'],
  javascript: function() {
    q("p").getPrev().addClass("bgcolor");
    // (length === 1)

    q("p").getPrevUntil(".desc").addClass("letterspacing");
    // (length === 2)

    q("p").getPrevAll().addClass("color");
    // (length === 3)
  },
  executable: true
});

addSample(".getPrevUntil", {
  html: ['<div>',
         '  <p class="desc">desc para 1</p>',
         '  <div>',
         '    <p>inner para 1a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 1b</p>',
         '  </div>',
         '  <p>para 1</p>',
         '</div>',
         '<div>',
         '  <p class="desc">desc para 2</p>',
         '  <div>',
         '    <p>inner para 2a</p>',
         '  </div>',
         '  <div>',
         '    <p>inner para 2b</p>',
         '  </div>',
         '  <p>para 2</p>',
         '</div>'],
  css: ['.bgcolor {',
        '  background-color: #ffd;',
        '}',
        '.color {',
        '  color: red;',
        '}',
        '.letterspacing {',
        '  letter-spacing: 10px;',
        '}'],
  javascript: function() {
    q("p").getPrev().addClass("bgcolor");
    // (length === 1)

    q("p").getPrevUntil(".desc").addClass("letterspacing");
    // (length === 2)

    q("p").getPrevAll().addClass("color");
    // (length === 3)
  },
  executable: true
});

addSample(".getSiblings", {
  html: ['<ul id="level1">',
         '  <li>item 1.1</li>',
         '  <li>item 1.2',
         '    <ul id="level2">',
         '      <li>item 1.2.1</li>',
         '      <li>item 1.2.2',
         '       <ul id="level3">',
         '         <li>item 1.2.2.1</li>',
         '         <li>item 1.2.2.2</li>',
         '       </ul>',
         '      </li>',
         '    </ul>',
         '  </li>',
         '</ul>'],
  css: ['.desc {',
        '  color: red;',
        '}',
        '.info {',
        '  background-color: #ffd;',
        '}'],
  javascript: function() {
    q('#level1 li').getSiblings().addClass("desc");
    q('#level3 li').getSiblings().addClass("info");
  },
  executable: true
});

addSample(".has", {
  html: ['<ul id="level1">',
         '  <li>item 1.1</li>',
         '  <li>item 1.2',
         '    <ul id="level2">',
         '      <li>item 1.2.1</li>',
         '      <li>item 1.2.2</li>',
         '    </ul>',
         '  </li>',
         '</ul>'],
  css: ['.sublist {',
        '  color: red;',
        '}'],
  javascript: function() {
    q("li").has("ul").addClass("sublist");
  },
  executable: true
});

addSample(".is", {
  html: ['<div>',
         '  <p>para 1</p>',
         '  <p>para 2</p>',
         '  <span class="interesting">span 1</span>',
         '  <span>span 2</span>',
         '</div>'],
  css: ['.featured {',
        '  color: red;',
        '}'],
  javascript: function() {
    var collection = q("div").getChildren();
    if (collection.is(".interesting")) {
        collection.addClass("featured");
    }
  },
  executable: true
});

addSample(".not", {
  html: ['<div>',
         '  <p>para 1</p>',
         '  <p class="hot">para 2</p>',
         '  <span class="hot">span 1</span>',
         '  <span>span 2</span>',
         '</div>'],
  css: ['.boring {',
        '  color: red;',
        '}'],
  javascript: function() {
    q("div").getChildren().not(".hot").addClass("boring");
  },
  executable: true
});

addSample(".isChildOf", {
  html: ['<div id="first">',
         '  <p>para 1</p>',
         '  <p class="desc">para 2</p>',
         '</div>',
         '<div id="second">',
         '  <p class="summary">para 3</p>',
         '</div>'],
  css: ['.desc {',
        '  color: #eee;',
        '}'],
  javascript: function() {
    // you can use the 'isChildOf' method to e.g. check within an event listener
    // if the user clicked outside a given container element.
    q('p.desc').isChildOf('div#first'); // true
    q('p.desc').isChildOf('div#second'); // false
  },
  executable: true
});;addSample("widget.setEnabled", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").widget().setEnabled(false);
  }
});


addSample("widget.getEnabled", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").widget().setEnabled(false);
    console.log(q("#target").getEnabled()); // false
  }
});

addSample("widget.getConfig", {
  html: ['<div id="target" data-qx-config-max="11"></div>'],
  javascript: function() {
    var w = q("#target").widget();
    console.log(w.getConfig("max")); // 11 (from the data attribute)
    w.setConfig("max", 22);
    console.log(w.getConfig("max")); // 22 (set value)
  },
  executable: true
});

addSample("widget.setConfig", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").widget().setConfig("max", 22);
  }
});

addSample("widget.getTemplate", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    var w = q("#target").widget();
    w.setTemplate("content", "{{data}}");
    w.setHtml(q.template.render(w.getTemplate("content"), {data: "My Content"}));
  },
  executable: true
});

addSample("widget.setTemplate", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").widget().setTemplate("max", "{{data}}");
  }
});


addSample("widget.render", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").widget().setTemplate("max", "{{data}}").render();
  }
});


addSample("widget.dispose", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").widget();
    // some more code...
    q("#target").dispose();
  }
});

addSample(".widget", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").widget(); // converts to a widget collection
    // some more code...
    q("#target"); // still a widget collection (autodetected)
  }
});

addSample(".$onFirstCollection", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").$onFirstCollection("click", clb); // adds a click listener
    q("#target").$onFirstCollection("click", clb); // does not add the same listener again

    q("#target").$offFirstCollection("click", clb); // remove the initial added listener
  }
});

addSample(".$offFirstCollection", {
  html: ['<div id="target"></div>'],
  javascript: function() {
    q("#target").$onFirstCollection("click", clb); // adds a click listener
    q("#target").$offFirstCollection("click", clb); // remove the initial added listener
  }
});
;addSample("q.array.removeAll", function() {
  var array = ["foo", "bar"];
  q.array.removeAll(array);
});

addSample("q.array.equals", {
  javascript: function() {
    var a = [1,2,3];
    var b = [1,2,3];
    var c = [3,2,1];
    console.log(q.array.equals(a, b)); // true
    console.log(q.array.equals(a, c)); // false
  },
  executable: true
});

addSample("q.array.exclude", {
  javascript: function() {
    var a = [1,2,3,4];
    var b = [2,4];
    console.log(q.array.exclude(a, b)); // [1,3]
  },
  executable: true
});


addSample("q.array.max", {
  javascript: function() {
    var a = [1,2,4,3];
    console.log(q.array.max(a)); // 4
  },
  executable: true
});

addSample("q.array.range", {
  javascript: function() {
    q.array.range(10);
    // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    q.array.range(1, 11);
    // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    q.array.range(0, 30, 5);
    // => [0, 5, 10, 15, 20, 25]
    q.array.range(0, -10, -1);
    // => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
    q.array.range(0);
    // => []
  },
  executable: true
});;addSample('q.func.debounce', {
  javascript: function() {
// simple example to debounce the execution
var myCallback = function() {
  console.log('debounced function');
};
var debouncedFunction = q.func.debounce(myCallback, 2000);
debouncedFunction();
  },
  executable: true
});

addSample('q.func.debounce', {
  javascript: function() {
// advanced example with event handling - the handler is called only if no 'resize' events
// where triggered for at least 500 milliseconds
var resizeHandler = function() {
  console.log('current viewport is: ' + q(window).getWidth() + ' x ' + q(window).getHeight());
};

var winCollection = q(window);
winCollection.on('resize', q.func.debounce(resizeHandler, 500), winCollection);
  },
  executable: true
});

addSample('q.func.throttle', {
javascript: function() {
// simple example to throttle the execution
var myCallback = function() {
  // this callback is called *four times* due the leading and trailing calls
  console.log('throttled function');
};

var throttledFunction = q.func.throttle(myCallback, 500);
var counter = 0;
var intervalId = window.setInterval(function() {
  throttledFunction();

  if (counter == 12) {
    window.clearInterval(intervalId);
  }
  counter++;
}, 100);

  },
  executable: true
});

addSample('q.func.throttle', {
javascript: function() {
var myCallback = function() {
  // this callback is called *twice* -  the leading and trailing calls are omitted by configuration
  console.log('throttled function');
};

var options = {
  leading: false,
  trailing: false
};
var throttledFunction = q.func.throttle(myCallback, 500, options);
var counter = 0;
var intervalId = window.setInterval(function() {
  throttledFunction();

  if (counter == 12) {
    window.clearInterval(intervalId);
  }
  counter++;
}, 100);

  },
  executable: true
});


addSample('q.func.throttle', {
  javascript: function() {
// advanced example with event handling - the handler is only called
// every 500ms during the resizing of the browser window
var resizeHandler = function() {
  console.log('current viewport is: ' + q(window).getWidth() + ' x ' + q(window).getHeight());
};

var winCollection = q(window);
winCollection.on('resize', q.func.throttle(resizeHandler, 500), winCollection);
  },
  executable: true
});;addSample("q.object.merge", {
  javascript: function() {
    var target = {
      id: 1234,
      nested: {
        test: true
      }
    };

    var source = {
      id: 5678,
      name: 'qxWeb',
      nested: {
        id: 1234
      }
    };

    var source2 = {
      licence: 'LGPL',
      list: [ 0, 1, 2 ]
    };

    var result = q.object.merge(target, source, source2);
    // result is
    //{
    //  id: 5678,
    //  name: 'qxWeb',
    //  nested: {
    //    id: 1234
    //  }
    //  licence: 'LGPL',
    //  list: [ 0, 1, 2 ]
    //}
    console.log(result);
  },
  executable: true
});;addSample("q.string.camelCase ", {
  javascript: function() {
    console.log(q.string.camelCase("I-like-cookies"));
  },
  executable: true
});