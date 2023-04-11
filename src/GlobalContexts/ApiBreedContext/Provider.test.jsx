import React from "react";
import { render, screen } from "@testing-library/react";
// Components
import { useApiBreedContext } from "./";

jest.mock("./");

describe("Given a useApiBreedContext", () => {
  const RenderForTestContext = ({ status, message }) => <h1>Titulo test, {status}</h1>;

  afterEach(() => {
    useApiBreedContext.mockRestore();
  });
  test("It should exist", () => {
    // Arrange
    useApiBreedContext.mockReturnValue({
      image: {
        message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
        status: "success",
      },
    });

    const { image } = useApiBreedContext();

    render(<RenderForTestContext status={image.status} />);

    // Act
    screen.debug();

    // Assert
  });
});
