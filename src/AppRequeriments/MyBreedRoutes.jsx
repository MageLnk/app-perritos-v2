import { Routes, Route } from "react-router-dom";

import HomePageContainer from "../Pages/HomePageContainer";
import Error404PageContainer from "../Pages/Error404PageContainer";
import ShowDogsByBreedPageContainer from "../Pages/ShowDogsByBreedPageContainer";
import ShowDogsBySubBreedPageContainer from "../Pages/ShowDogsBySubBreedPageContainer";

// App
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageContainer />} />
      <Route path="/search-by-breed" element={<ShowDogsByBreedPageContainer />} />
      <Route path="/search-by-sub-breed" element={<ShowDogsBySubBreedPageContainer />} />

      <Route path="*" element={<Error404PageContainer />} />
    </Routes>
  );
};

export default MyRoutes;
