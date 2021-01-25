function set_body_background(color) {
    document.querySelector("body").style.backgroundColor = color;
}

index = 0;
colors = [
    "#f6e5f5", "#f6e7e6",
]

function run() {
    index += 1;
    index %= 2;
    set_body_background(colors[index]);
    setTimeout(run, 1000);
}

window.onload = run;