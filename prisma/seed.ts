import { initialData } from "@/seed/seed";
import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({
    adapter,
});


export async function main() {
    // 1. Borrar registros
    await prisma.alumno.deleteMany();
    await prisma.certificacion.deleteMany();
    await prisma.user.deleteMany();


    const { alumnos, certificaciones, usuario } = initialData;

    // User 

    await prisma.user.create({
        data: usuario
    })


    // Alumnos 

    alumnos.forEach( async alumno => {
        await prisma.alumno.create({
            data: alumno
        })
    });
    
    
    // Certificaciones 


    certificaciones.forEach( async (certificacion) => {
        const { id, ...rest } = certificacion;
        await prisma.certificacion.create({
            data: {
                ...rest,
            }
        })
    })

};


(() => {
    if(process.env.NODE_ENV === 'production') return; 

    main();
})();