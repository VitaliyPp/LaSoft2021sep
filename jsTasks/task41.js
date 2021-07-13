let work = (cat, exp) => {
  if(exp > 2 && exp < 5) return cat - (cat * 0.05);
  if(exp > 5 && exp < 10) return cat + (cat * 0.05);
  if(exp > 10) return cat + (cat * 0.15);
  return cat - (cat * 0.15)
}

console.log(work(2000, 7));
