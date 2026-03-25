'use server';

import { prisma } from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

// Agregar Alumno

export const agregarAlumno = async( nombre:string, curp:string, tipo:string, fechaEmision:Date, especialidad:string, emisora:string, autorizada: string, folio:string ) => {

    try {
        
        await prisma.alumno.create({
            data: {
                nombre,
                curp,
                certificaciones: {
                    create: [
                        {
                            tipo,
                            fechaEmision: new Date(fechaEmision).toISOString(),
                            especialidad,
                            emisora,
                            autorizada,
                            folio
                        }
                ]
                }
            }
        })

        revalidatePath('/admin/dashboard');

        return {
            ok: true,
            message: 'Alumno Agregado Correctamente'
        }

    } catch (error: unknown) {
        if( error instanceof Error ) {
            console.log(error.message);
            if( error.message.includes('Unique constraint failed on the fields:') ) {
                return {
                    ok: false,
                    message: 'El Alumno o Folio ya existe'
                }
            } else {
                return {
                    ok: false,
                    message: 'Error agregando Alumno'
                }
            }
        }
        
    }


}