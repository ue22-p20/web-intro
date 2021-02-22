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
    title: loading js
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
# Loading JavaScript
<!-- #endregion -->

```javascript
tools = require('../js/toolsv2')
tools.init()
```

<!-- #region slideshow={"slide_type": "slide"} -->
## open topic
<!-- #endregion -->

* loading JavaScript is **still an open topic** 
* because in the general sense it is about  
  **smooth dependencies**
* typical use case  
  module X needs module Y  
  just like when a Python module does `import another`

<!-- #region slideshow={"slide_type": "slide"} -->
## simplest case
<!-- #endregion -->

* restricting ourselves to the simplest case
* where a single HTML page  
  needs to load one JS fragment
* there is one simple way : the `<script>` tag
  * that comes in 2 flavours,
  * whether code is inline or in a separate location

<!-- #region slideshow={"slide_type": "slide"} -->
## `<script>` with inline code
<!-- #endregion -->

<!-- #region cell_style="center" -->
* quite simply, you can inject some JS code 
* right into your HTML document 
* through a `<script>` tag
<!-- #endregion -->

<!-- #region cell_style="center slideshow={"slide_type": ""} -->
```html
<script>
    
  function hello() {
    console.log("Hello world");
  }

  hello()
    
</script>
```
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## `<script>` : load a URL
<!-- #endregion -->

* most often though, code is stored in a separate location
  * either as a companion to the HTML page
  * or in a remote location
* for that, use `<script src="some-url"></script>` 

<!-- #region slideshow={"slide_type": "slide"} -->
### `<script>` - examples
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* **local file**  
  `<script src="foo.js"></script>`  
  loads `foo.js` from the same  
  directory as the current page 

* **remote file**  
  <span style="font-size:0.5em"><code>&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js&quot;&gt; &lt;/script&gt;</code></span>  
  loads jQuery (more on that later)  
    from a publicly available CDN
    (Content Delivery Network)  
  
<!-- #endregion -->
