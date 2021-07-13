let num = (a, b, c) => {
  if(Math.max(a, b, c) == 20) return true;
  return !!(Math.max(a,b,c) - Math.min(a,b,c))
}

console.log(num(10, 45, 32));
