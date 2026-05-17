import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Panel } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { automotiveSignals, ferrariDirection, festinaLearning, festinaMissions, visuals } from "@/data/content";

export default function TrajectoirePage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Trajectoire"
        title="Parcours & trajectoire"
        lead="Deux axes structurent aujourd’hui mon identité professionnelle: l’expérience concrète chez Festina Lotus Belgium et une ambition assumée dans l’univers automobile de luxe."
      >
        <Panel>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
            Axe principal
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-white">
            Festina Lotus Belgium
          </h2>
          <p className="mt-5 leading-7 text-steel">
            Onze semaines dans un groupe horloger B2B du Benelux, au contact de campagnes, de données, de partenaires et d’enjeux d’image.
          </p>
        </Panel>
      </Hero>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                Axe 1
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
                Le terrain comme accélérateur.
              </h2>
              <p className="mt-6 leading-8 text-steel">
                Chez Festina Lotus Belgium, j’ai découvert une réalité différente des simulations: des bijoutiers à soutenir, une image à ajuster, des données à interpréter et des campagnes à rendre utiles pour le réseau.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {festinaMissions.map((mission, index) => (
              <Reveal key={mission} delay={index * 0.04}>
                <div className="flex gap-4 border border-white/10 bg-white/[0.055] p-5">
                  <span className="font-display text-3xl text-champagne">{String(index + 1).padStart(2, "0")}</span>
                  <p className="leading-7 text-steel">{mission}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="speed-line bg-white/[0.045] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <Reveal>
            <Panel className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ember">
                Initiative Swiss Made
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold text-white">
                Valoriser la qualité sans court-circuiter le réseau.
              </h2>
              <p className="mt-5 leading-8 text-steel">
                Mon concept de campagne visait à renforcer l’image Swiss Made par de l’affichage hors domicile proche des points de vente, avec des pistes JCDecaux et Bauer Media. L’objectif n’était pas de vendre directement au client final, mais de soutenir les bijoutiers en donnant plus de désirabilité à la marque.
              </p>
              <p className="mt-5 leading-8 text-white/72">
                La frustration de ne pas avoir pu exécuter entièrement cette idée avant la fin du stage reste importante: elle montre surtout que je ne voulais pas seulement produire une recommandation, mais aller jusqu’à l’impact.
              </p>
            </Panel>
          </Reveal>
          <Reveal delay={0.08}>
            <Panel className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                Savoir-agir
              </p>
              <div className="mt-6 space-y-5">
                {festinaLearning.map((item) => (
                  <div key={item} className="border-l border-rosso pl-4">
                    <p className="leading-7 text-steel">{item}</p>
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                Axe 2
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
                Le luxe automobile comme horizon professionnel.
              </h2>
              <p className="mt-6 leading-8 text-steel">
                Le métier que je vise est celui d’Experience Manager dans une marque automobile de luxe. Ma candidature chez Ferrari Francorchamps Motors Brussels m’a permis de découvrir ce rôle et de comprendre qu’il représentait le point de convergence entre l’univers premium, l’expérience client, le storytelling émotionnel, l’événementiel et une passion automobile construite avec sérieux.
              </p>
              <div className="mt-8 grid gap-3">
                {automotiveSignals.map((signal) => (
                  <p key={signal} className="border-b border-white/10 pb-3 leading-7 text-white/72">
                    {signal}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid gap-5">
            {ferrariDirection.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <Panel>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                    Ferrari {index + 1}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-steel">{item.body}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <EditorialImage
            src={visuals.track.src}
            alt={visuals.track.alt}
            caption={visuals.track.caption}
            className="min-h-[32rem]"
          />
          <EditorialImage
            src={visuals.detail.src}
            alt={visuals.detail.alt}
            caption={visuals.detail.caption}
            className="min-h-[32rem]"
          />
        </div>
      </section>

      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-3xl text-xl leading-9 text-white/88">
                La direction Ferrari n’est donc pas seulement liée à une marque qui me fait rêver. Elle m’a aidé à clarifier une trajectoire professionnelle concrète, centrée sur la relation, l’événement, l’image, l’émotion et la précision dans un secteur où chaque détail raconte la marque.
              </p>
              <Link
                href="/conclusion"
                className="inline-flex shrink-0 items-center border border-rosso/60 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-rosso"
              >
                Entrer dans le dernier tour
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
