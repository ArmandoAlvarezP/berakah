'use client';

import { useUIStore } from "@/store";
import clsx from "clsx";
import Image from "next/image"

export const ModalAgregarAlumno = () => {

    const isModalOpen = useUIStore( state => state.isModalAgregarOpen );
    const closeModal = useUIStore( state => state.closeModalAgregar );

    return (
        <div className={
            clsx(
                "items-center transition duration-150 ease-in-out z-10  fixed top-0 right-0 bottom-10 left-0 hidden", {
                    "flex!" : isModalOpen
                }
            )
        } id="modal">
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md border border-gray-400 rounded-4xl">
                    <h1 className="text-[#00795D] text-3xl text-center font-bold tracking-normal leading-tight mb-4 uppercase">
                        Agregar Alumno
                    </h1>
                    <input id="nombre" name="nombre" type="text" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#111817] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border" placeholder="NOMBRE COMPLETO" />
                    <input id="curp" name="curp" type="text" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border" placeholder="CURP" />
                    <select id="tipo" name="tipo" className="mb-5 mt-2 text-gray-400 focus:outline-none focus:border focus:border-[#00795D] w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border uppercase">
                        <option value="">TIPO DE CERTIFICACIÓN</option>
                        <option value="1">
                            Diploma Certificado de especialidad SEP
                        </option>
                        <option value="2">
                            Diploma Certificado de especialidad
                        </option>
                        <option value="3">
                            Instructor Capacitador SEP
                        </option>
                        <option value="4">
                            Certificado de Acreditación BCPP
                        </option>
                        <option value="5">
                            Certificado de Especialización Profesional
                        </option>
                    </select>
                    <label className='text-gray-400' >FECHA DE EMISIÓN</label>
                    <input id="fecha" name="fecha" type="date" className="mb-5 mt-2 text-gray-400 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-2 text-md border-gray-300 rounded-3xl border" />
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
                        onClick={ closeModal }
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
    )
}
