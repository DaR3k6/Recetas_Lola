import React from "react";

const BarraBusqueda = ({ busca, cerrarFormulario }) => {
  return (
    <>
      {busca && (
        <div className="caviar-search-form d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="search-close-btn"
                  id="closeBtn"
                  onClick={cerrarFormulario}
                >
                  <i className="bi bi-x-circle" aria-hidden="true"></i>
                </div>
                <form>
                  <input
                    type="search"
                    name="caviarSearch"
                    id="search"
                    placeholder="Busca la receta de Lola"
                  />
                  <input type="submit" className="d-none" value="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BarraBusqueda;
