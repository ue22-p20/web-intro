---
jupyter:
  celltoolbar: Slideshow
  jupytext:
    cell_metadata_filter: all,-hidden,-heading_collapsed,-run_control,-trusted
    formats: md
    notebook_metadata_filter: all,-language_info,-toc,-jupytext.text_representation.jupytext_version,-jupytext.text_representation.format_version
    text_representation:
      extension: .md
      format_name: markdown
  kernelspec:
    display_name: Javascript (Node.js)
    language: javascript
    name: javascript
  nbhosting:
    title: in / out-of flow
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# in-flow and out-of-flow
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## default is in-flow
<!-- #endregion -->

most of the elements we have seen so far are said to be *in-flow* :

* i.e. they show up in the order where they appear in the source
* at a position determined by the elements before them

<!-- #region slideshow={"slide_type": "slide"} -->
## out-of-flow is available too
<!-- #endregion -->

* there are ways to create elements out-of-flow 
* a common practical example is a pinned header 
  (or navigation bar), illustrated below  

<!-- #region slideshow={"slide_type": "slide"} -->
## `fixed` example : a pinned header
<!-- #endregion -->

```javascript hide_input=true
fixed1_html = `<div>scroll me up !</div>

<div class="header">
  I am an out-of-flow fixed header. My height better 
  be configured statically, so that the body's top margin
  can be tailored accordingly.
</div>

<div>you can see the header sticks at the top !</div>`;
fixed1_css = `div.header {
    /* this is hard-wired */
    height: 80px;
    position: fixed;
    font-size: 20px;    
    top: 0px;
    right: 0px;
    width: 80%;
    padding: 4px 10px;
    box-sizing: border-box;
    background-color: rgba(255, 240, 240, .50);
}
body {
    /* same as the header's height */
    margin-top: 80px;
}
/* the rest is just cosmetic */
div:not(.header) {
    /* outline borders */
    border: 2px solid blue;
    margin-top: 20px;
    font-size: 45px;
    height: 400px;  /* fake content */
    background-color: #fafafa;
}`;
tools.iframe_html_css("fixed1", fixed1_html, fixed1_css, true)
```

<!-- #region slideshow={"slide_type": "slide"} -->
### a few comments

**note** in the previous example :

* we set the header's height to a fixed value (80px)  
* this way we can shift the regular content down by that amount  
  so they do not overlap at first
* note the use of the `box-sizing` property  
  we want the 80px to be for the full height of the fixed header (padding included)
* also note the `rgba()` function to define colors with a level of transparency  
  0: totally transparent, 1: totally opaque
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## see also
<!-- #endregion -->

* this topic is described [at greater length in this MDN article](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)
* css-tricks also has [a blog post dedicated to floats](https://css-tricks.com/all-about-floats/)
* **WARNING** : advised for **advanced users only**  
  * beginners should probably not try to use this at first
  * as mix-and-match of `display` and `position` settings  
    can quickly become rather confusing  
    not to mention the `float` property
  * see these as **last resort**,  
    only if grid/flex really won't work for you

<!-- #region slideshow={"slide_type": "slide"} -->
## extras
<!-- #endregion -->

optional topics :

* to add some elements before or after all elements matching a selector  
  see `::before` and `::after`
* to style a `<a>` link depending on its status  
  see e.g. `:hover` or `:visited` or similar pseudo-classes
  
* **experts** : if you believe you have a full understanding  
  of how CSS layouts work, you should [give this test a shot](https://css-tricks.com/how-well-do-you-know-css-layout/)  
  (you will feel more humble afterwards ;-)
