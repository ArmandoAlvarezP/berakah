import NextAuth, { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials"
import bcryptjs from 'bcryptjs';
import z from "zod";
import { prisma } from "./app/lib/prisma";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//     providers: [
//         Credentials({
//             authorize: async (credentials) => {
//                 const parsedCredentials = z
//                     .object({ nombre: z.string(), password: z.string() })
//                     .safeParse(credentials);

//                 if( !parsedCredentials.success ) return null;

//                 // Buscar usuario

//                 const { nombre, password } = parsedCredentials.data;

//                 const user = await prisma.user.findFirst({ where: {nombre: nombre.toLowerCase()}});

//                 if(!user) return null;

//                 // Comparar contraseñas

//                 if (!bcryptjs.compareSync( password, user.password )) {
//                     return null;
//                 }

//                 const { password: _, ...rest } = user;

//                 return rest as User;
//             }
//         })
//     ],
//     trustHost: true,
// } satisfies NextAuthConfig )


export const authConfig = {
    pages: {
        signIn: '/admin/dashboard',
    },

    callbacks: {

            // authorized({ auth, request: { nextUrl } }) {
            //     console.log({auth});
            //     // const isLoggedIn = !!auth?.user;
            //     // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            //     // if (isOnDashboard) {
            //     //     if (isLoggedIn) return true;
            //     //     return false; // Redirect unauthenticated users to login page
            //     // } else if (isLoggedIn) {
            //     //     return Response.redirect(new URL('/dashboard', nextUrl));
            //     // }
            //     return true;
            // },

            jwt({ token, user }) {

                if (user) {
                    token.data = user;
                }

                return token;
            },

            session({ session, token }) {
                session.user = token.data as never;
                return session;
            }
        },

        providers: [
            Credentials({
                async authorize(credentials) {
                    const parsedCredentials = z
                        .object({ nombre: z.string(), password: z.string() })
                        .safeParse(credentials);

                    // console.log(parsedCredentials.success);
                    if (!parsedCredentials.success) return null;

                    const { nombre, password } = parsedCredentials.data;

                    // console.log('authConfig.ts')
                    // console.log({ email, password });

                    // Buscar el correo
                    const user = await prisma.user.findFirst({ where: { nombre: nombre.toLowerCase() } });

                    if (!user) return null;

                    // Comparar las contrasñas

                    if (!bcryptjs.compareSync(password, user.password)) {

                        return null;
                    }

                    // Regresar el usuario sin el password 
                    const { password: _, ...rest } = user;

                    return rest;
                },
            }),
        ],
        trustHost: true,
    } satisfies NextAuthConfig;

    export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);