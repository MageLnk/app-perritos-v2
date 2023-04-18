import { useState, useEffect } from "react";
// Styles
import { Input } from "antd";
const { Search } = Input;
// Utils
import cleanInput from "../../Utils/cleanInput";
import { useApiBreedContext } from "../../GlobalContexts/ApiBreedContext";
// App
const InputBreed = () => {
  const [breed, setBreed] = useState("");
  const [placeHolderReactive, setPlaceHolderReactive] = useState("Write a breed");
  const { getImageByBreedListApiCall } = useApiBreedContext();

  useEffect(() => {
    if (placeHolderReactive !== "Write a breed") {
      setInterval(() => {
        setPlaceHolderReactive("Write a breed");
      }, 3000);
    }
  }, [placeHolderReactive]);

  const onInputChange = (event) => {
    setBreed(event.target.value);
  };

  const onInputSearch = (value) => {
    try {
      const cleanedWord = cleanInput(value);
      getImageByBreedListApiCall(cleanedWord);
      setBreed("");
    } catch (error) {
      setPlaceHolderReactive(error.message);
      setBreed("");
    }
  };

  return (
    <Search
      status={placeHolderReactive !== "Write a breed" && "error"}
      onSearch={onInputSearch}
      onChange={onInputChange}
      value={breed}
      placeholder={placeHolderReactive}
    />
  );
};

export default InputBreed;
