import { render, screen } from "@testing-library/react";
import StatCard from "../../../Components/StatCard";

test("render statistics card empty", () => {
  render(<StatCard dataTestId="statcardtest" />);
  expect(screen.getByTestId("statcardtest").textContent).toBe("0");
});
