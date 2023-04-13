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
