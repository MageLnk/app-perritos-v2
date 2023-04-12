import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import Error404ContentContainer from "./";

describe("Given App component", () => {
  afterEach(() => {});
  test("It should render without a problem", () => {
    // Arrange
    const labelTextName = "error-404-content-container";

    render(<Error404ContentContainer />);

    // Act
    const getLabelError404PageText = screen.getByLabelText(labelTextName);

    //Assert
    expect(getLabelError404PageText).toBeTruthy();
  });
});
