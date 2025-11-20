"use strict";
const apiData = ["25","true","false","NaN"," ","100px","3.14",null,undefined];

let validNums = [];
let invalidNums = [];

for (let v of apiData) {
  let n = Number(v);
  let b = Boolean(v);
  let s = String(v);

  if (!isNaN(n) && v !== " " && v !== "100px") validNums.push(n);
  else invalidNums.push(v);

  console.log({value:v, number:n, boolean:b, string:s});
}

console.log("Valid:", validNums);
console.log("Invalid:", invalidNums);
