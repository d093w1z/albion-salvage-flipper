import { render, screen } from "@testing-library/react";
// import { rest } from "msw";
// import { setupServer } from "msw/node";

// component to test
// import App from '../App';
import AppFooter from "../../../Components/AppFooter";

test("render appfooter text", () => {
  render(<AppFooter />);
  const appheader = screen.getByText(/AppFooter/i);
  expect(appheader).toBeInTheDocument();
});
