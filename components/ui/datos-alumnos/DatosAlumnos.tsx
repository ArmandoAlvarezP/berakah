import { getCertifications } from "@/actions/get-certifications";

interface Props {
    curp: string;
}

export const DatosAlumnos = async ({ curp }: Props) => {

    const { alumno } = await getCertifications({curp})

    if( !alumno ) return;

    return (
        <div className="flex flex-col ml-2 sm:ml-15 sm:mt-10">
            <h1 className="font-semibold text-[#10D4B3] uppercase text-3xl" >{alumno.nombre}</h1>
            <h2 className="font-medium text-[#10D4B3] uppercase text-xl mt-5">{alumno.curp}</h2>
        </div>
    )
}
