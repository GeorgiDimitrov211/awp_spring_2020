async function sumAsync(a, b) {
    return (a + b);
}

sumAsync(2,2).then(result => console.log(result));
const result = async _ => await sumAsync(2,2);
console.log(result);

// Original style