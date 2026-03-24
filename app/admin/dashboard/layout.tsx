import { NavBar, Footer } from '@/components';

export default function PerfilLayout({children}: 
    {children: React.ReactNode;}) {
        return (
            <div className='flex flex-col min-h-screen'>
                <NavBar title='Directorio de Alumnos' welcome='Administrativo' extraButton/>
                    <div className='grow'>
                        {children}
                    </div>
                <Footer />
            </div>
        );
}