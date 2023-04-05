import apiCall from "../../../Utils/apiCall";

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
    const listAllSubBreeds = await apiCall({ url: urlListAllSubBreeds("hound") });

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
    const listAllSubBreeds = await apiCall({ url: wrongUrlListAllSubBreeds("hound") });

    // Assert
    expect(listAllSubBreeds).toStrictEqual(mockResponse);
  });

  test("It should return 'error' when API failure", async () => {
    // Arrange
    global.fetch = jest.fn(() => Promise.reject(mockResponse));
    const mockResponse = "error";
    // Act
    const listAllSubBreeds = await apiCall({ url: urlListAllSubBreeds("hound") });

    // Assert
    expect(listAllSubBreeds).toBe(mockResponse);
  });
});
