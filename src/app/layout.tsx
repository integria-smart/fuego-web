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

export const metadata: Metadata = {
  title: "Fuego · Velas artesanales by Mónica Ruiz",
  description:
    "Velas artesanales de cera de soja, bouquets y recordatorios personalizados. Hechos a mano en Santander, Colombia.",
};

export const viewport: Viewport = {
  themeColor: "#201514",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${label.variable}`}>
      <body>{children}</body>
    </html>
  );
}
