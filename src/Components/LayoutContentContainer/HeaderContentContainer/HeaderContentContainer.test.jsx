import { render, screen } from "@testing-library/react";
import HeaderContentContainer from "./";

describe("Given HeaderContentContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const arialLabelText = "header-content-container";
    render(<HeaderContentContainer />);

    // Act
    const findAriaLabelText = screen.getByLabelText(arialLabelText);

    //
    expect(findAriaLabelText).toBeTruthy();
  });
});
