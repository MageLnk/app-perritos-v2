import { render, screen } from "@testing-library/react";
import HeaderLayoutContainer from "./";

describe("Given HeaderLayoutContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const testId = "header-layout-container";
    render(<HeaderLayoutContainer />);

    // Act
    const headerTestId = screen.getByTestId(testId);

    // Assert
    expect(headerTestId).toBeTruthy();
  });
});
