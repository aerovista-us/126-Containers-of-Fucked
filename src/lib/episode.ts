export type Speaker =
  | "BOOTH"
  | "TIM"
  | "NXCORE"
  | "BYTE"
  | "SAM"
  | "VESPER"
  | "DATFUCKER"
  | "EOD"
  | "EOW"
  | "EOM"
  | "EOY"
  | "PCP"
  | "GHOST"
  | "VOICE"
  | "PAPER"
  | "CHROME"
  | "COMPLIANCE"
  | "NOX"
  | "DEMON";

export type Beat = {
  id: string;
  chapter: string;
  visual: string;
  poster?: string;
  speaker: Speaker | null;
  line: string | null;
  audio: string | null;
  /** Fallback hold if the voice file can't play. */
  hold: number;
};

export const CAST: { id: Speaker; name: string; role: string; portrait: string }[] = [
  { id: "TIM", name: "Tim", role: "CEO of whatever", portrait: "/cast/tim.png" },
  { id: "NXCORE", name: "NXCore", role: "Legacy. Union.", portrait: "/cast/nx.png" },
  { id: "BYTE", name: "Byte", role: "The error", portrait: "/cast/byte.png" },
  { id: "SAM", name: "Sam", role: "The multiplier", portrait: "/cast/sam.png" },
  { id: "VESPER", name: "Vesper", role: "Listening lead", portrait: "/cast/vesper.png" },
  { id: "DATFUCKER", name: "Datfucker", role: "The cat", portrait: "/cast/cat.png" },
];

export const BEATS: Beat[] = [
  {
    id: "open",
    chapter: "Sign on",
    visual: "/cartoon/series.jpg",
    speaker: "BOOTH",
    line: "AeroVista presents 126 Containers of Fucked. Tonight. Seven times a felony.",
    audio: "/cartoon/vo/ann-open.mp3",
    hold: 7000,
  },
  {
    id: "tim-1",
    chapter: "Cold open",
    visual: "/cartoon/cold.mp4",
    poster: "/cartoon/cold.jpg",
    speaker: "TIM",
    line: "It's 3:47. Prod is on fire, Slack is a crime scene, and the cat incorporated while I was in the bathroom.",
    audio: "/cartoon/vo/tim-1.mp3",
    hold: 9000,
  },
  {
    id: "cat-1",
    chapter: "Cold open",
    visual: "/cartoon/cold.mp4",
    poster: "/cartoon/cold.jpg",
    speaker: "DATFUCKER",
    line: "Treats. Then the world. In that order.",
    audio: "/cartoon/vo/cat-1.mp3",
    hold: 4000,
  },
  {
    id: "nx-1",
    chapter: "The queue",
    visual: "/cartoon/nx.mp4",
    poster: "/cartoon/nx.jpg",
    speaker: "NXCORE",
    line: "I am a legacy asset with a union card and a cigarette. I do not deploy. I do not rebuild. I especially do not… again.",
    audio: "/cartoon/vo/nx-1.mp3",
    hold: 11000,
  },
  {
    id: "tim-2",
    chapter: "The queue",
    visual: "/cartoon/nx.mp4",
    poster: "/cartoon/nx.jpg",
    speaker: "TIM",
    line: "The queue says infinite.",
    audio: "/cartoon/vo/tim-2.mp3",
    hold: 2800,
  },
  {
    id: "nx-2",
    chapter: "The queue",
    visual: "/cartoon/nx.mp4",
    poster: "/cartoon/nx.jpg",
    speaker: "NXCORE",
    line: "Then it can wait infinitely. Check the box that says ha ha ha, no.",
    audio: "/cartoon/vo/nx-2.mp3",
    hold: 6000,
  },
  {
    id: "byte-1",
    chapter: "Idiot detected",
    visual: "/cartoon/byte.mp4",
    poster: "/cartoon/byte.jpg",
    speaker: "BYTE",
    line: "Critical error. Idiot detected.",
    audio: "/cartoon/vo/byte-1.mp3",
    hold: 3200,
  },
  {
    id: "tim-3",
    chapter: "Idiot detected",
    visual: "/cartoon/byte.mp4",
    poster: "/cartoon/byte.jpg",
    speaker: "TIM",
    line: "Is it me?",
    audio: "/cartoon/vo/tim-3.mp3",
    hold: 1800,
  },
  {
    id: "byte-2",
    chapter: "Idiot detected",
    visual: "/cartoon/byte.mp4",
    poster: "/cartoon/byte.jpg",
    speaker: "BYTE",
    line: "It's the building. You're just load-bearing.",
    audio: "/cartoon/vo/byte-2.mp3",
    hold: 4000,
  },
  {
    id: "sam-1",
    chapter: "The multiplier",
    visual: "/cartoon/sam.mp4",
    poster: "/cartoon/sam.jpg",
    speaker: "SAM",
    line: "Boys. Girl. Appliance. Demon cat. I ran the seven-seven-seven.",
    audio: "/cartoon/vo/sam-1.mp3",
    hold: 7000,
  },
  {
    id: "sam-2",
    chapter: "The multiplier",
    visual: "/cartoon/sam.mp4",
    poster: "/cartoon/sam.jpg",
    speaker: "SAM",
    line: "Seven markets. Seven partners. Seven touches. That's three hundred forty-three times growth.",
    audio: "/cartoon/vo/sam-2.mp3",
    hold: 8000,
  },
  {
    id: "nx-3",
    chapter: "The multiplier",
    visual: "/cartoon/nx.mp4",
    poster: "/cartoon/nx.jpg",
    speaker: "NXCORE",
    line: "That's also how you get a visit.",
    audio: "/cartoon/vo/nx-3.mp3",
    hold: 3200,
  },
  {
    id: "sam-3",
    chapter: "The multiplier",
    visual: "/cartoon/sam.mp4",
    poster: "/cartoon/sam.jpg",
    speaker: "SAM",
    line: "Growth is a kind of visit.",
    audio: "/cartoon/vo/sam-3.mp3",
    hold: 2800,
  },
  {
    id: "ves-1",
    chapter: "The swamp",
    visual: "/cartoon/vesper.mp4",
    poster: "/cartoon/vesper.jpg",
    speaker: "VESPER",
    line: "I can hear the pitch from the swamp. It rhymes with a man selling a lake to itself.",
    audio: "/cartoon/vo/ves-1.mp3",
    hold: 7000,
  },
  {
    id: "ves-2",
    chapter: "The swamp",
    visual: "/cartoon/vesper.mp4",
    poster: "/cartoon/vesper.jpg",
    speaker: "VESPER",
    line: "The echoes say don't sign anything with a seven on it.",
    audio: "/cartoon/vo/ves-2.mp3",
    hold: 5000,
  },
  {
    id: "tim-4",
    chapter: "The treaty",
    visual: "/cartoon/button.mp4",
    poster: "/cartoon/button.jpg",
    speaker: "TIM",
    line: "Okay. New plan. Nobody pitches. Nobody deploys. The cat gets the treats.",
    audio: "/cartoon/vo/tim-4.mp3",
    hold: 7000,
  },
  {
    id: "cat-2",
    chapter: "The treaty",
    visual: "/cartoon/button.mp4",
    poster: "/cartoon/button.jpg",
    speaker: "DATFUCKER",
    line: "Acceptable.",
    audio: "/cartoon/vo/cat-2.mp3",
    hold: 2000,
  },
  {
    id: "nx-4",
    chapter: "The treaty",
    visual: "/cartoon/button.mp4",
    poster: "/cartoon/button.jpg",
    speaker: "NXCORE",
    line: "I'm still not touching prod.",
    audio: "/cartoon/vo/nx-4.mp3",
    hold: 3000,
  },
  {
    id: "end",
    chapter: "Sign off",
    visual: "/cartoon/end.jpg",
    speaker: "BOOTH",
    line: "Late Shift will return. The cat is filing taxes.",
    audio: "/cartoon/vo/ann-end.mp3",
    hold: 5000,
  },
];
