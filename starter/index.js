import { data } from "./data.js";

let totalProfSum = 0;
var grtInc = 0;
var grtDecr = 0;

let profDiffSum = 0;
let prevProf = 0;
for (let i = 0; i < data.length; i++) {
  let currProff = data[i][1];
  totalProfSum += currProff;
  profDiffSum += currProff - prevProf;

  if (currProff - prevProf > grtInc) {
    grtInc = currProff;
  } else if (currProff - prevProf < grtDecr) {
    grtDecr = currProff;
  }
  prevProf = currProff;
}

console.log((profDiffSum / data.length).toFixed(2));
console.log(grtInc);
console.log(grtDecr);
