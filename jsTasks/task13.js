let great = (a, b, c) => Math.max(a, b, c);

console.log(great(3, 15, 8));

// or

function maxnum (a, b, c) {
  let res = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if(arguments[i] > res) res = arguments[i];
  }
  return res;
}

console.log(maxnum(14, 26, 77));

