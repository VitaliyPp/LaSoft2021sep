let num = (a, b) => {
  let first = `${a}`.split(''),
      second = `${b}`.split('');

  for (let el of first) {
    for (let i of second) {
      if(el == i) return true;
    }
  }
  return false;
}

console.log(num(25, 32));
console.log(num(88, 13));
