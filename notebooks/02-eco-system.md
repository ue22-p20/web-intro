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
  notebookname: web frontend ecosystem
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
      left: 143px
      top: 28px
      width: 202.391px
    toc_section_display: true
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>


# introduction to web frontend

<!-- #region slideshow={"slide_type": "slide"} -->
## Web ecosystem (frontend)
<!-- #endregion -->

* crash course on how to write web pages  
* just scratch the surface, a **whole lot** is not even mentioned  
* focus on the core technological bricks
  * HTML (HyperText Markup Language)
  * CSS (Cascading Style Sheets)
  * JavaScript (a.k.a. ECMAScript)

<!-- #region slideshow={"slide_type": "slide"} -->
## evolution speed
<!-- #endregion -->

* all this started in a very awkward way
  * early versions were always quick and dirty
  * for example, the first JavaScript version [was written in 10 days](https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/)
* evolving **very quickly**, most notably
  * in the way all the pieces are integrated together  
    (e.g. JS loaders and transpilers and bundlers…)
* many over-layers that improve / mitigate some flaws
  * like ***less*** or ***sass*** above CSS,  
  * ***TypeScript*** or ***CoffeeScript*** above JavaScript, …

<!-- #region slideshow={"slide_type": "slide"} -->
##  focus on HTML - CSS - JavaScript
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* we will only focus on **grassroots level**
  * that will likely remain valid for a while
* versions for our focus
  * HTML-5, CSS-3, ECMAScript-6
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## backend and frontend 
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
* Web server :  
  * operated by application provider
  * runs **backend** code
* Web browser :   
  * runs on your laptop
  * runs **frontend** code  
    (even though that code  
    is fetched at the backend)

<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
![](../media/client-server.svg)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## you may have heard of
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* typical backend technologies
  * PHP, Python/django, Ruby/on rails, SQL databases
  * apache, nginx, load balancing
* typical frontend technologies
  * **HTML, CSS, JavaScript**
  * react, angular, vue
* in between
  * TCP/IP : low-level communication protocol of the Internet
  * HTTP : HyperText Transfer Protocol
  * WebSocket : full-duplex communication channel  
    over a single TCP connection 

you can see our focus is 
a small fraction of the whole spectrum
<!-- #endregion -->
