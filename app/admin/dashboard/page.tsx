import { TablaAdmin, ModalAgregarAlumno, ModalAgregarCertificacion, ModalEditarAlumno, BorrarAlumnoAlert, BorrarCertificacionAlert } from "@/components";


export default function AdminPage() {
    return (
        <>
            {/*  Tabla  */}

            <div className="mx-5 mt-0 mb-10 w-auto">

                <TablaAdmin />

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