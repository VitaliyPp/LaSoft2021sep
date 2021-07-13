let str = (s) => {
  if (s.length > 0) {
    let res = s.split('');
    res.unshift(res[res.length - 1]);
    res.push(res[res.length - 1]);

    return res.join('')
  }
}

console.log(str('qwe'));
console.log(str('aaa'));

