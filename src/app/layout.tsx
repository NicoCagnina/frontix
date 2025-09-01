import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// TODO: replace this with the actual metadata
export const metadata = {
  title: "Frontix - Gestión smart de accesos electrónicos",
  description:
    "Tu plataforma de confianza para controlar accesos en tiempo real. Gestiona accesos electrónicos de manera inteligente y segura con Frontix.",
  keywords:
    "accesos electrónicos, control de acceso, gestión de accesos, seguridad, control de entrada, sistema de acceso",
  authors: [{ name: "Frontix Team" }],
  creator: "Frontix",
  publisher: "Frontix",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  colorScheme: "light",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://frontix.com",
    siteName: "Frontix",
    title: "Frontix - Gestión smart de accesos electrónicos",
    description:
      "Tu plataforma de confianza para controlar accesos en tiempo real. Gestiona accesos electrónicos de manera inteligente y segura.",
    images: [
      {
        url: "/images/FrontixF.svg",
        width: 1200,
        height: 630,
        alt: "Frontix - Plataforma de gestión de accesos electrónicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontix - Gestión smart de accesos electrónicos",
    description:
      "Tu plataforma de confianza para controlar accesos en tiempo real.",
    images: ["/images/FrontixF.svg"],
    creator: "@frontix",
    site: "@frontix",
  },
  alternates: {
    canonical: "https://frontix.com",
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
    yandex: "tu-codigo-de-verificacion-yandex",
    yahoo: "tu-codigo-de-verificacion-yahoo",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
