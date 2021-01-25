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
  notebookname: more selectors
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
      height: 142px
      left: 907px
      top: 33px
      width: 290.344px
    toc_section_display: true
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# more elaborate selectors
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## selectors are very powerful
<!-- #endregion -->

generally speaking, selectors can be combined to create more and more selective ones; for example

`p.class1.class2`  
  matches elements that are tagged with `<p>` and have **both** classes  


also note that you can write a single rule for several selectors 

```css
p.class1, p.class2 {
   font-size: larger;
}
```

will apply the `font-size` property to `<p>` elements that have **class `class1` or class `class2`** - or both, naturally

<!-- #region slideshow={"slide_type": "slide"} -->
## selecting X under Y
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
`div p`  
matches all `<p>` elements that are **below** a `<div>` element **at any depth**

`div>p`  
matches all `<p>` elements that are an **immediate child** of `<div>` element
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## pseudo-class selectors
<!-- #endregion -->

* pseudo-classes are set by the browser to expose  
  the status of some elements
* e.g. `a:hover` allows to match `<a>` links  
  but only when the mouse is hovering above them

<!-- #region slideshow={"slide_type": "slide"} -->
### `:hover` pseudo-class  
<!-- #endregion -->

a first, not-quite-working example (at least on Chrome)

```javascript hide_input=true
hover1_html = `<div id="part1">
  <a href="https://nbhosting.inria.fr" target="_">
a regular link is unsensitive to hovering</a>
</div> 

<div class="part2">
  <a href="https://nbhosting.inria.fr" target="_">
     this one reacts if you hover mouse here</a>  
  <br>
  <a name="nbhosting">
     this is an anchor tag,
     it reacts to mouse presence 
     (at least on Chrome), but it should not</a>
</div>

`;
hover1_css = `.part2 a:hover {
    font-size: x-large;
    background-color: red;
    text-decoration: none;
}`;
tools.iframe_html_css("hover1", hover1_html, hover1_css);
```

<!-- #region slideshow={"slide_type": "slide"} -->
### `:hover` and `:link`  
<!-- #endregion -->

to get it right, we can use the other pseudo-class `:link`,  
that is set only on `<a>` tags that have a `href=` attribute

```javascript hide_input=true
hover2_html = `<div id="part1">
  <a href="https://nbhosting.inria.fr" target="_">
     a regular link</a>
</div> 

<div class="part2">
  <a href="https://nbhosting.inria.fr" target="_">
     hover mouse here</a>
  <br>
  <a name="nbhosting">now this anchor tag 
     is excluded from the CSS selector, so it behaves
     as expected</a>
</div>

`;
hover2_css = `/* <a> elements under a .class2 
   that have both pseudo-classes */
.part2 a:hover:link {
    font-size: x-large;
    background-color: red;
    text-decoration: none;
}`;
tools.iframe_html_css("hover2", hover2_html, hover2_css);
```

<p class="rise-footnote"> 
note that here we build a selector that applies on elements that have <b>both</b> pseudo classes, much like with regular classes
</p>

<!-- #region slideshow={"slide_type": "slide"} -->
### rank of element amongs its parents children
<!-- #endregion -->

* `:first-child`, `:last-child` : pseudo-classes  
  for what you think they do
* `:nth-child()` : can match for example the 4th child,  
  but also more usefully even/odd ranked  
  [see this page for details](https://css-tricks.com/useful-nth-child-recipies/)

<!-- #region slideshow={"slide_type": "slide"} -->
### `nth-child() example`
<!-- #endregion -->

```javascript hide_input=true
rank_html = `<ul>
  <li>the first bullet</li>
  <li>the 2nd bullet</li>
  <li>the 3rd bullet</li>
  <li>the 4th bullet</li>
  <li>the 5th bullet</li>
  <li>the 6th bullet</li>
  <li>the 7th bullet</li>
  <li>the 8th bullet</li>
</ul>
`;
rank_css = `li:nth-child(2n+1) {
  background-color: #fee;
}
li:nth-child(3n) {
  background-color: #eef;
}`;
tools.iframe_html_css("rank-child", rank_html, rank_css);
```

<!-- #region slideshow={"slide_type": "slide"} -->
### pseudo-class selectors (continued)

* see also [more detailed list of pseudo-class selectors](https://css-tricks.com/pseudo-class-selectors/)
* in particular `:not()` for negations

<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## attribute selectors
<!-- #endregion -->

* HTML elements can have arbitrary attributes,  
  not just `id`, `class`, `href`, ...
* it is possible to write selectors that match  
  on the value of a given attribute
* for example  
  `a[href="https://www.google.com/"]`  
  would match only the links to google
* [read more on this here](https://css-tricks.com/almanac/selectors/a/attribute/)

