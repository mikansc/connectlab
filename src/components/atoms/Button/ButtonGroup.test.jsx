import { screen } from "@testing-library/react";
import { render } from "@test-utils";
import { ButtonGroup } from "./ButtonGroup";

describe("@atom/ButtonGroup", () => {
  it("should render with children", () => {
    render(<ButtonGroup>text</ButtonGroup>);
    expect(screen.getByText(/text/)).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    render(<ButtonGroup>Button Group</ButtonGroup>);
    expect(screen.getByText(/Button Group/)).toMatchInlineSnapshot(`
      <div
        class="sc-bczRLJ jCYKrb"
      >
        Button Group
      </div>
    `);
  });
});
