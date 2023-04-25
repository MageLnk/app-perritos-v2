import imageBySubBreedListApiCall from "./imageBySubBreedListApiCall";

describe("Given imageBySubBreedListApiCall function", () => {
  const randomImageOfASubBreed = (breed, subBreed) => `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`;
  const wrongRandomImageOfASubBreed = (subBreed) => `https://dog.ceo/api/breed/hound/${subBreed}/images/rando`;
  test("It should bring a random imagen of afghan sub breed who belongs to hound breed", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    const mockResponse = {
      message: "https://images.dog.ceo/breeds/hound-afghan/n02088094_3396.jpg",
      status: "success",
    };
    // Act
    const getRandomImageSubBreed = await imageBySubBreedListApiCall(randomImageOfASubBreed("hound", "afghan"));

    // Assert
    expect(getRandomImageSubBreed?.message).toEqual(mockResponse.message);
    expect(getRandomImageSubBreed?.status).toBe("success");
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
      message: 'No route found for "GET http://dog.ceo/api/breed/hound/afghan/images/rando" with code: 0',
      code: 404,
    };
    // Act
    const getRandomImageSubBreed = await imageBySubBreedListApiCall(wrongRandomImageOfASubBreed("hound", "afghan"));

    // Assert
    expect(getRandomImageSubBreed).toStrictEqual(mockResponse);
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
      message: "Breed not found (sub breed does not exist)",
      code: 404,
    };
    // Act
    const listAllSubBreeds = await imageBySubBreedListApiCall(randomImageOfASubBreed("hound", "afgha"));

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
    return await imageBySubBreedListApiCall(randomImageOfASubBreed("hound", "afghan")).catch((error) => {
      // Assert
      expect(error.message).toBe(mockResponse.message);
    });
  });

  test("It should throw an error when url is null", async () => {
    // Arrange
    const url = null;

    // Act
    const output = await imageBySubBreedListApiCall(url);

    // Assert
    expect(output).toBe("Invalid format");
  });
});
