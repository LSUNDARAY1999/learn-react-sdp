// src/components/Counter.test.jsx

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders initial count as 0", () => {
    render(<Counter />);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test("increments count when + button is clicked", async () => {
    render(<Counter />);
    const user = userEvent.setup();

    await user.click(screen.getByText("+"));
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  test("decrements count when - button is clicked", async () => {
    render(<Counter />);
    const user = userEvent.setup();

    await user.click(screen.getByText("-"));
    expect(screen.getByText(/count: -1/i)).toBeInTheDocument();
  });

  test("resets count when Reset button is clicked", async () => {
    render(<Counter />);
    const user = userEvent.setup();

    await user.click(screen.getByText("+"));
    await user.click(screen.getByText("Reset"));
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });
});
