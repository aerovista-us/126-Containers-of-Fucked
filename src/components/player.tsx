import { useEffect, useRef, useState } from "react";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import type { Beat, Speaker } from "@/lib/episode";

const SPEAKER_COLOR: Record<Speaker, string> = {
  BOOTH: "text-muted",
  TIM: "text-amber",
  NXCORE: "text-acid",
  BYTE: "text-mag",
  SAM: "text-mag",
  VESPER: "text-ink",
  DATFUCKER: "text-amber",
  EOD: "text-amber",
  EOW: "text-mag",
  EOM: "text-ink",
  EOY: "text-mag",
  PCP: "text-acid",
  GHOST: "text-muted",
  VOICE: "text-muted",
  PAPER: "text-amber",
  CHROME: "text-acid",
  COMPLIANCE: "text-ink",
  NOX: "text-mag",
  DEMON: "text-amber",
};

const SPEAKER_LABEL: Record<Speaker, string> = {
  BOOTH: "AeroVista",
  TIM: "Timbr",
  NXCORE: "NXCore",
  BYTE: "Byte",
  SAM: "Sam",
  VESPER: "Vesper",
  DATFUCKER: "Datfucker",
  EOD: "EOD",
  EOW: "EOW",
  EOM: "EOM",
  EOY: "EOY",
  PCP: "PCP Five",
  GHOST: "44 days",
  VOICE: "System",
  PAPER: "The plan",
  CHROME: "Chrome",
  COMPLIANCE: "Compliance Prime",
  NOX: "Nox",
  DEMON: "The shortcut",
};

export function Player({
  kicker,
  title,
  blurb,
  endTitle,
  beats,
}: {
  kicker: string;
  title: string;
  blurb: string;
  endTitle: string;
  beats: Beat[];
}) {
  const last = beats.length - 1;
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const beat = beats[index]!;
  const isVideo = beat.visual.endsWith(".mp4");

  useEffect(() => {
    if (!started || paused) return;
    const current = beats[index]!;
    let cancelled = false;
    let timer = 0;

    const go = () => {
      if (cancelled) return;
      if (index >= last) {
        setAtEnd(true);
        return;
      }
      setIndex((i) => (i >= last ? i : i + 1));
    };

    if (!current.audio || muted) {
      timer = window.setTimeout(go, current.hold);
      return () => {
        cancelled = true;
        window.clearTimeout(timer);
      };
    }

    const audio = new Audio(current.audio);
    audioRef.current = audio;
    audio.onended = go;
    audio.onerror = () => {
      timer = window.setTimeout(go, current.hold);
    };
    audio.play().catch(() => {
      timer = window.setTimeout(go, current.hold);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      audio.onended = null;
      audio.pause();
      audioRef.current = null;
    };
  }, [started, paused, index, muted, beats, last]);

  const jump = (next: number) => {
    const clamped = Math.max(0, Math.min(last, next));
    setAtEnd(false);
    setPaused(false);
    setIndex(clamped);
  };

  const replay = () => {
    setAtEnd(false);
    setPaused(false);
    setStarted(true);
    setIndex(0);
  };

  return (
    <>
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        {isVideo ? (
          <video
            key={beat.visual}
            className="h-full w-full object-cover"
            src={beat.visual}
            poster={beat.poster}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img src={beat.visual} alt="" className="still-drift h-full w-full object-cover" />
        )}
        <div className="scanlines pointer-events-none absolute inset-0" />

        {started && (
          <>
            <div className="pointer-events-none absolute top-3 left-3 font-display text-sm tracking-widest text-ink">
              126 CONTAINERS
            </div>
            <div className="pointer-events-none absolute top-3 right-3 font-mono text-xs tracking-widest text-ink uppercase">
              {beat.chapter}
            </div>
          </>
        )}

        {started && (
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Next line"
            onClick={() => (atEnd ? replay() : jump(index + 1))}
          />
        )}

        {started && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-bg/80 px-4 py-3 sm:px-5 sm:py-4">
            {beat.speaker && (
              <p className={`font-mono text-xs tracking-[0.22em] uppercase ${SPEAKER_COLOR[beat.speaker]}`}>
                {SPEAKER_LABEL[beat.speaker]}
              </p>
            )}
            <p
              className="mt-1 min-h-12 font-mono text-sm leading-snug text-ink sm:min-h-14 sm:text-base"
              aria-live="polite"
            >
              {beat.line}
            </p>
          </div>
        )}

        {!started && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg/72 px-6 text-center">
            <p className="font-mono text-xs tracking-[0.28em] text-amber uppercase">{kicker}</p>
            <p className="mt-3 font-display text-4xl leading-none text-ink sm:text-6xl">{title}</p>
            <p className="mt-4 max-w-md font-mono text-sm leading-relaxed text-muted">{blurb}</p>
            <button
              type="button"
              onClick={() => {
                setStarted(true);
                setIndex(0);
                setAtEnd(false);
                setPaused(false);
              }}
              className="mt-6 inline-flex min-h-11 items-center gap-2 bg-ink px-6 font-display text-lg tracking-widest text-bg"
            >
              <Play className="size-4 fill-current" aria-hidden />
              Tune in
            </button>
          </div>
        )}

        {atEnd && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg/55 px-6 text-center">
            <p className="font-display text-4xl text-ink sm:text-6xl">{endTitle}</p>
            <button
              type="button"
              onClick={replay}
              className="pointer-events-auto mt-6 inline-flex min-h-11 items-center gap-2 bg-ink px-6 font-display text-lg tracking-widest text-bg"
            >
              <Play className="size-4 fill-current" aria-hidden />
              Watch again
            </button>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous line"
            disabled={!started || index === 0}
            onClick={() => jump(index - 1)}
            className="inline-flex size-11 items-center justify-center border border-line text-ink disabled:opacity-40"
          >
            <SkipBack className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label={paused ? "Play" : "Pause"}
            disabled={!started || atEnd}
            onClick={() => setPaused((p) => !p)}
            className="inline-flex size-11 items-center justify-center border border-line text-ink disabled:opacity-40"
          >
            {paused ? <Play className="size-4 fill-current" aria-hidden /> : <Pause className="size-4" aria-hidden />}
          </button>
          <button
            type="button"
            aria-label="Next line"
            disabled={!started || atEnd}
            onClick={() => jump(index + 1)}
            className="inline-flex size-11 items-center justify-center border border-line text-ink disabled:opacity-40"
          >
            <SkipForward className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            className="ml-1 min-h-11 px-3 font-mono text-xs tracking-widest text-muted uppercase"
          >
            {muted ? "Sound off" : "Sound on"}
          </button>
        </div>
        <p className="font-mono text-xs tracking-widest text-muted">
          {String(index + 1).padStart(2, "0")} / {String(beats.length).padStart(2, "0")}
        </p>
      </div>

      <div className="mt-3 h-1 w-full bg-line">
        <div className="h-full bg-mag" style={{ width: `${last === 0 ? 0 : (index / last) * 100}%` }} />
      </div>
    </>
  );
}
