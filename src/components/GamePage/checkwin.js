const size = 20;
const countmax = 5;
const mode = 0;
export default function WinGame(squares) {
  var result = false;
  var Board = squares;
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (
        winHor(x, y, Board) ||
        winVer(x, y, Board) ||
        winCross1(x, y, Board) ||
        winCross2(x, y, Board)
      ) {
        result = true;
      }
    }
  }
  return result;
}
function minab(a, b) {
  if (a < b) return a;
  else return b;
}
function winHor(x, y, Board) {
  let l_win = [];
  var count = 0,
    counto = 0; // count opponent
  var player = Board[x + y * size];
  if (player == null) return false;

  if (x > 0) {
    var p = Board[x - 1 + y * size];
    if (p != player && p != null) counto++;
  }

  for (let i = x; i < size; i++) {
    var p = Board[i + y * size];
    if (p == player && p != null) {
      count++;
      l_win.push(i + y * size);
    } else {
      if (p != null) counto++;
      break;
    }
  }
  if (count >= countmax) {
    if (mode == 0) return true;
    else {
      if (counto >= 2) return false;
      else return true;
    }
  }
  return false;
}
function winVer(x, y, Board) {
  let l_win = [];
  var count = 0,
    counto = 0;
  var player = Board[x + y * size];
  if (player == null) return false;

  if (y > 0) {
    var p = Board[x + (y - 1) * size];
    if (p != player && p != null) counto++;
  }

  for (let i = y; i < size; i++) {
    var p = Board[x + i * size];
    if (p == player && p != null) {
      count++;
      l_win.push(x + i * size);
    } else {
      if (p != null) counto++;
      break;
    }
  }
  if (count >= countmax) {
    if (mode == 0) return true;
    else {
      if (counto >= 2) return false;
      else return true;
    }
  }
  return false;
}
function winCross1(x, y, Board) {
  let l_win = [];
  if (x > size - countmax || y < countmax - 1) return false;
  var count = 0,
    counto = 0;
  var player = Board[x + y * size];
  if (player == null) return false;

  if (y < size - 1 && x > 0) {
    var p = Board[x - 1 + (y + 1) * size];
    if (p != player && p != null) counto++;
  }

  for (let i = 0; i <= minab(size - x, y); i++) {
    var p = Board[x + i + (y - i) * size];
    if (p == player && p != null) {
      count++;
      l_win.push(x + i + (y - i) * size);
    } else {
      if (p != null) counto++;
      break;
    }
  }
  if (count >= countmax) {
    if (mode == 0) return true;
    else {
      if (counto >= 2) return false;
      else return true;
    }
  }
  return false;
}

function winCross2(x, y, Board) {
  let l_win = [];
  if (x > size - countmax || y > size - countmax) return false;
  var count = 0,
    counto = 0;
  var player = Board[x + y * size];
  if (player == null) return false;

  if (y > 0 && x > 0) {
    var p = Board[x - 1 + (y - 1) * size];
    if (p != player && p != null) counto++;
  }

  for (let i = 0; i < minab(size - x, size - y); i++) {
    var p = Board[x + i + (y + i) * size];
    if (p == player && p != null) {
      count++;
      l_win.push(x + i + (y + i) * size);
    } else {
      if (p != null) counto++;
      break;
    }
  }
  if (count >= countmax) {
    if (mode == 0) return true;
    else {
      if (counto >= 2) return false;
      else return true;
    }
  }
  return false;
}
