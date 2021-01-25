---
jupyter:
  celltoolbar: Slideshow
  jupytext:
    cell_metadata_filter: all
    formats: md
    notebook_metadata_filter: all,-language_info,-jupytext.text_representation.jupytext_version
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.2'
  kernelspec:
    display_name: Javascript (Node.js)
    language: javascript
    name: javascript
  notebookname: jQuery
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
  toc:
    base_numbering: 1
    nav_menu: {}
    number_sections: true
    sideBar: true
    skip_h1_title: false
    title_cell: Table of Contents
    title_sidebar: Contents
    toc_cell: false
    toc_position:
      height: 247.719px
      left: 1274.52px
      top: 29px
      width: 253.469px
    toc_section_display: true
    toc_window_display: true
  version: '1.0'
---

<!-- #region slideshow={"slide_type": "slide"} -->
<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
# jQuery
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## jQuery is everywhere
<!-- #endregion -->

jQuery has been around for a very long time  
with the objective to make **common operations**,  
like **interactions with the DOM**   
much **smoother**, and more **cross-browser**

it is embedded in many applications,  
so it is a **must know** component


<p class="rise-footnote"><i>cross-browser</i> means it provides abstractions that will work everywhere, even if the user's browser is old and lacks some features</p>

<!-- #region slideshow={"slide_type": "slide"} -->
## digression : cdnjs
<!-- #endregion -->

* many places where to find 3rd-party libraries like jQuery
* personnally I like <https://cdnjs.com>
* easy to locate resources
* and to import them in your project

<!-- #region slideshow={"slide_type": "slide"} -->
![](../media/cdnjs-search.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
![](../media/cdnjs-copy.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
![](../media/cdnjs-paste.png)
<!-- #endregion -->

it is easy to import the library from your own html documents

<!-- #region slideshow={"slide_type": "slide"} -->
## digression$^2$ 
<!-- #endregion -->

real applications will use more sophisticated tools to deal with dependencies  
most popular being essentially `npm` and/or `yarn`  
that we will cover briefly in the optional material

however `cdnjs` remains quite convenient  
if you use only a handful of 3rd party tools


<p class="rise-footnote"> jQuery being mostly <b>browser-oriented</b>, 
    running jQuery examples right in the notebook is not possible at this time</p>

<!-- #region slideshow={"slide_type": "slide"} -->
## back to jQuery
<!-- #endregion -->

as per <https://jquery.com>

> **What is jQuery?** 

> jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.



<!-- #region slideshow={"slide_type": "slide"} -->
## how to use
<!-- #endregion -->

* after importing jQuery, the module is available as  
  the global `$` variable  
  (and yes, this is legal in JavaScript)
* you can use `jQuery` instead of `$` if you prefer

let us start with an example

```javascript slideshow={"slide_type": "slide"} hide_input=true
tools.iframe_exo("jquery", true, true)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## CSS selectors
<!-- #endregion -->

* the `$` function, when called with a string, interprets it as a CSS selector
* and returns a JavaScript object
* on which further jQuery treatments can be applied
* it will implicitly apply those treatments **on all the matching DOM elements**

<!-- #region slideshow={"slide_type": "slide"} -->
### CSS selectors example
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
for example this one-liner would hide  
all elements of class `to-hide`
```javascript
$(".to-hide").hide()
```

which is admittedly **much simpler** than using native JavaScript functions 
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## event handlers
<!-- #endregion -->

likewise jQuery makes event handling nicer
```
$("#button-container button").on( 
    "click",
     function( event ) {
        $("#banner-message").show();
});
```

would require much more verbose code if written in pure JavaScript

<!-- #region slideshow={"slide_type": "slide"} -->
##  run code at load-time
<!-- #endregion -->

<!-- #region -->
a **very common idiom** :  

the `$` function, when called **on a function**,  
means to add it to the list of things  
to be done once the page has loaded

```javascript
////// 3 equivalent forms 
// using an arrow function
$(() => console.log("loaded"))

// using an anonymous function
$(function() {console.log("loaded")})

// using a named function
function loaded() {console.log("loaded")}
$(loaded)
```
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## networking
<!-- #endregion -->

* your javascript code is allowed to issue network requests
* here again jQuery has a convenience tool called `$.ajax`
* which makes things easier than with pure JavaScript
* let us see how the example works exactly

<!-- #region cell_style="center" slideshow={"slide_type": "slide"} -->
### xkcd in the example (1)

[available in a jsfiddle](http://jsfiddle.net/bbalkenhol/mMPXG/)

* first step is to issue a request to the `url`  
  you can use a new browser page, and paste the URL in the address bar  
  you will see the kind of text that the request returns 
  
![](../media/xkcd-pass1.png)

* this format is called JSON; it is easy to read  
  from any language; you probably already   
  have used data exposed in JSON
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
### xkcd in the example (2)
<!-- #endregion -->

* this first request can, and probably will, take a noticeable time
* `$.ajax` arranges so that once it returns:
  * the result is parsed as being a JSON format (`dataType: "json"`)
  * and the `success` callback function triggers
* what the callback does step by step is:
  * search by id the element `#xkcd-content`
  * create under it 2 new sibling elements `<h1>` and `<img>`
  * and fill them with data from the responsed JSON

<!-- #region slideshow={"slide_type": "slide"} -->
### xkcd in the example (3)
<!-- #endregion -->

this is what the DOM looks like after the success callback has completed  
because `<img>`'s `src` attribute has changed  
the browser goes and fetches the actual image content and displays it

![](../media/xkcd-pass2.png)


<!-- #region slideshow={"slide_type": "slide"} -->
## example 2
<!-- #endregion -->

```javascript
tools.iframe_samples_html_css_js("jquery-colors")
```

<!-- #region slideshow={"slide_type": "slide"} -->
## chaining
<!-- #endregion -->

<!-- #region -->
a very general idiom is to select, then apply a **series of changes**  
observe in the example above

```javascript
        $( "#result" )
            .html( `That div is ${color}` )
            .css("color", color);
```

* selection of the target elements  
  (here just one, could have been many)
* apply them the `html()` method to change their content
* and on the same set of elements
* change their css property
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## and much more
<!-- #endregion -->

* jQuery was there at the very beginning  
* as it was both **concise**
  * and **cross-browser**  
    (ensuring the API worked the same everywhere)
* it has become a **de facto standard**
* it is worth taking [a look at the API documentation](https://api.jquery.com/) to get a sense of all the possibilities
* starting maybe with [the section on manipulation](https://api.jquery.com/category/manipulation/)
