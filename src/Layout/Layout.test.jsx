import { render, screen } from "@testing-library/react";
import Layout from ".";

describe("Given FooterLayoutContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const arialLabelFooterText = "footer-layout-container";
    const arialLabelHeaderText = "header-layout-container";

    render(<Layout />);

    // Act
    const findAriaLabelTextOnFooter = screen.getByLabelText(arialLabelFooterText);
    const findAriaLabelTextOnHeader = screen.getByLabelText(arialLabelHeaderText);

    //
    expect(findAriaLabelTextOnFooter).toBeTruthy();
    expect(findAriaLabelTextOnHeader).toBeTruthy();
  });
});
