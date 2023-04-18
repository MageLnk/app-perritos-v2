import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";

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

  // test("It should link to home V1", () => {
  //   // Arrange
  //   render(
  //     <BrowserRouter initialEntries={["/random"]}>
  //       <Logo />
  //     </BrowserRouter>
  //   );

  //   console.log("Path before Event", window.location.pathname);

  //   // Act
  //   const homeLink = screen.getByLabelText("Ir a la pagina principal");
  //   fireEvent.click(homeLink);

  //   // Assert
  //   expect(window.location.pathname).toBe("/");
  // });

  test("It should link to home", async () => {
    // Arrange
    const history = createMemoryHistory({ initialEntries: ["/test"] });
    //history.push("/random")
    //history.push = jest.fn();
    const spy = jest.spyOn(history, "push");

    render(
      <Router location={history.location} navigator={history}>
        <Logo />
      </Router>
    );

    // Act
    const homeLink = screen.getByLabelText("Ir a la pagina principal");
    fireEvent.click(homeLink);

    // Assert
    expect(spy).toHaveBeenCalled();
    expect(history.location.pathname).toBe("/");
  });
});

// PENDIENTE
