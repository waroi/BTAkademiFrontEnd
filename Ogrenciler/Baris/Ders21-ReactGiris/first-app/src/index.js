import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // KAPSAYICI
  <React.StrictMode>
    <App />
  </React.StrictMode>

  // KAPSAYICI olarak kullanıyor fakat StrictMode'a göre geliştirme ortamında daha detaylı hata bilgisi veriyor
  // <React.Fragment>
  //   <App/>
  // </React.Fragment>
);
