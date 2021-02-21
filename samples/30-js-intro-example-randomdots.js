const svgNS = "http://www.w3.org/2000/svg";


/* generates random circles in specified area */
class Board {

    constructor(width, height, radius) {
        this.w = width;
        this.h = height;
        this.x = width / 2;
        this.y = height / 2;
        this.r = radius;
        this.active = false;
    }

    draw() {
        // create a circle
        let c = document.createElementNS(svgNS, 'circle');
        // change its attributes
        c.setAttribute('cx', this.x); // center
        c.setAttribute('cy', this.y);
        c.setAttribute('r', this.r);  // radius
        // locate the <svg> element
        let svg = document.querySelector("svg");
        // insert circle in <svg> element
        svg.append(c);
    }

    // compute random position for next circle
    move() {
        let [rx, ry] = [Math.random(), Math.random()];
        this.x = rx * this.w;
        this.y = ry * this.h;
    }

    toggle() {
        this.active = ! this.active;
    }

    // heartbeat
    one_step() {
        console.log(`in RUN, active=${this.active}`);
        if (this.active) {
            this.draw();
            this.move();
        }
    }

    // do {this.one_step()} every 500 ms
    start() {
        // first parameter here is a function
        // that we want to call every 500 ms
        setInterval(()=>this.one_step(), 500)
    }
}

let the_board = new Board(400, 200, 4);

// this function is used directly in the HTML
function start_stop() {
    the_board.toggle();
}

// start the loop, but only once the page is loaded
window.onload = function () {
    let svg = document.querySelector("svg");
    svg.setAttribute('width', the_board.w);
    svg.setAttribute('height', the_board.h);
    the_board.start();
}
