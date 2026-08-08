# Production Checklist

## Token Budget

- Read `notes/TASK-STATE.md` first and resume from its recorded gate.
- Load only references required for the current operation.
- Prefer targeted excerpts and concise metadata probes; store full output in `reports/`.
- Batch independent checks and do not repeat checks while inputs remain unchanged.
- Record meaningful state changes once in `WORKLOG.md`; avoid transcript-style notes.

## Task Folder

- Create or resume exactly one `YYYY-MM-DD-视频标题-模板名` folder.
- Keep all non-final artifacts inside it; never mix files from another video.
- Preserve authoritative external inputs and copy only working versions locally.
- Keep the final confirmed archive outside the task folder.

## Intake

- Identify the authoritative script title, narration file, target platform, aspect ratio, and expected duration.
- Read existing `BRIEF.md`, `SCRIPT.md`, `STORYBOARD.md`, `frame.md`, and delivery preferences before changing the project.
- Use the `ai-growth-loop-video` recipe only when its dark operational Signal Grid language fits the new subject.

## Composition

- Load `/hyperframes`, `/hyperframes-core`, and any routed workflow/domain skills before editing.
- Preserve deterministic, seek-safe timelines and local media paths.
- Keep primary content within the project's declared safety zones.
- Replace all prior-project titles, evidence, narration, and scene-specific claims.
- Run `npm run check` after HTML changes and fix all newly introduced errors.
- Confirm each major beat advances process, structure, evidence, contrast, or result; fade/slide-only cards cannot carry the main explanation.
- Keep generated B-roll illustrative when evidence must remain verifiable.

## Subtitles

- Build a project-local terminology list from the canonical copy: product names, abbreviations, people, numbers, and known homophones.
- Use the final narration or post-cut talking-head video as the subtitle timing source.
- Check omissions, substitutions, homophones, numbers, punctuation, semantic line breaks, overflow, and the declared subtitle safety zone.
- For talking-head footage, require user approval for whole-sentence or meaning-changing deletion candidates; skip this review surface for narration-only faceless videos.

## Audio

- Voiceover is the mix priority.
- BGM must not mask speech; use a sparse arrangement and a low authored volume.
- For a supplied BGM reference, document tempo, pulse, density, low-frequency role, and section structure before producing a substitute.
- Each SFX file may appear at most twice.
- Reserve SFX for scene entrances, important transitions, and completion confirmations; do not sonify every micro-animation.
- Avoid adjacent cues from the same sound family and keep one-off sound exclusions local to the task unless explicitly promoted.
- SFX windows should normally be `0.20-0.35s` and should not span narration phrases.
- Confirm every audio path resolves locally.

## Approval

- Keep Studio preview running and provide the project URL.
- Before preview approval, revise only; do not render the final review MP4.
- After preview approval, render and verify inside the task folder; do not archive.
- Archive and finalize only after the user confirms the exact review MP4.
- Record the approval gate and resume from it after interruption.

## Production Freeze

- During preview and revision, update only task-local state, worklog, and reports.
- Do not update canonical copy, knowledge base, Skill, recipe, visual inputs, acceptance records, titles, covers, or publishing copy.
- Do not trigger downstream work or publish automatically.

## Delivery

- Render high-quality MP4 with the pinned CLI version.
- Verify output is non-empty and probe duration, resolution, frame rate, video codec, and audio stream.
- Inspect representative early, middle, and late frames for blank or black output.
- Check the archive destination before copying; never overwrite silently.
- Archive as `YYYY-MM-DD-文案标题.mp4` in `/Users/zhangjialing/Documents/gpt/sucai11111111/chengpian`.
- After final confirmation, perform one canonical handoff and finish the retrospective and validated Skill/recipe review.
