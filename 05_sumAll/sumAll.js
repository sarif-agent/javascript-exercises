const sumAll = function (value1, value2) {
  if (value1 < 0 || value2 < 0) return "ERROR";
  if (!Number.isInteger(value1) || !Number.isInteger(value2)) return "ERROR";
  let n1 = Math.min(value1, value2);
  let n2 = Math.max(value1, value2);
  let sum = 0;

  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
};


// Do not edit below this line
module.exports = sumAll;
