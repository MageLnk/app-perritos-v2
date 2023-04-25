import { render, screen, fireEvent } from "@testing-library/react";
import ShowDogsByBreedContentContainer from "./";
import { useApiBreedContext } from "../../../GlobalContexts/ApiBreedContext";

jest.mock("../../../GlobalContexts/ApiBreedContext");

describe("Given ShowDogsByBreedContentContainer Component", () => {
  afterEach(() => {
    useApiBreedContext.mockRestore();
  });
  test("It should render", () => {
    // Arrange
    const testId = "show-dogs-by-breed-content-container";
    const mockContextValue = {
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
          imageUrl: "https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg",
          breedName: "akita",
        },
      ],
    };
    useApiBreedContext.mockReturnValue(mockContextValue);

    // Act
    render(<ShowDogsByBreedContentContainer />);
    const menuContentTestId = screen.findByLabelText(testId);

    // Assert
    expect(menuContentTestId).toBeTruthy();
  });

  test("It should render options with correct text", () => {
    // Arrange
    const mockContextValue = {
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
          imageUrl: "https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg",
          breedName: "akita",
        },
      ],
    };
    useApiBreedContext.mockReturnValue(mockContextValue);

    // Act
    render(<ShowDogsByBreedContentContainer />);
    const breedOptions = screen.getAllByRole("button");

    // Assert
    expect(breedOptions).toHaveLength(7);
    expect(breedOptions[0].textContent).toBe("affenpinscher");
    expect(breedOptions[6].textContent).toBe("beagle");
  });

  test("It should render images", () => {
    // Arrange
    const mockContextValue = {
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
          imageUrl: "https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg",
          breedName: "akita",
        },
      ],
    };
    useApiBreedContext.mockReturnValue(mockContextValue);

    // Act
    render(<ShowDogsByBreedContentContainer />);
    const { src, alt } = screen.getByAltText("breed-image-information");

    // Assert
    expect(src).toBe("https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg");
    expect(alt).toBe("breed-image-information");
  });

  test("it should call getImageFromBreed with the correct argument when a breed button is clicked", () => {
    // Arrange
    const mockContextValue = {
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
          imageUrl: "https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg",
          breedName: "akita",
        },
      ],
      getImageFromBreed: jest.fn(),
    };
    useApiBreedContext.mockReturnValue(mockContextValue);

    // Act
    render(<ShowDogsByBreedContentContainer />);
    const breedButton = screen.getByRole("button", { name: "akita" });
    fireEvent.click(breedButton);

    // Assert
    expect(mockContextValue.getImageFromBreed).toHaveBeenCalled();
  });
});
