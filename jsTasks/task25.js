let del = (str) => {
  if(str.startsWith('Java')) return str.slice(4);
  return str;
}

console.log(del('JavaScript'));
console.log(del('OldJava'));
