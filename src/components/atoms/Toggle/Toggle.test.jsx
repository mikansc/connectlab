import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@test-utils";
import { vi } from "vitest";
import { Toggle } from "./Toggle";

describe("@atom/Input", () => {
  it("should render a checkbox input tag", () => {
    render(<Toggle />);
    const input = screen.getByRole("checkbox");
    expect(input).toBeInTheDocument();
  });

  it("should receive onChange prop correctly", async () => {
    const mockFn = vi.fn();
    render(<Toggle onChange={mockFn} />);
    const input = screen.getByRole("checkbox");
    const user = userEvent.setup();
    await user.click(input);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should receive value prop correctly", () => {
    render(<Toggle checked />);
    const input = screen.getByRole("checkbox");
    expect(input.checked).toBe(true);
  });
});
