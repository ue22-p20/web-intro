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
  notebookname: vscode extensions
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
      height: 247.715px
      left: 1494px
      top: 95px
      width: 159.824px
    toc_section_display: false
    toc_window_display: true
  version: '1.0'
---

<!-- #region slideshow={"slide_type": ""} -->
<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>
<!-- #endregion -->

# vscode extensions

based on my experience and on this youtube video
https://www.youtube.com/watch?v=Z5RkLrSDlFA

in an opinionated order of usefulness


<!-- #region slideshow={"slide_type": ""} -->
##  live server 

see your code changes as soon as you save 

* to activate, use `⌘L ⌘O` control-click in an html file and select **Open with Live Server**
* will open the file in chrome, with no need to reload
<!-- #endregion -->

## auto rename

when you rename a tag, it will rename the other (closing or opening) side


## html tag wrapper

say you want to take a fragment and insert a <code>&lt;div&gt;</code> around that, just select and type `⌃I` (Control-i)

<!-- #region slideshow={"slide_type": ""} -->
## emmet

not technically an extension, a builtin tool to enter html fragments

check out the video, it's kind of like you type a css selector and the tool creates the html tag; cool really

I had never used that because I did not even know about it, but that sounds awesome for productivity

<!-- #endregion -->

## JS-CSS-HTML Formatting

control-click in the document to find tools that will format it nicely

<!-- #region slideshow={"slide_type": ""} -->
## HTML CSS support

* can't remember exactly what that brings precisely, but it has 5M downloads and I have been using it for a long time
* my environment has completion for all property names and javascript native methods, I believe all this comes from that extension, although I cannot be 100% positive

<!-- #endregion -->

## open in browser

you can control-click a file in the browser left pane, this gives you the option to open that static file in your default browser - and others as well actually

<!-- #region slideshow={"slide_type": ""} -->
## auto close tag

when you type, say <code>&lt;div&gt;</code>, it will automatically add the closing tag; 
I feel like this was working for me already before I installed this extension, so it's my feeling that it is not (no longer ?) needed 
<!-- #endregion -->
