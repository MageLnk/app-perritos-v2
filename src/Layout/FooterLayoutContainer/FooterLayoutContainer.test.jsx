import { render, screen } from "@testing-library/react";
import FooterLayoutContainer from "./";

describe("Given FooterLayoutContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const arialLabelText = "footer-layout-container";
    render(<FooterLayoutContainer />);

    // Act
    const findAriaLabelText = screen.getByLabelText(arialLabelText);

    //
    expect(findAriaLabelText).toBeTruthy();
  });
});
