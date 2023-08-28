import React from "react";

const CabeceraCarusel = () => {
  return (
    <>
      {/* <!-- Welcome Social Info --> */}
      <div className="welcome-social-info">
        <a href="www.test.com">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="www.test.com">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="www.test.com">
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
      {/* <!-- Welcome Slides --> */}
      <div className="caviar-hero-slides owl-carousel">
        {/* <!-- Single Slides --> */}
        <div
          className="single-hero-slides bg-img"
          style={{ backgroundImage: "url(./img/bg-img/hero-1.jpg)" }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-11 col-md-6 col-lg-4">
                <div className="hero-content">
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Morbi sed porta diam. Sed pulvinar cursus lorem, consectetur
                    iaculis dolor scelerisque non. Praesent bibendum mauris
                    risus, non aliquam tellus consectetur nec.
                  </p>
                  <a href="www.test.com" className="btn caviar-btn">
                    <span></span> Reservation
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Slider Nav --> */}
          <div
            className="hero-slides-nav bg-img"
            style={{ backgroundImage: "url(./img/bg-img/hero-2.jpg)" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default CabeceraCarusel;
