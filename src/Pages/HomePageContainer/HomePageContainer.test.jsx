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
    const labelTextName = "home-page-container";

    useApiBreedContext.mockReturnValue({
      image: {
        message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
        status: "success",
      },
    });

    render(<HomePageContainer />);

    // Act
    const getLabelHomePageText = screen.getByLabelText(labelTextName);

    //Assert
    expect(getLabelHomePageText).toBeTruthy();
  });
});
