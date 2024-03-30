// Importanción de dependencias:
import { Route, Routes } from "react-router-dom";
import Inicio_Aprendiz from "./Aprendiz/pagesAprendiz/inicio_aprendiz";
import Objetos_Aprendiz from "./Aprendiz/pagesAprendiz/objetos_aprendiz";
import Historial_Aprendiz from "./Aprendiz/pagesAprendiz/historial_aprendiz";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio_Aprendiz />}></Route>
        <Route path="/objetos_aprendiz" element={<Objetos_Aprendiz />}></Route>
        <Route path="/historial" element={<Historial_Aprendiz />}></Route>
      </Routes>
    </>
  );
};

export default App;
