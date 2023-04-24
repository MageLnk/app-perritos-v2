import filterBySubBreed from "./";

describe("Given filterBySubBreed function", () => {
  test("It should return only breeds with subBreeds", () => {
    // Arrange
    const breeds = [
      { result: "affenpinscher", subBreeds: [] },
      {
        result: "african",
        subBreeds: [],
      },
      {
        result: "airedale",
        subBreeds: [],
      },
      {
        result: "akita",
        subBreeds: [],
      },
      {
        result: "appenzeller",
        subBreeds: [],
      },
      {
        result: "australian",
        subBreeds: ["shepherd"],
      },
    ];

    // Act
    const filteredBreeds = filterBySubBreed(breeds);

    // Assert
    expect(filteredBreeds.length).toBe(1);
    expect(filteredBreeds[0].result).toBe("australian");
    expect(filteredBreeds[0].subBreeds).toEqual(["shepherd"]);
  });

  test("It should return an empty array if no breeds have subBreeds", () => {
    // Arrange
    const breeds = [
      { result: "affenpinscher", subBreeds: [] },
      {
        result: "african",
        subBreeds: [],
      },
      {
        result: "airedale",
        subBreeds: [],
      },
      {
        result: "akita",
        subBreeds: [],
      },
      {
        result: "appenzeller",
        subBreeds: [],
      },
    ];

    // Act
    const filteredBreeds = filterBySubBreed(breeds);

    // Assert
    expect(filteredBreeds.length).toBe(0);
  });

  test("It should return an empty array if breeds array is empty", () => {
    // Arrange
    const breeds = [];

    // Act
    const filteredBreeds = filterBySubBreed(breeds);

    // Assert
    expect(filteredBreeds).toEqual([]);
  });
});
