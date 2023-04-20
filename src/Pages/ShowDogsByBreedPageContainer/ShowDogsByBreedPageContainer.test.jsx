import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import ShowDogsByBreedPageContainer from ".";
// import { useApiBreedContext } from "../../GlobalContexts/ApiBreedContext";

jest.mock("../../GlobalContexts/ApiBreedContext");

describe("Given ShowDogsByBreedPageContainer component", () => {
  afterEach(() => {
    // useApiBreedContext.mockRestore();
  });
  test("It should render without a problem", () => {
    // Arrange
    const testId = "show-dogs-by-breed-page-container";

    // useApiBreedContext.mockReturnValue({
    //   image: {
    //     message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
    //     status: "success",
    //   },
    // });

    render(<ShowDogsByBreedPageContainer />);

    // Act
    const homePageTestId = screen.getByTestId(testId);

    //Assert
    expect(homePageTestId).toBeTruthy();
  });

  test("It should have access to ShowDogsByBreedContentContainer component", () => {
    // Arrange
    const TestIdSelectByBreedContainerContent = "show-dogs-by-breed-content-container";

    // useApiBreedContext.mockReturnValue({
    //   image: {
    //     message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
    //     status: "success",
    //   },
    // });

    render(<ShowDogsByBreedPageContainer />);

    // Act
    const selectByBreedContainerContentTestId = screen.getByTestId(TestIdSelectByBreedContainerContent);

    //Assert
    expect(selectByBreedContainerContentTestId).toBeTruthy();
  });
});
