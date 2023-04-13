import { render, screen, fireEvent } from "@testing-library/react";
import InputBreed from "./";

describe("Given InputBreed Component", () => {
  test("It should render", () => {
    // Arrange
    const placerHolder = "Write a breed";

    // Act
    render(<InputBreed />);
    const findAriaTextLabel = screen.getByPlaceholderText(placerHolder);

    // Assert
    expect(findAriaTextLabel).toBeTruthy();
  });

  test("It change input to 'test value' when we fireEvent to change for that value", () => {
    // Arrange
    const placerHolder = "Write a breed";
    const valueTest = "test value";
    render(<InputBreed />);

    // Act
    const input = screen.getByPlaceholderText(placerHolder);
    fireEvent.change(input, { target: { value: valueTest } });

    // Assert
    expect(input.value).toBe(valueTest);
  });

  test("It should activate onInputSearch function to clean the input", () => {
    // Arrange
    const placerHolder = "Write a breed";
    const valueTest = "test value";
    render(<InputBreed />);

    // Act
    const input = screen.getByPlaceholderText(placerHolder);
    fireEvent.change(input, { target: { value: valueTest } });
    fireEvent.click(screen.getByRole("button"));

    // Assert
    expect(input.value).toBe("");
  });
});
