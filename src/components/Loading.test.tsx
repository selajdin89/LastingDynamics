import { CircularProgress } from "@mui/material";
import { shallow } from "enzyme";
import Loading from "./Loading";

describe("<Loading />", () => {
  it("should render a CircularProgress", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.find(CircularProgress)).toHaveLength(1);
  });
});
