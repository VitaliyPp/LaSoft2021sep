let range = (x, y) => {
  if(x >= 10 && x <= 20 && y >= 10 && y <= 20) return true;
  if(x >= 20 && x <= 30 && y >= 20 && y <= 30) return true;
  return false;
}

console.log(range(11, 15));
console.log(range(11, 25));
console.log(range(21, 30));
console.log(range(33, 15));
