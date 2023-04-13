import { BrowserRouter } from "react-router-dom";
// Components
import Layout from "./Layout";
import MyRoutes from "./MyBreedRoutes";
// App
const App = () => {
  return (
    <div aria-label="app-container" className="app-container">
      <BrowserRouter>
        <Layout />
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
