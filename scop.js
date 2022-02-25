/*
JavaScript has 3 types of scope:

Block scope
Function scope
Global scope

Global Laking
*/

function add(a, b) {
    const sum = a + b;
    return sum;
}
const total = add(2, 9);
console.log(sum);

const item = 25;
function add(a, b) {
    const sum = a + b;
    return sum;
}
const total = add(2, 9);
console.log(item);

const item = 25;
function add(a, b) {
    const sum = a + b;
    if (sum > 10) {
        const mood = "happy";
        console.log(mood);
    }
    return sum;
}
const total = add(20, 9);


