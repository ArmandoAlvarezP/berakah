import { getYear } from "@/utils";
import Image from "next/image";
import { LoginForm } from './components/LoginForm';

export default function AdminLoginPage() {

    return (
        <>
            {/* <!-- Right: Login Form --> */}
            <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 sm:h-screen">
                {/* Logo */}
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src={'/LOGO.png'}
                        alt="logo"
                        width={200}
                        height={200}
                        className="mb-5"
                    />
                </div>

                <h1 className="font-bold uppercase text-center text-lg text-gray-500">Berakah Consultoria para la </h1>
                <h1 className="font-bold uppercase text-center text-lg text-gray-500">profesionalización sa de cv</h1>

                <span className="flex justify-center mt-2 mb-10 font-semibold text-gray-400">Panel Administrativo</span>

                <LoginForm />
                
                {/* Marca de agua */}
                <div className="flex justify-center">
                    <span className="text-center text-gray-400 sm:mt-10 mt-20 text-[10px] sm:text-xs"> &copy; {getYear} Berakah Consultoria para la Profesionalización SA de CV
                    </span>
                </div>

            </div>
        </>
    );
}