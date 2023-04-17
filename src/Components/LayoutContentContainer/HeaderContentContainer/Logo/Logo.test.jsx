import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";

import Logo from "./";
import { createMemoryHistory } from "history";

describe("Given Logo Component", () => {
  test("It should render", () => {
    // Arrange
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    // Act
    const { alt } = screen.getByRole("img");

    // Assert
    expect(alt).toBe("Logo");
  });

  test("It should render logo image", () => {
    // Arrange
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    // Act
    const { src } = screen.getByRole("img");

    // Assert
    expect(src).toBe("http://localhost/images/logo.jpg"); // <--- Raro
  });

  test("It should link to home V1", () => {
    // Arrange
    render(
      <MemoryRouter initialEntries={["/random"]}>
        <Logo />
      </MemoryRouter>
    );

    console.log("Path before Event", window.location.pathname);

    // Act
    const homeLink = screen.getByLabelText("Ir a la pagina principal");
    fireEvent.click(homeLink);

    // Assert
    expect(window.location.pathname).toBe("/");
  });

  test("It should link to home V2", async () => {
    // Arrange
    const history = createMemoryHistory();
    history.push("/random");

    render(
      <MemoryRouter history={history}>
        <Logo />
      </MemoryRouter>
    );

    // Act
    const homeLink = screen.getByLabelText("Ir a la pagina principal");
    fireEvent.click(homeLink);

    // Assert
    await waitFor(() => {
      expect(history.location.pathname).toBe("/");
    });
  });
});

// PENDIENTE
