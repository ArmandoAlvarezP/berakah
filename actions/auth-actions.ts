'use server';

import { signIn, signOut } from '@/auth.config';


export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {

        // await sleep(2);

        await signIn('credentials', {
            ...Object.fromEntries(formData),
            redirect: false,
        });

        return 'Success';


    } catch (error) {
        console.log(error);

        return 'CredentialsSignin'


    }
}

export const logout = async () => {
    
    await signOut({ redirect: false });
}


export const login = async (nombre: string, password: string) => {

    try {
        
        await signIn('credentials',{ nombre, password })

        return { ok: true };

    } catch (error: unknown) {
        if( error instanceof Error ) {
            console.log(error);
            if ( error.message.includes('credentials') ){
                return {
                    ok: false,
                    message: 'Credenciales Incorrectas'
                }
            } else {
                return {
                    ok: false,
                    message: 'Error al iniciar sesión'
                }
            }
        }
    }
}