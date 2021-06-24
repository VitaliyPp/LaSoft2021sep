let func = (arr) => {
  let sum = 0;
  for (let el of arr) {
    if (el == 20) return el;
    else sum += el;
  }
  return sum;
}

console.log(func([11, 32]));
console.log(func([5, 20]));
