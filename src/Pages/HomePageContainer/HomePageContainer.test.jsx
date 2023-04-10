import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import HomePageContainer from "./";
import { useApiBreedContext } from "../../GlobalContexts/ApiBreedContext";

jest.mock("../../GlobalContexts/ApiBreedContext");

describe("Given App component", () => {
  const title = "Home Content Container";

  afterEach(() => {
    useApiBreedContext.mockRestore();
  });
  test("It should check h1 it says 'Home Content Container'", () => {
    // Arrange
    useApiBreedContext.mockReturnValue({
      image: {
        message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
        status: "success",
      },
    });

    render(<HomePageContainer />);

    // Act & Assert
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });

  test("It should check h1 it says 'false' for check Context", () => {
    // Arrange
    useApiBreedContext.mockReturnValue({
      image: {
        message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
        status: "success",
      },
    });

    render(<HomePageContainer />);

    // Act
    screen.debug();

    // Assert
    //expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });
});
