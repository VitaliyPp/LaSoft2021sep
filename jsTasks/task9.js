let copy = (s, n) => {
  let res = '';
  if(s.length < 3) { 
    for (let i = 0; i < n; i++) res += s;
  } else {
    res = s + s.charAt(0) + s.charAt(1) + s.charAt(2);
  }
  return res;
}

console.log(copy('abc'));
console.log(copy('ab', 3));
console.log(copy('qwerty'));
