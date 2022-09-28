import { screen } from "@testing-library/react";
import { render } from "@utils";
import { Spinner } from "./Spinner";

describe("@atom/Separator", () => {
  it("should match snapshot", () => {
    render(<Spinner />);
    expect(screen.getByTestId("app-spinner")).toMatchInlineSnapshot(`
      <div
        class="sc-bczRLJ ixkRUT"
        data-testid="app-spinner"
      />
    `);
  });
});
