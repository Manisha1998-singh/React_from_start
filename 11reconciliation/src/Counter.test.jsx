import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom"; // <-- this adds toHaveTextContent matcher
import App from "./App";

test("increment count by 3 when button is Clicked", () => {
  render(<App />);

  // Case 1: Check initial Value

  const counter = screen.getByTestId("counter");

  // Case 2: Check initial value
  expect(counter).toHaveTextContent("number: 3");

  //case 3: Click button
  const button = screen.getByText("Click Me");

  fireEvent.click(button);

  // Case 4: Check initial value
  expect(counter).toHaveTextContent("number: 6");
  // Case 5: Again button Click
  fireEvent.click(button);
  expect(counter).toHaveTextContent("number: 9");
});
