import { useState } from "react";
import { BEATS } from "@/lib/episode";
import { EPISODE_02 } from "@/lib/episode-02";
import { BibleView } from "@/components/bible-view";
import { Player } from "@/components/player";
import { ScenesView } from "@/components/scenes-view";

type View = "bible" | "scenes" | "e02" | "pilot";

export function LateShift() {
  const [view, setView] = useState<View>("e02");

  return (
    <main className="min-h-dvh bg-bg text-ink">
      <div className="mx-auto flex min-h-dvh w-full max-w-6xl min-w-0 flex-col px-4 py-4 sm:px-6 sm:py-6">
        <header className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl leading-none tracking-wide text-ink sm:text-4xl">
              126 CONTAINERS
            </p>
            <p className="mt-1 font-mono text-xs tracking-widest text-muted uppercase">
              of fucked · aerovista
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["bible", "Bible"],
                ["scenes", "Scenes"],
                ["e02", "Ep 02"],
                ["pilot", "Pilot"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setView(id)}
                className={`min-h-11 px-3 font-mono text-xs tracking-widest uppercase ${
                  view === id ? "bg-ink text-bg" : "border border-line text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </header>

        {view === "bible" ? (
          <BibleView />
        ) : view === "scenes" ? (
          <ScenesView />
        ) : view === "e02" ? (
          <Player
            key="e02"
            kicker={EPISODE_02.kicker}
            title={EPISODE_02.title}
            blurb={EPISODE_02.blurb}
            endTitle={EPISODE_02.endTitle}
            beats={EPISODE_02.beats}
          />
        ) : (
          <Player
            key="pilot"
            kicker="Seven times a felony"
            title="126 Containers"
            blurb="One server room. A union robot. A salesman with a clipboard. A cat who already incorporated."
            endTitle="That's the shift"
            beats={BEATS}
          />
        )}
      </div>
    </main>
  );
}
