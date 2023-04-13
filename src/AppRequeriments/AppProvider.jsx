// Providers
import ApiBreedContext from "../GlobalContexts/ApiBreedContext/Provider";
// Main App
import App from "../App";
// App
const AppProvider = () => {
  return (
    <ApiBreedContext>
      <App />
    </ApiBreedContext>
  );
};

export default AppProvider;
