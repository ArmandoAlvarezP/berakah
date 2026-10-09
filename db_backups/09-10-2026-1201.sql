--
-- PostgreSQL database dump
--

\restrict jnywSas13LhatX5i9UI8zts6HV7JHBamtTH9dMusad6jLGaqspHYnlA9w9JVgxf

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
90	LLUVIA ALEJANDRA BARRERA ENRIQUEZ	BAEL891231MDFRNL09
91	CINTHYA ABIGAIL SUAREZ SANCHEZ	SUSC970411MDFRNN09
22	María Guadalupe Mora Camargo	MOCG961203MMNRMD07
24	Karla Sherlyn Guillén Medrano	GUMK040427MMNLDRA5
25	Mónica Xichel González Pérez	GOPM930523MMNNRN00
26	Karla Estefania Baeza Torres	BATK010521MMNZRRA
27	Nancy Gaytán Prado	GAPN820227MDFYRN05
28	Ana Karen González Cisneros	GOCA930216MMNNSN06
29	Leslie Citlali Rojas Álvarez	ROAL030929MMNJLSA3
30	Daysi Alejandra Solís Bucio	SOBD981031MMNLCS03
31	Leidy Diana Suárez Garduño	SUGL970827MMNRRD03
32	Vanessa Noemí Villalva Reyes	VIRV981024MMNLYN00
33	Julieta Jaqueline Jacuinde Toledo	JATJ010622MMNCLLA1
34	Gema Lizbeth Buenrostro Salgado	BUSG981227MMNNLM01
35	Juana Yazmín Saavedra Guillén	SAGJ020308MMNVLNA05
36	Jaqueline Amaro León	AALJ021025MPLMNQA9
37	Antonieta Martinez Villanueva 	MAVA980702MGTRLN06
38	Nora Edith Zavala Meza	ZAMN941120MMNVZR08
39	Marlene Alejandra Casimiro Gaona	CAGM960322MMNSNR04
40	Diana Natalia Rojas Cortéz	ROCD011128MMNJRNA2
41	MARIA FERNANDA VALERIO CABRIALES	VACF980826MMCLBR00
42	MARIANA YAEL VALLE PEREZ	VAPM980511MMCLRR01
43	MARIANA RAMIREZ CASTILLO	RACM991026MDFMSR08
44	LIZETH PORTILLO ESCOBEDO	POEL090129MHGRSZA4
45	SANDRA RODRIGUEZ VAZQUEZ	ROVS820224MDFDZN03
46	ELIZABETH YAÑEZ ESTRADA	YAEE770630MGTXSL04
47	ALMA ROSA BALDERAS 	BARA900801MMCLML03
48	LEYDY ALIZETH MARTINEZ TREJO	MATL880929MMCRRY12
49	MARIA DEL PILAR REYNA VELAZQUEZ	REVP851012MDFYLL00
50	VALERY ITZEL VAZQUEZ FUENTES	VAFV090528MMCZNLA3
51	PAOLA MORA BARRERA	MOBP850524MMCRRL08
52	MELISA OLMOS VILLAFRANCO	OOVM980126MMCLLL04
53	MONICA ANGELINA CASTILLO MORA	CAMM001207MBCSRNB2
54	GUADALUPE CATALINA DE LA VEGA BOLAÑOS	VEBG620530MDFGLD05
55	MOYRA GADDI CAMERON VARGAS FLORES	VAFM040608MJCRLYA4
56	MARIA FERNANDA VALDEZ GUERRERO	VAGF991018MMCLRR03
57	JOSE LUIS HERNANDEZ SANCHEZ	HESL840814HMCRNS16
58	LUCIA MARGARITA RAMIREZ ROSALES	RARL811213MVZMSC09
59	JOCELINE KAREN MANZANA CARMEN	MACJ981222MMCNRC00
60	GABRIELA MARICARMEN CORONA RIOS	CORG910104MDFRSB09
61	EVELYN GARCIA FRAGOSO	GAFE770216MHGRRV08
62	MARIA CRISTINA BAEZ LOPEZ	BALC760731MDFZPR09
63	REBECA AURELIA MEZA LEAL	MELR690925MDFZLB01
64	MARIA DEL ROSARIO ROSAS MARTINEZ	ROMR760718MDFSRS03
65	CLAUDIA MANZANO GARCIA	MAGC700627MDFNRL04
66	MARICELA LORENZO BERNAL	LOBM811208MDFRRR07
67	CRISTINA HERNANDEZ MARTINEZ	HEMC760908MDFRRR04
68	IRENE VAZQUEZ MORALES	VAMI820604MDFZRR09
69	CINTHYA CASTRO CAMPOS	CACC880725MMCSMN00
70	ALICIA LOPEZ PATIÑO	LOPA830520MGTPTL04
71	BLANCA ESTELA GOIZ FRANCO	GOFB760531MDFZRL00
72	MARTHA VANESSA ACEVES CHAVARRIA	AECM911030MMCCHR05
73	LUIS ANTONIO TORRES PEÑA	TOPL920330HDFRXS09
74	ADRIANA SULEYMA GOIZ FRANCO	GOFA930304MMCZRD00
75	ANGELICA PEREZ CHAVEZ	PECA841111MDFRHN02
76	MARIA CRISTINA GOYZ FRANCO	GOFC701029MDFYRR08
77	VALERIA GONZALEZ ROBLES	GORV951109MOCNBL09
78	JOSE ISRAEL NOLASCO ZAMORA	NOZI900914HMCLMS02
79	DAYANARA ITZEL RODRIGUEZ RODRIGUEZ	RORD961014MHGDDY03
80	JACQUELINE MINELLY POPOCA SANCHEZ	POSJ050818MMCPNCA3
81	ESMERALDA LIZBETH CARDENAS GUERRERO	CAGE960313MMCRRS03
82	AIDA RAMIREZ CAMACHO	RACA690509MDFMMD03
83	CONCEPCION ALDANA GARCIA	AAGC701208MDFLRN07
84	NOE GONZALEZ PEREZ	GOPN810217HDFNRX00
85	GABRIELA LIZBETH CERVANTES DE REFUGIO	CERG831113MMCRFB02
86	IVETTE MIRANDA ALDANA	MIAI901112MDFRLV04
87	ZAIRA CEDILLO CABRERA	CECZ881127MMCDBR07
88	MARIBEL CASTILLA VAZQUEZ	CAVM810316MDFSZR00
93	ESTELA RAYON ORTEGA	RAOE730511MDFYRS04
94	AGUSTINA HILARIO ALEJANDRO	HIAA950806MGRLLG02
96	THANIA PAOLA GUZMAN PACHECO	GUPT910807MHGZCH09
97	NOEMI MONSERRAT SINECIO DOMINGUEZ	SIDN080918MMCNMMA3
98	ZITLALI GOMEZ LUCIANO	GOLZ041020MMCMCTA7
99	GLORIA NUVYA MENDEZ GARCIA	MEGG830927MQTNRL02
100	LAURA FERNANDEZ HERMOSILLO	FEHL870916MCHRRR01
101	MAIRA YADIRA DE ROBLES ALCALA	ROAM881123MNEBLR01
102	ANA LYDIA URIAS HOLGUIN	UIHA720309MCHRLN01
103	ROCIO VARGAS CRUZ 	VACR080425MHGRRCA0
104	CELESTE JAZMIN RAMIREZ BALLEZA 	RABC981031MSPMLL07
105	ANA MARIA TOLEDO OROZCO	TOOA750726MOCLRN02
106	MAGALI DOMINGUEZ DIAZ	DODM871029MCSMZG01
107	ADRIANA TENORIO RIVERA	TERA920806MVZNVD02
108	JESSICA FRANCO GARCIA	FAGJ000210MMCRRSA6
109	SERGIO CERDA VARGAS	CEVS600519HMNRRR05
110	LYDIA ABIGAIL SILVA CARMONA	SICL820324MDFLRY09
111	BLANCA EUNICE BOLAÑOS MORALES	BOMB801111MDFLRL09
112	ALEJANDRO GONZALEZ FLORES	GOFA860811HDFNLL01
113	CARLA ANALI MUÑOZ CHAVEZ	MUCC900412MDFXHR08
114	VERONICA MEDINA FENTANES	MEFV720520MPLDNR02
115	KATIA ALEJANDRA GUTIERREZ VENZOR	GUVK950205MCHTNT01
116	FEDERICO BRAVO FIGUEROA	BAFF940129HMCRGD02
117	BREIDA DENNITZA GONZALEZ PEREZ	GOPB010607MMCNRRA1
118	JOSELYN HERNANDEZ LEONIDES	HELJ030919MMCRNSA5
119	HECTOR GONZALEZ RAMIREZ	GORH830512HDFNMC04
121	DAMARIZ BERENICE MARTINEZ NUÑEZ	MAND891006MDFRXM07
122	BERTHA NAYELI CORONA CERVANTES	COCB940407MDFRRR04
124	KIMBERLY CORTEZ RUIZ	CORK020219MMSRZMA8
125	ROSA MARIA BONILLA GUTIERREZ	BOGR680921MDFNTS06
128	LAURA GUADALUPE GOMEZ ARREDONDO	GOAL700626MDFMRR01
129	JACQUELINE ANGELICA ROBLES SANCHEZ	ROSJ970425MDFBNC06
131	YESSENIA RAMIREZ VALENZUELA	RAVY930605MDFMLS05
132	KARINA SOSA VENTURA	SOVK850620MDFSNR00
133	MARTHA ALICIA VALENZUELA ORTEGA	VAOM861110MZSLRR08
134	AMAURY HERNAN HERNANDEZ GALLEGOS	HEGA920901HDFRLM03
135	GICELA ARREOLA CEBALLOS	AECG760507MMCRBC04
136	CARLOS ALBERTO CAMACHO MARTINEZ	CAMC701008HDFMRR07
137	GABRIELA ELENA MORALES ESTRADA	MOEG631227MDFRSB09
138	BENITA OSORIO DE LA ROSA	OORB780321MOCSSN05
139	MONICA JAQUELINE ROMERO CASTILLO	ROCM870827MMCMSN08
\.


--
-- Data for Name: Certificacion; Type: TABLE DATA; Schema: public; Owner: prisma_migration
--

COPY public."Certificacion" (id, tipo, especialidad, emisora, autorizada, "fechaEmision", folio, "alumnoId") FROM stdin;
f060e5d2-deb7-4f09-b435-6bdbb7753f63	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0001-MD07	22
fcbe134b-2a78-4f93-a854-29b35f903676	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0002-DRA5	24
ce2280ff-62bc-4ef6-b483-abab6d28f541	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0003-RN00	25
7680c42b-9020-4c3b-9ab1-588a329b77d0	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0004-ZRRA	26
cb83fc12-8454-4c6a-9adc-0117ac457854	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0005-RN05	27
06a7b3e9-2fab-4e60-94f6-05843b00fe23	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0006-SN06	28
ab4c1288-1726-478b-b88e-85a879d52a52	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0007-LSA3	29
6d68d145-8d9e-4ed5-9a9f-6e2e61086013	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0008-CS03	30
bcff26fd-c783-4206-bad1-7f2a466f9a29	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0009-RD03	31
44d2d4b8-2bee-4321-b39e-418a249e2241	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0010-YN00	32
36f522a9-f133-4256-8696-172b45afcf87	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0011-LLA1	33
e64957ae-b34f-409e-a9de-35ba91dbc623	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0012-LM01	34
e811330a-c135-4af5-b083-fdb10dda9783	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0013-NA05	35
e19bc78e-3bcb-4ca2-8be0-3089ce80da3b	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0014-NQA9	36
f649c0a7-2692-48b6-9611-14a398801361	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0015-LN06	37
61a1b52b-69c8-45b1-93c1-f7d6e7d3a562	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0016-ZR08	38
04ea486f-4748-4d5c-9f5e-e374af89f9ee	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0017-NR04	39
157c5cd1-a80e-4946-9183-87a72e2b0c73	Certificado de Acreditación BCPP	FIBRAS TECNOLOGICAS Y NUEVAS TENDENCIAS EN PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	Betzabe Rivera	2026-03-19 00:00:00	BCP-FTTP-03-2026-0018-RNA2	40
4e7bba87-28fb-4c7f-b0a0-beb52df8fe19	Certificado de Acreditación BCPP	EXTENSIONES DE PESTAÑAS BÁSICO	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-EPB-03-2026-0031-BR00	41
7dcca653-0758-4d5f-b8af-eae35447a97a	Certificado de Acreditación BCPP	ACTUALIZACIÓN EXTENSIONES DE PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-ACTPB-03-2026-0032-RR01	42
98819d21-e656-46ca-be6f-bc2c7fa64cec	Certificado de Acreditación BCPP	ACTUALIZACIÓN EXTENSIONES DE PESTAÑAS	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-ACTPB-03-2026-0033-SR08	43
1d4f6801-7293-4bfe-9674-7f9e246d47ca	Certificado de Acreditación BCPP	DISEÑO DE UÑAS ACRILICAS	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-DUA-03-2026-0034-SZA4	44
c7d48f99-e289-4d01-ad0d-3d6a75cd6c65	Certificado de Acreditación BCPP	TERAPEUTA EN MASAJE INTEGRAL	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-TMI-03-2026-0037-ZN03	45
eb7ea444-05dc-4f50-ae0e-76a0a3a6e262	Certificado de Acreditación BCPP	TERAPEUTA EN MASAJE INTEGRAL	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-TMI-03-2026-0040-SL04	46
ae107ab5-054c-40f8-8174-37995ab32f97	Certificado de Acreditación BCPP	TERAPEUTA EN MASAJE INTEGRAL	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-TMI-03-2026-0035-ML03	47
d9eb6eac-0f7b-43f3-b6f5-f7867e578551	Certificado de Acreditación BCPP	TERAPEUTA EN MASAJE INTEGRAL	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-TMI-03-2026-0039-RY12	48
fedcafe2-36f9-4783-a89a-ac8cd7819239	Certificado de Acreditación BCPP	TERAPEUTA EN MASAJE INTEGRAL	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-TMI-03-2026-0038-LL00	49
5b619c00-4d85-4b44-9981-0c315e84d8ed	Certificado de Acreditación BCPP	TERAPEUTA EN MASAJE INTEGRAL	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-TMI-03-2026-0036-NLA3	50
9c171215-0ffa-4247-b315-b65911c0d851	Certificado de Acreditación BCPP	Estilismo Profesional	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Instituto Profesional de Estilismo IPE	2026-04-20 00:00:00	BCCP-EP-03-2026-0045-RL08	51
c1bcba7d-11a4-4d94-a7a2-082aedb1ff27	Certificado de Acreditación BCPP	Estilismo Profesional	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Instituto Profesional de Estilismo IPE	2026-04-20 00:00:00	BCCP-EP-03-2026-0043-LL04	52
dbb61132-e278-480d-922b-ce823355eec8	Certificado de Acreditación BCPP	Estilismo Profesional	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Instituto Profesional de Estilismo IPE	2026-04-20 00:00:00	BCCP-EP-03-2026-0044-RNB2	53
de0eb632-cc44-415d-b641-b3625c246f15	Certificado de Acreditación BCPP	Estilismo Profesional	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-03-31 00:00:00	 BCCP-EP-03-2026-0042-LD05	54
a18f4ab5-8381-41df-b624-69a289ea7a5f	Certificado de Acreditación BCPP	Diseñador de Imagen 	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-03-31 00:00:00	BCCP-DI-03-2026-0041-LD05	54
2a13eb2f-0a7e-4aa7-ab93-59093ec642b0	Certificado de Acreditación BCPP	MAQUILLAJE SEMIPERMANENTE	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-MAQS-03-2026-0046-LYA4	55
2d38318c-3e82-4b9f-a729-a1cd479d9f60	Certificado de Acreditación BCPP	MAQUILLAJE SEMIPERMANENTE	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-MAQS-03-2026-0047-RR03	56
911a295a-836c-4e8e-bb86-29c37b5fe487	Certificado de Acreditación BCPP	PELUQUERIA Y BARBERIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-PEBA-03-2026-0048-NS16	57
e78c78b4-ab4f-4b6c-9921-c309865a3506	Certificado de Acreditación BCPP	PELUQUERIA Y BARBERIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-PEBA-03-2026-0049-SC09	58
f95990d2-b703-4ac0-9cab-023eb3cc1678	Certificado de Acreditación BCPP	PESTAÑAS BÁSICO	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-03-31 00:00:00	BCCP-EXTPB-03-2026-0050-RC00	59
36dd205e-2962-423a-824f-d53aad3584f8	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-03-31 00:00:00	BCCP-QPD-03-2026-0054-SB09	60
52fd67bd-1d57-4eb9-8252-349f03796a81	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-03-31 00:00:00	BCCP-QPD-03-2026-0053-RV08	61
b1c7992e-c5a7-4d7f-a413-6452aca6af3b	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-03-31 00:00:00	BCCP-QPD-03-2026-0055-PR09	62
40bbea4e-53cc-4491-b12f-ca2a7e24a274	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-03-31 00:00:00	BCCP-QPD-03-2026-0058-LB01	63
0f5dccf5-7efa-4f4b-920b-2316cbb3ede5	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-03-31 00:00:00	BCCP-QPD-03-2026-0056-RS03	64
d9152c3c-27f8-4edf-9056-a27f954e57df	Certificado de Acreditación BCPP	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-03-31 00:00:00	BCCP-QPD-03-2026-0051-RL04	65
b872a090-55cb-45c7-a944-d007b29459fe	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-03-31 00:00:00	BCCP-QPD-03-2026-0057-RR07	66
ddbb83f7-d65f-4c02-bb6e-7b8b97a93f40	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-03-31 00:00:00	BCCP-QPD-03-2026-0052-RR04	67
7b9a8691-271d-4111-b3e2-e15604a41234	Certificado de Acreditación BCPP	Estilismo Profesional	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Instituto Moni’k.	2026-03-31 00:00:00	BCCP-EP-03-2026-0060-RR09	68
fd7db590-98b0-4c59-84ba-e91589456204	Certificado de Acreditación BCPP	Estilismo Profesional	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Instituto Moni’k.	2026-03-31 00:00:00	BCCP-EP-03-2026-0059-MN00	69
bf866e49-ef02-4f54-97c7-ba0e3499f914	Certificado de Acreditación BCPP	ALACIADO PERMANENTE	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-05-11 00:00:00	BCP-ALPT-05-2026-0073-TL04	70
3178e19f-cf99-4f42-b9d4-5f31adebe283	Certificado de Acreditación BCPP	ESPECIALIDAD EN COLORIMETRÍA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-05-11 00:00:00	BCP-ESCRL-05-2026-0074-RL00	71
2b317dcd-9022-4217-b252-2de9b33cc6ca	Certificado de Acreditación BCPP	CAPACITADOR DE INSTRUCTORES 	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-05-11 00:00:00	BCP-CPINS-05-2026-0075-HR05	72
286445d9-7862-4c28-9e17-0493e4ca8a91	Certificado de Acreditación BCPP	CAPACITADOR DE INSTRUCTORES 	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-05-11 00:00:00	BCP-CPINS-05-2026-0076-XS09	73
b9bc1bc7-d630-400d-ac74-d412f333ac0d	Certificado de Acreditación BCPP	CAPACITADOR DE INSTRUCTORES 	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-05-11 00:00:00	BCP-INS-05-2026-0077-HR05	74
5f9b3097-1f3f-4778-88d1-e2d17f6bcbf8	Certificado de Acreditación BCPP	CAPACITADOR DE INSTRUCTORES 	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-05-11 00:00:00	BCP-CPINS-05-2026-0078-HN02	75
b7ba2e05-98d0-424a-ab74-4de91943ca63	Certificado de Acreditación BCPP	CAPACITADOR DE INSTRUCTORES 	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-05-11 00:00:00	BCP-CPINS-05-2026-0079-RR08	76
053fae4a-6836-4d6f-bdbd-1762c98e7ffb	Certificado de Acreditación BCPP	DIRECTOR ACADÉMICO	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-05-11 00:00:00	BCP-DAC-05-2026-0080-BL09	77
3c3ed026-1525-4057-8fcb-aa039d3c78a6	Certificado de Acreditación BCPP	DIRECTOR ACADÉMICO	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-05-11 00:00:00	BCP-DAC-05-2026-0081-XS09	73
f9dcd29c-b054-42a5-aad2-557760bbbb64	Certificado de Acreditación BCPP	DIRECTOR ACADÉMICO	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-05-11 00:00:00	BCP-DAC-05-2026-0082-RR08	76
9998d419-e67a-425d-bd49-4fcbe523f977	Certificado de Acreditación BCPP	PELUQUERIA Y BARBERIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-05-12 00:00:00	BCP-PEBA-05-2026-0083-MS02	78
e15ccc9b-939a-430a-927e-adf9e0b4e146	Certificado de Acreditación BCPP	Extensiones de pestañas básico	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-05-12 00:00:00	BCP-EXTPB-05-2026-0084-DY03	79
331a6ef3-9cf8-44b0-8ed2-6b85e4e68789	Certificado de Acreditación BCPP	EXTENSIONES DE PESTAÑAS BÁSICO	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-05-12 00:00:00	BCP-EXTPB-05-2026-0085-NCA3	80
ea23c189-d4d6-4a99-b3ce-20005dc1fc02	Certificado de Acreditación BCPP	COSMETOLOGÍA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-05-12 00:00:00	BCP-CST-05-2026-0086-RS03	81
fc4b9bbb-4eb7-4cf7-8bc2-a1d0908bd1ce	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-05-12 00:00:00	BCP-QPD-05-2026-0087-MD03	82
8bfb6fd5-4b4d-40c1-b470-30bfd1213a1e	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-05-12 00:00:00	BCP-QPD-05-2026-0088-RN07	83
9e2e6df2-1d0c-4734-8702-2b922681c2bd	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-05-12 00:00:00	BCP-QPD-05-2026-0093-RX00	84
b4643120-69df-4279-8380-70150a269ea7	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-05-12 00:00:00	BCP-QPD-05-2026-0089-FB02	85
c707f46f-f9cf-4128-8ea3-98cdc641e99d	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-05-12 00:00:00	BCP-QPD-05-2026-0090-LV04	86
e3bc5fad-734f-4c3d-ac26-e70438549950	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-05-12 00:00:00	BCP-QPD-05-2026-0095-BR07	87
0eeed6bf-ea86-420a-81e3-4473af8b6005	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-05-12 00:00:00	BCP-QPD-05-2026-0092-ZR00	88
1649f623-a0e9-47cc-bd83-e29ca6b9cc58	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-05-12 00:00:00	BCP-QPD-05-2026-0091-NL09	90
85f2ff33-2819-4189-9b49-e255b8a40c20	Certificado Técnico	Prestación de Servicios Básicos en Enfermería.  	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-05-12 00:00:00	BCP-PSBEN-05-2026-0096-NN09	91
d11bcc93-b46d-4f6c-bbf2-7282bcf9396d	Certificado Técnico	Prestación de Servicios Básicos en Enfermería.  	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2026-05-12 00:00:00	BCP-PSBEN-05-2026-0097-RS04	93
5267d5a8-e6a7-40e3-aa94-d1ef2fab58d9	Certificado de Acreditación BCPP	Estilismo Profesional	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Instituto de Belleza San Miguel	2026-05-12 00:00:00	BCP-EP-05-2026-0098-LG02	94
2eb61b7c-389c-462e-bb08-dda4e79ac094	Certificado de Acreditación BCPP	Estilismo Profesional	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Instituto de Belleza San Miguel	2026-05-12 00:00:00	BCP-EP-05-2026-0099-CH09	96
b9062f4b-581e-40fc-9ff7-c2cbe3b0eb3b	Certificado de Acreditación BCPP	Estilismo Profesional	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-06-25 00:00:00	BCP-EP-06-2026-011O-MMA3	97
d3c337bf-9ab7-4130-806e-5433aed40801	Certificado de Acreditación BCPP	Estilismo Profesional	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Instituto Profesional de Estilismo IPE	2026-07-01 00:00:00	BCP-EP-06-2026-0111-CTA7	98
79f509d2-2c70-498b-8177-6bccd8d0fa14	Certificado de Acreditación BCPP	Capacitador Calificado	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-06-25 00:00:00	BCP-CC-06-2026-0114-RL02	99
b48fa52f-0e2f-4f2c-b567-677c57aa1bde	Certificado de Acreditación BCPP	Capacitador Calificado	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-06-25 00:00:00	BCP-CC-06-2026-0115-RR01	100
140f26e8-af80-4ebb-9075-3a2e486522a4	Certificado de Acreditación BCPP	Capacitador Calificado	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-06-25 00:00:00	BCP-CC-06-2026-0116-LR01	101
7d83f141-9e19-4602-8f5f-24ed47c8b2b7	Certificado de Acreditación BCPP	Capacitador Calificado	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-06-25 00:00:00	BCP-CC-06-2026-0117-LN01	102
2db659ab-5387-4716-80b0-a41cf8cc79d2	Certificado de Acreditación BCPP	MANICURISTA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/STUDIO ACADEMY BY FLOR MARTINEZ	2026-06-25 00:00:00	BCCP-MC-12-2025-0094-RCA0	103
4f418dfa-a05a-4150-a4d2-d00dd52496b2	Certificado de Acreditación BCPP	MANICURISTA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/STUDIO ACADEMY BY FLOR MARTINEZ	2026-06-25 00:00:00	BCCP-MC-12-2025-0095-LL07	104
a17e253e-5ff1-475e-a13f-8806f7f8344a	Certificado de Especialización Profesional	Uñas ACRILICAS/CUIDADO DE MANOS Y PIES*	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-06-25 00:00:00	BCP-UACMP-06-2026-0106-RL02	99
b76c4d42-0f82-430d-963b-7e534650f1c8	Certificado de Especialización Profesional	Uñas ACRILICAS/CUIDADO DE MANOS Y PIES*	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-06-25 00:00:00	BCP-UACMP-06-2026-0108-LR01	100
350c879c-d122-4034-a91e-6cdd26e92e61	Certificado de Especialización Profesional	Uñas ACRILICAS/CUIDADO DE MANOS Y PIES*	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7	2026-06-25 00:00:00	BCP-ICT-06-2026-0109-LN01	102
00096444-0e7d-499c-9b23-0d1e8e41dfa6	Certificado de Acreditación BCPP	CORTE DE CABELLO UNISEX	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/INSTITUTO DE BELLEZA BO CENTRO TÉCNICO DE CAPACITACIÓN Y CERTIFICACIONES	2026-08-03 00:00:00	BCP-CCU-08-2026-0157-RN02	105
49f70c3b-89e8-4701-9863-76c671c0f309	Certificado de Acreditación BCPP	CORTE DE CABELLO UNISEX	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/INSTITUTO DE BELLEZA BO CENTRO TÉCNICO DE CAPACITACIÓN Y CERTIFICACIONES	2026-08-03 00:00:00	BCP-CCU-08-2026-0158-ZG01	106
1b255918-5dcb-4017-bf08-f0499ce8addc	Certificado de Acreditación BCPP	COSMETOLOGÍA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-08-03 00:00:00	BCP-CST-08-2026-0155-VD02	107
65287ec7-e8c8-4c1c-934b-8defb2f0d452	Certificado de Acreditación BCPP	COSMETOLOGÍA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/ Centro de capacitaciones y certificaciones Goiz	2026-08-03 00:00:00	BCP-CST-08-2026-0156-RSA6	108
3d45fe53-084a-47f6-ae7d-f5cce1e6b55e	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2025-12-25 00:00:00	BCCP-QPD-12-2025-0085-XM07	121
302911eb-e157-401f-b158-a60b50e7c248	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2025-12-25 00:00:00	BCCP-QPD-12-2025-0086-ZMA8	124
1aebdec4-523e-44b7-9edf-02474a496308	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2025-12-25 00:00:00	BCCP-QPD-12-2025-0087-TS06	125
dbe5cfb8-2f4a-46aa-b36c-6cafe84d3148	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2025-12-25 00:00:00	BCCP-QPD-12-2025-0084-RR04	122
b5854996-f599-4115-a13a-8382e50e1a0d	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2025-12-25 00:00:00	BCCP-QPD-12-2025-0088-RR01	128
0dea12d3-3b2a-401a-8c17-cbdad24de9ad	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2025-12-25 00:00:00	BCCP-QPD-12-2025-0093-NC06	129
46d6167e-aae8-4dda-a870-381fee6c99f3	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2025-02-12 00:00:00	BCCP-QPD-12-2025-0089-LS05	131
d388f87e-3385-474f-aa58-29fa53f1a67f	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2025-12-25 00:00:00	BCCP-QPD-12-2025-0090-NR00	132
1d223b44-eafd-42c1-9f9d-982ae7ba3113	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2025-12-25 00:00:00	BCCP-QPD-12-2025-0091-RR08	133
a50d94de-3fe8-4d2f-b959-097b0fbb28b1	Certificado Técnico	QUIROPODIA	Berakah Consultoría para la Profesionalización SA de CV	ECSEEL 7/Tincoba	2025-12-25 00:00:00	BCCP-QPD-12-2025-0092-LM03	134
f893f120-fb11-4e3b-930f-cfcf3e293a2f	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-07-15 00:00:00	W16261171	116
438defb4-7d17-4604-9bb7-dc5a8a0dc19a	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-07-15 00:00:00	W16261172	109
3bf0c201-7a29-4276-8095-2e9283ddb20a	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-07-15 00:00:00	W16261189	110
7c0afaf9-4307-4954-ad8b-c6d8b1125010	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-07-15 00:00:00	W16261170	111
7385f9ef-ead7-4d60-85de-72128cf60ff1	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-07-15 00:00:00	W16261176	112
212e67c1-9c43-4d8e-872c-fb72d800c01c	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-07-15 00:00:00	W16261185	113
371672f5-9556-4ce9-b325-43f98a3da983	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-07-15 00:00:00	W162614239	114
4156daef-1fd6-4ead-b167-c5c4ddf9b75c	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-07-15 00:00:00	W16261180	115
f22c8239-a7b5-4331-9af8-4741d0c9edbd	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-07-15 00:00:00	W16261181	118
b59db9f3-07f3-4cca-886e-19d3999858d8	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7/CENTRO TÉCNICO DE CAPACITACIONES Y CERTIFICACIONES BREIXA	2026-07-15 00:00:00	W16261177	117
25db7799-a66d-48ee-b33d-07ab13f1842c	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7/CENTRO TÉCNICO DE CAPACITACIONES Y CERTIFICACIONES BREIXA	2026-07-15 00:00:00	W16261178	119
e03e2518-493b-4523-8d6d-7caa75d4608e	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-02-20 00:00:00	V162411739	135
f2535cc1-bd7a-452a-ae40-401f87a67bf9	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-02-20 00:00:00	V162411745	136
abe493c9-96bc-4eac-a2fc-f479d2bf7bd7	Diploma Certificado de especialidad SEP	DISEÑO DE IMAGEN	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-02-15 00:00:00	V162411630	136
0e673dd1-5c74-4db1-8d72-f1485a551ef9	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-02-20 00:00:00	V162411906	137
608d5a39-5408-4d81-9bec-9d0f96c5c076	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-02-20 00:00:00	V162411909	138
c0646726-7d2e-4867-94f0-4cd26ff2c648	Diploma Certificado de especialidad SEP	COSMETOLOGÍA	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-02-20 00:00:00	V162411878	138
6925eb66-bc3b-4131-8a92-be64a048176d	Instructor Capacitador SEP	INSTRUCTOR DE CAPACITACION PARA EL TRABAJO	SEE-SEP	Berakah Consultoría para la Profesionalización SA de CV/ECSEEL 7	2026-02-20 00:00:00	V162412019	139
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

SELECT pg_catalog.setval('public."Alumno_id_seq"', 139, true);


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

\unrestrict jnywSas13LhatX5i9UI8zts6HV7JHBamtTH9dMusad6jLGaqspHYnlA9w9JVgxf

