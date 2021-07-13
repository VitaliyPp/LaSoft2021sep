function rep (n) {
  let a = '';
  if (n >= 0) {
    for (let i = 0; i < n; i++) {
      console.log(a += 'a');
    }
  }
  else return `n is negative integer`;
}

console.log(rep(5))
