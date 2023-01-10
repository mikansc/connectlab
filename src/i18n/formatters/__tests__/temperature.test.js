import { formatTemperature } from "../temperature";

describe("formatTemperature", () => {
  it("should format temperature in celsius", () => {
    const temperature = 32;
    const result = formatTemperature(temperature, "pt-BR", {
      unit: "celsius",
    });
    expect(result).toEqual("0°C");
  });

  it("should format temperature in farenheit", () => {
    const temperature = 0;
    const result = formatTemperature(temperature, "pt-BR", {
      unit: "farenheit",
    });
    expect(result).toEqual("32°F");
  });
});
