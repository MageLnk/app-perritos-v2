import { useEffect, useState } from "react";
// Context
import ApiBreedContext from "./";
// Utilities
import randomImageApiCall from "./randomImageApiCall/randomImageApiCall";
import getListBreeds from "../../Utils/getListBreeds";
import filterByBreed from "../../Utils/filterByBreed";
import filterBySubBreed from "../../Utils/filterBySubBreed";
import imageByBreedListApiCall from "./imageByBreedListApiCall/imageByBreedListApiCall";
import imageBySubBreedListApiCall from "./imageBySubBreedListApiCall/imageBySubBreedListApiCall";

// Provider
const ApiBreedContextProvider = ({ children }) => {
  const [image, setImage] = useState({});
  const [breedInfo, setBreedInfo] = useState([]);
  const [subBreedInfo, setSubBreedInfo] = useState([]);
  const [breedsList, setBreedsList] = useState([]);
  const [subBreedsList, setSubBreedsList] = useState([]);

  const getRandomImageApiCall = async () => {
    const urlRandomImage = "https://dog.ceo/api/breeds/image/random";
    const image = await randomImageApiCall(urlRandomImage);
    setImage(image);
  };

  const getListAllBreedsApiCall = async () => {
    const listAllBreeds = await getListBreeds();
    setBreedsList(filterByBreed(listAllBreeds));
    setSubBreedsList(filterBySubBreed(listAllBreeds));
  };

  const getImageFromBreed = async (breedName) => {
    const randomImageOfABreed = (breed) => `https://dog.ceo/api/breed/${breed}/images/random`;

    const image = await imageByBreedListApiCall(randomImageOfABreed(breedName));
    if (!image) throw Error("No hay data");
    const newBreedInfo = [
      ...breedInfo,
      {
        imageUrl: image.message,
        breedName,
      },
    ];
    setBreedInfo(newBreedInfo);
  };

  const getImageFromSubBreed = async (breedName, subBreedName) => {
    const randomImageOfASubBreed = (breed, subBreed) => `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`;

    const image = await imageBySubBreedListApiCall(randomImageOfASubBreed(breedName, subBreedName));
    if (!image) throw Error("No hay data");
    const newSubBreedInfo = [
      ...subBreedInfo,
      {
        imageUrl: image.message,
        breedName,
        subBreedName,
      },
    ];
    setSubBreedInfo(newSubBreedInfo);
  };

  useEffect(() => {
    getRandomImageApiCall();
    getListAllBreedsApiCall();
  }, []);

  return (
    <ApiBreedContext.Provider
      value={{
        image,
        breedsList,
        subBreedsList,
        breedInfo,
        subBreedInfo,
        getImageFromBreed,
        getImageFromSubBreed,
      }}
    >
      {children}
    </ApiBreedContext.Provider>
  );
};

export default ApiBreedContextProvider;
