export function formatTemperature(temperature, lng, options) {
  const { unit } = options;
  if (unit === "celsius") {
    temperature = toCelsius(temperature);
  }

  if (unit === "farenheit") {
    temperature = toFarenheit(temperature);
  }

  return temperature;
}

function toCelsius(farenheit) {
  return (5 / 9) * (farenheit - 32) + "°C";
}

function toFarenheit(celsius) {
  return (celsius * 9) / 5 + 32 + "°F";
}
