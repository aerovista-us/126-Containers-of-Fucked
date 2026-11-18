import type { Beat } from "@/lib/episode";

const count = "/scenes/e03-127.mp4";
const eod = "/scenes/e03-eod.mp4";
const shop = "/scenes/e03-stickers.mp4";
const sam = "/scenes/e03-sam.mp4";
const cast = "/scenes/e03-bytecast.mp4";
const chat = "/scenes/e03-messenger.mp4";
const git = "/scenes/e03-git.mp4";
const pcp = "/scenes/e03-pcp.mp4";
const songs = "/scenes/e03-songs.mp4";
const tag = "/scenes/e03-tag.mp4";
const papers = "/scenes/e02-papers.mp4";
const compliance = "/scenes/e02-compliance.mp4";
const nox = "/scenes/nox-gravity.mp4";
const cat = "/scenes/cat-eyes.mp4";

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

export const EPISODE_03 = {
  id: "e03",
  title: "Two ahead, 328 behind",
  kicker: "Episode 03",
  blurb:
    "Seventy-two hours. The containers had a baby. Checkout is still off. Merged is not a sale.",
  endTitle: "No production changes",
  beats: [
    beat("open", "Cold open", "/cartoon/series.jpg", "BOOTH", "AeroVista presents episode three. Seventy-two hours.", 6500),
    beat("c1", "Cold open", count, "TIM", "Pulse is in. Material progress.", 3500),
    beat("c2", "Cold open", count, "BYTE", "Say the number.", 2200),
    beat("c3", "Cold open", count, "TIM", "One hundred and twenty-seven containers.", 4000),
    beat("c4", "Cold open", count, "BYTE", "The show is called one hundred and twenty-six.", 4200),
    beat("c5", "Cold open", count, "NXCORE", "I grew. You're welcome.", 3000),
    beat("c6", "Cold open", count, "BYTE", "Growing is not a milestone.", 3200),
    beat("c7", "Cold open", count, "TIM", "Root disk is seventy-four percent. Thirty-eight gigs free. Five PCP units still failed.", 7000),
    beat("c8", "Cold open", eod, "EOD", "Seventy-two hour report. Please state your accomplishments.", 5500),
    beat("c9", "Cold open", eod, "TIM", "Apparel. ByteCast. Messenger. Staff. Evidence.", 5000),
    beat("c10", "Cold open", eod, "EOD", "And the gate?", 2500),
    beat("c11", "Cold open", eod, "BYTE", "Still gated.", 2200),
    beat("c12", "Cold open", eod, null, "The stapler vomits checkmarks. Every one of them says MERGED.", 5000),
    beat("c13", "Cold open", eod, "BYTE", "Merged is not sold.", 2800),

    beat("a1", "The shelf", shop, "EOD", "Stickers. Eight fifty, then six, then five. Skyline Crest. Powder Peaks. Mount Sled.", 7500),
    beat("a2", "The shelf", shop, "EOD", "A men's gallery. A camo duffle in the back-right. Source merged at 9:09.", 6500),
    beat("a3", "The shelf", shop, "TIM", "That's a store.", 2200),
    beat("a4", "The shelf", shop, "BYTE", "Checkout is off.", 2400),
    beat("a5", "The shelf", shop, "TIM", "The prices are locked.", 2800),
    beat("a6", "The shelf", shop, "BYTE", "Locked is not paid. Thirteen variation IDs in the back. Twelve on the front.", 6500),
    beat("a7", "The shelf", shop, "SQUARE", "I can charge them for looking at the duffle.", 4000),
    beat("a8", "The shelf", shop, "BYTE", "You can sit down.", 2400),
    beat("a9", "The shelf", shop, "TIM", "The code merged.", 2200),
    beat("a10", "The shelf", shop, "BYTE", "GitHub is not a customer.", 3200),
    beat("a11", "The shelf", shop, "EOD", "Catalog main is missing the October image pull. Tests passed. The pictures did not.", 7000),
    beat("a12", "The shelf", shop, "TIM", "One hundred and fourteen tests.", 3000),
    beat("a13", "The shelf", shop, "BYTE", "None of them were a person buying a sticker.", 4000),

    beat("s1", "Seven empty chairs", sam, "SAM", "Did someone say venues?", 2800),
    beat("s2", "Seven empty chairs", sam, "SAM", "Seven venues. Seven days. Seven divisions. I built the tool.", 6000),
    beat("s3", "Seven empty chairs", sam, "BYTE", "Is it synced?", 2200),
    beat("s4", "Seven empty chairs", sam, "SAM", "It's offline-first.", 2800),
    beat("s5", "Seven empty chairs", sam, "BYTE", "So it's a diary.", 2400),
    beat("s6", "Seven empty chairs", sam, "SAM", "Five recordings. EchoVerse. A DJ. Karaoke. Venue radio. Advertising.", 6500),
    beat("s7", "Seven empty chairs", sam, "EOD", "How many venues are on the list?", 3500),
    beat("s8", "Seven empty chairs", sam, "SAM", "The list is a feeling.", 2800),
    beat("s9", "Seven empty chairs", sam, "BYTE", "Jesus Christ, Sam.", 2400),
    beat("s10", "Seven empty chairs", sam, "SAM", "The chairs are spiritually reserved.", 3200),
    beat("s11", "Seven empty chairs", sam, "EOD", "Unproven value detected.", 3000),

    beat("b1", "Not live", cast, "BYTE", "ByteCast. Forty-three episodes in the registry. Ten slides. A quest. A five-question quiz.", 7500),
    beat("b2", "Not live", cast, "TIM", "Golden path.", 2000),
    beat("b3", "Not live", cast, "BYTE", "Sixteen of twenty-three checks. That is not a path. That is a hallway with the lights out.", 7000),
    beat("b4", "Not live", cast, "VOICE", "Authenticated end user: unverified.", 3500),
    beat("b5", "Not live", cast, "TIM", "The identity bridge merged.", 2800),
    beat("b6", "Not live", cast, "BYTE", "Four more pulls are still open. A badge you can forge is a sticker.", 5500),
    beat("b7", "Not live", cast, "EOD", "I will mark the course complete.", 3200),
    beat("b8", "Not live", cast, "BYTE", "You will not.", 2000),

    beat("m1", "401", chat, "TIM", "Messenger plays MP3s now. Little deck. Scroll fix. Byte knows things.", 6000),
    beat("m2", "401", chat, "BYTE", "Anonymous hits a 401. That is a locked door, not a fan.", 5000),
    beat("m3", "401", chat, "TIM", "Seven conversations are still in there. Fifty messages. The database checked out.", 6500),
    beat("m4", "401", chat, "BYTE", "A healthy database is not two people talking.", 4000),
    beat("m5", "401", chat, "NXCORE", "I am online. That is the only sentence I trust in this report.", 5000),

    beat("k1", "Reported", papers, "TIM", "Kyle's machine is done. Start here. Inbox. Outbox. Explorer. No admin keys.", 7000),
    beat("k2", "Reported", papers, "BYTE", "Reported. His screen is not on our desk.", 4000),
    beat("k3", "Reported", papers, "TIM", "Jeanette sent the sticker archive. Receipts. A todo.", 4500),
    beat("k4", "Reported", papers, "BYTE", "Did anyone open the zip?", 2800),
    beat("k5", "Reported", papers, "TIM", "The receipt exists.", 2400),
    beat("k6", "Reported", papers, "BYTE", "A receipt for a box you didn't open is a rumor with a hash.", 5000),
    beat("k7", "Reported", compliance, "COMPLIANCE", "Before the staff touch a client record, I have thirty-seven steps and a whisper.", 6500),
    beat("k8", "Reported", compliance, "TIM", "He doesn't have client records.", 3000),
    beat("k9", "Reported", compliance, "COMPLIANCE", "Good. Write that down. Then prove it while I watch.", 4500),

    beat("g1", "The drift", git, "NXCORE", "One hundred eighty-seven files in the work tree. I did not commit them. They are haunting me.", 7000),
    beat("g2", "The drift", git, "TIM", "We're two ahead.", 2200),
    beat("g3", "The drift", git, "BYTE", "And three hundred and twenty-eight behind.", 4000),
    beat("g4", "The drift", git, "TIM", "That's momentum.", 2200),
    beat("g5", "The drift", git, "BYTE", "That's a car in a ditch, facing the right way.", 4500),
    beat("g6", "The drift", git, "EOD", "I can mark the branch complete if you say the word.", 4500),
    beat("g7", "The drift", git, "BYTE", "Do not pull. Do not push. Snapshot it and get out.", 4500),
    beat("g8", "The drift", pcp, "PCP", "We're still back, bitches.", 2800),
    beat("g9", "The drift", pcp, "NXCORE", "Five of you. Still failed. The disk is seventy-four percent. Leave.", 6000),
    beat("g10", "The drift", pcp, "PCP", "We got the audit daemon on our side.", 3500),
    beat("g11", "The drift", pcp, "BYTE", "Auditd is awake. You are not a comeback tour.", 4500),

    beat("v1", "Almosts", songs, "VESPER", "The six transmissions are not masters. I have filed them with the other almosts.", 6500),
    beat("v2", "Almosts", songs, "TIM", "They're good.", 1800),
    beat("v3", "Almosts", songs, "VESPER", "Good is not playable. Playable is not licensed. Licensed is not in the catalog.", 6500),
    beat("v4", "Almosts", songs, "BYTE", "That's annoyingly the whole company.", 3500),
    beat("n1", "Almosts", nox, "NOX", "I can make the branch feel caught up.", 3500),
    beat("n2", "Almosts", nox, "TIM", "What's the catch?", 2000),
    beat("n3", "Almosts", nox, "NOX", "You will still be three hundred and twenty-eight behind. You just won't mind.", 6000),
    beat("n4", "Almosts", nox, "TIM", "Pass.", 1600),

    beat("d1", "The number", cat, "DATFUCKER", "Your problem is still your definition of done.", 4000),
    beat("d2", "The number", cat, "SAM", "The cat's back.", 2000),
    beat("d3", "The number", cat, "BYTE", "He never left. He just waited for a report.", 4000),
    beat("d4", "The number", count, "EOD", "Thirty-nine projects. Two hundred seventy-eight tasks. The log matches. Say it shipped.", 7000),
    beat("d5", "The number", count, "TIM", "No.", 1800),
    beat("d6", "The number", count, "TIM", "Source merged. Checkout dark. Identity open. Five services still dead.", 6500),
    beat("d7", "The number", shop, "TIM", "The duffle is on the floor of a repo. Not in a cart.", 4500),
    beat("d8", "The number", sam, "TIM", "Sam has a tool and zero venues with a yes.", 4000),
    beat("d9", "The number", songs, "TIM", "The songs are drafts. The zip is shut. The work log is honest. That is the accomplishment.", 7000),
    beat("d10", "The number", eod, "EOD", "Specificity.", 2500),
    beat("d11", "The number", eod, null, "The stapler shrinks until it is just a stapler.", 4000),
    beat("d12", "The number", count, "BYTE", "No production changes.", 2800),
    beat("d13", "The number", count, "NXCORE", "Leave the one hundred and twenty-seventh container. And fix my five corpses.", 6000),
    beat("d14", "The number", count, "BYTE", "Not tonight.", 2000),
    beat("d15", "The number", count, "NXCORE", "Then stop naming the show after me.", 3500),

    beat("p1", "Post-credits", tag, null, "2:40 a.m. The cat is alone with the pulse.", 4000),
    beat("p2", "Post-credits", tag, null, "He titles a new file: 72 hours, final. Everything is healthy. We are entering an exciting phase.", 7500),
    beat("p3", "Post-credits", tag, "DATFUCKER", "Heh.", 1800),
    beat("p4", "Post-credits", tag, "BYTE", "I can hear you, cat.", 2800),
    beat("p5", "Post-credits", tag, "EOY", "Quarter one does not care what you heard.", 4500),
  ] as Beat[],
};
