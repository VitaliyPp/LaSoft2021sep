function newDate (date) {
  let y = date.getFullYear(), 
      m = date.getMonth() + 1, 
      d = date.getDate(), 
      hrs = date.getHours(), 
      min = date.getMinutes();
    if(min == 0 || min < 10) min = `0${min}`;

  return `${d}/${m}/${y} ${hrs}:${min}`;
}

console.log(newDate(new Date()));
