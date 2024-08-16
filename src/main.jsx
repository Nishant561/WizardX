import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import Utils from "./utils/Utils.jsx";

createRoot(document.getElementById("root")).render(
  <Utils>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Utils>
);
