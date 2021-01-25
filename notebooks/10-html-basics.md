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
  notebookname: html basics
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
      height: 218px
      left: 1060.61px
      top: 653px
      width: 309.391px
    toc_section_display: true
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# HTML basics
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## HTML is based on tags
<!-- #endregion -->

the HTML language structures the content of a web page
in terms of sections, headers, paragraphs, lists of items, images ...

the language is based on tags written between < and >  
(for example &lt;head&gt; or &lt;/head&gt;)

an element (a section, a header) is composed by
* an opening tag e.g. <code>&lt;head&gt;</code>
* a content that can be empty
* a closing tag e.g. <code>&lt;/head&gt;</code>


<!-- #region slideshow={"slide_type": "slide"} -->
## HTML document structure
<!-- #endregion -->

the overall structure of a HTML document is composed of two parts, a **header** and a **body**, like this:

```javascript hide_input=true
fragment1 = `<html>
  <head>
     <!-- various document-wide declarations -->
  </head>
  <body>
     <!-- the actual document contents -->
     Hello
  </body>
</html>
`;

tools.one_column(fragment1)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## browser and server
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
### regular setup

files are on the Internet

![](../media/client-server.svg)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
### our setup today

files are local on your laptop

![](../media/local-file.svg)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## practice
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* create a file named `hello.html`  
  with your editor of choise, like VScode
* copy the above template
* open it in your web browser (preferably Chrome)
* you will see something like this
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": "slide"}
tools.two_columns(fragment1)

```

<p class="rise-footnote">also observe the URL that the browser has used to fetch your file <br>
    it should look like <code>file:///the/path/to/your/current/directory/hello.html</code> </p>

<!-- #region slideshow={"slide_type": "slide"} -->
## accessing your browser's devel tools
<!-- #endregion -->

<!-- #region cell_style="split" -->
* all browsers come with development tools for debugging
* as a first contact with these,  
  let us inspect the content of our HTML document
* for that the simplest way is to right click on the 'Hello' text
* and choose 'Inspect'
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
![](../media/inspect-element-menu.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
<p class="rise-footnote"> 
  this should open your browser's devel tools, which depending on your browser
    <br> may require additional preparation or  installation steps
    <br> we recommend using Chrome in case it is not working as expected 
</p>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## check for devel tools
<!-- #endregion -->

* if you cannot see the devel tools (see next slide for a glimpse)
  it means your browser may need additional installation (google for how to do that)

* here's how to check your browser (all this on mac at least)

 * on Safari: you should have a *Develop* menu in the main menubar:  
  *File Edit View History Bookmarks **Develop** Window*
 * on Chrome: you should have a ***Developer*** submenu in the *View* menu in the main menubar
 * on Firefox: you should have a ***Web Developer*** entry in the *Tools* menu in the main menubar



<!-- #region slideshow={"slide_type": "slide"} -->
## *Elements* navigator
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
![](../media/inspect-element-elements.png) 
<!-- #endregion -->

<!-- #region cell_style="split" -->
* left pane, navigate the elements
* right pane, visualize the  
  selected element's applicable  
  *Styles* and *Computed* properties  
  (more on this later)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
<p class="rise-footnote"> 
    from that view you can navigate the elements tree, although in this case it is very simple with just 3 nodes</p>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} cell_style="split" -->
* another interesting part is the   
(javascript) *Console* tab  
* this is where **debug messages**  
  end up (if any; here of course  
  there are none)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} cell_style="split" -->
![](../media/inspect-element-console.png) 
<!-- #endregion -->

<!-- #region cell_style="split" slideshow={"slide_type": "slide"} -->
* the area with the `> ` is the REPL  
  i.e. Read, Eval, Print Loop
* (juste like the `>>> ` with Python)


where you can type and run 
your first JavaScript code  

<!-- #endregion -->

<!-- #region cell_style="split" -->
![](../media/inspect-element-console-code.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## DOM = Document Object Model
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* the `<tag> ... </tag>` notation 
* unambiguously maps to a tree structure - known as an Abstract Syntax Tree
* referred to in all documentation as "*the DOM*"
<!-- #endregion -->

<!-- #region cell_style="split" slideshow={"slide_type": "slide"} trusted=true -->
this HTML fragment
```html
<html>
  <head>
    <title> top title </title>
  </head>
  <body>
    <p> a paragraph </p>
    <p> a paragraph </p>
  </body>
</html>
```
<!-- #endregion -->

<!-- #region cell_style="split" hide_input=true -->
will result in this tree
![](../media/abstract-syntax.svg)
<!-- #endregion -->

<!-- #region cell_style="center" -->
nodes in this tree are called **Elements**  
it is the basis for navigating the document  
in the *Elements* devel tools tab
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## be rigourous
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* browsers tend to be as tolerant as possible
* e.g. omitting a closing tag may well render fine
* **however** there's only so much that can be guessed
* this may cause **huge headaches** down the road
* so make sure to **always** close your tags properly
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": "slide"}
fragment_unclosed = `<p> do not do this
<ul>
<li> unclosed tags <b>look like</b> they work
<li> but they will hurt eventually`;

tools.two_columns(fragment_unclosed)
 
```

```javascript hide_input=true
fragment_closed = `<p> do this instead </p>
<ul>
<li> always close your tags </li>
<li> clean up behind yourself </li>
</ul>`;

tools.two_columns(fragment_closed)
 
```
