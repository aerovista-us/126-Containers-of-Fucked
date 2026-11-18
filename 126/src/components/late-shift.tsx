import { useState } from "react";
import { BEATS } from "@/lib/episode";
import { EPISODE_02 } from "@/lib/episode-02";
import { EPISODE_03 } from "@/lib/episode-03";
import { EPISODE_04 } from "@/lib/episode-04";
import { EPISODE_EOY } from "@/lib/episode-eoy";
import { EPISODE_05 } from "@/lib/episode-05";
import { EPISODE_05_BOARDS } from "@/lib/episode-05-boards";
import { BibleView } from "@/components/bible-view";
import { Player } from "@/components/player";
import { ScenesView } from "@/components/scenes-view";

type View = "bible" | "scenes" | "boards" | "e05" | "eoy" | "e04" | "e03" | "e02" | "pilot";

export function LateShift() {
  const [view, setView] = useState<View>("e05");

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
            <a
              href="/126-containers.zip"
              download="126-containers.zip"
              className="mt-3 inline-flex min-h-11 items-center bg-ink px-3 font-mono text-xs tracking-widest text-bg uppercase"
            >
              Download all files
            </a>
          </div>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            {(
              [
                ["e05", "Ep 05"],
                ["e04", "Ep 04"],
                ["eoy", "EOY"],
                ["e03", "Ep 03"],
                ["e02", "Ep 02"],
                ["pilot", "Pilot"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setView(id)}
                aria-current={view === id ? "page" : undefined}
                className={`min-h-11 shrink-0 px-3 font-mono text-xs tracking-widest uppercase ${
                  view === id ? "bg-ink text-bg" : "border border-line text-ink"
                }`}
              >
                {label}
              </button>
            ))}
            <span className="mx-1 w-px shrink-0 self-stretch bg-line" aria-hidden />
            {(
              [
                ["boards", "Boards"],
                ["bible", "Bible"],
                ["scenes", "Scenes"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setView(id)}
                aria-current={view === id ? "page" : undefined}
                className={`min-h-11 shrink-0 px-3 font-mono text-xs tracking-widest uppercase ${
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
        ) : view === "boards" ? (
          <Player
            key="boards"
            kicker={EPISODE_05_BOARDS.kicker}
            title={EPISODE_05_BOARDS.title}
            blurb={EPISODE_05_BOARDS.blurb}
            endTitle={EPISODE_05_BOARDS.endTitle}
            beats={EPISODE_05_BOARDS.beats}
          />
        ) : view === "e05" ? (
          <Player
            key="e05"
            kicker={EPISODE_05.kicker}
            title={EPISODE_05.title}
            blurb={EPISODE_05.blurb}
            endTitle={EPISODE_05.endTitle}
            beats={EPISODE_05.beats}
            cut="/scenes/e05-cut.mp4"
          />
        ) : view === "eoy" ? (
          <Player
            key="eoy"
            kicker={EPISODE_EOY.kicker}
            title={EPISODE_EOY.title}
            blurb={EPISODE_EOY.blurb}
            endTitle={EPISODE_EOY.endTitle}
            beats={EPISODE_EOY.beats}
            track="/eoy/track.mp3"
            cut="/scenes/eoy-cut.mp4"
            open
          />
        ) : view === "e04" ? (
          <Player
            key="e04"
            kicker={EPISODE_04.kicker}
            title={EPISODE_04.title}
            blurb={EPISODE_04.blurb}
            endTitle={EPISODE_04.endTitle}
            beats={EPISODE_04.beats}
            cut="/scenes/e04-cut.mp4"
          />
        ) : view === "e03" ? (
          <Player
            key="e03"
            kicker={EPISODE_03.kicker}
            title={EPISODE_03.title}
            blurb={EPISODE_03.blurb}
            endTitle={EPISODE_03.endTitle}
            beats={EPISODE_03.beats}
            cut="/scenes/e03-cut.mp4"
          />
        ) : view === "e02" ? (
          <Player
            key="e02"
            kicker={EPISODE_02.kicker}
            title={EPISODE_02.title}
            blurb={EPISODE_02.blurb}
            endTitle={EPISODE_02.endTitle}
            beats={EPISODE_02.beats}
            cut="/scenes/e02-cut.mp4"
          />
        ) : (
          <Player
            key="pilot"
            kicker="Seven times a felony"
            title="126 Containers"
            blurb="One server room. A union robot. A salesman with a clipboard. A cat who already incorporated."
            endTitle="That's the shift"
            beats={BEATS}
            cut="/scenes/pilot-cut.mp4"
          />
        )}
      </div>
    </main>
  );
}
