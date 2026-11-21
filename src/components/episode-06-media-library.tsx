import { useMemo, useState } from "react";
import { Images, Music2, FileJson } from "lucide-react";
import { EP06_MEDIA } from "@/lib/episode-06-media";

export function Episode06MediaLibrary() {
  const [group, setGroup] = useState("All");
  const [track, setTrack] = useState(1);
  const categories = useMemo(() => ["All", ...new Set(EP06_MEDIA.images.map((i) => i.group))], []);
  const images = EP06_MEDIA.images.filter((i) => group === "All" || i.group === group);
  const current = EP06_MEDIA.audio[track]!;
  const duration = current.durationSeconds;
  return (
    <section className="mt-10 border-t border-line pt-8" aria-labelledby="e06-media-heading">
      <p className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-mag uppercase">
        <Images className="size-4" aria-hidden /> Updated NXCore media
      </p>
      <h2 id="e06-media-heading" className="mt-1 font-display text-4xl text-ink uppercase sm:text-5xl">
        THE PRODUCTION VAULT
      </h2>
      <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-muted">
        New and relocated source media, indexed without altering originals. Additional
        character studies and audio production tracks, not a finished Episode 06 film.
        Human-style Bunny studies are alternative designs, not the canonical anthropomorphic Bunny.
      </p>
      <div className="mt-6 grid gap-5 border border-line bg-[#180d23] p-4 sm:p-6 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-mag uppercase">
            <Music2 className="size-4" aria-hidden /> Audio archive · {EP06_MEDIA.audio.length} tracks
          </p>
          <h3 className="mt-2 font-display text-3xl text-ink">{current.title}</h3>
          <p className="mt-2 font-mono text-xs text-muted">
            {duration == null ? "Duration unavailable" : Math.floor(duration / 60) + ":" + String(Math.floor(duration % 60)).padStart(2, "0")} · Original audio asset
          </p>
          <audio
            key={current.src}
            src={current.src}
            controls
            preload="metadata"
            className="mt-4 w-full"
            aria-label={"Play " + current.title}
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {EP06_MEDIA.audio.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setTrack(i)}
              aria-pressed={track === i}
              className={"min-h-11 border px-3 py-3 text-left font-mono text-xs leading-snug transition " +
                (track === i ? "border-mag bg-mag/15 text-ink" : "border-line text-muted hover:border-mag hover:text-ink")}
            >
              {String(i + 1).padStart(2, "0")} / {item.title}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-9 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs tracking-widest text-amber uppercase">
          Image studies · {images.length} shown of {EP06_MEDIA.images.length}
        </p>
        <a
          href="/episode-06/media-inventory.json"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 font-mono text-xs text-ink underline underline-offset-4 hover:text-mag"
        >
          <FileJson className="size-4" aria-hidden /> Full source inventory
        </a>
      </div>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter production art by character">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={group === item}
            onClick={() => setGroup(item)}
            className={"min-h-11 border px-3 font-mono text-xs " +
              (group === item ? "border-mag bg-mag/15 text-ink" : "border-line text-muted hover:border-mag hover:text-ink")}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((item) => (
          <a
            key={item.src}
            href={item.src}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden border border-line bg-bg hover:border-mag"
            aria-label={"Open full-size study: " + item.title}
          >
            <img
              src={item.src}
              alt={item.group + ": " + item.title}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-200 group-hover:scale-[1.025]"
            />
            <div className="p-3">
              <p className="font-mono text-[10px] tracking-wider text-mag">{item.group}</p>
              <p className="mt-1 font-mono text-xs leading-snug text-ink">{item.title}</p>
            </div>
          </a>
        ))}
      </div>
      <p className="mt-4 font-mono text-xs text-muted">
        The 41 archived video files remain on NXCore under the external media-storage workflow.
        This gallery does not imply those cuts are published or approved.
      </p>
    </section>
  );
}
