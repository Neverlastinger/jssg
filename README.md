#Milestone JavaScript Study Group.

This is the public space to find all resources and projects we work on during the JavaScript Study Group in Milestone Systems. The official book is [Eloquent JavaScript](http://eloquentjavascript.net/index.html). We've also created the [Cosmic Encounter Score Board](http://neverlastinger.github.io/jssg/CosmicEncounterScoreBoard/). 

* 01, 12th Aug - History of JavaScript
* 02, 19th Aug - [Values, Types, and Operators](http://eloquentjavascript.net/01_values.html), [Program Structure](http://eloquentjavascript.net/02_program_structure.html)
* 03, 26th Aug - Introduction to Programming with Hristo
* 04, 2nd Sept - What's happening in index.html? [Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)
* 05, 9th Sept - [Functions](http://eloquentjavascript.net/03_functions.html), [Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html).
* 06, 16th Sept - Workshop - The Cosmic Encounter score board project. 
* 07, 1st Oct - Basic DOM
* 08, 09th Oct - [The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)
* 09, 21st Oct - Basic layouts and CSS
* 10, 28th Oct - Where are my classes?
* 11, 11th Nov - [Bugs and Error Handling](http://eloquentjavascript.net/08_error.html) + Establishing the Battle City Project
* 12, 18th Nov - [JavaScript and the Browser](http://eloquentjavascript.net/12_browser.html), [The Document Object Model](http://eloquentjavascript.net/13_dom.html)
* 13, 13th Jan - Scale the Battle City viewport to different sizes
* 14, 22nd Jan - [Handling Events](http://eloquentjavascript.net/14_event.html) + Moving the Battle City player
* 15, 29th Jan - Drawing on Canvas with BKM



###*01, 12th Aug* - History of JavaScript

[http://neverlastinger.github.io/jssg/01_HistoryOfJavaScript/slides.html#/](http://neverlastinger.github.io/jssg/01_HistoryOfJavaScript/slides.html#/)

###*02, 19th Aug* - [Values, Types, and Operators](http://eloquentjavascript.net/01_values.html), [Program Structure](http://eloquentjavascript.net/02_program_structure.html)
* Numbers and arithmetic, %, Infinity, NaN
* Strings, +
* console.log
* Boolean, >, &&, ||, !
* null and undefined
* ==, ===
* var
* Math.max, Math.round
* if, else
* for

###*03, 26th Aug* - Introduction to Programming with Hristo
* by value, by reference
* calling methods/functions, params
* simple data structures
* OOP - classes and objects, abstraction, encapsulation, code reuse

###*04, 2nd Sept* - What's happening in index.html? [Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)

#####index.html
* HTML structure, head, body
* Basic elements - div, p
* inline scripts, inline styles
* links to scripts and styles, scripts at the bottom

#####data structures
* arrays - create, add element on an arbitrary position, push, pop, slice, splice, for
* objects, properties, access by name
* for-in
* overriding properties
* objects as namespaces - Math
* the global object
* json - [Flickr Uploads from everyone](https://api.flickr.com/services/feeds/photos_public.gne?format=json)

###*05, 9th Sept* - [Functions](http://eloquentjavascript.net/03_functions.html), [Higher-Order Functions](http://eloquentjavascript.net/05_higher_order.html).

TODO: show the json from the previous lecture!

#####functions
* defining functions, conditional function assignments
* local and global variables
* invoking with arbitrary arguments
 * compared to overloading
 * undefined params
 * default values
 * the arguments array-like param
* nested functions, nested scope, functions as a returned value
* closures

#####higher-order functions
* forEach
* filter
* reduce

###*06, 16th Sept* - Workshop - The Cosmic Encounter score board project. 

###*07, 1st Oct* - Basic DOM
* [Basic DOM - presentation](http://neverlastinger.github.io/jssg/07_BasicDOM/slides.html#/)
* Youtube Adblocker
* Flickr Demo
* Cosmic Encounter Score Board project - Stage 2

###*08, 09th Oct* - [The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)
* Objects as data structures - a recap
* Adding methods to an object
* Using the this inside an object literal - *duck.speak()*
* Reassigning methods, losing the this - *speak = duck.speak*
* Changing the this, call and apply - *speak.call(pig)*
* Changing the this, bind - *cavie.bind(pig)*
* Who called me? The HTML!
* Prototypes - accessing properties from Object.prototype and the prototype chain
* *Object.create*
* Using functions directly from prototypes - *Array.prototype.forEach.call(elements, handler)*
* Polyfilling forEach
* Constructor functions
* Inheriting from the prototype of the constructor function
* Inheritance

###*09, 21st Oct* - Basic layouts and CSS

###*10, 28th Oct* - Where are my classes?

[http://neverlastinger.github.io/jssg/10_WhereAreMyClasses/](http://neverlastinger.github.io/jssg/10_WhereAreMyClasses/)

###*11, 11th Nov* - [Bugs and Error Handling](http://eloquentjavascript.net/08_error.html) + Establishing the Battle City Project
* "use strict" - global variables, global context
* debugging with Chrome - Pause on exceptions and on caught exception. 

###*12, 18th Nov* - [JavaScript and the Browser](http://eloquentjavascript.net/12_browser.html), [The Document Object Model](http://eloquentjavascript.net/13_dom.html)

#####[JavaScript and the Browser](http://eloquentjavascript.net/12_browser.html)
* HTML and rendering HTML - error tolerance
* JavaScript within the HTML
* JavaScript, security and the sandbox
* Browser wars, the proprietary standards, the modern era

#####[The Document Object Model](http://eloquentjavascript.net/13_dom.html)
* DOM as a tree - the text nodes are the leafs
* NodeList, poor design
* Links between nodes
* Finding elements
* Creating and inserting elements
* Attributes, data- attributes
* offsetWidth, offsetHeight
* Changing styles

###*13, 13th Jan* - Scale the Battle City viewport to different sizes

###*14, 22nd Jan* - [Handling Events](http://eloquentjavascript.net/14_event.html) + Moving the Battle City player
* registering events
* the event object
* propagation - stopping, preventing default, bubbling and capturing
* Hristo presents his solution

###*15, 29th Jan* - Drawing on Canvas with BKM