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
  notebookname: CSS animations
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
      height: 47.7431px
      left: 91.9861px
      top: 25.9618px
      width: 159.497px
    toc_section_display: false
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# CSS transitions and animations
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## transitions
<!-- #endregion -->

* properties can change over time
* either on events (e.g. a hyperlink when you hover over or click it)
* or programmatically (typically through JavaScript)

<!-- #region slideshow={"slide_type": "slide"} -->
### transitions (continued)
* the browser has the ability to perform those changes **smoothly**
  * over a certain duration
  * in a continuous way
* of course this applies to some properties only
  * lengths
  * colors
* everything that can be mapped to a **continuous** space
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## transition example 1
<!-- #endregion -->

```javascript hide_input=true
tools.iframe_samples_html_css("transition1")
```

<!-- #region slideshow={"slide_type": "slide"} -->
### how transitions work
<!-- #endregion -->

* you need to define a `transition` propery on the element
* e.g. the `<section>` element has  
  `transition: all 0.4s ease-in-out`
* then its `background-color` property changes somehow  
  here due to the `.chunk:hover` selector
* because the transition applies to `all` properties  
  it triggers to implement the color change
* and the `ease-in-out` algorithm is used  
  over a `0.4s` duration   

<!-- #region slideshow={"slide_type": "slide"} -->
### the `transition` property
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* is a **shorthand** property for setting in one rule
  * `transition-property` : comma separated names of properties  
     here we could/should have used `background-color` instead
  * `transition-duration`
  * `transition-timing-function`
  * `transition-delay` that we leave unchanged here (i.e. 0s)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
### most common timing functions
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* `linear` is, well of course, linear interpolation 
* the other 3: `ease-in`, `ease-out`, and `ease-in-out` make the move 
  smoother at one or two ends of the duration range 
* see a more detailed explanation from the *see also* section below
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## transition example 2
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": "-"}
tools.iframe_samples_html_css("transition2", true)
```

<!-- #region slideshow={"slide_type": "slide"} -->
### do not overuse !
<!-- #endregion -->

as a piece of advice

* transitions can make user experience very nice
* but **do not overuse them**
* as too many moving pieces quickly become more confusing than helpful

also notice that this starts to have to do with **responsiveness** 

* that deals with defining layouts that cope with geometry changes
* that we will cover later
* here for example we have used `flex` (more on this later)


<!-- #region slideshow={"slide_type": "slide"} -->
## transition example 3
<!-- #endregion -->

transitions apply **to all** changes, not only triggered by a user

here we use JavaScript (studied later) to alter a div's size  
with e.g. `growing.style.width = '200px'`

```javascript hide_input=true slideshow={"slide_type": "-"}
tools.iframe_samples_html_css_js("transition3")
```

<!-- #region slideshow={"slide_type": "slide"} -->
## animations
<!-- #endregion -->

* there is also a notion of **animations** in CSS
* simply put, an animation allows to define a succession of states  
* each state being a collection of CSS properties
* together the point in time where they should apply

for example :
* at the beginning of the duration (0%) background-color is red and color is blue
* somewhere in the middle, say at 25% of the duration, they become green and yellow
* then at the end of the period (100%) they become black and white

<!-- #region slideshow={"slide_type": "slide"} -->
### more on animations
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* see [one example on codepen](https://codepen.io/team/css-tricks/pen/EjaJNd) for a better idea of what can be achived
* extracted [from this blog on CSS-Tricks](https://css-tricks.com/almanac/properties/a/animation/) that is left to the interested reader as an exercise
* **WARNING** like with transitions, and fun as they are, these techniques should be used with extreme circumspection
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## see also

* [transitions on css-tricks](https://css-tricks.com/almanac/properties/t/transition/)
* [animations on css-tricks](https://css-tricks.com/almanac/properties/a/animation/)
* an explanation, among other things, [about `linear`, `ease-in`, `ease-out`, and `ease-in-out`](https://www.freecodecamp.org/news/css-transitions-explained-d67ab9a02049/)
<!-- #endregion -->
