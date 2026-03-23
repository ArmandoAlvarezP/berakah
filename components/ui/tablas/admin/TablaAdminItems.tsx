'use client';

import { useUIStore } from "@/store";
import { FaPlus } from "react-icons/fa"
import { IoCloseOutline, IoTrashOutline } from "react-icons/io5"
import { MdEdit } from "react-icons/md"


// TODO: Obtener aquí toda la info de alumnos y certificaciones necesarias opara enviar a los modales
export const TablaAdminItems = () => {

    const openModalEditarAlumno = useUIStore( state => state.openModalEditarAlumno);

    const openModalAgregarCertificacion = useUIStore( state => state.openModalAgregarCertificacion );

    const openBorrarAlumnoAlert = useUIStore( state => state.openBorrarAlumnoAlert );

    const openBorrarCertificacionAlert = useUIStore( state => state.openBorrarCertificacionAlert );

    return (
        <>
            <tr className="border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Alumno</span>
                    <div className="flex flex-row sm:flex-col">
                        <span className="sm:text-center text-2xl sm:text-base">Julián Barrera</span>
                        <div className="flex justify-center mt-0 ml-3 sm:mt-5 sm:ml-0">
                            <MdEdit size={20} className="m-2 text-green-400 hover:text-green-600 cursor-pointer" 
                            onClick={openModalEditarAlumno}
                            //TODO: recibir id del alumno al abrir modal
                            />
                            <IoTrashOutline size={20} className="m-2 text-red-400 hover:text-red-600 cursor-pointer" 
                            onClick={ openBorrarAlumnoAlert }
                            />
                        </div>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">CURP</span>AAPA940623HMNLR04</td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Tipo de Certificación</span>
                    <div className="flex flex-col">
                        <ol className='list-decimal'>
                            <li className="ml-5 mb-3 
                                                ">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30}               className="text-red-400 hover:text-red-600 cursor-pointer" 
                                    onClick={openBorrarCertificacionAlert}
                                    />
                                </div>
                            </li>
                            <li className="ml-5
                                                mb-3">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30} className="text-red-400 hover:text-red-600 cursor-pointer" />
                                </div>
                            </li>
                            <li className="ml-5 
                                                mb-3">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30} className="text-red-400 hover:text-red-600 cursor-pointer" />
                                </div>
                            </li>
                        </ol>
                        <div className="flex flex-row justify-center mt-3">
                            <FaPlus size={20} className=" text-green-400 hover:text-green-600 cursor-pointer" 
                            onClick={openModalAgregarCertificacion}
                            />
                        </div>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">1234</li>
                            <li className="ml-5   list-decimal">2345</li>
                            <li className="ml-5   list-decimal">6789</li>
                        </ol>
                    </div>
                </td>
                {/* <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Acciones</span>
                                        <div className="flex flex-row">
                                            <ul>
                                                <li className="ml-5 text-green-500 underline cursor-pointer">Añadir Especialidad</li>
                                                <li className="ml-5 text-blue-500 underline cursor-pointer">Editar Alumno</li>
                                                <li className="ml-5 text-red-500 underline cursor-pointer">Eliminar Alumno</li>
                                            </ul>
                                        </div>
                                    </td> */}
            </tr>
            <tr className="bg-[#E6FCFC] border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Alumno</span>
                    <div className="flex flex-row sm:flex-col">
                        <span className="sm:text-center text-2xl sm:text-base">Julián Barrera</span>
                        <div className="flex justify-center mt-0 ml-3 sm:mt-5 sm:ml-0">
                            <MdEdit size={20} className="m-2 text-green-400 hover:text-green-600 cursor-pointer" />
                            <IoTrashOutline size={20} className="m-2 text-red-400 hover:text-red-600 cursor-pointer" />
                        </div>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">CURP</span>AAPA940623HMNLR04</td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Tipo de Certificación</span>
                    <div className="flex flex-col">
                        <ol className='list-decimal'>
                            <li className="ml-5 mb-3 
                                                ">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30} className="text-red-400 hover:text-red-600 cursor-pointer" />
                                </div>
                            </li>
                            <li className="ml-5
                                                mb-3">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30} className="text-red-400 hover:text-red-600 cursor-pointer" />
                                </div>
                            </li>
                            <li className="ml-5 
                                                mb-3">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30} className="text-red-400 hover:text-red-600 cursor-pointer" />
                                </div>
                            </li>
                        </ol>
                        <div className="flex flex-row justify-center mt-3">
                            <FaPlus size={20} className=" text-green-400 hover:text-green-600 cursor-pointer" />
                        </div>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">1234</li>
                            <li className="ml-5   list-decimal">2345</li>
                            <li className="ml-5   list-decimal">6789</li>
                        </ol>
                    </div>
                </td>
                {/* <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Acciones</span>
                                        <div className="flex flex-row">
                                            <ul>
                                                <li className="ml-5 text-green-500 underline cursor-pointer">Añadir Especialidad</li>
                                                <li className="ml-5 text-blue-500 underline cursor-pointer">Editar Alumno</li>
                                                <li className="ml-5 text-red-500 underline cursor-pointer">Eliminar Alumno</li>
                                            </ul>
                                        </div>
                                    </td> */}
            </tr>
            <tr className="border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Alumno</span>
                    <div className="flex flex-row sm:flex-col">
                        <span className="sm:text-center text-2xl sm:text-base">Julián Barrera</span>
                        <div className="flex justify-center mt-0 ml-3 sm:mt-5 sm:ml-0">
                            <MdEdit size={20} className="m-2 text-green-400 hover:text-green-600 cursor-pointer" />
                            <IoTrashOutline size={20} className="m-2 text-red-400 hover:text-red-600 cursor-pointer" />
                        </div>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">CURP</span>AAPA940623HMNLR04</td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Tipo de Certificación</span>
                    <div className="flex flex-col">
                        <ol className='list-decimal'>
                            <li className="ml-5 mb-3 
                                                ">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30} className="text-red-400 hover:text-red-600 cursor-pointer" />
                                </div>
                            </li>
                            <li className="ml-5
                                                mb-3">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30} className="text-red-400 hover:text-red-600 cursor-pointer" />
                                </div>
                            </li>
                            <li className="ml-5 
                                                mb-3">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30} className="text-red-400 hover:text-red-600 cursor-pointer" />
                                </div>
                            </li>
                        </ol>
                        <div className="flex flex-row justify-center mt-3">
                            <FaPlus size={20} className=" text-green-400 hover:text-green-600 cursor-pointer" />
                        </div>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">1234</li>
                            <li className="ml-5   list-decimal">2345</li>
                            <li className="ml-5   list-decimal">6789</li>
                        </ol>
                    </div>
                </td>
                {/* <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Acciones</span>
                                        <div className="flex flex-row">
                                            <ul>
                                                <li className="ml-5 text-green-500 underline cursor-pointer">Añadir Especialidad</li>
                                                <li className="ml-5 text-blue-500 underline cursor-pointer">Editar Alumno</li>
                                                <li className="ml-5 text-red-500 underline cursor-pointer">Eliminar Alumno</li>
                                            </ul>
                                        </div>
                                    </td> */}
            </tr>
            <tr className="bg-[#E6FCFC] border border-grey-500 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Alumno</span>
                    <div className="flex flex-row sm:flex-col">
                        <span className="sm:text-center text-2xl sm:text-base">Julián Barrera</span>
                        <div className="flex justify-center mt-0 ml-3 sm:mt-5 sm:ml-0">
                            <MdEdit size={20} className="m-2 text-green-400 hover:text-green-600 cursor-pointer" />
                            <IoTrashOutline size={20} className="m-2 text-red-400 hover:text-red-600 cursor-pointer" />
                        </div>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">CURP</span>AAPA940623HMNLR04</td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Tipo de Certificación</span>
                    <div className="flex flex-col">
                        <ol className='list-decimal'>
                            <li className="ml-5 mb-3 
                                                ">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30} className="text-red-400 hover:text-red-600 cursor-pointer" />
                                </div>
                            </li>
                            <li className="ml-5
                                                mb-3">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30} className="text-red-400 hover:text-red-600 cursor-pointer" />
                                </div>
                            </li>
                            <li className="ml-5 
                                                mb-3">
                                <div className="flex items-center">
                                    Certificado de especialidad SEP

                                    <IoCloseOutline size={30} className="text-red-400 hover:text-red-600 cursor-pointer" />
                                </div>
                            </li>
                        </ol>
                        <div className="flex flex-row justify-center mt-3">
                            <FaPlus size={20} className=" text-green-400 hover:text-green-600 cursor-pointer" />
                        </div>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Especialidad</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                            <li className="ml-5 
                                                list-decimal">Mecatrónica</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Institución Emisora</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Institución Autorizada</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                            <li className="ml-5 
                                                list-decimal">Berakah Consultoria</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-full md:hidden font-bold mr-2 sm:mr-0">Fecha de Emisión</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                            <li className="ml-5 
                                                list-decimal">19/03/2026</li>
                        </ol>
                    </div>
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Folio</span>
                    <div className="flex flex-row">
                        <ol>
                            <li className="ml-5 
                                                list-decimal">1234</li>
                            <li className="ml-5   list-decimal">2345</li>
                            <li className="ml-5   list-decimal">6789</li>
                        </ol>
                    </div>
                </td>
                {/* <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold mr-2 sm:mr-0">Acciones</span>
                                        <div className="flex flex-row">
                                            <ul>
                                                <li className="ml-5 text-green-500 underline cursor-pointer">Añadir Especialidad</li>
                                                <li className="ml-5 text-blue-500 underline cursor-pointer">Editar Alumno</li>
                                                <li className="ml-5 text-red-500 underline cursor-pointer">Eliminar Alumno</li>
                                            </ul>
                                        </div>
                                    </td> */}
            </tr>
        </>
    )
}
