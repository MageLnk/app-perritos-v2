import { Link } from "react-router-dom";
// Style
import logoImage from "../../../../images/logo.jpg";
import "./style.css";
// App
const Logo = () => {
  return (
    <Link to={"/"} aria-label="Ir a la pagina principal" className="logo-container">
      <img className="logo-website" src={logoImage} alt="Logo" />
    </Link>
  );
};

export default Logo;

/*
import { Link } from "react-router-dom";
// Style
import logoImage from "../../../../images/logo.jpg";
// App
const Logo = () => {
  return (
    <Link to={"/"} aria-label="Ir a la pagina principal">
      <img className="logo-website" src="../../../../images/logo.jpg" alt="Logo" />
    </Link>
  );
};

export default Logo;
*/
