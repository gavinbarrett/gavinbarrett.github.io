/* phyllotaxis.js */

var n = 0;
var c = 5;
var phi;
var img;

/* load image */
function preload() {
    img = loadImage("sunset.jpg");
}

function setup() {
    var canvas = createCanvas(600,600);
    canvas.parent("phyllotaxis-holder");

    img.loadPixels();

    angleMode(DEGREES);
    noStroke();
    noLoop();
}

/* so the canvas isn't being constantly redrawn when mouse is idle */
function mouseMoved() {
    redraw();
}

function draw() {
    background(0);

    for(var n = 0; n < 10000; n++) {
        phi = 137.5 + mouseX / 10000;
        var angle = n * phi;
        var m = mouseY / 100;
        if(mouseY < 100) m = 1; /* constrain m */
        var r = c * sqrt(m*n); 

        var x = r * cos(angle) + width/2;
        var y = r * sin(angle) + height/2;

        /* Only draw the visible circles */
        if(0 < x && x < width && 0 < y && y < height){  
            let r_ellipse = 10 + m / 900; /* ellipse radius */

            /* get avg color of image within circle */
            let r_tot = 0;
            let g_tot = 0;
            let b_tot = 0;
            let total = 0;

            for(let i = Math.floor(x - r_ellipse); i < (x + r_ellipse); i++) {
                for(let j = Math.floor(y - r_ellipse); j < (y + r_ellipse); j++) {
                    var index = (i + j * img.width) * 4;

                    r_tot += img.pixels[index];
                    g_tot += img.pixels[index+1];
                    b_tot += img.pixels[index+2];
                    total++;
                }
            }

            let r_avg = r_tot / total;
            let g_avg = g_tot / total;
            let b_avg = b_tot / total;

            fill(r_avg, g_avg, b_avg, 255);
            ellipse(x,y,r_ellipse,r_ellipse);
        }
    }
}
