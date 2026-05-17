import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Panel } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { conclusionPoints } from "@/data/content";

export default function ConclusionPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Dernier tour"
        title="Conclusion"
        lead="Ce portfolio ne raconte pas une ligne droite. J’y montre une progression faite de reprises, de doutes corrigés par le terrain et d’une ambition devenue plus précise."
      >
        <Panel className="speed-line">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
            Direction
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-white">
            Expérience client, événementiel premium, branding automobile.
          </h2>
          <p className="mt-5 leading-7 text-steel">
            Une trajectoire ambitieuse, mais construite à partir d’expériences réelles: projets, stage, événements, rencontres et observation du luxe automobile.
          </p>
        </Panel>
      </Hero>

      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                Transformation
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
                De l’ouverture à la direction.
              </h2>
              <p className="mt-6 leading-8 text-steel">
                J’avais choisi le marketing parce que la formation ouvrait des possibilités. Aujourd’hui, j’en sors avec une lecture plus nette de moi-même: je connais aussi les points que je dois renforcer, mais je sais surtout vers quel environnement professionnel je veux avancer.
              </p>
            </div>
          </Reveal>
          <div className="space-y-4">
            {conclusionPoints.map((point, index) => (
              <Reveal key={point} delay={index * 0.05}>
                <div className="grid gap-4 border border-white/10 bg-white/[0.055] p-5 md:grid-cols-[4rem_1fr]">
                  <span className="font-display text-4xl text-champagne">{index + 1}</span>
                  <p className="leading-8 text-steel">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-radial-track px-5 py-24 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-ember">
              Ligne d’arrivée provisoire
            </p>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-tight text-white md:text-7xl">
              Avancer avec précision, pas avec certitude absolue.
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-steel">
              Mon prochain objectif n’est pas de prétendre déjà maîtriser le luxe automobile. C’est d’y entrer avec sérieux, culture, méthode et écoute. Je dois encore progresser dans la structuration des plans d’action et la définition des KPI, mais la direction est enfin claire.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-asphalt transition hover:bg-champagne"
            >
              Ouvrir le paddock contact
            </Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
