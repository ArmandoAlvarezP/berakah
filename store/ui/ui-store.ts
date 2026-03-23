
import { create } from 'zustand'

interface State {

    //Agregar Alumno
    isModalAgregarAlumnoOpen: boolean;

    openModalAgregarAlumno: () => void;
    closeModalAgregarAlumno: () => void;

    // Editar Alumno
    isModalEditarAlumnoOpen: boolean;

    openModalEditarAlumno: () => void;
    closeModalEditarAlumno: () => void;

    // Agregar Certificacion

    isModalAgregarCertificacionOpen: boolean;

    openModalAgregarCertificacion: () => void;
    closeModalAgregarCertificacion: () => void;
}

export const useUIStore = create<State>()((set) => ({

    // Agregar Alumno
    isModalAgregarAlumnoOpen: false,

    openModalAgregarAlumno: () => set({ isModalAgregarAlumnoOpen: true }),
    closeModalAgregarAlumno: () => set({ isModalAgregarAlumnoOpen: false }),

    // Editar Alumno
    isModalEditarAlumnoOpen: false,

    openModalEditarAlumno: () => set({ isModalEditarAlumnoOpen: true }),
    closeModalEditarAlumno: () => set({ isModalEditarAlumnoOpen: false }),

    // Agregar Certificacion
    isModalAgregarCertificacionOpen : false,

    openModalAgregarCertificacion: () => set({ isModalAgregarCertificacionOpen: true }),
    closeModalAgregarCertificacion: () => set({ isModalAgregarCertificacionOpen: false }),
}));