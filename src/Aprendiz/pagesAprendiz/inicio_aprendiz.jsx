import React, { useState } from "react";
import { Route } from "react-router-dom";
import CarnetAprendiz from "../components/carnet";
import Sidebar from "../../components/Sidebar/sideBar/sidebar";
import Sidebar2 from "../../components/Sidebar/sideBar2";


const Inicio_Aprendiz = () => {

  // const [modOscuro, setModOscuro]=useState()
  
  // const cambio= (valor)=>{
  //   setModOscuro(valor)
  // }



  // Define el color del sidebar según el modo (blanco o negro)
  // const modColor = modOscuro ? "#000" : "";
  return (
    <>
      <div >
        <div className="ml-5 fixed  mt-[2.5vh]">
          <Sidebar2></Sidebar2>
        </div>
  
        <div className="ml-[22%] ">
          <div className="fixed mt-[2.5vh] z-10 shadow-[0_-40px_5px_0_white]">
            {/* <Header></Header> */}
          </div>
  
          <div className="flex flex-col mt-[12vh] absolute" >
            <div className=" ml-[10vw] flex ">
              <CarnetAprendiz></CarnetAprendiz>
              <div className="ml-[4vw] mt-[16vh]">
                <h1 className="text-xl font-semibold ml-[35%]">Novedades</h1>
                <p className="w-[30vw] mt-[3%] ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
                  et, ad nemo esse consequuntur officiis delectus repellendus qui
                  quisquam doloribus voluptate ab suscipit! Velit., autem.
                </p>
                <p className="w-[30vw] mt-[3%] ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
                  et, ad nemo esse consequuntur officiis delectus repellendus
                  voluptatum ea autem alias odio minima, qui quisquam doloribus
                  voluptate ab suscipit! Velit., autem.
                </p>
                <p className="w-[30vw] mt-[3%] border-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
                  et, ad nemo esse consequuntur officiis delectus repellendus
                  voluptatum ea autem alias odio minima, qui quisquam doloribus
                  voluptate ab suscipit! Velit., autem.
                </p>
              </div>
            </div>
            <div className="w-[40vw] space-y-10 text-center ml-[15vw] mt-8">
              <p>
                Lorem ipsum dRegistroAprenolor sit amet consectetur adipisicing
                elit. Suscipit rem du cimus vero numquam? Quibusdam dolore odit rem.
                Explicabo cupiditate dolor fugiat odio libero iste, cumque
                praesentium saepe ut ratione perspiciatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                rem du cimus vero numquam? Quibusdam dolore odit rem. Explicabo
                cupiditate dolor fugiat odio libero iste, cumque praesentium saepe
                ut ratione perspiciatis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                rem du cimus vero numquam? Quibusdam dolore odit rem. Explicabo
                cupiditate dolor fugiat odio libero iste, cumque praesentium saepe
                ut ratione perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio_Aprendiz;
