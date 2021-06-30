let func = (arr) => {
  for (let el = 0; el <= arr.length; el++) {
    if(arr[el] == 10 && arr[el + 1] == 20 && arr[el + 2] == 30) return true;
  }
  return false;
}

console.log(func([1,4,7,10,20,30,43,2]));
console.log(func([8,53,24,13,4,63,45,6,52,21,23]));
