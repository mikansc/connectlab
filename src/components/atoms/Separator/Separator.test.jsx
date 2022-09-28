import { screen } from "@testing-library/react";
import { render } from "@utils";
import { Separator } from "./Separator";

describe("@atom/Separator", () => {
  it("should match snapshot", () => {
    render(<Separator />);
    expect(screen.getByTestId("app-hr")).toMatchInlineSnapshot(`
      <hr
        class="sc-bczRLJ dXWLI"
        data-testid="app-hr"
      />
    `);
  });
});
