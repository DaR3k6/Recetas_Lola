import React, { useState } from "react";

const BarraBusqueda = ({ cerrarFormulario, datos, setDatos, texto }) => {
  // Estado para el término de búsqueda
  const [busqueda, setBusqueda] = useState("");

  const encuentroBusqueda = e => {
    let buscar = e.target.value;
    let resultado = datos.filter(receta => {
      return receta.nombre.toLowerCase().includes(buscar.toLowerCase());
    });

    if (buscar.length === 0) {
      resultado = JSON.parse(localStorage.getItem("receta"));
    }

    setDatos(resultado);
    setBusqueda(buscar);
  };

  const exitFormulario = () => {
    cerrarFormulario();
    setBusqueda("");
  };

  const manejarBusqueda = e => {
    e.preventDefault();
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
              <form onSubmit={manejarBusqueda}>
                <input
                  type="search"
                  name="caviarSearch"
                  id="search"
                  placeholder="Busca la receta de Lola"
                  value={busqueda}
                  onChange={encuentroBusqueda}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarraBusqueda;
