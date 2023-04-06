import listAllBreedsApiCall from "./listAllBreedsApiCall";

describe("Given apiCall function for get random images", () => {
  const urlListAllBreeds = "https://dog.ceo/api/breeds/list/all";
  const wrongUrlListAllBreeds = "https://dog.ceo/api/breeds/image/rando";
  test("It should bring random imagen", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    const mockResponse = {
      message: {
        hound: ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"],
        husky: [],
      },
      status: "success",
    };
    // Act
    const listAllBreeds = await listAllBreedsApiCall(urlListAllBreeds);

    // Assert
    expect(listAllBreeds?.message).toEqual(mockResponse.message);
    expect(listAllBreeds?.status).toBe("success");
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
      message: 'No route found for "GET http://dog.ceo/api/breeds/list/al" with code: 0',
      code: 404,
    };
    // Act
    const listAllBreeds = await listAllBreedsApiCall(wrongUrlListAllBreeds);

    // Assert
    expect(listAllBreeds).toStrictEqual(mockResponse);
  });

  test("It should return 'Error al contactar la API' when API failure", async () => {
    // Arrange
    global.fetch = jest.fn(() => Promise.reject("Error al contactar la API"));
    const mockResponse = {
      message: "Error al contactar la API",
    };

    // Act
    return await listAllBreedsApiCall(urlListAllBreeds).catch((error) => {
      // Assert
      expect(error.message).toBe(mockResponse.message);
    });
  });

  test("It should throw an error when url is null", async () => {
    // Arrange
    const url = null;

    // Act
    const output = await listAllBreedsApiCall(url);

    // Assert
    expect(output).toBe("Invalid format");
  });
});
