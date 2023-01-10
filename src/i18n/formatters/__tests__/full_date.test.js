import { formatDate } from "../full_date";

describe("formatDate", () => {
  it("should format date in pt-BR", () => {
    const date = new Date("2023-01-02T00:00:00.000Z");
    const result = formatDate(date, "pt-BR");
    expect(result).toEqual("domingo, 1 de janeiro de 2023");
  });

  it("should format date in en-US", () => {
    const date = new Date("2023-01-02T00:00:00.000Z");
    const result = formatDate(date, "en-US");
    expect(result).toEqual("Sunday, January 1, 2023");
  });

  it("should format date in es-ES", () => {
    const date = new Date("2023-01-02T00:00:00.000Z");
    const result = formatDate(date, "es-ES");
    expect(result).toEqual("domingo, 1 de enero de 2023");
  });
});
