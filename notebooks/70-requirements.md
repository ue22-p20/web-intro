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
  notebookname: course requirements
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
      left: 1483.53px
      top: 169px
      width: 354.469px
    toc_section_display: true
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
# run this course locally ?
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
as usual you can enjoy this course with no local installation

if however you plan on reading this course locally on your computer, there are a few specific requirements that need to be fulfilled
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## install as user as far as possible
<!-- #endregion -->

the commands below should be as far as possible run as a regular user  
if however, depending on your setup, they fail to complete because  
of a lack of permissions, you may need to invoke them as super-user  
by prepending them `sudo`; like in 
```
sudo npm install -g ijavascript
``` 
instead of just
```
npm install -g ijavascript
```

<!-- #region slideshow={"slide_type": "slide"} -->
## Jupyter JavaScript kernel 
<!-- #endregion -->

* we use a JavaScript kernel - of course
* this requires `node` and `npm`, and can be installed with
  * `npm install -g ijavascript`
  * `ijsinstall`

<!-- #region slideshow={"slide_type": "slide"} -->
## Jupyter extensions

this slideshow takes advantage of a few Jupyter extensions;  
most notably, `hide_input` is massively used to **hide** 
the code that in turn produces code layout, so this one is rather critical

that being said, without any extension it is still possible to read the notebooks in regular - as opposed to slideshow - mode
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
* slideshow :
  * `pip install --pre rise`  
* to read notebooks stored as markdown :  
  * `pip install jupytext`
* jupyter's `hide_input` extension :  
  * `pip install jupyter_contrib_nbextensions`  
  * `jupyter contrib nbextension install --user`   
  * `jupyter nbextension enable hide_input/main`
* (optional) jupyter's `splitcell` extension  
  * `RUN jupyter nbextension enable splitcell/splitcell`
<!-- #endregion -->
