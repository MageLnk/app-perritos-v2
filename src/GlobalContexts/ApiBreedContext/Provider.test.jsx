import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ApiBreedContextProvider from "./Provider";
import ApiBreedContext from "./";

jest.mock("./randomImageApiCall/randomImageApiCall", () => {
  return jest.fn(() =>
    Promise.resolve({
      message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
      status: "success",
    })
  );
});

describe("Given ApiBreedContextProvider", () => {
  afterEach(() => {});
  test("It should render children with default state", async () => {
    // Arrange
    render(
      <ApiBreedContextProvider>
        <ApiBreedContext.Consumer>
          {(value) => (
            <div>
              <span>Image Status: {value.image.status}</span>
            </div>
          )}
        </ApiBreedContext.Consumer>
      </ApiBreedContextProvider>
    );

    // Act
    const imageStatusElement = await waitFor(() => screen.getByText("Image Status: success"));
    screen.debug();

    // Assert
    expect(imageStatusElement).toBeTruthy();
  });
});

// PENDIENTE
