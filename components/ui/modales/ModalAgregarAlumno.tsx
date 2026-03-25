'use client';

import { agregarAlumno } from "@/actions";
import { useUIStore } from "@/store";
import clsx from "clsx";
import Image from "next/image"
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    nombre: string;
    curp: string;
    tipo: string;
    fechaEmision: Date;
    especialidad: string;
    emisora: string;
    autorizada: string;
    folio: string;
}

export const ModalAgregarAlumno = () => {

    const isModalOpen = useUIStore(state => state.isModalAgregarAlumnoOpen);
    const closeModal = useUIStore(state => state.closeModalAgregarAlumno);


    // Manejo de Formulario 

    const [errorMessage, setErrorMessage] = useState('');

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();

    const onClose = () => {
        closeModal();
        reset();
    }

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        setErrorMessage('');
        const { nombre, curp, tipo, fechaEmision, especialidad, emisora, autorizada, folio } = data;

        // Server action 

        const resp = await agregarAlumno(nombre, curp, tipo, fechaEmision, especialidad, emisora, autorizada, folio);

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
    };



    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={
                clsx(
                    "items-center transition duration-150 ease-in-out z-10  fixed top-0 right-0 bottom-10 left-0 hidden", {
                    "flex!": isModalOpen
                }
                )
            } id="modal"
        >
            <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                <div className="relative py-8 px-5 md:px-10 bg-white shadow-md border border-gray-400 rounded-4xl">
                    <h1 className="text-[#00795D] text-lg text-center font-bold tracking-normal leading-tight mb-4 uppercase">
                        Agregar Alumno
                    </h1>

                    <input
                        id="nombre" type="text"
                        className={
                            clsx(
                                "mb-5 mt-2 text-gray-800 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border",
                                { "border-red-600": errors.nombre }
                            )
                        }
                        placeholder="NOMBRE COMPLETO"
                        {...register("nombre", { required: true })}
                    />

                    <input
                        id="curp" type="text" className={
                            clsx(
                                "mb-5 mt-2 text-gray-800 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border",
                                { "border-red-600": errors.curp }
                            )
                        } placeholder="CURP"
                        {...register("curp", { required: true })}
                    />

                    <select
                        id="tipo" className={
                            clsx(
                                "mb-5 mt-2 text-gray-800 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border",
                                { "border-red-600": errors.tipo }
                            )
                        }
                        required
                        defaultValue=""
                        {...register("tipo", { required: true })}
                    >
                        <option value="" disabled>TIPO DE CERTIFICACIÓN</option>
                        <option value="Diploma Certificado de especialidad SEP">
                            Diploma Certificado de especialidad SEP
                        </option>
                        <option value="Diploma Certificado de especialidad">
                            Diploma Certificado de especialidad
                        </option>
                        <option value="Instructor Capacitador SEP">
                            Instructor Capacitador SEP
                        </option>
                        <option value="Certificado de Acreditación BCPP">
                            Certificado de Acreditación BCPP
                        </option>
                        <option value="Certificado de Especialización Profesional">
                            Certificado de Especialización Profesional
                        </option>
                    </select>

                    <label className='text-gray-400' >FECHA DE EMISIÓN</label>

                    <input
                        id="fecha" type="date" className={
                            clsx(
                                "mb-5 mt-2 text-gray-800 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border",
                                { "border-red-600": errors.fechaEmision }
                            )
                        }
                        {...register("fechaEmision", { required: true })}
                    />

                    <input
                        id="especialidad" type="text" className={
                            clsx(
                                "mb-5 mt-2 text-gray-800 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border",
                                { "border-red-600": errors.especialidad }
                            )
                        } placeholder="ESPECIALIDAD"
                        {...register("especialidad", { required: true })}
                    />

                    <input
                        id="instEm" type="text" className={
                            clsx(
                                "mb-5 mt-2 text-gray-800 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border",
                                { "border-red-600": errors.emisora }
                            )
                        } placeholder="INSTITUCIÓN EMISORA"
                        {...register("emisora", { required: true })}
                    />

                    <input
                        id="instAut" type="text" className={
                            clsx(
                                "mb-5 mt-2 text-gray-800 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border",
                                { "border-red-600": errors.autorizada }
                            )
                        } placeholder="INSTITUCIÓN AUTORIZADA"
                        {...register("autorizada", { required: true })}
                    />

                    <input
                        id="folio" type="text" className={
                            clsx(
                                "mb-5 mt-2 text-gray-800 focus:outline-none focus:border focus:border-[#00795D] font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-3xl border",
                                { "border-red-600": errors.folio }
                            )
                        } placeholder="FOLIO"
                        {...register("folio", { required: true })}
                    />

                    {/* Error */}

                    {
                        errorMessage && (
                            <span id='error' className="text-red-500 my-5">{errorMessage}</span>
                        )
                    }

                    {/* Botón agregar */}
                    <div className="flex items-center justify-center w-full">
                        <button
                            type="submit"
                            className="cursor-pointer"
                        >

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
                        onClick={onClose}
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
