import { useApiBreedContext } from "../../../GlobalContexts/ApiBreedContext";
// Style
import "./style.css";
// App
const HomeContentContainer = () => {
  const { image } = useApiBreedContext();

  return (
    <div data-testid="home-content-container" className="home-content-container">
      <h1>¡Adopta a tu perrito ahora!</h1>
      <div className="home-img-container">
        <img src={image?.message} alt="dog-images" />
      </div>
      <h2>¡No te quedes sin tu perrito!</h2>
    </div>
  );
};

export default HomeContentContainer;
