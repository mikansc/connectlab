import { screen } from "@testing-library/react";
import { render } from "@test-utils";
import { Button } from "./Button";

describe("@atom/Button", () => {
  it("should render button with children", () => {
    render(<Button>text</Button>);
    expect(screen.getByText(/text/)).toBeInTheDocument();
  });

  it("should be disabled when disable=true", () => {
    render(<Button disabled>text</Button>);
    const button = screen.getByText(/text/);
    expect(button).toHaveAttribute("disabled");
  });

  it("should be full width when fullWidth=true", () => {
    render(<Button fullWidth>text</Button>);
    const button = screen.getByText(/text/);
    expect(button).toHaveStyle("width: 100%;");
  });

  it("should be auto width when fullWidth=false", () => {
    render(<Button fullWidth={false}>text</Button>);
    const button = screen.getByText(/text/);
    expect(button).toHaveStyle("width: auto;");
  });
});
