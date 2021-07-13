let exchange = (str) => {
  if (str.length <= 1) return str;
  let res = str.substring(1, str.length - 1);

  return str.charAt(str.length - 1) + res + str.charAt(0);
}

console.log(exchange('Python'));
