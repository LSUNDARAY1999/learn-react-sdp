import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("shows initial count as 0", () => {
    render(<Counter />);

    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("0");
  });

  test("increments count on button click", () => {
    render(<Counter />);

    const button = screen.getByRole("button", {
      name: /increment/i,
    });

    fireEvent.click(button);

    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("1");
  });
});
