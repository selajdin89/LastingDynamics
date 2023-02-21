import React from "react";
import { render } from "enzyme";
import AccountVerified from "./AccountVerified";
import { BrowserRouter } from "react-router-dom";

const component = (
  <BrowserRouter>
    <AccountVerified />
  </BrowserRouter>
);

it("Should render an account ready message", () => {
  const wrapper = render(component);

  expect(wrapper.find("h3").text()).toEqual("Your account is ready");
});

it("Should render an link for the login page", () => {
  const wrapper = render(component);

  expect(wrapper.find("h4").text()).toEqual("Go to login page");
});
