const convertToCelsius = function(temp) {
  let degreesFahrenheit = (temp - 32) / 1.8;
  if (Number.isInteger(degreesFahrenheit)){
    return degreesFahrenheit;
  }
  return Number(degreesFahrenheit.toFixed(1));
  // ou +degreesFahrenheit.toFixed(1)
};

const convertToFahrenheit = function(temp) {
  let degreesCelsius = (temp * 1.8) + 32;
  if (Number.isInteger(degreesCelsius)){
    return degreesCelsius;
  }
  return +degreesCelsius.toFixed(1);  
  // ou Number(degreesCelsius.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
