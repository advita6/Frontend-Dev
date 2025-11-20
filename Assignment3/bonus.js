"use strict";
const employees = [
 {name:"Amit",salary:"45000",years:"5"},
 {name:"Sara",salary:"38000",years:"2"},
 {name:"Kiran",salary:"52000",years:"7"}
];

for (let emp of employees) {
  try {
    let sal = Number(emp.salary);
    let yrs = Number(emp.years);
    if (isNaN(sal) || isNaN(yrs)) throw "Invalid data";
    let bonus = yrs > 3 ? sal*0.1 : sal*0.05;
    console.log(`${emp.name} | Salary: ${sal} | Years: ${yrs} | Bonus: ${bonus}`);
  } catch(e) {
    console.log("Error:", e);
  }
}
