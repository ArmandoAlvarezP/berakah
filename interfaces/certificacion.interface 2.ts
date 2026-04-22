export interface Certificacion {
    id: string;
    tipo: TipoValido;
    especialidad: string;
    emisora: string;
    autorizada: string;
    fechaEmision: Date;
    folio: string
}

type TipoValido = 'DIPLOMA CERTIFICADO DE ESPECIALIDAD SEP' | 'DIPLOMA CERTIFICADO DE ESPECIALIDAD' | 'INSTRUCTOR CAPACITADOR SEP' | 'CERTIFICADO DE ACREDITACIÓN BCPP' | 'CERTIFICADO DE ESPECIALIZACIÓN PROFESIONAL';