let numbers = (a, b) => 
  ((a > 0 || a <= 10) && (b < 1 || b > 10)) ? true : 
  ((b > 0 || b <= 10) && a < 1 || a > 10) ? true : 
  false;


console.log(numbers(5, 15));
console.log(numbers(93, 1));
console.log(numbers(6, 2));
  