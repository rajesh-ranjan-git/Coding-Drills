const arr = ["a", "b", "c", "c", "d", "e", "b", "f", "a", "c"];
const temp = {};

const res = arr.reduce(
  (prev, curr) =>
    curr in prev ? { ...prev, [curr]: prev[curr] + 1 } : { ...prev, [curr]: 1 },
  {}
);

console.log(res);
