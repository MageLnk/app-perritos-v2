import apiCall from "../../../Utils/apiCall";

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
    const listAllSubBreeds = await apiCall({ url: randomImageOfABreed("akita") });

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
    const listAllSubBreeds = await apiCall({ url: wrongRandomImageOfABreed("akita") });

    // Assert
    expect(listAllSubBreeds).toStrictEqual(mockResponse);
  });

  test("It should return 'error' when API failure", async () => {
    // Arrange
    global.fetch = jest.fn(() => Promise.reject(mockResponse));
    const mockResponse = "error";
    // Act
    const listAllSubBreeds = await apiCall({ url: randomImageOfABreed("akita") });

    // Assert
    expect(listAllSubBreeds).toBe(mockResponse);
  });
});
