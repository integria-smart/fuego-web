// Datos de muestra tomados del catálogo general (noviembre 2026).
// En la versión completa esto se lee de Supabase.

export const WHATSAPP = "573116160084";

export function linkWhatsApp(mensaje: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

export type Vela = {
  id: string;
  nombre: string;
  linea: string;
  detalle: string;
  precio: string;
  foto: string;
  /** Color de ambiente que toma la sección cuando esta vela está al centro. */
  clima: string;
  brillo: string;
};

export const velas: Vela[] = [
  {
    id: "florecer",
    nombre: "Florecer",
    linea: "Aromática Premium · 220 g",
    detalle: "Para los días en que algo nuevo quiere abrirse. También en Serena y Amarte.",
    precio: "$80.000",
    foto: "/img/florecer.webp",
    clima: "#2a2622",
    brillo: "#e9dcc6",
  },
  {
    id: "lavanda-vainilla",
    nombre: "Lavanda Vainilla",
    linea: "Aromática Premium · 220 g",
    detalle: "Para que el día se despida despacio y la noche llegue en calma.",
    precio: "$80.000",
    foto: "/img/lavanda-vainilla.webp",
    clima: "#241a2b",
    brillo: "#9a7bb8",
  },
  {
    id: "festival-rosa",
    nombre: "Festival Rosa",
    linea: "Aromática Premium · 220 g",
    detalle: "Un jardín en fiesta, hecho para regalar alegría.",
    precio: "$80.000",
    foto: "/img/festival-rosa.webp",
    clima: "#33161f",
    brillo: "#e0708c",
  },
  {
    id: "premium",
    nombre: "Mandarina, Café y Caballero Noche",
    linea: "Aromática Premium · 220 g",
    detalle: "Tres aromas con alma propia, cada uno vestido de su color.",
    precio: "$80.000",
    foto: "/img/premium.webp",
    clima: "#33200f",
    brillo: "#e08a3c",
  },
  {
    id: "vela-postre",
    nombre: "Vela Postre",
    linea: "Galleta y crema · 220 g",
    detalle: "Dulce a la vista y al aire, como un antojo que no se acaba.",
    precio: "$80.000",
    foto: "/img/vela-postre.webp",
    clima: "#2e2219",
    brillo: "#d9b98f",
  },
  {
    id: "clasica",
    nombre: "Clásica",
    linea: "130 g",
    detalle: "Bosque y limón, flores intensas, vainilla y verbena o sandía fresca.",
    precio: "$65.000",
    foto: "/img/clasica.webp",
    clima: "#351512",
    brillo: "#c8442c",
  },
  {
    id: "cumpleanos",
    nombre: "Edición Cumpleaños",
    linea: "Galleta y crema · 130 g",
    detalle: "Un deseo de cumpleaños que se enciende antes de pedirlo.",
    precio: "$65.000",
    foto: "/img/cumpleanos.webp",
    clima: "#2b2320",
    brillo: "#e7c56a",
  },
];
