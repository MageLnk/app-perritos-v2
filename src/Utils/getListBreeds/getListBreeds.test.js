import getListBreeds from "./";
import listAllBreedsApiCall from "../../GlobalContexts/ApiBreedContext/listAllBreedsApiCall/listAllBreedsApiCall";
import transformIntoArray from "../transformIntoArray";

jest.mock("../../GlobalContexts/ApiBreedContext/listAllBreedsApiCall/listAllBreedsApiCall");
jest.mock("../transformIntoArray");

describe("Given getListBreeds function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("It should return an array of breeds", async () => {
    // Arrange
    const urlListAllBreeds = "https://dog.ceo/api/breeds/list/all";
    const mockMessage = {
      affenpinscher: [],
      african: [],
      airedale: [],
      akita: [],
      appenzeller: [],
      australian: ["shepherd"],
    };
    const mockResult = [
      { result: "affenpinscher", subBreeds: [] },
      { result: "african", subBreeds: [] },
      { result: "airedale", subBreeds: [] },
      { result: "akita", subBreeds: [] },
      { result: "appenzeller", subBreeds: [] },
      { result: "australian", subBreeds: ["shepherd"] },
    ];
    listAllBreedsApiCall.mockResolvedValue({ message: mockMessage });
    transformIntoArray.mockReturnValue(mockResult);

    // Act
    const result = await getListBreeds();

    // Assert
    expect(listAllBreedsApiCall).toHaveBeenCalledTimes(1);
    expect(listAllBreedsApiCall).toHaveBeenCalledWith(urlListAllBreeds);
    expect(transformIntoArray).toHaveBeenCalledTimes(1);
    expect(transformIntoArray).toHaveBeenCalledWith(mockMessage);
    expect(result).toEqual(mockResult);
  });

  it("It should throw an error when message is null", async () => {
    // Arrange
    listAllBreedsApiCall.mockResolvedValue({ message: null });

    // Act and Assert
    await expect(getListBreeds()).rejects.toThrow("La API se cayó");
  });
});
