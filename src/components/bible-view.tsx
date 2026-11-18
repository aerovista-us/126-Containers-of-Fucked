import { useState } from "react";
import { MODES, SHEETS, type Sheet } from "@/lib/bible";

function Card({ sheet, open, onToggle }: { sheet: Sheet; open: boolean; onToggle: () => void }) {
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
        dysfunctional startup. Vesper, Nox, and the cat are not allowed to match the furniture. That
        is the joke when the checkout API becomes a county treasurer.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        {MODES.map((mode) => (
          <li key={mode.name} className="border border-line p-3">
            <p className="font-display text-xl leading-none tracking-wide text-ink">{mode.name}</p>
            <p className="mt-2 font-mono text-xs leading-relaxed text-muted">{mode.copy}</p>
          </li>
        ))}
      </ul>
      <section className="mt-8 border-y border-line py-6">
        <p className="font-mono text-xs tracking-[0.22em] text-mag uppercase">
          The show / World rules
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink">ONE COMPANY. TOO MANY REALITIES.</h2>
        <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-muted">
          An original adult animated workplace comedy where real software concepts become badly
          behaved characters. The corporate world is filthy and tangible; digital space is
          geometrically impossible; cosmic forces ignore both budgets and physics.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            [
              "The engine",
              "Timbr invents a new system. Byte understands exactly why it will go wrong. NXCore has to run it anyway.",
            ],
            [
              "The escalation",
              "A mundane bug becomes a literal monster: Docker containers reproduce, reports demand worship, and checkout discovers fees for emotions.",
            ],
            [
              "The heart",
              "Under the abuse and chaos, this is a crew trying to make something work. The joke never substitutes for proof that a system is safe or finished.",
            ],
          ].map(([title, copy]) => (
            <div className="border border-line p-4" key={title}>
              <h3 className="font-display text-xl text-amber">{title}</h3>
              <p className="mt-2 font-mono text-sm leading-relaxed text-muted">{copy}</p>
            </div>
          ))}
        </div>
      </section>
      <Row title="Main cast" items={cast} />
      <Row title="Recurring freaks" items={freaks} />
      <section className="mt-8 border-t border-line pt-6">
        <h2 className="font-display text-3xl text-ink">RECURRING DISASTERS</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Docker sneeze",
              "Every mention of Docker risks NXCore ejecting another tiny shipping container.",
            ],
            [
              "The reporting court",
              "EOD, EOW, EOM, and EOY turn routine operational updates into escalating bureaucratic horror.",
            ],
            [
              "The five gates",
              "Written, tested, deployed, accepted, and authorized are different doors. Confusing them creates the episode.",
            ],
            [
              "The unhelpful savior",
              "Datfucker may understand the solution. He would still rather push the evidence off the desk.",
            ],
          ].map(([name, detail]) => (
            <li key={name} className="border border-line p-4">
              <strong className="font-display text-xl font-normal text-mag">{name}</strong>
              <p className="mt-2 font-mono text-sm leading-relaxed text-muted">{detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 font-mono text-xs leading-relaxed text-muted">
          This is the on-site production Bible: character silhouettes, performances, visual worlds,
          comic rules, and recurring bits. The longer master screenplay is available from the
          Episodes tab; unreconciled external drafts remain labeled in development.
        </p>
      </section>
      <p className="mt-8 max-w-2xl font-mono text-sm leading-relaxed text-muted">
        Timbr invents the problem. Byte solves it and likes humanity less. NXCore is the employee
        they both spend. Sam turns a bad idea into a real one by accident. Vesper and Nox may enter
        without warning. Datfucker could fix all of it in five minutes and will not, because the
        collapse is better television.
      </p>
    </div>
  );
}
