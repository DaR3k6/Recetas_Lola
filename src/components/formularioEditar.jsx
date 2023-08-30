import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FormularioEditar = ({ receta, datos, setDatos, show, handleClose }) => {
  const [fechaCreada, setFechaCreada] = useState("");
  const [horaCreacion, setHoraCreacion] = useState("");
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [preparacion, setPreparacion] = useState("");
  const [imagen, setImagen] = useState("");
  const [precio, setPrecio] = useState("");

  useEffect(() => {
    if (receta) {
      setFechaCreada(receta.creacion || "");
      setHoraCreacion(receta.hora || "");
      setNombre(receta.nombre || "");
      setIngredientes(receta.ingredientes || "");
      setPreparacion(receta.reservation_message || "");
      setImagen(receta.imagen || "");
      setPrecio(receta.precio || "");
    }
  }, [receta]);

  const guardarReceta = (e, id) => {
    e.preventDefault();
    let recetaActual = [...datos];
    let i = recetaActual.findIndex(receta => receta.id === id);
    if (i !== -1) {
      let datosFormularios = {
        id,
        creacion: fechaCreada,
        hora: horaCreacion,
        nombre: nombre,
        ingrediente: ingredientes,
        imagen: imagen,
        reservation_message: preparacion,
        precio: precio,
      };
      recetaActual[i] = datosFormularios;
      localStorage.setItem("receta", JSON.stringify(recetaActual));
      setDatos(recetaActual);
      handleClose();
    } else {
      console.log("No se encontró la película con el ID");
    }
  };

  const handleSave = e => {
    guardarReceta(e, receta.id);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="mt-5">
        <Modal.Body className=" d-flex justify-content-center text-center  ">
          <div
            className="reservation-form-area  d-flex justify-content-center mt-2  mx-auto"
            style={{
              width: "600px",
              height: "530px",
              margin: "auto",
              paddingLeft: "100px",
              paddingTop: "10px",
              paddingRight: "10px",
            }}
          >
            <div className="reservation-form ">
              <div className="section-heading">
                <h2>Cambiar Receta</h2>
              </div>
              <form onSubmit={guardarReceta}>
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
                    <button
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        height: "70px",
                        margin: "-20px auto 0",

                        margin: "-20px auto 0 ",
                      }}
                      type="submit"
                      className="caviar-btn mt-2"
                      onClick={() => {
                        handleSave;
                      }}
                    >
                      <span></span>
                      Receta Cambiada
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormularioEditar;
