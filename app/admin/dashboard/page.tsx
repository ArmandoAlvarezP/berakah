
export default function AdminPage() {
    return (
        <>
            {/*  Tabla  */}

            <div className="mx-5 mt-0 mb-10 w-auto">

                <table className="border-collapse block md:table">
                    <thead className="block relative md:table-header-group -z-50">
                        <tr className="border border-[#B1F5F6] md:border-[#B1F5F6] block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative bg-[#B1F5F6]">
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Alumno</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">CURP</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Tipo de Certificación</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Especialidad</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Institución emisora</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Institución Autorizada</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Fecha de Emisión</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Folio</th>
                            <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        <tr className="border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Alumno</span>Julián Barrera</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">CURP</span>AAPA940623HMNLR04</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Tipo de Certificación</span>Certificado de Especialización Profesional</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad</span>Mecatrónica</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>Berakah Consultoria</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>Berakah Consultoria</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                            21/03/2026</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>1234</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Acciones</span>
                                <div className="flex flex-row">
                                    <ul>
                                        <li className="text-green-500 underline cursor-pointer">Añadir Especialidad</li>
                                        <li className="text-blue-500 underline cursor-pointer">Editar Alumno</li>
                                        <li className="text-red-500 underline cursor-pointer">Eliminar Alumno</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr className="border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Alumno</span>Julián Barrera</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">CURP</span>AAPA940623HMNLR04</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Tipo de Certificación</span>Certificado de Especialización Profesional</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad</span>Mecatrónica</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>Berakah Consultoria</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>Berakah Consultoria</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                            21/03/2026</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>1234</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Acciones</span>
                                <div className="flex flex-row">
                                    <ul>
                                        <li className="text-green-500 underline cursor-pointer">Añadir Especialidad</li>
                                        <li className="text-blue-500 underline cursor-pointer">Editar Alumno</li>
                                        <li className="text-red-500 underline cursor-pointer">Eliminar Alumno</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr className="border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Alumno</span>Julián Barrera</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">CURP</span>AAPA940623HMNLR04</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Tipo de Certificación</span>Certificado de Especialización Profesional</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad</span>Mecatrónica</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>Berakah Consultoria</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>Berakah Consultoria</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                            21/03/2026</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>1234</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Acciones</span>
                                <div className="flex flex-row">
                                    <ul>
                                        <li className="text-green-500 underline cursor-pointer">Añadir Especialidad</li>
                                        <li className="text-blue-500 underline cursor-pointer">Editar Alumno</li>
                                        <li className="text-red-500 underline cursor-pointer">Eliminar Alumno</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr className="border border-grey-500 md:border-none block md:table-row">
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Alumno</span>Julián Barrera</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">CURP</span>AAPA940623HMNLR04</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Tipo de Certificación</span>Certificado de Especialización Profesional</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad</span>Mecatrónica</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>Berakah Consultoria</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>Berakah Consultoria</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                            21/03/2026</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>1234</td>
                            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Acciones</span>
                                <div className="flex flex-row">
                                    <ul>
                                        <li className="text-green-500 underline cursor-pointer">Añadir Especialidad</li>
                                        <li className="text-blue-500 underline cursor-pointer">Editar Alumno</li>
                                        <li className="text-red-500 underline cursor-pointer">Eliminar Alumno</li>
                                    </ul>
                                </div>
                            </td>
                        </tr>		
                    </tbody>
                </table>

            </div>
        </>
    );
}