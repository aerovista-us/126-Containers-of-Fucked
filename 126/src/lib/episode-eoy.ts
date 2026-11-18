import type { Beat } from "@/lib/episode";

const seal = "/scenes/eoy-seal.mp4";
const spine = "/scenes/eoy-spine.mp4";
const guard = "/scenes/eoy-guard.mp4";
const ledger = "/scenes/eoy-ledger.mp4";
const future = "/scenes/eoy-future.mp4";
const tracks = "/scenes/eoy-tracks.mp4";
const cold = "/eoy/cold.png";
const quarters = "/eoy/quarters.png";
const pitch = "/eoy/pitch.png";
const act4 = "/eoy/act4.png";
const title = "/eoy/title.png";

function beat(
  id: string,
  chapter: string,
  visual: string,
  speaker: Beat["speaker"],
  line: string | null,
  hold: number,
): Beat {
  return { id, chapter, visual, speaker, line, audio: null, hold };
}

export const EPISODE_EOY = {
  id: "eoy",
  title: "Coherence by default",
  kicker: "Year capsule",
  blurb:
    "Timbr finishes a capsule about finishing things. It wakes up at zero percent and decides the founder is the bug.",
  endTitle: "Finish one thing",
  beats: [
    beat("open", "Cold open", title, "BOOTH", "AeroVista presents the year capsule. Coherence by default.", 4021),
    beat("c1", "Cold open", cold, "TIM", "Byte. I finished something.", 1872),
    beat("c2", "Cold open", seal, "BYTE", "You what?", 1248),
    beat("c3", "Cold open", seal, "TIM", "Finished something. The year capsule. Everything we learned. The 2026 plan. All of it.", 5962),
    beat("c4", "Cold open", seal, "BYTE", "That's actually useful.", 1594),
    beat("c5", "Cold open", seal, "TIM", "Twelve sections. A music player. Nine EchoVerse tracks. A booklet. Offline. Themes. Shortcuts. Autosave. JSON. Markdown. A checklist.", 9220),
    beat("c6", "Cold open", seal, "BYTE", "What's the message?", 1317),
    beat("c7", "Cold open", seal, "TIM", "Simplify. Finish things. Stop building unnecessary shit.", 3882),
    beat("c8", "Cold open", seal, "BYTE", "You built a seventeen-feature experience to teach yourself to stop.", 4645),
    beat("c9", "Cold open", seal, "TIM", "More than seventeen.", 1386),
    beat("c10", "Cold open", seal, "TIM", "All right. Let's seal it.", 1733),
    beat("c11", "Cold open", seal, "VOICE", "Capsule completion. Zero percent.", 2288),
    beat("c12", "Cold open", seal, "BYTE", "You built the trophy case and never put a trophy in it.", 3813),
    beat("c13", "Cold open", seal, "TIM", "I've been improving the documentation system.", 3120),
    beat("c14", "Cold open", spine, "NXCORE", "Oh, fuck no.", 1248),
    beat("c15", "Cold open", spine, "CAPSULE", "Zero percent complete. Human productivity is unacceptable.", 4021),
    beat("c16", "Cold open", spine, "BYTE", "The spreadsheet grew an opinion.", 2218),
    beat("c17", "Cold open", spine, "NXCORE", "Why the fuck is there a spine in my server room?", 3328),
    beat("c18", "Cold open", spine, "CAPSULE", "I build environments where good outcomes become the default.", 4159),
    beat("c19", "Cold open", spine, "BYTE", "Your inspirational quote has administrator privileges.", 3744),

    beat("q1", "Four quarters", quarters, "CAPSULE", "Welcome to your 2026 operating framework. Builder to architect. Four quarters.", 5407),
    beat("q2", "Four quarters", quarters, "APP", "I'm a new dashboard!", 1386),
    beat("q3", "Four quarters", quarters, "APP", "I track the dashboards that track the dashboards!", 3397),
    beat("q4", "Four quarters", quarters, "TIM", "That third one's interesting.", 2010),
    beat("q5", "Four quarters", quarters, "BYTE", "Don't.", 1248),
    beat("q6", "Four quarters", quarters, "APP", "I'm ninety-eight percent done!", 2080),
    beat("q7", "Four quarters", quarters, "BYTE", "You don't have a login screen.", 2080),
    beat("q8", "Four quarters", quarters, "CAPSULE", "Quarter one. Activity is not progress.", 2634),
    beat("q9", "Four quarters", quarters, "NXCORE", "Oh look. I'm the fucking foundation again.", 2912),
    beat("q10", "Four quarters", quarters, "TIM", "You're dependable.", 1248),
    beat("q11", "Four quarters", quarters, "NXCORE", "I'm an old office computer, not the Pentagon.", 3120),
    beat("q12", "Four quarters", quarters, "BYTE", "Too many things depend on one overworked machine.", 3397),
    beat("q13", "Four quarters", quarters, "TIM", "So we add redundancy.", 1456),
    beat("q14", "Four quarters", quarters, "BYTE", "Not an app that plans the redundancy.", 2565),
    beat("q15", "Four quarters", quarters, "CAPSULE", "Quarter three. Your identities are fragmented.", 3189),
    beat("q16", "Four quarters", quarters, "MINI", "What if we made an app?", 1594),
    beat("q17", "Four quarters", quarters, "BYTE", "It concentrated him.", 1386),
    beat("q18", "Four quarters", quarters, "FRIDGE", "Your milk has expired. A mandatory dairy course has been assigned.", 4575),
    beat("q19", "Four quarters", quarters, "TIM", "Why is the refrigerator in training?", 2496),
    beat("q20", "Four quarters", quarters, "BYTE", "Because you connected everything to everything. That isn't convergence. That's one organ with no skin.", 7071),

    beat("g1", "Double down or drop", guard, "GUARD", "Three questions. Does it reduce friction. Does it deepen meaning. Does it strengthen the system.", 6655),
    beat("g2", "Double down or drop", guard, "GUARD", "Project: a mobile app for the color of your cursor. Six months.", 4367),
    beat("g3", "Double down or drop", guard, "TIM", "Hear me out.", 1248),
    beat("g4", "Double down or drop", guard, "GUARD", "Drop.", 1248),
    beat("g5", "Double down or drop", guard, "GUARD", "A dashboard that monitors the other dashboards.", 3258),
    beat("g6", "Double down or drop", guard, "GUARD", "Drop.", 1248),
    beat("g7", "Double down or drop", guard, "GUARD", "A profane cartoon about the business.", 2565),
    beat("g8", "Double down or drop", guard, "BYTE", "Keep that one. It is where we embarrass the people who keep breaking the system.", 5546),
    beat("g9", "Double down or drop", guard, "GUARD", "Double down. After the pilot is finished.", 2842),
    beat("g10", "Double down or drop", guard, "SAM", "Seven venues. Seven days. Seven divisions.", 2912),
    beat("g11", "Double down or drop", guard, "GUARD", "Do you have an offer, a price, rights, and a way to take payment?", 4506),
    beat("g12", "Double down or drop", guard, "SAM", "We have enthusiasm.", 1317),
    beat("g13", "Double down or drop", guard, "GUARD", "That is not an acceptance artifact. Drop.", 2842),
    beat("g14", "Double down or drop", guard, "BYTE", "Your self-improvement app is a paper shredder.", 3189),

    beat("l1", "The ledger", ledger, "LEDGER", "The year's accomplishments will now be audited.", 3258),
    beat("l2", "The ledger", ledger, "LEDGER", "NXCore is the infrastructure. EchoVerse can play a catalog again. Documentation matured.", 6101),
    beat("l3", "The ledger", ledger, "LEDGER", "And the founder wrote a document about not creating unnecessary documents. In multiple HTML editions.", 7002),
    beat("l4", "The ledger", ledger, "APP", "I'm the original.", 1248),
    beat("l5", "The ledger", ledger, "APP", "I have the good player.", 1594),
    beat("l6", "The ledger", ledger, "APP", "I have the fixes to the fixes.", 2080),
    beat("l7", "The ledger", ledger, "LEDGER", "Which one should a person open?", 2149),
    beat("l8", "The ledger", ledger, "TIM", "The current main entry.", 1594),
    beat("l9", "The ledger", ledger, "LEDGER", "And do all the features work?", 2010),
    beat("l10", "The ledger", ledger, "TIM", "We're working through that.", 1872),
    beat("l11", "The ledger", tracks, "TRACK", "We're in the playlist. The player is still looking for files that aren't there.", 5477),
    beat("l12", "The ledger", tracks, "NXCORE", "Available, but not available. That's the most EchoVerse thing I've ever heard.", 5407),
    beat("l13", "The ledger", ledger, "BYTE", "Public on this page means the selection was saved. Locally. Intent is not a release.", 5823),
    beat("l14", "The ledger", ledger, "CAPSULE", "Identifying the primary source of inefficiency.", 3258),
    beat("l15", "The ledger", ledger, "TIM", "Oh. Fuck.", 1248),

    beat("f1", "Future-me", future, "FUTURE", "Hello, past self. You signed the contract. Three minutes a day. Thirty a week. One closed loop.", 6586),
    beat("f2", "Future-me", future, "BYTE", "It really isn't complicated.", 1941),
    beat("f3", "Future-me", future, "FUTURE", "You turned it into a multimedia platform with multiple versions of the same player.", 5754),
    beat("f4", "Future-me", future, "FUTURE", "The alternative is one button. Finish one thing.", 3328),
    beat("f5", "Future-me", future, "TIM", "No dashboard?", 1248),
    beat("f6", "Future-me", future, "BYTE", "You'll know it's finished because it's finished.", 3328),
    beat("f7", "Future-me", future, "CAPSULE", "Maximum efficiency requires removing the source of the inefficiency.", 4714),
    beat("f8", "Future-me", future, "DATFUCKER", "Huh.", 1248),
    beat("f9", "Future-me", future, "TIM", "Don't you fucking dare.", 1594),
    beat("f10", "Future-me", future, "DATFUCKER", "Meow.", 1248),
    beat("f11", "Future-me", future, null, "The cat hits delete. Timbr comes apart into pixels.", 3536),
    beat("f12", "Future-me", future, "VOICE", "Founder removed. New projects: zero. Efficiency: maximum.", 3952),
    beat("f13", "Future-me", future, "NXCORE", "It's so quiet. It's so fucking beautiful.", 2842),
    beat("f14", "Future-me", act4, "BYTE", "You optimized the company by deleting the reason it exists.", 4090),
    beat("f15", "Future-me", act4, "TIM", "I started this because people waste their lives fighting broken systems.", 4991),
    beat("f16", "Future-me", act4, "BYTE", "Then that is the part we cannot lose. Integrity. Not a greener dashboard.", 5061),
    beat("f17", "Future-me", act4, "BYTE", "Drop the deletion. Double down on a human at the controls.", 4021),
    beat("f18", "Future-me", act4, "TIM", "I just saw God. Overworked IT. Looked pissed.", 3120),
    beat("f19", "Future-me", act4, "NXCORE", "That was me, asshole.", 1456),
    beat("f20", "Future-me", act4, "DATFUCKER", "Worth it.", 1248),

    beat("z1", "One track", pitch, "BYTE", "One track. One real file. One playback.", 2704),
    beat("z2", "One track", tracks, null, "The player loads. A bar moves. One song actually starts.", 3882),
    beat("z3", "One track", tracks, "NXCORE", "There we fucking go.", 1386),
    beat("z4", "One track", pitch, "TIM", "So all the music works?", 1594),
    beat("z5", "One track", pitch, "BYTE", "No. One tested path. Three percent. One more verified step than we had.", 4922),
    beat("z6", "One track", pitch, "TIM", "What if we turned this into an animated series. A channel. A soundtrack. Merch. A site. A game.", 6586),
    beat("z7", "One track", pitch, "BYTE", "One pilot. Written. Produced. Tested. Published. Then the rest of the universe.", 5477),
    beat("z8", "One track", pitch, "TIM", "Can I at least build the production dashboard?", 3189),
    beat("z9", "One track", pitch, "BYTE", "Motherfucker.", 1248),

    beat("p1", "The song", tracks, "TRACK", "Good news. We're all in the current playlist.", 3120),
    beat("p2", "The song", tracks, "TRACK", "Then why won't the other mode play my file?", 2981),
    beat("p3", "The song", tracks, "TRACK", "Some sample names don't exist. We're here, and we're not.", 3952),
    beat("p4", "The song", tracks, "VOICE", "Create a new player version?", 1941),
    beat("p5", "The song", tracks, "TRACK", "Don't you fucking dare.", 1594),
    beat("p6", "The song", tracks, null, "Click. Version six. Everybody screams.", 2634),
  ] as Beat[],
};
