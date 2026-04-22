'use client';

import { useUIStore } from "@/store";
import clsx from "clsx"
import Image from "next/image";
import { FaTrashCan } from "react-icons/fa6"

// TODO: Recibir los datos de la certificación a borrar 
export const BorrarCertificacionAlert = () => {

    const { isBorrarCertificacionAlertOpen, closeBorrarCertificacionAlert } = useUIStore();

    return (
            <div 
                className={
                    clsx(
                        "min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover hidden",
                        {
                            "flex!": isBorrarCertificacionAlertOpen
                        }
                    )
                }  
                id="modal-id"
            >
                <div className="absolute bg-black opacity-80 inset-0 z-0" />
                <div className="w-11/12 md:w-2/3 max-w-lg p-5 relative mx-auto my-auto rounded-3xl shadow-lg  bg-white ">
                    
                    <div className="">
                        
                        <div className="text-center p-5 flex-auto justify-center">
                            <FaTrashCan size={50} className="flex justify-self-center items-center text-red-600" />
                            <h1 className="text-xl font-bold text-gray-500 px-8 mt-3 uppercase">¿Está seguro de eliminar la certificación: especialidad, del alumno: nombre?</h1>
                        </div>
                        
                        <div className="p-3  mt-2 text-center space-x-4 md:block ">
                            <button className="mb-2 md:mb-0 cursor-pointer">
                                <Image 
                                    src={'/si.png'}
                                    alt="si"
                                    width={150}
                                    height={50}
                                />
                            </button>
                            <button 
                                className="mb-2 md:mb-0 cursor-pointer"
                                onClick={ closeBorrarCertificacionAlert }
                            >
                                
                                <Image 
                                    src={'/no.png'}
                                    alt="no"
                                    width={150}
                                    height={50}
                                />

                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )
}
