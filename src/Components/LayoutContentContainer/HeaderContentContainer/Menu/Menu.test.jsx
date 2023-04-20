import { fireEvent, render, screen } from "@testing-library/react";
import Menu from "./";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Given HeaderContentContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const testId = "menu-content-container";
    render(<Menu />, { wrapper: MemoryRouter });

    // Act
    const headerTestId = screen.getByTestId(testId);

    // Assert
    expect(headerTestId).toBeTruthy();
  });

  test("It should link to home", async () => {
    // Arrange
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const labelDogsByBreed = "Ir a la pagina para buscar perros por raza";
    const spy = jest.spyOn(history, "push");

    render(
      <Router location={history.location} navigator={history}>
        <Menu />
      </Router>
    );

    // Act
    const showDogsByBreed = screen.getByLabelText(labelDogsByBreed);
    fireEvent.click(showDogsByBreed);

    // Assert
    expect(spy).toHaveBeenCalled();
    expect(history.location.pathname).toBe("/search-by-breed");
  });

  test("It should link to home", async () => {
    // Arrange
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const labelDogsByBreed = "Ir a la pagina para buscar perros por sub raza";
    const spy = jest.spyOn(history, "push");

    render(
      <Router location={history.location} navigator={history}>
        <Menu />
      </Router>
    );

    // Act
    const showDogsByBreed = screen.getByLabelText(labelDogsByBreed);
    fireEvent.click(showDogsByBreed);

    // Assert
    expect(spy).toHaveBeenCalled();
    expect(history.location.pathname).toBe("/search-by-sub-breed");
  });
});
