'use client';

import { useForm, SubmitHandler } from "react-hook-form"
import Image from "next/image"
import { redirect } from "next/navigation";

type Inputs = {
    curp: string;
}

export const LoginForm = () => {


    const { register, handleSubmit, formState: {errors} } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = ({curp}) => {
        redirect(`/perfil/${curp.toUpperCase()}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <!-- CURP --> */}
            <div className="mb-4">
                <label className="block text-gray-400 font-bold mb-2">USUARIO</label>
                <input 
                    type="text" 
                    id="curp" 
                    placeholder="CURP"
                    className="w-full border border-gray-300 rounded-3xl py-2 px-3 focus:outline-none focus:border-blue-500" 
                    {...register("curp", { required: true} )}
                />
            </div>

            {/* Error */}
            { errors.curp && ( <span className="text-red-500" >Este campo es obligatorio</span> ) }

            {/* <!-- Login Button --> */}
            <div className="flex justify-center">
                <button 
                    type="submit" 
                    className="mt-10 cursor-pointer" 
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
