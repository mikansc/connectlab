import { render, screen } from "@testing-library/react";
import { Image } from "./Image";

describe("@atom/Image", () => {
  it("should render an img tag", () => {
    render(<Image />);
    const image = screen.getByTestId("app-image");
    expect(image.tagName).toBe("IMG");
  });

  it("should receive src and alt props", () => {
    render(<Image src="src" alt="alt" />);
    const image = screen.getByTestId("app-image");
    expect(image).toHaveAttribute("src", "src");
    expect(image).toHaveAttribute("alt", "alt");
  });
});
