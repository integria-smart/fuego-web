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
            <img className="fig dark" src="/img/monica.webp" alt="" width={851} height={1280} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="fig lit"
              src="/img/monica.webp"
              alt="Mónica Ruiz sostiene una vela Fuego encendida"
              width={851}
              height={1280}
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
              <Palabras texto="Aromatiza tus espacios" />
            </h1>
          </div>
          <div className="hero-side">
            <p className="late">
              Velas de cera de soja, bouquets y recordatorios hechos a mano por Mónica Ruiz. Cada
              pieza se personaliza para ti.
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
          <p className="eyebrow">Hecho a mano, sin prisa</p>
          <h2 className="manifiesto-texto">
            <Palabras texto="Pequeños detalles que se recuerdan." />
          </h2>
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
                Cada aroma tiene <em>su clima</em>
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

        <section className="comprar" id="comprar">
          <p className="eyebrow">Cómo comprar</p>
          <ol className="pasos">
            <li>
              <span className="num">1</span>
              <h3>Escríbenos</h3>
              <p>Cuéntanos por WhatsApp o Instagram qué referencia te gustó.</p>
            </li>
            <li>
              <span className="num">2</span>
              <h3>Abona el 50%</h3>
              <p>Con el abono aseguramos tu pedido y empezamos a hacerlo.</p>
            </li>
            <li>
              <span className="num">3</span>
              <h3>Recíbelo listo para regalar</h3>
              <p>Hecho a mano, con tu aroma, tu color y tu tarjeta.</p>
            </li>
          </ol>

          <div className="cierre">
            <h2>
              Creamos momentos <em>que se recuerdan</em>
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
