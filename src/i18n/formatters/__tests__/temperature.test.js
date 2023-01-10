import { formatTemperature } from "../temperature";

describe("formatTemperature", () => {
  it("should format temperature in celsius", () => {
    const temperature = 50;
    const result = formatTemperature(temperature, "pt-BR", {
      unit: "celsius",
    });
    expect(result).toEqual("50°C");
  });

  it("should format temperature in farenheit", () => {
    const temperature = 50;
    const result = formatTemperature(temperature, "pt-BR", {
      unit: "farenheit",
    });
    expect(result).toEqual("50°F");
  });
});
