import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Berakah Consorcio",
  description: "Berakah Consultoria para la Profesionalización SA de CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable}  h-full antialiased`}
    >
      <body className={`${ montserrat.className } min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
