import randomImageApiCall from "./randomImageApiCall";

describe("Given apiCall function for get random images", () => {
  const urlRandomImage = "https://dog.ceo/api/breeds/image/random";
  const wrongUrlRandomImage = "https://dog.ceo/api/breeds/image/rando";
  test("It should bring random imagen", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    const mockResponse = {
      message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
      status: "success",
    };
    // Act
    const getRandomImageApi = await randomImageApiCall(urlRandomImage);

    // Assert
    expect(getRandomImageApi?.message).toBe("https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg");
    expect(getRandomImageApi?.status).toBe("success");
  });

  test("It should bring status error when wrong url", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    const mockResponse = {
      status: "error",
      message: 'No route found for "GET http://dog.ceo/api/breeds/image/rando" with code: 0',
      code: 404,
    };
    // Act
    const getRandomImageApi = await randomImageApiCall(wrongUrlRandomImage);

    // Assert
    expect(getRandomImageApi).toStrictEqual(mockResponse);
  });

  test("It should return 'Error al contactar la API' when API failure", async () => {
    // Arrange
    global.fetch = jest.fn(() => Promise.reject("Error al contactar la API"));
    const mockResponse = {
      message: "Error al contactar la API",
    };

    // Act
    return await randomImageApiCall(urlRandomImage).catch((error) => {
      // Assert
      expect(error.message).toBe(mockResponse.message);
    });
  });

  test("It should throw an error when url is null", async () => {
    // Arrange
    const url = null;

    // Act
    const output = await randomImageApiCall(url);

    // Assert
    expect(output).toBe("Invalid format");
  });
});
