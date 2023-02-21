import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Objectives from "./Objectives";

test("Render upgrade button", () => {
  render(
    <BrowserRouter>
      <Objectives />
    </BrowserRouter>
  );

  const upgrade = screen.getByText(/upgrade/i);
  expect(upgrade).toBeInTheDocument();
});
