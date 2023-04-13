import listAllSubBreedsApiCall from "./listAllSubBreedsApiCall";

describe("Given apiCall function for get random images", () => {
  const urlListAllSubBreeds = (breed) => `https://dog.ceo/api/breed/${breed}/list`;
  const wrongUrlListAllSubBreeds = (breed) => `https://dog.ceo/api/breed/${breed}/lis`;
  test("It should bring random imagen", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    const mockResponse = {
      message: ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"],
      status: "success",
    };
    // Act
    const listAllSubBreeds = await listAllSubBreedsApiCall(urlListAllSubBreeds("hound"));

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
      message: "Breed not found (sub breed does not exist)",
      code: 404,
    };
    // Act
    const listAllSubBreeds = await listAllSubBreedsApiCall(wrongUrlListAllSubBreeds("hound"));

    // Assert
    expect(listAllSubBreeds).toStrictEqual(mockResponse);
  });

  test("It should bring error when the Subbreed is wrong", async () => {
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
    const imagesByBreed = await listAllSubBreedsApiCall(urlListAllSubBreeds("houn"));
    //console.log(imagesByBreed);

    // Assert
    expect(imagesByBreed?.message).toEqual(mockResponse.message);
    expect(imagesByBreed?.status).toBe("error");
  });

  test("It should return 'Error al contactar la API' when API failure", async () => {
    // Arrange
    global.fetch = jest.fn(() => Promise.reject("Error al contactar la API"));
    const mockResponse = {
      message: "Error al contactar la API",
    };

    // Act
    return await listAllSubBreedsApiCall(urlListAllSubBreeds("hound")).catch((error) => {
      // Assert
      expect(error.message).toBe(mockResponse.message);
    });
  });

  test("It should throw an error when url is null", async () => {
    // Arrange
    const url = null;

    // Act
    const output = await listAllSubBreedsApiCall(url);

    // Assert
    expect(output).toBe("Invalid format");
  });
});
