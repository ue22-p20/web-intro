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
  notebookname: motivation
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
  toc:
    base_numbering: 1
    nav_menu: {}
    number_sections: false
    sideBar: false
    skip_h1_title: false
    title_cell: Table of Contents
    title_sidebar: Contents
    toc_cell: false
    toc_position:
      height: 179px
      left: 25px
      top: 134px
      width: 202.391px
    toc_section_display: true
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>


# objectives of this course

<!-- #region slideshow={"slide_type": "slide"} -->
## why a course on web frontend ?
<!-- #endregion -->

* traditional languages like Python, C++, and Java
  lack a decent environment for User Interfaces
* but how much time do you spend on  
  facebook, twitter, what'sapp, … ?
* as of 2020, **everything** runs on the Web
* so this simply **cannot be ignored**

<!-- #region slideshow={"slide_type": "slide"} -->
## vocabulary
<!-- #endregion -->

* web technologies are heavily client-server based
* server-side (think, cloud operators) is often called ***backend***  
* client-side (think, browser) is called ***frontend***


for instance
* `facebook.com` hosts an enormous *backend* architecture  
  * whose purpose is to serve network requests
* issued by traditional browsers (Chrome, Firefox, Edge, Safari, …)
  * and mobile apps running on phones and tablets
  * that are all *frontends* 
  * in the sense that they face the end user

<!-- #region slideshow={"slide_type": "slide"} -->
## scope
<!-- #endregion -->

* due to time constraints
* we will restrict ourselves to the ***frontend*** side
* objective is to give you some grip 
* on the core technologies supported in a browser  
  namely **HTML**, **CSS** and **JavaScript**
* so that you can assess their enormous potential
* ignoring the fast-moving over-layers  
  too numerous to list at this point


<!-- #region slideshow={"slide_type": "slide"} -->
## excluded
<!-- #endregion -->

this means that we will **not** address :
* backend technologies per se  
  like e.g. apache, nginx, django, REST apis, …
* nor the network protocols involved  
  like http(s), websockets, and similar

<!-- #region slideshow={"slide_type": "slide"} -->
## why are web technos so cool ?
<!-- #endregion -->

* so-called *GUI*-oriented tools (Graphical User Interfaces)
  * like X11/MOTIF, .net, Java Swing, Qt, …
* shared a mental model based on widgets and menus
  * that is very limiting
  * remember 1990's apps
* web allows for much cooler and more flexible interaction 
* plus, thanks to a clear **separation** between **content** and **styling**
  * they allow designers to fruitfully collaborate with engineers
* as a bonus, super-portable with **zero installation**
  * across the whole range of **computers** and **mobile devices**

<!-- #region slideshow={"slide_type": "slide"} -->
## wider than just the browser
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* keep in mind that web frontend techologies
  * go way beyond the browsers per se 
* there are many options to build a **standalone** app  
  (that runs **outside of the browser**)  
  * leveraging the same core technos  
    (again, HTML, CSS and JavaScript)
  * as a native mobile app (IOS or Android)
  * and/or on traditional computers  
    i.e. build a native MacOS or Windows  
    traditional application, powered by e.g. [WebKit](https://webkit.org/)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## even wider than just the frontend 
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* also be aware that JavaScript
  * that is primarily famous for powering frontends
  * is becoming more and more popular  
    as a traditional programming tool (see node.js)
  * so it can be, and actually is, more and more  
    used for writing backends as well
  * and even for traditional computing
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## objectives
<!-- #endregion -->

* make sure you are aware of the enormous potential
* make you aware of the specific types of problems  
  esp. non-sequential nature of user interaction and network activity
* mention and shallowly study a few technological bricks 
* start to build a mental map where you can place the current buzzwords
