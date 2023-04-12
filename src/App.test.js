import React from "react";
import { render, screen } from "@testing-library/react";

import { MemoryRouter, Route, Routes } from "react-router-dom";
// Component
import App from "./App";
import HomePageContainer from "./Pages/HomePageContainer";

//jest.mock("./GlobalContexts/ApiBreedContext");

describe("Given App component", () => {
  afterEach(() => {});
  test("Landing on a bad page", () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    // Act
    screen.debug();

    // Assert
  });

  test("", () => {
    // Arrange
    // Act
    // Assert
  });
});
