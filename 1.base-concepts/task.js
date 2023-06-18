"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4*a*c;
  if (discriminant < 0) {
    arr == 0;
  } else if (discriminant == 0) {
    arr.push(-b / (2*a));
  } else if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-b - Math.sqrt(discriminant) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);
  let percentMonth = (percent / 100) / 12;
  let summCredit = amount - contribution;
  let summMonth = summCredit * (percentMonth + (percentMonth / (Math.pow(1 + percentMonth, countMonths) - 1)));
  let summ = summMonth * countMonths;
  return Number(summ.toFixed(2));
}