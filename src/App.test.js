import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import App from "./App";
import { useApiBreedContext } from "./GlobalContexts/ApiBreedContext";

jest.mock("./GlobalContexts/ApiBreedContext");

describe("Given App component", () => {
  const title = "Dog Api V2";

  //const contextMocked = jest.spyOn(React, "useContext");

  afterEach(() => {
    useApiBreedContext.mockRestore();
    //contextMocked.mockRestore();
  });
  test("It should check h1 it says 'Dog Api V2'", () => {
    // Arrange
    useApiBreedContext.mockReturnValue({ test: "true" });

    render(<App />);

    // Act & Assert
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });

  test("It should check h1 it says 'false' for check Context", () => {
    // Arrange
    //contextMocked.mockReturnValue({ test: "true" });
    useApiBreedContext.mockReturnValue({ test: "true" });

    render(<App />);

    // Act
    screen.debug();

    // Assert
    //expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });
});
