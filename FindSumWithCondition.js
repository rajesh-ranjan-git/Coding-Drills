const arr = [10, 17, 61, 54, 44, 32, 39, 23];

const result = arr.reduce((prev, curr) => (curr < 40 ? prev + curr : prev), 0);

console.log(result);
