

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

	var html = util.format('<button style="width: 100%;" id="b%s">Update</button><div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr; height: 300px;"><textarea id="%s">', id, id);
	html += fs.readFileSync(filename);
	html += util.format('</textarea><iframe id="i%s"></iframe>', id);
	html += util.format(`<script defer>

function run_code(src, dst)
{
        const content = src.getValue();
        let iframe = dst;

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
        iframe.document.write(content);
        iframe.document.close();

        return false;
}

	require(['codemirror/lib/codemirror', 'codemirror/mode/htmlmixed/htmlmixed'], (CodeMirror) => {
		let src = CodeMirror.fromTextArea(document.getElementById("%s"), {
			lineNumbers: true,
			mode: "htmlmixed"
		  });
		let dst = document.getElementById("i%s");
		let button = document.getElementById("b%s");
		run_code(src, dst);
		button.addEventListener("click", () => {
                	console.log(src, dst);
                	run_code(src, dst);
        		});
	});
	</script>`, id, id, id);

	$$.html(html);

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
