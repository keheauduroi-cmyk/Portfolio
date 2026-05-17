import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { Hero } from "@/components/Hero";
import { MetricStrip } from "@/components/MetricStrip";
import { PageShell } from "@/components/PageShell";
import { Panel } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { TrackTimeline } from "@/components/TrackTimeline";
import { identity, visuals } from "@/data/content";

export default function Home() {
  return (
    <PageShell>
      <Hero
        eyebrow="Grille de départ"
        title={identity.name}
        lead="Un e-portfolio de marketing construit comme une trajectoire: d’un choix d’études ouvert à une ambition précise dans l’expérience client automobile de luxe."
        backgroundVideoSrc="/videos/aston-martin-db12-cinematic-faststart.mp4"
      >
        <Panel className="speed-line">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
            Profil actuel
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-white">
            {identity.title}
          </h2>
          <p className="mt-5 leading-7 text-steel">
            {identity.ambition}
          </p>
          <div className="mt-8 h-2 overflow-hidden bg-white/10">
            <div className="h-full w-[78%] bg-gradient-to-r from-rosso to-champagne" />
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/68">
            Maturité en construction, direction déjà claire
          </p>
        </Panel>
      </Hero>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MetricStrip />
        </div>
      </section>

      <section className="px-5 pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                Qui suis-je ?
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
                Une progression plus qu’une pose.
              </h2>
              <p className="mt-6 leading-8 text-steel">
                Je ne suis pas entré en marketing avec une certitude romantique. J’ai choisi une formation large, parce qu’elle ouvrait plusieurs portes. Ce sont les projets, les tensions, les reprises et le terrain qui ont donné du sens à mon choix.
              </p>
              <Link
                href="/vision"
                className="mt-8 inline-flex items-center border border-rosso/60 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-rosso"
              >
                Ouvrir le tableau de bord
              </Link>
              <EditorialImage
                src={visuals.ignition.src}
                alt={visuals.ignition.alt}
                caption={visuals.ignition.caption}
                className="mt-10 min-h-[22rem]"
              />
            </div>
          </Reveal>
          <TrackTimeline />
        </div>
      </section>
    </PageShell>
  );
}
