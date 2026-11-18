import { useEffect, useMemo, useRef, useState } from "react";
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
  SQUARE: "text-acid",
  CAPSULE: "text-mag",
  GUARD: "text-amber",
  LEDGER: "text-amber",
  FUTURE: "text-ink",
  MINI: "text-acid",
  TRACK: "text-acid",
  FRIDGE: "text-muted",
  APP: "text-mag",
  CLONE: "text-acid",
  CHECK: "text-acid",
  SKELETON: "text-muted",
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
  SQUARE: "Squarelord",
  CAPSULE: "Capsule",
  GUARD: "Guardrails",
  LEDGER: "Ledger",
  FUTURE: "Future Timbr",
  MINI: "Mini Timbr",
  TRACK: "Track",
  FRIDGE: "Fridge",
  APP: "App",
  CLONE: "Avcc",
  CHECK: "Green check",
  SKELETON: "August backup",
};

export function Player({
  kicker,
  title,
  blurb,
  endTitle,
  beats,
  cut,
  track,
  open,
  repeat,
}: {
  kicker: string;
  title: string;
  blurb: string;
  endTitle: string;
  beats: Beat[];
  cut?: string;
  track?: string;
  open?: boolean;
  /** When the last line ends, start the cut again instead of the end card. */
  repeat?: boolean;
}) {
  const last = beats.length - 1;
  const [script, setScript] = useState(Boolean(open) || !cut);
  const [started, setStarted] = useState(Boolean(open));
  const [soundBlocked, setSoundBlocked] = useState(Boolean(track));
  const [armed, setArmed] = useState(!track);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const [muted, setMuted] = useState(false);
  const [clock, setClock] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const trackRef = useRef<HTMLAudioElement | null>(null);
  const seekNext = useRef(false);
  const beat = beats[index]!;
  const isVideo = beat.visual.endsWith(".mp4");
  const starts = useMemo(() => {
    const marks: number[] = [];
    let cursor = 0;
    for (const item of beats) {
      marks.push(cursor);
      cursor += item.hold;
    }
    return marks;
  }, [beats]);
  const runtime = useMemo(() => {
    const seconds = Math.round(beats.reduce((sum, item) => sum + item.hold, 0) / 1000);
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
  }, [beats]);
  const canHear = Boolean(track) || beats.some((item) => item.audio);

  useEffect(() => {
    if (!started || paused || !armed) return;
    const current = beats[index]!;
    let cancelled = false;
    let timer = 0;

    const go = () => {
      if (cancelled) return;
      if (index >= last) {
        if (repeat) {
          setIndex(0);
          setClock((n) => n + 1);
          return;
        }
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
  }, [started, paused, armed, index, muted, beats, last, clock, repeat]);

  useEffect(() => {
    if (!track || !started) return;
    const audio = new Audio(track);
    trackRef.current = audio;
    audio.onended = () => setAtEnd(true);
    return () => {
      audio.onended = null;
      audio.pause();
      trackRef.current = null;
    };
  }, [track, started]);

  useEffect(() => {
    const audio = trackRef.current;
    if (!audio || !armed) return;
    if (paused || muted || atEnd) audio.pause();
    else if (audio.paused) audio.play().catch(() => {});
  }, [paused, muted, atEnd, armed]);

  useEffect(() => {
    if (!seekNext.current) return;
    seekNext.current = false;
    const audio = trackRef.current;
    if (audio) audio.currentTime = (starts[index] ?? 0) / 1000;
  }, [index, starts]);

  const jump = (next: number) => {
    const clamped = Math.max(0, Math.min(last, next));
    seekNext.current = true;
    setAtEnd(false);
    setPaused(false);
    setIndex(clamped);
  };

  const autoplay = () => {
    setStarted(true);
    setArmed(true);
    setPaused(false);
    setMuted(false);
    setAtEnd(false);
    seekNext.current = false;
    setIndex(0);
    setClock((n) => n + 1);
    if (!track) return;
    const audio = trackRef.current ?? new Audio(track);
    trackRef.current = audio;
    audio.onended = () => setAtEnd(true);
    audio.currentTime = 0;
    audio
      .play()
      .then(() => setSoundBlocked(false))
      .catch(() => setSoundBlocked(true));
  };

  return (
    <>
      {cut && !script ? (
        <div>
          <p className="font-mono text-xs tracking-widest text-amber uppercase">{kicker}</p>
          <div className="mt-1 flex items-end justify-between gap-3">
            <p className="font-display text-3xl leading-none text-ink">{title}</p>
            <p className="font-mono text-xs tracking-widest text-muted tabular-nums">{runtime}</p>
          </div>
          <p className="mt-2 max-w-xl font-mono text-sm leading-relaxed text-muted">{blurb}</p>
          <div className="relative mt-3 aspect-video w-full overflow-hidden border border-line bg-bg">
            <video
              className="h-full w-full"
              src={cut}
              poster="/cartoon/series.jpg"
              controls
              playsInline
              preload="metadata"
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setScript(true)}
              className="inline-flex min-h-11 items-center border border-line px-3 font-mono text-xs tracking-widest text-ink uppercase"
            >
              Line by line
            </button>
            <a
              href={cut}
              download
              className="inline-flex min-h-11 items-center bg-ink px-3 font-mono text-xs tracking-widest text-bg uppercase"
            >
              Download
            </a>
          </div>
        </div>
      ) : (
        <>
      <div className="relative aspect-video w-full overflow-hidden bg-bg">
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
            onClick={() => {
              if (soundBlocked || (track && !armed)) {
                autoplay();
                return;
              }
              if (atEnd) autoplay();
              else jump(index + 1);
            }}
          />
        )}

        {started && track && !armed && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              autoplay();
            }}
            className="absolute top-14 left-1/2 z-10 inline-flex min-h-11 -translate-x-1/2 items-center gap-2 bg-ink px-5 font-display text-lg tracking-widest text-bg active:opacity-80"
          >
            <Play className="size-4 fill-current" aria-hidden />
            Autoplay
          </button>
        )}

        {started && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-bg/80 px-4 py-3 sm:px-5 sm:py-4">
            {beat.speaker && (
              <p className={`font-mono text-xs tracking-widest uppercase ${SPEAKER_COLOR[beat.speaker]}`}>
                {SPEAKER_LABEL[beat.speaker]}
              </p>
            )}
            <p
              className="mt-1 line-clamp-4 min-h-12 font-mono text-sm leading-snug text-ink sm:min-h-14 sm:text-base"
              aria-live="polite"
            >
              {beat.line}
            </p>
          </div>
        )}

        {!started && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg/72 px-6 text-center">
            <p className="font-mono text-xs tracking-widest text-amber uppercase">{kicker}</p>
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
            {cut && (
              <button
                type="button"
                onClick={() => setScript(false)}
                className="mt-3 min-h-11 px-3 font-mono text-xs tracking-widest text-ink uppercase"
              >
                Watch the cut
              </button>
            )}
          </div>
        )}

        {atEnd && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg/55 px-6 text-center">
            <p className="font-display text-4xl text-ink sm:text-6xl">{endTitle}</p>
            <button
              type="button"
              onClick={autoplay}
              className="pointer-events-auto mt-6 inline-flex min-h-11 items-center gap-2 bg-ink px-6 font-display text-lg tracking-widest text-bg"
            >
              <Play className="size-4 fill-current" aria-hidden />
              Watch again
            </button>
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
          {armed && (
            <button
              type="button"
              onClick={autoplay}
              className="inline-flex min-h-11 items-center gap-2 border border-line px-3 font-mono text-xs tracking-widest text-ink uppercase"
            >
              Restart
            </button>
          )}
          <button
            type="button"
            aria-label="Previous line"
            disabled={!started || !armed || index === 0}
            onClick={() => jump(index - 1)}
            className="inline-flex size-11 items-center justify-center border border-line text-ink disabled:opacity-40"
          >
            <SkipBack className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label={paused ? "Play" : "Pause"}
            disabled={!started || !armed || atEnd}
            onClick={() => setPaused((p) => !p)}
            className="inline-flex size-11 items-center justify-center border border-line text-ink disabled:opacity-40"
          >
            {paused ? <Play className="size-4 fill-current" aria-hidden /> : <Pause className="size-4" aria-hidden />}
          </button>
          <button
            type="button"
            aria-label="Next line"
            disabled={!started || !armed || atEnd}
            onClick={() => jump(index + 1)}
            className="inline-flex size-11 items-center justify-center border border-line text-ink disabled:opacity-40"
          >
            <SkipForward className="size-4" aria-hidden />
          </button>
          {canHear && armed && (
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              className="min-h-11 px-3 font-mono text-xs tracking-widest text-muted uppercase"
            >
              {muted ? "Sound off" : "Sound on"}
            </button>
          )}
          {track && (
            <a
              href={track}
              download
              className="inline-flex min-h-11 items-center px-3 font-mono text-xs tracking-widest text-ink uppercase"
            >
              Audio
            </a>
          )}
          {cut && (
            <a
              href={cut}
              download
              className="inline-flex min-h-11 items-center bg-ink px-3 font-mono text-xs tracking-widest text-bg uppercase"
            >
              Download
            </a>
          )}
          <p className="ml-auto font-mono text-xs tracking-widest text-muted tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(beats.length).padStart(2, "0")}
          </p>
        </div>

      <div className="mt-3 h-1 w-full bg-line">
        <div className="h-full bg-mag" style={{ width: `${last === 0 ? 0 : (index / last) * 100}%` }} />
      </div>
        </>
      )}
    </>
  );
}
