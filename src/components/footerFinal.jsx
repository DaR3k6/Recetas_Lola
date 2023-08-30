import React from "react";

const FooterFinal = () => {
  const fechaActual = new Date().getFullYear();
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="footer-text">
            <img
              className="rounded-circle"
              src="./img/logo.png"
              alt=""
              width={"150px"}
            />

            <p>
              Copyright &copy;
              {fechaActual}Todos los derechos reservados | Esta plantilla está
              hecha con <i className="bi bi-heart-fill" aria-hidden="true"></i>{" "}
              by <a href="https://www.test.com">Kevin</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterFinal;
