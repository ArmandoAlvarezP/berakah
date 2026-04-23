'use client';

import { useUIStore } from "@/store";
import { FaPlus } from "react-icons/fa"
import { IoCloseOutline, IoTrashOutline } from "react-icons/io5"
import { MdEdit } from "react-icons/md"
import { Alumno, Certificacion } from '@/interfaces';
import clsx from "clsx";

// TODO: Obtener aquí toda la info de alumnos y certificaciones necesarias opara enviar a los modales

interface Props {
    alumno: Alumno;
    certificaciones: Certificacion[];
    index: number;
}

export const TablaAdminItem = ({alumno, certificaciones, index}: Props) => {

    const { id } = alumno;

    const certificacionesPorAlumno = certificaciones.filter( certificacion => certificacion.alumnoId === alumno.id);




    const openModalEditarAlumno = useUIStore( state => state.openModalEditarAlumno);

    const openModalAgregarCertificacion = useUIStore( state => state.openModalAgregarCertificacion );


    const openBorrarAlumnoAlert = useUIStore( state => state.openBorrarAlumnoAlert );

    const openBorrarCertificacionAlert = useUIStore( state => state.openBorrarCertificacionAlert );

    // Agregar certificación y editar alumno

    const setId = useUIStore( state => state.setId );

    const onOpenModalAgregarCertificacion = (id: number) => {
        setId(id);
        openModalAgregarCertificacion();
    }

    const onOpenModalEditarAlumno = (id: number) => {
        setId(id);
        openModalEditarAlumno();
    }

    // Borrar certificación

    const setIdCert = useUIStore( state => state.setIdCert );

    const onOpenBorrarCertificacionAlert = ( id: string ) => {
        setIdCert(id);
        openBorrarCertificacionAlert();
    }

    // Borrar Alumno 

    const onOpenBorrarAlumnoAlert = ( id: number ) => {
        setId(id);
        openBorrarAlumnoAlert();
    }


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
                }
            >
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Nombre</span>
                    <div className="flex flex-row sm:flex-col">
                        <span className="sm:text-center text-2xl sm:text-base">{alumno.nombre}</span>
                        <div className="flex justify-center mt-0 ml-3 sm:mt-5 sm:ml-0">
                            <MdEdit size={20} className="m-2 text-green-400 hover:text-green-600 cursor-pointer" 
                            onClick={() => onOpenModalEditarAlumno(id)}
                            //TODO: recibir id del alumno al abrir modal
                            />
                            <IoTrashOutline size={20} className="m-2 text-red-400 hover:text-red-600 cursor-pointer" 
                            onClick={ () => onOpenBorrarAlumnoAlert(id) }
                            />
                        </div>
                    </div>
                    <hr className="md:hidden my-3" />
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">
                        CURP
                    </span>
                    {alumno.curp}
                    <hr className="md:hidden my-3" />
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">
                        Tipo de Certificación
                    </span>
                    <div className="flex flex-col">

                        {/* // TODO: hacer map de las certificaciones */}
                        <ol className='list-decimal'>
                            {
                                certificacionesPorAlumno.map( (c,i) => (
                                    <li 
                                    className="ml-5 mb-3"
                                    key={i}         
                                    >
                                        <div className="flex justify-between">
                                            {c?.tipo}

                                            <IoCloseOutline size={30}               className="text-red-400 hover:text-red-600 cursor-pointer min-w-7.5 min-h-7.5" 
                                            onClick={() => onOpenBorrarCertificacionAlert(certificacionesPorAlumno[i].id)}
                                            />
                                        </div>
                                    </li>
                                ) )
                            }
                            
                        </ol>
                        <div className="flex flex-row justify-center mt-3">
                            <FaPlus size={20} className=" text-green-400 hover:text-green-600 cursor-pointer" 
                            onClick={() => onOpenModalAgregarCertificacion(id)}
                            />
                        </div>
                    </div>
                    <hr className="md:hidden my-3" />
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad</span>
                    <div className="flex flex-row">
                        <ol>
                            {
                                certificacionesPorAlumno.map(( c,i ) => (
                                    <li 
                                        key={i}
                                        className="ml-5 list-decimal"
                                    >
                                        {c?.especialidad}
                                    </li> 
                                ))
                            }                                             
                        </ol>
                    </div>
                    <hr className="md:hidden my-3" />
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>
                    <div className="flex flex-row">
                        <ol>
                            {
                                certificacionesPorAlumno.map(( c,i ) => (
                                    <li 
                                        key={i}
                                        className="ml-5 list-decimal"
                                    >
                                        {c?.emisora}
                                    </li> 
                                ))
                            }                                                 
                        </ol>
                    </div>
                    <hr className="md:hidden my-3" />
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>
                    <div className="flex flex-row">
                        <ol>
                            {
                                certificacionesPorAlumno.map(( c,i ) => (
                                    <li 
                                        key={i}
                                        className="ml-5 list-decimal"
                                    >
                                        {c?.autorizada}
                                    </li> 
                                ))
                            }                          
                        </ol>
                    </div>
                    <hr className="md:hidden my-3" />
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                    <div className="flex flex-row">
                        <ol>
                            {
                                certificacionesPorAlumno.map(( c,i ) => (
                                    <li 
                                        key={i}
                                        className="ml-5 list-decimal"
                                    >
                                        {c?.fechaEmision.toLocaleDateString('es-mx')}
                                    </li> 
                                ))
                            }                             
                        </ol>
                    </div>
                    <hr className="md:hidden my-3" />
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>
                    <div className="flex flex-row">
                        {/* // TODO: hacer map para los folios  */}
                        <ol>
                            {
                                certificacionesPorAlumno.map(( c,i ) => (
                                    <li 
                                        key={i}
                                        className="ml-5 list-decimal"
                                    >
                                        {c?.folio}
                                    </li> 
                                ))
                            }  
                        </ol>
                    </div>
                </td>
            </tr>    
        </>
    )
}

// className="bg-[#E6FCFC] 