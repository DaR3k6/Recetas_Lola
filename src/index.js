import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap";
import "jquery";
import "owl.carousel/dist/assets/owl.carousel.css"; // Importa los estilos de Owl Carousel
import "owl.carousel"; // Importa el archivo JavaScript de Owl Carousel
const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <App />
  </>
);
