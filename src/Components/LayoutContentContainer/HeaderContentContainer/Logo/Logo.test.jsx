import { render, screen } from "@testing-library/react";
import Logo from "./";

describe("Given Logo Component", () => {
  test("It should render", () => {
    // Arrange
    render(<Logo />);

    // Act
    const { alt } = screen.getByRole("img");

    // Assert
    expect(alt).toBe("Logo");
  });

  test("It should render logo image", () => {
    // Arrange
    render(<Logo />);

    // Act
    const { src } = screen.getByRole("img");

    //console.log("SADFASDF", src);

    // Assert
    expect(src).toBe("http://localhost/images/logo.jpg"); // <--- Raro
  });
});
