import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import App from "./App";

describe("Given App component", () => {
  afterEach(() => {});

  test("It should render", () => {
    // Arrange
    const testId = "app-container";
    render(<App />);

    // Act
    const appTestId = screen.getByTestId(testId);

    // Assert
    expect(appTestId).toBeTruthy();
  });
});
