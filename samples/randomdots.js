const svgNS = "http://www.w3.org/2000/svg";


/* generates random circles in specified area */
class Board {
    
    constructor(width, height, start_x, start_y, radius, active) {
        this.w = width;
        this.h = height;
        this.x = start_x;
        this.y = start_y;
        this.r = radius;
        this.active = active;
    }
    
    draw() {
        let svg = document.querySelector("svg");
        console.log(svg);
        let c = document.createElementNS(svgNS, 'circle');
        c.setAttribute('cx', this.x); // svg's circle center
        c.setAttribute('cy', this.y);
        c.setAttribute('r', this.r);  // svg's circle radius
        svg.append(c);
    }
    
    // compute random position for next circle
    move(walker) {
        let [rx, ry] = [Math.random(), Math.random()];
        this.x = rx * this.w;
        this.y = ry * this.h;
    }
    
    toggle() {
        this.active = ! this.active;
    }
    
    // heartbeat
    one_step() {
        console.log("in RUN"); 
        if (this.active) {
            this.draw();
            this.move();
        }
    }

    // do {this.one_step()} every 400 ms
    start() {
        setInterval(()=>this.one_step(), 400)
    }
}

let the_board = new Board(400, 100, 100, 50, 4, true);

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