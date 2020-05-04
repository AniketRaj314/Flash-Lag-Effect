let width, height, diameter, length, theta, rpm, gap, flg, slider;
function setup() {
    width = innerWidth;
    height = innerHeight - 4;
    diameter = 30;
    length = 120;
    theta = 0;
    createCanvas(width, height);
    angleMode(DEGREES);
    rpm = 2;
    gap = 10;
    flg = 0;
    slider = createSlider(0, 100, 30);
    slider.position(width / 2 - 75, height - 60);
    slider.style("width", "150px");
}

function draw() {
    background(0);
    noStroke();
    fill(0, 0, 255);
    ellipse(width / 2, height / 2, diameter, diameter);
    rotateLine();
    stroke(0);
    fill(255);
    textSize(32);
    text(`RPM: ${rpm}`, width / 2 - 40, 50);
}

function rotateLine() {
    rpm = slider.value();
    strokeWeight(6);
    stroke(0, 0, 255);
    let x1 = width / 2;
    let y1 = height / 2;
    let x2 = x1 + length * cos(theta);
    let y2 = y1 + length * sin(theta);
    line(x1, y1, x2, y2);

    if (flg % 50 in [0, 1, 2]) {
        let x3 = x2 + gap * cos(theta);
        let y3 = y2 + gap * sin(theta);
        let x4 = x3 + (length - 5) * cos(theta);
        let y4 = y3 + (length - 5) * sin(theta);
        line(x3, y3, x4, y4);
    }
    theta += rpm / 10;
    flg++;
}