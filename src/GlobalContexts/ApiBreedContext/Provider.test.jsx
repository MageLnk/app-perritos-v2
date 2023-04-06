import React from "react";
import { render, screen } from "@testing-library/react";
//
import ApiBreedContextProvider from "./Provider";

describe("Given App component", () => {
  test("It should exist", () => {
    // Arrange
    const test = render(<ApiBreedContextProvider />);

    // Act
    console.log("DSAFADSF", test.container);
    screen.debug();

    // Assert
    //expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(title);
  });
});
