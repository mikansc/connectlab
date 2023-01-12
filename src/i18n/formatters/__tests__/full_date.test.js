import { formatDate } from "../full_date";

const DATE_DEFAULT = "2023-01-01T12:00:00Z"; // 12:00 -> workaround de timezone

describe("formatDate", () => {
  it("should format date in pt-BR", () => {
    const date = new Date(DATE_DEFAULT);
    const result = formatDate(date, "pt-BR");
    expect(result).toBe("domingo, 1 de janeiro de 2023");
  });

  it("should format date in en-US", () => {
    const date = new Date(DATE_DEFAULT);
    const result = formatDate(date, "en-US");
    expect(result).toBe("Sunday, January 1, 2023");
  });

  it("should format date in es-ES", () => {
    const date = new Date(DATE_DEFAULT);
    const result = formatDate(date, "es-ES");
    expect(result).toBe("domingo, 1 de enero de 2023");
  });
});
