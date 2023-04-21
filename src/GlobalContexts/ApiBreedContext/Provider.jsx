import { useEffect, useState } from "react";
// Context
import ApiBreedContext from "./";
// Utilities
import randomImageApiCall from "./randomImageApiCall/randomImageApiCall";
import listAllBreedsApiCall from "./listAllBreedsApiCall/listAllBreedsApiCall";
import transformIntoArray from "../../Utils/transformIntoArray";
// Urls
const urlRandomImage = "https://dog.ceo/api/breeds/image/random";
const urlListAllBreeds = "https://dog.ceo/api/breeds/list/all";

// Provider
const ApiBreedContextProvider = ({ children }) => {
  const [image, setImage] = useState({});
  const [breeds, setBreeds] = useState([]);
  const [subBreeds, setSubBreeds] = useState([]);

  const getRandomImageApiCall = async (url) => {
    const image = await randomImageApiCall(url);
    setImage(image);
  };

  const getListAllBreedsApiCall = async () => {
    const { message } = await listAllBreedsApiCall(urlListAllBreeds);
    const listAllBreeds = transformIntoArray(message);

    console.log("THE LIST PAPU2", listAllBreeds);

    const filterByBreed = listAllBreeds.filter((results) => results.subBreeds.length === 0 && results);
    const filterBySubBreed = listAllBreeds.filter((results) => results.subBreeds.length !== 0 && results);

    console.log("DSAFADSFADSF", filterBySubBreed);
  };

  useEffect(() => {
    getRandomImageApiCall(urlRandomImage);
    getListAllBreedsApiCall();
  }, []);

  return (
    <ApiBreedContext.Provider
      value={{
        image,
      }}
    >
      {children}
    </ApiBreedContext.Provider>
  );
};

export default ApiBreedContextProvider;
