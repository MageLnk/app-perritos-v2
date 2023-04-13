import { render, screen } from "@testing-library/react";
import FooterContentContainer from "./";

describe("Given FooterContentContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const testId = "footer-content-container";

    // Act
    render(<FooterContentContainer />);
    const footerTestId = screen.getByTestId(testId);

    // Assert
    expect(footerTestId).toBeTruthy();
  });

  test("It should rende h3 msg", () => {
    // Arrange
    const h3Messege = "This page is the version 2 of perritos website with TDD style";

    // Act
    render(<FooterContentContainer />);

    // Assert
    expect(screen.getByRole("heading", { level: 4 }).innerHTML).toBe(h3Messege);
  });
});
