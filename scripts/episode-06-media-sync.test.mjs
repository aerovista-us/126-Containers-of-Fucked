import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
const root = resolve(import.meta.dirname, "..");
const pub = resolve(root, "public/episode-06");
const inventory = JSON.parse(readFileSync(resolve(pub, "media-inventory.json"), "utf8"));

test("new art derivatives are all unique and present", () => {
  assert.equal(inventory.images.length, 29);
  const urls = inventory.images.map((x) => x.public_path);
  assert.equal(new Set(urls).size, urls.length);
  for (const file of inventory.images) {
    assert.ok(file.public_path.startsWith("/episode-06/gallery/"));
    assert.ok(file.source.startsWith("artifacts/imagine_images/"));
    assert.equal(file.sha256.length, 64);
    assert.ok(statSync(resolve(pub, file.public_path.replace("/episode-06/", ""))).size > 1000);
  }
});
test("all seven indexed audio assets are available in the deployable public folder", () => {
  assert.equal(inventory.audio.length, 7);
  for (const file of inventory.audio) {
    assert.ok(file.public_path.startsWith("/episode-06/audio/"));
    assert.equal(file.sha256.length, 64);
    assert.equal(statSync(resolve(pub, file.public_path.replace("/episode-06/", ""))).size, file.bytes);
  }
});
test("oversized video originals are inventoried rather than copied into the deployable folder", () => {
  assert.equal(inventory.videos.length, 41);
  assert.ok(inventory.videos.reduce((sum, x) => sum + x.bytes, 0) > 1_700_000_000);
  assert.ok(!existsSync(resolve(pub, "video")));
  assert.match(readFileSync(resolve(root, ".gitignore"), "utf8"), /artifacts\//);
});
