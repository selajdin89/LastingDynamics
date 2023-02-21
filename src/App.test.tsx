import App from "./App";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "./store";

describe("App", () => {
  it("renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
