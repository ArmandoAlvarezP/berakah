'use client';

import { authenticate } from "@/actions";
import clsx from "clsx";
import Image from "next/image";
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";


export const LoginForm = () => {

    const [state, dispatch] = useActionState(authenticate, undefined);

    useEffect(() => {
        if (state === 'Success') {
            // redireccionar
            // router.replace('/');
            window.location.replace('/admin/dashboard');
        }

    }, [state]);

    return (
        <form action={ dispatch }>
            {/* <!-- Usuario y Contraseña --> */}
            <div className="mb-4">
                <input
                    type="text"
                    id="user"
                    name='nombre'
                    placeholder="USUARIO"
                    className={
                        clsx(
                            "w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 mb-5 rounded-3xl",
                            
                        )
                    }
                />

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="CONTRASEÑA"
                    className={
                        clsx(
                            "w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 mb-5 rounded-3xl",
                        )
                    }
                />
            </div>

            {state === "CredentialsSignin" && (
                <div className="flex flex-row mb-2">
                    <IoInformationOutline className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">
                        Credenciales Incorrectas
                    </p>
                </div>
                )
            }

            {/* <!-- Login Button --> */}
            <div className="flex justify-center">
                <LoginButton />
            </div>
        </form>
    )
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit" 
            className={
                clsx(
                    "mt-10 cursor-pointer",
                    {
                        "disabled": pending
                    }
                )
            }
        >
            <Image
                src={'/Ingresar.png'}
                alt='Ingresar'
                width={170}
                height={100}
            />
        </button>
    )
}