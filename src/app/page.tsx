import Motion from "@/components/Motion";
import { linkWhatsApp, velas } from "@/lib/catalogo";

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
          <a href="#aromas">Velas</a>
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
            <svg className="flame" viewBox="0 0 40 64" aria-hidden="true">
              <defs>
                <radialGradient id="fl" cx="50%" cy="78%" r="70%">
                  <stop offset="0" stopColor="#fff6d8" />
                  <stop offset=".35" stopColor="#ffc56a" />
                  <stop offset=".75" stopColor="#f07a1e" />
                  <stop offset="1" stopColor="#ba4719" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path
                d="M20 2c3 12 14 20 14 36a14 14 0 0 1-28 0C6 26 15 18 20 2z"
                fill="url(#fl)"
              />
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
              <a className="btn btn-fire" href="#aromas">
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

        <section className="aromas" id="aromas">
          <div className="aromas-pin">
            <div className="aromas-head">
              <p className="eyebrow">Velas aromáticas</p>
              <h2>
                Cada aroma guarda <em>una intención</em>
              </h2>
            </div>
            <div className="track">
              {velas.map((v) => (
                <article
                  className="vela"
                  key={v.id}
                  data-clima={v.clima}
                  style={{ "--brillo": v.brillo } as React.CSSProperties}
                >
                  <div className="vela-foto">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.foto} alt={`Vela ${v.nombre}`} loading="lazy" />
                  </div>
                  <p className="vela-linea">{v.linea}</p>
                  <h3>{v.nombre}</h3>
                  <p className="vela-detalle">{v.detalle}</p>
                  <div className="vela-pie">
                    <span className="precio">{v.precio}</span>
                    <a
                      className="btn btn-line"
                      href={linkWhatsApp(
                        `Hola Fuego, quiero pedir la vela ${v.nombre} (${v.linea}, ${v.precio}).`,
                      )}
                      target="_blank"
                      rel="noopener"
                    >
                      Pedir este aroma
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
            <a className="btn btn-fire" href="#aromas">
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
