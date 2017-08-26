function Grid(rows, cols) {
  this.cells = [];
  this.rows = rows;
  this.cols = cols;

  for (var i = 0; i < this.rows; i++) {
    for (var j = 0; j < this.cols; j++) {
      this.cells.push(new Cell(i, j));
    }
  }
}

Grid.prototype.cell = function (x, y) {
  if (x < 0 || y < 0 || x > this.rows - 1 || y > this.cols - 1) {
    return;
  }
  return this.cells[x * this.cols + y];
}

Grid.prototype.update = function (grid) {
  var nCells = [];
  this.cells.forEach((cell) => nCells.push(cell.update()));
  this.cells = nCells;
}

Grid.prototype.show = function () {
  this.cells.forEach((cell) => cell.show());
}
