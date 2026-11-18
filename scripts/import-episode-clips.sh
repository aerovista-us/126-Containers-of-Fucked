#!/usr/bin/env bash
set -euo pipefail
repo='/srv/Collab/mini.shops/126 CONTAINERS OF FUCKED'
inbox='/srv/Collab/mini.shops/126 CONTAINERS OF FUCKED_MEDIA/inbox'
cd "$repo"
if [[ -n "$(git status --porcelain)" ]]; then echo 'ERROR: Working tree is not clean' >&2; exit 2; fi
for entry in \
  'e03-bytecast.mp4 b0cc1f3d9524a49b8c5c87a8873bbac78d386dd2992465da5c9427e939a43a93' \
  'e03-127.mp4 3654a548de6e45821c0643200059e23869640435373391cbd05a5cd252008c05'; do
 read -r name expected <<< "$entry"
 path="$inbox/$name"
 [[ -f "$path" ]] || { echo "Missing: $path" >&2; exit 3; }
 actual="$(sha256sum "$path" | cut -d' ' -f1)"
 [[ "$actual" == "$expected" ]] || { echo "Checksum mismatch: $name" >&2; exit 4; }
done
mkdir -p public/scenes
for name in e03-bytecast.mp4 e03-127.mp4; do
 if [[ -f "public/scenes/$name" ]]; then cmp -s "$inbox/$name" "public/scenes/$name" || { echo "Conflicting existing $name" >&2; exit 5; }
 else cp -- "$inbox/$name" "public/scenes/$name"; fi
done
git add public/scenes/e03-bytecast.mp4 public/scenes/e03-127.mp4
if git diff --cached --quiet; then echo 'Already imported'; exit 0; fi
git -c user.name=AeroVista -c user.email=238592739+aerovista-us@users.noreply.github.com commit -m 'Add Episode 03 ByteCast and 127 clips'
GIT_TERMINAL_PROMPT=0 git push origin main
git fetch origin main -q
[[ "$(git rev-parse HEAD)" == "$(git rev-parse origin/main)" ]] || { echo 'Remote mismatch' >&2; exit 6; }
echo 'Verified GitHub upload: both clips'
