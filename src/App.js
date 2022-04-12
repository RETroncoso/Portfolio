import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
import SobreMi from "./components/SobreMi/SobreMi";
import MisHerramientas from "./components/MisHerramientas/MisHerramientas";
import Proyectos from "./components/Proyectos/Proyectos";
import { Contact } from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const show = useSelector((state) => state.header.show);

  return (
    <>
      <Menu />
      <Header show={show} />
      <Home />
      <SobreMi />
      <MisHerramientas />
      <Proyectos />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
