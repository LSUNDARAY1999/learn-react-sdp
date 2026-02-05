import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom";

import Counter from "./Counter";

describe("Counter Component", () => {

  test("initial count is 0", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  test("count increments on button click", () => {
    render(<Counter />);
    const button = screen.getByText("Increment");

    fireEvent.click(button);

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

});
