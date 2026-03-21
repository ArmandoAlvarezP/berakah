import { NavBar, Footer } from '@/components';

export default function PerfilLayout({children}: 
    {children: React.ReactNode;}) {
        return (
            <>
                <NavBar title='Directorio de Alumnos' welcome='Administrativo' extraButton/>
                {children}
                <Footer />
            </>
        );
}