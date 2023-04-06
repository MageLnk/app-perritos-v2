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

  test("It should throw 'Invalid format' when apiCall don't have values", async () => {
    // Arrange

    // Act
    const output = await apiCall();

    // Assert
    expect(output).toBe("Invalid format");
  });
});
