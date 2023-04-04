// Api Temporal Call
import apiCall from "../../../Utils/apiCall";
/////////
jest.mock("../../../Utils/apiCall");

describe("Given apiCall function for get random images", () => {
  const urlListAllBreeds = "https://dog.ceo/api/breeds/list/all";
  const wrongUrlListAllBreeds = "https://dog.ceo/api/breeds/image/rando";
  test("It should bring random imagen", () => {
    // Arrange
    const mockResponse = {
      message: {
        hound: ["afghan", "basset", "blood", "english", "ibizan", "plott", "walker"],
        husky: [],
      },
      status: "success",
    };
    // Act
    apiCall.mockReturnValue(mockResponse);
    // apiCall.mockResolvedValue(mockResponse); // <-- Esta es para cuando es asyncrona
    const listAllBreeds = apiCall({ url: urlListAllBreeds });

    // Assert
    expect(listAllBreeds?.message).toEqual(mockResponse.message);
    expect(listAllBreeds?.status).toBe("success");
  });

  test("It should exploted when wrong url", async () => {
    // Arrange
    const mockResponse = {
      status: "error",
      message: 'No route found for "GET http://dog.ceo/api/breeds/list/al" with code: 0',
      code: 404,
    };
    // Act
    // apiCall.mockReturnValue(mockResponse);
    apiCall.mockResolvedValue(mockResponse); // <-- Esta es para cuando es asyncrona
    const listAllBreeds = await apiCall(wrongUrlListAllBreeds);

    // Assert
    expect(listAllBreeds).toStrictEqual(mockResponse);
  });
});
