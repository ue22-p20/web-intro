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
  notebookname: bootstrap
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
      height: 247.719px
      left: 239px
      top: 0px
      width: 253.469px
    toc_section_display: false
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
# bootstrap
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## what is bootstrap ?
<!-- #endregion -->

* originally developped by twitter, [bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) is a - mostly CSS - library that offers
  * a [grid-based framework for easier responsive layouts](https://getbootstrap.com/docs/4.4/layout/overview/)
  * a distinctive look & feel for [usual content](https://getbootstrap.com/docs/4.4/content/typography/)
  * [some components](https://getbootstrap.com/docs/4.4/components/alerts/) like navbars, paginations...

* note that bootstrap depends on jQuery





<!-- #region slideshow={"slide_type": "slide"} -->
## why bootstrap
<!-- #endregion -->

* here again bootstrap has been **very widely adopted**  
* and for this reason is a **must know** as well  
* the grid system may be one of the reasons  
  that made bootstrap so popular
* on next slide we give a very small glimpse at what  
  can be done with no CSS (our css just outlines the layout)
  and no JavaScript at all


```javascript slideshow={"slide_type": "slide"} hide_input=true
tools.iframe_exo("bootstrap", true, true)
```

<p class="rise-footnote">many more effects are available - read the components page !</p>

<!-- #region slideshow={"slide_type": "slide"} -->
### bootstrap grid system
<!-- #endregion -->

the basics of the grid system rely on an overall container `<div>` that has a class `container` or `container-fluid`
the latter taking all the available space (in width), while the former will impose the width to belong in a finite set of values as far as possible (see example above)

[make sure to rtfm](https://getbootstrap.com/docs/4.0/layout/overview/)

<!-- #region slideshow={"slide_type": "slide"} -->
### grid system (continued)
<!-- #endregion -->

* inside a `div.container`, you insert elements `div.row` that materialize a row in your layout
* a row is divided into 12 equal parts
*  then inside a `.row` you put subcontainers that are `class`'ed with names like e.g.
  * `col` : use in width as much as possible
  * `col-6` : use 6 elements of grid

There are means to define separate layouts for different device widths ([details here](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints))

[make sure to rtfm](https://getbootstrap.com/docs/4.0/layout/grid/)

<!-- #region slideshow={"slide_type": "slide"} -->
## more examples
<!-- #endregion -->

bootstrap provides [a gallery of example codes](https://getbootstrap.com/docs/4.0/examples/)

it is strongly recommended to browse that page to see the kind of results that you can expect with bootstrap; all this should feel rather familiar, given the number of sites that are built on bootstrap.

the code for each of these examples is generally reasonably small, although the constructions required with bootstrap tend to be rather verbose.

again remember that you 

<!-- #region slideshow={"slide_type": "slide"} -->
## practice
<!-- #endregion -->

* make sure you use `git` to store the latest version of your resume  
  as this exercise may damage your work 
* inject `bootstrap.css` into your resume
* **try to** write a version of your resume that uses **the bootstrap grid system** to handle grid layout and responsiveness
* which approach (with or without bootstrap) do you have better ? why ? 
* are there other aspects of bootstrap that you can leverage to improve the look of your resume ?
