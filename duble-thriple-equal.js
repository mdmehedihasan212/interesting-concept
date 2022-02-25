/*
double equals (==) will perform a type conversion when comparing two things, and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0);

triple equals (===) will do the same comparison as double equals (including the special handling for NaN, -0, and +0) but without type conversion; if the types differ, false is returned.
*/

const a = 2;
const b = '2';
if (a == b) {
    console.log('true');
}
else {
    console.log('false');
}

const x = 2;
const y = '2';
if (x === y) {
    console.log('true');
}
else {
    console.log('false');
}