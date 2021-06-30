let lastDigit = (x, y) => {
  if(x >= 0 && y >= 0) {
    let xx = `${x}`.split(''),
        yy = `${y}`.split('');

    return !(xx[xx.length - 1] - yy[yy.length - 1]);
  }
}

console.log(lastDigit(15, 43));
console.log(lastDigit(12, 52));
