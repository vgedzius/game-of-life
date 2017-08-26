var canvas;
var grid;

var nRows = 20;
var nCols = 20;
var w = 10;

function setup() {
  canvas = createCanvas(nRows * w + 1, nCols * w + 1);
  canvas.parent('canvas-container');

  grid = new Grid(nRows, nCols);
  grid.cell(0, 0).alive = true;
  grid.cell(1, 0).alive = true;
  grid.cell(1, 1).alive = true;
}

function draw() {
  grid.update();
  grid.show();
}