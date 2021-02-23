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
    title: exo - calculator
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
---

<!-- #region slideshow={"slide_type": ""} -->
<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
# practice : a calculator
<!-- #endregion -->

```javascript
tools = require('../js/toolsv2')
tools.init()
```

<!-- #region slideshow={"slide_type": ""} -->
start from this tutorial here
https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/

it comes [**with the html and css template**](https://codepen.io/zellwk/pen/pLgmGL) for a - rather nice btw - yet simple, calculator

the assignment is to write the **javascript companion** so that

* the device **actually does calculations**
* in a first step, ignore the '.' and just write an integer calculator
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": ""}
tools.from_samples("calculator", {sources_show: false, separate_show: true, 
                                  height: '500px', separate_width: '500px', separate_height: '500px'})
```

## a few hints

### `event.target`

* it is possible to attach a handler to a full region (the toplevel `<div>`)
* and then inspect the `event` parameter (passed to your callback)
* to find out on which element the, for example, `click` event has triggered


### `data-*` attributes

if you're curious as to why the html contains stuff like 

    <button class="key--operator" data-action="add">+</button>
    
[the answer is here](https://www.w3schools.com/tags/att_global_data.asp) and [at little more depth here](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset)

you can then programmatically retrieve the `add` string from an event object by doing

    let data_action = event.target.dataset.action
    
and if the click event was on that button, then `data_action` will hold the `"add"` string

This is mostly a convention, it's a way to make sure that your attribute name will not conflict with what the browser uses



all this being said, you can just as well ignore the `data-*` attributes, and add classes or ids to the HTML as you see fit; avoid removing stuff, as it might break the css and ruin the overall rendering
