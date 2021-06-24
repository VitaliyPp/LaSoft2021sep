let leap = (year) => {
  let date = new Date (year, 1, 29);

  if(date.getDate() == 1) return `${year} is not leap year`;
  return `${year} is leap year`
}

console.log(leap(2012));
console.log(leap(1500));
console.log(leap(1600));
console.log(leap(2020));
