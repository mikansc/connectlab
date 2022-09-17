import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import "./assets/css/reset.css";
import "react-toastify/dist/ReactToastify.min.css";

const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
