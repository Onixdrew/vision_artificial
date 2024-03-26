import React, { useState } from "react";
import "../Style.css";
import { FaHome } from "react-icons/fa";
import { RiBox3Fill } from "react-icons/ri";

const Sidebar = () => {
  const [barraLateralAbierta, setBarraLateralAbierta] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleBarraLateral = () => {
    setBarraLateralAbierta(!barraLateralAbierta);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`menu ${barraLateralAbierta ? '' : 'cerrado'}`} onClick={toggleBarraLateral}>
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="close-outline"></ion-icon>
      </div>
      <div className={`barra-Lateral ${barraLateralAbierta ? 'max-barra-lateral' : ''}`}>
        <div className="nombre-pagina mx-[2vw] mt-[3vh]">
          <ion-icon id="Icono" name="aperture-outline"></ion-icon>
          <span>RFacial</span>
        </div>

        <div className="w-full h-1 bg-black mb-[10vh]"></div>

        <nav className="navegacion">
          <ul className="space-y-5 text-xl">
            <li>
              <a href="#" id="inbox" className="flex justify-evenly ">
        
                <FaHome />
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a href="#" id="inbox" className="flex justify-evenly ">
                <RiBox3Fill />
                <span>Objetos</span>
              </a>
            </li>
            {/* Otros elementos de navegación */}
          </ul>
        </nav>
        <div className="linea"></div>
        <div className={`modo-oscuro ${darkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>
          <div className="info">
            <ion-icon name="moon-outline"></ion-icon>
            <span>Dark Theme</span>
          </div>
          <div className="switch">
            <div className={`base ${darkMode ? 'prendido' : ''}`}>
              <div className="circulo"></div>
            </div>
          </div>
        </div>
        <div className="usuario">
          {/* Contenido del usuario */}
          
        </div>
      </div>

      {/* <main>
        <h1>Contenido</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          fuga laboriosam temporibus qui ex, accusantium tenetur vero quidem
          saepe mollitia perferendis numquam ipsa eos beatae nemo, architecto
          illo! A, et.
        </p>
      </main> */}
    </>
  );
};

export default Sidebar;
