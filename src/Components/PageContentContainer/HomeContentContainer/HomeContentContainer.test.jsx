import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import HomeContentContainer from "./";
import { useApiBreedContext } from "../../../GlobalContexts/ApiBreedContext";

jest.mock("../../../GlobalContexts/ApiBreedContext");

describe("Given App component", () => {
  afterEach(() => {
    useApiBreedContext.mockRestore();
  });

  test("It should render without a problem", () => {
    // Arrange
    const testId = "home-content-container";
    useApiBreedContext.mockReturnValue({
      image: {
        message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
        status: "success",
      },
    });

    // Act
    render(<HomeContentContainer />);
    const findTestId = screen.getByTestId(testId);

    // Assert
    expect(findTestId).toBeTruthy();
  });

  test("It should check h1 it says 'Home Content Container'", () => {
    // Arrange
    const title = "Home Content Container";

    useApiBreedContext.mockReturnValue({
      image: {
        message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
        status: "success",
      },
    });

    render(<HomeContentContainer />);

    // Act & Assert
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });

  test("It should check image src and alt image from Context", () => {
    // Arrange
    useApiBreedContext.mockReturnValue({
      image: {
        message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
        status: "success",
      },
    });

    render(<HomeContentContainer />);

    // Act
    const { src, alt } = screen.getByAltText("dog-images");

    // Assert
    expect(src).toBe("https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg");
    expect(alt).toBe("dog-images");
  });

  test("It should check randomBreedImage src and alt image from Context", () => {
    // Arrange
    useApiBreedContext.mockReturnValue({
      randomBreedImage: {
        message: "https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg",
        status: "success",
      },
    });

    render(<HomeContentContainer />);

    // Act
    screen.debug();
    const { src, alt } = screen.getByAltText("dog-search-images");

    // Assert
    expect(src).toBe("https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg");
    expect(alt).toBe("dog-search-images");
  });
});
