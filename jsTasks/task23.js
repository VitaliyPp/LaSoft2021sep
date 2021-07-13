let twenty = (a) => {
  let res = '';
  for(let i = 0; i < 20; i++) {
    res += a
  }

  return res;
}

console.log(twenty('*'));
console.log(twenty('#'));
console.log(twenty('@'));
