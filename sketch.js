var canvas;
var grid;

var nRows = 30;
var nCols = 30;
var w = 10;
var DEBUG = false;

var runBtn;

var running = false;

function setup() {
  frameRate(2);
  canvas = createCanvas(nRows * w + 1, nCols * w + 1);
  canvas.parent('canvas-container');

  canvas.mousePressed(() => {
    var x = floor(mouseX / w);
    var y = floor(mouseY / w);
    grid.cell(x, y).alive = true;
  });

  runBtn = select('#run');
  runBtn.mousePressed(() => {
    if (running) {
      // noLoop();
      running = false;
      runBtn.html('Run');
    } else {
      // loop();
      running = true;
      runBtn.html('Stop');
    }
  });

  grid = new Grid(nRows, nCols);
}

function draw() {
  background(255);
  grid.show();
  if (running) {
    grid.update();
  }
}