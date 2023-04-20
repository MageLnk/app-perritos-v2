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

- Hacer los 2 componentes, By breed and sub breed
- Hacer los div clickeables con las razas o sub-razas precargadas

*/
