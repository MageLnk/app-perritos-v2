import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import HomePageContainer from "./";
import { useApiBreedContext } from "../../GlobalContexts/ApiBreedContext";

jest.mock("../../GlobalContexts/ApiBreedContext");

describe("Given App component", () => {
  afterEach(() => {
    useApiBreedContext.mockRestore();
  });
  test("It should render without a problem", () => {
    // Arrange
    const TestId = "home-page-container";

    useApiBreedContext.mockReturnValue({
      image: {
        message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
        status: "success",
      },
    });

    render(<HomePageContainer />);

    // Act
    const homePageTestId = screen.getByTestId(TestId);

    //Assert
    expect(homePageTestId).toBeTruthy();
  });
});
