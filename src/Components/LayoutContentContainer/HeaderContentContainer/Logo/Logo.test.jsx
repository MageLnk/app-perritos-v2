import { render, screen } from "@testing-library/react";
import Logo from "./";

describe("Given Logo Component", () => {
  test("It should render", () => {
    // Arrange
    const ariaLabelText = "logo-image";

    // Act
    render(<Logo />);
    const findAriaLabelText = screen.getByLabelText(ariaLabelText);

    // Assert
    expect(findAriaLabelText).toBeTruthy();
  });

  test("It should render logo image", () => {
    // Arrange
    render(<Logo />);

    // Act
    const { src, alt } = screen.getByRole("img");

    //console.log("SADFASDF", src);

    // Assert
    expect(alt).toBe("Logo");
    expect(src).toBe("http://localhost/images/logo.jpg"); // <--- Raro
  });
});
