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
                    <td className="grid grid-cols-1 p-2 md:border md:border-grey-500 text-left md:table-cell">
                        <div className="flex flex-row items-center">
                            <span className="inline-block w-1/3 md:hidden font-bold mr-10 sm:mr-0"
                            >
                                Tipo de Documento
                            </span>
                            <span className="inline-block ml-5 sm:ml-0">      {certificacion.tipo}
                            </span>
                        </div>
                        <hr className="my-3 md:hidden"/>
                    </td>
                    <td className="grid grid-cols-1 p-2 md:border md:border-grey-500 text-left md:table-cell">
                        <div className="flex flex-row items-center">
                            <span className="inline-block w-1/3 md:hidden font-bold mr-10 sm:mr-0">
                                Especialidad / Curso
                            </span>
                            <span className="inline-block ml-5 sm:ml-0">{certificacion.especialidad}
                            </span>
                        </div>
                        <hr className="my-3 md:hidden"/>
                    </td>
                    <td className="grid grid-cols-1 p-2 md:border md:border-grey-500 text-left md:table-cell">
                        <div className="flex flex-row items-center">
                            <span className="inline-block w-1/3 md:hidden font-bold mr-10 sm:mr-0">
                                Institución Emisora
                            </span>
                            <span className="inline-block ml-5 sm:ml-0">
                                {certificacion.emisora}
                            </span>
                        </div>
                        <hr className="my-3 md:hidden"/>
                    </td>
                    <td className="grid grid-cols-1 p-2 md:border md:border-grey-500 text-left md:table-cell">
                        <div className="flex flex-row items-center">
                            <span className="inline-block w-1/3 md:hidden font-bold mr-10 sm:mr-0">
                                Institución Autorizada
                            </span>
                            <span className="inline-block ml-5 sm:ml-0">
                                {certificacion.autorizada}
                            </span>
                        </div>
                        <hr className="my-3 md:hidden"/>
                    </td>
                    <td className="grid grid-cols-1 p-2 md:border md:border-grey-500 text-left md:table-cell">
                        <div className="flex flex-row items-center">
                            <span className="inline-block w-1/3 md:hidden font-bold mr-10 sm:mr-0">
                                Fecha de Emisión
                            </span>
                            <span className="inline-block ml-5 sm:ml-0">
                                { certificacion.fechaEmision.toLocaleDateString('es-mx') }
                            </span>
                        </div>
                        <hr className="my-3 md:hidden"/>
                    </td>
                    <td className="grid grid-cols-1 p-2 md:border md:border-grey-500 text-left md:table-cell">
                        <div className="flex flex-row items-center">
                            <span className="inline-block w-1/3 md:hidden font-bold mr-10 sm:mr-0">
                                Folio
                            </span>
                            <span className="inline-block ml-5 sm:ml-0">
                            {certificacion.folio}
                            </span>
                        </div>
                    </td>
            </tr>     
        </>
    )
}


// 