import Image from "next/image"

export const NavBar = () => {
    return (
        <nav className="relative isolate w-full mb-15">
            
            {/* Fondo */}
            <Image 
                src="/header.jpg" 
                alt="" 
                className="absolute inset-0 -z-10 w-full object-cover object-right md:object-center h-70"
                width={900}
                height={500}
                />

            <div className="flex flex-row justify-between">
                {/* Logo */}

                <Image
                    src={'/logo.jpeg'}
                    alt="logo"
                    width={100}
                    height={100}
                    className="m-5"
                />
                <div>
                    
                    <h3 className="text-rigth m-5 text-[#00795D] font-bold uppercase">Bienvenido nombre del alumno</h3>

                    <Image 
                        className="ml-10 sm:ml-25 cursor-pointer"
                        src={'/cerrar_sesion.png'}
                        alt="cerrar sesión"
                        width={150}
                        height={30}
                    />

                </div>
            </div>

            <div className="flex">
                <h1 className="m-10 font-bold text-2xl sm:text-5xl text-[#00795D] uppercase" >Historial de Certificaciones</h1>
            </div>
                
            
        </nav>
    )
}
