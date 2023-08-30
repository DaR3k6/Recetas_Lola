import React, { useState } from "react";
import BarraBusqueda from "./barraBusqueda";

const CabeceraPrincipal = ({ datos, setDatos }) => {
  const [abrirLupa, setAbrirLupa] = useState(false);
  const [texto, setTexto] = useState("");
  const formularioClick = () => {
    setAbrirLupa(!abrirLupa);
    setTexto("");
  };
  const cerrarFormulario = () => {
    setAbrirLupa(false);
    setTexto("");
  };
  return (
    <>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 h-100">
            <nav className="h-100 navbar navbar-expand-lg align-items-center">
              <img
                className="rounded-circle  "
                src="./img/logo.png"
                alt=""
                width={"65px"}
              />
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#caviarNav"
                aria-controls="caviarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="fa fa-bars"></span>
              </button>
              <div className="collapse navbar-collapse" id="caviarNav">
                <ul className="navbar-nav ml-auto" id="caviarMenu">
                  <li className="nav-item active">
                    <a className="nav-link" href="#home">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="www.test.com"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="index.html">
                        Home
                      </a>
                      <a className="dropdown-item" href="menu.html">
                        Menu
                      </a>
                      <a className="dropdown-item" href="regular-page.html">
                        Regular Page
                      </a>
                      <a className="dropdown-item" href="contact.html">
                        Contact
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#menu">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#awards">
                      Awards
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimonial">
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#reservation">
                      Reservation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>

                <div className="caviar-search-btn">
                  <a id="search-btn" href="!#" onClick={formularioClick}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </div>
                <div
                  className={`caviar-search-form ${
                    abrirLupa ? "search-form-on" : ""
                  }`}
                >
                  <BarraBusqueda
                    datos={datos}
                    setDatos={setDatos}
                    cerrarFormulario={cerrarFormulario}
                    texto={texto}
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default CabeceraPrincipal;
