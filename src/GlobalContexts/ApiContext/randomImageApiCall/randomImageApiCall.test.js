// Api Temporal Call
import apiCall from "../../../Utils/apiCall";
/////////
jest.mock("../../../Utils/apiCall");

describe("Given apiCall function for get random images", () => {
  const urlRandomImage = "https://dog.ceo/api/breeds/image/random";
  const wrongUrlRandomImage = "https://dog.ceo/api/breeds/image/rando";
  test("It should bring random imagen", () => {
    // Arrange
    const mockResponse = {
      message: "https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg",
      status: "success",
    };
    // Act
    apiCall.mockReturnValue(mockResponse);
    // apiCall.mockResolvedValue(mockResponse); // <-- Esta es para cuando es asyncrona
    const getRandomImageApi = apiCall({ url: urlRandomImage });

    // Assert
    expect(getRandomImageApi?.message).toBe("https://images.dog.ceo/breeds/cotondetulear/IMAG1063.jpg");
    expect(getRandomImageApi?.status).toBe("success");
  });

  test("It should exploted when wrong url", () => {
    // Arrange
    const mockResponse = {
      status: "error",
      message: 'No route found for "GET http://dog.ceo/api/breeds/image/rando" with code: 0',
      code: 404,
    };
    // Act
    apiCall.mockReturnValue(mockResponse);
    // apiCall.mockResolvedValue(mockResponse); // <-- Esta es para cuando es asyncrona
    const getRandomImageApi = apiCall(wrongUrlRandomImage);

    // Assert
    expect(getRandomImageApi).toStrictEqual(mockResponse);
  });
});
