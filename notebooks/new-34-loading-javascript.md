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

+++ {"slideshow": {"slide_type": ""}}

# Loading JavaScript in browser

```{code-cell}
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

+++ {"slideshow": {"slide_type": "slide"}}

## Open topic

+++

* Loading javascript is somehow tricky and is **still an open topic** because: 
  * how network work
  * of complex depandency that can rise in real code 
  * typical use case module X needs module Y just like when a Python module does `import another`

We will comeback late on this topic but for now stay simple

+++ {"slideshow": {"slide_type": "slide"}}

## Simplest case

+++

For our use case we only need to load one fragment of code

* where a single HTML page needs to load one JS fragment
* there is one simple way : the `<script>` tag
  * that comes in 2 flavours,
  * whether code is inline or in a separate location

+++ {"slideshow": {"slide_type": "slide"}}

## `<script>` with inline code

+++ {"cell_style": "center"}

* quite simply, you can inject some JS code 
* right into your HTML document 
* through a `<script>` tag

+++ {"incorrectly_encoded_metadata": "cell_style=\"center", "slideshow": {"slide_type": ""}}

```html
<script>
    
  function hello() {
    console.log("Hello world");
  }

  hello()
    
</script>
```

+++ {"slideshow": {"slide_type": "slide"}}

## `<script>` : load a URL

+++

* most often though, code is stored in a separate location
  * either as a companion to the HTML page
  * or in a remote location
* for that, use `<script src="some-url"></script>` 

+++ {"slideshow": {"slide_type": "slide"}}

### `<script>` - examples

+++ {"slideshow": {"slide_type": ""}}

* Behaviour of `<script>` tag is similar to the load of css files
  * `<script src="foo.js"></script>` loads `foo.js` from the same directory as the current page
  * `<script src="/path/foo.js"></script>` loads `/path/foo.js` from current location
  * `<script src="https://url.com/path/foo.js"></script>` loads `/path/foo.js` from the given absolute url
* You can use the attribute `defer` to ensure to run the script once the entire page is loaded: `<script src="foo.js" defer></scritp>`

+++ {"slideshow": {"slide_type": "slide"}}

## Step #2

Now that you know the basic of javascript, you have to load javascript code that draws a circle of dot as follows. 
Color of circles does not matter.

+++

## Special note about creating circle

to draw a circle you have to use a tag that belong a given namespace. We will not go in detail about namespace in this course, but to create the circle element you have to specify the namespace as follow:

```javascript
let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
```

```{code-cell}
---
slideshow:
  slide_type: slide
---
tools.show_sample("spinning-wheel/step2");
```

+++ {"slideshow": {"slide_type": "slide"}}

## Go to Step #3

The next step is to Change the color of circle when we press the button, so let's learn about callback
