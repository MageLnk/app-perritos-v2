import { useApiBreedContext } from "../../../GlobalContexts/ApiBreedContext";
// App
const HomeContentContainer = () => {
  const { image, randomBreedImage } = useApiBreedContext();

  //console.log("Test dentro del HomeContentContainer", image);
  return (
    <div data-testid="home-content-container" className="home-content-container">
      <h1>Home Content Container</h1>
      <img src={image?.message} alt="dog-images" />

      {randomBreedImage && <img src={randomBreedImage?.message} alt="dog-search-images" />}
    </div>
  );
};

export default HomeContentContainer;
