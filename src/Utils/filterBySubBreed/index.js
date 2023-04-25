const filterBySubBreed = (breeds) => breeds.filter((breed) => breed.subBreeds.length !== 0 && breed);

export default filterBySubBreed;
