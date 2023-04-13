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
  test("should render children with default state", async () => {
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

    const imageStatusElement = await waitFor(() => screen.getByText("Image Status: success"));
    expect(imageStatusElement).toBeTruthy();
  });

  test("should render children with new state after fetching image", async () => {
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

    await waitFor(() => expect(screen.getByText("Image Status: success")).toBeTruthy());

    const randomImageApiCall = require("./randomImageApiCall/randomImageApiCall");
    expect(randomImageApiCall).toHaveBeenCalledTimes(1);
    expect(randomImageApiCall).toHaveBeenCalledWith("https://dog.ceo/api/breeds/image/random");

    const imageStatusElement = screen.getByText("Image Status: success");
    expect(imageStatusElement).toBeTruthy();
  });
});
