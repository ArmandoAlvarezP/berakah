'use server';

import { prisma } from "@/app/lib/prisma";


export const getCertificacionesById = async ( id: number ) => {

    try {
        // Obtener todas las certificaciones 

        const certificaciones = await prisma.certificacion.findMany({
            where: {
                alumnoId: id
            }
        });
        
        return certificaciones;

    } catch (error) {
        console.log(error);
        throw new Error('No se pudo cargar la información');
    }
}