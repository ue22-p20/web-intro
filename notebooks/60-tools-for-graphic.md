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
    toc_section_display: false
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
# visualization tools
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": ""} -->
## there is a library for everything
<!-- #endregion -->

* js cannot compete with traditional languages on CPU-intensive libraries
* **BUT** it does kill all competition as soon as a User-Interface is involved
* so bottom line is, all the common needs are covered

**example** 
* I just picked a topic at random; say I need to display a calendar; I googled it and [found this](https://fullcalendar.io/)

in this notebook we see a selection of 2 libraries for visualzation that are really cool


<p class="rise-footnote">
this is a personal choice, there are **tons** of other interesting libraries available around
</p>

<!-- #region slideshow={"slide_type": ""} -->
## three.js
<!-- #endregion -->

[`three.js`](https://threejs.org/) is a graphic library to create 3D virtual reality scenes

in a nutshell, to render a scene you need
* one or more objects
* one or more light sources
* a camera

it is pretty easy to get started with, if you [follow the tuto](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)

<!-- #region slideshow={"slide_type": ""} -->
### a selection

* the gallery of examples  
  https://threejs.org/examples/#webgl_animation_cloth (you can move around with the mouse)
* and tons of others,  
  * https://mixedreality.mozilla.org/hello-webxr/
  * http://chandlerprall.github.io/Physijs/examples/jenga.html  
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
## `d3.js`
<!-- #endregion -->

`d3.js` is a library for dataviz, its website is on https://d3js.org/

I strongly recommend a thorough visit of their [Gallery of examples](https://github.com/d3/d3/wiki/Gallery), where you will see mind-boggling examples of all kinds of ways to transform data into moving pixels

<!-- #region -->
d3 is based on a mental model that graphical objects (for example, elements in a <svg>) can be bound to the data, so that any change in the data automatically propagates to the graphical objects.

**WARNING** 
`d3.js` admittedly has a rather steep learning curve, and is maybe not recommended as a first programming experience with js; keep it for the second shot :)


    
a cool way to play with d3 is to use <https://observablehq.com>, that was developped by the designer of `d3.js` and that offers a platform with live notebooks - or let us say live documents that very much look like Jupyter notebooks for JavaScript, except for small differences. Note that registration is required to actually create notebooks.
    
`observablehq` has its own [gallery of visualizations](https://observablehq.com/explore)     
    
    
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
### a selection

* my favorite, on [Obama's 2013 budget proposal](https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html)

* always in fashion, [tetris on d3](http://d3tetris.herokuapp.com/)
<!-- #endregion -->
