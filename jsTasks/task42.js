let digit = (n) => {
  let num = `${n}`.split('');
  let sum = num.reduce((prev, el) => prev + +el ,0);
  let same = -num.length;
  for (let el of num) {
    for (let i of num) if(el == i) same++;
  }

  let sumOf2 = (+num[0] + +num[1]) == (+num[2] + +num[3]);


  return {
    'sum': sum,
    'sameDigit': !!same,
    'sumIsDifferent': !sumOf2,
  };
}

console.log(digit(5141));
console.log(digit(2567));
