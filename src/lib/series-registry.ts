/** Editorial registry: status reflects available website material, not a claim of published video. */
export type EpisodeStatus = "playable" | "media-archived" | "script-draft" | "visual-preview" | "concept";
export type Episode = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  synopsis: string;
  status: EpisodeStatus;
  image: string;
  playable?: "pilot" | "e02";
  scriptUrl?: string;
  productionUrl?: string;
  mediaNote?: string;
};

export const EPISODES: Episode[] = [
  {
    id: "pilot",
    number: "01",
    title: "The Late Shift",
    subtitle: "Pilot / playable experience",
    synopsis:
      "A union robot, an exhausted founder, a neon-haired AI, an unstoppable salesman, and a cat with executive ambitions collide in the server room.",
    status: "playable",
    image: "/cartoon/series.jpg",
    playable: "pilot",
  },
  {
    id: "e02",
    number: "02",
    title: "The Year-End Report from Hell",
    subtitle: "Playable interactive episode",
    synopsis:
      "The EOD, EOW, EOM, and EOY reporting demons take the company to task. Every completed checkbox has a lawyer.",
    status: "playable",
    image: "/cartoon/cold.jpg",
    playable: "e02",
    mediaNote: "An additional Episode 02 audio master is tracked in the repository.",
  },
  {
    id: "e03",
    number: "03",
    title: "Episode 03 — Media Cut",
    subtitle: "Cut archived / web playback not wired",
    synopsis:
      "Episode 03 footage exists as a segmented master on NXCore. The cut has not been integrated as a publicly playable episode.",
    status: "media-archived",
    image: "/cartoon/nx.jpg",
    mediaNote:
      "Five video segments are stored in external NXCore media storage, not in this Vercel deployment.",
  },
  {
    id: "e04",
    number: "04",
    title: "The Server Has 140 Personalities",
    subtitle: "Script draft + archived cut",
    synopsis:
      "A simple infrastructure inventory exposes repository clones, haunted volumes, questionable backups, and the difference between done and actually verified.",
    status: "script-draft",
    image: "/cartoon/byte.jpg",
    scriptUrl:
      "https://github.com/aerovista-us/126-Containers-of-Fucked/blob/main/creative/episodes/126_Containers_E04_The_Server_Has_140_Personalities.md",
    mediaNote:
      "The Episode 04 cut is stored as four segments on NXCore; its relationship to this script needs editorial review.",
  },
  {
    id: "e05",
    number: "05",
    title: "The Bunny, the BytePad & the $29.99 Multiverse",
    subtitle: "Superseded development concept · folded into EP06",
    synopsis:
      "An earlier Bunny/BytePad treatment that evolved into Episode 06. Retained as a concept, not a second released Bunny episode.",
    status: "concept",
    image: "/cartoon/button.jpg",
    mediaNote:
      "The expanded Bunny antagonist story is Episode 06. This legacy concept remains in the catalog for continuity, not as a completed release.",
  },
  {
    id: "e06",
    number: "06",
    title: "The $29.99 Rabbit Hole",
    subtitle: "Scene storyboard + original audio",
    synopsis:
      "A neon sales-bunny turns unfinished ideas into a subscription nightmare. Explore fifteen visual story beats and hear One Yellow Sticky Note while the final film is in production.",
    status: "visual-preview",
    image: "/episode-06/images/learns-nothing.webp",
    productionUrl: "/episode-06",
    mediaNote:
      "Scene concept art, one complete standalone track, and a directed cue sheet are wired. This is not a completed or fully voiced Episode 06 film.",
  },
];

export const SPECIAL = {
  title: "The Fucking Year-End EOD Report",
  summary:
    "A full master-script special combining the reporting tribunal, production gates, and the year's accumulated operational chaos.",
  scriptUrl:
    "https://github.com/aerovista-us/126-Containers-of-Fucked/blob/main/creative/126-containers-of-fucked-master-script.md",
};
