import React from "react";
import { render, screen } from "@testing-library/react";
// Component
import App from "./App";

//jest.mock("./GlobalContexts/ApiBreedContext");

describe("Given App component", () => {
  afterEach(() => {});

  test("It should render", () => {
    // Arrange
    const labelTextName = "app-container";
    render(<App />);

    // Act
    const getLabelAppComponentText = screen.findByLabelText(labelTextName);

    // Assert
    expect(getLabelAppComponentText).toBeTruthy();
  });
});
