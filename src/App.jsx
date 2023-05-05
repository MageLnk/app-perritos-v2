import { BrowserRouter } from "react-router-dom";
// Components
import Layout from "./Layout";
import MyRoutes from "./AppRequeriments/MyBreedRoutes";
// Style
import "./App.css";
// App
const App = () => {
  return (
    <div data-testid="app-container" className="app-container">
      <BrowserRouter>
        <Layout />
        <div className="main-page-container">
          <MyRoutes />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
