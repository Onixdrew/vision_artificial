// Importanción de dependencias:
import { Route, Routes} from "react-router-dom";
import Inicio_Aprendiz from "./pages/Aprendiz/pages/inicio_aprendiz";
import Objetos_Aprendiz from "./pages/Aprendiz/pages/objetos_aprendiz";




const App = () => {
  return (
    <>
     

      <Routes>
        <Route path="/" element={<Inicio_Aprendiz/>}></Route>
        <Route path="/objetos_aprendiz" element={<Objetos_Aprendiz/>}></Route>
      </Routes>

    </>
  );
};

export default App;
