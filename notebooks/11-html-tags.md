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
  notebookname: html tags
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
      height: 392px
      left: 1254px
      top: 37px
      width: 281.391px
    toc_section_display: false
    toc_window_display: true
  version: '1.0'
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# basic tags
<!-- #endregion -->

```javascript
// run this cell, and then 
// click the created button
tools = require('../js/tools');
tools.init();
```

<!-- #region slideshow={"slide_type": "slide"} -->
## header tags `<h1>` .. `<h5>`
<!-- #endregion -->

```javascript hide_input=true
headers_fragment = `<h1> toplevel title </h1>
<h2> first sublevel title </h2>
<h3> and so on </h3>
<h3> other subsublevel </h3>
<h2> second sublevel title </h2>
`;
tools.two_columns(headers_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## text tags `<p>` and `<br>` 
<!-- #endregion -->

```javascript hide_input=true
text_fragment = `<p> it is wise to always embed your text 
in a text tag like &lt;p&gt;, 
that stands for paragraph, and that of course gets justified 
when the text is too wide to fit within the available space.</p>

<p>Sometimes the separation between paragraphs is too much, 
<br> and in this case you can insert a simple linebreak 
instead using the &lt;br&gt; tag
</p>
`
tools.two_columns(text_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## lists with `<ul>`  and `<li>`
<!-- #endregion -->

```javascript hide_input=true
bullet_fragment = `<p> a typical bullet list with a <b>ul</b> tag
<br>  ul stands for "unordered list"
<br> li stands for "list item"
<ul>
<li> the first bullet </li>
<li> the second bullet </li>
</ul>
</p>
`;
tools.two_columns(bullet_fragment)
```

```javascript hide_input=true
bullet_fragment = `<p> the same with a <b>ol</b> tag instead
<br> ol stands for "ordered list"
<ol>
<li> the first bullet </li>
<li> the second bullet </li>
</ol>
</p>
`;
tools.two_columns(bullet_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## anchor tag `<a>`
<!-- #endregion -->

the anchor tag serves two purposes :
* create a **hyperlink** that can bring users to another location
* create a **name** locally so that this particular location can be the target of a hyperlink

<!-- #region slideshow={"slide_type": "slide"} -->
### hyperlink `<a href="some-url">`
<!-- #endregion -->

typical **hyperlink** reads like this  
**NOTE** that clicking the link will cause you to leave the present notebook !

```javascript hide_input=true
hyperlink_fragment = `<a href="https://www.google.com/">the hyperlink</a>`;
tools.two_columns(hyperlink_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
### name anchor `<a name="some-name">`
<!-- #endregion -->

if you need a hyperlink to point, not at the beginning of this page, but somewhere in the middle, then create an anchor at that location

```javascript hide_input=true
anchor_fragment = `<a name="the-anchor-name">the magic location</a>`;
tools.two_columns(anchor_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
### URL to an anchor

* you can then refer to that anchor from any other webpage using a URL that ends with `#the-anchor-name`
* so if this page is published as `https://example.com/some/page.html`
* then you can create a direct access to *the magic location* 
* with a `<a href="https://example.com/some/page.html#the-anchor-name">`

<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
### local URL
<!-- #endregion -->

```javascript hide_input=true
redirect_fragment = `<p>it is easy to craft a local URL;
here this hyperlink 
<a href="#the-anchor-name">will go backwards</a>
<br>
(although in slideshow mode this does not exactly behave well)
</p>
`;
tools.two_columns(redirect_fragment);
```

<!-- #region slideshow={"slide_type": "slide"} -->
## styling tags

* a handful of convenience tags for quick styling
  * like bold, italics, underline and similar
* however there are **much more powerful** mechanisms
  * so **don't use this at scale**, they are just conveniences
<!-- #endregion -->

```javascript hide_input=true
styling_fragment = `<p>
tags for <b>bold</b> or <i>italics</i> 
or <u>underline</u> or <s>strike-through</s>
</br>
that of course <u><b><i>can be combined</i></b></u>
</p>`;
tools.two_columns(styling_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## code-like

* `<pre>` stands for preformatted
* `<code>` is for a terminal-like font and style
<!-- #endregion -->

```javascript hide_input=true
code_fragment = `<p>for inserting code that should be kept as-is

<code><pre>
import numpy as np
import matplotlib.pyplot as plt

X = np.linspace(-2*np.pi, 2*np.pi)
Y = np.sin(X)
plt.plot(X, Y)
</pre></code>
</p>`;
tools.two_columns(code_fragment)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## grouping contents
<!-- #endregion -->

<!-- #region hide_input=true -->
* one **very common** tag is `<div>`
 * it is used to group together elements inside a single tree
 * `<div>` stands for *division*
* there is also `<span>` that serves a similar purpose 
 * except for the linebreaking behaviour
* an essential tool in any page design
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
### `<div>` and `<span>` example
<!-- #endregion -->

```javascript slideshow={"slide_type": ""} hide_input=true
group_html = `<p> a paragraph may  
<span style="background-color: #ddd;">
      contain a fragment</span>
that we want to keep together,
typically for styling purposes, 
or moving contents about, 
for that use a &lt;span&gt; tag.</p>

<div style="background-color: #ddd;">
  <p> when you need to create a group that 
      contain several paragraphs</p>
  <p> then a &lt;div&gt; tag is more suitable</p>
</div>`;
tools.two_columns(group_html)
```

<p class="rise-footnote">this first example uses styling, 
    that we have not studied yet,
    to outline the &lt;span&gt; and &lt;div&gt; 
    elements by changing their background color</p>

<!-- #region slideshow={"slide_type": "slide"} -->
### second example of `<div>`
<!-- #endregion -->

```javascript slideshow={"slide_type": ""} hide_input=true
group2_html = `<div> 
the 'div' tag is an essential unit brick for creating a page layout
</div>
<div style="position: absolute;
            bottom: 20px; right: 20px;
            background-color: aquamarine;"> 
  <p>if you inspect a real page, you will see </p>
  <p>that 'div's elements are
     typically all over the place</p>
</div>`;
tools.two_columns(group2_html)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## a word on tables
<!-- #endregion -->

there indeed is a `<table>` tag in html;  
in the early ages of HTML, tables were present everywhere, for creating fancy layouts

however, we strongly recommend that you stay away from that for the moment, especially if your goal is to create  grid-based layouts, that we will cover later on

