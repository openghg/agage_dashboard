import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import ControlPanel from "./ControlPanel";

const testKeys = { AAA: { test_a: false, test_b: false, test_c: false } };

describe("Test ControlPanel", () => {
  test("Check correct text rendered", () => {
    const fn = jest.fn();

    render(<ControlPanel dataKeys={testKeys} dataSelector={fn} />);

    expect(screen.getByText("LondonGHG")).toBeInTheDocument();
    expect(screen.getByText("A new system for estimating London's emissions")).toBeInTheDocument();
  });
  
  test("Check ticking and clicking plot", () => {
    const fn = jest.fn();

    render(<ControlPanel dataKeys={testKeys} dataSelector={fn} />);

    const checkboxA = screen.getByRole("checkbox", { name: /test_a/i });
    const checkboxB = screen.getByRole("checkbox", { name: /test_b/i });
    const checkboxC = screen.getByRole("checkbox", { name: /test_c/i });

    expect(checkboxA).not.toBeChecked();
    expect(checkboxB).not.toBeChecked();
    expect(checkboxC).not.toBeChecked();

    userEvent.click(checkboxA);
    userEvent.click(checkboxB);
    userEvent.click(checkboxC);

    expect(checkboxA).toBeChecked();
    expect(checkboxB).toBeChecked();
    expect(checkboxC).toBeChecked();

    userEvent.click(screen.getByRole("button", { name: /plot/i }));

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
