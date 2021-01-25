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
  notebookname: user tools
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
      height: 247.715px
      left: 1477px
      top: 164px
      width: 159.824px
    toc_section_display: true
    toc_window_display: true
  version: '1.0'
---

<!-- #region slideshow={"slide_type": ""} -->
<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
# practice - additional assignments
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": ""} -->
## pythagore
<!-- #endregion -->

you are tasked to write a "graphical demonstration" for the Pythagorean Theorem, getting inspiration from the page below

the sample app is not responsive, you will need to open it in a separate window

```javascript hide_input=true
tools.iframe_exo("pythagore", true)
```

<!-- #region slideshow={"slide_type": ""} -->
## fibonacci and the golden number 

you are asked to write a small app as a html+css+js that explores the neighbourhood between fibonacci numbers and the golden number, taking - as loose as you want - inspiration from the page below

here again the sample app is not responsive, you will need to open it in a separate window

**HINT** the slope of the 2 fixed rules is of course the golden ratio and its inverse
<!-- #endregion -->

```javascript hide_input=true
// the minified version somehow was not working...
tools.iframe_exo("fibonacci", true, 'plain-js')
```

## a snake 


* clone the github repo from https://github.com/patorjk/JavaScript-Snake.git
* open `index.html` in your browser - check that the game works for you
* could you read the code ?  
  if not what percentage can you read ?
* imagine some change that you'd like to make on the game  
  be it in terms of colors, speed, behaviour, whatever you  
  think could improve the game  
  are you able to implement that change ?

```javascript hide_input=true
tools.iframe_exo("calculator", true, true)
```
