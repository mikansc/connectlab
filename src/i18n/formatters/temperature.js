export function formatTemperature(temperature, lng, options) {
  const { unit } = options;
  if (unit === "farenheit") {
    return `${temperature}°F`;
  } else {
    return `${temperature}°C`;
  }
}
