import React from "react";
import { render, screen } from "@testing-library/react";
//
import ApiBreedContextProvider from "./Provider";

describe("Given App component", () => {
  test("It should exist", () => {
    // Arrange
    const algo = render(<ApiBreedContextProvider />);

    // Act
    console.log("DSAFADSF", algo.container);
    screen.debug();

    // Assert
    //expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(title);
  });
});
