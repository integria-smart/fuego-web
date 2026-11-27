import type { Metadata, Viewport } from "next";
import { Fraunces, Jost } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

// Jost hace de suplente de Kiona (la fuente de rótulos del manual) hasta tener su licencia web.
const label = Jost({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const titulo = "Fuego · Velas artesanales by Mónica Ruiz";
const descripcion =
  "Que tu intención se haga luz. Velas artesanales, bouquets y recordatorios hechos a mano por Mónica Ruiz en Santander, Colombia.";

export const metadata: Metadata = {
  // Cambiar por el dominio propio cuando la web deje de ser prototipo.
  metadataBase: new URL("https://fuego-web-five.vercel.app"),
  title: titulo,
  description: descripcion,
  openGraph: {
    title: titulo,
    description: descripcion,
    siteName: "Fuego by Mónica Ruiz",
    locale: "es_CO",
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image", title: titulo, description: descripcion },
};

export const viewport: Viewport = {
  themeColor: "#201514",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${label.variable}`}>
      <body>
        {/* Sin JavaScript no hay encendido: se muestra la página ya iluminada. */}
        <noscript>
          <style>{`.late,.fig.dark,.glow,.flame,.h1 .w>span,.manifiesto-texto .w,.vela{opacity:1}.hero-logo{opacity:.5}.hero-figure{--r:92!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
