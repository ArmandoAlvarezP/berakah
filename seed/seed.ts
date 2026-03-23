import bcryptjs from 'bcryptjs';

// Habra 3 tablas : { alumnos, certificaciones, usuario(admin) }

interface SeedAlumno {
    nombre: string;
    curp: string;
}

interface SeedCertificacion {
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
            nombre: 'Julian Barrera Tafolla',
            curp: 'AAPA940623HMNLRR04'
        },
        {
            nombre: 'Adriana Tafolla Pérez',
            curp: 'AAPA940623HMNLRR04'
        },
        {
            nombre: 'Armando Alvarez Pérez',
            curp: 'AAPA940623HMNLRR04'
        },
        {
            nombre: 'Axel Daniel Alvarez Pérez',
            curp: 'AAPA940623HMNLRR04'
        },
    ],

    certificaciones: [
        {
            tipo: 'DIPLOMA CERTIFICADO DE ESPECIALIDAD SEP',
            especialidad: 'Mecatrónica',
            emisora: 'Berakah',
            autorizada: 'Berakah',
            fechaEmision: new Date(),
            folio: '1234'
        },
        {
            tipo: 'DIPLOMA CERTIFICADO DE ESPECIALIDAD',
            especialidad: 'Cosmetología',
            emisora: 'Berakah',
            autorizada: 'Berakah',
            fechaEmision: new Date(),
            folio: '1234'
        },
        {
            tipo: 'INSTRUCTOR CAPACITADOR SEP',
            especialidad: 'Sistemas',
            emisora: 'Berakah',
            autorizada: 'Berakah',
            fechaEmision: new Date(),
            folio: '1234'
        },
        {
            tipo: 'CERTIFICADO DE ACREDITACIÓN BCPP',
            especialidad: 'Diseño',
            emisora: 'Berakah',
            autorizada: 'Berakah',
            fechaEmision: new Date(),
            folio: '1234'
        },
        {
            tipo: 'CERTIFICADO DE ESPECIALIZACIÓN PROFESIONAL',
            especialidad: 'Barbería',
            emisora: 'Berakah',
            autorizada: 'Berakah',
            fechaEmision: new Date(),
            folio: '1234'
        },
    ],

    usuario: {
        nombre: 'admin',
        password: bcryptjs.hashSync('berakahconsorcio'),
        role: 'admin',
    }
}