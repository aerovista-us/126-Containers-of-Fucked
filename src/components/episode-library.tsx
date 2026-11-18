import { useState } from "react";
import { EPISODES, SPECIAL, type Episode, type EpisodeStatus } from "@/lib/series-registry";

const STATUS: Record<EpisodeStatus, { title: string; className: string }> = {
  playable: { title: "PLAYABLE NOW", className: "text-acid" },
  "media-archived": { title: "MEDIA ARCHIVED", className: "text-amber" },
  "script-draft": { title: "SCRIPT DRAFT", className: "text-amber" },
  concept: { title: "IN DEVELOPMENT", className: "text-muted" },
};

function EpisodeCard({
  episode,
  onPlay,
}: {
  episode: Episode;
  onPlay: (view: "pilot" | "e02") => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const state = STATUS[episode.status];
  return (
    <article className="min-w-0 overflow-hidden border border-line bg-bg">
      <div className="relative aspect-video overflow-hidden bg-black">
        <img
          className="h-full w-full object-cover opacity-90"
          src={episode.image}
          alt=""
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-bg/90 px-3 py-1 font-display text-2xl text-ink">
          EP {episode.number}
        </span>
      </div>
      <div className="space-y-3 p-4">
        <p className={`font-mono text-xs tracking-[0.18em] ${state.className}`}>{state.title}</p>
        <h3 className="font-display text-2xl leading-tight text-ink">{episode.title}</h3>
        <p className="font-mono text-xs text-muted">{episode.subtitle}</p>
        <p className="font-mono text-sm leading-relaxed text-ink">{episode.synopsis}</p>
        <div className="flex flex-wrap gap-2">
          {episode.playable && (
            <button
              type="button"
              className="min-h-11 bg-ink px-4 font-mono text-xs font-bold tracking-wider text-bg uppercase"
              onClick={() => onPlay(episode.playable!)}
            >
              Play episode
            </button>
          )}
          {episode.scriptUrl && (
            <a
              className="inline-flex min-h-11 items-center border border-line px-4 font-mono text-xs tracking-wider text-ink uppercase"
              href={episode.scriptUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read script ↗
            </a>
          )}
          {episode.mediaNote && (
            <button
              className="min-h-11 border border-line px-4 font-mono text-xs tracking-wider text-ink uppercase"
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Hide notes" : "Production notes"}
            </button>
          )}
        </div>
        {expanded && episode.mediaNote && (
          <p className="border-t border-line pt-3 font-mono text-xs leading-relaxed text-muted">
            {episode.mediaNote}
          </p>
        )}
      </div>
    </article>
  );
}

export function EpisodeLibrary({ onPlay }: { onPlay: (view: "pilot" | "e02") => void }) {
  const playable = EPISODES.filter((e) => e.status === "playable").length;
  return (
    <section aria-labelledby="library-title">
      <div className="border-b border-line pb-6">
        <p className="font-mono text-xs tracking-[0.25em] text-mag uppercase">
          ByteCast After Dark / Series archive
        </p>
        <h1
          id="library-title"
          className="mt-2 font-display text-4xl leading-none text-ink sm:text-6xl"
        >
          THE EPISODE VAULT
        </h1>
        <p className="mt-4 max-w-3xl font-mono text-sm leading-relaxed text-muted">
          Six numbered entries in the creative catalog. Only {playable} are playable in this website
          right now. Drafts and external media are labeled as such — no fake release badges.
        </p>
      </div>
      <div className="my-6 grid grid-cols-3 gap-2 sm:gap-4">
        {[
          { value: "06", label: "CATALOG ENTRIES" },
          { value: String(playable).padStart(2, "0"), label: "PLAYABLE HERE" },
          { value: "01", label: "SPECIAL SCRIPT" },
        ].map((stat) => (
          <div key={stat.label} className="border border-line p-3 sm:p-4">
            <div className="font-display text-3xl text-amber sm:text-4xl">{stat.value}</div>
            <div className="mt-1 font-mono text-[10px] tracking-widest text-muted sm:text-xs">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {EPISODES.map((episode) => (
          <EpisodeCard episode={episode} key={episode.id} onPlay={onPlay} />
        ))}
      </div>
      <aside className="mt-8 border border-line bg-bg p-5">
        <p className="font-mono text-xs tracking-widest text-mag uppercase">
          Special / Master screenplay
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink">{SPECIAL.title}</h2>
        <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-muted">
          {SPECIAL.summary}
        </p>
        <a
          className="mt-4 inline-flex min-h-11 items-center border border-line px-4 font-mono text-xs tracking-widest text-ink uppercase"
          href={SPECIAL.scriptUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read master screenplay ↗
        </a>
      </aside>
    </section>
  );
}
