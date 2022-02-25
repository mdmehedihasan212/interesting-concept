/*
javaScript has seven type of data
# primitive data
1. number
2. string
3. boolean
4. undifine
5. null
6. symbol
# inprimitive data
7. object 
*/

let a = 'jon';
let b = a;
console.log(a, b);
a = 'don'
console.log(a, b);

const x = { name: 'web developer' };
const y = x;
// console.log(x, y);
x.name = 'font end developer';
console.log(x, y);