import { render, screen } from "@testing-library/react";
import Layout from ".";

describe("Given FooterLayoutContainer Component", () => {
  test("It should render with his 2 Components", () => {
    // Arrange
    const arialLabelHeaderText = "header-layout-container";
    const arialLabelFooterText = "footer-layout-container";

    render(<Layout />);

    // Act
    const findAriaLabelTextOnHeader = screen.getByLabelText(arialLabelHeaderText);
    const findAriaLabelTextOnFooter = screen.getByLabelText(arialLabelFooterText);

    //
    expect(findAriaLabelTextOnHeader).toBeTruthy();
    expect(findAriaLabelTextOnFooter).toBeTruthy();
  });
});
