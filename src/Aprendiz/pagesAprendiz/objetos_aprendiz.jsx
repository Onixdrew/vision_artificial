import { PiProhibitBold } from "react-icons/pi";
import { TiDelete } from "react-icons/ti";
import Prueba from "./formPrueba";
import Sidebar2 from "../../components/Sidebar/sideBar2";

const Objetos_Aprendiz = () => {
  return (
    <div>
      <div className="ml-5 fixed mt-[2.5vh]">
        <Sidebar2></Sidebar2>
      </div>

      <div className="ml-[22vw] ">
        

        <div className=" flex md:mt-[10vh] absolute space-x-4 ">
          <div className=" space-y-4 md:ml-[4vw] md:mt-[10vh]">
            <PiProhibitBold className="text-[8em] md:ml-[9vw] text-red-600" />
            <p className="font-bold text-2xl md:w-[35vw] text-red-600 ">
              Prohibido el ingreso de armas o cualquier elemento que atente
              contra la integridad de la cumunidad SENA
            </p>
          </div>
          <Prueba></Prueba>

        </div>
        <div className="flex flex-col md:ml-[9vw] md:mt-[130vh] absolute  border-4 ">
          <h2 className="md:ml-[20vw] md:mb-[5vh] text-2xl">Mis objetos</h2>
          <div className="flex gap-10  p-5">
            <span className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col  w-[15vw] text-white">
              <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                <img
                  className="rounded-xl  sm:m-h-64  w-full "
                  src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/IMG_0281.jpeg"
                  alt=""
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>

                <a href="#" className="absolute hover:bg-white  rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete className=" text-3xl  hover:text-black text-white" /></a>
              </div>
              <div className="font-semibold p-2 space-y-2">
                <p>Laptop DELL 2024 </p>
                <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                <p className="flex"><p className="text-green-400">Fecha:</p> 7/03/2023</p>
              </div>
            </span>
            
            <span className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col  w-[15vw] text-white">
              <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                <img
                  className="rounded-xl  sm:m-h-64  w-full "
                  src="https://www.latercera.com/resizer/JeaH31hid69oUBKEk-dgJwPklRs=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/SOQOXWME4ZGHNP6J7JWF3X24VY.webp"
                  alt=""
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>

                <a href="#" className="absolute hover:bg-white rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete className=" text-3xl  hover:text-black text-white" /></a>
              </div>
              <div className="font-semibold p-2 space-y-2">
                <p>Laptop MacBook Pro 2024 </p>
                <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                <p className="flex"><p className="text-green-400">Fecha:</p> 15/03/2023</p>
              </div>
            </span>
            <span className="border bg-gray-700 rounded-xl hover:-translate-y-1 hover:scale-110 border-black space-x-5 flex flex-col  w-[15vw] text-white">
              <div className=" flex relative overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                <img
                  className="rounded-xl  sm:m-h-64  w-full "
                  src="https://media.gq.com.mx/photos/61e70ca3f4e647708c8d61cf/master/w_1600%2Cc_limit/HONOR%2520MagicBook%2520X%252015.jpg"
                  alt=""
                />
                <a href="#!">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>

                <a href="#" className="absolute hover:bg-white rounded-lg bg-black hite md:ml-[80%] md:mt-3"><TiDelete className=" text-3xl  hover:text-black text-white" /></a>
              </div>
              <div className="font-semibold p-2 space-y-2">
                <p>Laptop Acer 2024 </p>
                <p className="flex"><p className="text-green-400">Color: </p> gris y negro</p>
                <p className="flex"><p className="text-green-400">Serial:</p> G8rV3456fazl</p>
                <p className="flex"><p className="text-green-400">Fecha:</p> 25/02/2023</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objetos_Aprendiz;
