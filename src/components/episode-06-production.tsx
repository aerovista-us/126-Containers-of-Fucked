import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Clapperboard, FileDown, Headphones, Images, ArrowLeft } from "lucide-react";
import { EPISODE_06_SCENES } from "@/lib/episode-06";
import { Episode06MediaLibrary } from "@/components/episode-06-media-library";

export function Episode06Production() {
  const [selected, setSelected] = useState(0);
  const scene = EPISODE_06_SCENES[selected]!;
  const goTo = (index: number) => setSelected((index + EPISODE_06_SCENES.length) % EPISODE_06_SCENES.length);

  return (
    <main className="min-h-dvh overflow-x-hidden bg-bg text-ink">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-7">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-[0.13em] text-muted uppercase transition hover:text-ink"
          >
            <ArrowLeft className="size-4" aria-hidden />
            The episode vault
          </Link>
          <div className="font-display text-2xl tracking-wide sm:text-3xl">126 CONTAINERS <span className="text-mag">OF FUCKED</span></div>
        </header>

        <section className="relative min-h-[350px] overflow-hidden border border-line bg-black sm:min-h-[460px]">
          <img
            src="/episode-06/images/learns-nothing.webp"
            alt="The $29.99 Rabbit Hole episode poster with the cyberpunk Bunny and ensemble"
            className="absolute inset-0 size-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
          <div className="relative flex min-h-[350px] max-w-3xl flex-col justify-end p-5 sm:min-h-[460px] sm:p-10">
            <p className="font-mono text-xs tracking-[0.25em] text-amber uppercase">ByteCast After Dark / Episode 06</p>
            <h1 className="mt-3 font-display text-5xl leading-[0.94] text-ink uppercase sm:text-7xl">
              THE <span className="text-mag">$29.99</span><br /> RABBIT HOLE
            </h1>
            <p className="mt-5 max-w-lg font-mono text-sm leading-relaxed text-ink">
              A charming digital Bunny sells endless possibility. Byte demands evidence.
              Timbr just wants his yellow sticky note to stay where he dragged it.
            </p>
            <span className="mt-5 w-fit border border-amber/60 bg-bg/75 px-3 py-2 font-mono text-[11px] tracking-[0.11em] text-amber uppercase">
              Visual development + soundtrack preview · not a completed film
            </span>
          </div>
        </section>

        <section
          aria-labelledby="e06-audio-title"
          className="mt-5 grid gap-5 border border-mag/35 bg-gradient-to-r from-[#24102e] to-bg p-5 md:grid-cols-[1fr_1.25fr] md:items-center"
        >
          <div>
            <p className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-mag uppercase">
              <Headphones className="size-4" aria-hidden /> Featured original audio
            </p>
            <h2 id="e06-audio-title" className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              One Yellow Sticky Note
            </h2>
            <p className="mt-2 font-mono text-xs leading-relaxed text-muted">
              AeroVista · 6:42 · Concept soundtrack. Plays separately from the scene artwork; no voice-dialogue synchronization is implied.
            </p>
          </div>
          <div>
            <audio
              controls
              preload="metadata"
              className="w-full"
              src="/episode-06/audio/one-yellow-sticky-note.mp3"
              aria-label="Play One Yellow Sticky Note by AeroVista"
            >
              Your browser does not support audio playback.
            </audio>
            <a
              className="mt-2 inline-flex items-center gap-2 font-mono text-xs text-ink underline underline-offset-4 hover:text-mag"
              href="/episode-06/audio/one-yellow-sticky-note.mp3"
              download="One Yellow Sticky Note.mp3"
            >
              Download featured audio
            </a>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="e06-board-title">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="flex items-center gap-2 font-mono text-xs tracking-[0.22em] text-mag uppercase">
                <Clapperboard className="size-4" aria-hidden /> Production storyboard
              </p>
              <h2 id="e06-board-title" className="mt-1 font-display text-4xl text-ink sm:text-5xl">
                SCENE BY SCENE
              </h2>
            </div>
            <p className="font-mono text-xs text-muted">15 beats · teaser to post-credit · concept frames</p>
          </div>

          <div className="overflow-hidden border border-line bg-black">
            <div className="relative aspect-video bg-[#170b28]">
              <img
                key={scene.id}
                src={scene.image}
                alt={`Episode 06 storyboard illustration for ${scene.title}`}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-3 top-3 bg-bg/85 px-3 py-2 font-mono text-xs tracking-wider text-ink">
                {scene.label} / {scene.time}
              </span>
              <span className="absolute bottom-3 right-3 bg-bg/85 px-3 py-2 font-mono text-xs tracking-wider text-muted">
                {selected + 1} / {EPISODE_06_SCENES.length}
              </span>
            </div>
            <div className="grid gap-5 p-4 sm:p-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="font-mono text-xs tracking-widest text-amber uppercase">{scene.act}</p>
                <h3 className="mt-1 font-display text-3xl text-ink sm:text-4xl">{scene.title}</h3>
                <p className="mt-2 max-w-3xl font-mono text-sm leading-relaxed text-muted">{scene.description}</p>
                <p className="mt-3 border-l-2 border-mag pl-3 font-mono text-sm italic text-ink">“{scene.keyLine}”</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => goTo(selected - 1)}
                  className="inline-flex min-h-11 items-center gap-2 border border-line px-4 font-mono text-xs text-ink hover:border-mag"
                  aria-label="Previous scene"
                >
                  <ChevronLeft className="size-4" aria-hidden /> Prev
                </button>
                <button
                  type="button"
                  onClick={() => goTo(selected + 1)}
                  className="inline-flex min-h-11 items-center gap-2 bg-ink px-4 font-mono text-xs font-bold text-bg hover:bg-mag"
                  aria-label="Next scene"
                >
                  Next <ChevronRight className="size-4" aria-hidden />
                </button>
              </div>
            </div>
          </div>

          <p className="mt-4 flex items-center gap-2 font-mono text-xs tracking-widest text-muted uppercase">
            <Images className="size-4" aria-hidden /> Select a storyboard frame
          </p>
          <ol className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {EPISODE_06_SCENES.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  aria-current={index === selected ? "step" : undefined}
                  onClick={() => setSelected(index)}
                  className={`group h-full w-full overflow-hidden border text-left transition-colors ${index === selected ? "border-mag bg-[#24102e]" : "border-line bg-bg hover:border-muted"}`}
                >
                  <img src={item.image} alt="" loading="lazy" className="aspect-video w-full object-cover" />
                  <div className="space-y-1 px-3 py-3">
                    <p className="font-mono text-[10px] tracking-widest text-mag uppercase">{item.label}</p>
                    <p className="font-mono text-xs leading-snug text-ink">{item.title}</p>
                  </div>
                </button>
              </li>
            ))}
          </ol>
        </section>

        <Episode06MediaLibrary />

        <section className="mt-10 grid gap-5 border-t border-line pt-8 md:grid-cols-2">
          <div className="border border-line p-5">
            <p className="font-mono text-xs tracking-widest text-mag uppercase">Production resources</p>
            <h2 className="mt-2 font-display text-3xl text-ink">CUE & ASSET FILES</h2>
            <p className="mt-3 font-mono text-sm leading-relaxed text-muted">
              The directed cue sheet keeps scene and character IDs for assembling voice takes. The media manifest records which archive originals correspond to these web-ready images.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                className="inline-flex min-h-11 items-center gap-2 border border-line px-4 font-mono text-xs tracking-wide text-ink hover:border-mag"
                href="/episode-06/E06_CUE_SHEET_DIRECTED.csv"
                download
              >
                <FileDown className="size-4" aria-hidden /> Dialogue cue sheet
              </a>
              <a
                className="inline-flex min-h-11 items-center gap-2 border border-line px-4 font-mono text-xs tracking-wide text-ink hover:border-mag"
                href="/episode-06/manifest.json"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown className="size-4" aria-hidden /> Image manifest
              </a>
            </div>
          </div>
          <div className="border border-line p-5">
            <p className="font-mono text-xs tracking-widest text-amber uppercase">Production status</p>
            <h2 className="mt-2 font-display text-3xl text-ink">WHAT'S ACTUALLY READY</h2>
            <p className="mt-3 font-mono text-sm leading-relaxed text-muted">
              Scene concept art and one original audio recording are wired and accessible.
              The complete Episode 06 dialogue, Future Timbr narration, sound-design track,
              lip sync, edit, and final video master are still separate production work.
            </p>
            <p className="mt-4 font-mono text-xs leading-relaxed text-muted">
              Fictional satire. Visual similarity or an on-screen brand label does not establish source-code reuse, ownership, or wrongdoing by a real person.
            </p>
          </div>
        </section>
        <footer className="mt-10 border-t border-line py-6 font-mono text-xs text-muted">
          AeroVista · ByteCast After Dark · Episode 06 visual development
        </footer>
      </div>
    </main>
  );
}
