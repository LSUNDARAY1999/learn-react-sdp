import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("counter increments", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
