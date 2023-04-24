import { useEffect, useState } from "react";
// Context
import ApiBreedContext from "./";
// Utilities
import randomImageApiCall from "./randomImageApiCall/randomImageApiCall";
import getListBreeds from "../../Utils/getListBreeds";
import filterByBreed from "../../Utils/filterByBreed";
import filterBySubBreed from "../../Utils/filterBySubBreed";
// Urls
const urlRandomImage = "https://dog.ceo/api/breeds/image/random";

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
    const listAllBreeds = await getListBreeds();
    setBreeds(filterByBreed(listAllBreeds));
    setSubBreeds(filterBySubBreed(listAllBreeds));
  };

  useEffect(() => {
    getRandomImageApiCall(urlRandomImage);
    getListAllBreedsApiCall();
  }, []);

  //console.log("Viendo el breeds", breeds);
  //console.log("Viendo el sub Breeds", subBreeds);

  return (
    <ApiBreedContext.Provider
      value={{
        image,
        breeds,
        subBreeds,
      }}
    >
      {children}
    </ApiBreedContext.Provider>
  );
};

export default ApiBreedContextProvider;
