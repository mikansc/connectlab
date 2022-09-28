import { screen } from "@testing-library/react";
import { render } from "@utils";
import { Paper } from "./Paper";

describe("@atom/Paper", () => {
  it("should render with children", () => {
    render(<Paper>text</Paper>);
    expect(screen.getByText(/text/)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    render(<Paper>Paper Content</Paper>);
    expect(screen.getByText(/Paper Content/)).toMatchInlineSnapshot(`
      <div
        class="sc-bczRLJ jSqGIy"
      >
        Paper Content
      </div>
    `);
  });
});
