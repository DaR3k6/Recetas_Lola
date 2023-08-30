import React, { useEffect } from "react";

const ContenidoMenu = ({ datos, setDatos }) => {
  useEffect(() => {
    let receta = JSON.parse(localStorage.getItem("receta"));
    setDatos(receta);
  }, [setDatos]);

  return (
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
              <button className="active" data-filter="*">
                All
              </button>
              <button data-filter=".breakfast">breakfast</button>
              <button data-filter=".lunch">lunch</button>
              <button data-filter=".dinner">dinner</button>
            </div>
          </div>

          <div className="caviar-menu-slides owl-carousel clearfix">
            <div className="caviar-portfolio clearfix">
              {datos.map(receta => {
                <div
                  key={receta.id}
                  className="single_menu_item breakfast dinner wow fadeInUp"
                >
                  <div className="d-sm-flex align-items-center">
                    <div className="dish-thumb">
                      <img src="./img/menu-img/dish-2.png" alt="" />
                    </div>
                    <div className="dish-description">
                      <h3>Lorem Ipsum Dolor Sit Amet</h3>
                      <p>
                        Sed commodo augue eu diam tincidunt, sit amet auctor
                        lectus semper. Mauris porttitor diam at fringilla
                        tempor.
                      </p>
                    </div>
                    <div className="dish-value">
                      <h3>$45</h3>
                    </div>
                  </div>
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContenidoMenu;
