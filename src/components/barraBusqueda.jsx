import React, { useState } from "react";

const BarraBusqueda = ({ cerrarFormulario, texto }) => {
  const [searchText, setTexto] = useState("");

  const controlFormulario = e => {
    setTexto(e.target.value);
  };

  const exitFormulario = () => {
    cerrarFormulario();
    setTexto("");
  };

  return (
    <>
      <div className="caviar-search-form d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="search-close-btn"
                id="closeBtn"
                onClick={exitFormulario}
              >
                <i className="bi bi-x-circle-fill" aria-hidden="true"></i>
              </div>
              <form>
                <input
                  type="search"
                  name="caviarSearch"
                  id="search"
                  placeholder="Busca la receta de Lola"
                  value={searchText}
                  onChange={controlFormulario}
                />
                <input type="submit" className="d-none" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarraBusqueda;
