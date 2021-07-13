let radius = (r) => {
  if(r >= 0) {
    return `the perimeter is ${r * 2 * Math.PI}\n
      the area is ${(r*r) * Math.PI}`;
  }
}

console.log(radius(5))
