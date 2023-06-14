import { render, screen } from "@testing-library/react";
// import { rest } from "msw";
// import { setupServer } from "msw/node";

// component to test
// import App from '../App';
import App from "../../../App";

test("render Menu buttons", () => {
  render(<App />);
  // const appheader = screen.getByText(/Albion Salvage Flipper/i);
  // expect(appheader).toBeInTheDocument();
  expect(screen.getAllByText("Dashboard")).toBeTruthy();
});
