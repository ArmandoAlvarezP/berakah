'use server';

import { prisma } from "@/app/lib/prisma";


export const getCertificaciones = async () => {

    try {
        // Obtener todas las certificaciones 

        const certificaciones = await prisma.certificacion.findMany();
        
        return certificaciones;

    } catch (error) {
        console.log(error);
        throw new Error('No se pudo cargar la información');
    }
}