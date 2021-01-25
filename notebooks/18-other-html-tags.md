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
  notebookname: other html tags
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
      height: 47px
      left: 35px
      top: 139px
      width: 159.359px
    toc_section_display: false
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# more HTML tags
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## multimedia
<!-- #endregion -->

* [`<img>`](https://www.w3schools.com/tags/tag_img.asp)
* [`<audio>`](https://www.w3schools.com/html/html5_audio.asp)
* [`<video>`](https://www.w3schools.com/html/html5_video.asp)

find out more on these by yourselves

<!-- #region slideshow={"slide_type": "slide"} -->
## graphics and `<svg>`
<!-- #endregion -->

* SVG is a complete subsystem to deal with vector graphics
* [learn more about SVG at w3schools](https://www.w3schools.com/graphics/svg_intro.asp) (basic)
* [and much more on css-tricks](https://css-tricks.com/svg-properties-and-css/)  
  (very advanced, including animations)

<!-- #region slideshow={"slide_type": "slide"} -->
### svg example
<!-- #endregion -->

```javascript hide_input=true
svg_html=`<h1>my first SVG</h1>

<svg width="200" height="200">
  <circle cx="50" cy="50" r="20" />
  <rect x="50" y="20" width="150" height="150" />
</svg>`;
svg_css = `rect {
  fill: blue;
  stroke: pink;
  stroke-width: 5;
  fill-opacity: 0.1;
  stroke-opacity: 0.8;
}

circle {
  stroke: rgb(100, 200, 50);
  stroke-width: 4;
  fill: yellow;
}`;
tools.iframe_html_css("svg", svg_html, svg_css)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## form-oriented
<!-- #endregion -->

for building forms :
* `<input>` for entering data
* `<button>` for validating data
* `<form>` to group user-provided input  

out of scope for this course though, as it involves a backend


<!-- #region slideshow={"slide_type": "slide"} -->
## miscell others
<!-- #endregion -->

in a jumble :

* `<br>` to insert a linebreak
* `<hr>` to insert a horizontal line
* `<iframe>` to insert another web page
* `<canvas>` is a more recent alternative to SVG for graphics,  
  [see more on css-tricks](https://css-tricks.com/learn-canvas-snake-game/)

<!-- #region slideshow={"slide_type": "slide"} -->
# practice 
<!-- #endregion -->

<!-- #region cell_style="center" -->
* as a conclusion of this first basic course
  * with all the knowledge you now have about HTML and CSS,
* write your complete resume; you should have 2 files 
  * `resume.html`
  * `resume.css`
* at this point, you may think of it as if it were a word document
  * with a header that has your details and photo
  * and the 4 well structured sections,
  * again 'experience', 'education', 'skills' and 'languages'
* try to print it in a PDF file, to evaluate how it fits with respect to an A4 page
* **NOTE** that next course will address overall layout in greater details, 
  (i.e. the relative place of all pieces wrt one another)  
  so do not spend too much time on trying to make best usage of space at this point
<!-- #endregion -->
