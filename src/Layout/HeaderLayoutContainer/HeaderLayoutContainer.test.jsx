import { render, screen } from "@testing-library/react";
import HeaderLayoutContainer from "./";

import { MemoryRouter } from "react-router-dom";

describe("Given HeaderLayoutContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const testId = "header-layout-container";
    render(<HeaderLayoutContainer />, { wrapper: MemoryRouter });

    // Act
    const headerTestId = screen.getByTestId(testId);

    // Assert
    expect(headerTestId).toBeTruthy();
  });
});
