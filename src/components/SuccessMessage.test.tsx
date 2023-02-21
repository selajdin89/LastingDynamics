import React from "react";
import { render } from "enzyme";
import SuccessMessage from "./SuccessMessage";

it("Should render an error message", () => {
  const wrapper = render(<SuccessMessage />);

  expect(wrapper.find("h5").text()).toEqual(
    "Well done, we'll email you with a reset link."
  );
});
