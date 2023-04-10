import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import HomePageContainer from "./Pages/HomePageContainer";
// App
const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageContainer />} />
          <Route path="*" element={<HomePageContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
