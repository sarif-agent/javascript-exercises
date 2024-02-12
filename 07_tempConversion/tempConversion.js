const convertToCelsius = function (fahrenheit) {

  let celsius = (fahrenheit - 32) * (5 / 9);
  let celsiusRounded = Math.round(celsius * 10) / 10;
  return (celsiusRounded);
};

const convertToFahrenheit = function (celsius) {

  let fahrenheit = (celsius * 9 / 5) + 32;
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return (fahrenheitRounded);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
