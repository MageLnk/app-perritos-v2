import { render, screen } from "@testing-library/react";
import AppProvider from "./AppProvider";

describe("Given AppProvider Component", () => {
  test("It should render", async () => {
    // Arrange
    const testId = "app-container";
    render(<AppProvider />);

    // Act
    const appTestId = screen.getByTestId(testId);

    // Assert
    expect(appTestId).toBeTruthy();
  });
});
