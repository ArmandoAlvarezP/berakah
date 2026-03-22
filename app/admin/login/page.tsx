import { getYear } from "@/utils";
import Image from "next/image";

export default function AdminLoginPage() {

    return (
        <div className="bg-white flex justify-center items-center h-screen">
            {/* <!-- Left: Image --> */}
                <div className="w-1/2 h-screen hidden lg:block">

                 {/* Capa de color sobre la imágen */}

                    <div className="fixed top-0 left-0 w-1/2 h-screen z-10 bg-pink-400 opacity-50"/>

                    <Image 
                        src="/login-administrativo.avif" alt="Estudiantes" className="object-cover w-full h-full"
                        height={400}
                        width={600}
                    />
                </div>
            
            {/* <!-- Right: Login Form --> */}
            <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 sm:h-screen">
                {/* Logo */}
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src={'/logo.png'}
                        alt="logo"
                        width={200}
                        height={200}
                        className="mb-5"
                    />
                </div>

                <h1 className="font-bold uppercase text-center text-lg text-gray-500">Berakah Consultoria para la </h1>
                <h1 className="font-bold uppercase text-center text-lg text-gray-500">profesionalización sa de cv</h1>

                <span className="flex justify-center mt-2 mb-10 font-semibold text-gray-400">Panel Administrativo</span>

                <form >
                    {/* <!-- Usuario y Contraseña --> */}
                    <div className="mb-4">
                        <input 
                            type="text" 
                            id="user" 
                            name="user" 
                            placeholder="USUARIO"
                            className="w-full border border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 mb-5 rounded-3xl" 
                        />

                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="CONTRASEÑA"
                            className="w-full border border-gray-300 rounded-3xl py-2 px-3 focus:outline-none focus:border-blue-500" 
                        />
                    </div>

                    {/* <!-- Login Button --> */}
                    <div className="flex justify-center">
                        <button 
                            type="submit" className="mt-10"
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
                
                {/* Marca de agua */}
                <div className="flex justify-center">
                    <span className="text-center text-gray-400 sm:mt-20 mt-20 text-xs"> &copy; {getYear} Berakah Consultoria para la Profesionalización SA de CV
                    </span>
                </div>

            </div>
        </div>
    );
}