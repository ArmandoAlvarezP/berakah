import { auth } from '@/auth.config';
import { NavBar, Footer } from '@/components';
import { redirect } from 'next/navigation';

export default async function PerfilLayout({children}: 
    {children: React.ReactNode;}) {

        const session = await auth();

        console.log(session);

        if( !session?.user ) {
            redirect('/admin/login');
        }

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