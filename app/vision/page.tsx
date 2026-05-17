import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Panel } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { visionPrinciples, visuals } from "@/data/content";

export default function VisionPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Tableau de bord"
        title="Ma vision du marketeur"
        lead="Le marketing n’est pas seulement l’art de rendre une offre visible. C’est une manière de comprendre ce qu’une personne ressent, compare, retient et associe à une marque."
      >
        <div className="grid gap-3">
          {["Donnée", "Créativité", "Perception", "Expérience"].map((item, index) => (
            <div key={item} className="flex items-center gap-4 border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
              <span className="font-display text-3xl text-champagne">0{index + 1}</span>
              <span className="text-sm uppercase tracking-[0.22em] text-white/70">{item}</span>
              <span className="ml-auto h-2 w-24 bg-white/10">
                <span className="block h-full bg-rosso" style={{ width: `${62 + index * 9}%` }} />
              </span>
            </div>
          ))}
        </div>
      </Hero>

      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                Lecture du métier
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
                Un équilibre entre analyse et sensation.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {visionPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.05}>
                <Panel className="h-full">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                    Principe {index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-4 leading-7 text-steel">
                    {principle.body}
                  </p>
                </Panel>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 border-l-2 border-rosso pl-6">
              <p className="max-w-4xl text-xl leading-9 text-white/88">
                Ma vision s’est clarifiée quand les exercices scolaires ont rencontré des situations réelles: campagnes mesurées, retours clients, relation partenaire, image de marque à protéger et expérience à rendre cohérente.
              </p>
              <Link
                href="/trajectoire"
                className="mt-7 inline-flex items-center bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-asphalt transition hover:bg-champagne"
              >
                Suivre la trajectoire
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <EditorialImage
            src={visuals.dashboard.src}
            alt={visuals.dashboard.alt}
            caption={visuals.dashboard.caption}
            className="min-h-[28rem]"
          />
          <Reveal>
            <div className="border-l border-rosso pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                Lecture client
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
                Le détail n’est jamais neutre.
              </h2>
              <p className="mt-6 leading-8 text-steel">
                Dans une campagne, un événement ou une relation B2B, je regarde les détails comme des signaux: un taux d’ouverture, une remarque de bijoutier, une incohérence de ton, une promesse trop directe. C’est souvent là que l’image d’une marque se renforce ou se fragilise.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
