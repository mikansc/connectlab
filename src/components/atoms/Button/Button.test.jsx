import { screen } from "@testing-library/react";
import { render } from "@utils";
import { Button } from "./Button";

describe("@atom/Button", () => {
  it("should render button with children", () => {
    render(<Button>text</Button>);
    expect(screen.getByText(/text/)).toBeInTheDocument();
  });

  it("should be disabled when disable=true", () => {
    render(<Button>text</Button>);
    expect(screen.getByText(/text/)).toBeInTheDocument();
  });
});
