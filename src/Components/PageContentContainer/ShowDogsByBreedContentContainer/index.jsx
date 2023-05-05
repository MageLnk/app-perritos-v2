// Context
import { useApiBreedContext } from "../../../GlobalContexts/ApiBreedContext";
// Style
import "./style.css";
// App
const ShowDogsByBreedContentContainer = () => {
  const { breedsList, breedInfo, getImageFromBreed } = useApiBreedContext();

  const deployOptions = (list) =>
    list.map((breed) => (
      <button key={breed.result} onClick={() => onClickOption(breed.result)}>
        {breed.result}
      </button>
    ));
  const deployBreedInfo = (breedInformation) =>
    breedInformation.map((info) => (
      <div key={info.breedName} className="breed-information">
        <p>{info.breedName}</p>
        <img src={info.imageUrl} alt="breed-image-information" />
      </div>
    ));

  const onClickOption = (breed) => {
    getImageFromBreed(breed);
  };

  return (
    <div data-testid="show-dogs-by-breed-content-container" className="show-dogs-by-breed-content-container">
      <div className="breed-list-to-select">
        <div className="breed-to-select">{breedsList && deployOptions(breedsList)}</div>
        <div className="breed-to-show">{breedInfo && deployBreedInfo(breedInfo)}</div>
      </div>
    </div>
  );
};

export default ShowDogsByBreedContentContainer;
