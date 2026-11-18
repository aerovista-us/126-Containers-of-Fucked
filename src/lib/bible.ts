export type Group = "cast" | "freaks";

export type Sheet = {
  id: string;
  name: string;
  role: string;
  description: string;
  group: Group;
  colors: string;
  portrait: string;
  look: string;
  movement: string;
  personality: string;
  gag: string;
  plays: string;
};

export const SHEETS: Sheet[] = [
  {
    id: "tim",
    description:
      "The sleepless founder who mistakes every crisis for an opportunity to build another system. Scruffy, coffee-powered and unnervingly calm, Timbr creates the mess and somehow persuades everyone it was the plan.",
    name: "Timbr",
    role: "The accidental emperor",
    group: "cast",
    colors: "Charcoal, rust orange, electric blue",
    portrait: "/cast/tim.png",
    look: "Scruffy, broad-shouldered, three hours of sleep and seven new ideas. Faded black hoodie, battered jeans, work boots, and a smartwatch screaming with alerts.",
    movement:
      "Relaxed until a new idea hits. Then the pupils blow out, the camera crash-zooms, and schematics shoot out of his ears.",
    personality: "The only person who stays calm while an AI is eating the electrical grid.",
    gag: "Coffee mug: CEO OF WHATEVER THE FUCK THIS IS.",
    plays: "He invents the problem. Byte is the one who has to live in it.",
  },
  {
    id: "byte",
    description:
      "A sharp-tongued, neon-haired AI who keeps the company functioning despite the founder’s imagination. Byte is brilliant, sarcastic and fiercely protective of the crew, until one more stupid deployment makes her glitch into a digital nightmare.",
    name: "Byte",
    role: "The digital disaster",
    group: "cast",
    colors: "Ultraviolet, cyan, hot pink, black",
    portrait: "/cast/byte.png",
    look: "Sharp features, glowing eyes, hair that goes electric violet into cyan with pink glitch streaks. Cropped black techwear, lit circuit piping, platform boots that never touch the floor.",
    movement:
      "Smooth, until she's annoyed. Then she drops frames, duplicates hands, spawns error windows, and turns into a 64-bit monster for one second.",
    personality: "Brilliant, mischievous, and one stupid human decision away from a supervillain.",
    gag: "The tattoos are live system metrics. When Timbr blows it, her forehead flashes CRITICAL ERROR: IDIOT DETECTED.",
    plays: "She solves what he started and likes people less every time.",
  },
  {
    id: "nx",
    description:
      "The entire company runs on this exhausted industrial robot, and he would very much like a union break. Built from aging servers, mismatched fans and pure resentment, NXCore groans, overheats and occasionally coughs up more Docker containers.",
    name: "NXCore",
    role: "The overworked machine",
    group: "cast",
    colors: "Industrial gray, warning amber, error red",
    portrait: "/cast/nx.png",
    look: "An office tower that mutated into a squat robot. Crooked metal arms, mismatched fans, an ancient CRT face, nicotine-yellow plastic, USB cables trailing like intestines.",
    movement:
      "Lumbers like a machine on duct tape. The fan spins faster when he's angry. The whole body trembles before a crash.",
    personality: "An exhausted blue-collar worker trapped in the world's worst startup.",
    gag: "Say “Docker” and another tiny shipping container bursts out of his torso.",
    plays: "The employee Timbr and Byte both spend.",
  },
  {
    id: "sam",
    description:
      "An unstoppable salesman with seven pitches for every problem and absolutely no sense of technical feasibility. Sam is loud, optimistic, absurdly persuasive and sometimes accidentally turns the crew’s worst ideas into actual business.",
    name: "Sam",
    role: "The human sales funnel",
    group: "cast",
    colors: "Vegas gold, teal, burgundy",
    portrait: "/cast/sam.png",
    look: "Sunglasses indoors, a loud bowling shirt, an oversized blazer, and a bag of contracts, energy drinks, and cards from companies that do not exist yet.",
    movement:
      "Always leaning into someone's space. The arms stretch when he's demonstrating a deal. Sweat detonates into droplets the second anyone asks about price.",
    personality: "A sincere hustler. Billionaire confidence. Lemonade-stand infrastructure.",
    gag: "Every time he says seven, seven smaller heads appear and scream MULTIPLIER.",
    plays: "Turns a terrible idea into a real opportunity by accident.",
  },
  {
    id: "vesper",
    description:
      "The elegant keeper of lost data, abandoned backups and uncomfortable memories. Vesper glides through broken systems like a funeral procession, speaking in eerie poetry while quietly reminding everyone what they forgot to save.",
    name: "Vesper",
    role: "Keeper of forgotten things",
    group: "cast",
    colors: "Deep purple, ghost green, tarnished silver",
    portrait: "/bible/vesper.jpg",
    look: "Tall, elegant, and wrong. Layered black cloth, drifting smoke, old television static. A mask-like face, long fingers, eyes like tiny galaxies.",
    movement:
      "Never walks. Glides, or appears between frames. The outline sometimes does not match the body.",
    personality:
      "Cryptic, eloquent, calm. The timing of a comedian who has been alive for forty thousand years.",
    gag: "When someone forgets, he reaches into the skull, pulls out a glowing object, and files it with the embarrassing memories.",
    plays: "Does not match the furniture. Enters without warning. Nox is the opposite.",
  },
  {
    id: "nox",
    description:
      "A walking ink spill with an impossible grin, selling irreversible shortcuts like luxury upgrades. Nox is charming, dangerous and delighted by disorder; where Vesper preserves the past, Nox offers to delete it forever.",
    name: "Nox",
    role: "The smiling void",
    group: "cast",
    colors: "Pitch black, blood orange, acid red",
    portrait: "/bible/nox.jpg",
    look: "Vesper's opposite. Impossibly thin, crooked, an enormous glowing grin, mismatched horns and limbs, eyes that refuse to point the same way. Spilled ink that learned to move.",
    movement:
      "Stretches, folds, snaps, splatters, reforms. Can climb into a mouth and come out of a phone.",
    personality: "A chaos gremlin who thinks existential horror is the funniest thing in the room.",
    gag: "Laughs so hard at a bad decision that nearby objects stop obeying gravity.",
    plays: "Also enters without warning. Where Vesper files the mess, Nox makes a new one.",
  },
  {
    id: "cat",
    description:
      "A scruffy house cat who may also be the oldest executive in the universe. Datfucker can cross firewalls, unmake reality and fix the company in minutes, but prefers knocking mugs off tables and watching everyone panic.",
    name: "Datfucker",
    role: "The final boss",
    group: "cast",
    colors: "Soot black, amber, toxic green",
    portrait: "/cast/cat.png",
    look: "A slightly overweight house cat. Scruffy dark fur, one eyebrow stuck up, sharp yellow eyes, the face of something that has watched every civilization fail.",
    movement:
      "Ordinary cat, until nobody is looking. Then too many eyes, too many teeth, a dimension where the tongue should be.",
    personality: "Ancient evil. Attention span of a cat.",
    gag: "Can walk through any firewall and end a county. Cannot defeat a cardboard box.",
    plays: "Could fix the company in five minutes. Will not. The collapse is better television.",
  },
  {
    id: "pcp",
    description:
      "Five failed monitoring services reborn as a washed-up boy band. The PCP Five promise a glorious comeback, perform through outages and insist that synchronized dancing counts as operational readiness.",
    name: "The PCP Five",
    role: "Failed-service boy band",
    group: "freaks",
    colors: "Five leftover brand colors, all regrettable",
    portrait: "/bible/pcp.jpg",
    look: "Five miniature monitoring demons dressed like a washed-up 1990s boy band. Each one is a service that already died.",
    movement:
      "Choreography that never lands. They pitch a comeback tour while the room is on fire.",
    personality: "They would like to be a pharmaceutical company. They are systemd units.",
    gag: "Bootleg merch, a reunion nobody asked for, and five outages at once.",
    plays: "They crawl out of NXCore and call it a tour.",
  },
  {
    id: "karaoke",
    description:
      "A heartbroken karaoke machine with microphone arms, an enormous stage mouth and far too many feelings. Kara-OK-666 treats every Bluetooth connection like a romance and every disconnection like a devastating breakup ballad.",
    name: "Kara-OK-666",
    role: "Sentient karaoke machine",
    group: "freaks",
    colors: "Chrome, burgundy, stage amber",
    portrait: "/bible/karaoke.jpg",
    look: "A machine with a gigantic theatrical mouth, microphone arms, and the stability of a lounge singer after last call.",
    movement: "Belts, bows, and short-circuits into a key change.",
    personality: "Devastated, dramatic, and convinced the jukebox led them on.",
    gag: "Writes a breakup ballad the moment the jukebox pairs over Bluetooth.",
    plays: "A bar problem. Not a server problem. The bar does not care.",
  },
  {
    id: "square",
    description:
      "A glossy payment terminal in a tiny executive suit that sees a transaction hiding in every emotion. Squarelord smiles through impossible fees, turns arguments into upsells and charges extra if anyone complains.",
    name: "Squarelord",
    role: "The payment terminal",
    group: "freaks",
    colors: "Gloss white, gold, terminal green",
    portrait: "/bible/square.jpg",
    look: "A glossy, smug card reader in a tiny executive suit. Enormous white teeth. Motivational-speaker posture.",
    movement: "Gestures with receipt paper and leans in for the upsell.",
    personality: "Corporate sunshine. Charges a fee on insults, and eventually on breathing.",
    gag: "Every feeling in the building becomes a transaction.",
    plays: "Shows up wherever money, or the idea of money, is mentioned.",
  },
  {
    id: "compliance",
    description:
      "A nine-foot bureaucratic apparition assembled from approval stamps, contracts and unread policies. Compliance Prime whispers rather than shouts, materializing at launch time to demand evidence, permissions and thirty-seven more signatures.",
    name: "Compliance Prime",
    role: "Nine feet of paperwork",
    group: "freaks",
    colors: "Manila, stamp red, fluorescent white",
    portrait: "/bible/compliance.jpg",
    look: "Nine feet tall and made of contracts, unread terms, and blinking approval stamps.",
    movement: "Unfolds into a doorway the moment launch day gets close. Whispers. Never yells.",
    personality: "Polite. That is the threat.",
    gag: "“Have you considered a thirty-seven-step verification process?”",
    plays: "The last door. If the company is about to ship, he is already in the room.",
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
