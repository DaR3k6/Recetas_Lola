import React, { useState, useEffect } from "react";
import { Github, Instagram, Twitter } from "react-bootstrap-icons";
import Carousel from "react-bootstrap/Carousel";

const CabeceraCarusel = () => {
  const imagenes = ["hero-1.jpg", "hero-2.jpg", "hero-3.jpg"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % imagenes.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [imagenes.length]);

  return (
    <>
      {/* Welcome Social Info */}
      <div className="welcome-social-info">
        <a href="www.test.com">
          <Github color="white" size={20} />
        </a>
        <a href="www.test.com">
          <Instagram color="white" size={20} />
        </a>
        <a href="www.test.com">
          <Twitter color="white" size={20} />
        </a>
      </div>
      {/* Welcome Slides */}
      <Carousel
        className="caviar-hero-slides"
        activeIndex={activeIndex}
        onSelect={() => {}}
        controls={false}
        interval={null} // Deshabilitamos el cambio automático del carrusel
        indicators={false}
      >
        {imagenes.map((imagen, i) => (
          <Carousel.Item key={i}>
            <div
              className={`single-hero-slides bg-img ${
                i === activeIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url(../img/bg-img/${imagen})` }}
            >
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-11 col-md-6 col-lg-4">
                    <div className="hero-content">
                      <h2>Lorem Ipsum</h2>
                      <p>
                        Morbi sed porta diam. Sed pulvinar cursus lorem,
                        consectetur iaculis dolor scelerisque non. Praesent
                        bibendum mauris risus, non aliquam tellus consectetur
                        nec.
                      </p>
                      <a href="www.test.com" className="  caviar-btn">
                        <span></span> Reservation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider Nav */}
              <div
                className="hero-slides-nav bg-img position-relative"
                style={{
                  backgroundImage: `url(../images/bg-img/${
                    imagenes[(i + 1) % imagenes.length]
                  })`,
                }}
              >
                dasdasdsa
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default CabeceraCarusel;
