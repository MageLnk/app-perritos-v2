import apiCall from "./apiCall";

describe("Given apiCall Function", () => {
  test("It should throw an error when url is null", async () => {
    // Arrange
    const url = null;

    // Act
    const output = await apiCall({ url });

    // Assert
    expect(output).toBe("Invalid format");
  });

  test("It should throw an error when url is a number", async () => {
    // Arrange
    const url = 1234;

    // Act
    const output = await apiCall({ url });

    // Assert
    expect(output).toBe("Invalid format");
  });

  test("It should throw an 'Invalid format' error when TypeError: Cannot destructure property 'url' of '_ref' as it is undefined in a Empty call function.", async () => {
    // Arrange
    //const url = 1234;

    // Act
    const output = await apiCall();

    // Assert
    expect(output).toBe("Invalid format");
  });
});
