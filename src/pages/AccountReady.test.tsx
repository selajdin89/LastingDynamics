import AccountReady from "./AccountReady";
import { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";

describe("AccaountReady", () => {
  it("renders without crashing", () => {
    shallow(<AccountReady />);
  });
});
