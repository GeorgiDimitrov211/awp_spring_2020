function sum(a,b) {
    console.trace("Hello from sum.");
    return a + b;
}

function multiple(x,y) {
    let result = 0;
    for (let i = 0; i < y; i++) {
        result = sum(result,x);
    }
    return result;
}

console.log("2 * 6:", multiple(2,6));
console.log("3 * 3:", multiple(3,3));
