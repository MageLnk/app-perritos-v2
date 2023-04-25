import { Link } from "react-router-dom";
// App
const Menu = () => {
  return (
    <div data-testid="menu-content-container" className="menu-content-container">
      <Link to={"/search-by-breed"} aria-label="Ir a la pagina para buscar perros por raza">
        <span>Buscar por raza</span>
      </Link>
      <Link to={"/search-by-sub-breed"} aria-label="Ir a la pagina para buscar perros por sub raza">
        <span>Buscar por sub-raza</span>
      </Link>
    </div>
  );
};

export default Menu;
