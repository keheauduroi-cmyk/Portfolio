import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Panel } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";

function LinkedinMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Paddock contact"
        title="Entrer en relation"
        lead="Je vois le contact professionnel comme le début d’une expérience: un échange clair, précis, humain, avec la même attention que celle que j’aimerais apporter à une marque premium."
      >
        <Panel className="speed-line">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
            Disponibilité
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-white">
            Ouvert aux échanges autour du marketing, de l’expérience client et du luxe automobile.
          </h2>
          <p className="mt-5 leading-7 text-steel">
            Je souhaite construire une trajectoire professionnelle dans un environnement où l’image, l’événementiel et la relation client demandent autant de rigueur que de sensibilité.
          </p>
        </Panel>
      </Hero>

      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                Point de contact
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
                Une conversation peut ouvrir la bonne porte.
              </h2>
              <p className="mt-6 leading-8 text-steel">
                Mon objectif est simple: continuer à apprendre auprès de professionnels exigeants, comprendre les codes des marques premium et contribuer à des expériences qui dépassent la transaction.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Panel>
              <div className="grid gap-4">
                <a
                  href="https://www.linkedin.com/in/keheauduroi"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-5 border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:border-rosso/70 hover:bg-rosso/12 hover:shadow-redline"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center border border-white/12 bg-white/[0.06] text-white transition duration-300 group-hover:border-rosso/70 group-hover:text-champagne">
                      <LinkedinMark />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                        LinkedIn
                      </span>
                      <span className="mt-1 block text-lg text-white">
                        linkedin.com/in/keheauduroi
                      </span>
                    </span>
                  </span>
                  <span className="text-sm uppercase tracking-[0.18em] text-white/68 transition group-hover:text-white">
                    Ouvrir
                  </span>
                </a>

                <a
                  href="mailto:keheau@duroi.org"
                  className="group flex items-center justify-between gap-5 border border-white/10 bg-white/[0.045] p-5 transition duration-300 hover:border-champagne/70 hover:bg-white/[0.075]"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                      E-mail
                    </span>
                    <span className="mt-1 block text-lg text-white">
                      keheau@duroi.org
                    </span>
                  </span>
                  <span className="text-sm uppercase tracking-[0.18em] text-white/68 transition group-hover:text-white">
                    Écrire
                  </span>
                </a>
              </div>
            </Panel>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
          <Link
            href="/"
            className="inline-flex items-center border border-rosso/60 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-rosso"
          >
            Retour à la grille de départ
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
