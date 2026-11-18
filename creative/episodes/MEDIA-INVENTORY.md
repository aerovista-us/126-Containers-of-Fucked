# Episode media inventory — 2026-11-17

## Published in GitHub
- Episode 04 script (unpublished draft): `creative/episodes/126_Containers_E04_The_Server_Has_140_Personalities.md`
- Episode 02 audio: `public/audio/fuct.ep02.mp3` (SHA-256 `d7d66eda77406804911761464ce46dbac55c553b3c3050d71a70417d91511a30`)
- Existing `public/scenes/e02-tribunal.mp4` and `public/favicon.svg` remain unchanged (no duplicate imports)

## Segmented master cuts — external NXCore media storage, NOT in Git

Location: `/srv/Collab/mini.shops/126 CONTAINERS OF FUCKED_MEDIA/episode-cuts/`

- `e03-cut.mp4`: five independently playable MP4 segments `e03-cut-part-00.mp4` through `e03-cut-part-04.mp4`
- `e04-cut.mp4`: four independently playable MP4 segments `e04-cut-part-00.mp4` through `e04-cut-part-03.mp4`
- All segments are under GitHub's 100 MB per-file limit, but stored outside Git to avoid inflating source history
- Stream copied with ffmpeg using `-map 0 -c copy -f segment -segment_time 100 -reset_timestamps 1`; boundaries fall at keyframes
- `SHA256SUMS` in the media directory validates every segment
- Originals retained at `/srv/Collab/mini.shops/docs/`

## Outstanding transfers

The uploaded `e03-bytecast.mp4` (SHA-256 `b0cc1f3d9524a49b8c5c87a8873bbac78d386dd2992465da5c9427e939a43a93`) and `e03-127.mp4` (SHA-256 `3654a548de6e45821c0643200059e23869640435373391cbd05a5cd252008c05`) were not located on accessible NXCore disks at this inspection. Drop both into `/srv/Collab/mini.shops/126 CONTAINERS OF FUCKED_MEDIA/inbox/` before publishing them to `public/scenes/`. Do not label them published until GitHub remote verification.
