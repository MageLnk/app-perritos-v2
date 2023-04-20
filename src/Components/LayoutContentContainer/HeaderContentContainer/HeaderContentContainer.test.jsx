import { render, screen } from "@testing-library/react";
import HeaderContentContainer from "./";
import { MemoryRouter } from "react-router-dom";

describe("Given HeaderContentContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const testId = "header-content-container";
    render(<HeaderContentContainer />, { wrapper: MemoryRouter });

    // Act
    const headerTestId = screen.getByTestId(testId);

    // Assert
    expect(headerTestId).toBeTruthy();
  });

  test("It should have access to logo component", () => {
    // Arrange
    const logoAriaLabel = "Ir a la pagina principal";
    render(<HeaderContentContainer />, { wrapper: MemoryRouter });

    // Act
    const ariaLabelLogo = screen.findByLabelText(logoAriaLabel);

    // Assert
    expect(ariaLabelLogo).toBeTruthy();
  });

  test("It should have access to Brand name", () => {
    // Arrange
    const brandPage = "Brand page";
    render(<HeaderContentContainer />, { wrapper: MemoryRouter });

    // Act
    const getHeadingBrand = screen.getByRole("heading", { level: 3 }).innerHTML;

    // Assert
    expect(getHeadingBrand).toBe(brandPage);
  });

  test("It should have access to Menu Component", () => {
    // Arrange
    const testIdMenu = "menu-content-container";
    render(<HeaderContentContainer />, { wrapper: MemoryRouter });

    // Act
    const menuTestId = screen.getByTestId(testIdMenu);

    // Assert
    expect(menuTestId).toBeTruthy();
  });
});
