import { mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";

const root = "/workspace";
const episodeFile = process.argv[2] ?? `${root}/src/lib/episode-03.ts`;
const out = process.argv[3] ?? `${root}/public/scenes/e03-cut.mp4`;
const audio = process.argv[4];
const src = readFileSync(episodeFile, "utf8");
const consts = {};
for (const m of src.matchAll(/^const (\w+) = "([^"]+)";/gm)) consts[m[1]] = m[2];

const beats = [];
const re =
  /beat\(\s*"((?:\\.|[^"\\])*)"\s*,\s*"((?:\\.|[^"\\])*)"\s*,\s*("(?:\\.|[^"\\])*"|[A-Za-z0-9_]+)\s*,\s*("(?:\\.|[^"\\])*"|null)\s*,\s*("(?:\\.|[^"\\])*"|null)\s*,\s*(\d+)\s*\)/g;
for (const m of src.matchAll(re)) {
  const visualRaw = m[3];
  const visual = visualRaw.startsWith('"')
    ? JSON.parse(visualRaw)
    : consts[visualRaw];
  if (!visual) throw new Error(`unresolved visual ${visualRaw}`);
  beats.push({
    id: m[1],
    chapter: m[2],
    visual,
    speaker: m[4] === "null" ? null : JSON.parse(m[4]),
    line: m[5] === "null" ? null : JSON.parse(m[5]),
    hold: Number(m[6]),
  });
}
if (beats.length < 5) {
  const body = src.slice(src.indexOf("export const BEATS"));
  const obj =
    /id:\s*"([^"]+)"[\s\S]*?chapter:\s*"([^"]+)"[\s\S]*?visual:\s*"([^"]+)"[\s\S]*?speaker:\s*(?:"([^"]+)"|null)[\s\S]*?line:\s*(?:"((?:\\.|[^"\\])*)"|null)[\s\S]*?hold:\s*(\d+)/g;
  for (const m of body.matchAll(obj)) {
    beats.push({
      id: m[1],
      chapter: m[2],
      visual: m[3],
      speaker: m[4] ?? null,
      line: m[5] ?? null,
      hold: Number(m[6]),
    });
  }
}
if (beats.length < 5) throw new Error(`only parsed ${beats.length} beats`);

const labels = {
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

const groups = [];
for (const beat of beats) {
  const last = groups.at(-1);
  if (last && last.visual === beat.visual) {
    last.beats.push(beat);
    last.dur += beat.hold;
  } else {
    groups.push({ visual: beat.visual, beats: [beat], dur: beat.hold });
  }
}

const work = `/tmp/render-${episodeFile.split("/").pop()}`;
rmSync(work, { recursive: true, force: true });
mkdirSync(`${work}/seg`, { recursive: true });

function run(args) {
  const result = spawnSync("ffmpeg", args, { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(result.stderr?.slice(-1500) || `ffmpeg ${result.status}`);
  }
}

const vf = "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24";
groups.forEach((group, i) => {
  const input = `${root}/public${group.visual}`;
  const out = `${work}/seg/${String(i).padStart(3, "0")}.mp4`;
  const seconds = (group.dur / 1000).toFixed(3);
  const args = group.visual.endsWith(".mp4")
    ? ["-y", "-stream_loop", "-1", "-i", input]
    : ["-y", "-loop", "1", "-i", input];
  args.push(
    "-t",
    seconds,
    "-vf",
    vf,
    "-an",
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-preset",
    "veryfast",
    "-crf",
    "20",
    out,
  );
  process.stdout.write(`seg ${i + 1}/${groups.length} ${seconds}s ${group.visual}\n`);
  run(args);
});

const list = groups
  .map((_, i) => `file '${work}/seg/${String(i).padStart(3, "0")}.mp4'`)
  .join("\n");
writeFileSync(`${work}/list.txt`, list);
run(["-y", "-f", "concat", "-safe", "0", "-i", `${work}/list.txt`, "-c", "copy", `${work}/silent.mp4`]);

function assTime(ms) {
  const cs = Math.round(ms / 10);
  const h = Math.floor(cs / 360000);
  const m = Math.floor(cs / 6000) % 60;
  const s = Math.floor(cs / 100) % 60;
  const c = cs % 100;
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(c).padStart(2, "0")}`;
}

function wrap(text) {
  const clean = text.replace(/[{}\\]/g, "");
  const words = clean.split(/\s+/);
  const lines = [];
  let row = "";
  for (const word of words) {
    const next = row ? `${row} ${word}` : word;
    if (next.length > 42 && row) {
      lines.push(row);
      row = word;
    } else row = next;
  }
  if (row) lines.push(row);
  return lines.join("\\N");
}

let cursor = 0;
const events = [];
for (const beat of beats) {
  const start = assTime(cursor);
  const end = assTime(cursor + beat.hold);
  events.push(`Dialogue: 0,${start},${end},Chapter,,0,0,0,,${wrap(beat.chapter.toUpperCase())}`);
  if (beat.speaker) {
    events.push(
      `Dialogue: 0,${start},${end},Speaker,,0,0,0,,${wrap(labels[beat.speaker] ?? beat.speaker)}`,
    );
  }
  if (beat.line) {
    events.push(`Dialogue: 0,${start},${end},Line,,0,0,0,,${wrap(beat.line)}`);
  }
  cursor += beat.hold;
}

const ass = `[Script Info]
ScriptType: v4.00+
PlayResX: 1280
PlayResY: 720
WrapStyle: 2
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Chapter,DejaVu Sans,22,&H00FFFFFF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,1,0,1,2,0,8,48,48,28,1
Style: Speaker,DejaVu Sans,26,&H0000C8FF,&H000000FF,&H00000000,&H80000000,-1,0,0,0,100,100,1,0,1,3,0,2,64,64,108,1
Style: Line,DejaVu Sans,32,&H00FFFFFF,&H000000FF,&H00000000,&HC0000000,0,0,0,0,100,100,0,0,1,3,0,2,56,56,46,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
${events.join("\n")}
`;
writeFileSync(`${work}/captions.ass`, ass);

const captioned = audio ? `${work}/captioned.mp4` : out;
run([
  "-y",
  "-i",
  `${work}/silent.mp4`,
  "-vf",
  `ass=${work}/captions.ass:fontsdir=/usr/share/fonts/truetype/dejavu`,
  "-c:v",
  "libx264",
  "-pix_fmt",
  "yuv420p",
  "-preset",
  "veryfast",
  "-crf",
  "20",
  "-movflags",
  "+faststart",
  captioned,
]);

if (audio) {
  run([
    "-y",
    "-i",
    captioned,
    "-i",
    audio,
    "-filter_complex",
    `[1:a]apad=whole_dur=${(cursor / 1000 + 1).toFixed(0)}[a]`,
    "-map",
    "0:v",
    "-map",
    "[a]",
    "-c:v",
    "copy",
    "-c:a",
    "aac",
    "-b:a",
    "192k",
    "-shortest",
    "-movflags",
    "+faststart",
    out,
  ]);
}
console.log(`wrote ${out} beats=${beats.length} ms=${cursor}`);
