import type { Beat } from "@/lib/episode";

function beat(
  id: string,
  chapter: string,
  visual: string,
  speaker: Beat["speaker"],
  line: string,
  hold = 5600,
): Beat {
  return { id, chapter, visual, speaker, line, audio: null, hold };
}

export const EPISODE_05_BOARDS = {
  id: "e05-boards",
  title: "The boards",
  kicker: "Episode 05 art",
  blurb: "One pass. Each board plays once, then the next scene.",
  endTitle: "That's the stack",
  beats: [
    beat("b1", "Cold open", "/scenes/e05a-cold.mp4", "TIM", "Today we finish one thing."),
    beat("b2", "Running", "/scenes/e05a-running.mp4", "NXCORE", "One hundred and forty. And counting."),
    beat("b3", "Clones", "/scenes/e05a-clones.mp4", "CLONE", "I'm the real production."),
    beat("b4", "The gate", "/scenes/e05a-gate.mp4", "COMPLIANCE", "Identity verified. Permission denied."),
    beat(
      "verse-a",
      "The verse",
      "/scenes/e05a-plan.mp4",
      "BYTE",
      "Checked you out. You weren't the branch. Head came off, and I left it detached.",
    ),
    beat(
      "verse-b",
      "The verse",
      "/scenes/e05a-catacombs.mp4",
      "BYTE",
      "You said you were attached. The log said you weren't. Green said you passed. The volume said don't.",
    ),
    beat("b5", "Fifty-four", "/scenes/e05a-volumes.mp4", "NXCORE", "Unattached does not mean empty."),
    beat("b6", "The vault", "/scenes/e05a-vault.mp4", "SKELETON", "Encrypted. Unvisited since summer."),
    beat("b7", "The check", "/scenes/e05a-check.mp4", "CHECK", "All systems healthy. That is a lie."),
    beat("b8", "Cancel", "/scenes/e05a-cancel.mp4", "DATFUCKER", "Not today."),
    beat("b9", "The registry", "/scenes/e05a-registry.mp4", "BYTE", "Unknown stays unknown."),
    beat("b10", "CatOps", "/scenes/e05a-catops.mp4", "DATFUCKER", "One authority per domain."),
  ] as Beat[],
};