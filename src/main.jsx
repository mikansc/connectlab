import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import "./assets/css/reset.css";
import "react-toastify/dist/ReactToastify.min.css";

import "./configs/i18n";

const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  <React.StrictMode>
    <Suspense fallback="loading...">
      <App />
    </Suspense>
  </React.StrictMode>,
);
