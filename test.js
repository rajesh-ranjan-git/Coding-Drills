let arr = [1, 2, 6, 4, 345, 8, 45, 3, 2, 345, 88];

let countDistinct = arr.reduce(
  (prev, curr) =>
    curr in prev ? { ...prev, [curr]: prev[curr] + 1 } : { ...prev, [curr]: 1 },
  {}
);

let sum = arr.reduce((prev, curr) => prev + curr);

let sumOfOddEven = arr.reduce(
  (prev, curr) =>
    curr % 2 === 0
      ? { ...prev, even: prev.even + curr }
      : { ...prev, odd: prev.odd + curr },
  { even: 0, odd: 0 }
);

let countOfOddEven = arr.reduce(
  (prev, curr) =>
    curr % 2 === 0
      ? { ...prev, even: prev.even + 1 }
      : { ...prev, odd: prev.odd + 1 },
  { even: 0, odd: 0 }
);

console.log(countDistinct);
console.log(sum);
console.log(sumOfOddEven);
console.log(countOfOddEven);
