// Context
import { useState } from "react";
import { useApiBreedContext } from "../../../GlobalContexts/ApiBreedContext";
// Style
import { Checkbox } from "antd";
// App
const ShowDogsBySubBreedContentContainer = () => {
  const [selectedBreedList, setSelectedBreedList] = useState([]);

  const { subBreedsList } = useApiBreedContext();
  const deployOptions = (list) =>
    list.map((breed) => (
      <Checkbox key={breed.result} onClick={(event) => onClickForSelectBreed(breed.result, event, list)}>
        {breed.result}
      </Checkbox>
    ));

  const deploySubBreedOptions = (subBreedList, selectedBreedList) => {
    const filteredList = subBreedList.filter((breed) => selectedBreedList.includes(breed.result));
    //console.log(filteredList);
    const subBreeds = filteredList.map((breed) => breed.subBreeds);

    subBreeds.map((breed) => (
      <div key={breed}>
        <p>{selectedBreedList}</p>
        <button onClick={() => onClickForSelectSubBreed(breed)}>{breed}</button>
      </div>
    ));
  };

  const onClickForSelectSubBreed = (breedName) => {
    //console.log(breedName);
  };

  const onClickForSelectBreed = (breedName, event, list) => {
    if (event.target.checked === true) addToDeploySubBreedList(breedName, list);
    if (event.target.checked === false) deleteDeploySubBreedList(breedName, list);
  };

  const addToDeploySubBreedList = (breedName, list) => {
    const selectedBreed = list.find((breed) => breed.result === breedName);
    if (selectedBreed && !selectedBreedList.includes(selectedBreed)) {
      setSelectedBreedList((prevSelectedBreedList) => [...prevSelectedBreedList, selectedBreed]);
    }
  };

  const deleteDeploySubBreedList = (breedName) => {
    if (!selectedBreedList.includes(breedName)) {
      console.log(`${breedName} no está en la lista`);
      return;
    }
    const newArray = selectedBreedList.filter((breed) => breed !== breedName);
    setSelectedBreedList(newArray);
  };

  console.log("SADFADFASFADS", selectedBreedList);
  return (
    <div data-testid="show-dogs-by-sub-breed-content-container" className="show-dogs-by-sub-breed-content-container">
      <h3>Elige una raza para ver sus sub-razas</h3>
      <div className="breed-to-select">{subBreedsList && deployOptions(subBreedsList)}</div>
      <h3>Elije la sub-raza</h3>
      <div className="sub-breed-to-select">
        {selectedBreedList && deploySubBreedOptions(subBreedsList, selectedBreedList)}
      </div>
    </div>
  );
};

export default ShowDogsBySubBreedContentContainer;
