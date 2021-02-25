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
    title: js intro
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
# JavaScript
<!-- #endregion -->

```javascript
tools = require('../js/toolsv2')
tools.init()
```

<!-- #region slideshow={"slide_type": "slide"} -->
## why JavaScript
<!-- #endregion -->

JavaScript comes in addition to

* HTML for **content**
* CSS for **style**

JavaScript

* it is a full-fledged **programming language** 
* and provides for **behaviour**

<!-- #region slideshow={"slide_type": "slide"} -->
## JavaScript characteristics
<!-- #endregion -->

* runs **inside the browser**(♡)
* has direct **access to the DOM**
* so it can freely **manipulate the HTML**  
* in order to add / remove / **modify content**  
* and/or dynamically **change properties**
* in response to e.g. **user-triggered events**


<div class="rise-footnote">

(♡) as mentioned earlier, one can also write "regular" programs in JS using the *node.js* runtime

</div>


<!-- #region slideshow={"slide_type": "slide"} -->
## example #1
<!-- #endregion -->

in the following example :

* HTML has two elements `#button` et `#area`
* one acts as a button, that can make  the other one visible or not
<!-- #endregion -->

```javascript scrolled=false slideshow={"slide_type": "slide"} hide_input=true
tools.from_samples("30-js-intro-01-on-off", 
                   {width: '30em', height: '25em', separate_show: true})
```

<!-- #region slideshow={"slide_type": "slide"} hide_input=true -->
## example 2
<!-- #endregion -->
in this further example :

* we create two visible elements:   
  a button, and a graphic area `<svg>`
* the page runs a cyclic task  
  that adds a random point 
* button to start / suspend

```javascript hide_input=true slideshow={"slide_type": "slide"}
tools.from_samples("30-js-intro-02-svgcircles",
                   {width: '35em', height: '20em', 
                    min_width: '15em', separate_show: true})
```

<!-- #region slideshow={"slide_type": "slide"} hide_input=true -->
## example 3
<!-- #endregion -->
<!-- #region slideshow={"slide_type": "-"} -->
in this further example :

* we create two visible elements:   
  a `<div>` label, and this time a `<canvas>` graphic area
* clicking in the canvas causes it to randomize itself
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": "slide"}
tools.from_samples("30-js-intro-03-canvas",
                   {width: '40em', height: '20em', 
                    min_width: '15em', separate_show: true, start_with: 'js'})
```

<!-- #region slideshow={"slide_type": "slide"} -->
## objective of the course #1

release the following spinning-wheel with javascript during
<!-- #endregion -->

```javascript
tools.show_sample("spinning-wheel/step3");
```

<!-- #region slideshow={"slide_type": "slide"} -->
## step #1 : starting point

make the following static HTML
<!-- #endregion -->

```javascript
tools.show_sample("spinning-wheel/step1");
```

<!-- #region slideshow={"slide_type": "slide"} -->
to draw circle you will need to use the following snipet:

```html
<svg width="200" height="200"
     xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="10" 
            style="fill: rgb(100,200,100);">
    </circle>
</svg>
```
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
on our way to step #2

* we want to use JS to create the circle of dots
  * we need to underdand the basics of the language
  * and we need to load the JS code
  
* so let us see all this first...
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} tags=["level_intermediate"] -->
## objective of the course #2

at the end of the course you should write it by yourself
<!-- #endregion -->

```javascript
tools.show_sample("calculator");
```
