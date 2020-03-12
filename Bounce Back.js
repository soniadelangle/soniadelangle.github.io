var x = 0
var y = 0
var xder = 1
var yder = 1
var r = 50

function setup() {
    createCanvas(400, 400);
    fill(18, 215, 212);
    if (mouseIsPressed) {

    }
}

function draw() {
    background(0);


    ellipse(x, y, 2 * r, 2 * r);
    //fill(241, 102, 210);
    //triangle(x, y, 58, 20, 86, 75);

    x = x + xder * 8
    y = y + yder * 8


    if (x > 400 - r) {
        fill(random(255), 102, 210);
        x = x - 2
        xder *= -1


        //x = x-12
    }
    if (x < 0 + r) {
        fill(255, random(102), 210);
        x = x + 2
        xder *= -1
    }
    if (y > height - r) {
        fill(255, 102, random(210));
        y = y - 2
        yder *= -1
        //x = x-12
    }
    if (y < 0 + r) {
        fill(random(255), random(102), random(210));
        y = y + 2
        yder *= -1
        //x = x-12
    }


}




function mousePressed() {
    x = mouseX
    y = mouseY
}