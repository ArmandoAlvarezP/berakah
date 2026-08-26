'use server';

import { prisma } from "@/app/lib/prisma";

interface Curp {
    curp: string;
}

export const getCertificacionesByCurp = async ({ curp }: Curp) => {

    try {

        // Obtener el elumno por la curp 
        const alumno = await prisma.alumno.findUnique({
            where: {
                curp
            }
        })

        // Obtener las certificaciones del alumno con esa curp 

        const certificaciones = await prisma.certificacion.findMany({
            where: {
                alumnoId: alumno?.id
            }
        })

        return {
            alumno,
            certificaciones
        }

    } catch (error) {
        console.log(error);
        throw new Error('No se pudo cargar la información');
    }
}