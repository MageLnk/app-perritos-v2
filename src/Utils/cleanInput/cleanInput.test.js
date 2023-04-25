import cleanInput from "./";

describe("Give cleanInput function", () => {
  test("It should force lowerCase to the word", () => {
    // Arrange
    const wordToChange = "Akita";
    const expetedWord = "akita";

    // Act
    const output = cleanInput(wordToChange);

    // Assert
    expect(output).toBe(expetedWord);
  });

  test("It should clean the word", () => {
    // Arrange
    const wordToChange = " P3rritos__7$";
    const expetedWord = "prritos";

    // Act
    const output = cleanInput(wordToChange);

    // Assert
    expect(output).toBe(expetedWord);
  });

  test("It should clean the word", () => {
    // Arrange
    const wordToChange = " P3rritos_ 7$45xs";
    const expetedWord = "prritosxs";

    // Act
    const output = cleanInput(wordToChange);

    // Assert
    expect(output).toBe(expetedWord);
  });

  test("It should clean the word", () => {
    // Arrange
    const wordToChange = "Razaç";
    const expetedWord = "raza";

    // Act
    const output = cleanInput(wordToChange);

    // Assert
    expect(output).toBe(expetedWord);
  });

  test("It should throw an error for invalid format", () => {
    // Arrange
    const wordToChange = "1234";
    const expetedWord = "Formato inválido";

    // Act/Assert
    expect(() => cleanInput(wordToChange)).toThrow(expetedWord);
  });

  test("It should throw an error for invalid format", () => {
    // Arrange
    const wordToChange = 1234;
    const expetedWord = "Formato inválido";

    // Act/Assert
    expect(() => cleanInput(wordToChange)).toThrow(expetedWord);
  });

  test("It should throw an error for invalid format", () => {
    // Arrange
    const wordToChange = null;
    const expetedWord = "Formato inválido";

    // Act/Assert
    expect(() => cleanInput(wordToChange)).toThrow(expetedWord);
  });
});
