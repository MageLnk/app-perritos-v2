import { useEffect, useState } from "react";
// Context
import ApiBreedContext from "./";
// Utilities
import randomImageApiCall from "./randomImageApiCall/randomImageApiCall";
import imageByBreedListApiCall from "./imageByBreedListApiCall/imageByBreedListApiCall";

//
const urlRandomImage = "https://dog.ceo/api/breeds/image/random";
const randomImageOfABreed = (breed) => `https://dog.ceo/api/breed/${breed}/images/random`;
//
const ApiBreedContextProvider = ({ children }) => {
  const [image, setImage] = useState({});
  const [randomBreedImage, setRandomBreedImage] = useState({});

  const getRandomImageApiCall = async (url) => {
    const image = await randomImageApiCall(url);
    setImage(image);
  };

  const getImageByBreedListApiCall = async (breed) => {
    const image = await imageByBreedListApiCall(randomImageOfABreed(breed));
    setRandomBreedImage(image);
  };

  useEffect(() => {
    getRandomImageApiCall(urlRandomImage);
  }, []);

  return (
    <ApiBreedContext.Provider
      value={{
        image,
        getImageByBreedListApiCall,
        randomBreedImage,
      }}
    >
      {children}
    </ApiBreedContext.Provider>
  );
};

export default ApiBreedContextProvider;
