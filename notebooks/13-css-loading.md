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
  notebookname: loading css
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
      left: 430px
      top: 0px
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
# how to apply CSS
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## 3 ways to apply CSS
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* located in a separate CSS URL
* embedded in html within a `<style>` html tag
* hard-attached to an element itself with `style=`
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## preferred method : a separate CSS
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* write your CSS in a separate file, e.g. `mystyle.css`
* which, assuming it is in the same directory as your `hello.html`
* can be kind-of included in `hello.html` 
* by inserting the following <link> line
* in the `<head>` part of your html
<!-- #endregion -->

<!-- #region cell_style="center" slideshow={"slide_type": "slide"} -->
```html
<html>
  <head>
    <!-- this is the line that matters -->
    <link rel="stylesheet" href="mystyle.css">  
  </head>
  <body>
     Hello
  </body>
</html>
```
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
##### notes on URLS

* `href` is a URL - remember the `<a>` tag
* which means it can be fetched from  
  anywhere, typically over http(s)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
##### notes on self-closing tags

* note also the absence of a `</link>`, 
* which may remind you of `<br>`
* such elements are called **void** or **empty** elements
* among others : `<br>`, `<hr>`, `<link>`, `<img>`,...
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## second method : inline in html
<!-- #endregion -->

* you can also insert a `<style>` tag in your html
* and mention the CSS code there directly
* it is **less recommended** as it kind of ruins
* desired **separation** between **contents** and **presentation**

<!-- #region slideshow={"slide_type": "slide"} -->
```html
<p> CSS can be inlined right into the HTML 
    as a <style> tag
</p>
<style>
  p {
    color: red;
    font-size: huge;
  }
</style>
```
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## hardwired in the element with `style=`
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* attach a `style=` attribute on a HTML tag
* this method is by far **the worst**
* and should be used in last resort
<!-- #endregion -->

```javascript hide_input=true
embedded_html = `<p 

style="background-color: red; 
font-size: x-large; 
line-height: 50px;
padding:30px;"

>

If you attach styling to a HTML tag with a
<code>style=</code> attribute, it will 
likely take precedence on
everything else;
more on this later on

</p>`;
tools.two_columns(embedded_html)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## practice
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} hide_input=true -->
* copy `hello.html` into `mycv.html`
* create a more realistic skeleton for a résumé
  * with 4 sections 'experience', 'education', 'skills' and 'languages'
  * keep it simple for now, nothing too elaborate
  * make sure all the text gets attached to  
    adapted tags like `<p>` or `<li>` 
  * and **not** directly under `<body>`  
    like it was done in `hello.html`
  * make sure to insert at least one `<a href=...>` hyperlink
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
### practice (continued)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} hide_input=true -->
* create a CSS file `mycv.css`
  * with some settings that should apply to `mycv.html`
* add a `<link>` tag in the html `<head>` area
  * load `mycv.html` in a browser
  * change the CSS and reload  
    the browser page to see the effect
* we recommend you use a local git repo all along
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## the browser cache
<!-- #endregion -->

for performance reasons primarily :
* fetching a file may be slow in poor network conditions
* once a file has been loaded
  * it may be **cached inside** the browser
  * so that future references do not fetch it again

**beware of that** during development
* reloading the html file
* may **not reload** the css because it is cached

<!-- #region slideshow={"slide_type": "slide"} -->
## the browser cache (continued)
<!-- #endregion -->

a couple hints and workarounds
* reload with the 'Shift' modifier pressed  
  either with a mouse-click, or keyboard shortcut  
  double-check that with the browser you actually use
* devel tools have a *Sources* tab that let you check  
  the content of each individual loaded file
* often browsers have more advanced tools to manage cache  
  e.g. Chrome : `⠸` menu → *More Tools* → *Clear Browsing Data*
