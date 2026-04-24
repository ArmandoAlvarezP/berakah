'use client';

import { Alumno, Certificacion } from '@/interfaces';
import { TablaAdminItem } from './TablaAdminItem';
import { useUIStore } from '@/store';
// import { getCertificacionesById } from '@/actions';

interface Props {
    alumnos: Alumno[];
    certificaciones: Certificacion[];
}

export const TablaAdmin = ({alumnos, certificaciones} : Props) => {


    const alumno = useUIStore( state => state.alumno )

    const hayAlumnos: boolean = alumnos.length > 0;


    return (
        <>
            {
                hayAlumnos 
                ? (
                    <table className="border-collapse block md:table ">
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
                                {/* <th className="bg-[#B1F5F6] p-2 font-bold md:border md:border-grey-500 text-left block md:table-cell">Acciones</th> */}
                            </tr>
                        </thead>
                        <tbody className="block md:table-row-group">
                            {
                                alumno ? (
                                    alumno.map( (alumno, index) => ( 
                                        <TablaAdminItem 
                                            key={alumno.id}
                                            alumno={alumno}
                                            certificaciones={certificaciones} 
                                            index={index}                                    
                                        />
                                        )
                                    )
                                )
                                :
                                alumnos.map ( (alumno, index) => (
                                    <TablaAdminItem 
                                        key={ alumno.id }
                                        alumno={ alumno } 
                                        certificaciones={ certificaciones }
                                        index={index}
                                    />
                                ) )
                            }
                        </tbody>
                    </table>
                ) 
                : (
                    <h1 className='text-center text-4xl text-gray-600 items-center mt-30'>Sin Alumnos Registrados</h1>
                )
            }
        </>
    )
}
