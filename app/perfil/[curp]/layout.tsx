import { NavBar, Footer } from '@/components';

export default function PerfilLayout({children}: 
    {children: React.ReactNode;}) {
        return (
            <div className='flex flex-col min-h-screen'>
                <NavBar title='Historial de Certificaciones' welcome='Bienvenido nombre del alumno' />
                <div className='grow'>
                    {children}
                </div>
                <Footer />
            </div>
        );
}