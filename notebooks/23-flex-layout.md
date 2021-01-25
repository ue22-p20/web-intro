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
      jupytext_version: 1.3.2
  kernelspec:
    display_name: Javascript (Node.js)
    language: javascript
    name: javascript
  notebookname: flex layout
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
# `display: flex` 
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## purpose
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* `flex` is a modern layout engine  
* that tries to solve or at least alleviate  
* the obvious deficiencies of the old-school  
 `block` model and related tools
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
examples, as per [this article on MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
> The following simple layout requirements are either difficult or impossible to achieve with such tools, in any kind of convenient, flexible way:

> * Vertically centering a block of content inside its parent.
> * Making all the children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.
> * Making all columns in a multiple column layout adopt the same height even if they contain a different amount of content.
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## flex example (1)
<!-- #endregion -->

```javascript hide_input=true
flex1_html = `<div class="container">
<div class="item"> Dolor quiquia </div>
<div class="item"> aliquam </div>
<div class="item"> sed numquam </div>
<div class="item"> voluptatem </div>
<div class="item"> quisquam modi. </div>
</div>`;
flex1_css = `/* outline borders */
body { border: none; }
* { border: 1px solid red;
    padding: 4px; border-radius: 4px;}

.container {
    display: flex;
    justify-content: space-evenly;
}
.item {
    font-size: 30px;
}
`;
tools.iframe_html_css("flex1", flex1_html, flex1_css, true)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## flex example (2)

identical except for `flex-wrap: wrap`
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": "slide"}
flex2_html = `<div class="container">
<div class="item"> Dolor quiquia </div>
<div class="item"> aliquam </div>
<div class="item"> sed numquam </div>
<div class="item"> voluptatem </div>
<div class="item"> quisquam modi. </div>
</div>`;
flex2_css = `/* outline borders */
body { border: none; }
* { border: 1px solid red;
    padding: 4px; border-radius: 4px;}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.item {
    font-size: 40px;
}
`;
tools.iframe_html_css("flex2", flex2_html, flex2_css, true)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## assignment

* [this page on css-trick.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is an easy, and very complete read, on flex
* it is again **strongly recommended** to read it thoroughly
  to get a perception of what is doable with this layout
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## use cases
<!-- #endregion -->

* the `flex` display is an extremely powerful tool  
  for fine-grained control over your layout
* only reason why it is not the default is **legacy**
* when writing a new page from scratch,  
  using `flex` is almost always a good idea
* rather recent (circa 2017) but [supported in all modern browsers](https://caniuse.com/#feat=flexbox)

<!-- #region slideshow={"slide_type": "slide"} -->
## no longer bottom-up only
<!-- #endregion -->

* let us outline that the flex display model
  * is disruptive as compared to its predecessors
* in the sense that older models were essentially bottom up
  * i.e. an element had a size and the container was to deal with that size
  * but a flex container can influence the size of its contained items

<!-- #region slideshow={"slide_type": "slide"} -->
## practice
<!-- #endregion -->

1. mimick the layout below

```javascript hide_input=true
tools.iframe_exo("exo-flex", true, true)
```
