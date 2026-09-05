--
-- PostgreSQL database dump
--

\restrict o8WXhdSiKQ95lIp9F9k2TuevcwYPzFtvpjDR4MgiDN7tsDzF5Ien6IMoNhoWLpu

-- Dumped from database version 17.2
-- Dumped by pg_dump version 18.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;


--
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_stat_statements IS 'track planning and execution statistics of all SQL statements executed';


--
-- Name: Role; Type: TYPE; Schema: public; Owner: prisma_migration
--

CREATE TYPE public."Role" AS ENUM (
    'admin'
);


ALTER TYPE public."Role" OWNER TO prisma_migration;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Alumno; Type: TABLE; Schema: public; Owner: prisma_migration
--

CREATE TABLE public."Alumno" (
    id integer NOT NULL,
    nombre text NOT NULL,
    curp text NOT NULL
);


ALTER TABLE public."Alumno" OWNER TO prisma_migration;

--
-- Name: Alumno_id_seq; Type: SEQUENCE; Schema: public; Owner: prisma_migration
--

CREATE SEQUENCE public."Alumno_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Alumno_id_seq" OWNER TO prisma_migration;

--
-- Name: Alumno_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: prisma_migration
--

ALTER SEQUENCE public."Alumno_id_seq" OWNED BY public."Alumno".id;


--
-- Name: Certificacion; Type: TABLE; Schema: public; Owner: prisma_migration
--

CREATE TABLE public."Certificacion" (
    id text NOT NULL,
    tipo text NOT NULL,
    especialidad text NOT NULL,
    emisora text NOT NULL,
    autorizada text NOT NULL,
    "fechaEmision" timestamp(3) without time zone NOT NULL,
    folio text NOT NULL,
    "alumnoId" integer NOT NULL
);


ALTER TABLE public."Certificacion" OWNER TO prisma_migration;

--
-- Name: User; Type: TABLE; Schema: public; Owner: prisma_migration
--

CREATE TABLE public."User" (
    nombre text NOT NULL,
    password text NOT NULL,
    role public."Role" NOT NULL
);


ALTER TABLE public."User" OWNER TO prisma_migration;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: prisma_migration
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO prisma_migration;

--
-- Name: Alumno id; Type: DEFAULT; Schema: public; Owner: prisma_migration
--

ALTER TABLE ONLY public."Alumno" ALTER COLUMN id SET DEFAULT nextval('public."Alumno_id_seq"'::regclass);


--
-- Data for Name: Alumno; Type: TABLE DATA; Schema: public; Owner: prisma_migration
--

COPY public."Alumno" (id, nombre, curp) FROM stdin;
1	Julian Barrera Tafolla	CURP1
2	Adriana Tafolla Pérez	CURP2
3	Armando Alvarez Pérez	AAPA940623HMNLRR04
4	Axel Daniel Alvarez Pérez	CURP16
\.


--
-- Data for Name: Certificacion; Type: TABLE DATA; Schema: public; Owner: prisma_migration
--

COPY public."Certificacion" (id, tipo, especialidad, emisora, autorizada, "fechaEmision", folio, "alumnoId") FROM stdin;
4691bcd3-17fb-40ed-81b2-647067ba5c6c	DIPLOMA CERTIFICADO DE ESPECIALIDAD	Cosmetología	Berakah	Berakah	2026-03-26 18:16:17.32	5678	2
971ab26d-0e59-4f26-b77e-944a52b53936	DIPLOMA CERTIFICADO DE ESPECIALIDAD SEP	Mecatrónica	Berakah	Berakah	2026-03-26 18:16:17.32	1234	1
892ef3e1-6f4b-41b6-9c71-387efb5f9844	INSTRUCTOR CAPACITADOR SEP	Sistemas	Berakah	Berakah	2026-03-26 18:16:17.32	9101	3
23c8e17a-2f13-4860-b58a-691a9778993a	Instructor Capacitador SEP	Cine	Arte7	Arte7	2026-03-26 00:00:00	6666	4
d0ca4746-8fc7-4552-be75-a070de93eded	Instructor Capacitador SEP	Mecatrónica	Unitec	SEP	2026-04-23 00:00:00	sh7986	3
2b5fe834-1c36-45d6-ba93-a29ce39ac937	Diploma Certificado de especialidad	Edición	Arte7	SEP	2026-04-03 00:00:00	LA6538	4
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: prisma_migration
--

COPY public."User" (nombre, password, role) FROM stdin;
admin	$2b$10$JTTvVVWkRNdiCEuOC/JineneHe7sT3LBH6Trmd8tLZqyEkyhy49Z.	admin
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: prisma_migration
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
e4215a22-ceaa-4c30-b1fa-2219f888dce8	78cad3485d2bee23d1495452d5325474df07112df85a700dc6a95845c4bc2479	2026-03-26 18:04:21.855534+00	20260324194810_init	\N	\N	2026-03-26 18:04:19.999238+00	1
dc72d18d-e15c-41ce-a41c-d73665b6b576	26f9ad4302aea105aa10a5ec186b6fa74e3edecf94e6cabbc44ee809ee273a48	2026-03-26 18:04:22.923491+00	20260325025824_update	\N	\N	2026-03-26 18:04:22.13552+00	1
\.


--
-- Name: Alumno_id_seq; Type: SEQUENCE SET; Schema: public; Owner: prisma_migration
--

SELECT pg_catalog.setval('public."Alumno_id_seq"', 12, true);


--
-- Name: Alumno Alumno_pkey; Type: CONSTRAINT; Schema: public; Owner: prisma_migration
--

ALTER TABLE ONLY public."Alumno"
    ADD CONSTRAINT "Alumno_pkey" PRIMARY KEY (id);


--
-- Name: Certificacion Certificacion_pkey; Type: CONSTRAINT; Schema: public; Owner: prisma_migration
--

ALTER TABLE ONLY public."Certificacion"
    ADD CONSTRAINT "Certificacion_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: prisma_migration
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Alumno_curp_key; Type: INDEX; Schema: public; Owner: prisma_migration
--

CREATE UNIQUE INDEX "Alumno_curp_key" ON public."Alumno" USING btree (curp);


--
-- Name: Certificacion_folio_key; Type: INDEX; Schema: public; Owner: prisma_migration
--

CREATE UNIQUE INDEX "Certificacion_folio_key" ON public."Certificacion" USING btree (folio);


--
-- Name: User_nombre_key; Type: INDEX; Schema: public; Owner: prisma_migration
--

CREATE UNIQUE INDEX "User_nombre_key" ON public."User" USING btree (nombre);


--
-- Name: Certificacion Certificacion_alumnoId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: prisma_migration
--

ALTER TABLE ONLY public."Certificacion"
    ADD CONSTRAINT "Certificacion_alumnoId_fkey" FOREIGN KEY ("alumnoId") REFERENCES public."Alumno"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict o8WXhdSiKQ95lIp9F9k2TuevcwYPzFtvpjDR4MgiDN7tsDzF5Ien6IMoNhoWLpu

