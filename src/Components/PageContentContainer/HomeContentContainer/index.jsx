import { useApiBreedContext } from "../../../GlobalContexts/ApiBreedContext";
// App
const HomeContentContainer = () => {
  const { image } = useApiBreedContext();

  return (
    <div data-testid="home-content-container" className="home-content-container">
      <h1>Home Content Container</h1>
      <img src={image?.message} alt="dog-images" />
    </div>
  );
};

export default HomeContentContainer;
