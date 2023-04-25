import Logo from "./Logo";
import Menu from "./Menu";

// App
const HeaderContentContainer = () => {
  return (
    <div data-testid="header-content-container" className="header-content-container">
      <div className="logo-header-container">
        <Logo />
      </div>
      <div className="brand-header-container">
        <h3>Brand page</h3>
      </div>
      <div className="menu-header-container">
        <Menu />
      </div>
    </div>
  );
};

export default HeaderContentContainer;
