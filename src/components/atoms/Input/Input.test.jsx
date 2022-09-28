import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@utils";
import { vi } from "vitest";
import { Input } from "./Input";

describe("@atom/Input", () => {
  it("should render a text input tag", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input.tagName).toBe("INPUT");
    expect(input.type).toBe("text");
  });

  it("should render with default styles when hasError=false", () => {
    render(<Input hasError={false} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle("border: 1px solid rgba(0,0,0,0.1)");
  });

  it("should render an error input when hasError=true", () => {
    render(<Input hasError={true} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveStyle("border: 2px solid #F44336");
  });

  it("should receive onChange prop correctly", async () => {
    const mockFn = vi.fn();
    render(<Input onChange={mockFn} />);
    const input = screen.getByRole("textbox");
    const user = userEvent.setup();
    await user.type(input, "hi");
    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("should receive value prop correctly", () => {
    render(<Input value="test" />);
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("test");
  });

  it("should receive type prop correctly", () => {
    render(<Input type="email" />);
    const input = screen.getByRole("textbox");
    expect(input.type).toBe("email");
  });
});
