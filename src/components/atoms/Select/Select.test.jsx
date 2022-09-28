import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "@test-utils";
import { vi } from "vitest";
import { Select } from "./Select";

describe("@atom/Select", () => {
  it("should render a select tag", () => {
    render(<Select />);
    const inputSelect = screen.getByRole("combobox");
    expect(inputSelect.tagName).toBe("SELECT");
  });

  it("should render with default styles when hasError=false", () => {
    render(<Select hasError={false} />);
    const inputSelect = screen.getByRole("combobox");
    expect(inputSelect).toHaveStyle("border: 1px solid rgba(0,0,0,0.1)");
  });

  it("should render an error input when hasError=true", () => {
    render(<Select hasError={true} />);
    const inputSelect = screen.getByRole("combobox");
    expect(inputSelect).toHaveStyle("border: 2px solid #F44336");
  });

  it("should render options", async () => {
    render(
      <Select>
        <option />
      </Select>,
    );
    const inputSelect = screen.getByRole("combobox");
    expect(inputSelect.firstChild).not.toBeNull();
    expect(inputSelect.firstChild.tagName).toBe("OPTION");
  });

  it("should receive onChange prop correctly", async () => {
    const mockFn = vi.fn();
    render(
      <Select onChange={mockFn}>
        <option value="first">First</option>
      </Select>,
    );
    const inputSelect = screen.getByRole("combobox");
    const user = userEvent.setup();
    await user.selectOptions(inputSelect, ["first"]);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
