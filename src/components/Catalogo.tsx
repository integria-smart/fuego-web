"use client";

import { useEffect, useRef, useState } from "react";
import {
  bouquets,
  industrial,
  linkWhatsApp,
  navidadArtesanal,
  navidadIndustrial,
  recordatorios,
  velas,
  type Pieza,
} from "@/lib/catalogo";

/**
 * Catálogo interactivo: cuatro pestañas (una por línea) y, dentro de cada
 * línea, sus colecciones. Al cambiar, el contenido se apaga y se vuelve a
 * encender en el mismo lugar, sin recorrer la página.
 */

type Grupo = {
  id: string;
  nombre: string;
  titulo: [string, string];
  nota: string;
  boton: string;
  clima: string;
  brillo: string;
  lista: Pieza[];
};

type Linea = {
  id: string;
  num: string;
  nombre: string;
  resumen: string;
  grupos: Grupo[];
  /** Para las líneas que aún no tienen piezas: una invitación por WhatsApp. */
  invitacion?: { texto: string; boton: string; mensaje: string };
};

const aromaticas: Pieza[] = velas.map((v) => ({
  id: v.id,
  nombre: v.nombre,
  linea: v.linea,
  detalle: v.detalle,
  precio: v.precio,
  foto: v.foto,
  mensaje: `Hola Fuego, quiero pedir la vela ${v.nombre} (${v.linea}, ${v.precio}).`,
}));

const lineas: Linea[] = [
  {
    id: "artesanal",
    num: "01",
    nombre: "Línea artesanal",
    resumen: "Piezas hechas una por una, con el tiempo y el cariño que pide cada intención.",
    grupos: [
      {
        id: "aromaticas",
        nombre: "Aromáticas",
        titulo: ["Cada aroma guarda", "una intención"],
        nota: "Velas de cera natural para acompañar tus momentos de calma.",
        boton: "Pedir este aroma",
        clima: "#2a2622",
        brillo: "#e9dcc6",
        lista: aromaticas,
      },
      {
        id: "bouquets",
        nombre: "Bouquets",
        titulo: ["Flores que no se marchitan,", "se encienden"],
        nota: "Cada flor es una vela aromática hecha a mano. Tú eliges tamaño, aroma y colores, y llega con una tarjeta con tus palabras.",
        boton: "Pedir bouquet",
        clima: "#33161f",
        brillo: "#e0708c",
        lista: bouquets,
      },
      {
        id: "recordatorios",
        nombre: "Recordatorios",
        titulo: ["Pequeños detalles", "que se recuerdan"],
        nota: "Para que tu celebración siga encendida en cada casa, con tu color, tu aroma y tu tarjeta.",
        boton: "Cotizar",
        clima: "#2b2320",
        brillo: "#e7c56a",
        lista: recordatorios,
      },
      {
        id: "navidad",
        nombre: "Navidad",
        titulo: ["Una Navidad", "encendida a mano"],
        nota: "Nacimientos, figuras y huellitas para regalar en diciembre, con precio especial por docena.",
        boton: "Cotizar",
        clima: "#351512",
        brillo: "#c8442c",
        lista: navidadArtesanal,
      },
    ],
  },
  {
    id: "industrial",
    num: "02",
    nombre: "Línea industrial",
    resumen: "Velas de deseos por caja, para la casa, el negocio y los pedidos grandes.",
    grupos: [
      {
        id: "deseos",
        nombre: "Velas de deseos",
        titulo: ["Un deseo", "en cada vela"],
        nota: "Cajas listas para encender una intención distinta cada día.",
        boton: "Pedir caja",
        clima: "#33200f",
        brillo: "#e08a3c",
        lista: industrial,
      },
      {
        id: "navidad",
        nombre: "Navidad",
        titulo: ["Diciembre", "por cajas"],
        nota: "Para la noche de las velitas, la novena y los regalos de empresa, con tu logo y tu mensaje.",
        boton: "Cotizar",
        clima: "#351512",
        brillo: "#c8442c",
        lista: navidadIndustrial,
      },
    ],
  },
  {
    id: "moldes-3d",
    num: "03",
    nombre: "Moldes en 3D",
    resumen: "",
    grupos: [
      {
        id: "moldes",
        nombre: "Moldes",
        titulo: ["Moldes", "en 3D"],
        nota: "Formas diseñadas a medida para que tu vela no se parezca a ninguna otra.",
        boton: "",
        clima: "#22201f",
        brillo: "#c19971",
        lista: [],
      },
    ],
    invitacion: {
      texto: "Cuéntanos la forma que imaginas y la convertimos en un molde para tu vela.",
      boton: "Quiero saber más",
      mensaje: "Hola Fuego, quiero saber más sobre los moldes en 3D.",
    },
  },
  {
    id: "academia",
    num: "04",
    nombre: "Academia",
    resumen: "",
    grupos: [
      {
        id: "academia",
        nombre: "Academia",
        titulo: ["Aprende a encender", "tu propio camino"],
        nota: "De la mano de quien empezó con una sola vela.",
        boton: "",
        clima: "#2a1d14",
        brillo: "#ba4719",
        lista: [],
      },
    ],
    invitacion: {
      texto: "Escríbenos y te contamos cuándo abre el próximo encuentro para aprender a hacer velas.",
      boton: "Quiero aprender",
      mensaje: "Hola Fuego, quiero saber más sobre la Academia.",
    },
  },
];

const APAGADO = 340;

export default function Catalogo() {
  const [vista, setVista] = useState({ linea: 0, grupo: 0 });
  const [marcada, setMarcada] = useState({ linea: 0, grupo: 0 });
  const [encendido, setEncendido] = useState(true);
  const pista = useRef<HTMLDivElement>(null);
  const reloj = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (reloj.current) clearTimeout(reloj.current);
    },
    [],
  );

  const cambiar = (linea: number, grupo: number) => {
    if (linea === marcada.linea && grupo === marcada.grupo) return;
    setMarcada({ linea, grupo });
    setEncendido(false);
    if (reloj.current) clearTimeout(reloj.current);
    reloj.current = setTimeout(() => {
      setVista({ linea, grupo });
      setEncendido(true);
      if (pista.current) pista.current.scrollLeft = 0;
    }, APAGADO);
  };

  const mover = (dir: number) => {
    const el = pista.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  const linea = lineas[vista.linea];
  const grupo = linea.grupos[vista.grupo];
  const lineaMarcada = lineas[marcada.linea];

  return (
    <section
      className="cat"
      id="catalogo"
      style={{ "--clima": grupo.clima, "--brillo": grupo.brillo } as React.CSSProperties}
    >
      <div className={`cat-luz${encendido ? "" : " off"}`} aria-hidden="true" />

      <div className="cat-top">
        <p className="eyebrow">Catálogo</p>
        <div className="cat-tabs" role="tablist" aria-label="Líneas del catálogo">
          {lineas.map((l, i) => (
            <button
              key={l.id}
              type="button"
              role="tab"
              id={`tab-${l.id}`}
              aria-selected={i === marcada.linea}
              aria-controls="cat-panel"
              className={i === marcada.linea ? "activa" : ""}
              onClick={() => cambiar(i, 0)}
            >
              <span className="cat-num">{l.num}</span>
              {l.nombre}
            </button>
          ))}
        </div>
        {lineaMarcada.grupos.length > 1 && (
          <div className="cat-chips" aria-label={`Colecciones de la ${lineaMarcada.nombre}`}>
            {lineaMarcada.grupos.map((g, i) => (
              <button
                key={g.id}
                type="button"
                aria-pressed={i === marcada.grupo}
                className={i === marcada.grupo ? "activa" : ""}
                onClick={() => cambiar(marcada.linea, i)}
              >
                {g.nombre}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className={`cat-panel${encendido ? "" : " off"}`}
        id="cat-panel"
        role="tabpanel"
        aria-labelledby={`tab-${linea.id}`}
        key={`${linea.id}-${grupo.id}`}
      >
        <div className="cat-info">
          <h2>
            {grupo.titulo[0]} <em>{grupo.titulo[1]}</em>
          </h2>
          <p>{grupo.nota}</p>
          {linea.resumen && <p className="cat-resumen">{linea.resumen}</p>}
        </div>

        {linea.invitacion ? (
          <div className="cat-invitacion">
            <p>{linea.invitacion.texto}</p>
            <a
              className="btn btn-fire"
              href={linkWhatsApp(linea.invitacion.mensaje)}
              target="_blank"
              rel="noopener"
            >
              {linea.invitacion.boton}
            </a>
          </div>
        ) : (
          <div className="cat-galeria">
            <div className="cat-pista" ref={pista}>
              {grupo.lista.map((p, i) => (
                <article className="cat-pieza" key={p.id} style={{ "--i": i } as React.CSSProperties}>
                  <div className="cat-foto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.foto} alt={p.nombre} loading="lazy" />
                  </div>
                  <p className="vela-linea">{p.linea}</p>
                  <h3>{p.nombre}</h3>
                  <p className="vela-detalle">{p.detalle}</p>
                  <div className="vela-pie">
                    <span className="precio">{p.precio}</span>
                    <a
                      className="btn btn-line"
                      href={linkWhatsApp(p.mensaje)}
                      target="_blank"
                      rel="noopener"
                    >
                      {grupo.boton}
                    </a>
                  </div>
                </article>
              ))}
            </div>
            {grupo.lista.length > 3 && (
              <div className="cat-flechas">
                <button type="button" aria-label="Ver anteriores" onClick={() => mover(-1)}>
                  ←
                </button>
                <button type="button" aria-label="Ver siguientes" onClick={() => mover(1)}>
                  →
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
