import apiCall from "../../../Utils/apiCall";

describe("Given apiCall function for get random images", () => {
  const urlByBreed = (breed) => `https://dog.ceo/api/breed/${breed}/images`;
  const wrongUrlByBreed = (breed) => `https://dog.ceo/api/breed/${breed}/image`;
  test("It should bring hound data image", async () => {
    // Arrange
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    const mockResponse = {
      message: [
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg",
      ],
      status: "success",
    };
    // Act
    const imagesByBreed = await apiCall({ url: urlByBreed("hound") });
    //console.log(imagesByBreed);

    // Assert
    expect(imagesByBreed?.message).toEqual(mockResponse.message);
    expect(imagesByBreed?.status).toBe("success");
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
    const imagesByBreed = await apiCall({ url: wrongUrlByBreed("hound") });

    // Assert
    expect(imagesByBreed).toStrictEqual(mockResponse);
  });

  test("It should return 'error' when API failure", async () => {
    // Arrange
    global.fetch = jest.fn(() => Promise.reject(mockResponse));
    const mockResponse = "error";
    // Act
    const imagesByBreed = await apiCall({ url: wrongUrlByBreed("hound") });

    // Assert
    expect(imagesByBreed).toBe(mockResponse);
  });
});
