import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test if the CostCalculator is rendered", () => {
  render(<App />);
  const costCalculatorText = screen.getByText(/VM Cost Calculator/i);
  expect(costCalculatorText).toBeInTheDocument();
});
