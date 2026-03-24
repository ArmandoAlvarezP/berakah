import { getAlumnos, getCertificaciones } from "@/actions";
import { TablaAdmin, ModalAgregarAlumno, ModalAgregarCertificacion, ModalEditarAlumno, BorrarAlumnoAlert, BorrarCertificacionAlert } from "@/components";


export default async function AdminPage() {

    const alumnos = await getAlumnos();

    const certificaciones = await getCertificaciones();

    return (
        <>
            {/*  Tabla  */}

            <div className="mx-5 mt-0 mb-10 w-auto">

                <TablaAdmin  alumnos={alumnos} certificaciones={certificaciones}/>

                {/* Modal agregar alumno */}
                
                <ModalAgregarAlumno />
                

                {/* Modal Editar Alumno */}

                <ModalEditarAlumno />

                {/* Modal agregar Certificación */}

                <ModalAgregarCertificacion />

                {/* Alert Eliminar Alumno */}

                <BorrarAlumnoAlert />

                {/* Alert Eliminar certificación */}

                <BorrarCertificacionAlert />

            </div>
        </>
    );
}