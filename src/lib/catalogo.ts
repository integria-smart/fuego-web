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

export type Pieza = {
  id: string;
  nombre: string;
  linea: string;
  detalle: string;
  precio: string;
  foto: string;
  mensaje: string;
};

export const bouquets: Pieza[] = [
  {
    id: "bouquet-maxi",
    nombre: "Bouquet Maxi",
    linea: "10 a 15 flores",
    detalle: "Un jardín entero para decir lo que no cabe en palabras.",
    precio: "$200.000",
    foto: "/img/bouquet-maxi.webp",
    mensaje: "Hola Fuego, quiero un Bouquet Maxi ($200.000).",
  },
  {
    id: "bouquet-mediano",
    nombre: "Bouquet Mediano",
    linea: "8 a 10 flores",
    detalle: "El punto justo entre el detalle y la sorpresa.",
    precio: "$150.000",
    foto: "/img/bouquet-mediano.webp",
    mensaje: "Hola Fuego, quiero un Bouquet Mediano ($150.000).",
  },
  {
    id: "bouquet-mini",
    nombre: "Bouquet Mini",
    linea: "6 a 8 flores",
    detalle: "Pequeño como un secreto, tierno como un abrazo.",
    precio: "$100.000",
    foto: "/img/bouquet-mini.webp",
    mensaje: "Hola Fuego, quiero un Bouquet Mini ($100.000).",
  },
];

export const recordatorios: Pieza[] = [
  {
    id: "rec-cumple",
    nombre: "Cumpleaños",
    linea: "Rosas, margaritas, cupcakes",
    detalle: "Para que cada invitado se lleve un pedacito de la fiesta.",
    precio: "Desde $7.000",
    foto: "/img/rec-cumple.webp",
    mensaje: "Hola Fuego, quiero cotizar recordatorios de cumpleaños.",
  },
  {
    id: "rec-bautizo",
    nombre: "Bautizos",
    linea: "Angelitos, cruces, vírgenes",
    detalle: "Una luz que guarda la bendición de ese día.",
    precio: "Desde $7.500",
    foto: "/img/rec-bautizo.webp",
    mensaje: "Hola Fuego, quiero cotizar recordatorios de bautizo.",
  },
  {
    id: "rec-baby",
    nombre: "Baby shower",
    linea: "Ositos, elefantes, nubes",
    detalle: "La primera bienvenida, hecha vela.",
    precio: "Desde $6.500",
    foto: "/img/rec-baby.webp",
    mensaje: "Hola Fuego, quiero cotizar recordatorios de baby shower.",
  },
];

export const navidadArtesanal: Pieza[] = [
  {
    id: "nav-nacimiento",
    nombre: "Nacimientos",
    linea: "Color y tarjeta a elección",
    detalle: "El pesebre entero cabe en una llama pequeña.",
    precio: "Desde $6.000",
    foto: "/img/nav-nacimiento.webp",
    mensaje: "Hola Fuego, quiero cotizar nacimientos navideños.",
  },
  {
    id: "nav-figuras",
    nombre: "Figuras navideñas",
    linea: "Árbol, galleta, Merry Christmas",
    detalle: "La Navidad hecha vela, con tu tarjeta y tu mensaje.",
    precio: "Desde $5.000",
    foto: "/img/nav-figuras.webp",
    mensaje: "Hola Fuego, quiero cotizar figuras navideñas.",
  },
  {
    id: "nav-huellitas",
    nombre: "Huellitas navideñas",
    linea: "Color, aroma y nombre",
    detalle: "Para quienes celebran con patitas en la casa.",
    precio: "Desde $6.000",
    foto: "/img/nav-huellitas.webp",
    mensaje: "Hola Fuego, quiero cotizar huellitas navideñas.",
  },
];

export const industrial: Pieza[] = [
  {
    id: "ind-ondulada",
    nombre: "Vela ondulada",
    linea: "Caja x 7 · blanca o de colores",
    detalle: "Siete deseos escritos en dorado, uno para cada día.",
    precio: "$35.000",
    foto: "/img/ind-ondulada.webp",
    mensaje: "Hola Fuego, quiero pedir la caja de velas onduladas ($35.000).",
  },
  {
    id: "ind-baby",
    nombre: "Vela baby",
    linea: "Caja x 8 · blanca o pastel",
    detalle: "Ocho luces pequeñas con el deseo que tú elijas.",
    precio: "$20.000",
    foto: "/img/ind-baby.webp",
    mensaje: "Hola Fuego, quiero pedir la caja de velas baby ($20.000).",
  },
  {
    id: "ind-cuadrada",
    nombre: "Vela cuadrada",
    linea: "Caja x 7 · letra en relieve",
    detalle: "Familia, amor, abundancia: tus deseos tallados en cera.",
    precio: "$28.000",
    foto: "/img/ind-cuadrada.webp",
    mensaje: "Hola Fuego, quiero pedir la caja de velas cuadradas ($28.000).",
  },
];

export const navidadIndustrial: Pieza[] = [
  {
    id: "nav-baby",
    nombre: "Vela baby navideña",
    linea: "Caja x 8 · deseos surtidos",
    detalle: "La novena, la cena y los deseos de fin de año.",
    precio: "$20.000",
    foto: "/img/nav-baby.webp",
    mensaje: "Hola Fuego, quiero pedir la caja de velas baby navideñas ($20.000).",
  },
  {
    id: "nav-virgencitas",
    nombre: "Vela baby virgencitas",
    linea: "Caja x 8 · bolsa x 3 desde $7.000",
    detalle: "Una luz para cada noche de velitas.",
    precio: "$20.000",
    foto: "/img/nav-virgencitas.webp",
    mensaje: "Hola Fuego, quiero pedir velas baby de virgencitas.",
  },
  {
    id: "nav-corporativa",
    nombre: "Corporativas navideñas",
    linea: "Con tu logo, tarjeta y mensaje",
    detalle: "El detalle de tu empresa, encendido en cada hogar.",
    precio: "Desde $5.000",
    foto: "/img/nav-corporativa.webp",
    mensaje: "Hola Fuego, quiero cotizar velas corporativas navideñas.",
  },
];
