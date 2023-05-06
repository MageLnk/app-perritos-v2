// Context
import { useState } from "react";
import { useApiBreedContext } from "../../../GlobalContexts/ApiBreedContext";
// Style
import { Checkbox } from "antd";
import "./style.css";
// App
const ShowDogsBySubBreedContentContainer = () => {
  const [selectedBreedList, setSelectedBreedList] = useState([]);

  const { subBreedsList, subBreedInfo, getImageFromSubBreed } = useApiBreedContext();

  const deployBreedOptions = (list) =>
    list.map((breed) => (
      <Checkbox key={breed.result} onClick={(event) => onClickForSelectBreed(breed.result, event, list)}>
        {breed.result}
      </Checkbox>
    ));

  const deploySubBreedOptions = (subBreedList) =>
    subBreedList.map((breed) => (
      <div key={breed.result} className="sub-breed-options">
        <p>{breed.result}</p>
        {/* Segundo map interno para los botones. Debo separar */}
        {breed.subBreeds.map((subBreeds) => (
          <button key={subBreeds} onClick={() => onClickForSelectSubBreed(breed.result, subBreeds)}>
            {subBreeds}
          </button>
        ))}
      </div>
    ));

  const deploySubBreedInfo = (subBreedInformation) =>
    subBreedInformation.map((info) => (
      <div key={info.breedName} className="breed-information">
        <p>
          {info.breedName} - <span>{info.subBreedName}</span>
        </p>
        <img src={info.imageUrl} alt="sub-breed-image-information" />
      </div>
    ));

  const onClickForSelectBreed = (breedName, event, list) => {
    if (event.target.checked === true) addToDeploySubBreedList(breedName, list);
    if (event.target.checked === false) deleteDeploySubBreedList(breedName, list);
  };

  const onClickForSelectSubBreed = (breedName, subBreedName) => {
    getImageFromSubBreed(breedName, subBreedName);
  };

  const addToDeploySubBreedList = (breedName, list) => {
    const selectedBreed = list.find((breed) => breed.result === breedName);

    if (selectedBreed && !selectedBreedList.includes(selectedBreed)) {
      const newBreedList = [...selectedBreedList, selectedBreed];
      setSelectedBreedList(newBreedList);
    }
  };

  const deleteDeploySubBreedList = (breedName) => {
    const newBreedList = selectedBreedList.filter((breed) => breed.result !== breedName);
    setSelectedBreedList(newBreedList);
  };

  return (
    <div data-testid="show-dogs-by-sub-breed-content-container" className="show-dogs-by-sub-breed-content-container">
      <h2>Elige una raza para ver sus sub-razas</h2>
      <div className="breed-to-select">{subBreedsList && deployBreedOptions(subBreedsList)}</div>
      {selectedBreedList.length !== 0 && <h2>Elije la sub-raza</h2>}
      <div className="sub-breed-to-select">{selectedBreedList && deploySubBreedOptions(selectedBreedList)}</div>
      <div className="sub-breed-to-show">{subBreedInfo && deploySubBreedInfo(subBreedInfo)}</div>
    </div>
  );
};

export default ShowDogsBySubBreedContentContainer;
