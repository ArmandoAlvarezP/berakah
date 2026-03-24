-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin');

-- CreateTable
CREATE TABLE "Alumno" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "curp" TEXT NOT NULL,

    CONSTRAINT "Alumno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificacion" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "emisora" TEXT NOT NULL,
    "autorizada" TEXT NOT NULL,
    "fechaEmision" TIMESTAMP(3) NOT NULL,
    "folio" TEXT NOT NULL,
    "alumnoID" INTEGER NOT NULL,

    CONSTRAINT "Certificacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "nombre" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_nombre_key" ON "Alumno"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Alumno_curp_key" ON "Alumno"("curp");

-- CreateIndex
CREATE UNIQUE INDEX "Certificacion_folio_key" ON "Certificacion"("folio");

-- CreateIndex
CREATE UNIQUE INDEX "User_nombre_key" ON "User"("nombre");

-- AddForeignKey
ALTER TABLE "Certificacion" ADD CONSTRAINT "Certificacion_alumnoID_fkey" FOREIGN KEY ("alumnoID") REFERENCES "Alumno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
