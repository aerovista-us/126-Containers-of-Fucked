import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ACTS,
  CAST,
  COUNTERS,
  GATES,
  SPEAKER_META,
  type Act,
  type Beat,
  type Speaker,
} from "@/lib/episode";

type Mode = "title" | "play" | "cast" | "ledger" | "end";

const TONE: Record<string, string> = {
  crt: "text-crt",
  magenta: "text-magenta",
  amber: "text-amber",
  violet: "text-violet",
  paper: "text-paper",
  danger: "text-danger",
};

const CHIP: Record<string, string> = {
  crt: "border-crt/40 bg-crt/10 text-crt",
  magenta: "border-magenta/40 bg-magenta/10 text-magenta",
  amber: "border-amber/40 bg-amber/10 text-amber",
  violet: "border-violet/40 bg-violet/10 text-violet",
  paper: "border-paper/30 bg-paper/10 text-paper",
  danger: "border-danger/40 bg-danger/10 text-danger",
};

function Mark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M32 6 L54 18 L54 46 L32 58 L10 46 L10 18 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M32 14 L22 48 H28 L30.2 40 H33.8 L36 48 H42 L32 14 Z M31.2 34 L32 30.6 L32.8 34 Z"
        fill="currentColor"
      />
      <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
    </svg>
  );
}

function progressLabel(actIndex: number, beatIndex: number) {
  const act = ACTS[actIndex];
  const total = act.beats.length;
  return `${beatIndex + 1} / ${total}`;
}

export function Player() {
  const [mode, setMode] = useState<Mode>("title");
  const [actIndex, setActIndex] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [auto, setAuto] = useState(false);
  const [speed, setSpeed] = useState(1);
  const scroller = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  const act: Act = ACTS[actIndex];
  const visible = act.beats.slice(0, cursor + 1);
  const atEndOfAct = cursor >= act.beats.length - 1;
  const lastAct = actIndex >= ACTS.length - 1;

  const flatIndex = useMemo(() => {
    let n = 0;
    for (let i = 0; i < actIndex; i++) n += ACTS[i].beats.length;
    return n + cursor;
  }, [actIndex, cursor]);

  const flatTotal = useMemo(
    () => ACTS.reduce((s, a) => s + a.beats.length, 0),
    [],
  );

  const advance = useCallback(() => {
    const a = ACTS[actIndex];
    if (cursor < a.beats.length - 1) {
      setCursor((c) => c + 1);
      return;
    }
    if (actIndex < ACTS.length - 1) {
      setActIndex((i) => i + 1);
      setCursor(0);
      return;
    }
    setAuto(false);
    setMode("end");
  }, [actIndex, cursor]);

  const back = useCallback(() => {
    if (cursor > 0) {
      setCursor((c) => c - 1);
      return;
    }
    if (actIndex > 0) {
      const prev = actIndex - 1;
      setActIndex(prev);
      setCursor(ACTS[prev].beats.length - 1);
    }
  }, [actIndex, cursor]);

  useEffect(() => {
    if (!auto || mode !== "play") return;
    const beat = act.beats[cursor];
    const base = beat.kind === "line" ? 2400 : beat.kind === "title" ? 2800 : 1400;
    const wait = Math.max(700, base / speed);
    timer.current = window.setTimeout(() => {
      advance();
    }, wait);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [auto, mode, act, cursor, speed, advance]);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [cursor, actIndex, mode]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (mode !== "play") return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        advance();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        back();
      } else if (e.key === "a" || e.key === "A") {
        setAuto((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, advance, back]);

  function jumpAct(i: number) {
    setActIndex(i);
    setCursor(0);
    setMode("play");
  }

  function start() {
    setActIndex(0);
    setCursor(0);
    setAuto(true);
    setMode("play");
  }

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-void text-paper">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-magenta/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-violet/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-80 rounded-full bg-amber/10 blur-3xl" />
      </div>
      <div className="scanlines pointer-events-none absolute inset-0 z-30 opacity-40" />

      <header className="relative z-20 flex items-center justify-between gap-3 border-b border-line bg-ink/80 px-4 py-3 backdrop-blur-md sm:px-6">
        <button
          type="button"
          onClick={() => setMode("title")}
          className="flex items-center gap-2 text-magenta"
        >
          <Mark className="size-7" />
          <span className="font-display text-2xl tracking-[0.18em]">BYTECAST</span>
        </button>
        <nav className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.16em] text-fog sm:gap-2 sm:text-sm">
          <NavBtn active={mode === "play"} onClick={() => setMode("play")}>
            On air
          </NavBtn>
          <NavBtn active={mode === "cast"} onClick={() => setMode("cast")}>
            Cast
          </NavBtn>
          <NavBtn active={mode === "ledger"} onClick={() => setMode("ledger")}>
            Ledger
          </NavBtn>
          <a
            href="/bytecast.zip"
            download="bytecast.zip"
            className="rounded-full bg-amber px-3 py-1.5 text-void"
          >
            Download
          </a>
        </nav>
        <div className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-mute sm:flex">
          <span className="inline-block size-1.5 rounded-full bg-danger shadow-[0_0_8px_var(--color-danger)]" />
          TV-MA · 22 min
        </div>
      </header>

      <div className="relative z-10 min-h-0 flex-1">
        {mode === "title" && <Title onPlay={start} onCast={() => setMode("cast")} />}
        {mode === "cast" && <CastBoard onPlay={start} />}
        {mode === "ledger" && <Ledger />}
        {mode === "end" && (
          <EndCard
            onReplay={start}
            onLedger={() => setMode("ledger")}
          />
        )}
        {mode === "play" && (
          <div className="grid h-full grid-rows-[auto_1fr_auto] lg:grid-cols-[220px_1fr] lg:grid-rows-[1fr_auto]">
            <aside className="hidden border-r border-line bg-ink/60 lg:block">
              <ActRail actIndex={actIndex} onJump={jumpAct} />
            </aside>
            <section className="flex min-h-0 flex-col lg:col-start-2 lg:row-start-1">
              <div className="flex items-end justify-between gap-3 border-b border-line px-4 py-3 sm:px-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
                    {act.kicker}
                  </p>
                  <h2 className="font-display text-3xl leading-none tracking-wide text-paper sm:text-4xl">
                    {act.title}
                  </h2>
                  <p className="mt-1 max-w-xl text-sm text-fog">{act.setting}</p>
                </div>
                <p className="shrink-0 font-mono text-xs text-mute">
                  {progressLabel(actIndex, cursor)}
                </p>
              </div>
              <div className="flex gap-2 overflow-x-auto border-b border-line px-4 py-2 lg:hidden">
                {ACTS.map((a, i) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => jumpAct(i)}
                    className={
                      "shrink-0 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider " +
                      (i === actIndex
                        ? "border-magenta bg-magenta/15 text-magenta"
                        : "border-line text-fog")
                    }
                  >
                    {a.kicker}
                  </button>
                ))}
              </div>
              <div ref={scroller} className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-8">
                <ol className="mx-auto flex max-w-3xl flex-col gap-3">
                  {visible.map((beat, i) => (
                    <li key={beat.id}>
                      <BeatView beat={beat} fresh={i === visible.length - 1} />
                    </li>
                  ))}
                </ol>
              </div>
            </section>
            <footer className="col-span-full border-t border-line bg-ink/90 px-4 py-3 backdrop-blur sm:px-6 lg:col-span-2">
              <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full bg-magenta"
                    style={{ width: `${((flatIndex + 1) / flatTotal) * 100}%` }}
                  />
                </div>
                <div className="flex items-center justify-between gap-2 sm:justify-end">
                  <button
                    type="button"
                    onClick={back}
                    className="rounded-full border border-line px-4 py-2 text-sm text-fog hover:border-fog hover:text-paper"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuto((v) => !v)}
                    className={
                      "rounded-full border px-4 py-2 text-sm " +
                      (auto
                        ? "border-crt bg-crt/15 text-crt"
                        : "border-line text-fog hover:text-paper")
                    }
                  >
                    {auto ? "Auto on" : "Auto"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSpeed((s) => (s === 1 ? 1.6 : s === 1.6 ? 2.4 : 1))}
                    className="rounded-full border border-line px-3 py-2 font-mono text-xs text-fog hover:text-paper"
                    aria-label="Playback speed"
                  >
                    {speed}×
                  </button>
                  <button
                    type="button"
                    onClick={advance}
                    className="rounded-full bg-magenta px-5 py-2 text-sm font-semibold text-void hover:bg-paper"
                  >
                    {atEndOfAct && lastAct ? "End" : atEndOfAct ? "Next act" : "Next"}
                  </button>
                </div>
              </div>
              <p className="mt-2 hidden text-center font-mono text-[10px] uppercase tracking-[0.18em] text-mute sm:block">
                Space or right arrow advances · A toggles auto
              </p>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}

function NavBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "rounded-full px-3 py-1.5 " +
        (active ? "bg-paper text-void" : "text-fog hover:text-paper")
      }
    >
      {children}
    </button>
  );
}

function Title({ onPlay, onCast }: { onPlay: () => void; onCast: () => void }) {
  return (
    <div className="crt-flicker flex h-full flex-col overflow-y-auto">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-8 sm:px-8">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-amber">
          <span className="inline-block size-1.5 rounded-full bg-danger" />
          Special transmission · November 8 · Coeur d’Alene
        </div>
        <p className="mt-6 font-display text-5xl leading-none tracking-wide text-magenta sm:text-7xl">
          BYTECAST
        </p>
        <h1 className="mt-2 max-w-4xl font-display text-4xl leading-[0.92] tracking-wide text-paper sm:text-6xl lg:text-7xl">
          THE FUCKING
          <br />
          YEAR-END
          <br />
          EOD REPORT
        </h1>
        <p className="mt-5 max-w-xl text-base text-fog sm:text-lg">
          One hundred twenty-six containers. Thirty-nine projects. Two hundred
          seventy-two tasks. One three-dollar sticker. And no agreed definition
          of done.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onPlay}
            className="rounded-full bg-magenta px-6 py-3 text-base font-semibold text-void hover:bg-paper"
          >
            Play the special
          </button>
          <button
            type="button"
            onClick={onCast}
            className="rounded-full border border-line px-6 py-3 text-base text-paper hover:border-magenta"
          >
            Meet the cast
          </button>
          <a
            href="/bytecast.html"
            className="rounded-full border border-line px-6 py-3 text-base text-paper hover:border-magenta"
          >
            HTML script
          </a>
          <a
            href="/bytecast.zip"
            download="bytecast.zip"
            className="rounded-full bg-amber px-6 py-3 text-base font-semibold text-void hover:bg-paper"
          >
            Download zip
          </a>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {COUNTERS.map((c) => (
            <div key={c.label} className="border border-line bg-panel/80 px-3 py-3">
              <dt className="font-display text-3xl leading-none text-crt">{c.n}</dt>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-fog">
                {c.label}
                <span className="mt-0.5 block normal-case tracking-normal text-mute">
                  {c.sub}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="overflow-hidden border-t border-line bg-ink py-2">
        <div className="ticker-track flex w-max gap-8 font-mono text-xs uppercase tracking-[0.22em] text-amber">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-8">
              <span>Written in active production</span>
              <span>Tested in theory</span>
              <span>Deployed emotionally</span>
              <span>Accepted by nobody</span>
              <span>Authorized pending 46 pages</span>
              <span>Ha ha ha, no</span>
              <span>A test is not production</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CastBoard({ onPlay }: { onPlay: () => void }) {
  return (
    <div className="h-full overflow-y-auto px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
          The room at 3:47
        </p>
        <h2 className="mt-1 font-display text-5xl tracking-wide">Cast</h2>
        <p className="mt-2 max-w-xl text-fog">
          Byte hosts. Timbr opens documents. Everyone else is a consequence.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {CAST.map((c) => (
            <li
              key={c.id}
              className="flex items-start gap-4 border border-line bg-panel/70 p-4"
            >
              <span
                className={
                  "mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border font-display text-lg " +
                  CHIP[c.hue]
                }
              >
                {c.name.slice(0, 1)}
              </span>
              <div>
                <p className={"font-display text-2xl tracking-wide " + TONE[c.hue]}>
                  {c.name}
                </p>
                <p className="text-sm text-fog">{c.role}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 border border-line bg-panel-2 p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
            Also appearing
          </p>
          <p className="mt-2 text-sm text-fog">
            The PCP Five, failed-service boy band. SquareLord, payment terminal
            and fee enthusiast. Compliance Prime, nine feet of paperwork.
            Kara-OK-666, Bluetooth heartbreak. A sheet of paper with three
            pricing tiers. Chrome, an incognito tab with confidence.
          </p>
        </div>
        <button
          type="button"
          onClick={onPlay}
          className="mt-6 rounded-full bg-magenta px-6 py-3 font-semibold text-void hover:bg-paper"
        >
          Start the special
        </button>
      </div>
    </div>
  );
}

function Ledger() {
  return (
    <div className="h-full overflow-y-auto px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
          Five gates of completion
        </p>
        <h2 className="mt-1 font-display text-5xl tracking-wide">The ledger</h2>
        <p className="mt-2 text-fog">
          Fail one and the year-end report eats the company. Pass them in order
          or don’t pretend you’re done.
        </p>
        <ol className="mt-6 flex flex-col gap-3">
          {GATES.map((g) => (
            <li
              key={g.n}
              className="grid grid-cols-[auto_1fr] gap-4 border border-line bg-panel/80 p-4"
            >
              <span className="font-display text-4xl leading-none text-magenta">{g.n}</span>
              <div>
                <p className="font-display text-3xl tracking-wide">{g.name}</p>
                <p className="text-sm text-fog">{g.fail}</p>
              </div>
            </li>
          ))}
        </ol>
        <blockquote className="mt-6 border-l-2 border-crt pl-4 text-lg text-paper">
          Finish one fucking thing. Admit what isn’t finished. And feed the cat.
          <footer className="mt-2 font-mono text-xs uppercase tracking-widest text-amber">
            — DatFucker, executive leadership
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

function EndCard({
  onReplay,
  onLedger,
}: {
  onReplay: () => void;
  onLedger: () => void;
}) {
  return (
    <div className="flex h-full flex-col items-start justify-center overflow-y-auto px-5 py-10 sm:px-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-amber">
        Report reconciled · no false completions
      </p>
      <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.92] tracking-wide sm:text-7xl">
        126 CONTAINERS
        <br />
        OF FUCKED
      </h2>
      <p className="mt-4 max-w-lg text-fog">
        A test is not production. Production is not acceptance. Restoration has
        never been tested. The cat already started next year’s report.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onReplay}
          className="rounded-full bg-magenta px-6 py-3 font-semibold text-void hover:bg-paper"
        >
          Run it back
        </button>
        <button
          type="button"
          onClick={onLedger}
          className="rounded-full border border-line px-6 py-3 text-paper hover:border-magenta"
        >
          Open the ledger
        </button>
      </div>
    </div>
  );
}

function BeatView({ beat, fresh }: { beat: Beat; fresh: boolean }) {
  const cls = fresh ? "beat-in" : "";
  if (beat.kind === "sfx") {
    return (
      <p className={"font-mono text-sm italic text-mute " + cls}>[{beat.text}]</p>
    );
  }
  if (beat.kind === "sting" || beat.kind === "title") {
    return (
      <div className={"my-2 border border-magenta/40 bg-magenta/10 px-4 py-4 " + cls}>
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-magenta">
          {beat.kind === "title" ? "Title card" : "Sting"}
        </p>
        <p className="mt-1 font-display text-3xl tracking-wide text-paper sm:text-4xl">
          {beat.text}
        </p>
      </div>
    );
  }
  if (beat.kind === "stat") {
    return (
      <p
        className={
          "border-l-2 border-crt pl-3 font-mono text-sm leading-relaxed text-crt " + cls
        }
      >
        {beat.text}
      </p>
    );
  }
  const who = beat.speaker ? SPEAKER_META[beat.speaker as Speaker] : null;
  return (
    <div className={"grid grid-cols-[92px_1fr] gap-3 sm:grid-cols-[140px_1fr] " + cls}>
      <p
        className={
          "pt-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider sm:text-xs " +
          (who ? TONE[who.tone] : "text-fog")
        }
      >
        {who?.name ?? "—"}
      </p>
      <p className="text-[15px] leading-relaxed text-paper sm:text-base">{beat.text}</p>
    </div>
  );
}

function ActRail({
  actIndex,
  onJump,
}: {
  actIndex: number;
  onJump: (i: number) => void;
}) {
  return (
    <div className="flex h-full flex-col gap-1 overflow-y-auto p-3">
      <p className="px-2 pb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
        Rundown
      </p>
      {ACTS.map((a, i) => {
        const on = i === actIndex;
        return (
          <button
            key={a.id}
            type="button"
            onClick={() => onJump(i)}
            className={
              "rounded-lg px-3 py-3 text-left " +
              (on ? "bg-panel-2 text-paper" : "text-fog hover:bg-panel hover:text-paper")
            }
          >
            <span className="block font-mono text-[10px] uppercase tracking-widest text-amber">
              {String(i + 1).padStart(2, "0")} · {a.kicker}
            </span>
            <span className="mt-1 block font-display text-xl leading-none tracking-wide">
              {a.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}
