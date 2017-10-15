var canvas;
var grid;

var nRows = 20;
var nCols = 20;
var w = 10;
var DEBUG = false;

var runBtn;

var running = false;

function setup() {
  frameRate(2);
  canvas = createCanvas(nRows * w + 1, nCols * w + 1);
  canvas.parent('canvas-container');

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
  grid.cell(0, 0).alive = true;
  grid.cell(0, 2).alive = true;
  grid.cell(2, 1).alive = true;
  grid.cell(2, 3).alive = true;
  grid.cell(2, 4).alive = true;
}

function draw() {
  background(255);
  grid.show();
  if (running) {
    grid.update();
  }
}