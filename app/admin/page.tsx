import { redirect } from "next/navigation";


export default function AdminRedirectPage() {

    // TODO: Redireccionar condicionalmente de acuerdo a la autenticación (login o dashboard)

    redirect('/admin/dashboard');
    return (
        <div>
        <h1>Hello Page</h1>
        </div>
    );
}

