import React from "react";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
// Component
import MyRoutes from "./MyBreedRoutes";

describe("Given App component", () => {
  afterEach(() => {});

  test("It should render Home Component", () => {
    // Arrange
    const testId = "home-page-container";

    render(
      <MemoryRouter initialEntries={["/"]}>
        <MyRoutes />
      </MemoryRouter>
    );
    // Act
    const homeRouteTestId = screen.getByTestId(testId);

    // Assert
    expect(homeRouteTestId).toBeTruthy();
  });

  test("It should render ShowDogsByBreedPageContainer Component", () => {
    // Arrange
    const testId = "show-dogs-by-breed-page-container";

    render(
      <MemoryRouter initialEntries={["/search-by-breed"]}>
        <MyRoutes />
      </MemoryRouter>
    );
    // Act
    const homeRouteTestId = screen.getByTestId(testId);

    // Assert
    expect(homeRouteTestId).toBeTruthy();
  });

  test("It should render ShowDogsByBreedPageContainer Component", () => {
    // Arrange
    const testId = "show-dogs-by-sub-breeds-page-container";

    render(
      <MemoryRouter initialEntries={["/search-by-sub-breed"]}>
        <MyRoutes />
      </MemoryRouter>
    );
    // Act
    const homeRouteTestId = screen.getByTestId(testId);

    // Assert
    expect(homeRouteTestId).toBeTruthy();
  });

  test("It should render 404 page on random route", () => {
    // Arrange
    const testId = "error-404-page-container";
    render(
      <MemoryRouter initialEntries={["/random"]}>
        <MyRoutes />
      </MemoryRouter>
    );

    // Act
    const error404TestId = screen.getByTestId(testId);

    // Assert
    expect(error404TestId).toBeTruthy();
  });
});
