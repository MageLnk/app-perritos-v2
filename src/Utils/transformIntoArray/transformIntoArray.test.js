import transformIntoArray from "./";

test("should transform object into array", () => {
  // Arrange
  const message = {
    affenpinscher: [],
    african: [],
    airedale: [],
    akita: [],
    appenzeller: [],
    australian: ["shepherd"],
    basenji: [],
  };
  const expectedOutput = [
    { result: "affenpinscher", subBreeds: [] },
    { result: "african", subBreeds: [] },
    { result: "airedale", subBreeds: [] },
    { result: "akita", subBreeds: [] },
    { result: "appenzeller", subBreeds: [] },
    { result: "australian", subBreeds: ["shepherd"] },
    { result: "basenji", subBreeds: [] },
  ];

  // Act
  const output = transformIntoArray(message);

  // Assert
  expect(output).toEqual(expectedOutput);
});
