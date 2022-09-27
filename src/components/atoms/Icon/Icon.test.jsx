import { screen } from "@testing-library/react";
import { render } from "@utils";
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
});
