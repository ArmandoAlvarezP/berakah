import { getCertifications } from '@/actions/get-certifications';
import { TablaAlumnosItem } from './TablaAlumnosItem';
import { notFound } from 'next/navigation';

interface Props {
    curp: string;
}

export const TablaAlumnos = async ( { curp }: Props) => {

    // const {alumnos, certificaciones: cert} = initialData;

    // const alumno = alumnos.find( a => a.curp === curp )
    


    // const certificaciones = alumno.certificaciones.map( folio => (
    //     cert.find( c => c.folio === folio) 
    // )).filter(Boolean) as Certificacion[];

    

    const { alumno ,certificaciones } = await getCertifications({curp})

    if ( !alumno ) {
        notFound();
    }

    const hayCertificaciones: boolean = certificaciones.length > 0

    return (
        <>
            {
                hayCertificaciones
                    ? (
                        <table className="min-w-full border-collapse block md:table">
                            <thead className="block relative md:table-header-group">
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
                                {
                                    certificaciones.map( (certificacion, index) => (
                                        <TablaAlumnosItem 
                                            key={ certificacion.id }
                                            certificacion={certificacion}
                                            index={index}
                                        />	
                                    ) )
                                }      
                            </tbody>
                        </table>
                    ) 
                    : (
                        <h1 className='text-center text-4xl text-gray-600 items-center mt-30'>Sin Certificaciones</h1>
                    )        
            }
        </>           
    )
}
