import { render, screen } from "@testing-library/react";
import Layout from ".";

describe("Given Header and Footer Components", () => {
  test("It should render with his 2 Components", () => {
    // Arrange
    const headerTestId = "header-layout-container";
    const footerTestId = "footer-layout-container";

    render(<Layout />);

    // Act
    const findHeaderTestId = screen.getByTestId(headerTestId);
    const findFooterTestId = screen.getByTestId(footerTestId);

    //
    expect(findHeaderTestId).toBeTruthy();
    expect(findFooterTestId).toBeTruthy();
  });
});
