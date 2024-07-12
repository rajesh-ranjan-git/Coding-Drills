const arr = [1, 2, 3, 4, 5, 6];

// const OddEvenObj = {
//   even: 0,
//   odd: 0,
// };

// arr.filter(
//   (num) => (num % 2 === 0 ? (OddEvenObj.even += num) : (OddEvenObj.odd += num)),
//   0
// );

const OddEvenObj = arr.reduce(
  (prev, curr) =>
    curr % 2 === 0
      ? { ...prev, even: prev.even + curr }
      : { ...prev, odd: prev.odd + curr },
  { even: 0, odd: 0 }
);

console.log(OddEvenObj);
