import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import Error404PageContainer from "./";

describe("Given App component", () => {
  afterEach(() => {});
  test("It should render without a problem", () => {
    // Arrange
    const labelTextName = "error-404-page-container";

    render(<Error404PageContainer />);

    // Act
    const getLabelError404PageText = screen.getByLabelText(labelTextName);

    //Assert
    expect(getLabelError404PageText).toBeTruthy();
  });
});
