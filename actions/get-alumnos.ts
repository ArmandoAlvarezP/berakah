'use server';

import { prisma } from "@/app/lib/prisma";

export const getAlumnos = async () => {

    // Obtener todos los alumnos y sus certificaciones 

    try {
        
        // Obtener todos los alumnos 
        const alumnos = await prisma.alumno.findMany();

        return alumnos;

    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener la información');
    }

}