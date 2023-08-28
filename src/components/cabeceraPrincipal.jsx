import React, { useEffect, useState } from "react";
import BarraBusqueda from "./barraBusqueda";
const CabeceraPrincipal = () => {
  //ABIRIR FORMULARIO
  const [busca, setBuscar] = useState(false);
  //TEXTO ESCRITO

  const mostrarFormulario = () => {
    setBuscar(!busca);

    console.log("Mostrando formulario");
  };

  const cerrarFormulario = () => {
    setBuscar(false);
  };

  console.log("Valor de busca:", busca);
  useEffect(() => {
    if (busca) {
      document.body.classList.add("search-form-on");
    } else {
      document.body.classList.remove("search-form-on");
    }
  }, [busca]);
  return (
    <>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 h-100">
            <nav className="h-100 navbar navbar-expand-lg align-items-center">
              <a className="navbar-brand" href="index.html">
                caviar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#caviarNav"
                aria-controls="caviarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
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
                      href="#"
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
                {/* <!-- Search Btn --> */}
                <div className="caviar-search-btn">
                  <a
                    id="search-btn"
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      mostrarFormulario();
                    }}
                  >
                    <i className="bi bi-search"></i>
                  </a>
                </div>
                <BarraBusqueda
                  busca={busca}
                  cerrarFormulario={cerrarFormulario}
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default CabeceraPrincipal;
