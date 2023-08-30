import React, { useState } from "react";

const FormularioMenu = ({ setDatos }) => {
  // Estado local para controlar los valores de los inputs
  const [fechaCreada, setFechaCreada] = useState("");
  const [horaCreacion, setHoraCreacion] = useState("");
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [preparacion, setPreparacion] = useState("");
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState("");

  // Función para agregar datos a localStorage y actualizar el estado
  const agregarDatosALocalStorage = datos => {
    let json = JSON.parse(localStorage.getItem("receta")) || [];

    json.push(datos);

    setDatos(json);
    localStorage.setItem("receta", JSON.stringify(json));
  };

  // Función para capturar los datos del formulario
  const capturarDatos = e => {
    e.preventDefault();

    let datosFormulario = {
      id: new Date().getTime(),
      creacion: fechaCreada,
      hora: horaCreacion,
      nombre: nombre,
      ingrediente: ingredientes,
      imagen: imagen,
      reservation_message: preparacion,
      precio: precio,
    };
    setDatos(datosFormulario);
    agregarDatosALocalStorage(datosFormulario);
    // Reiniciar los valores de los inputs
    setFechaCreada("");
    setHoraCreacion("");
    setNombre("");
    setIngredientes("");
    setPreparacion("");
    setImagen("");
    setPrecio("");
  };

  return (
    <>
      <div className="reservation-form-area d-flex justify-content-end">
        <div className="reservation-form">
          <div className="section-heading">
            <h2>Reserva</h2>
          </div>
          <form onSubmit={capturarDatos}>
            <div className="row">
              <div className="col-12 col-lg-6">
                <input
                  type="date"
                  className="form-control"
                  name="creacion"
                  id="creacion"
                  onChange={e => setFechaCreada(e.target.value)}
                  value={fechaCreada}
                />
              </div>
              <div className="col-12 col-lg-6">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  id="hora"
                  onChange={e => setHoraCreacion(e.target.value)}
                  value={horaCreacion}
                />
              </div>
              <div className="col-12 col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre receta"
                  name="nombre"
                  id="nombre"
                  onChange={e => setNombre(e.target.value)}
                  value={nombre}
                />
              </div>
              <div className="col-12 col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingredientes"
                  name="ingredientes"
                  id="ingredientes"
                  onChange={e => setIngredientes(e.target.value)}
                  value={ingredientes}
                />
              </div>
              <div className="col-12 col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Imagen de la Receta"
                  name="imagen"
                  id="imagen"
                  onChange={e => setImagen(e.target.value)}
                  value={imagen}
                />
              </div>
              <div className="col-12 col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio de la Receta"
                  name="imagen"
                  id="imagen"
                  onChange={e => setPrecio(e.target.value)}
                  value={precio}
                />
              </div>
              <div className="col-12">
                <textarea
                  name="reservation-message"
                  className="form-control"
                  id="reservationMessage"
                  cols="30"
                  rows="10"
                  placeholder="Preparacion"
                  onChange={e => setPreparacion(e.target.value)}
                  value={preparacion}
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="caviar-btn">
                  <span></span>
                  Reserva tu Receta
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="reservation-side-thumb wow fadeInRightBig"
        data-wow-delay="0.5s"
      >
        <img src="./img/bg-img/hero-3.jpg" alt="" />
      </div>
    </>
  );
};

export default FormularioMenu;
