import { screen } from "@testing-library/react";
import { render } from "@utils";
import { Label } from "./Label";

describe("@atom/Label", () => {
  it("should render a label tag and its children", () => {
    render(<Label>test</Label>);
    const label = screen.getByText(/test/);
    expect(label.tagName).toBe("LABEL");
  });

  it("should render a label with htmlFor property", () => {
    render(<Label htmlFor="atest">test</Label>);
    const label = screen.getByText(/test/);
    expect(label).toHaveAttribute("for", "atest");
  });

  it("should match color property", () => {
    render(<Label color="red">test</Label>);
    const label = screen.getByText(/test/);
    expect(label).toHaveStyle("color: red;");
  });

  it("should render with default styles when hasError=false", () => {
    render(<Label hasError={false}>test</Label>);
    const label = screen.getByText(/test/);
    expect(label).toHaveStyle("color: #FF8818;");
  });

  it("should render an error input when hasError=true", () => {
    render(<Label hasError={true}>test</Label>);
    const label = screen.getByText(/test/);
    expect(label).toHaveStyle("color: #F44336;");
  });
});
