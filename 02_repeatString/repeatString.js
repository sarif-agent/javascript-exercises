const repeatString = function (str, num) {
  if (num < 0) return 'ERROR';
  let message = "";
  for (i = 0; i < num; i++) {
    message += str;
  }
  return message;
};

// Do not edit below this line
module.exports = repeatString;

// Create a variable to hold the string you're going to return