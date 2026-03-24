import { Certificacion } from "@/interfaces";
import clsx from "clsx";

interface Props {
    certificacion: Certificacion;
    index: number;
}

export const TablaAlumnosItem = ({certificacion, index}: Props) => {

    return (
        <>
            <tr 
                className={
                clsx(
                    "border border-grey-500 md:border-none block md:table-row",
                    {
                        "bg-[#E6FCFC]" : (index +1) % 2 === 0
                    }
                )
            }>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Tipo de Documento</span>{certificacion.tipo}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad / Curso</span>{certificacion.especialidad}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>{certificacion.emisora}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>{certificacion.autorizada}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                    { certificacion.fechaEmision.toLocaleString('es-mx') }</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>{certificacion.folio}</td>
            </tr>     
        </>
    )
}


// 