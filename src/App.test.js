import React from "react";
import {
  render,
  screen,
  fireEvent,
  rendeeIntoDocument,
  cleanup,
  getByLabelText,
} from "@testing-library/react";
import App from "./App";
import { renderIntoDocument } from "react-dom/test-utils";
afterEach(cleanup);

test("Submits and clears data", () => {
  const onFormSubmit = jest.fn();
  const { getByLabelText, getByText } = renderIntoDocument(
    <App onSubmit={onFormSubmit} />
  );
  getByLabelText(/name/i).value = "Pedro";
  getByLabelText(/email/i).value = "pjdazeux@gmail.com";
  getByText(/submit/i).click();
  expect(onFormSubmit).toHaveBeenCalledTimes(1);

});
