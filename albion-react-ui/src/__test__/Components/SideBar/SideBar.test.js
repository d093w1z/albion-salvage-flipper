import { render, screen, waitFor } from "@testing-library/react";
// import { rest } from "msw";
// import { setupServer } from "msw/node";

// import App from "../../../App";
import { BrowserRouter } from "react-router-dom";
import SideBar from "../../../Components/SideBar";

describe("render menu buttons", () => {
  test("render Menu button dashboard", async () => {
    render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getAllByText("Dashboard")).toBeTruthy();
    });
  });
});
