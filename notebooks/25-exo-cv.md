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
    title: 'practice: your resume'
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
## where to find the examples

* the next example can be found together with the course   
  in the git repo
  https://github.com/ue22/web-intro

* specifically in the `samples/monarque` folder

* note that some of the other examples of the course  
  can be found in the `samples/` folder
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## a sample cv

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
