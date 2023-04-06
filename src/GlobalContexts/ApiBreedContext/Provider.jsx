import { useEffect, useState } from "react";
// Context
import ApiBreedContext from ".";
// Utilities
// import apiCall from "../../utilities/api/apiCall";

const ApiBreedContextProvider = ({ children }) => {
  const [test, setTest] = useState("false");

  useEffect(() => {
    setTest("true");
  }, []);

  return (
    <ApiBreedContext.Provider
      value={{
        test,
      }}
    >
      {children}
    </ApiBreedContext.Provider>
  );
};

export default ApiBreedContextProvider;
