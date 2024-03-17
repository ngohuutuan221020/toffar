import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Translate from "./component/Translate/translate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Translate>
      <App />
    </Translate>
  </React.StrictMode>
);
