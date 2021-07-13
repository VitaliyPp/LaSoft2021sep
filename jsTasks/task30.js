let count = (arr) => {
  let sum = 0;

  for (let el of arr) {
    if(el == 5) sum ++;
  }
  return sum;
}

console.log(count([1, 5, 6, 7, 53, 45, 3, 6, 5, 2, 2, 35]));
