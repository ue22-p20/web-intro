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
    title: css @media rules
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
# CSS `@media` rules
<!-- #endregion -->

```javascript
// run this cell, and then
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## purpose
<!-- #endregion -->

as per [this article on w3schools](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp) :

> The @media rule is used in media queries to apply different styles for different media types/devices.

> Media queries can be used to check many things, such as:

> * width and height of the viewport
> * width and height of the device
> * orientation (is the tablet/phone in landscape or portrait mode?)
> * resolution

<!-- #region slideshow={"slide_type": "slide"} -->
## example - width
<!-- #endregion -->

```javascript hide_input=true
threshold = '500px';
media_width_html = `<body>Click above to open
in a separate window, turn on
devel tools to see the window size, and resize
the window so the width becomes smaller
or larger than ${threshold}
<br><b>NOTE:</b> make sure your zoom factor is 100%
</body>`;
media_width_css = `/* beware that this rule MUST COME FIRST */
body {
    background-color: #fae3d9; /* light pink */
}

/* applies if the browser window width
   is less than ${threshold} */
@media only screen and (max-width: ${threshold}) {
  body {
    background-color: #bbded6; /* light green */
  }
}
`;
tools.iframe_html_css("media-rule-width", media_width_html, media_width_css, true)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## common pitfall
<!-- #endregion -->

* in this first example
  * note that the default `body` rule **MUST COME FIRST**
* the reason is that when the `@media` rule applies
  * the browser sees **TWO RULES** with the **same specificity**
  * as both selectors simply read `body`
  * in that case the last one wins
* so **order is important**
  * unless you implement a trick to make media rules more specific
  * e.g. artificially add a `media` class
  * and use it in media-specific rules
  * but that is awkward and doesn't scale well...

<!-- #region slideshow={"slide_type": "slide"} -->
## example - print
<!-- #endregion -->

```javascript hide_input=true
media_print_html = `<body class="media">
It is often very useful to tweak the print
layout, in terms of margins and the like.
<hr>
Click above to open in a separate window,
and pretend to print so you get a preview;
</body>`;
media_print_css = `/* our body tag has a media class
 * with this trick the order now won't matter */
body {
    font-family: Trebuchet MS;
}

@media print {
  body.media {
    font-family: Papyrus;
    font-size: 50px;
    margin-left: 3cm;
  }
}
`;
tools.iframe_html_css("media-rule-print", media_print_html, media_print_css, true)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## `<link>` examples
<!-- #endregion -->

another way to use media rules is from `<head>`  
(remember that `<html>` is `<head>` and then `<body>`) :

<!-- #region -->
```html
<link rel="stylesheet"
    <!-- NOTE the new media attribute here -->
    media="screen and (min-width: 900px)"
    href="widescreen.css">
<link rel="stylesheet"
    media="screen and (max-width: 600px)"
    href="smallscreen.css">
```
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## see also

* [this w3schools page](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp) has more details  
  on the admissible **syntax for media rules**
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## practice
<!-- #endregion -->

1. open the example below in a separate window
  * observe behaviour on narrow viewport
1. write an HTML document and related CSS that mimicks it


```javascript hide_input=true
tools.iframe_exo("exo-grid", true, true)
```
