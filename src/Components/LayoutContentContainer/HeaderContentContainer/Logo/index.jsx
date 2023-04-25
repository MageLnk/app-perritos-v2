//import LogoImage from "../../../../images/logo.jpg";

import { Link } from "react-router-dom";

// App
const Logo = () => {
  return (
    <Link to={"/"} aria-label="Ir a la pagina principal">
      <img className="logo-website" src="../../../../images/logo.jpg" alt="Logo" />
    </Link>
  );
};

export default Logo;
