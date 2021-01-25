-"use strict";

let fs = require('fs');

// helper
function escape(string) {
    return string
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
    ;
}

function _injected_css(css) {
    return `<style>
${css}
</style>`;
}
function _injected_js(css) {
    return `<script>
${css}
</script>`;
}

function _verbatim(html) {
    return `<pre class="labeled">${escape(html)}</pre>`;
}

function _label(cls) {
    return `<span class="float-label lang ${cls}"></span>`;
}

function _labeled_area(code, code_class, label_class) {
    return `<div class="${code_class}">
    <div class="labeled">
    ${_label(label_class)}
    ${_verbatim(code)}
    </div>
</div>`;
}

function _iframe_for_stored_html(filename, html, extra_class) {
    fs.writeFileSync(filename, html);
    extra_class = extra_class || "";
    return `<iframe class="show-html ${extra_class}" src="${filename}" />`;
}


function _external_iframe_button(filename) {
    return `<a class="external"
    onclick="window.open('${filename}', '${filename}', 'width=500,height=250'); return false;"
    >
    <div style="display: flex; flex-direction: column; align-items: center;">
    <span>open in a separate window</span>
    <span>(beware of ad blockers)</span>
    </div></a>`
}


function one_column(html) {
    return $$.html(_verbatim(html));
}

function two_columns(html) {
    let left = _verbatim(html);
    let right = html;
    let whole = `<div class="show-html-2columns">
<div class="show-html-left">${left}</div>
<div class="show-html-right show-html-no-iframe">${right}</div>
</div>`;
    return $$.html(whole);
}


function iframe_html_css(iframe, html, css, external) {
    let filename = `./${iframe}.html`;
    let top_left = _labeled_area(html, "show-html-css-top-left", "html");
    let bottom_left = _labeled_area(css, "show-html-css-bottom-left", "css");
    let full_code = `${_injected_css(css)}
${html}`;
    let right = _iframe_for_stored_html(filename, full_code);
    let external_button = ``;
    let external_class = ``;
    if (external) {
        external_class = `external`;
        external_button = _external_iframe_button(filename);
    }
    let whole = `<div class="show-html-2columns">
<div class="show-html-css-left">
  ${top_left}${bottom_left}
</div>
  <div class="show-html-css-right ${external_class}">${right}${external_button}</div>
</div>    
`;
    return $$.html(whole);    
}

function iframe_html_css_js(iframe, html, css, js, external) {
    let filename = `./${iframe}.html`;
    let full_code = `${html}
${_injected_css(css)}
${_injected_js(js)}
`;
    /* produce html file */
    let html_area = _labeled_area(html, "show-html-css-js-html", "html");
    let css_area = _labeled_area(css, "show-html-css-js-css", "css");
    let js_area = _labeled_area(js, "show-html-css-js-js", "js");
    let iframe_area = _iframe_for_stored_html(filename, full_code);
    let [external_class, external_button] = ['', ''];
    if (external) {
        external_class = 'external';
        external_button = _external_iframe_button(filename);
    }
    let result_area = `<div class="${external_class}">
${iframe_area}${external_button}
</div>`;
    let whole = `<div class="show-html-2columns">
    <div class="show-html-left">${html_area}${css_area}
    </div>
    <div class="show-html-right">${js_area}
      <div class="show-html-css-js-result">${result_area}</div>
    </div>
</div>
    `;
    return $$.html(whole);
}


function iframe_samples_html_css(stem, external) {
    let filename = `../samples/${stem}`;
    let html = fs.readFileSync(`${filename}.html`, 'utf8');
    let css = fs.readFileSync(`${filename}.css`, 'utf8');
    return iframe_html_css(stem, html, css, external);
}

function iframe_samples_html_css_js(stem, external) {
    let filename = `../samples/${stem}`;
    let html = fs.readFileSync(`${filename}.html`, 'utf8');
    let css = fs.readFileSync(`${filename}.css`, 'utf8');
    let js = fs.readFileSync(`${filename}.js`, 'utf8');
    return iframe_html_css_js(stem, html, css, js, external);
}



function iframe_exo(stem, external, no_js) {
    let local = `./${path.basename(stem)}.html`;
    let filename = `../samples/${stem}`;
    let html = fs.readFileSync(`${filename}.html`, 'utf8');
    let css = fs.readFileSync(`${filename}.css`, 'utf8');
    let js = "";
    if (no_js == 'plain-js') 
        js = fs.readFileSync(`${filename}.js`, 'utf8');
    else if (! no_js) 
        js = fs.readFileSync(`${filename}.min.js`, 'utf8');
    let full_code = `${html}
${_injected_css(css)}
${_injected_js(js)}
`;
    /* produce html file */
    let iframe_area = _iframe_for_stored_html(local, full_code, "exo");
    let [external_class, external_button] = ['', ''];
    if (external) {
        external_class = 'external';
        external_button = _external_iframe_button(local);
    }
    let result_area = `<div class="${external_class}">
${iframe_area}${external_button}
</div>`;
    return $$.html(result_area);
}



function iframe_samples_html_css_minjs(stem, external) {
    return iframe_html_css_js(stem, html, css, js, external);
}

//////////
exports.escape = escape;
exports.one_column = one_column;
exports.two_columns = two_columns;
exports.iframe_html_css = iframe_html_css;
exports.iframe_html_css_js = iframe_html_css_js;
exports.iframe_samples_html_css = iframe_samples_html_css;
exports.iframe_samples_html_css_js = iframe_samples_html_css_js;
exports.iframe_exo = iframe_exo;