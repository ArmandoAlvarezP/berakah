import { getYear } from "@/utils";
import Image from "next/image";

export default function LoginPage() {

    return (
        <div className="bg-white flex justify-center items-center h-screen">
            {/* <!-- Left: Image --> */}
                <div className="w-1/2 h-screen hidden lg:block">

                 {/* Capa de color sobre la imágen */}

                    <div className="fixed top-0 left-0 w-1/2 h-screen z-10 bg-pink-400 opacity-50"/>

                    <Image 
                        src="/login-estudiantil.jpg" alt="Estudiantes" className="object-cover w-full h-full"
                        height={400}
                        width={600}
                    />
                </div>
            
            {/* <!-- Right: Login Form --> */}
            <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 sm:h-screen">
                {/* Logo */}
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src={'/logo.jpeg'}
                        alt="logo"
                        width={200}
                        height={200}
                        className="mb-5"
                    />
                </div>

                <h1 className="font-bold uppercase text-center text-lg text-gray-500">Berakah Consultoria para la </h1>
                <h1 className="font-bold uppercase text-center text-lg text-gray-500">profesionalización sa de cv</h1>

                <span className="flex justify-center mt-2 mb-10 font-semibold text-gray-400">Acceso Estudiantil</span>

                <form >
                    {/* <!-- CURP --> */}
                    <div className="mb-4">
                    <label className="block text-gray-400 font-bold mb-2">USUARIO</label>
                    <input 
                        type="text" 
                        id="curp" 
                        name="curp" 
                        placeholder="CURP"
                        className="w-full border border-gray-300 rounded-3xl py-2 px-3 focus:outline-none focus:border-blue-500" 
                    />
                    </div>

                    {/* <!-- Login Button --> */}
                    <div className="flex justify-center">
                        <button 
                            type="submit" className="bg-yellow-600 hover:bg-yellow-700 shadow shadow-gray-400 text-white font-semibold rounded-3xl py-2 px-4 mt-10 w-1/2"
                        >
                                Ingresar

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