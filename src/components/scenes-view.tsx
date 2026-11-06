import { useState } from "react";
import { SHEETS } from "@/lib/bible";
import { SCENES } from "@/lib/scenes";

const NOTES = [
  ["Look", "look"],
  ["Movement", "movement"],
  ["On screen", "personality"],
  ["Gag", "gag"],
] as const;

export function ScenesView() {
  const [id, setId] = useState(SCENES[0]!.id);
  const scene = SCENES.find((item) => item.id === id) ?? SCENES[0]!;
  const sheet = SHEETS.find((item) => item.id === scene.sheetId);

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <video
          key={scene.src}
          className="h-full w-full object-cover"
          src={scene.src}
          autoPlay
          controls
          playsInline
        />
      </div>
      <p className="mt-3 font-mono text-xs tracking-[0.22em] text-amber uppercase">
        {sheet?.name ?? "Crew"} · {sheet?.role}
      </p>
      <p className="font-display text-3xl leading-none tracking-wide text-ink">{scene.title}</p>
      <p className="mt-2 max-w-xl font-mono text-sm leading-relaxed text-ink">{scene.line}</p>
      {sheet && (
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {NOTES.map(([label, key]) => (
            <div key={key} className="border border-line p-3">
              <dt className="font-mono text-xs tracking-[0.22em] text-mag uppercase">{label}</dt>
              <dd className="mt-2 font-mono text-sm leading-relaxed text-muted">{sheet[key]}</dd>
            </div>
          ))}
        </dl>
      )}
      {sheet && (
        <p className="mt-3 font-mono text-xs tracking-widest text-muted uppercase">{sheet.colors}</p>
      )}
      <ul className="mt-4 flex max-w-full gap-2 overflow-x-auto pb-2">
        {SCENES.map((item) => {
          const name = SHEETS.find((sheetItem) => sheetItem.id === item.sheetId)?.name ?? item.title;
          return (
            <li key={item.id} className="shrink-0">
              <button
                type="button"
                onClick={() => setId(item.id)}
                className={`min-h-11 px-3 text-left font-mono text-xs tracking-widest uppercase ${
                  item.id === scene.id ? "bg-ink text-bg" : "border border-line text-ink"
                }`}
              >
                {name}
                <span className="mt-1 block normal-case tracking-normal opacity-70">{item.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
