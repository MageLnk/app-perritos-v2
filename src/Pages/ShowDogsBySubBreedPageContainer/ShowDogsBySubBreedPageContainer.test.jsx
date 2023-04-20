import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import ShowDogsBySubBreedPageContainer from "./";
// import { useApiBreedContext } from "../../GlobalContexts/ApiBreedContext";

jest.mock("../../GlobalContexts/ApiBreedContext");

describe("Given ShowDogsByBreedPageContainer component", () => {
  afterEach(() => {
    // useApiBreedContext.mockRestore();
  });
  test("It should render without a problem", () => {
    // Arrange
    const testId = "show-dogs-by-sub-breeds-page-container";

    // useApiBreedContext.mockReturnValue({
    //   image: {
    //     message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
    //     status: "success",
    //   },
    // });

    // Act
    render(<ShowDogsBySubBreedPageContainer />);
    const homePageTestId = screen.getByTestId(testId);

    //Assert
    expect(homePageTestId).toBeTruthy();
  });

  test("It should have access to ShowDogsByBreedContentContainer component", () => {
    // Arrange
    const TestIdSelectByBreedContainerContent = "show-dogs-by-sub-breed-content-container";

    // useApiBreedContext.mockReturnValue({
    //   image: {
    //     message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
    //     status: "success",
    //   },
    // });

    // Act
    render(<ShowDogsBySubBreedPageContainer />);
    const selectByBreedContainerContentTestId = screen.getByTestId(TestIdSelectByBreedContainerContent);

    //Assert
    expect(selectByBreedContainerContentTestId).toBeTruthy();
  });
});
