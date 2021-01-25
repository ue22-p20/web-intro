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
  notebookname: js intro
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
    sideBar: false
    skip_h1_title: false
    title_cell: Table of Contents
    title_sidebar: Contents
    toc_cell: false
    toc_position:
      height: 47.7431px
      left: 91.9861px
      top: 25.9618px
      width: 159.497px
    toc_section_display: false
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# JavaScript
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## the missing piece
<!-- #endregion -->

JavaScript comes in addition to
* HTML for **content**
* CSS for **style**

JavaScript
* it is a full-fledged **programming language** 
* and provides for **behaviour**

<!-- #region slideshow={"slide_type": "slide"} -->
## JavaScript characteristics
<!-- #endregion -->

* runs **inside the browser**
* has direct **access to the DOM**
* that it can freely manipulate to  
  add / remove / modify content  
  dynamically change properties
* in response to user-triggered events

<!-- #region slideshow={"slide_type": "slide"} -->
## example 1
<!-- #endregion -->

in this example :
* HTML has two elements
* one acts as a button, that can make  
  the other one visible or not
* for that we create a JavaScript  
  **function** named `toggle()`
* that is bound to the `onclick` event   
  of the button element

```javascript hide_input=true slideshow={"slide_type": "slide"}
all3_html = `<div id="button"
     onclick="toggle()">
  click to hide or show next item
</div>
<div id="area" style="display:none">
    This area will come and go
    <br> Check console output 
    in the devel tools area
</div>`;
all3_css = `#button {
  padding: 20px;
  border: 1px solid blue;
  border-radius: 5px;
  background-color: #ffb6b9;
  width: fit-content;
}
#area {
  padding: 10px;
  background-color: #f5f0e3;
}`;
all3_js = `/* we will see in the next notebook
   how to load javascript code     */
function toggle() {
  // from the 'document' global variable
  // locate the element that we want to toggle
  let to_toggle = document.getElementById("area");
  // find its current status
  let current = to_toggle.style.display;
  // apply the opposite status
  if (current == "block") {
    to_toggle.style.display = "none";
  } else {
    to_toggle.style.display = "block";    
  }
  // show a message in the JS console
  console.log(current);
  console.log(current, " → ", to_toggle.style.display);
}`;
tools.iframe_html_css_js("foo-all3", all3_html, all3_css, all3_js, true)
```

<!-- #region slideshow={"slide_type": "slide"} -->
#### things to note about example #1  

visibility of symbols (variable and function names) :

* `onclick` property on `button`  
  is a JavaScript fragment  
  that refers to global `toggle` function
* local variables inside `toggle`  
  are declared with `let`
* global variables `document` and `console`
  allow to access browser components
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} hide_input=true -->
## example 2
<!-- #endregion -->
in this further example :
* we create two visible elements   
  a button, and a graphic area `<svg>`
* the page runs a cyclic task  
  that adds a random point 
* button to start / suspend

```javascript hide_input=true slideshow={"slide_type": "slide"}
tools.iframe_samples_html_css_js("randomdots", true)
```

<!-- #region slideshow={"slide_type": "slide"} -->
#### things to note about example #2 :

* adding to the DOM to create new content
  (createElementNS and append)
* `the_board` is a JavaScript *object*,  
  i.e. composite data keyed on `w`, `h`, etc…  
  more on this later
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
#### still on example #2 :

and also, about asynchronicity :

* initialization code messes with the `<svg>`'s attributes 
  * so that element must have been created **beforehand**
* **but** 
  * a page is made of html + css + js 
  * we have no control on the order  
    in which things happen in the browser
* how to ensure that init code is executed  
  **after** html elements are created ?
  * the purpose of `document.onload`
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## event-driven
<!-- #endregion -->

* as opposed to more traditional languages,  
  (think `main()` in C++ or Java,  
   or the entry module in Python)  
* browser-hosted code has  
  **little control** on overall **order**  
* plus, apps need to react to   
  * user-, network-, and time-triggered events  

<!-- #region slideshow={"slide_type": "slide"} -->
## callbacks
<!-- #endregion -->

* one very pervasive programming pattern in JavaScript 
* is the notion of a **callback** 
* which is a **function**
* attached to some sort of **event**
* function gets fired when event occurs

<!-- #region slideshow={"slide_type": "slide"} -->
## callbacks - continued
<!-- #endregion -->

in our 2 examples, we have seen 3 callbacks already

* ex.1 : `onclick="toggle()"`  
* ex.2 : `setTimeout(() => this.run(), 400)` 
* ex.2 : `window.onload = function () { ` 

<!-- #region slideshow={"slide_type": "slide"} -->
## take home message
<!-- #endregion -->

as far as Web frontend, JavaScript :

* runs **in the browser**  <span style="font-size: small">(FYI can also be used as a regular programming language)</span>
* **full-fledged** modern language, with objects, modules…
* aware of browser objects through globals  
  e.g. `document`, `window`, `console`
* highly influenced by asynchronicity
