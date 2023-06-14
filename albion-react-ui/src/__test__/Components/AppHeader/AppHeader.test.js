import { render, screen } from "@testing-library/react";
// import { rest } from "msw";
// import { setupServer } from "msw/node";

// component to test
// import App from '../App';
import AppHeader from "../../../Components/AppHeader";

test("render appheader text", () => {
  render(<AppHeader />);
  const appheader = screen.getByText(/Albion Salvage Flipper/i);
  expect(appheader).toBeInTheDocument();
});
