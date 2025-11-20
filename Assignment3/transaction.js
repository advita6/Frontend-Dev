"use strict";
const transactions = [
 {id:1,amount:2000},
 {id:2,amount:-500},
 {id:3},
 null
];

let valid = [];
let invalid = [];

for (let t of transactions) {
  try {
    if (t === null) throw "NullEntry";
    if (!("id" in t) || !("amount" in t)) throw "MissingField";
    if (t.amount < 0) throw "NegativeAmount";
    valid.push(t);
  } catch(err) {
    invalid.push({transaction:t,error:err});
  }
}

console.log("Valid:", valid);
console.log("Invalid:", invalid);
console.log("Success:", valid.length, "Failed:", invalid.length);
