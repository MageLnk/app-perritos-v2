import { render, screen } from "@testing-library/react";
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
          imageUrl: "A CAMBIAR",
          breedName: "A CAMBIAR",
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
});
