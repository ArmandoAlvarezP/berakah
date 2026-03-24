import { TablaAlumnos } from '@/components';

export default function PerfilPage() {
    return (
        <>
            {/* DATOS DEL ALUMNO */}

            <div className="flex flex-col ml-2 sm:ml-15 sm:mt-10">
                <h1 className="font-semibold text-[#10D4B3] uppercase text-3xl" >Nombre Apellido Apellido</h1>
                <h2 className="font-medium text-[#10D4B3] uppercase text-xl mt-5">CURP</h2>
            </div>

            {/*  Tabla  */}

            <div className="m-10">
                
                <TablaAlumnos />

            </div>
        </>
    );
}