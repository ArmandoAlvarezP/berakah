
import { create } from 'zustand';

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

    id: number;

    setId: (newId: number) => void;
    clearId: () => void;

    isModalAgregarCertificacionOpen: boolean;

    openModalAgregarCertificacion: () => void;
    closeModalAgregarCertificacion: () => void;

    // Borrar Alumno 

    isBorrarAlumnoAlertOpen: boolean;

    openBorrarAlumnoAlert: () => void;
    closeBorrarAlumnoAlert: () => void;

    // Borrar Certificacion 

    idCert: string;

    setIdCert: ( newIdCert: string ) => void;
    clearIdCert: () => void;

    isBorrarCertificacionAlertOpen: boolean;

    openBorrarCertificacionAlert: () => void;
    closeBorrarCertificacionAlert: () => void;
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

    id: 0,

    setId: (newId) => set({id: newId}),
    clearId: () => set({ id: 0}),

    isModalAgregarCertificacionOpen : false,

    openModalAgregarCertificacion: () => set({ isModalAgregarCertificacionOpen: true,  }),
    closeModalAgregarCertificacion: () => set({ isModalAgregarCertificacionOpen: false }),

    // Borrar Alumno 
    isBorrarAlumnoAlertOpen: false,

    openBorrarAlumnoAlert: () => set({ isBorrarAlumnoAlertOpen: true }),
    closeBorrarAlumnoAlert: () => set({ isBorrarAlumnoAlertOpen: false }),

    // Borrar Certificación 

    idCert: '',

    setIdCert: (newIdCert) => set({ idCert: newIdCert }),
    clearIdCert: () => set({idCert: ''}),

    isBorrarCertificacionAlertOpen: false,

    openBorrarCertificacionAlert: () => set({ isBorrarCertificacionAlertOpen: true }),
    closeBorrarCertificacionAlert: () => set({ isBorrarCertificacionAlertOpen: false }),
}));