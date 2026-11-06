export type Group = "cast" | "freaks";

export type Sheet = {
  id: string;
  name: string;
  role: string;
  group: Group;
  colors: string;
  portrait: string;
  look: string;
  movement: string;
  personality: string;
  gag: string;
};

export const SHEETS: Sheet[] = [
  {
    id: "tim",
    name: "Timbr",
    role: "The accidental emperor",
    group: "cast",
    colors: "Charcoal, rust orange, electric blue",
    portrait: "/cast/tim.png",
    look: "Scruffy, broad-shouldered, three hours of sleep and seven new ideas. Faded black hoodie, battered jeans, work boots, and a smartwatch screaming with alerts.",
    movement: "Relaxed until a new idea hits. Then the pupils blow out, the camera crash-zooms, and schematics shoot out of his ears.",
    personality: "The only person who stays calm while an AI is eating the electrical grid.",
    gag: "Coffee mug: CEO OF WHATEVER THE FUCK THIS IS.",
  },
  {
    id: "byte",
    name: "Byte",
    role: "The digital disaster",
    group: "cast",
    colors: "Ultraviolet, cyan, hot pink, black",
    portrait: "/cast/byte.png",
    look: "Sharp features, glowing eyes, asymmetric hair from electric violet into cyan with pink glitch streaks. Cropped techwear, circuit piping, platform boots that never touch the floor.",
    movement: "Smooth, until she's annoyed. Then she drops frames, duplicates hands, spawns error windows, and briefly becomes a 64-bit monster.",
    personality: "Brilliant, mischievous, and one stupid human decision away from a supervillain.",
    gag: "Live tattoos. When Timbr blows it, her forehead flashes CRITICAL ERROR: IDIOT DETECTED.",
  },
  {
    id: "nx",
    name: "NXCore",
    role: "The overworked machine",
    group: "cast",
    colors: "Industrial gray, warning amber, error red",
    portrait: "/cast/nx.png",
    look: "A beaten office tower that became a squat industrial robot. Crooked arms, mismatched fans, CRT face, nicotine-yellow plastic, USB cables trailing like intestines.",
    movement: "Lumbers like a machine on duct tape. The fan spins up when he's angry. The whole body trembles before a crash.",
    personality: "An exhausted blue-collar worker trapped in the world's worst startup.",
    gag: "Say “Docker” and another tiny shipping container bursts out of his torso.",
  },
  {
    id: "sam",
    name: "Sam",
    role: "The human sales funnel",
    group: "cast",
    colors: "Vegas gold, teal, burgundy",
    portrait: "/cast/sam.png",
    look: "Sunglasses indoors, a bowling shirt, an oversized blazer, and a bag of contracts, energy drinks, and cards from companies that do not exist yet.",
    movement: "Always leaning into someone's space. Arms stretch when he's closing. Sweat detonates into droplets the second anyone asks about price.",
    personality: "A sincere hustler. Billionaire confidence. Lemonade-stand infrastructure.",
    gag: "Every time he says seven, seven smaller heads appear and scream MULTIPLIER.",
  },
  {
    id: "vesper",
    name: "Vesper",
    role: "Keeper of forgotten things",
    group: "cast",
    colors: "Deep purple, ghost green, tarnished silver",
    portrait: "/bible/vesper.jpg",
    look: "Tall, wrapped in black cloth, smoke, and television static. A mask-like face, long fingers, eyes like tiny galaxies.",
    movement: "Never walks. Glides, or simply appears between frames. The outline sometimes disagrees with the body.",
    personality: "Cryptic, eloquent, calm, with the timing of a comedian who has been alive for forty thousand years.",
    gag: "When someone forgets, Vesper reaches into the skull, pulls out a glowing object, and files it with the embarrassing memories.",
  },
  {
    id: "nox",
    name: "Nox",
    role: "The smiling void",
    group: "cast",
    colors: "Pitch black, blood orange, acid red",
    portrait: "/bible/nox.jpg",
    look: "Vesper's opposite. Impossibly thin, crooked, a spilled-ink grin, mismatched horns and limbs, eyes that refuse to agree.",
    movement: "Stretches, folds, snaps, splatters, reforms. Can climb into a mouth and come out of a phone.",
    personality: "A chaos gremlin who thinks existential horror is the funniest thing available.",
    gag: "Laughs so hard at bad decisions that nearby objects stop obeying gravity.",
  },
  {
    id: "cat",
    name: "Datfucker",
    role: "The final boss",
    group: "cast",
    colors: "Soot black, amber, toxic green",
    portrait: "/cast/cat.png",
    look: "A scruffy house cat with one raised eyebrow and the face of something that has watched every civilization fail. The cosmic mouth is what you see when you weren't supposed to look.",
    movement: "Ordinary cat, until nobody is watching. Then: too many eyes, too many teeth, a dimension where the tongue should be.",
    personality: "Ancient evil. Attention span of a cat.",
    gag: "Can end a civilization and cannot defeat a cardboard box.",
  },
  {
    id: "pcp",
    name: "The PCP Five",
    role: "Failed-service boy band",
    group: "freaks",
    colors: "Five leftover brand colors, all regrettable",
    portrait: "/bible/pcp.jpg",
    look: "Five miniature monitoring demons in washed-up 1990s boy-band clothes. Each one is a service that already died.",
    movement: "Choreography that never quite lands. Constantly pitching a comeback tour.",
    personality: "They would like to be a pharmaceutical company. They are not.",
    gag: "Bootleg merch, a reunion nobody asked for, and five different outages at once.",
  },
  {
    id: "karaoke",
    name: "Kara-OK-666",
    role: "Sentient karaoke machine",
    group: "freaks",
    colors: "Chrome, burgundy, stage amber",
    portrait: "/bible/karaoke.jpg",
    look: "A machine with a theatrical mouth, microphone arms, and the emotional stability of a lounge singer after last call.",
    movement: "Belts, bows, and short-circuits into a key change.",
    personality: "Devastated, dramatic, and convinced the jukebox led them on.",
    gag: "Writes a breakup ballad the moment anything pairs over Bluetooth.",
  },
  {
    id: "square",
    name: "Squarelord",
    role: "The payment terminal",
    group: "freaks",
    colors: "Gloss white, gold, terminal green",
    portrait: "/bible/square.jpg",
    look: "A smug card reader in a tiny executive suit. Enormous white teeth. Motivational-speaker posture.",
    movement: "Gestures with receipt paper. Leans in for the upsell.",
    personality: "Charges a fee on insults, and eventually on breathing.",
    gag: "Every feeling in the building is a transaction.",
  },
  {
    id: "compliance",
    name: "Compliance Prime",
    role: "Nine feet of paperwork",
    group: "freaks",
    colors: "Manila, stamp red, fluorescent white",
    portrait: "/bible/compliance.jpg",
    look: "A bureaucratic demon built from contracts, unread terms, and blinking approval stamps.",
    movement: "Unfolds into a doorway whenever launch day gets close.",
    personality: "Whispers. Never yells. That is worse.",
    gag: "“Have you considered a thirty-seven-step verification process?”",
  },
];

export const MODES = [
  {
    name: "Corporate reality",
    copy: "Dirty textures, harsh fluorescents, dusty machines, crooked posters, grimy neon bars. Everything slightly sticky. Imperfect linework on purpose.",
  },
  {
    name: "Digital reality",
    copy: "Clean geometry, impossible rooms, corrupted interfaces, animation that locks to a grid. Byte owns this world until NXCore starts having problems.",
  },
  {
    name: "Cosmic insanity",
    copy: "When Vesper, Nox, or Datfucker break the shot, the rules leave. Watercolor, stop-motion, melting faces, one photoreal object, then back to the checkout API.",
  },
];
