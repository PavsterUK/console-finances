import { data } from "./data.js";

let totalMonths = data.length;
let profDiffsList = [];
let totalProfSum = 0;
let prevProf = 0;

for (let i = 0; i < totalMonths; i++) {
  let currProff = data[i][1];
  totalProfSum += currProff;
  profDiffsList.push(currProff - prevProf);
  prevProf = currProff;
}

let avgProffDiff = (
  profDiffsList.reduce((a, b) => a + b) / profDiffsList.length
).toFixed(2);


console.log(totalProfSum);
console.log(avgProffDiff);
console.log(profDiffsList);
console.log(highestIndex);
console.log(lowestIndex);
