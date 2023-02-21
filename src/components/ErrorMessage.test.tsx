import React from "react";
import { render } from "enzyme";
import ErrorMessage from "./ErrorMessage";

it("Should render an error message", () => {
  const wrapper = render(<ErrorMessage />);

  expect(wrapper.find("h6").text()).toEqual(
    "Please make sure you have the correct email or password"
  );
});
