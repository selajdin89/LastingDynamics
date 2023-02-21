import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";
import ValidateEmail from "./ValidateEmail";

const component = (
  <BrowserRouter>
    <Provider store={store}>
      <ValidateEmail />
    </Provider>
  </BrowserRouter>
);

test("username input should be rendered", () => {
  render(component);

  const userInputEl = screen.getByPlaceholderText(/Insert your email/i);
  expect(userInputEl).toBeInTheDocument();
});

test("email field should be empty", () => {
  render(component);

  const userInputEl = screen.getByPlaceholderText(/Insert your email/i);
  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect((userInputEl as HTMLInputElement).value).toBe(testValue);
});
