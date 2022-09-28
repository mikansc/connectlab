import { screen } from "@testing-library/react";
import { render } from "@utils";
import { Pill } from "./Pill";

describe("@atom/Pill", () => {
  it("should render with children", () => {
    render(<Pill>text</Pill>);
    expect(screen.getByText(/text/)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    render(<Pill>Pill Content</Pill>);
    expect(screen.getByText(/Pill Content/)).toMatchInlineSnapshot(`
      <span
        class="sc-bczRLJ ivrWbK"
      >
        Pill Content
      </span>
    `);
  });
});
