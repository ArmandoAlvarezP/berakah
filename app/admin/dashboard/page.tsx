import { TablaAdmin, ModalAgregarAlumno, ModalAgregarCertificacion, ModalEditarAlumno, BorrarAlumnoAlert, BorrarCertificacionAlert } from "@/components";
import { initialData } from "@/seed/seed";


export default function AdminPage() {

    const { alumnos } = initialData;

    // console.log({...data});

    return (
        <>
            {/*  Tabla  */}

            <div className="mx-5 mt-0 mb-10 w-auto">

                <TablaAdmin  alumnos={alumnos} />

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