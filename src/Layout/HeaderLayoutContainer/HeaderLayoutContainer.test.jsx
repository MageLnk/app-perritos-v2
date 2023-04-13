import { render, screen } from "@testing-library/react";
import HeaderLayoutContainer from "./";

describe("Given HeaderLayoutContainer Component", () => {
  test("It should render", () => {
    // Arrange
    const arialLabelText = "header-layout-container";
    render(<HeaderLayoutContainer />);

    // Act
    const findAriaLabelText = screen.getByLabelText(arialLabelText);

    //
    expect(findAriaLabelText).toBeTruthy();
  });
});
