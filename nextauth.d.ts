
import NextAuth, { DefaultSession } from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: {
            nombre: string;
            role: string;
        } & DefaultSession['user'];
    }

    interface User {
        nombre: string;
        role: string;
    }
}