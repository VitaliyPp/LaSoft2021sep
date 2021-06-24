let func = (a, b) => {
  let first = `${a}`,
      second = `${b}`;
  return first.split('')[first.length - 1] == second.split('')[second.length - 1]
}

console.log(func(45, 32));
console.log(func(14, 4));
