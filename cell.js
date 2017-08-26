function Cell(x, y) {
  this.x = x;
  this.y = y;
  

  this.alive = false;
}

Cell.prototype.update = function () {
  var cell = new Cell(this.x, this.y);
  var n = this.aliveNeigbours();
  if (this.alive && n < 2) {
    cell.alive = false;
  } else if (this.alive && n < 4) {
    cell.alive = true;
  } else if (this.alive) {
    cell.alive = false;
  } else if (!this.alive && n === 3) {
    cell.alive = true;
  }
  return cell;
}

Cell.prototype.aliveNeigbours = function () {
  var n = 0;
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      var cell = grid.cell(this.x + i, this.y + j);
      // console.log(this.x + i, this.w + j);
      if (cell && cell.alive) {
        n++;
      }
    }
  }

  return n;
}

Cell.prototype.show = function () {
  if (this.alive) {
    fill(0);
  } else {
    noFill();
  }
  stroke(0);
  rect(this.x * w, this.y * w, w, w);
}