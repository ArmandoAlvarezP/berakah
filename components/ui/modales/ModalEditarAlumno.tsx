'use client';

import { editarAlumno } from "@/actions";
import { Alumno } from "@/interfaces";
import { useUIStore } from "@/store";
import clsx from "clsx";
import Image from "next/image"
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
    alumnos: Alumno[];
}

type Inputs = {
    nombre: string;
    curp: string;
}

// TODO: Recibir id del alumno al que se agregará la certificación
export const ModalEditarAlumno = ({alumnos}: Props) => {

    const isModalOpen = useUIStore( state => state.isModalEditarAlumnoOpen );
    const closeModal = useUIStore( state => state.closeModalEditarAlumno );
    const id = useUIStore( state => state.id );
    const clearId = useUIStore( state => state.clearId )

    const alumno = alumnos.filter( alumno => (
        alumno.id === id
    ) )

    const nombre = alumno[0]?.nombre;
    const curp = alumno[0]?.curp;


    // Manejo de formulario 
        
            const [errorMessage, setErrorMessage] = useState('');
        
            const { register, handleSubmit, formState: {errors}, reset } = useForm<Inputs>();
        
            const onClose = () => {
                closeModal();
                reset();
                clearId();
            }
        
            const onSubmit: SubmitHandler<Inputs> = async (data) => {
        
                setErrorMessage('');
                const { nombre, curp } = data;
        
                // Server action 
        
                const resp = await editarAlumno(id, nombre, curp);
        
                if (!resp?.ok) {
                    setErrorMessage(resp!.message);
                    setTimeout(() => {
                        setErrorMessage('')
                    }, 5000);
                    return;
                }
        
                console.log(resp);
                closeModal();
                reset();
                clearId();
            };

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className={
                clsx(
                    "items-center transition duration-150 ease-in-out z-10  fixed top-0 right-0 bottom-10 left-0 hidden", {
                    "flex!" : isModalOpen
                    }
                )
            } 
            id="modal"
        >
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md border border-gray-400 rounded-4xl">
                    <h1 className="text-[#00795D] text-lg text-center font-bold tracking-normal leading-tight mb-4 uppercase">
                        Editar Datos De Alumno
                    </h1>

                    <input 
                        id="nombre" type="text" 
                        className={
                            clsx(
                                "mb-5 mt-2 text-gray-800 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border",
                                {
                                    "border-red-500": errors.nombre
                                }
                            )
                        }
                        placeholder={nombre} 
                        defaultValue={nombre}
                        {...register('nombre', {required: true})}
                    />

                    <input 
                        id="curp" type="text" 
                        className={
                            clsx(
                                "mb-5 mt-2 text-gray-800 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border",
                                {
                                    "border-red-500": errors.curp
                                }
                            )
                        } placeholder={curp} 
                        defaultValue={curp}
                        {...register('curp', { required: true})}
                    />

                    {
                        errorMessage && (
                            <span id='error' className="text-red-500 my-5">{errorMessage}</span>
                        )
                    }

                    {/* Botón agregar */}
                    <div className="flex items-center justify-center w-full">
                        <button 
                            type="submit"
                            className="cursor-pointer">

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
                        onClick={ onClose }
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
        </form>
    )
}
