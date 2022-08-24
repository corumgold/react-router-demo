import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//📣 Establishes a react router and allows access to history
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        {/* 📣 Provider comes next after BrowserRouter */}
    <App />
  </BrowserRouter>
);
