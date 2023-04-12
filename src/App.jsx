import { BrowserRouter } from "react-router-dom";
// Components
import MyRoutes from "./MyRoutes";
// App
const App = () => {
  return (
    <div aria-label="app-container" className="app-container">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
