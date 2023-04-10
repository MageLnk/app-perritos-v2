import { useEffect, useState } from "react";
// Context
import ApiBreedContext from ".";
// Utilities
import randomImageApiCall from "./randomImageApiCall/randomImageApiCall";

const ApiBreedContextProvider = ({ children }) => {
  const [image, setImage] = useState({});

  const urlRandomImage = "https://dog.ceo/api/breeds/image/random";

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
      }}
    >
      {children}
    </ApiBreedContext.Provider>
  );
};

export default ApiBreedContextProvider;
