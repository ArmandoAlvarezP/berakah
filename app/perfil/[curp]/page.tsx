import { TablaAlumnos, DatosAlumnos } from '@/components';

interface Props {
    params: Promise<string>
}

// const { alumnos } = initialData;

export default async function PerfilPage({ params }: Props) {


    const curp = await params;
    // LLamar aquí el server action para obterner el curp 


    return (
        <>
            {/* DATOS DEL ALUMNO */}

            <DatosAlumnos curp={Object.values(curp).toString()}/>

            {/*  Tabla  */}

            <div className="m-10">
                
                <TablaAlumnos curp={Object.values(curp).toString()}/>

            </div>
        </>
    );
}