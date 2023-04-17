// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import axios from "axios";

export const mockedAxios = jest.mock("axios") as unknown as jest.Mocked<
  typeof axios
>;