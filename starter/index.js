import { data } from "./data.js";

let totalProfSum = 0;
var greatInc = 0;
var greatDecr = 0;

let profDiffSum = 0;
let prevProf = 0;
for (let i = 0; i < data.length; i++) {
  let currProff = data[i][1];
  totalProfSum += currProff;
  profDiffSum += currProff - prevProf;

  if (currProff - prevProf > greatInc) {
    greatInc = currProff;
  } else if (currProff - prevProf < greatDecr) {
    greatDecr = currProff;
  }

  prevProf = currProff;
}

console.log("Financial Analysis");
console.log("===================");
console.log("Total Months: " + data.length);
console.log("Total: " + totalProfSum);
console.log("Average  Change: " + (profDiffSum / data.length).toFixed(2));
console.log("Greatest Increase in Profits: " + data.filter(month => month[1] == greatInc));
console.log("Greatest Decrease in Profits: " + data.filter(month => month[1] == greatDecr));
