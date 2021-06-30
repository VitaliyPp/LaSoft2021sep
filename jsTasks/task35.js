let num = (a, b) => {
  if(a == b) return 0; 
  if(a % 5 == b % 5) {
    return Math.min(a, b);
  }

  return Math.max(a, b);
}

console.log(num(12, 5));
console.log(num(11, 31));
console.log(num(5, 5));
