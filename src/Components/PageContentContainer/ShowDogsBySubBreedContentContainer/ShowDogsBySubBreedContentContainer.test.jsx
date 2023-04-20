import { render, screen } from "@testing-library/react";
import ShowDogsBySubBreedContentContainer from ".";

describe("Given ShowDogsByBreedContentContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const testId = "show-dogs-by-sub-breed-content-container";

    // Act
    render(<ShowDogsBySubBreedContentContainer />);
    const menuContentTestId = screen.findByLabelText(testId);

    // Assert
    expect(menuContentTestId).toBeTruthy();
  });
});
