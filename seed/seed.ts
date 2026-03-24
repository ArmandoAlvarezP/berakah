import bcryptjs from 'bcryptjs';

// Habra 3 tablas : { alumnos, certificaciones, usuario(admin) }

interface SeedAlumno {
    id: string;
    nombre: string;
    curp: string;
    certificaciones: string[]; // Array de folios de certificaciones relacionadas
}

interface SeedCertificacion {
    id: string;
    tipo: TipoValido;
    especialidad: string;
    emisora: string;
    autorizada: string;
    fechaEmision: Date;
    folio: string
}

interface SeedUsuario {
    nombre: 'admin';
    password: string;
    role: 'admin';
}

type TipoValido = 'DIPLOMA CERTIFICADO DE ESPECIALIDAD SEP' | 'DIPLOMA CERTIFICADO DE ESPECIALIDAD' | 'INSTRUCTOR CAPACITADOR SEP' | 'CERTIFICADO DE ACREDITACIÓN BCPP' | 'CERTIFICADO DE ESPECIALIZACIÓN PROFESIONAL';

interface SeedData {
    alumnos: SeedAlumno[],
    certificaciones: SeedCertificacion[],
    usuario: SeedUsuario,
}

export const initialData : SeedData = {

    alumnos: [
        {
            id: '1',
            nombre: 'Julian Barrera Tafolla',
            curp: 'CURP1',
            certificaciones: ['1234', '5678'] // Folios de certificaciones relacionadas
        },
        {
            id: '2',
            nombre: 'Adriana Tafolla Pérez',
            curp: 'CURP2',
            certificaciones: ['1234'] // Ejemplo: solo una certificación
        },
        {
            id: '3',
            nombre: 'Armando Alvarez Pérez',
            curp: 'AAPA940623HMNLRR04',
            certificaciones: ['5678', '9101'] // Varias certificaciones
        },
        {
            id: '4',
            nombre: 'Axel Daniel Alvarez Pérez',
            curp: 'CURP4',
            certificaciones: ['5678', '9101', '1234'] 
        },
        {
            id: '5',
            nombre: 'Daniel Alvarez Pérez',
            curp: 'CURP5',
            certificaciones: [] // Sin certificaciones por ahora
        },
    ],

    certificaciones: [
        {
            id: 'cert1',
            tipo: 'DIPLOMA CERTIFICADO DE ESPECIALIDAD SEP',
            especialidad: 'Mecatrónica',
            emisora: 'Berakah',
            autorizada: 'Berakah',
            fechaEmision: new Date(),
            folio: '1234'
        },
        {
            id: 'cert2',
            tipo: 'DIPLOMA CERTIFICADO DE ESPECIALIDAD',
            especialidad: 'Cosmetología',
            emisora: 'Berakah',
            autorizada: 'Berakah',
            fechaEmision: new Date(),
            folio: '5678'
        },
        {
            id: 'cert3',
            tipo: 'INSTRUCTOR CAPACITADOR SEP',
            especialidad: 'Sistemas',
            emisora: 'Berakah',
            autorizada: 'Berakah',
            fechaEmision: new Date(),
            folio: '9101'
        },
        {
            id: 'cert4',
            tipo: 'CERTIFICADO DE ACREDITACIÓN BCPP',
            especialidad: 'Diseño',
            emisora: 'Berakah',
            autorizada: 'Berakah',
            fechaEmision: new Date(),
            folio: '1121'
        },
        {
            id: 'cert5',
            tipo: 'CERTIFICADO DE ESPECIALIZACIÓN PROFESIONAL',
            especialidad: 'Barbería',
            emisora: 'Berakah',
            autorizada: 'Berakah',
            fechaEmision: new Date(),
            folio: '3141'
        },
    ],

    usuario: {
        nombre: 'admin',
        password: bcryptjs.hashSync('berakahconsorcio'),
        role: 'admin',
    }
}