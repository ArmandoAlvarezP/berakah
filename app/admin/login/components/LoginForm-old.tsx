'use client';

import { login } from "@/actions";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    nombre: string;
    password: string;
}

export const LoginForm = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, formState: {errors} } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        setErrorMessage('');
        const { nombre, password } = data;
        
        // Server action
        const resp = await login( nombre.toLocaleLowerCase(), password );
        if( !resp?.ok ) {
            setErrorMessage( resp?.message as string );
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
            return;
        }
        // redirect('/admin/dashboard');
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            {/* <!-- Usuario y Contraseña --> */}
            <div className="mb-4">
                <input
                    type="text"
                    id="user"
                    placeholder="USUARIO"
                    className={
                        clsx(
                            "w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 mb-5 rounded-3xl",
                            { "border-red-500" : errors.nombre}
                        )
                    }
                    { ...register('nombre' , { required:true }) }
                />

                <input
                    type="password"
                    id="password"
                    placeholder="CONTRASEÑA"
                    className={
                        clsx(
                            "w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 mb-5 rounded-3xl",
                            { "border-red-500" : errors.password}
                        )
                    }
                    { ...register('password', { required: true }) }
                />
            </div>

            {
                errorMessage && (
                    <span className="text-red-500" >{errorMessage}</span>
                )
            }

            {/* <!-- Login Button --> */}
            <div className="flex justify-center">
                <button
                    type="submit" className="mt-10 cursor-pointer"
                >
                    <Image
                        src={'/Ingresar.png'}
                        alt='Ingresar'
                        width={170}
                        height={100}
                    />

                </button>
            </div>
        </form>
    )
}
