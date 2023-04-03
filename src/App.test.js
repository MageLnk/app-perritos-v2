import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("Given App component", () => {
  test("It should exist", () => {
    const test = render(<App />);
    console.log("Test", test);
  });
});
