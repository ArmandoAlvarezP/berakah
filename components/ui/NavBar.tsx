import Image from "next/image";
import clsx from 'clsx';

interface Props {
    title: string;
    welcome: string;
    extraButton?: boolean;
}

export const NavBar = ({ title, welcome, extraButton }: Props) => {
    return (
        <nav className=" grid grid-cols-2 sticky top-0 isolate mb-15">
            
            {/* Fondo */}
            <Image 
                src="/header.jpg" 
                alt="" 
                className="absolute inset-0 -z-10 w-full object-cover object-right md:object-center h-70"
                width={900}
                height={500}
            />
            <div className="flex flex-col justify-between">

                {/* Logo */}

                <Image
                    src={'/logo.jpeg'}
                    alt="logo"
                    width={100}
                    height={100}
                    className="m-5 items"
                />

                <h1 className="m-10 mt-15 sm:mt-0 font-bold text-2xl sm:text-5xl text-[#00795D] uppercase w-3/4" >{ title }</h1>

            </div>

            <div className="flex flex-row justify-end">
                
                <div className="flex flex-col">
                    
                    <h3 className={
                        clsx(
                            "mb-3 mr-5 mt-5 text-[#00795D] font-bold uppercase",
                            {
                                "mr-0 ml-20 mt-5 text-right": extraButton
                            }
                        )
                    }>{ welcome }</h3>

                    <Image 
                        className={
                            clsx(
                                "mb-20 mr-5 sm:ml-25 cursor-pointer",
                                {
                                    "ml-20 sm:ml-15": extraButton
                                }
                            )
                        }
                        src={'/cerrar_sesion.png'}
                        alt="cerrar sesión"
                        width={150}
                        height={30}
                    />

                    {
                        extraButton && (
                            <Image 
                            className={
                                clsx(
                                    "mb-20 mr-5 sm:ml-25 cursor-pointer",
                                    {
                                        "ml-20 sm:ml-15": extraButton
                                    }
                                )
                            }   
                            src={'/agregar_alumno.png'}
                            alt="agregar alumno"
                            width={150}
                            height={30}
                            />
                        )
                    }

                </div>
            </div>

           
                
            
        </nav>
    )
}
