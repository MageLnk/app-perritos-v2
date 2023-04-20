import { render, screen } from "@testing-library/react";
import Menu from "./";
import { MemoryRouter } from "react-router-dom";

describe("Given HeaderContentContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const testId = "menu-content-container";
    render(<Menu />, { wrapper: MemoryRouter });

    // Act
    const headerTestId = screen.getByTestId(testId);

    // Assert
    expect(headerTestId).toBeTruthy();
  });
});
