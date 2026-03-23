import { TablaAdmin, ModalAgregarAlumno } from "@/components";


export default function AdminPage() {
    return (
        <>
            {/*  Tabla  */}

            <div className="mx-5 mt-0 mb-10 w-auto">

                <TablaAdmin />

            {/* Modal agregar alumno */}
            
            <ModalAgregarAlumno />
            
            {/* <script>
                let modal = document.getElementById("modal");
                function modalHandler(val) {
                    if (val) {
                        fadeIn(modal);
                    } else {
                        fadeOut(modal);
                    }
                }
                function fadeOut(el) {
                    el.style.opacity = 1;
                    (function fade() {
                        if ((el.style.opacity -= 0.1) < 0) {
                            el.style.display = "none";
                        } else {
                            requestAnimationFrame(fade);
                        }
                    })();
                }
                function fadeIn(el, display) {
                    el.style.opacity = 0;
                    el.style.display = display || "flex";
                    (function fade() {
                        let val = parseFloat(el.style.opacity);
                        if (!((val += 0.2) > 1)) {
                            el.style.opacity = val;
                            requestAnimationFrame(fade);
                        }
                    })();
                }
            </script> */}

                {/* Modal Editar Alumno */}

                {/* Modal agregar Certificación */}

                {/* Alert Eliminar Alumno */}

                {/* Alert Eliminar certificación */}


            </div>
        </>
    );
}