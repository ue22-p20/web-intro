

function hash(word) {
    let crypto = require('crypto');
    let sha1 = crypto.createHash('sha1');
    sha1.update(word);
    return sha1.digest('hex');
}

function create_example_code(filename) {
	const fs = require('fs');
	const util = require('util');


	let id = 'x' + hash(filename);

	let fullname_html = `../samples/${filename}.html`
	let fullname_css  = `../samples/${filename}.css`
	let fullname_js   = `../samples/${filename}.js`

	let textarea = '';

	try {
		fs.accessSync(fullname_html);
		textarea += `<textarea id="html_${id}">${fs.readFileSync(fullname_html)}</textarea>`;
	} catch { }

	try {
		fs.accessSync(fullname_css);
		textarea += `<textarea id="css_${id}">${fs.readFileSync(fullname_css)}</textarea>`;
	} catch { }

	try {
		fs.accessSync(fullname_js);
		textarea += `<textarea id="js_${id}">${fs.readFileSync(fullname_js)}</textarea>`;
	} catch { }


	var html = `<div style="display: grid; grid-template-columns: 50% 50%; grid-template-rows: auto 1fr; height: 300px;">
	<div style="display: flex;" id="btn1_${id}"></div>
	<div style="display: flex;" id="btn0_${id}"></div>
	<div style="overflow-y: auto;" >
	${textarea}
	</div>
	<div style="display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr;" id="out_${id}"></div>
	<script defer>

	{

	let all_src = { };

	let dst = document.getElementById("out_${id}");

	let callback = () => {
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

		let iframe = document.createElement("iframe");
		while (dst.firstChild) {
			dst.removeChild(dst.lastChild);
		}

		dst.appendChild(iframe);

		if (iframe.contentWindow) {
			iframe = iframe.contentWindow;
		} else {
			if (iframe.contentDocument.document) {
				iframe = iframe.contentDocument.document;
			} else {
				iframe = iframe.contentDocument;
			}
		}

		let tpl = "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;style&gt;__css__&lt;/style&gt;&lt;script defer&gt;__js__&lt;/script&gt;&lt;/head&gt;&lt;body&gt;__html__&lt;/body&gt;&lt;/html&gt;";
		// escape trick
		let escape_trick = document.createElement("textarea");
		escape_trick.innerHTML = tpl;
		tpl = escape_trick.textContent;

		tpl = tpl.replace("__html__", html);
		tpl = tpl.replace("__css__", css);
		tpl = tpl.replace("__js__", js);

		iframe.document.open();
		iframe.document.write(tpl);
		iframe.document.close();

		return false;

	};

	const html_src = document.getElementById("html_${id}");
	if (html_src != null) {
		require(['codemirror/lib/codemirror', 'codemirror/mode/htmlmixed/htmlmixed'], (CodeMirror) => {
			all_src.html = CodeMirror.fromTextArea(html_src, {
				lineNumbers: true,
				mode: "htmlmixed"
			});
			all_src.html.getWrapperElement().style.height = "minmax(100%, 100%)";
			all_src.html.getWrapperElement().style.display = "block";
			callback();
		});
	}

	const css_src = document.getElementById("css_${id}");
	if (css_src != null) {
		require(['codemirror/lib/codemirror', 'codemirror/mode/css/css'], (CodeMirror) => {
			all_src.css = CodeMirror.fromTextArea(css_src, {
				lineNumbers: true,
				mode: "css"
			});
			all_src.css.getWrapperElement().style.height = "minmax(100%, 100%)";
			all_src.css.getWrapperElement().style.display = "none";
			callback();
		});
	}

	const js_src = document.getElementById("js_${id}");
	if (js_src != null) {
		require(['codemirror/lib/codemirror', 'codemirror/mode/javascript/javascript'], (CodeMirror) => {
			all_src.js = CodeMirror.fromTextArea(js_src, {
				lineNumbers: true,
				mode: "javascript"
			});
			all_src.js.getWrapperElement().style.height = "minmax(100%, 100%)";
			all_src.js.getWrapperElement().style.display = "none";
			callback();
		});
	}


	let btn1 = document.getElementById("btn1_${id}");

	let btn_html = document.createElement("button");
	btn_html.addEventListener("click", () => {
		all_src.css.getWrapperElement().style.display = "none";
		all_src.js.getWrapperElement().style.display = "none";
		all_src.html.getWrapperElement().style.display = "block";
	});
	btn_html.textContent = "HTML"
	btn1.appendChild(btn_html);
	
	let btn_css = document.createElement("button");
	btn_css.addEventListener("click", () => {
		all_src.js.getWrapperElement().style.display = "none";
		all_src.html.getWrapperElement().style.display = "none";
		all_src.css.getWrapperElement().style.display = "block";
	});
	btn_css.textContent = "CSS"
	btn1.appendChild(btn_css);
	
	let btn_js = document.createElement("button");
	btn_js.addEventListener("click", () => {
		all_src.css.getWrapperElement().style.display = "none";
		all_src.html.getWrapperElement().style.display = "none";
		all_src.js.getWrapperElement().style.display = "block";
	});
	btn_js.textContent = "JS"
	btn1.appendChild(btn_js);

	let btn0 = document.getElementById("btn0_${id}");
	let btn_update = document.createElement("button");
	btn_update.addEventListener("click", callback);
	btn_update.textContent = "Update";
	btn0.appendChild(btn_update);

	}
	`;


/*
		let dst = document.getElementById("html_${id}");
		let button = document.getElementById("b${id}");
		run_code(src, dst);
		button.addEventListener("click", () => {
                	console.log(src, dst);
                	run_code(src, dst);
        		}); */

	html += `</script>`;

	$$.html(html);
	//console.log(html);
}

function init() {
$$.html(`<script>
//require(['/files/js/lib/codemirror.js']);
//require(['/files/js/mode/htmlmixed/htmlmixed.js']);
require(['codemirror/mode/htmlmixed/htmlmixed']);
Jupyter.notebook.execute_cells_below();
</script>`);
}

exports.init = init;
exports.create_example_code = create_example_code;

/*
var nodes = document.getElementsByClassName("code-example");

for (let n of nodes) {
	let btn = document.createElement('button');
	btn.innerText = "Update";
	let src = n.cloneNode(true);
	let dst = document.createElement("iframe");
	let ctn = document.createElement('div');
	let ctn1 = document.createElement('div');

	ctn.setAttribute("class", "code-example-container");
	ctn.appendChild(btn);
	ctn.appendChild(ctn1);
	ctn1.appendChild(src);
	ctn1.appendChild(dst);

	n.parentElement.replaceChild(ctn, n);

	let nsrc = CodeMirror.fromTextArea(src, {
		lineNumbers: true,
		mode: "htmlmixed"
	  });

	run_code(nsrc, dst);

	btn.addEventListener("click", () => {
		console.log(nsrc, dst);
		run_code(nsrc, dst);
	});

}

var sections = document.getElementsByTagName("section");
let i = 0;
for (let i = 0; i < sections.length; ++i) {
	let p = document.createElement("center");
	p.innerText = `${i+1}/${sections.length}`;
	sections[i].appendChild(p);
}

*/
