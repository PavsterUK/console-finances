import { data } from "./data.js";

let totalProfSum = 0;
let greatInc = 0;
let greatDecr = 0;
let profDiffSum = 0;
let prevProf = 0;

for (let i = 0; i < data.length; i++) {
  let currProf = data[i][1];
  totalProfSum += currProf;
  profDiffSum += currProf - prevProf;

  if (currProf - prevProf > greatInc) {
    greatInc = currProf;
  } else if (currProf - prevProf < greatDecr) {
    greatDecr = currProf;
  }

  prevProf = currProf;
}

console.log("Financial Analysis");
console.log("===================");
console.log("Total Months: " + data.length);
console.log("Total: $" + totalProfSum);
console.log("Average  Change: " + (profDiffSum / data.length).toFixed(2));
console.log("Greatest Increase in Profits: " + data.filter(month => month[1] == greatInc));
console.log("Greatest Decrease in Profits: " + data.filter(month => month[1] == greatDecr));
