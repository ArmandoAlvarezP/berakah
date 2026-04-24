'use client';

import { buscarAlumnoPorCurp } from "@/actions";
import { useUIStore } from "@/store";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    busqueda: string;
}

export const BarraBusqueda = () => {

    const [errorMessage, setErrorMessage] = useState('');

    const setAlumno = useUIStore( state => state.setAlumno );
    const alumno = useUIStore( state => state.alumno );

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setErrorMessage('');
        const { busqueda } = data;

        // Server action
        const resp = await buscarAlumnoPorCurp( busqueda.toUpperCase() );

        if (!resp) {
            setErrorMessage('Alumno No Encontrado');
            setTimeout(() => {
                setErrorMessage('')
            }, 5000);
            return;
        }

        setAlumno(Array.isArray(resp) ? resp : [resp])

        console.log(alumno);
    }

    return (
        <div className="ml-5 sm:ml-0">
            <form 
                onSubmit={ handleSubmit(onSubmit) }
                className="flex overflow-hidden rounded-xl bg-gray-200 focus:outline mr-5 ml-10 sm:ml-0 mt-6"
            >
                <input 
                    type="text" placeholder="Buscar" className="w-full rounded-bl-md rounded-tl-md bg-gray-100 px-4 py-2.5 text-gray-700 focus:outline-none" 
                    {...register("busqueda")}
                />
                <button type="submit" className="bg-[#028b6b] px-3.5 text-white duration-150 hover:bg-[#00795D] cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </form>
            {
                errorMessage && (
                    <span className="bg-gray-100 rounded-3xl text-center text-red-500 mb-5 ml-10 sm:ml-0">{errorMessage}</span>
                )
            }
        </div>
    )
}
