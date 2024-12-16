import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
