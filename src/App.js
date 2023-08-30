import { useEffect, useState } from "react";
import PantallaCarga from "./components/pantallaCarga";
import CabeceraPrincipal from "./components/cabeceraPrincipal";
import CabeceraCarusel from "./components/cabeceraCarusel";
import ContenidoMenu from "./components/contenidoMenu";
import FooterFinal from "./components/footerFinal";
import FormularioMenu from "./components/formularioMenu";
function App() {
  //PANTALLA DE CARGA
  const [carga, setCarga] = useState(true);
  //LOCAL STOREGE
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCarga(false);
    }, 1000);
  });

  if (carga) {
    return <PantallaCarga />;
  }

  return (
    <>
      <header className="header_area" id="header">
        <CabeceraPrincipal datos={datos} setDatos={setDatos} />
      </header>
      <section className="caviar-hero-area" id="home">
        <CabeceraCarusel />
      </section>
      <div className="caviar-food-menu section-padding-150 clearfix">
        <ContenidoMenu datos={datos} setDatos={setDatos} />
      </div>
      <section
        className="caviar-reservation-area d-md-flex align-items-center"
        id="reservation"
      >
        <FormularioMenu datos={datos} setDatos={setDatos} />
      </section>
      <footer className="caviar-footer-area">
        <FooterFinal />
      </footer>
    </>
  );
}

export default App;
