---
jupyter:
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
    title: js intro
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
---

<!-- #region slideshow={"slide_type": ""} -->
# displaying code samples
<!-- #endregion -->

## init()

```javascript hide_input=false
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3')
tools.init()
```

```javascript
tools.sample_from_strings({'html': 'HELLO'})
```

# from plain strings

```javascript scrolled=false
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3'); null
```

```javascript
fragment1 = `<html>
  <head>
     <!-- various document-wide declarations -->
  </head>
  <body>
     <!-- the actual document contents -->
     Hello
  </body>
</html>
`

tools.sample_from_strings({html: fragment1})
```

# from files


## without the separate button

```javascript scrolled=false
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3'); null
```

```javascript slideshow={"slide_type": ""} hide_input=false scrolled=true
tools.sample_from_stem(
    "../samples/30-js-intro-01-on-off", 
    {height: '19em', width: '35em', min_width: '100px',
     start_with: 'css', separate_show: false,
    }) 
```

## with the separate button

```javascript scrolled=false
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3'); null
```

```javascript slideshow={"slide_type": ""} hide_input=false scrolled=false
tools.sample_from_stem(
    "../samples/30-js-intro-02-svgcircles", 
    {height: '20em', width: '40em', min_width: '100px',
//     separate_label: 'In new window',
     separate_show: true,
    }) 
```

## no code, just the result - with separate

```javascript scrolled=false
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3'); null
```

```javascript slideshow={"slide_type": ""} hide_input=false scrolled=true
// the default is separate_show = true

tools.sample_from_stem(
    "../samples/spinning-wheel", 
    {sources_show: false, height: '300px', separate_label: 'In new window',
}) 
```

## no code, just the result - truly basic, no separate


**beware** because we re-use the same stem twice, we need to provide our own id

```javascript tags=[] scrolled=false
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3'); null
```

```javascript scrolled=false
// here because we use the same code exactly
// we need to provide a unique id
// otherwise we mess with the previous sample

tools.sample_from_stem(
    "../samples/spinning-wheel", 
    {id: 'duplicate', height: '20em', sources_show: false, separate_show: false})
```

```javascript scrolled=false
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3'); null
```

## the calculator

```javascript tags=[] scrolled=false
delete require.cache[require.resolve('../js/toolsv3')]
tools = require('../js/toolsv3'); null
```

```javascript slideshow={"slide_type": ""} hide_input=false scrolled=false
tools.sample_from_stem(
    "../samples/calculator", 
    {sources_show: false, separate_show: false, height: '500px'}) 
```
