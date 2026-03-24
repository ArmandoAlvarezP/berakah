export interface Certificacion {
    id: string;
    tipo: string;
    especialidad: string;
    emisora: string;
    autorizada: string;
    fechaEmision: Date;
    folio: string;
    alumnoId: number;
}

// type TipoValido = 'DIPLOMA CERTIFICADO DE ESPECIALIDAD SEP' | 'DIPLOMA CERTIFICADO DE ESPECIALIDAD' | 'INSTRUCTOR CAPACITADOR SEP' | 'CERTIFICADO DE ACREDITACIÓN BCPP' | 'CERTIFICADO DE ESPECIALIZACIÓN PROFESIONAL';