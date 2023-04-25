import { render, screen, fireEvent } from "@testing-library/react";
import ShowDogsBySubBreedContentContainer from "./";
import { useApiBreedContext } from "../../../GlobalContexts/ApiBreedContext";

jest.mock("../../../GlobalContexts/ApiBreedContext");
describe("Given ShowDogsByBreedContentContainer Component", () => {
  afterEach(() => {
    useApiBreedContext.mockRestore();
  });
  test("It should render", () => {
    // Arrange
    const testId = "show-dogs-by-sub-breed-content-container";
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
      ],
    };
    useApiBreedContext.mockReturnValue(mockContextValue);

    // Act
    render(<ShowDogsBySubBreedContentContainer />);
    const menuContentTestId = screen.findByLabelText(testId);

    // Assert
    expect(menuContentTestId).toBeTruthy();
  });

  test("It should render a button after checkbox is clicked", () => {
    // Arrange
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
      ],
    };
    useApiBreedContext.mockReturnValue(mockContextValue);
    render(<ShowDogsBySubBreedContentContainer />);

    // Act
    const checkbox = screen.getByRole("checkbox", { name: "buhund" });
    fireEvent.click(checkbox);
    const button = screen.getByRole("button", { name: "norwegian" });

    // Assert
    expect(button).toBeTruthy();
  });

  test("It should render a dissapear button when we clic checkbox again", () => {
    // Arrange
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
      ],
    };
    useApiBreedContext.mockReturnValue(mockContextValue);
    render(<ShowDogsBySubBreedContentContainer />);

    // Act
    const checkbox = screen.getByRole("checkbox", { name: "buhund" });
    fireEvent.click(checkbox);
    const buttonAfter = screen.getByRole("button", { name: "norwegian" });
    fireEvent.click(checkbox);
    const buttonBefore = screen.queryByRole("button", { name: "norwegian" });

    // Assert
    expect(buttonAfter).toBeTruthy();
    expect(buttonBefore).not.toBeTruthy();
  });

  test("It should called getImageFromSubBreed function when click on button", () => {
    // Arrange
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
      ],
      getImageFromSubBreed: jest.fn(),
    };
    useApiBreedContext.mockReturnValue(mockContextValue);
    render(<ShowDogsBySubBreedContentContainer />);

    // Act
    const checkbox = screen.getByRole("checkbox", { name: "buhund" });
    fireEvent.click(checkbox);
    const button = screen.getByRole("button", { name: "norwegian" });
    fireEvent.click(button);

    // Assert
    expect(mockContextValue.getImageFromSubBreed).toHaveBeenCalled();
  });

  test("It should render an imagen if subBreedInfo exist", () => {
    // Arrange
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
      ],
      subBreedInfo: [
        {
          imageUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_3051.jpg",
          breedName: "hound",
          subBreedName: "afghan",
        },
      ],
      getImageFromSubBreed: jest.fn(),
    };
    useApiBreedContext.mockReturnValue(mockContextValue);
    render(<ShowDogsBySubBreedContentContainer />);

    // Act
    const { src, alt } = screen.getByAltText("sub-breed-image-information");

    // Assert
    expect(src).toBe("https://images.dog.ceo/breeds/hound-afghan/n02088094_3051.jpg");
    expect(alt).toBe("sub-breed-image-information");
  });
});
