import { Routes, Route } from "react-router-dom";

import HomePageContainer from "../Pages/HomePageContainer";
import Error404PageContainer from "../Pages/Error404PageContainer";
// App
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageContainer />} />
      <Route path="*" element={<Error404PageContainer />} />
    </Routes>
  );
};

export default MyRoutes;
