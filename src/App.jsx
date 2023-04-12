import { BrowserRouter } from "react-router-dom";
// Components
import MyRoutes from "./Routes";
// App
const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
