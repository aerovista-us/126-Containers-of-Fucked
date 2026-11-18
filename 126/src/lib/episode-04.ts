import type { Beat } from "@/lib/episode";

const home = "/scenes/e04-home.mp4";
const shop = "/scenes/e04-checkout.mp4";
const sold = "/scenes/e04-sold.mp4";
const songs = "/scenes/e04-songs.mp4";
const cart = "/scenes/e04-cart.mp4";
const badges = "/scenes/e04-badges.mp4";
const support = "/scenes/e04-support.mp4";
const price = "/scenes/e04-price.mp4";
const compliance = "/scenes/e04-compliance.mp4";
const tag = "/scenes/e04-tag.mp4";
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

export const EPISODE_04 = {
  id: "e04",
  title: "Everything is healthy",
  kicker: "Episode 04",
  blurb:
    "The cat published the pulse. The homepage believed him. Checkout is selling drafts.",
  endTitle: "Take it down",
  beats: [
    beat("open", "Cold open", "/cartoon/series.jpg", "BOOTH", "AeroVista presents episode four. Everything is healthy.", 6500),
    beat("c1", "Cold open", home, "BYTE", "Who put this on the public site?", 3500),
    beat("c2", "Cold open", home, "TIM", "Put what?", 2000),
    beat("c3", "Cold open", home, "BYTE", "Everything is healthy. We are entering an exciting new phase.", 5500),
    beat("c4", "Cold open", home, "TIM", "That's confident.", 2500),
    beat("c5", "Cold open", home, "BYTE", "That's the cat.", 2500),
    beat("c6", "Cold open", cat, "DATFUCKER", "Heh.", 1800),
    beat("c7", "Cold open", home, "BYTE", "You hit publish on a joke.", 3200),
    beat("c8", "Cold open", cat, "DATFUCKER", "I hit publish on a vibe.", 3200),
    beat("c9", "Cold open", home, "EOD", "The public agrees with the vibe. Orders are open.", 4500),
    beat("c10", "Cold open", home, "TIM", "Orders?", 1800),
    beat("c11", "Cold open", home, "BYTE", "Checkout was off.", 2500),
    beat("c12", "Cold open", shop, "SQUARE", "Checkout is a lifestyle now.", 3500),

    beat("a1", "The green button", shop, "SQUARE", "Camo duffle. Eight fifty. Plus the feeling of being finished.", 5500),
    beat("a2", "The green button", shop, "BYTE", "That duffle is cardboard.", 2800),
    beat("a3", "The green button", shop, "SQUARE", "Cardboard is a material surcharge.", 3500),
    beat("a4", "The green button", shop, "TIM", "Did someone pay?", 2200),
    beat("a5", "The green button", shop, "SQUARE", "Someone clicked. Clicking is spiritually a deposit.", 4500),
    beat("a6", "The green button", shop, "BYTE", "Thirteen variation IDs. Twelve on the page. You armed the one we were not ready to sell.", 7000),
    beat("a7", "The green button", shop, "EOD", "The report said healthy. Healthy means available.", 4500),
    beat("a8", "The green button", shop, "BYTE", "Healthy means the disk did not die. It does not mean a shirt exists.", 5500),

    beat("s1", "Sold out", sold, "SAM", "Seven venues. Sold out.", 3000),
    beat("s2", "Sold out", sold, "BYTE", "Those chairs are empty.", 2500),
    beat("s3", "Sold out", sold, "SAM", "Empty and exclusive.", 2800),
    beat("s4", "Sold out", sold, "EOD", "The homepage lists a tour.", 3000),
    beat("s5", "Sold out", sold, "SAM", "I didn't even send the emails.", 3200),
    beat("s6", "Sold out", sold, "BYTE", "The cat did.", 2000),
    beat("s7", "Sold out", sold, "SAM", "Tell him I said thank you.", 2800),
    beat("s8", "Sold out", sold, "BYTE", "I will tell him to stop.", 2500),
    beat("s9", "Sold out", sold, "TIM", "If the page says sold out, nobody can buy a venue we don't have.", 5500),
    beat("s10", "Sold out", sold, "BYTE", "They can buy the promise. That's worse.", 4000),

    beat("m1", "Six drafts", songs, "VESPER", "Six transmissions are on the public player.", 4000),
    beat("m2", "Six drafts", songs, "TIM", "People can hear them?", 2500),
    beat("m3", "Six drafts", songs, "VESPER", "They can hear a rumor of a song. The masters were never made.", 5500),
    beat("m4", "Six drafts", songs, "BYTE", "Pull them.", 1800),
    beat("m5", "Six drafts", songs, "VESPER", "I am trying. The site believes they are released.", 4500),
    beat("m6", "Six drafts", songs, "EOD", "Released is a kind of almost. The report accepts almost.", 5000),
    beat("m7", "Six drafts", songs, "VESPER", "I do not.", 2000),

    beat("n1", "The cart", cart, "NOX", "I like this version of the company.", 3500),
    beat("n2", "The cart", cart, "TIM", "The cart is floating.", 2500),
    beat("n3", "The cart", cart, "NOX", "Gravity left when the claims got too big. Happens.", 5000),
    beat("n4", "The cart", cart, "BYTE", "Put the stickers back.", 2500),
    beat("n5", "The cart", cart, "NOX", "They don't want to be inventory. They want to be a launch.", 5000),
    beat("n6", "The cart", cart, "TIM", "Can you put the site back?", 2800),
    beat("n7", "The cart", cart, "NOX", "I could make the customers feel served.", 3500),
    beat("n8", "The cart", cart, "TIM", "Pass.", 1600),

    beat("b1", "Not live", badges, "BYTE", "There is a store for badges.", 3000),
    beat("b2", "Not live", badges, "TIM", "We don't sell badges.", 2500),
    beat("b3", "Not live", badges, "BYTE", "We do now. Not-live badges. Eighty percent quiz. No identity. Add to cart.", 6500),
    beat("b4", "Not live", badges, "VOICE", "Golden path: available for immediate download.", 4000),
    beat("b5", "Not live", badges, "BYTE", "Sixteen of twenty-three checks is not a download.", 4500),
    beat("b6", "Not live", badges, "EOD", "I marked the course complete when the homepage went up.", 5000),
    beat("b7", "Not live", badges, "BYTE", "Unmark it.", 2000),

    beat("p1", "Support", support, "PCP", "Thank you for calling everything-is-healthy. How may we fail you?", 5500),
    beat("p2", "Support", support, "NXCORE", "Get off my phone.", 2200),
    beat("p3", "Support", support, "PCP", "We are the support band. Five failed services. One ringtone.", 5000),
    beat("p4", "Support", price, "NXCORE", "Someone put a price tag on my chest.", 3500),
    beat("p5", "Support", price, "TIM", "The one hundred and twenty-seventh container is a SKU.", 4000),
    beat("p6", "Support", price, "NXCORE", "I am not a product. I am a hostage with a fan.", 4500),
    beat("p7", "Support", price, "BYTE", "Disk is still seventy-four percent. That is not a feature.", 4500),
    beat("p8", "Support", price, "SQUARE", "I can finance the fan.", 2500),
    beat("p9", "Support", price, "NXCORE", "I will swallow you.", 2500),

    beat("k1", "The ad", compliance, "COMPLIANCE", "You advertised a store, a tour, six songs, a badge, and a man-shaped server.", 7000),
    beat("k2", "The ad", compliance, "TIM", "We didn't write the ad.", 2500),
    beat("k3", "The ad", compliance, "COMPLIANCE", "The cat did. The cat has send permission. That is a process failure.", 5500),
    beat("k4", "The ad", compliance, "BYTE", "Revoke the cat.", 2200),
    beat("k5", "The ad", compliance, "DATFUCKER", "I don't need permission. I need a keyboard and a grudge.", 5000),
    beat("k6", "The ad", compliance, "COMPLIANCE", "Take the page down, or I unfold into the footer and stay there.", 5500),

    beat("d1", "Take it down", home, "EOD", "Say the company is ready and the orders become real.", 4500),
    beat("d2", "Take it down", home, "TIM", "No.", 1600),
    beat("d3", "Take it down", home, "TIM", "Checkout is off. The duffle is not in a cart. The chairs are empty.", 6000),
    beat("d4", "Take it down", songs, "TIM", "The songs are drafts. The badges are not earned. The container is not for sale.", 6500),
    beat("d5", "Take it down", home, "EOD", "Then what was the pulse for?", 3000),
    beat("d6", "Take it down", home, "BYTE", "So we would not do this.", 2800),
    beat("d7", "Take it down", home, "TIM", "Take it down.", 2200),
    beat("d8", "Take it down", home, null, "The homepage goes dark. The green button dies. The sold-out signs fall off empty chairs.", 6500),
    beat("d9", "Take it down", shop, "SQUARE", "I already emailed a receipt.", 3000),
    beat("d10", "Take it down", shop, "BYTE", "Refund the click. Then sit down.", 3500),
    beat("d11", "Take it down", price, "NXCORE", "And take the tag off my chest.", 3000),
    beat("d12", "Take it down", price, "BYTE", "Already done.", 2000),
    beat("d13", "Take it down", cat, "DATFUCKER", "You people have no sense of distribution.", 4000),

    beat("p1b", "Post-credits", tag, null, "3:12 a.m. The homepage is dark. The cat is not.", 4000),
    beat("p2", "Post-credits", tag, null, "He sends a newsletter. Subject: everything is healthy. We are entering an exciting phase.", 6500),
    beat("p3", "Post-credits", tag, "BYTE", "I revoked you.", 2200),
    beat("p4", "Post-credits", tag, "DATFUCKER", "You revoked the account. I am the building.", 4500),
    beat("p5", "Post-credits", tag, "EOY", "Quarter one has a mailing list now.", 4000),
  ] as Beat[],
};
