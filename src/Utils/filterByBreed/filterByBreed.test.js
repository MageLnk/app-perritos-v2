import filterByBreed from "./";

describe("Given filterByBreed function", () => {
  test("It should return an array with only breeds without subBreeds", () => {
    // Arrange
    const breeds = [
      { result: "affenpinscher", subBreeds: [] },
      { result: "african", subBreeds: [] },
      { result: "airedale", subBreeds: [] },
      { result: "akita", subBreeds: [] },
      { result: "appenzeller", subBreeds: [] },
      { result: "australian", subBreeds: ["shepherd"] },
    ];
    const output = [
      { result: "affenpinscher", subBreeds: [] },
      { result: "african", subBreeds: [] },
      { result: "airedale", subBreeds: [] },
      { result: "akita", subBreeds: [] },
      { result: "appenzeller", subBreeds: [] },
    ];

    // Act
    const filteredBreeds = filterByBreed(breeds);

    // Assert
    expect(filteredBreeds).toEqual(output);
  });

  test("It should return an empty array if all breeds have subBreeds", () => {
    // Arrange
    const breeds = [
      { result: "australian", subBreeds: ["shepherd"] },
      { result: "bulldog", subBreeds: ["english", "french"] },
      { result: "chihuahua", subBreeds: ["short-haired", "long-haired"] },
    ];

    // Act
    const filteredBreeds = filterByBreed(breeds);

    // Assert
    expect(filteredBreeds).toEqual([]);
  });

  test("It should return an empty array if breeds array is empty", () => {
    // Arrange
    const breeds = [];

    // Act
    const filteredBreeds = filterByBreed(breeds);

    // Assert
    expect(filteredBreeds).toEqual([]);
  });
});
