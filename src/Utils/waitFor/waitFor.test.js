import { waitFor } from "./";
describe("Given waitFor function", () => {
  jest.useFakeTimers();

  afterEach(() => {
    jest.resetAllMocks();
  });
  test("should execute the callback after the specified time", () => {
    // Arrange
    const callback = jest.fn();
    const time = 1000;

    // Act
    const intervalId = waitFor(callback, time);
    jest.advanceTimersByTime(time); // <-- No olvidar que este método hace que el timer se mueva en el tiempo especificado

    // Assert
    expect(callback).toHaveBeenCalledTimes(1);
    clearInterval(intervalId);
  });
});
