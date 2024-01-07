import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FontSizeProvider } from "./components/FontSizeContext"; // Import the provider
import { ContrastProvider } from "./components/ContrastContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContrastProvider>
      <FontSizeProvider>
        {" "}
        {/* Wrap App with FontSizeProvider */}
        <App />
      </FontSizeProvider>
    </ContrastProvider>
  </React.StrictMode>
);
