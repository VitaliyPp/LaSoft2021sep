let num = (x, y, z) => {
  if(y - x == 1 || x - y == 1 || x == y) {
    if(z - x >= 3 || x - z >= 3) return true;
  } else if(y - x >= 3 || x - y >= 3 || y - z >= 3 || z - y >= 3) {
    if(z - x == 1 || x - z == 1 || x == z) return true;
  }
  
  return false;
}

console.log(num(5, 4, 9));
console.log(num(7, 2, 8));
console.log(num(2, 5, 7));
