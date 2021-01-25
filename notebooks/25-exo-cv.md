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
  notebookname: 'practice: your resume'
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
# putting it all together
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## assignment
<!-- #endregion -->

* as a conclusion of this overview on CSS, 
* review your resume to create fancier layouts 
* and so it becomes responsive
  * it should display properly on a phone, tablet, and laptop
* hint : each section of course remains untouched no matter the device
  * but the arrangement of the sections on the page changes

<!-- #region slideshow={"slide_type": "slide"} -->
* here is one example
  * please do not try to mimick this example too closely,  
    it is just there so you can get a sense of what is possible; 
  * plus, it is far from perfect anyway ...
  * but make sure to open it in a separate window  
    and observe its responsive behaviour
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": "slide"}
tools.iframe_exo("monarque/resume", true, true)
```
