import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import HomeContentContainer from "./";
import { useApiBreedContext } from "../../GlobalContexts/ApiBreedContext";

jest.mock("../../GlobalContexts/ApiBreedContext");

describe("Given App component", () => {
  const title = "Home Content Container";

  //const contextMocked = jest.spyOn(React, "useContext");

  afterEach(() => {
    useApiBreedContext.mockRestore();
    //contextMocked.mockRestore();
  });
  test("It should check h1 it says 'Home Content Container'", () => {
    // Arrange
    useApiBreedContext.mockReturnValue({
      image: {
        message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
        status: "success",
      },
    });

    render(<HomeContentContainer />);
    screen.debug();

    // Act & Assert
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });

  test("It should check src and alt image from Context", () => {
    // Arrange
    useApiBreedContext.mockReturnValue({
      image: {
        message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
        status: "success",
      },
    });

    render(<HomeContentContainer />);

    // Act
    const { src, alt } = screen.getByRole("img");

    // Assert
    expect(src).toBe("https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg");
    expect(alt).toBe("dog-images");
  });
});
