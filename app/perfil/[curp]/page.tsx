
export default function PerfilPage() {
    return (
        <>
            {/* DATOS DEL ALUMNO */}

            <div className="flex flex-col ml-2 sm:ml-15 sm:mt-10">
                <h1 className="font-semibold text-[#10D4B3] uppercase text-3xl" >Nombre Apellido Apellido</h1>
                <h2 className="font-medium text-[#10D4B3] uppercase text-xl">CURP</h2>
            </div>

            {/*  Tabla  */}

            <div className="m-10">

                <table className="min-w-full border-collapse block md:table">
                    <thead className="block md:table-header-group">
                        <tr className="border border-[#B1F5F6] md:border-[#B1F5F6] block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative bg-[#B1F5F6]">
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Tipo de documento</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Especialidad / Curso</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Institución Emisora</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Institución Autorizada</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Fecha de Emisión</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Folio</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        <tr className="border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Tipo de Documento</span>Diploma Certificado de especialidad SEP</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad / Curso</span>Cosmetología</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>Berakah Consultoría</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>Berakah Consultoría</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                            21/03/2026</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>1234</td>
                        </tr>
                        <tr className="bg-[#E6FCFC] border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Tipo de Documento</span>Diploma Certificado de especialidad SEP</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad / Curso</span>Cosmetología</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>Berakah Consultoría</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>Berakah Consultoría</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                            21/03/2026</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>1234</td>
                        </tr>
                        <tr className="border border-grey-500 md:border-none block md:table-row">
                            <td className="md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Tipo de Documento</span>Diploma Certificado de especialidad SEP</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad / Curso</span>Cosmetología</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>Berakah Consultoría</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>Berakah Consultoría</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                            21/03/2026</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>1234</td>
                        </tr>
                        <tr className="bg-[#E6FCFC] border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Tipo de Documento</span>Diploma Certificado de especialidad SEP</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad / Curso</span>Cosmetología</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>Berakah Consultoría</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>Berakah Consultoría</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                            21/03/2026</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>1234</td>
                        </tr>			
                    </tbody>
                </table>

            </div>
        </>
    );
}