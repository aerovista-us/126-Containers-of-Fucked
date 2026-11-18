import { test } from "node:test";
import { strict as assert } from "node:assert";
import { EPISODES } from "./series-registry.ts";

test("catalog has unique ordered entries with honest playable state", () => {
  assert.deepEqual(
    EPISODES.map((e) => e.number),
    ["01", "02", "03", "04", "05", "06"],
  );
  assert.equal(new Set(EPISODES.map((e) => e.id)).size, EPISODES.length);
  for (const e of EPISODES) {
    assert.equal(Boolean(e.playable), e.status === "playable");
    assert.ok(e.title && e.synopsis && e.image);
  }
});
