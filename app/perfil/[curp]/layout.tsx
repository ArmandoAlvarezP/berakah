import { prisma } from '@/app/lib/prisma';
import { NavBar, Footer } from '@/components';

interface Props {
    children: React.ReactNode;
    params: Promise<string>
}


export default async function PerfilLayout({children, params}: Props) {
        

    const curp = await params;
    // LLamar aquí el server action para obterner el curp 

    const nombre = await prisma.alumno.findFirst({
        where: {
            curp: Object.values(curp).toString()
        }
    })
    
        return (
            <div className='flex flex-col min-h-screen'>
                <NavBar title='Historial de Certificaciones' welcome={`Bienvenido ${nombre?.nombre}`} />
                <div className='grow'>
                    {children}
                </div>
                <Footer />
            </div>
        );
}