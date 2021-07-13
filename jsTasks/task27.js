let nearest = (x, y) => {
  if(x == y) return 0;
  if((10 - x) > (10 - y)) return y;
  return x;
}

console.log(nearest(2, 5));
console.log(nearest(4, 4));
console.log(nearest(7, 5));
