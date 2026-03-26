import { auth } from '@/auth.config';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function LoginAdminLayout({children}: 
    {children: React.ReactNode;}) {

        const session = await auth();

        if( session?.user ) {
            redirect('/admin/dashboard');
        }

        return (
            <div className="bg-white flex justify-center items-center h-screen">
                        {/* <!-- Left: Image --> */}
                            <div className="w-1/2 h-screen hidden lg:block">
            
                             {/* Capa de color sobre la imágen */}
            
                                {/* <div className="fixed top-0 left-0 w-1/2 h-screen z-10 bg-pink-400 opacity-50"/> */}
            
                                <Image 
                                    src="/index_admin.jpg" alt="Administradores" className="object-cover w-full h-full"
                                    height={400}
                                    width={600}
                                />
                            </div>

                            {children}
                </div>
        );
}