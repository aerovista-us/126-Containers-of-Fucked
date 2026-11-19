import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const publicRoot = resolve(projectRoot, "public/episode-06");

test("Episode 06 web media manifest is complete and its sources exist", () => {
  const manifest = JSON.parse(readFileSync(resolve(publicRoot, "manifest.json"), "utf8"));
  assert.equal(manifest.images.length, 18);
  assert.equal(new Set(manifest.images.map((item) => item.slug)).size, 18);
  for (const item of manifest.images) {
    assert.ok(item.asset.startsWith("public/episode-06/images/"), item.asset);
    const imagePath = resolve(projectRoot, item.asset);
    assert.ok(existsSync(imagePath), imagePath);
    assert.ok(statSync(imagePath).size > 100_000, imagePath);
  }
  const audio = resolve(publicRoot, "audio/one-yellow-sticky-note.mp3");
  const cues = resolve(publicRoot, "E06_CUE_SHEET_DIRECTED.csv");
  assert.ok(statSync(audio).size > 1_000_000, "audio recording exists");
  const csv = readFileSync(cues, "utf8");
  assert.match(csv, /scene_id,scene_range,character,clip_id/);
  assert.match(csv, /E06-T00-TIMBR-001/);
});

test("Episode 06 has a storyboard route and honest production status", () => {
  const registry = readFileSync(resolve(projectRoot, "src/lib/series-registry.ts"), "utf8");
  assert.match(registry, /status: "visual-preview"/);
  assert.match(registry, /productionUrl: "\/episode-06"/);
  const route = readFileSync(resolve(projectRoot, "src/routes/episode-06.tsx"), "utf8");
  assert.match(route, /createFileRoute\("\/episode-06"\)/);
});
