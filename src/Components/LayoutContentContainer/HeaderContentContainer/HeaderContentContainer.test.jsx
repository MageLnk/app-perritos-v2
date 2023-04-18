import { render, screen } from "@testing-library/react";
import HeaderContentContainer from "./";
import { MemoryRouter } from "react-router-dom";

describe("Given HeaderContentContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const testId = "header-content-container";
    render(<HeaderContentContainer />, { wrapper: MemoryRouter });

    // Act
    const headerTestId = screen.getByTestId(testId);

    // Assert
    expect(headerTestId).toBeTruthy();
  });
});
