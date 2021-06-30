let eleven = (x, y) => {
  if(x == 11 || y == 11 || x - y == 11 || y - x == 11 || x + y == 11) {
    return 11;
  }
}

console.log(eleven(7, 4));
console.log(eleven(41, 30));
console.log(eleven(6, 52));
