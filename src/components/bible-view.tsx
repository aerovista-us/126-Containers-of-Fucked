import { useState } from "react";
import { MODES, SHEETS, type Group, type Sheet } from "@/lib/bible";

type Filter = "all" | Group;

const CHARACTER_NOTES = [
  ["Palette", "colors"],
  ["Look & silhouette", "look"],
  ["Movement & animation", "movement"],
  ["Personality / performance", "personality"],
  ["Signature gag", "gag"],
  ["Plays off", "plays"],
] as const;

const STORY_ENGINE = [
  {
    label: "01 / A small decision",
    title: "The founder invents something",
    copy: "Timbr starts with an apparently reasonable problem. There is almost always an easier option. He does not take it.",
  },
  {
    label: "02 / The physical consequence",
    title: "Infrastructure gets a body",
    copy: "A bug, deployment, report, or transaction becomes an actual character or place. NXCore has to live with the consequences.",
  },
  {
    label: "03 / The argument",
    title: "Every system has an opinion",
    copy: "Byte identifies the problem; Sam sees a business opportunity. Compliance wants evidence. The haunting begins right on schedule.",
  },
  {
    label: "04 / The button",
    title: "The exit creates the next mess",
    copy: "The crew finds one real fix, but someone spots a new opportunity to automate the entire experience. The cat has already shipped it.",
  },
];

const RECURRING = [
  {
    name: "The reporting demons",
    label: "EOD · EOW · EOM · EOY",
    copy: "Routine operational reports become characters with increasing authority. A green dashboard is not the same as a verified outcome.",
  },
  {
    name: "NXCore's Docker sneeze",
    label: "A container for every problem",
    copy: "Saying or even thinking about Docker can cause another miniature shipping container to emerge from NXCore.",
  },
  {
    name: "The five release gates",
    label: "WRITTEN ≠ TESTED ≠ DEPLOYED ≠ ACCEPTED ≠ AUTHORIZED",
    copy: "Each gate is a different door. A successful build is not real-user acceptance, and a title is not an access grant.",
  },
  {
    name: "The Git Ghost",
    label: "Patron of uncommitted work",
    copy: "An unresolved change or forgotten source tree is the setup for a haunting, not proof of a completed release.",
  },
  {
    name: "Datfucker's leadership",
    label: "The final boss has paws",
    copy: "The cat could save the company; watching it collapse is more entertaining. He also has a deeply unreasonable relationship with keyboards.",
  },
  {
    name: "The shortcut temptation",
    label: "Nox vs. Vesper",
    copy: "Nox offers a tidy, irreversible fix. Vesper remembers exactly what that fix would erase.",
  },
];

const VOICE_GUIDE = [
  [
    "Timbr",
    "Sleep-deprived confidence; conversational, grounded, unreasonably optimistic when proposing another system.",
  ],
  [
    "Byte",
    "Quick, technically precise, increasingly exasperated; let real concern show when the stakes are more than a joke.",
  ],
  ["NXCore", "Industrial, gruff and weary; a union electrician trapped inside a server rack."],
  ["Sam", "Upbeat sales momentum; pitches every catastrophe as if it is already a revenue stream."],
  ["Vesper", "Low, calm, poetic and uncanny; gives a memory the weight of a funeral."],
  ["Nox", "Smooth, tempting menace; treats a dangerous shortcut as a lovely favor."],
  [
    "Compliance Prime",
    "Quiet bureaucratic certainty; no need to shout when the form is already binding.",
  ],
  [
    "Datfucker",
    "Mostly animal silence and physical comedy; minimal dialogue makes the rare line land.",
  ],
];

function CharacterCard({
  sheet,
  open,
  onToggle,
}: {
  sheet: Sheet;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="min-w-0 self-start overflow-hidden border border-line bg-bg">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`bible-detail-${sheet.id}`}
        onClick={onToggle}
        className="block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-mag"
      >
        <img
          src={sheet.portrait}
          alt={`${sheet.name} character design`}
          loading="lazy"
          className="aspect-[2/3] w-full object-cover object-top"
        />
        <span className="block px-3 pt-3 font-display text-2xl leading-none tracking-wide text-ink">
          {sheet.name}
        </span>
        <span className="block px-3 pt-1 font-mono text-xs tracking-wide text-muted uppercase">
          {sheet.role}
        </span>
        <span className="block px-3 py-3 font-mono text-xs tracking-widest text-mag uppercase">
          {open ? "− Close character dossier" : "+ Open character dossier"}
        </span>
      </button>
      {open && (
        <dl id={`bible-detail-${sheet.id}`} className="space-y-3 border-t border-line p-3">
          {CHARACTER_NOTES.map(([label, key]) => (
            <div key={key}>
              <dt className="font-mono text-[11px] tracking-widest text-amber uppercase">
                {label}
              </dt>
              <dd className="mt-1 font-mono text-sm leading-relaxed text-ink">{sheet[key]}</dd>
            </div>
          ))}
        </dl>
      )}
    </li>
  );
}

export function BibleView() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("tim");
  const normalizedQuery = query.trim().toLowerCase();
  const visible = SHEETS.filter((s) => {
    if (filter !== "all" && s.group !== filter) return false;
    if (!normalizedQuery) return true;
    return [s.name, s.role, s.look, s.personality, s.gag, s.plays]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);
  });

  return (
    <div className="min-w-0 pb-12">
      <section className="border-b border-line pb-7">
        <p className="font-mono text-xs tracking-[0.25em] text-mag uppercase">
          AeroVista · ByteCast After Dark · Series Bible
        </p>
        <h1 className="mt-3 font-display text-4xl leading-none text-ink sm:text-6xl">
          THE CHARACTER & WORLD BIBLE
        </h1>
        <p className="mt-4 max-w-3xl font-mono text-sm leading-relaxed text-muted">
          One dysfunctional startup, a warehouse full of physical software disasters, and a cat who
          already owns the building. An original adult animated workplace comedy built to be
          ugly-beautiful, immediately recognizable by silhouette, and funnier each time a tiny
          technical issue becomes a cosmic incident.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs tracking-wide">
          <a href="#bible-cast" className="border border-line px-3 py-2 text-ink">
            Character dossiers
          </a>
          <a href="#bible-worlds" className="border border-line px-3 py-2 text-ink">
            Visual worlds
          </a>
          <a href="#bible-engine" className="border border-line px-3 py-2 text-ink">
            Story engine
          </a>
          <a href="#bible-audio" className="border border-line px-3 py-2 text-ink">
            Voice direction
          </a>
          <a href="#bible-recurring" className="border border-line px-3 py-2 text-ink">
            Recurring bits
          </a>
        </div>
      </section>

      <section id="bible-cast" className="scroll-mt-24 pt-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.22em] text-mag uppercase">
              01 / Character reference
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              THE ENTIRE DISASTER CAST
            </h2>
            <p className="mt-2 max-w-xl font-mono text-sm leading-relaxed text-muted">
              Seven principal characters, four recurring entities. Select a portrait for palette,
              movement, performance, signature gag, and relationship dynamics.
            </p>
          </div>
          <span className="border border-line px-4 py-2 font-mono text-xs tracking-widest text-amber">
            {visible.length} / {SHEETS.length} SHOWN
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {(
            [
              ["all", "All 11"],
              ["cast", "Main cast"],
              ["freaks", "Recurring freaks"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
              className={`min-h-11 px-4 font-mono text-xs tracking-wider uppercase ${filter === value ? "bg-ink text-bg" : "border border-line text-ink"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <label
          htmlFor="bible-search"
          className="mt-5 block font-mono text-xs tracking-widest text-muted uppercase"
        >
          Search character names, relationships, or descriptions
        </label>
        <input
          id="bible-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try Byte, Docker, Vesper, or money"
          className="mt-2 min-h-11 w-full max-w-xl border border-line bg-bg px-4 font-mono text-sm text-ink placeholder:text-muted focus-visible:outline-mag"
        />
        {visible.length ? (
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {visible.map((sheet) => (
              <CharacterCard
                key={sheet.id}
                sheet={sheet}
                open={openId === sheet.id}
                onToggle={() => setOpenId((id) => (id === sheet.id ? null : sheet.id))}
              />
            ))}
          </ul>
        ) : (
          <p role="status" className="mt-5 border border-line p-4 font-mono text-sm text-muted">
            No character matches. Try a different search or choose All 11.
          </p>
        )}
      </section>

      <section id="bible-worlds" className="scroll-mt-24 mt-12 border-t border-line pt-7">
        <p className="font-mono text-xs tracking-[0.22em] text-mag uppercase">02 / Art direction</p>
        <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">THREE VISUAL REALITIES</h2>
        <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-muted">
          The location and the kind of threat decide the animation language. Keep the corporate cast
          recognizable even when the world changes around them.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {MODES.map((mode, i) => (
            <article key={mode.name} className="border border-line p-4">
              <p className="font-mono text-xs tracking-widest text-amber">WORLD 0{i + 1}</p>
              <h3 className="mt-2 font-display text-2xl text-ink">{mode.name}</h3>
              <p className="mt-3 font-mono text-sm leading-relaxed text-muted">{mode.copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 border-l-2 border-mag bg-bg p-4 font-mono text-sm leading-relaxed text-muted">
          Production rule: silhouettes come first; ugly-beautiful textures and deliberate frame
          glitches are part of the design, not mistakes. The visual shifts signal which rules of
          reality currently apply.
        </div>
      </section>

      <section id="bible-engine" className="scroll-mt-24 mt-12 border-t border-line pt-7">
        <p className="font-mono text-xs tracking-[0.22em] text-mag uppercase">
          03 / Comedy construction
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">HOW AN EPISODE BREAKS</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {STORY_ENGINE.map((beat) => (
            <article className="border border-line p-4" key={beat.label}>
              <p className="font-mono text-xs tracking-widest text-amber">{beat.label}</p>
              <h3 className="mt-2 font-display text-2xl text-ink">{beat.title}</h3>
              <p className="mt-2 font-mono text-sm leading-relaxed text-muted">{beat.copy}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 font-mono text-sm leading-relaxed text-muted">
          The comedy is technical without requiring the viewer to understand Docker, deployment
          gates, or permission scopes. The visual consequences tell the joke; the technical
          explanation provides the extra layer.
        </p>
      </section>

      <section id="bible-audio" className="scroll-mt-24 mt-12 border-t border-line pt-7">
        <p className="font-mono text-xs tracking-[0.22em] text-mag uppercase">04 / Performances</p>
        <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">VOICE & DELIVERY GUIDE</h2>
        <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-muted">
          Production direction based on the existing cast and Episode 04 screenplay. These are
          acting notes, not recordings or finalized voice casting.
        </p>
        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          {VOICE_GUIDE.map(([name, note]) => (
            <div key={name} className="border border-line p-4">
              <dt className="font-display text-xl text-amber">{name}</dt>
              <dd className="mt-2 font-mono text-sm leading-relaxed text-muted">{note}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 border-l-2 border-line pl-4 font-mono text-xs leading-relaxed text-muted">
          Original audio palette: glitch-industrial title sting, exhausted machinery, distorted UI
          alerts, sad analog synth for Vesper, and brief fake boy-band interruption for the PCP
          Five. Sound effects are cues, not assertions that those assets have been produced.
        </p>
      </section>

      <section id="bible-recurring" className="scroll-mt-24 mt-12 border-t border-line pt-7">
        <p className="font-mono text-xs tracking-[0.22em] text-mag uppercase">
          05 / Recurring lore
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
          RUNNING GAGS & CONTINUITY
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {RECURRING.map((item) => (
            <article key={item.name} className="border border-line p-4">
              <h3 className="font-display text-xl text-mag">{item.name}</h3>
              <p className="mt-2 font-mono text-xs tracking-wider text-amber">{item.label}</p>
              <p className="mt-3 font-mono text-sm leading-relaxed text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 border border-line p-4">
          <h3 className="font-display text-xl text-ink">SOURCE & CONTINUITY</h3>
          <p className="mt-2 font-mono text-sm leading-relaxed text-muted">
            This page consolidates the expanded NXCore character Bible with story and performance
            notes supported by the existing master screenplay and Episode 04 draft. The series is
            fictional satire, not an operational-status certification. Episode labels, cuts, and
            final continuity still require editorial reconciliation.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              className="inline-flex min-h-11 items-center border border-line px-4 font-mono text-xs text-ink"
              href="https://github.com/aerovista-us/126-Containers-of-Fucked/blob/main/126/src/lib/bible.ts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Expanded character source ↗
            </a>
            <a
              className="inline-flex min-h-11 items-center border border-line px-4 font-mono text-xs text-ink"
              href="https://github.com/aerovista-us/126-Containers-of-Fucked/blob/main/creative/126-containers-of-fucked-master-script.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Master screenplay ↗
            </a>
            <a
              className="inline-flex min-h-11 items-center border border-line px-4 font-mono text-xs text-ink"
              href="https://github.com/aerovista-us/126-Containers-of-Fucked/blob/main/creative/episodes/126_Containers_E04_The_Server_Has_140_Personalities.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Episode 04 draft ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
