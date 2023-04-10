//import { useContext } from "react";
//import ApiBreedContext from "./GlobalContexts/ApiBreedContext";
import { useApiBreedContext } from "./GlobalContexts/ApiBreedContext";

const App = () => {
  //const { test } = useContext(ApiBreedContext);
  const { test } = useApiBreedContext();

  console.log(test);
  return <h1>Dog Api V2, {test}</h1>;
};

export default App;
