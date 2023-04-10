import { createContext, useContext } from "react";

const ApiBreedContext = createContext({});

export const useApiBreedContext = () => useContext(ApiBreedContext);

export default ApiBreedContext;
