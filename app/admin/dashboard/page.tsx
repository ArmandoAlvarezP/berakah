import { TablaAdmin } from "@/components";
import Image from "next/image";



export default function AdminPage() {
    return (
        <>
            {/*  Tabla  */}

            <div className="mx-5 mt-0 mb-10 w-auto">

                <TablaAdmin />

            {/* Modal agregar alumno */}
            
            <div className="flex items-center transition duration-150 ease-in-out z-10  fixed top-0 right-0 bottom-10 left-0" id="modal">
                <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md border border-gray-400 rounded-4xl">
                        <h1 className="text-[#00795D] text-3xl text-center font-bold tracking-normal leading-tight mb-4 uppercase">
                            Agregar Alumno
                        </h1>
                        <input id="nombre" name="nombre" type="text" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border" placeholder="NOMBRE COMPLETO" />
                        <input id="curp" name="curp" type="text" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border" placeholder="CURP" />
                        <select id="tipo" name="tipo" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border">
                            <option value="" className="text-gray-600 uppercase">TIPO DE CERTIFICACIÓN</option>
                            <option value="1" className="uppercase">
                                Diploma Certificado de especialidad SEP
                            </option>
                            <option value="2" className="uppercase">
                                Diploma Certificado de especialidad
                            </option>
                            <option value="3" className="uppercase">
                                Instructor Capacitador SEP
                            </option>
                            <option value="4" className="uppercase">
                                Certificado de Acreditación BCPP
                            </option>
                            <option value="5" className="uppercase">
                                Certificado de Especialización Profesional
                            </option>
                        </select>
                        <label>FECHA DE EMISIÓN</label>
                        <input id="fecha" name="fecha" type="date" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border"/>
                        <input id="especialidad" name="especialidad" type="text" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border" placeholder="ESPECIALIDAD" />
                        <input id="instEm" name="instEm" type="text" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border" placeholder="INSTITUCIÓN EMISORA" />
                        <input id="instAut" name="instAut" type="text" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border" placeholder="INSTITUCIÓN AUTORIZADA" />
                        <input id="folio" name="folio" type="text" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border" placeholder="FOLIO" />
                        
                        {/* Botón agregar */}
                        <div className="flex items-center justify-center w-full">
                            <button className="cursor-pointer">
                                
                                <Image 
                                    src={'/agregar_alumno.png'}
                                    alt="agregar"
                                    width={150}
                                    height={50}
                                />

                            </button>
                        </div>
                        {/* Boton cerrar */}
                        <button 
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 duration-150 ease-in-out rounded focus:ring-2 focus:outline-none"  
                            aria-label="close modal" 
                            role="button"
                        >
                            <Image 
                                src={'/x_icon.png'}
                                alt="cerrar"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                </div>
            </div>
            
            {/* <script>
                let modal = document.getElementById("modal");
                function modalHandler(val) {
                    if (val) {
                        fadeIn(modal);
                    } else {
                        fadeOut(modal);
                    }
                }
                function fadeOut(el) {
                    el.style.opacity = 1;
                    (function fade() {
                        if ((el.style.opacity -= 0.1) < 0) {
                            el.style.display = "none";
                        } else {
                            requestAnimationFrame(fade);
                        }
                    })();
                }
                function fadeIn(el, display) {
                    el.style.opacity = 0;
                    el.style.display = display || "flex";
                    (function fade() {
                        let val = parseFloat(el.style.opacity);
                        if (!((val += 0.2) > 1)) {
                            el.style.opacity = val;
                            requestAnimationFrame(fade);
                        }
                    })();
                }
            </script> */}

                {/* Modal Editar Alumno */}

                {/* Modal agregar Certificación */}

                {/* Alert Eliminar Alumno */}

                {/* Alert Eliminar certificación */}


            </div>
        </>
    );
}