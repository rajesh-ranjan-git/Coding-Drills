const familyMembers = [
  {
    name: "Arvind",
    age: 54,
  },
  {
    name: "Rani",
    age: 49,
  },
  {
    name: "Rajeev",
    age: 30,
  },
  {
    name: "Rajesh",
    age: 28,
  },
  {
    name: "Rahul",
    age: 24,
  },
  {
    name: "Swati",
    age: 24,
  },
  {
    name: "Swara",
    age: 2,
  },
];

const avgOfAge =
  familyMembers.reduce((prev, curr) => prev + curr.age, 0) /
  familyMembers.length;

console.log(avgOfAge);
