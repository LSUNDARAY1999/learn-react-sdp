import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("shows initial count as 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  test("increments count on click", () => {
    render(<Counter />);
    fireEvent.click(
      screen.getByRole("button", { name: /increment/i })
    );
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });
});
