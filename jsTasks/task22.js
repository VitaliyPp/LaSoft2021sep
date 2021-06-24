let object = {
  literature: 74,
  science: 89,
  math: 91,
}

let sum = (obj) => {
  let res = 0;

  for (let key in obj) {
    res += obj[key]
  }
  return res;
}

console.log(sum(object));
