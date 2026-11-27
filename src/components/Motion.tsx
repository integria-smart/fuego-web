"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

/**
 * Todo el movimiento de la página vive aquí: el encendido del hero, el halo
 * del cursor, las chispas, el manifiesto, la galería de aromas y el paso de
 * oscuro a claro. El contenido se renderiza en el servidor (page.tsx).
 */
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const celular = window.matchMedia("(max-width: 860px)").matches;
    const figura = document.querySelector<HTMLElement>(".hero-figure");
    if (!figura) return;

    const limpiar: Array<() => void> = [];
    let encendida = false;

    const ctx = gsap.context(() => {
      // ---------- Sin movimiento: estado final y nada más ----------
      if (quieto) {
        gsap.set(figura, { "--r": 92 });
        return;
      }

      // ---------- Scroll suave (solo computador) ----------
      if (!celular) {
        const lenis = new Lenis({ lerp: 0.09 });
        lenis.on("scroll", ScrollTrigger.update);
        const tick = (t: number) => lenis.raf(t * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);
        limpiar.push(() => {
          gsap.ticker.remove(tick);
          lenis.destroy();
        });
      }

      // ---------- 1. El encendido ----------
      gsap.set(".flame", { scale: 0, opacity: 1 });
      gsap.set(".spark", { scale: 0 });
      gsap.set(".h1 .w > span", { yPercent: 115, opacity: 1 });
      gsap.set(".late", { y: 14 });

      const parpadeo = () => {
        // La llama nunca se queda quieta: radio de luz, brillo y forma varían un poco.
        gsap.to(figura, {
          "--r": gsap.utils.random(90, 94),
          duration: gsap.utils.random(0.9, 1.8),
          ease: "sine.inOut",
          onComplete: parpadeo,
        });
        gsap.to(".glow", { opacity: gsap.utils.random(0.9, 1), duration: 0.9, overwrite: true });
        gsap.to(".flame", {
          scaleY: gsap.utils.random(0.9, 1.14),
          scaleX: gsap.utils.random(0.92, 1.05),
          skewX: gsap.utils.random(-5, 5),
          duration: 0.18,
          overwrite: "auto",
        });
      };

      const encender = gsap.timeline({ delay: 0.7, paused: true });
      encender
        .to(".spark", { scale: 1, opacity: 1, duration: 0.14, ease: "power2.out" })
        .to(".spark", { scale: 2.2, opacity: 0, duration: 0.6, ease: "power2.out" })
        .to(".flame", { scale: 1, duration: 1, ease: "elastic.out(1, 0.45)" }, "<0.05")
        // La luz sube despacio: primero las manos y la vela, luego el rostro.
        .to(figura, { "--r": 13, duration: 2.2, ease: "sine.out" }, "<")
        .to(".glow", { opacity: 1, duration: 3, ease: "sine.out" }, "<")
        .to(".fig.dark", { opacity: 1, duration: 3.4, ease: "sine.out" }, "<0.2")
        .add(() => {
          encendida = true;
        }, "<0.4")
        .to(figura, { "--r": 92, duration: 6.5, ease: "sine.inOut" }, ">-2.4")
        .to(".hero-logo", { opacity: 0.5, duration: 2.4, ease: "power1.out" }, "<")
        .to(
          ".h1 .w > span",
          { yPercent: 0, duration: 1.1, stagger: 0.1, ease: "power3.out" },
          "<0.3",
        )
        .to(".late", { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power2.out" }, "<0.5")
        .add(parpadeo);

      const foto = figura.querySelector<HTMLImageElement>(".fig.lit");
      const arrancar = () => encender.play();
      if (foto && !foto.complete) {
        foto.addEventListener("load", arrancar, { once: true });
        foto.addEventListener("error", arrancar, { once: true });
      } else {
        arrancar();
      }

      // Al bajar, Mónica se aleja un poco y el texto se apaga.
      gsap.to(".hero-figure", {
        yPercent: 7,
        scale: 1.05,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-copy, .hero-side, .hero-logo", {
        yPercent: -18,
        autoAlpha: 0,
        ease: "none",
        immediateRender: false,
        scrollTrigger: { trigger: ".hero", start: "25% top", end: "85% top", scrub: true },
      });

      // ---------- 2. Halo que sigue el cursor ----------
      if (!celular) {
        const x = gsap.quickTo(".halo", "x", { duration: 0.6, ease: "power3" });
        const y = gsap.quickTo(".halo", "y", { duration: 0.6, ease: "power3" });
        let visto = false;
        const mover = (e: PointerEvent) => {
          x(e.clientX);
          y(e.clientY);
          if (!visto && encendida) {
            visto = true;
            gsap.to(".halo", { opacity: 1, duration: 1.2 });
          }
        };
        window.addEventListener("pointermove", mover, { passive: true });
        limpiar.push(() => window.removeEventListener("pointermove", mover));
      }

      // ---------- 3. Manifiesto: las palabras se encienden con el scroll ----------
      gsap.to(".manifiesto-texto .w", {
        opacity: 1,
        stagger: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".manifiesto-texto",
          start: "top 82%",
          end: "bottom 45%",
          scrub: true,
        },
      });
      gsap.from(".hechos li", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: { trigger: ".hechos", start: "top 86%" },
      });

      gsap.from(".manifiesto-fotos img", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: { trigger: ".manifiesto-fotos", start: "top 84%" },
      });

      // ---------- 3b. Historia: cada párrafo llega despacio ----------
      gsap.utils.toArray<HTMLElement>(".historia-texto > *").forEach((el) => {
        gsap.from(el, {
          y: 34,
          opacity: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // ---------- 4. Aromas: galería horizontal y cambio de clima ----------
      const seccion = document.querySelector<HTMLElement>(".aromas");
      const pista = document.querySelector<HTMLElement>(".track");
      const velas = gsap.utils.toArray<HTMLElement>(".vela");
      let activa = -1;
      const activar = (i: number) => {
        if (i === activa || !velas[i] || !seccion) return;
        activa = i;
        velas.forEach((v, n) => v.classList.toggle("activa", n === i));
        gsap.to(seccion, {
          backgroundColor: velas[i].dataset.clima,
          duration: 0.9,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      const masCentrada = () => {
        const centro = window.innerWidth / 2;
        let mejor = 0;
        let dist = Infinity;
        velas.forEach((v, i) => {
          const b = v.getBoundingClientRect();
          const d = Math.abs(b.left + b.width / 2 - centro);
          if (d < dist) {
            dist = d;
            mejor = i;
          }
        });
        activar(mejor);
      };

      if (seccion && pista) {
        if (celular) {
          pista.addEventListener("scroll", masCentrada, { passive: true });
          limpiar.push(() => pista.removeEventListener("scroll", masCentrada));
          masCentrada();
        } else {
          // La primera vela arranca al centro y la última termina al centro.
          const borde = () => {
            const primera = velas[0];
            return window.innerWidth / 2 - primera.offsetLeft - primera.offsetWidth / 2;
          };
          const fin = () => {
            const ultima = velas[velas.length - 1];
            return window.innerWidth / 2 - ultima.offsetLeft - ultima.offsetWidth / 2;
          };
          gsap.fromTo(
            pista,
            { x: borde },
            {
              x: fin,
              ease: "none",
              scrollTrigger: {
                trigger: ".aromas-pin",
                start: "top top",
                end: () => "+=" + Math.abs(fin() - borde()) * 1.15,
                pin: true,
                scrub: 0.6,
                invalidateOnRefresh: true,
                onUpdate: masCentrada,
                onRefresh: masCentrada,
              },
            },
          );
        }
      }

      // ---------- 5. De oscuro a claro ----------
      // El encabezado cambia de tinta al llegar a la zona clara y se esconde al bajar.
      ScrollTrigger.create({
        trigger: ".comprar",
        start: "top 8%",
        onToggle: (s) => document.body.classList.toggle("claro", s.isActive),
        end: "max",
      });
      ScrollTrigger.create({
        start: 200,
        end: "max",
        onUpdate: (s) =>
          gsap.to(".top", { yPercent: s.direction === 1 ? -130 : 0, duration: 0.5, overwrite: "auto" }),
      });
      gsap.from(".pasos li", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: ".pasos", start: "top 80%" },
      });
      gsap.from(".cierre > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: ".cierre", start: "top 78%" },
      });
    });

    // ---------- Chispas que suben desde la llama ----------
    const lienzo = document.querySelector<HTMLCanvasElement>(".embers");
    const hero = document.querySelector<HTMLElement>(".hero");
    if (lienzo && hero && !quieto) {
      const g = lienzo.getContext("2d");
      const total = celular ? 22 : 64;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      type Chispa = { x: number; y: number; vx: number; vy: number; r: number; vida: number; max: number };
      const chispas: Chispa[] = [];
      let ancho = 0;
      let alto = 0;
      let origen = { x: 0, y: 0 };
      let visible = true;
      let cuadro = 0;

      const medir = () => {
        const h = hero.getBoundingClientRect();
        const f = figura.getBoundingClientRect();
        ancho = h.width;
        alto = h.height;
        lienzo.width = ancho * dpr;
        lienzo.height = alto * dpr;
        origen = {
          x: f.left - h.left + f.width * 0.259,
          y: f.top - h.top + f.height * 0.585,
        };
      };
      const nacer = (c: Partial<Chispa> = {}): Chispa => {
        // La mayoría nace en la llama; algunas flotan por toda la escena.
        const deLlama = Math.random() < 0.6;
        return {
          x: deLlama ? origen.x + gsap.utils.random(-10, 10) : Math.random() * ancho,
          y: deLlama ? origen.y : alto * gsap.utils.random(0.35, 1.05),
          vx: gsap.utils.random(-0.18, 0.18),
          vy: -gsap.utils.random(0.25, deLlama ? 1.05 : 0.5),
          r: gsap.utils.random(0.6, deLlama ? 2 : 1.5),
          vida: 0,
          max: gsap.utils.random(160, 420),
          ...c,
        };
      };
      const pintar = () => {
        cuadro = requestAnimationFrame(pintar);
        if (!g || !visible || !encendida) return;
        g.setTransform(dpr, 0, 0, dpr, 0, 0);
        g.clearRect(0, 0, ancho, alto);
        if (chispas.length < total && Math.random() < 0.25) chispas.push(nacer());
        chispas.forEach((c, i) => {
          c.vida += 1;
          c.x += c.vx + Math.sin((c.vida + i * 40) / 34) * 0.22;
          c.y += c.vy;
          const t = c.vida / c.max;
          const a = Math.sin(Math.min(t, 1) * Math.PI) * 0.9;
          const rad = c.r * 5;
          const grad = g.createRadialGradient(c.x, c.y, 0, c.x, c.y, rad);
          grad.addColorStop(0, `rgba(255, 214, 150, ${a})`);
          grad.addColorStop(0.3, `rgba(240, 132, 40, ${a * 0.55})`);
          grad.addColorStop(1, "rgba(186, 71, 25, 0)");
          g.fillStyle = grad;
          g.beginPath();
          g.arc(c.x, c.y, rad, 0, Math.PI * 2);
          g.fill();
          if (t >= 1 || c.y < -20) chispas[i] = nacer();
        });
      };
      const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
      io.observe(hero);
      medir();
      window.addEventListener("resize", medir);
      cuadro = requestAnimationFrame(pintar);
      limpiar.push(() => {
        cancelAnimationFrame(cuadro);
        io.disconnect();
        window.removeEventListener("resize", medir);
      });
    }

    return () => {
      limpiar.forEach((f) => f());
      ctx.revert();
    };
  }, []);

  return null;
}
