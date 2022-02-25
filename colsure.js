function stopClock() {
    let counter = 0;
    return function clock() {
        counter++;
        return counter;
    }

}
const clockResult = stopClock();
console.log(clockResult());
console.log(clockResult());
console.log(clockResult());
console.log(clockResult());