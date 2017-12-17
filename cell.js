function Cell(x, y) {
  this.x = x;
  this.y = y;
  

  this.alive = floor(random(2));
}

Cell.prototype.update = function () {
  var cell = new Cell(this.x, this.y);
  var n = this.aliveNeigbours();
  switch (n) {
    case 3:
      cell.alive = true;
      break;
    case 4:
      cell.alive = this.alive;
      break;
    default:
      cell.alive = false;  
  }
  
  return cell;
}

Cell.prototype.aliveNeigbours = function () {
  var n = 0;
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      var x = (this.x + i + nRows) % nRows;
      var y = (this.y + j + nCols) % nCols;

      var cell = grid.cell(x, y);
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

  if (DEBUG) {
    if (this.alive) {
      fill(255);
    }
    textAlign(CENTER);
    text(this.aliveNeigbours(), this.x * w + w / 2, this.y * w + w / 2);
  }
}