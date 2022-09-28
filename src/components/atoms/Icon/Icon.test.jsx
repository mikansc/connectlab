import { screen } from "@testing-library/react";
import { render } from "@test-utils";
import { Icon } from "./Icon";

describe("@atom/Icon", () => {
  it("should render icon properly", () => {
    render(<Icon />);
    screen.getByTestId("app-icon");
  });

  it("should match color property", () => {
    render(<Icon color="red" />);
    const icon = screen.getByTestId("app-icon");
    expect(icon).toHaveStyle("color: red;");
  });

  it("should match size property", () => {
    render(<Icon size="1rem" />);
    const icon = screen.getByTestId("app-icon");
    expect(icon).toHaveStyle("font-size: 1rem;");
  });

  it("should inherit size when no size is specified", () => {
    render(<Icon size={undefined} />);
    const icon = screen.getByTestId("app-icon");
    expect(icon).toHaveStyle("font-size: inherit;");
  });

  it("should match name properly", () => {
    render(<Icon name="test" />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("should render with question_mark if no name is provided", () => {
    render(<Icon name={undefined} />);
    expect(screen.getByText("question_mark")).toBeInTheDocument();
  });
});
