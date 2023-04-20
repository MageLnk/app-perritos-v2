import { BrowserRouter } from "react-router-dom";
// Components
import Layout from "./Layout";
import MyRoutes from "./AppRequeriments/MyBreedRoutes";
// App
const App = () => {
  return (
    <div data-testid="app-container" className="app-container">
      <BrowserRouter>
        <Layout />
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;

/*

ROUTE

- Crear una función en el provider para que cargue la lista de las razas y sub-razas.
- Hacer los div clickeables con las razas o sub-razas precargadas respectivamente cuando entremos a una u otra

*/
