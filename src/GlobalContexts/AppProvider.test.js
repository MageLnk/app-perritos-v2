import { render, screen } from "@testing-library/react";
import AppProvider from "./";

describe("Given AppProvider Component", () => {
  test("It should render", async () => {
    // Arrange
    const labelTextName = "app-container";
    render(<AppProvider />);

    // Act
    const getLabelAppComponentText = screen.findByLabelText(labelTextName);

    // Assert
    expect(getLabelAppComponentText).toBeTruthy();
  });
});
