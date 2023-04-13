import imageByBreedListApiCall from "./imageByBreedListApiCall";

describe("Given apiCall function for get random images", () => {
  const randomImageOfABreed = (breed) => `https://dog.ceo/api/breed/${breed}/images/random`;
  const wrongRandomImageOfABreed = (breed) => `https://dog.ceo/api/breed/${breed}/images/rando`;
  test("It should bring random imagen", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    const mockResponse = {
      message: "https://images.dog.ceo/breeds/akita/Akita_Inu_dog.jpg",
      status: "success",
    };
    // Act
    const listAllSubBreeds = await imageByBreedListApiCall(randomImageOfABreed("akita"));

    // Assert
    expect(listAllSubBreeds?.message).toEqual(mockResponse.message);
    expect(listAllSubBreeds?.status).toBe("success");
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
      message: 'No route found for "GET http://dog.ceo/api/breed/akita/images/rando" with code: 0',
      code: 404,
    };
    // Act
    const listAllSubBreeds = await imageByBreedListApiCall(wrongRandomImageOfABreed("akita"));

    // Assert
    expect(listAllSubBreeds).toStrictEqual(mockResponse);
  });

  test("It should bring status error when breed is wrong", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    const mockResponse = {
      status: "error",
      message: "Breed not found (master breed does not exist)",
      code: 404,
    };
    // Act
    const listAllSubBreeds = await imageByBreedListApiCall(wrongRandomImageOfABreed("akitaa"));

    // Assert
    expect(listAllSubBreeds).toStrictEqual(mockResponse);
  });

  test("It should return 'Error al contactar la API' when API failure", async () => {
    // Arrange
    global.fetch = jest.fn(() => Promise.reject("Error al contactar la API"));
    const mockResponse = {
      message: "Error al contactar la API",
    };

    // Act
    return await imageByBreedListApiCall(randomImageOfABreed("akita")).catch((error) => {
      // Assert
      expect(error.message).toBe(mockResponse.message);
    });
  });

  test("It should throw an error when url is null", async () => {
    // Arrange
    const url = null;

    // Act
    const output = await imageByBreedListApiCall(url);

    // Assert
    expect(output).toBe("Invalid format");
  });
});
