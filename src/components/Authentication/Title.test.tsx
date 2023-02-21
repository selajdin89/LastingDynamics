import { render, screen } from "@testing-library/react";
import Title from "./Title";

test("renders the whole component", () => {
  render(<Title textTitle={""} role={""} />);
  const componentElement = screen.getByRole("columnheader");
  expect(componentElement).toBeInTheDocument();
});
