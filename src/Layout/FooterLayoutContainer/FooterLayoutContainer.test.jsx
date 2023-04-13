import { render, screen } from "@testing-library/react";
import FooterLayoutContainer from "./";

describe("Given FooterLayoutContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const testId = "footer-layout-container";
    render(<FooterLayoutContainer />);

    // Act
    const footerTestId = screen.getByTestId(testId);

    //
    expect(footerTestId).toBeTruthy();
  });
});
