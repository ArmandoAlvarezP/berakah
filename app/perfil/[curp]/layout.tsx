import { NavBar } from '@/components';

export default function PerfilLayout({children}: 
    {children: React.ReactNode;}) {
        return (
            <>
                <NavBar />
                {children}
            </>
        );
}