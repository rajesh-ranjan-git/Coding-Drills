const employees = [
  {
    name: "Rajesh",
    experience: 6,
  },
  {
    name: "Prakash",
    experience: 5,
  },
  {
    name: "Sayantanee",
    experience: 6,
  },
  {
    name: "Gurjit",
    experience: 2,
  },
  {
    name: "Naman",
    experience: 1,
  },
  {
    name: "Abhishek",
    experience: 3,
  },
];

// const seniorEmployees = [];

// for (let emp of employees) {
//   emp.experience >= 3 ? seniorEmployees.push(emp.name) : null;
// }

// const seniorEmployees = employees
//   .filter(emp) => (emp.experience >= 3 ? emp.name : null) // It returns array of objects
//   // emp.experience >= 3 && emp.name // It also returns array of objects, not our requirement.
//   ();

const seniorEmployees = employees
  .filter((emp) => emp.experience >= 3)
  .map((emp) => emp.name);

console.log(seniorEmployees);
