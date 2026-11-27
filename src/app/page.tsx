import Motion from "@/components/Motion";
import Catalogo from "@/components/Catalogo";
import { linkWhatsApp } from "@/lib/catalogo";

const Palabras = ({ texto }: { texto: string }) => (
  <>
    {texto.split(" ").map((p, i) => (
      <span key={i}>
        <span className="w">
          <span>{p}</span>
        </span>{" "}
      </span>
    ))}
  </>
);

const waGeneral = linkWhatsApp("Hola Fuego, quiero hacer un pedido.");

export default function Home() {
  return (
    <>
      <Motion />
      <div className="halo" aria-hidden="true" />

      <header className="top late">
        <a href="#inicio" className="logo-mark" aria-label="Fuego by Mónica Ruiz" />
        <nav aria-label="Principal">
          <a href="#catalogo">Catálogo</a>
          <a href="#historia">Nuestra historia</a>
          <a href="#comprar">Cómo comprar</a>
        </nav>
        <a className="btn btn-line" href={waGeneral} target="_blank" rel="noopener">
          Pedir por WhatsApp
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-logo" aria-hidden="true" />
          <div className="hero-figure" style={{ "--r": 0 } as React.CSSProperties}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="fig dark" src="/img/monica.webp" alt="" width={851} height={1130} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="fig lit"
              src="/img/monica.webp"
              alt="Mónica Ruiz, sentada, mira la vela Fuego encendida que sostiene en las manos"
              width={851}
              height={1130}
            />
            <div className="glow" aria-hidden="true" />
            <div className="spark" aria-hidden="true" />
            <svg className="flame" viewBox="0 0 40 72" aria-hidden="true">
              <defs>
                <linearGradient id="fl-ext" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ff8a1e" stopOpacity="0" />
                  <stop offset=".22" stopColor="#ff9a2e" stopOpacity=".75" />
                  <stop offset=".6" stopColor="#ffc35a" />
                  <stop offset=".9" stopColor="#ffb44a" stopOpacity=".85" />
                  <stop offset="1" stopColor="#f08a2a" stopOpacity=".35" />
                </linearGradient>
                <radialGradient id="fl-int" cx="50%" cy="68%" r="62%">
                  <stop offset="0" stopColor="#fffdf2" />
                  <stop offset=".5" stopColor="#fff0b8" />
                  <stop offset="1" stopColor="#ffd070" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="fl-base" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#7fb2ff" stopOpacity=".75" />
                  <stop offset="1" stopColor="#3f6fe0" stopOpacity="0" />
                </radialGradient>
                <filter id="fl-suave" x="-30%" y="-10%" width="160%" height="120%">
                  <feGaussianBlur stdDeviation="1.1" />
                </filter>
              </defs>
              <g filter="url(#fl-suave)">
                <path
                  d="M20 3C22 17 31 30 31 46a11 13 0 0 1-22 0C9 30 18 17 20 3z"
                  fill="url(#fl-ext)"
                />
                <path
                  d="M20 22c1.4 9 6 16 6 25a6 8 0 0 1-12 0c0-9 4.6-16 6-25z"
                  fill="url(#fl-int)"
                />
                <ellipse cx="20" cy="57" rx="7" ry="4.5" fill="url(#fl-base)" />
              </g>
              <path d="M20 66v-9" stroke="#2a1a14" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
          <canvas className="embers" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow late">Velas artesanales · Santander, Colombia</p>
            <h1 className="h1">
              <Palabras texto="Que tu intención se haga luz" />
            </h1>
          </div>
          <div className="hero-side">
            <p className="late">
              Cada vela nace en las manos de Mónica Ruiz y guarda un deseo por cumplir. Elige su
              aroma, susúrrale tu intención y deja que su luz te devuelva la calma.
            </p>
            <div className="hero-actions late">
              <a className="btn btn-fire" href="#catalogo">
                Ver las velas
              </a>
              <a className="btn btn-line" href={waGeneral} target="_blank" rel="noopener">
                Escríbenos
              </a>
            </div>
          </div>
          <p className="scroll-hint late" aria-hidden="true">
            Desliza
          </p>
        </section>

        <section className="manifiesto">
          <p className="eyebrow">Hechas a mano, sin prisa</p>
          <h2 className="manifiesto-texto">
            <Palabras texto="Una llama pequeña basta para aquietar el día entero." />
          </h2>
          <div className="manifiesto-fotos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/monica-calma.webp"
              alt="Mónica Ruiz mira con calma una vela encendida entre sus manos"
              width={851}
              height={1280}
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/monica-detalle.webp"
              alt="Mónica Ruiz sonríe y ofrece una vela Fuego con tapa de madera"
              width={851}
              height={1280}
              loading="lazy"
            />
          </div>
          <ul className="hechos">
            <li>
              <strong>Cera de soja</strong>
              <span>en todas las velas aromáticas</span>
            </li>
            <li>
              <strong>Hechas a mano</strong>
              <span>una por una, en Girón</span>
            </li>
            <li>
              <strong>A tu medida</strong>
              <span>aroma, color y tarjeta personalizada</span>
            </li>
          </ul>
        </section>

        <Catalogo />

        <section className="historia" id="historia">
          <div className="historia-titulo">
            <p className="eyebrow">Nuestra historia</p>
            <h2>
              Hay luces que uno enciende <em>para no perderse</em>
            </h2>
            <p className="historia-firma">Mónica Ruiz</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="historia-foto"
              src="/img/monica-historia.webp"
              alt="Mónica Ruiz, de chaqueta blanca, sonríe sentada en su estudio"
              width={851}
              height={1280}
              loading="lazy"
            />
          </div>
          <div className="historia-texto">
            <p>
              Hubo un tiempo en que los días se me hicieron grises. No sabía bien hacia dónde
              caminar, y lo único que tenía claro era un ritual pequeño: llegar a casa, encender
              una vela y sentarme junto a Luna, mi fiel compañera de cuatro patas. Aquella llamita
              no cambiaba el mundo. Pero mientras su luz bailaba frente a mí, todo se aquietaba y
              yo volvía a respirar despacio.
            </p>
            <p>
              De esa calma nació una pregunta, suave como un susurro: ¿cómo nace una vela? Y de esa
              pregunta, un camino. Mis primeras velas fueron tímidas y no quisieron tomar forma.
              Las siguientes las entregué con más ilusión que ganancia. Dije que sí a mi primer
              encargo cuando apenas estaba aprendiendo, y fue ese sí el que me enseñó. Así llegan
              casi todas las cosas bonitas: antes de que uno se sienta listo.
            </p>
            <p>
              Después vinieron las noches largas. Tres moldes elegidos con más fe que certezas, y
              un encargo de mil velas que parecía demasiado grande para una sola semana. Aun así,
              floreció. Mientras la ciudad dormía, yo las iba haciendo una por una, con las manos
              cansadas y el corazón despierto. Fue entonces cuando descubrí que la duda y la
              ilusión caminan muy cerca, y que uno elige a cuál darle la mano.
            </p>
            <p className="historia-destacado">
              La llamé Fuego porque eso fue lo que me abrigó: una luz pequeñita que nunca quiso
              apagarse.
            </p>
            <p>
              Y porque creo que todos guardamos una adentro, esperando que alguien se acerque a
              encenderla. Por eso mis velas nacen para acompañar momentos: el baño tibio al final
              de un día largo, la mesa donde se celebra, el silencio que por fin te regalas. Cada
              una sale de mis manos con una intención, y la primera es siempre la misma: que
              encuentres tu calma.
            </p>
            <p>Si hoy tu cielo está nublado, enciende una. A veces, volver a empezar se parece a eso.</p>
            <a className="btn btn-fire" href="#catalogo">
              Enciende la tuya
            </a>
          </div>
        </section>

        <section className="comprar" id="comprar">
          <p className="eyebrow">Cómo comprar</p>
          <ol className="pasos">
            <li>
              <span className="num">1</span>
              <h3>Escríbenos</h3>
              <p>Cuéntanos por WhatsApp o Instagram qué vela te hizo suspirar.</p>
            </li>
            <li>
              <span className="num">2</span>
              <h3>Abona el 50%</h3>
              <p>Con el abono guardamos tu lugar y tu vela empieza a nacer.</p>
            </li>
            <li>
              <span className="num">3</span>
              <h3>Recíbela lista para encender</h3>
              <p>Llega con tu aroma, tu color y unas palabras escritas para ti.</p>
            </li>
          </ol>

          <div className="cierre">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="cierre-foto"
              src="/img/monica-ofrenda.webp"
              alt="Mónica Ruiz ofrece hacia ti una vela Fuego encendida"
              width={851}
              height={1280}
              loading="lazy"
            />
            <h2>
              Enciende una, y deja que la calma <em>te encuentre</em>
            </h2>
            <a className="btn btn-dark" href={waGeneral} target="_blank" rel="noopener">
              Pedir por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="pie">
        <span className="logo-mark" aria-hidden="true" />
        <p>Fuego by Mónica Ruiz · Girón, Santander · @fuego.bga</p>
        <p className="nota">Prototipo de dirección de arte. Contenido y precios por confirmar.</p>
      </footer>
    </>
  );
}
