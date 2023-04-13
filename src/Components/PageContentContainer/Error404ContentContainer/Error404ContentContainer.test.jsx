import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import Error404ContentContainer from ".";

describe("Given App component", () => {
  afterEach(() => {});

  test("It should render without a problem", () => {
    // Arrange
    const testId = "error-404-content-container";

    // Act
    render(<Error404ContentContainer />);
    const findError404TextId = screen.getByTestId(testId);

    // Assert
    expect(findError404TextId).toBeTruthy();
  });

  test("It should render h1", () => {
    // Arrange
    const title = "Error 404 Conent Container";

    render(<Error404ContentContainer />);

    // Act & Assert
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });
});
