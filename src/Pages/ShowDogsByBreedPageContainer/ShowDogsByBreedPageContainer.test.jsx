import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import ShowDogsByBreedPageContainer from ".";
import { useApiBreedContext } from "../../GlobalContexts/ApiBreedContext";

jest.mock("../../GlobalContexts/ApiBreedContext");

describe("Given ShowDogsByBreedPageContainer component", () => {
  afterEach(() => {
    useApiBreedContext.mockRestore();
  });
  test("It should render without a problem", () => {
    // Arrange
    const testId = "show-dogs-by-breed-page-container";

    useApiBreedContext.mockReturnValue({
      breedsList: [
        {
          result: "affenpinscher",
          subBreeds: [],
        },
        {
          result: "african",
          subBreeds: [],
        },
        {
          result: "airedale",
          subBreeds: [],
        },
        {
          result: "akita",
          subBreeds: [],
        },
        {
          result: "appenzeller",
          subBreeds: [],
        },
        {
          result: "basenji",
          subBreeds: [],
        },
        {
          result: "beagle",
          subBreeds: [],
        },
      ],
      breedInfo: [
        {
          imageUrl: "https://images.dog.ceo/breeds/schipperke/n02104365_6199.jpg",
          breedName: "schipperke",
        },
      ],
    });

    render(<ShowDogsByBreedPageContainer />);

    // Act
    const homePageTestId = screen.getByTestId(testId);

    //Assert
    expect(homePageTestId).toBeTruthy();
  });

  test("It should have access to ShowDogsByBreedContentContainer component", () => {
    // Arrange
    const TestIdSelectByBreedContainerContent = "show-dogs-by-breed-content-container";

    useApiBreedContext.mockReturnValue({
      breedsList: [
        {
          result: "affenpinscher",
          subBreeds: [],
        },
        {
          result: "african",
          subBreeds: [],
        },
        {
          result: "airedale",
          subBreeds: [],
        },
        {
          result: "akita",
          subBreeds: [],
        },
        {
          result: "appenzeller",
          subBreeds: [],
        },
        {
          result: "basenji",
          subBreeds: [],
        },
        {
          result: "beagle",
          subBreeds: [],
        },
      ],
      breedInfo: [
        {
          imageUrl: "https://images.dog.ceo/breeds/schipperke/n02104365_6199.jpg",
          breedName: "schipperke",
        },
      ],
    });

    render(<ShowDogsByBreedPageContainer />);

    // Act
    const selectByBreedContainerContentTestId = screen.getByTestId(TestIdSelectByBreedContainerContent);

    //Assert
    expect(selectByBreedContainerContentTestId).toBeTruthy();
  });
});
