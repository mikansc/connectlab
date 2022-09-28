import { screen } from "@testing-library/react";
import { render } from "@test-utils";
import { Logo } from "./Logo";

describe("@atom/Logo", () => {
  it("should render an img tag", () => {
    render(<Logo />);
    const logo = screen.getByTestId("app-logo");
    expect(logo.firstElementChild.tagName).toBe("IMG");
  });

  it("should have a src path", () => {
    render(<Logo />);
    const logo = screen.getByTestId("app-logo");
    expect(logo.firstElementChild.src).toBeTruthy();
  });

  it("should have the correct alt text", () => {
    render(<Logo />);
    const logoImg = screen.getByAltText("Connect Lab Logo");
    expect(logoImg).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    render(<Logo />);
    expect(screen.getByTestId("app-logo")).toMatchInlineSnapshot(`
      <div
        class="sc-bczRLJ jQAHfP"
        data-testid="app-logo"
      >
        <img
          alt="Connect Lab Logo"
          src="/src/components/atoms/Logo/logo.png"
        />
      </div>
    `);
  });
});
