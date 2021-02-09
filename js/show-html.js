'use strict'


const fs = require('fs')

// helper
function escape(string) {
  return string
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function _injected_css(css) {
  return `<style>
${css}
</style>`
}
function _injected_js(css) {
  return `<script>
${css}
</script>`
}

function _verbatim(html) {
  return `<pre class="labeled">${escape(html)}</pre>`
}

function _label(cls) {
  return `<span class="float-label lang ${cls}"></span>`
}

function _labeled_area(code, code_class, label_class) {
  return `<div class="${code_class}">
  <div class="labeled">
  ${_label(label_class)}
  ${_verbatim(code)}
  </div>
</div>`
}

function _iframe_for_stored_html(filename, html, extra_class) {
  fs.writeFileSync(filename, html)
  extra_class = extra_class || ''
  return `<iframe class="show-html ${extra_class}" src="${filename}"></iframe>`
}


function _external_iframe_button(filename) {
  return `<a class="external"
    onclick="window.open('${filename}', '${filename}', 'width=500,height=250'); return false;"
    >
    <div style="display: flex; flex-direction: column; align-items: center;">
    <span>open in a separate window</span>
    <span class="beware">(beware of ad blockers)</span>
    </div></a>`
}


function one_column(html) {
  return $$.html(_verbatim(html))
}

function two_columns(html) {
  const left = _verbatim(html)
  const right = html
  const whole = `<div class="show-html-2columns">
<div class="show-html-left">${left}</div>
<div class="show-html-right show-html-no-iframe">${right}</div>
</div>`
  return $$.html(whole)
}


function iframe_html_css(iframe, html, css, external) {
  const filename = `./${iframe}.html`
  const top_left = _labeled_area(html, 'show-html-css-top-left', 'html')
  const bottom_left = _labeled_area(css, 'show-html-css-bottom-left', 'css')
  const full_code = `${_injected_css(css)}
${html}`
  const right = _iframe_for_stored_html(filename, full_code)
  let [external_class, external_button] = ['', '']
  if (external) {
    external_class = 'external'
    external_button = _external_iframe_button(filename)
  }
  const whole = `<div class="show-html-2columns">
<div class="show-html-css-left">
  ${top_left}${bottom_left}
</div>
  <div class="show-html-css-right ${external_class}">${external_button}${right}</div>
</div>
`
  return $$.html(whole)
}

function iframe_html_css_js(iframe, html, css, js, external) {
  const filename = `./${iframe}.html`
  const full_code = `${html}
${_injected_css(css)}
${_injected_js(js)}
`
  /* produce html file */
  const html_area = _labeled_area(html, 'show-html-css-js-html', 'html')
  const css_area = _labeled_area(css, 'show-html-css-js-css', 'css')
  const js_area = _labeled_area(js, 'show-html-css-js-js', 'js')
  const iframe_area = _iframe_for_stored_html(filename, full_code)
  let [external_class, external_button] = ['', '']
  if (external) {
    external_class = 'external'
    external_button = _external_iframe_button(filename)
  }
  const result_area = `<div class="${external_class}">
${external_button}${iframe_area}
</div>`
  const whole = `<div class="show-html-2columns">
    <div class="show-html-left">${html_area}${css_area}
    </div>
    <div class="show-html-right">${js_area}
      <div class="show-html-css-js-result">${result_area}</div>
    </div>
</div>
    `
  return $$.html(whole)
}


function iframe_samples_html_css(stem, external) {
  const filename = `../samples/${stem}`
  const html = fs.readFileSync(`${filename}.html`, 'utf8')
  const css = fs.readFileSync(`${filename}.css`, 'utf8')
  return iframe_html_css(stem, html, css, external)
}

function iframe_samples_html_css_js(stem, external) {
  const filename = `../samples/${stem}`
  const html = fs.readFileSync(`${filename}.html`, 'utf8')
  const css = fs.readFileSync(`${filename}.css`, 'utf8')
  const js = fs.readFileSync(`${filename}.js`, 'utf8')
  return iframe_html_css_js(stem, html, css, js, external)
}



function iframe_exo(stem, external, no_js) {
  const local = `./${path.basename(stem)}.html`
  const filename = `../samples/${stem}`
  const html = fs.readFileSync(`${filename}.html`, 'utf8')
  const css = fs.readFileSync(`${filename}.css`, 'utf8')
  let js = ''
  if (no_js === 'plain-js') {
    js = fs.readFileSync(`${filename}.js`, 'utf8')
  } else if (!no_js) {
    js = fs.readFileSync(`${filename}.min.js`, 'utf8')
  }
  const full_code = `${html}
${_injected_css(css)}
${_injected_js(js)}
`
  /* produce html file */
  const iframe_area = _iframe_for_stored_html(local, full_code, 'exo')
  let [external_class, external_button] = ['', '']
  if (external) {
    external_class = 'external'
    external_button = _external_iframe_button(local)
  }
  const result_area = `<div class="${external_class}">
${external_button}${iframe_area}
</div>`
  return $$.html(result_area)
}


//
exports.escape = escape
exports.one_column = one_column
exports.two_columns = two_columns
exports.iframe_html_css = iframe_html_css
exports.iframe_html_css_js = iframe_html_css_js
exports.iframe_samples_html_css = iframe_samples_html_css
exports.iframe_samples_html_css_js = iframe_samples_html_css_js
exports.iframe_exo = iframe_exo
