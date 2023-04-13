import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import InputBreed from "./";

describe("Given InputBreed Component", () => {
  test("It should render", () => {
    // Arrange
    const ariaLabelText = "input-breed-container";

    // Act
    render(<InputBreed />);
    const findAriaTextLabel = screen.getByLabelText(ariaLabelText);

    // Assert
    expect(findAriaTextLabel).toBeTruthy();
  });

  test("It change input to 'test value' when we fireEvent to change for that value", () => {
    // Arrange
    const labelText = "input-breed-container";
    const valueTest = "test value";
    render(<InputBreed />);

    // Act
    const input = screen.getByLabelText(labelText);
    fireEvent.change(input, { target: { value: valueTest } });

    //screen.debug();

    // Assert
    expect(input.value).toBe(valueTest);
  });

  test("It should activate onInputSearch function to clean the input", () => {
    // Arrange
    const labelText = "input-breed-container";
    const valueTest = "test value";
    render(<InputBreed />);

    // Act
    const input = screen.getByLabelText(labelText);
    fireEvent.change(input, { target: { value: valueTest } });
    fireEvent.click(screen.getByRole("button"));

    // Assert
    expect(input.value).toBe("");
  });
});
