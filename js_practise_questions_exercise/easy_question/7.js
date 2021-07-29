// # write a arrow function 
[2,3,5,7,11].forEach(n => global['add' + n] = (v) => n+v);