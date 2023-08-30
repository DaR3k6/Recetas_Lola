import React, { useEffect } from "react";

const ContenidoMenu = ({ datos, setDatos }) => {
  useEffect(() => {
    let receta = JSON.parse(localStorage.getItem("receta"));
    setDatos(receta);
  }, [setDatos]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="food-menu-title">
              <h2>Menu</h2>
            </div>
          </div>

          <div className="col-10">
            <div className="caviar-projects-menu">
              <div className="text-center portfolio-menu">
                <h1>RECETA DE DOÑA LOLA</h1>
              </div>
            </div>

            <div className="caviar-menu-slides owl-carousel clearfix">
              <div className="caviar-portfolio clearfix">
                {datos == null ? (
                  // Mensaje si no hay recetas disponibles
                  <h1 className="text-center">
                    SE ACABO LA RECETA DE DOÑA LOLA :/
                  </h1>
                ) : (
                  // Mostrar recetas si hay datos disponibles
                  <>
                    {datos.map(receta => (
                      <div
                        key={receta.id}
                        className="single_menu_item breakfast dinner wow fadeInUp"
                      >
                        <div className="d-sm-flex align-items-center">
                          <div className="dish-thumb">
                            <img src={receta.imagen} alt="receta" />
                          </div>
                          <div className="dish-description">
                            <h3>
                              {receta.nombre} ({receta.ingrediente})
                            </h3>
                            <h5>
                              {receta.creacion}({receta.hora})
                            </h5>
                            <p>{receta.reservation_message}</p>
                          </div>
                          <div className="dish-value">
                            <h3>
                              $
                              {parseFloat(receta.precio)
                                .toFixed(2)
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContenidoMenu;
