import apiCall from "../../../Utils/apiCall";

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
    const getRandomImageApi = await apiCall({ url: urlRandomImage });

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
    const getRandomImageApi = await apiCall({ url: wrongUrlRandomImage });

    // Assert
    expect(getRandomImageApi).toStrictEqual(mockResponse);
  });

  test("It should return 'error' when API failure", async () => {
    // Arrange
    global.fetch = jest.fn(() => Promise.reject(mockResponse));
    const mockResponse = "error";
    // Act
    const getRandomImageApi = await apiCall({ url: urlRandomImage });

    // Assert
    expect(getRandomImageApi).toBe(mockResponse);
  });
});
