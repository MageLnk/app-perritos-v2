import React from "react";
import { render, screen } from "@testing-library/react";

import { MemoryRouter, Route, Routes } from "react-router-dom";
// Component
// import HomePageContainer from "./Pages/HomePageContainer";
import MyRoutes from "./Routes";

//jest.mock("./GlobalContexts/ApiBreedContext");

describe("Given App component", () => {
  afterEach(() => {});

  const labelTextName = "home-content-container";
  test("Landing on a bad page", () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={["/"]}>
        <MyRoutes />
      </MemoryRouter>
    );
    // Act
    const getLabelHomeRouteText = screen.getByLabelText(labelTextName);

    // Assert
    expect(getLabelHomeRouteText).toBeTruthy();
  });

  test("It should  render 404 page on random route", () => {
    // Arrange
    const labelTextName = "error-404-content-container";
    render(
      <MemoryRouter initialEntries={["/random"]}>
        <MyRoutes />
      </MemoryRouter>
    );

    // Act
    const getLabelError404RouteText = screen.getByLabelText(labelTextName);

    // Assert
    expect(getLabelError404RouteText).toBeTruthy();
  });
});
