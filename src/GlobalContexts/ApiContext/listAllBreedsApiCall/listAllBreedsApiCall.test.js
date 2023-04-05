import apiCall from "../../../Utils/apiCall";

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
    const listAllBreeds = await apiCall({ url: urlListAllBreeds });

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
    const listAllBreeds = await apiCall({ url: wrongUrlListAllBreeds });

    // Assert
    expect(listAllBreeds).toStrictEqual(mockResponse);
  });

  test("It should return 'error' when API failure", async () => {
    // Arrange
    global.fetch = jest.fn(() => Promise.reject(mockResponse));
    const mockResponse = "error";
    // Act
    const listAllBreeds = await apiCall({ url: urlListAllBreeds });

    // Assert
    expect(listAllBreeds).toBe(mockResponse);
  });
});
