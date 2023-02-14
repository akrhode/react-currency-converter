import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import currencies from "./img/currencies.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      className="image"
      style={{
        backgroundImage: `url(${currencies})`,
        backgroundRepeat: "no-epeat",
        backgroundSize: "contain",
        backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.5), rgba(0, 15, 37, 0.7)), url("${currencies}")`,
      }}
    >
      <App />
    </div>
  </React.StrictMode>
);
