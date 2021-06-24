let range = (x, y) => {
  if(x >= 20 && x <= 30 && y >= 20 && y <= 30) {
    return x > y ? x : y;
  }
  return 0;
}

console.log(range(11, 25));
console.log(range(21, 30));
console.log(range(29, 23));
console.log(range(33, 15));