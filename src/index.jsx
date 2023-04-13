import React from "react";
import ReactDOM from "react-dom/client";
// Component
import AppProvider from "./AppRequeriments/AppProvider";
// Style

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
