import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import Error404PageContainer from "./";

describe("Given App component", () => {
  afterEach(() => {});
  test("It should render without a problem", () => {
    // Arrange
    const testId = "error-404-page-container";

    render(<Error404PageContainer />);

    // Act
    const error404TestId = screen.getByTestId(testId);

    //Assert
    expect(error404TestId).toBeTruthy();
  });
});
