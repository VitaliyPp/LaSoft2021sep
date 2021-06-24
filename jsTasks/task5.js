let small = (n) => {
  for (let el of n) (el > 0 && el <= 10) ? !!1 : !!0
}

console.log(small([5, 8, 13]))
