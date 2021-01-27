WIDTH = 100;
STEP = 20;
direction = 1;

function grow() {
    let growing = document.getElementById("growing");
    growing.style.width = `${WIDTH}px`;
    WIDTH += STEP;
}

// call grow every second
function grow_forever() {
    setInterval(grow, 2000);
}