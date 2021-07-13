let createif = (str) => str.startsWith('if') ? str : `if ${str}`;

console.log(createif('if else'));
console.log(createif('else'));
