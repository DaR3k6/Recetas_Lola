import { useEffect, useState } from "react";
import PantallaCarga from "./components/pantallaCarga";
import CabeceraPrincipal from "./components/cabeceraPrincipal";
import CabeceraCarusel from "./components/cabeceraCarusel";
import ContenidoMenu from "./components/contenidoMenu";
function App() {
  const [carga, setCarga] = useState(true);
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
      <header class="header_area" id="header">
        <CabeceraPrincipal />;
      </header>
      <section class="caviar-hero-area" id="home">
        <CabeceraCarusel />
      </section>
      <div class="caviar-food-menu section-padding-150 clearfix">
        <ContenidoMenu />
      </div>
    </>
  );
}

export default App;
