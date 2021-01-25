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
  notebookname: practice & devel tools
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
      height: 247.734px
      left: 1052.98px
      top: 140px
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
# practice
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": ""} -->
in this notebook :
* a simple assignment
* plus a few tips to get started
* **make sure you read this notebook thoroughly before you start**
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## assignment

* create a HTML document as a collection of 3 files, 
* say : `resume.html`, `resume.css`, `resume.js`
* make sure the html header loads the css and js companions
<!-- #endregion -->

then 

* edit the JavaScript code
* so that your resume background alternates  
  every 1 second between 2 different colours

```javascript slideshow={"slide_type": "slide"} hide_input=true
tools.iframe_exo("resume", true)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## tip : run code upon load

<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
so, you want to start some code, say call function `start()`,  
right after the page loads  
**BUT** it is unsafe to do something like 

```html
<script src="thecode.js"></script>
<script>
start('some-data')
</script>
```

because at the time when `start('some-data')` gets executed,  
your page is still in the middle of the loading phase  
(even though that might accidentally work just fine)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
### run code upon load : the proper way
<!-- #endregion -->

<!-- #region -->
the proper way is to attach a **callback** to the 'load' event when triggered on the page

```javascript
// the rough way
window.onload = function() { start('some-data');} 

// a little nicer way
window.addEventListener('load', function() { start('some-data');}
```

this time, `start()` will get called at a time where you can be sure the document is entirely loaded.
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## tip : implement a cyclic task
<!-- #endregion -->

<!-- #region trusted=true -->
implementing a cyclic task was done in example 2 already, here's a reminder  
typical sequence is something like
<!-- #endregion -->

```javascript cell_style="split"
// so that we can stop the running loop
active = true;

function one_step() {
    if (active)
        console.log("beep");
}

let interval = setInterval(one_step, 1000)

```

```javascript cell_style="split"
// note that our JS interpreter 
// is still responsive
// we can stop the endless loop
active = false
```

```javascript cell_style="split"
// it's also possible to stop it
// altogether
active = true;
clearInterval(interval)
```

<!-- #region slideshow={"slide_type": "slide"} -->
### observations on cyclic tasks
<!-- #endregion -->

in a traditional language one would maybe consider writing something like 

<!-- #region cell_style="split" -->
```python
while True:
    if active:
        one_step()
    sleep 1
```    
<!-- #endregion -->

<!-- #region cell_style="split" -->
Note however that with such an approach, the Python interpreter remains busy, it can't do anything else at the same times
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## tip : use devel tools
<!-- #endregion -->

* crucially important to get familiar with these tools  
*  starting with the most useful ones :
  * *Elements*
  * *Console*
  * and to a lesser extent, *Sources*


<!-- #region slideshow={"slide_type": "slide"} -->
### Devel Tools : *Elements*
<!-- #endregion -->

as mentioned earlier already, you can

* navigate the DOM
* 'Inspect' an element (find an element from a position in the page)
* see the CSS rules that apply to an element 
* find out where these styles come from
* see the computed values for each property
* interactively change a property and  
  see effect immediately (shown on next slide)

<!-- #region slideshow={"slide_type": "slide"} -->
### visualizing a changed property
<!-- #endregion -->

![](../media/devel-tools-change-properties.png)

<!-- #region slideshow={"slide_type": "slide"} -->
### Devel Tools : *Console*
<!-- #endregion -->

* where lands the output of `console.log`  
  of course quite useful for naive debugging
* **and** that lets you issue JavaScript on the fly  
  much like the Python interpreter does

<!-- #region slideshow={"slide_type": "slide"} -->
### the Console REPL
<!-- #endregion -->

* REPL stands for Read, Eval, Print Loop
* illustrated in the following slides

<!-- #region slideshow={"slide_type": "slide"} -->
![](../media/devel-tools-console-1.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
![](../media/devel-tools-console-2.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
![](../media/devel-tools-console-3.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
![](../media/devel-tools-console-4.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
### Devel Tools : *Sources*
<!-- #endregion -->
<!-- #region cell_style="split" -->
* occasionnally useful to browse the code actually loaded

<!-- #endregion -->

<!-- #region cell_style="split" -->
![](../media/devel-tools-sources.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
### Devel Tools : debugger
<!-- #endregion -->

<!-- #region cell_style="split" -->
* the *Sources* tab has buit-in debugging features
<!-- #endregion -->

<!-- #region cell_style="split" -->
![](../media/devel-tools-debugging.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## more on devel tools
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* there are standard keyboard shortcuts to invoke devel tools,  
* e.g. for [google chrome](https://developers.google.com/web/tools/chrome-devtools/shortcuts)  
  * macOS `⌘ ⌥ J` (console) or `⌘ ⌥ I` (your last tab)
  * others `⌃ ⇧ J` (console) or `⌃ ⇧ I` (your last tab)
* a bit early for now, but be aware that  
  they come with a complete debugger
* do not hesitate to search for some hands-on / video tuto
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## the browser cache (yet again)
<!-- #endregion -->

* the browser cache thing (see CSS loading)
* applies exactly the same  
* in the case of JavaScript code

**Remember**
* to use Shift-load, or other cache-cleaning tool  
* if changes in a file do not seem to kick in
