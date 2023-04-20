import { render, screen } from "@testing-library/react";
import ShowDogsByBreedContentContainer from ".";

describe("Given ShowDogsByBreedContentContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const testId = "show-dogs-by-breed-content-container";

    // Act
    render(<ShowDogsByBreedContentContainer />);
    const menuContentTestId = screen.findByLabelText(testId);

    // Assert
    expect(menuContentTestId).toBeTruthy();
  });
});
