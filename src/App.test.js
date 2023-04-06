import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import App from "./App";

describe("Given App component", () => {
  const title = "Dog Api V2";

  test("It should check h1 it says 'Dog Api V2'", () => {
    // Arrange
    render(<App />);

    // Act
    screen.debug();

    // Assert
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });
});
