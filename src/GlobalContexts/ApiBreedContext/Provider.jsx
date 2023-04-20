import { useEffect, useState } from "react";
// Context
import ApiBreedContext from "./";
// Utilities
import randomImageApiCall from "./randomImageApiCall/randomImageApiCall";
// Urls
const urlRandomImage = "https://dog.ceo/api/breeds/image/random";
// Provider
const ApiBreedContextProvider = ({ children }) => {
  const [image, setImage] = useState({});

  const getRandomImageApiCall = async (url) => {
    const image = await randomImageApiCall(url);
    setImage(image);
  };

  useEffect(() => {
    getRandomImageApiCall(urlRandomImage);
  }, []);

  return (
    <ApiBreedContext.Provider
      value={{
        image,
        getImageByBreedListApiCall,
      }}
    >
      {children}
    </ApiBreedContext.Provider>
  );
};

export default ApiBreedContextProvider;
