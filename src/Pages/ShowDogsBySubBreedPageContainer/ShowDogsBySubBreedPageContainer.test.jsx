import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import ShowDogsBySubBreedPageContainer from "./";
import { useApiBreedContext } from "../../GlobalContexts/ApiBreedContext";

jest.mock("../../GlobalContexts/ApiBreedContext");

describe("Given ShowDogsByBreedPageContainer component", () => {
  afterEach(() => {
    useApiBreedContext.mockRestore();
  });
  test("It should render without a problem", () => {
    // Arrange
    const testId = "show-dogs-by-sub-breeds-page-container";

    const mockContextValue = {
      subBreedsList: [
        {
          result: "australian",
          subBreeds: ["shepherd"],
        },
        {
          result: "buhund",
          subBreeds: ["norwegian"],
        },
        {
          result: "bulldog",
          subBreeds: ["boston", "english", "french"],
        },
        {
          result: "bullterrier",
          subBreeds: ["staffordshire"],
        },
        {
          result: "cattledog",
          subBreeds: ["australian"],
        },
        {
          result: "collie",
          subBreeds: ["border"],
        },
      ],
      subBreedInfo: [
        {
          imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_3051.jpg",
          breedName: "hound",
          subBreedName: "afghan",
        },
      ],
    };
    useApiBreedContext.mockReturnValue(mockContextValue);

    // Act
    render(<ShowDogsBySubBreedPageContainer />);
    const homePageTestId = screen.getByTestId(testId);

    //Assert
    expect(homePageTestId).toBeTruthy();
  });

  test("It should have access to ShowDogsByBreedContentContainer component", () => {
    // Arrange
    const TestIdSelectByBreedContainerContent = "show-dogs-by-sub-breed-content-container";

    const mockContextValue = {
      subBreedsList: [
        {
          result: "australian",
          subBreeds: ["shepherd"],
        },
        {
          result: "buhund",
          subBreeds: ["norwegian"],
        },
        {
          result: "bulldog",
          subBreeds: ["boston", "english", "french"],
        },
        {
          result: "bullterrier",
          subBreeds: ["staffordshire"],
        },
        {
          result: "cattledog",
          subBreeds: ["australian"],
        },
        {
          result: "collie",
          subBreeds: ["border"],
        },
      ],
      subBreedInfo: [
        {
          imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_3051.jpg",
          breedName: "hound",
          subBreedName: "afghan",
        },
      ],
    };
    useApiBreedContext.mockReturnValue(mockContextValue);

    // Act
    render(<ShowDogsBySubBreedPageContainer />);
    const selectByBreedContainerContentTestId = screen.getByTestId(TestIdSelectByBreedContainerContent);

    //Assert
    expect(selectByBreedContainerContentTestId).toBeTruthy();
  });
});
