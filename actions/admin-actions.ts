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
            if( error.message.includes('curp') ) {
                return {
                    ok: false,
                    message: 'Esa CURP ya está registrada'
                } } else if ( error.message.includes('folio') ){
                    return {
                        ok: false,
                        message: 'Ese Folio ya está registrado'
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

// Agregar Certificación 

export const agregarCertificacion = async(id:number, tipo:string, fechaEmision:Date, especialidad:string, emisora:string, autorizada: string, folio:string ) => {

    try {
        
        await prisma.certificacion.create({
            data: {
                tipo,
                fechaEmision: new Date(fechaEmision).toISOString(),
                especialidad,
                emisora,
                autorizada,
                folio,
                alumnoId: id
            }
        }) 

        revalidatePath('/admin/dashboard');
        
        return {
            ok: true,
            message: 'Certificación agregada'
        }

    } catch (error: unknown) {
        if( error instanceof Error ) {
            console.log(error.message);
            if ( error.message.includes('folio') ){
                    return {
                        ok: false,
                        message: 'Ese Folio ya está registrado'
                    }
                } else {
                return {
                    ok: false,
                    message: 'Error agregando Certificación'
                }
            }
        }
        
    }
}