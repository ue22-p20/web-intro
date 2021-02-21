function hash(word) {
    let crypto = require('crypto');
    let sha1 = crypto.createHash('sha1');
    sha1.update(word);
    return sha1.digest('hex');
}

function create_example_code(filename, options) {
  options = options || {}
  let width = options.width || "300px"
  let height = options.height || "300px"
  let min_width = options.min_width || width
  let min_height = options.min_height || height
  let separate_width = options.separate_width || "400px"
  let separate_height = options.separate_height || "400px"
  let update_label = options.update_label || "Update"
  let separate_label = options.separate_label || "Open in new window"
  // you may also define options.start_with to be either html or css or js
  let start_with = options.start_with || "html"
  //
  if (['html', 'css', 'js'].indexOf(start_with) < 0) start_with = "html"

  const fs = require('fs');


	let id = 'x' + hash(filename);

	let fullname_html = `../samples/${filename}.html`
	let fullname_css  = `../samples/${filename}.css`
	let fullname_js   = `../samples/${filename}.js`

	let textarea = '';

	try {
		fs.accessSync(fullname_html);
		textarea += `<textarea id="html_${id}">${fs.readFileSync(fullname_html)}</textarea>`;
	} catch {
		textarea += `<textarea id="html_${id}"><!-- empty --></textarea>`;
	}

	try {
		fs.accessSync(fullname_css);
		textarea += `<textarea id="css_${id}">${fs.readFileSync(fullname_css)}</textarea>`;
	} catch {
		textarea += `<textarea id="css_${id}">/* empty */</textarea>`;
	}


	try {
		fs.accessSync(fullname_js);
		textarea += `<textarea id="js_${id}">${fs.readFileSync(fullname_js)}</textarea>`;
	} catch {
		textarea += `<textarea id="js_${id}">// empty</textarea>`;
	}


	let html = `<style>
		.${id}_btn {
			border-top: 0px solid transparent;
			border-left: 0px solid transparent;
			border-right: 0px solid transparent;
			border-bottom: 1px solid #CFCFCF;
			padding-top: 6px;
			padding-left: 11px;
			padding-right: 11px;
			padding-bottom: 5px;
		}
		.${id}_selected {
			border-top: 1px solid #CFCFCF;
			border-left: 1px solid #CFCFCF;
			border-right: 1px solid #CFCFCF;
			border-bottom: 1px solid transparent;
			padding-top: 5px;
			padding-left: 10px;
			padding-right: 10px;
			padding-bottom: 6px;
		}
	</style><div style="display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto 1fr;">
	<div style="display: flex;" id="btn1_${id}"></div>
	<div style="display: flex;" id="btn0_${id}"></div>
	<div id="area_ctn_${id}" style="overflow: auto; resize: both; z-index: 100; min-width: ${min_width}; min-height: ${min_height}; height:${height}; width: ${width}; display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr;" >
	${textarea}
	</div>
	<div style="display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr;" id="out_${id}"></div>
	<script defer>

	require(['codemirror/lib/codemirror',
		 'codemirror/mode/htmlmixed/htmlmixed',
		 'codemirror/mode/css/css',
		 'codemirror/mode/javascript/javascript'
		 ], (CodeMirror) => {

	let all_src = { };

	let dst = document.getElementById("out_${id}");

	let get_example_content = () => {
		let html = '';
		let css = '';
		let js = '';

		if (all_src.hasOwnProperty('html')) {
			html = all_src.html.getValue();
		}

		if (all_src.hasOwnProperty('css')) {
			css = all_src.css.getValue();
		}

		if (all_src.hasOwnProperty('js')) {
			js = all_src.js.getValue();
		}


		let tpl = "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;style&gt;__css__&lt;/style&gt;&lt;script defer&gt;__js__&lt;/script&gt;&lt;/head&gt;&lt;body&gt;__html__&lt;/body&gt;&lt;/html&gt;";
		// escape trick
		let escape_trick = document.createElement("textarea");
		escape_trick.innerHTML = tpl;
		tpl = escape_trick.textContent;

		tpl = tpl.replace("__html__", html);
		tpl = tpl.replace("__css__", css);
		tpl = tpl.replace("__js__", js);

		return tpl;
	};

	let update_iframe = () => {

		let tpl = get_example_content();

		let iframe = document.createElement("iframe");
		while (dst.firstChild) {
			dst.removeChild(dst.lastChild);
		}

		dst.appendChild(iframe);
    iframe.width = "100%";
    iframe.height = "100%";

		if (iframe.contentWindow) {

			iframe = iframe.contentWindow;
		} else {
			if (iframe.contentDocument.document) {
				iframe = iframe.contentDocument.document;
			} else {
				iframe = iframe.contentDocument;
			}
		}

		iframe.document.open();
		iframe.document.write(tpl);
		iframe.document.close();

		return false;

	};


	const html_src = document.getElementById("html_${id}");
	all_src.html = CodeMirror.fromTextArea(html_src, {
		lineNumbers: true,
		mode: "htmlmixed"
	});
	all_src.html.getWrapperElement().style['min-height'] = '${height}';
	all_src.html.getWrapperElement().style.display = ${start_with == 'html'}?"block":"none";

	const css_src = document.getElementById("css_${id}");
	all_src.css = CodeMirror.fromTextArea(css_src, {
		lineNumbers: true,
		mode: "css"
	});
	all_src.css.getWrapperElement().style['min-height'] = '${height}';
	all_src.css.getWrapperElement().style.display = ${start_with == 'css'}?"block":"none";
	const js_src = document.getElementById("js_${id}");
	all_src.js = CodeMirror.fromTextArea(js_src, {
		lineNumbers: true,
		mode: "javascript"
	});
	all_src.js.getWrapperElement().style['min-height'] = '${height}';
	all_src.js.getWrapperElement().style.display = ${start_with == 'js'}?"block":"none";

	const area_ctn = document.getElementById("area_ctn_${id}");
	/* Trick to update the codemirror layout when resized */
	area_ctn.addEventListener("mouseup", () => {
		all_src.html.refresh();
		all_src.css.refresh();
		all_src.js.refresh();
	});


	let btn1 = document.getElementById("btn1_${id}");

	let btn_html = document.createElement("button");
	btn_html.textContent = "HTML"
	btn_html.classList.add("${id}_btn");
	if (${start_with == 'html'}) btn_html.classList.add("${id}_selected");
	btn1.appendChild(btn_html);
	let btn_css = document.createElement("button");
	btn_css.textContent = "CSS"
	btn_css.classList.add("${id}_btn");
	if (${start_with == 'css'}) btn_css.classList.add("${id}_selected");
	btn1.appendChild(btn_css);
	let btn_js = document.createElement("button");
	btn_js.textContent = "JS"
	btn_js.classList.add("${id}_btn");
	if (${start_with == 'js'}) btn_js.classList.add("${id}_selected");
	btn1.appendChild(btn_js);
	let btn_fill = document.createElement("button");
	btn_fill.classList.add("${id}_btn");
	btn_fill.style['flex-grow'] = '1';
	btn1.appendChild(btn_fill);

	btn_html.addEventListener("click", () => {
		btn_css.classList.remove("${id}_selected");
		btn_js.classList.remove("${id}_selected");
		btn_html.classList.add("${id}_selected");
		all_src.css.getWrapperElement().style.display = "none";
		all_src.js.getWrapperElement().style.display = "none";
		all_src.html.getWrapperElement().style.display = "block";
		all_src.html.refresh();
	});

	btn_css.addEventListener("click", () => {
		btn_html.classList.remove("${id}_selected");
		btn_js.classList.remove("${id}_selected");
		btn_css.classList.add("${id}_selected");
		all_src.js.getWrapperElement().style.display = "none";
		all_src.html.getWrapperElement().style.display = "none";
		all_src.css.getWrapperElement().style.display = "block";
		all_src.css.refresh();
	});

	btn_js.addEventListener("click", () => {
		btn_css.classList.remove("${id}_selected");
		btn_html.classList.remove("${id}_selected");
		btn_js.classList.add("${id}_selected");
		all_src.css.getWrapperElement().style.display = "none";
		all_src.html.getWrapperElement().style.display = "none";
		all_src.js.getWrapperElement().style.display = "block";
		all_src.js.refresh();
	});

	let btn0 = document.getElementById("btn0_${id}");
	let btn_update = document.createElement("button");
	btn_update.textContent = "${update_label}";
	btn0.appendChild(btn_update);
	btn_update.addEventListener("click", update_iframe);

	let btn_window = document.createElement("button");
	btn_window.addEventListener("click", () => {
		let tpl = get_example_content();

		let w = window.open(null, '_blank', 'height=${separate_height},width=${separate_width}');
		w.document.open();
		w.document.write(tpl);
		w.document.close();

	});
	btn_window.textContent = "${separate_label}";
	btn0.appendChild(btn_window);

	update_iframe();

	all_src.html.refresh();

	}); /* End of all requirements */

	`

	html += `</script>`;

	$$.html(html);
}

function init() {
$$.html(`<script>
require(['codemirror/mode/htmlmixed/htmlmixed']);
Jupyter.notebook.execute_cells_below();
</script>`);
}

exports.init = init;
exports.create_example_code = create_example_code;
