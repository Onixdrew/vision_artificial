// Importanción de dependencias:
import { Route, Routes} from "react-router-dom";
import Inicio_Aprendiz from "./Aprendiz/pagesAprendiz/inicio_aprendiz";
import Objetos_Aprendiz from "./Aprendiz/pagesAprendiz/objetos_aprendiz";





const App = () => {
 
  return (
    <>
     

      <div className="bg-red-400">
        <Routes>
          <Route path="/" element={<Inicio_Aprendiz />}></Route>
          <Route path="/objetos_aprendiz" element={<Objetos_Aprendiz/>}></Route>
        </Routes>
      </div>

    </>
  );
};

export default App;
