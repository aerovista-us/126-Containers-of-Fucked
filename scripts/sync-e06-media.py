#!/usr/bin/env python3
from pathlib import Path
from datetime import datetime
from hashlib import sha256
from PIL import Image
import json, re, shutil, subprocess

ROOT=Path(__file__).resolve().parents[1]
A=ROOT/"artifacts"
P=ROOT/"public/episode-06"
G=P/"gallery"
O=P/"audio"
G.mkdir(parents=True,exist_ok=True)
O.mkdir(parents=True,exist_ok=True)

def checksum(p):
    h=sha256()
    with p.open("rb") as f:
        for c in iter(lambda:f.read(1024*1024),b""):h.update(c)
    return h.hexdigest()

def slug(s):return re.sub(r"[^a-z0-9]+","-",s.lower()).strip("-")

def category(p):
    n=p.name.lower()
    if p.parent.name=="bunny.human" or "bunny" in n:return "Bunny — human-style alternates"
    if "nxcore" in n:return "NXCore"
    if "byte" in n or "deception" in n or "protocol override" in n:return "Byte"
    if "sam" in n or "revenue officer" in n:return "Sam"
    if "timbr" in n or "bytepad" in n or "ui command" in n:return "Timbr / command room"
    return "Unassigned studies"

sources=sorted((p for p in (A/"imagine_images").rglob("*.png") if datetime.fromtimestamp(p.stat().st_mtime).date().isoformat()=="2026-11-20"),key=lambda p:p.name.lower())
assert len(sources)==29, f"Expected 29 newly organized images, found {len(sources)}"
images=[]
names=set()
for p in sources:
    name=("human-" if p.parent.name=="bunny.human" else "")+slug(p.stem)
    assert name not in names,name
    names.add(name)
    dest=G/(name+".webp")
    with Image.open(p) as im:
        im=im.convert("RGB")
        im.thumbnail((1400,1400),Image.Resampling.LANCZOS)
        im.save(dest,"WEBP",quality=78,method=5)
    images.append({"source":p.relative_to(ROOT).as_posix(),"source_bytes":p.stat().st_size,
        "sha256":checksum(p),"public_path":"/episode-06/gallery/"+dest.name,
        "public_bytes":dest.stat().st_size,"title":p.stem.rsplit("-",1)[0].replace("_"," "),
        "group":category(p),"filename":p.name})

audio_defs=[
("One Yellow Sticky Note","One Yellow Sticky Note.mp3","one-yellow-sticky-note.mp3"),
("Archive of Almost Done Things","Archive of Almost Done Things.mp3","archive-of-almost-done-things.mp3"),
("Almost Shipped","Almost Shipped.mp3","almost-shipped.mp3"),
("The Toaster Has a Release","The Toaster Has a Release.mp3","the-toaster-has-a-release.mp3"),
("Who Gave the Cat a Create","Who Gave the Cat a Create.mp3","who-gave-the-cat-a-create.mp3"),
("Sticky Note","Sticky Note.mp3","sticky-note.mp3"),
("Merging Stories","Merging Stories.mp3","merging-stories.mp3")]
audio=[]
for title,filename,name in audio_defs:
    src=A/"voices"/filename
    dest=O/name
    assert src.is_file(),src
    if not dest.is_file() or checksum(src)!=checksum(dest):shutil.copy2(src,dest)
    try:
        r=subprocess.run(["ffprobe","-v","error","-show_entries","format=duration","-of","default=noprint_wrappers=1:nokey=1",str(src)],
                         capture_output=True,text=True,check=True)
        duration=round(float(r.stdout.strip()),2)
    except Exception:duration=None
    audio.append({"title":title,"source":src.relative_to(ROOT).as_posix(),"sha256":checksum(src),
        "public_path":"/episode-06/audio/"+name,"bytes":src.stat().st_size,"duration_seconds":duration})
videos=[{"source":p.relative_to(ROOT).as_posix(),"bytes":p.stat().st_size,"status":"NXCore-only"}
    for p in sorted((A/"imagine_videos").rglob("*.mp4"))]
inventory={
    "edition":"Episode 06 media sync","inventory_date":"2026-11-20",
    "policy":"Originals remain unchanged on NXCore. Optimized WebP derivatives and selected MP3s published. Videos tracked by path but retained in external media storage, not source Git.",
    "images":images,"audio":audio,"videos":videos,
    "other":{
        "older_images":[{"source":p.relative_to(ROOT).as_posix(),"bytes":p.stat().st_size}
            for p in sorted((A/"imagine_images").rglob("*.png")) if p not in sources],
        "historic_audio":[{"source":p.relative_to(ROOT).as_posix(),"bytes":p.stat().st_size}
            for p in sorted((A/"voices").glob("*.mp3")) if p.name not in {x[1] for x in audio_defs}]
    }
}
(P/"media-inventory.json").write_text(json.dumps(inventory,indent=2,ensure_ascii=False)+"\n",encoding="utf-8")
ui={"images":[{"title":x["title"],"group":x["group"],"src":x["public_path"],"source":x["filename"]} for x in images],
    "audio":[{"title":x["title"],"src":x["public_path"],"durationSeconds":x["duration_seconds"]} for x in audio]}
(ROOT/"src/lib/episode-06-media.ts").write_text("/* Generated from scripts/sync-e06-media.py. */\nexport const EP06_MEDIA = "+
    json.dumps(ui,indent=2,ensure_ascii=False)+" as const;\n",encoding="utf-8")
size_images=sum(p.stat().st_size for p in G.glob("*.webp"))
size_audio=sum(x["bytes"] for x in audio)
size_video=sum(x["bytes"] for x in videos)
doc=[
"# Episode 06 — Media Sync 2026-11-20",
"",
"## Git-published media",
"",
f"- {len(images)} new original PNG files on NXCore represented by {len(images)} optimized WebP images, {size_images:,} bytes in the repository.",
f"- {len(audio)} MP3 tracks ({size_audio:,} bytes), including six newly added and one previously hosted.",
"- A deterministic, versioned manifest maps originals to public derivative URLs, sizes, and SHA-256 checksums.",
"- New gallery images and tracks can be explored on the Episode 06 page.",
"",
"## NXCore-only source material",
"",
f"- {len(videos)} video source files totaling {size_video:,} bytes ({size_video/1024**3:.2f} GiB), excluded from Git to protect the repository.",
"- Large episode cuts follow existing external segmented storage described in creative/episodes/MEDIA-INVENTORY.md.",
"- Full-resolution PNGs and original sound files remain in the unchanged artifacts archive.",
"",
"## Notes",
"",
"- Human-style Bunny images are alternate studies, not the canonical anthropomorphic character design.",
"- Track names do not establish synchronized narration or a final mix; no release completion is claimed.",
"- Regenerate by running python3 scripts/sync-e06-media.py.",
"- Never relocate/delete source media or replace Git-tracked production artifacts automatically.",
]
(ROOT/"creative/episodes/E06_MEDIA_SYNC_2026-11-20.md").write_text("\n".join(doc)+"\n",encoding="utf-8")
print(json.dumps({"new_images":len(images),"gallery_bytes":size_images,"audio_tracks":len(audio),"audio_bytes":size_audio,"videos_archived":len(videos),"video_bytes":size_video,"groups":sorted({x["group"] for x in images})},indent=2))
