---
celltoolbar: Slideshow
jupytext:
  cell_metadata_filter: all,-hidden,-heading_collapsed,-run_control,-trusted
  formats: md:myst
  notebook_metadata_filter: all,-language_info,-toc,-jupytext.text_representation.jupytext_version,-jupytext.text_representation.format_version
  text_representation:
    extension: .md
    format_name: myst
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

+++ {"slideshow": {"slide_type": ""}}

# JavaScript

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## why JavaScript

+++

JavaScript comes in addition to

* HTML for **content**
* CSS for **style**

JavaScript

* it is a full-fledged **programming language** 
* and provides for **behaviour**

+++ {"slideshow": {"slide_type": "slide"}}

## JavaScript characteristics

+++

* runs **inside the browser**(♡)
* has direct **access to the DOM**
* so it can freely **manipulate the HTML**  
* in order to add / remove / **modify content**  
* and/or dynamically **change properties**
* in response to e.g. **user-triggered events**

+++

<div class="rise-footnote">

(♡) as mentioned earlier, one can also write "regular" programs in JS using the *node.js* runtime

</div>

+++ {"slideshow": {"slide_type": "slide"}}

## example #1

+++

in the following example :

* HTML has two elements `#button` et `#area`
* one acts as a button, that can make  the other one visible or not
<!-- #endregion -->

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: slide
---
tools.sample_from_stem("../samples/30-js-intro-01-on-off", 
                       {width: '30em', height: '25em', separate_show: true})
```

+++ {"slideshow": {"slide_type": "slide"}, "hide_input": true}

## example 2

+++

in this further example :

* we create two visible elements:   
  a button, and a graphic area `<svg>`
* the page runs a cyclic task  
  that adds a random point 
* button to start / suspend

```{code-cell}
---
hide_input: true
slideshow:
  slide_type: slide
---
tools.sample_from_stem("../samples/30-js-intro-02-svgcircles",
                       {width: '35em', height: '20em', 
                        min_width: '15em', separate_show: true})
```

+++ {"slideshow": {"slide_type": "slide"}, "hide_input": true}

## example 3

+++ {"slideshow": {"slide_type": "-"}}

in this further example :

* we create two visible elements:   
  a `<div>` label, and this time a `<canvas>` graphic area
* clicking in the canvas causes it to randomize itself

```{code-cell}
---
hide_input: false
slideshow:
  slide_type: slide
---
tools.sample_from_stem("../samples/30-js-intro-03-canvas",
                       {width: '40em', height: '20em', 
                        min_width: '15em', separate_show: true, start_with: 'js'})
```

+++ {"slideshow": {"slide_type": "slide"}}

## objective of the course #1

release the following spinning-wheel with javascript during

```{code-cell}
:hide_input: false

tools.sample_from_stem("../samples/spinning-wheel/step3",
                       {sources_show: false})
```

+++ {"slideshow": {"slide_type": "slide"}}

## step #1 : starting point

make the following static HTML

```{code-cell}
:hide_input: false

tools.sample_from_stem("../samples/spinning-wheel/step1",
                       {width: '40em'})
```

+++ {"slideshow": {"slide_type": "slide"}}

to draw a circle you will need the following snippet:

```html
<svg width="200" height="200"
     xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="10" 
            style="fill: rgb(100,200,100);">
    </circle>
</svg>
```

+++ {"slideshow": {"slide_type": "slide"}}

on our way to step #2:

* objective is to no longer create circles through html
  because it is tedious, and needs to be easily changed 
  (imagine the number of circles is a parameter..)

* so now we want to use JS to create the circle of dots
  * we need to underdand the basics of the language
  * and we need to load the JS code
  
* so let us see all this first...

+++ {"slideshow": {"slide_type": "slide"}, "tags": ["level_intermediate"]}

## optional objective of the course

for the quick ones:
at the end of the course you can tackle that exercise:

```{code-cell}
:hide_input: true

tools.sample_from_stem("calculator", {sources_show: false, height: '500px'})
```
