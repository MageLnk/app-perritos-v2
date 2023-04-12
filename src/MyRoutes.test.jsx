import React from "react";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
// Component
import MyRoutes from "./MyRoutes";

describe("Given App component", () => {
  afterEach(() => {});

  test("It should render home page", () => {
    // Arrange
    const labelTextName = "home-page-container";

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
    const labelTextName = "error-404-page-container";
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
