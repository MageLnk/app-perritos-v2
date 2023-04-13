import { render, screen } from "@testing-library/react";
import FooterContentContainer from "./";

describe("Given FooterContentContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const arialLabelText = "footer-content-container";

    // Act
    render(<FooterContentContainer />);
    const findAriaLabelText = screen.getByLabelText(arialLabelText);

    // Assert
    expect(findAriaLabelText).toBeTruthy();
  });
});
