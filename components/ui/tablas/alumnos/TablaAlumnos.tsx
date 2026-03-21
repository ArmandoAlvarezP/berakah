import { TablaAlumnosItems } from './TablaAlumnosItems';

export const TablaAlumnos = () => {
    return (
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
                <TablaAlumnosItems />	
            </tbody>
        </table>
    )
}
