import { render, screen, fireEvent } from "@testing-library/react";
import InputBreed from "./";

describe("Given InputBreed Component", () => {
  test("It should render", () => {
    // Arrange
    const placeHolder = "Write a breed";

    // Act
    render(<InputBreed />);
    const findAriaTextLabel = screen.getByPlaceholderText(placeHolder);

    // Assert
    expect(findAriaTextLabel).toBeTruthy();
  });

  test("It should change placeHolder when the format is invalid", () => {
    // Arrange
    const placeHolder = "Write a breed";
    const errorPlaceHolder = "Formato inválido";
    const valueTest = "1234";
    render(<InputBreed />);

    // Act
    const inputOriginal = screen.getByPlaceholderText(placeHolder);
    fireEvent.change(inputOriginal, { target: { value: valueTest } });
    fireEvent.click(screen.getByRole("button"));

    const inputError = screen.getByPlaceholderText(errorPlaceHolder);

    // Assert
    expect(inputError).toBeTruthy();
  });

  test("It should come back to the original placeHolder after 4 seconds", async () => {
    // Arrange
    const placeHolder = "Write a breed";
    const errorPlaceHolder = "Formato inválido";
    const valueTest = "1234";
    render(<InputBreed />);

    // Act
    const inputOriginal = screen.getByPlaceholderText(placeHolder);
    fireEvent.change(inputOriginal, { target: { value: valueTest } });
    fireEvent.click(screen.getByRole("button"));

    const inputError = screen.getByPlaceholderText(errorPlaceHolder);

    // Assert
    expect(inputError).toBeTruthy();
    // Espera 4 segundos y verifica que el placeholder vuelva a ser el original
    await new Promise((resolve) => setTimeout(resolve, 4000));
    expect(inputOriginal.placeholder).toBe(placeHolder);
  });

  test("It change input to 'test value' when we fireEvent to change for that value", () => {
    // Arrange
    const placeHolder = "Write a breed";
    const valueTest = "test value";
    render(<InputBreed />);

    // Act
    const input = screen.getByPlaceholderText(placeHolder);
    fireEvent.change(input, { target: { value: valueTest } });

    // Assert
    expect(input.value).toBe(valueTest);
  });

  test("It should activate onInputSearch function to clean the input", () => {
    // Arrange
    const placeHolder = "Write a breed";
    const valueTest = "test value";
    render(<InputBreed />);

    // Act
    const input = screen.getByPlaceholderText(placeHolder);
    fireEvent.change(input, { target: { value: valueTest } });
    fireEvent.click(screen.getByRole("button"));

    // Assert
    expect(input.value).toBe("");
  });
});
