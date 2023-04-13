import apiCall from "./apiCall";

describe("Given apiCall Function", () => {
  test("It should bring 'Everything is ok' when return Data sucess", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    const mockResponse = {
      status: "success",
    };
    // Act
    const response = await apiCall({ url: "https://www.todook.cl" });

    // Assert
    expect(response).toEqual(mockResponse);
  });
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

  test("It should return 'Error al contactar la API' when .catch works", async () => {
    // Arrange
    global.fetch = jest.fn(() => Promise.reject("Error al contactar la API"));
    const mockResponse = {
      message: "Error al contactar la API",
    };

    // Act
    return await apiCall({ url: "" }).catch((error) => {
      // Assert
      expect(error.message).toBe(mockResponse.message);
    });
  });

  test("It should return 'Error al contactar la API' when no data", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    const mockResponse = null;
    const errorMsg = "Error al contactar la API";
    // Act
    return await apiCall({ url: "www.todofail.com" }).catch((error) => {
      // Assert
      expect(error.message).toContain(errorMsg);
    });
  });

  test("It should throw 'Invalid format' when apiCall don't have values", async () => {
    // Arrange

    // Act
    const output = await apiCall();

    // Assert
    expect(output).toBe("Invalid format");
  });
});
