const transformIntoArray = (message) =>
  Object.entries(message).map(([key, value]) => {
    return { result: key, subBreeds: value };
  });

export default transformIntoArray;
