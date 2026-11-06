import { useState } from "react";
import { MODES, SHEETS, type Sheet } from "@/lib/bible";

function Card({
  sheet,
  open,
  onToggle,
}: {
  sheet: Sheet;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <li className="min-w-0 border border-line bg-bg">
      <button type="button" onClick={onToggle} className="block w-full text-left">
        <img src={sheet.portrait} alt="" className="aspect-[2/3] w-full object-cover object-top" />
        <span className="block px-3 pt-3 font-display text-2xl leading-none tracking-wide text-ink">
          {sheet.name}
        </span>
        <span className="block px-3 pt-1 pb-3 font-mono text-xs tracking-wide text-muted uppercase">
          {sheet.role}
        </span>
      </button>
      {open && (
        <div className="space-y-3 border-t border-line px-3 py-3">
          <p className="font-mono text-xs tracking-widest text-amber uppercase">{sheet.colors}</p>
          <p className="font-mono text-sm leading-relaxed text-ink">{sheet.look}</p>
          <p className="font-mono text-sm leading-relaxed text-muted">{sheet.movement}</p>
          <p className="font-mono text-sm leading-relaxed text-ink">{sheet.personality}</p>
          <p className="font-mono text-sm leading-relaxed text-mag">{sheet.gag}</p>
        </div>
      )}
    </li>
  );
}

function Row({ title, items }: { title: string; items: Sheet[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  return (
    <section className="mt-8">
      <h2 className="font-mono text-xs tracking-[0.22em] text-muted uppercase">{title}</h2>
      <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((sheet) => (
          <Card
            key={sheet.id}
            sheet={sheet}
            open={openId === sheet.id}
            onToggle={() => setOpenId((id) => (id === sheet.id ? null : sheet.id))}
          />
        ))}
      </ul>
    </section>
  );
}

export function BibleView() {
  const cast = SHEETS.filter((s) => s.group === "cast");
  const freaks = SHEETS.filter((s) => s.group === "freaks");
  return (
    <div>
      <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted">
        Ugly-beautiful, readable from the silhouette. Timbr, Byte, Sam, and NXCore stay a
        dysfunctional startup. Vesper, Nox, and the cat are not allowed to match the furniture.
        That is the joke when the checkout API becomes a county treasurer.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {MODES.map((mode) => (
          <li key={mode.name} className="border border-line p-3">
            <p className="font-display text-xl leading-none tracking-wide text-ink">{mode.name}</p>
            <p className="mt-2 font-mono text-xs leading-relaxed text-muted">{mode.copy}</p>
          </li>
        ))}
      </ul>
      <Row title="Main cast" items={cast} />
      <Row title="Recurring freaks" items={freaks} />
      <p className="mt-8 max-w-2xl font-mono text-sm leading-relaxed text-muted">
        Timbr invents the problem. Byte solves it and likes humanity less. NXCore is the employee
        they both spend. Sam turns a bad idea into a real one by accident. Vesper and Nox may enter
        without warning. Datfucker could fix all of it in five minutes and will not, because the
        collapse is better television.
      </p>
    </div>
  );
}
