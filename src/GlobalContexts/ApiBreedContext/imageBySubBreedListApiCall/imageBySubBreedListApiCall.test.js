import imageBySubBreedListApiCall from "./imageBySubBreedListApiCall";

describe("Given imageBySubBreedListApiCall function", () => {
  const randomImageOfASubBreed = (breed) => `https://dog.ceo/api/breed/hound/${breed}/images/random`;
  const wrongRandomImageOfASubBreed = (breed) => `https://dog.ceo/api/breed/hound/${breed}/images/rando`;
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
    const getRandomImageSubBreed = await imageBySubBreedListApiCall(randomImageOfASubBreed("afghan"));

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
    const getRandomImageSubBreed = await imageBySubBreedListApiCall(wrongRandomImageOfASubBreed("afghan"));

    // Assert
    expect(getRandomImageSubBreed).toStrictEqual(mockResponse);
  });
});
