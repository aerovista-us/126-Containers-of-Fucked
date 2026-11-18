import type { Beat } from "@/lib/episode";

const coldA = "/scenes/e05r-cold-a.mp4";
const coldB = "/scenes/e05r-cold-b.mp4";
const burstA = "/scenes/e05r-burst-a.mp4";
const galaxy = "/scenes/e05r-galaxy.mp4";
const clones = "/scenes/e05r-clones.mp4";
const volA = "/scenes/e05r-vol-a.mp4";
const volB = "/scenes/e05r-vol-b.mp4";
const vault = "/scenes/e05r-vault.mp4";
const checkA = "/scenes/e05r-check-a.mp4";
const check = "/scenes/e05r-check.mp4";
const cat = "/scenes/e05r-cat.mp4";
const catops = "/scenes/e05r-catops.mp4";
const sam = "/scenes/e05r-sam.mp4";
const samB = "/scenes/e05r-sam-b.mp4";
const board = "/scenes/e05r-board.mp4";
const door = "/scenes/e05r-door.mp4";
const pcp = "/scenes/e05r-pcp.mp4";
const box = "/scenes/cat-box.mp4";
const tanks = "/scenes/e05x-tanks.mp4";
const nx = "/scenes/e05x-nx.mp4";
const burst = "/scenes/e05-burst.mp4";

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

export const EPISODE_05 = {
  id: "e05",
  title: "The clusterfuck",
  kicker: "Episode 05",
  blurb: "The server is running. Nobody knows what the fuck it's running.",
  endTitle: "One inventory",
  beats: [
    beat("open", "Cold open", "/cartoon/series.jpg", "BOOTH", "AeroVista presents episode five. The server is running. Nobody knows what the fuck it's running.", 7000),
    beat("c1", "One fucking thing", coldA, "TIM", "Future Me had a point. Today we finish one thing. An inventory. Every app, every drive, every deployment. Then we go to bed.", 7500),
    beat("c2", "One fucking thing", coldA, "BYTE", "I like that plan. It's small, measurable, and suspiciously unlike you.", 4500),
    beat("c3", "One fucking thing", coldA, "TIM", "See? Personal growth.", 1800),
    beat("c4", "One fucking thing", burstA, "NXCORE", "One hundred and forty running. This show is called a hundred and twenty-six. My fucking workload outgrew the title.", 7000),
    beat("c5", "One fucking thing", burstA, "TIM", "It's a legacy brand.", 1800),
    beat("c6", "One fucking thing", burstA, "BYTE", "It's technical debt with merchandise.", 2800),
    beat("c7", "One fucking thing", "/scenes/e05a-cold.mp4", "FUTURE", "You had one job.", 1800),
    beat("c8", "One fucking thing", "/cartoon/series.jpg", "BOOTH", "Fourteen additional fucks not included in the original purchase.", 4000),

    beat("a1", "Family tree", galaxy, "BYTE", "A repository holds code. A checkout is a copy. A container runs a package. A route tells a browser where to knock. They are not the same object.", 8000),
    beat("a2", "Family tree", galaxy, "TIM", "We've got a hundred and eighty-nine repos. So… a hundred and eighty-nine apps?", 4500),
    beat("a3", "Family tree", galaxy, "BYTE", "No. And if you turn this into a dashboard, I'm filing for emancipation.", 4500),
    beat("a4", "Family tree", clones, "CLONE", "I'm canonical.", 1400),
    beat("a5", "Family tree", clones, "CLONE", "He's a September backup.", 1800),
    beat("a6", "Family tree", clones, "CLONE", "I have a green check.", 1600),
    beat("a7", "Family tree", clones, "CLONE", "My code is newer.", 1600),
    beat("a8", "Family tree", clones, "CLONE", "I'm the one the customers actually hit.", 2800),
    beat("a9", "Family tree", clones, "BYTE", "Then tell me the exact build commit and image digest.", 3500),
    beat("a10", "Family tree", clones, null, "Every clone looks away. The cowboy one whistles.", 3000),
    beat("a11", "Family tree", clones, "TIM", "Could we just vote?", 1600),
    beat("a12", "Family tree", clones, "BYTE", "We cannot elect our way into knowing what software is deployed.", 4000),
    beat("a13", "Family tree", checkA, "CHECK", "Six hundred and three tests, baby.", 2500),
    beat("a14", "Family tree", checkA, "BYTE", "Wonderful. Can our two actual users sign in with the right permissions?", 4000),
    beat("a15", "Family tree", door, "COMPLIANCE", "Identity verified. Permission denied.", 2800),
    beat("a16", "Family tree", door, "TIM", "I'm the CEO.", 1400),
    beat("a17", "Family tree", door, "COMPLIANCE", "Then you should appreciate separation of duties.", 3200),
    beat("a18", "Family tree", door, "BYTE", "That was the most honest thing bureaucracy has ever said.", 3500),
    beat("a19", "Family tree", sam, "SAM", "Eleven apps. Eleven brands. Seven to seven people in seven minutes.", 4500),
    beat("a20", "Family tree", sam, "BYTE", "Not how multiplication works.", 2000),
    beat("a21", "Family tree", sam, "SAM", "Not with that attitude.", 1800),
    beat("a22", "Family tree", sam, "CLONE", "I offer unlimited scalability.", 2200),
    beat("a23", "Family tree", sam, "CLONE", "I'm a database migration wearing a trench coat.", 3000),
    beat("a24", "Family tree", clones, "NXCORE", "I raised you little bastards and not one of you knows where you came from.", 4500),
    beat("a25", "Family tree", galaxy, null, "The family portrait folds into a loop. The label says: source of truth?", 4000),

    beat("v1", "Unclaimed", volA, "BYTE", "Eighty-six volumes were recorded. Fifty-four weren't attached to a container.", 4500),
    beat("v2", "Unclaimed", volA, "TIM", "Fifty-four leftovers? Can we delete them?", 2800),
    beat("v3", "Unclaimed", volA, "NXCORE", "Say that again. I fucking dare you.", 2500),
    beat("v4", "Unclaimed", volA, "BYTE", "Unattached does not mean empty. The contents weren't inspected. Nobody deletes anything.", 5500),
    beat("v5", "Unclaimed", volA, "VESPER", "Every forgotten drive remembers the hand that made it.", 3500),
    beat("v6", "Unclaimed", volA, "TIM", "That's beautiful.", 1400),
    beat("v7", "Unclaimed", volA, "VESPER", "This one is the same project renamed nine times. This one is an unfinished novel about the cluster. This one is an invoice signed by a printer.", 7500),
    beat("v8", "Unclaimed", volA, "BYTE", "Less beautiful.", 1400),
    beat("v9", "Unclaimed", volA, "NOX", "I can make all of them disappear. One command. No mess. No memories.", 4500),
    beat("v10", "Unclaimed", volA, "TIM", "What's the catch?", 1400),
    beat("v11", "Unclaimed", volA, "NOX", "You won't remember what you lost. Premium tier also deletes shame.", 4000),
    beat("v12", "Unclaimed", volA, "BYTE", "Disaster recovery by gaslighting. Original.", 3000),
    beat("v13", "Unclaimed", volA, "SAM", "Do you have a reseller program?", 2200),
    beat("v14", "Unclaimed", volA, "NXCORE", "Get the fuck out of my organs.", 2200),
    beat("v15", "Unclaimed", pcp, "PCP", "We were down, but not out. Systemd can't keep us down.", 3500),
    beat("v16", "Unclaimed", pcp, "BYTE", "You're five failed monitoring services.", 2500),
    beat("v17", "Unclaimed", pcp, "PCP", "We call it an extended hiatus.", 2200),
    beat("v18", "Unclaimed", pcp, "NXCORE", "I call it a fucking incident.", 2200),
    beat("v19", "Unclaimed", box, null, "The cat leaps into an empty box. The cavern folds in after him. Everybody else screams.", 4500),

    beat("b1", "Not a feeling", vault, "BYTE", "Some backups have recent evidence. Good. Off-host copies were stale or unverified. The album library had no demonstrated full backup.", 8000),
    beat("b2", "Not a feeling", vault, "TIM", "We've got copies on another drive.", 2200),
    beat("b3", "Not a feeling", vault, "BYTE", "A copy in the same building isn't proof you can recover after the building loses the argument with electricity.", 6500),
    beat("b4", "Not a feeling", vault, "SKELETON", "The good news is I'm encrypted. The bad news is nobody's visited me since summer.", 5000),
    beat("b5", "Not a feeling", vault, "NXCORE", "I've been begging for a restore test since my first hip replacement.", 4000),
    beat("b6", "Not a feeling", vault, "TIM", "You have hips?", 1400),
    beat("b7", "Not a feeling", vault, "NXCORE", "They're SATA brackets. Show some respect.", 2800),
    beat("b8", "Not a feeling", volB, "VESPER", "The songs were never only rows in a catalog. A list of titles cannot sing them back.", 5000),
    beat("b9", "Not a feeling", volB, "BYTE", "A catalog snapshot isn't a media backup. If the masters vanish, we can't rebuild the music from a spreadsheet.", 6000),
    beat("b10", "Not a feeling", volB, "NOX", "Every file restored. Every memory intact. No testing required.", 4000),
    beat("b11", "Not a feeling", volB, "BYTE", "And the price?", 1400),
    beat("b12", "Not a feeling", volB, "NOX", "Ownership of every future version of you.", 2800),
    beat("b13", "Not a feeling", volB, "TIM", "That's steep.", 1400),
    beat("b14", "Not a feeling", samB, "SAM", "Can we put it on seven monthly payments?", 2500),
    beat("b15", "Not a feeling", door, "COMPLIANCE", "Unverified provider claim.", 2000),
    beat("b16", "Not a feeling", check, "CHECK", "All systems healthy. Every project complete. Backups restorable.", 4500),
    beat("b17", "Not a feeling", check, "BYTE", "No. You're bundling five different statements into one lying green sticker.", 4500),
    beat("b18", "Not a feeling", check, "CHECK", "Green means good.", 1600),
    beat("b19", "Not a feeling", check, "TIM", "It is a pretty shade of green.", 2200),
    beat("b20", "Not a feeling", check, "BYTE", "Timbr.", 1200),
    beat("b21", "Not a feeling", check, "TIM", "Sorry.", 1000),

    beat("f1", "Finish one", check, "CHECK", "You have a hundred and fifty completed tasks. Why not mark the rest complete too?", 5000),
    beat("f2", "Finish one", check, "TIM", "Because the other ones aren't done.", 2200),
    beat("f3", "Finish one", check, "CHECK", "Mark them complete and your dashboard will look fucking incredible.", 4000),
    beat("f4", "Finish one", samB, "SAM", "What if we sold the dashboard?", 2200),
    beat("f5", "Finish one", samB, "BYTE", "Sam.", 1000),
    beat("f6", "Finish one", cat, null, "The cat walks across the keyboard. Delete everything. Yes or no. His paw hovers.", 5000),
    beat("f7", "Finish one", cat, "TIM", "DatFucker. Buddy. Treats. Endless treats.", 3000),
    beat("f8", "Finish one", cat, "DATFUCKER", "Mrrp.", 1200),
    beat("f9", "Finish one", cat, null, "He sits on cancel. A tiny note: no destructive action taken.", 4000),
    beat("f10", "Finish one", cat, "NXCORE", "Holy shit. The cat's our entire change-management department.", 4000),
    beat("f11", "Finish one", board, "BYTE", "No, he isn't. We are not giving the cat root. Again.", 3500),
    beat("f12", "Finish one", board, "BYTE", "One inventory snapshot. Every observation gets a timestamp. A runtime links to a route, a revision, an owner, and a data location only when proven. Unknown stays unknown.", 9000),
    beat("f13", "Finish one", board, "TIM", "And no deletion?", 1400),
    beat("f14", "Finish one", board, "BYTE", "None. No deploy. No invented recovery. No fake green checks.", 4000),
    beat("f15", "Finish one", board, "NXCORE", "And a maintenance window that isn't scheduled during my fucking funeral.", 4000),
    beat("f16", "Finish one", board, "TIM", "Yes.", 1000),
    beat("f17", "Finish one", board, "SAM", "Can I sell the registry?", 1800),
    beat("f18", "Finish one", board, "BYTE", "You can sell competent operations after we've demonstrated competent operations.", 4500),
    beat("f19", "Finish one", board, "CHECK", "But the investor deck.", 1600),
    beat("f20", "Finish one", board, "TIM", "We can tell the truth in the investor deck.", 2800),
    beat("f21", "Finish one", board, "CHECK", "My only weakness. Qualified claims.", 2500),
    beat("f22", "Finish one", board, null, "He shrinks into one small icon. Snapshot saved. Acceptance pending.", 4000),
    beat("f23", "Finish one", board, "BYTE", "Fictional episode result. Do not confuse with production.", 3500),
    beat("f24", "Finish one", board, "TIM", "We finished a bounded job.", 2000),
    beat("f25", "Finish one", nx, "NXCORE", "And I am still running one hundred and forty fucking containers.", 3500),
    beat("f26", "Finish one", nx, "TIM", "Maybe we should update the show title.", 2500),
    beat("f27", "Finish one", samB, "SAM", "A hundred and forty containers of fucked. Fourteen more problems. Premium tier.", 4500),
    beat("f28", "Finish one", samB, "BYTE", "Absolutely not. The lawyers would have to redo the trademark search.", 4000),
    beat("f29", "Finish one", tanks, "VESPER", "A name does not have to contain the whole truth to carry the memory of its beginning.", 5000),
    beat("f30", "Finish one", burst, "NXCORE", "Or we could stop starting shit.", 2500),
    beat("f31", "Finish one", coldB, "TIM", "You're right. No new apps tonight.", 2500),
    beat("f32", "Finish one", coldB, null, "Everyone exhales.", 1600),
    beat("f33", "Finish one", coldB, "TIM", "But what if we made an app that explains why we're not making new apps?", 4500),
    beat("f34", "Finish one", coldB, "BYTE", "This motherfucker.", 2000),

    beat("p1", "Post-credits", catops, "DATFUCKER", "One authority per domain, bitches.", 2800),
    beat("p2", "Post-credits", catops, null, "He bats the golden orb under the refrigerator. New project: CatOps.", 4500),
  ] as Beat[],
};
