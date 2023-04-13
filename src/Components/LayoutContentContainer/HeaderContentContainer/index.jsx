import InputBreed from "../../InputBreed";
import Logo from "./Logo";

// App
const HeaderContentContainer = () => {
  return (
    <div data-testid="header-content-container" className="header-content-container">
      <div className="logo-header-container">
        <Logo />
      </div>
      <div className="input-header-container">
        <InputBreed />
      </div>
      {/* Opciones/Login/Algo */}
      HeaderContentContainer
    </div>
  );
};

export default HeaderContentContainer;
