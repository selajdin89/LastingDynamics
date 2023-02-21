import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store";
import LoginForm from "./LoginForm";

const loginComponent = (
  <BrowserRouter>
    <Provider store={store}>
      <LoginForm />
    </Provider>
  </BrowserRouter>
);

test("username input should be rendered", () => {
  render(loginComponent);

  const userInputEl = screen.getByPlaceholderText(/Insert your email/i);
  expect(userInputEl).toBeInTheDocument();
});

test("username input should be rendered", () => {
  render(loginComponent);

  const passwordInputEl = screen.getByPlaceholderText(/Password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(loginComponent);

  const buttonEl = screen.getByRole(/button/i);
  expect(buttonEl).toBeInTheDocument();
});

test("email field should be empty", () => {
  render(loginComponent);

  const userInputEl = screen.getByPlaceholderText(/Insert your email/i);
  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect((userInputEl as HTMLInputElement).value).toBe(testValue);
});

test("password field should be empty", () => {
  render(loginComponent);

  const passwordInputEl = screen.getByPlaceholderText(/Password/i);
  const testValue = "test";

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect((passwordInputEl as HTMLInputElement).value).toBe(testValue);
});
