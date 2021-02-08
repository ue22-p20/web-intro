'use strict'


const show_html = require('./show-html')

exports.escape = show_html.escape
exports.one_column = show_html.one_column
exports.two_columns = show_html.two_columns
exports.iframe_html_css = show_html.iframe_html_css
exports.iframe_html_css_js = show_html.iframe_html_css_js
exports.iframe_samples_html_css = show_html.iframe_samples_html_css
exports.iframe_samples_html_css_js = show_html.iframe_samples_html_css_js
exports.iframe_exo = show_html.iframe_exo

//
const inject_css = require('./inject-css')

//
const run_all = require('./run-all')

function init() {
  let css = inject_css.read_style('../css/in-out.css')
  css += inject_css.read_style('../css/show-html.css')
  const button = run_all.run_all_button()
  $$.html(css + button)
}
exports.init = init

function autoreload(module) {
  require('fs').watchFile(
    require('path').resolve(module),
    () => {
      console.log(`unloading ${module}`)
      delete require.cache[require.resolve(module)]
    })
}

exports.autoreload = autoreload

// console.log('tools loaded')
