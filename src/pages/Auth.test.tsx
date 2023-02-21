import React from "react";
import { shallow } from "enzyme";
import { render, renderHook, screen } from "@testing-library/react";
import Auth from "./Auth";

describe("Auth", () => {
  it("renders without crashing", () => {
    shallow(<Auth />);
  });
});
