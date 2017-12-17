var canvas;
var grid;

var nRows = 80;
var nCols = 50;
var w = 10;
var DEBUG = false;


var running = true;

function setup() {
  if (!running) {
    noLoop();
  }

  canvas = createCanvas(nRows * w + 1, nCols * w + 1);
  canvas.parent('canvas-container');
  canvas.mousePressed(() => {
    if (!running) {
      var x = floor(mouseX / w);
      var y = floor(mouseY / w);
      grid.cell(x, y).alive = !grid.cell(x, y).alive;
      redraw();
    }
  });

  grid = new Grid(nRows, nCols);
}

function draw() {
  background(255);
  if (running) {
    grid.update();
  }
  grid.show();
}