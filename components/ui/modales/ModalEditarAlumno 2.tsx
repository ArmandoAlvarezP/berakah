'use client';

import { useUIStore } from "@/store";
import clsx from "clsx";
import Image from "next/image"


// TODO: Recibir id del alumno al que se agregará la certificación
export const ModalEditarAlumno = () => {

    const isModalOpen = useUIStore( state => state.isModalEditarAlumnoOpen );
    const closeModal = useUIStore( state => state.closeModalEditarAlumno );

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
                    <h1 className="text-[#00795D] text-lg text-center font-bold tracking-normal leading-tight mb-4 uppercase">
                        Editar Datos De Alumno
                    </h1>

                    <input id="nombre" name="nombre" type="text" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border" placeholder="NOMBRE COMPLETO" />
                    <input id="curp" name="curp" type="text" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border" placeholder="CURP" />

                    {/* Botón agregar */}
                    <div className="flex items-center justify-center w-full">
                        <button className="cursor-pointer">

                            <Image
                                src={'/guardar_cambios.png'}
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
                            width={25}
                            height={25}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
