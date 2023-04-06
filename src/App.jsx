import { useContext } from "react";
import ApiBreedContext from "./GlobalContexts/ApiBreedContext";

const App = () => {
  const { test } = useContext(ApiBreedContext);
  return <h1>Dog Api V2, {test}</h1>;
};

export default App;
