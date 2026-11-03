import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";                          // Bootstrap ke BAAD, taaki tumhari CSS override kar sake
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);