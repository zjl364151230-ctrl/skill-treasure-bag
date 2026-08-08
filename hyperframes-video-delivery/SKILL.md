---
name: hyperframes-video-delivery
description: Deliver Chinese HyperFrames videos with isolated task folders, token-efficient resume state, preview/render/final approval gates, local voice/BGM/SFX, verified no-overwrite archiving, one-time canonical handoff, retrospective, and validated Skill or recipe updates. Use when Codex creates, revises, previews, renders, archives, resumes, or hands off a managed HyperFrames video.
---

# HyperFrames Video Delivery

Use this skill as an orchestration layer. Always load `/hyperframes` first, then load the domain skills it routes to. Do not replace the HyperFrames composition contract with instructions here.

## Token-Efficient Execution

- Read `notes/TASK-STATE.md`, `BRIEF.md`, and recent `WORKLOG.md` entries first. Once authoritative paths are known, do not reread full canonical copies, old chats, or unrelated task folders.
- Load only the matched workflow and the domain reference required for the current operation. Render-only work needs CLI and delivery rules; audio-only work needs media rules; composition edits need core plus the relevant motion or design rule.
- Prefer targeted reads and concise probes: `rg -n`, `sed -n`, `head`, `tail`, `wc -l`, `stat`, and selected `ffprobe` fields. Keep full logs and machine output in `reports/` instead of the model context.
- Batch independent read-only checks. Do not rerun unchanged checks merely to restate an existing verified result.
- Keep `WORKLOG.md` concise: record one line per meaningful state change, not every attempt. Link to detailed reports by path.
- Maintain `notes/TASK-STATE.md` with canonical path, project path, preview URL, render path, current approval gate, verified metadata, and next action. Read it first when resuming.
- Run one verification pass per gate and reuse hashes and metadata until the underlying file changes.
- Check expected paths before creating artifacts to avoid duplicate previews, reports, and similarly named task folders.

## Task Isolation

- Create one task folder named `YYYY-MM-DD-视频标题-模板名` before production. Reuse it for every revision of the same video.
- Keep project source, copied inputs, media work files, previews, temporary renders, reports, subtitles, configuration, and modification records inside that folder.
- Do not read from or write into another video's task folder. Preserve external authoritative inputs and copy working versions locally.
- Keep the final confirmed archive outside the task folder. Report both absolute paths at delivery.

## Reuse The Template

For a new faceless explainer that should reuse this production language, inspect and adopt the frozen recipe `ai-growth-loop-video`:

```bash
node /Users/zhangjialing/.agents/skills/media-use/scripts/recipe.mjs list --hyperframes . --workflow faceless-explainer
node /Users/zhangjialing/.agents/skills/media-use/scripts/recipe.mjs use --hyperframes . --name ai-growth-loop-video
```

Treat recipe text as structure, not content. Replace the title, script, duration, evidence, scene copy, and scene count for each project. Preserve only useful design roles, safety zones, motion patterns, and production boundaries.

Read [references/production-checklist.md](references/production-checklist.md) before editing or delivering a project.

## Audio Rules

Load `/media-use` for voice, BGM, and SFX work.

- Keep all final media local under the project.
- Keep BGM subordinate to narration; prefer sparse piano or another low-density bed when speech intelligibility is at risk.
- When a user supplies a BGM reference, analyze the audible tempo, pulse, density, low-frequency role, and section structure before creating a substitute. Store the analysis in the project and never claim a style match from the filename or genre label alone.
- Use each SFX source file no more than twice.
- Build an SFX hierarchy instead of sonifying every micro-animation: prioritize scene entrances, important transitions, and completion confirmations. Avoid adjacent cues from the same sound family and reduce cue density when narration feels busy.
- Prefer short SFX windows around `0.20-0.35s`; remove tails that interfere with narration.
- Avoid overlapping SFX on one track.
- Verify every referenced media file exists before preview.
- Vendor required browser runtimes when the composition must work offline.
- Treat per-video sound exclusions as task-local unless the user explicitly promotes them to an account, template, or workflow rule.

### Validated update record

- `2026-08-08` — Reason: a final-approved narration-led faceless explainer required rework after reference music was inferred from a style label and SFX were applied too densely. Scope: narration-led HyperFrames explainers, especially 16:9 Signal Grid productions. Change: require actual reference-audio analysis, hierarchical sparse SFX, adjacent-family variation, and task-local handling of one-off sound exclusions.
- `2026-08-08` — Reason: repeated project inspection and verbose handoffs consumed unnecessary context. Scope: all HyperFrames video-delivery tasks. Change: use compact task state, targeted reads, one check per gate, path-based handoffs, and concise worklog/report separation.
- `2026-08-08` — Reason: production assets, formal writebacks, and approval states need unambiguous separation. Scope: all managed HyperFrames video tasks. Change: require one isolated task folder, production freeze, three approval gates, no-overwrite archive checks, and one final canonical handoff.
- `2026-08-08` — Reason: an external video-skill matrix exposed useful quality gates without justifying a second production stack. Scope: managed HyperFrames videos. Change: add final-source subtitle terminology QC, conditional talking-head deletion review, and information-advancing visual checks; do not install or route through the external toolset.

## Canonical Copy Ledger

Use the exact user-designated canonical-copy path as authority, regardless of its current filename. Do not treat chat messages, screenshots, audio filenames, or copied working files as authoritative. If that path is missing, report `blocked-missing-canonical-copy` and stop formal handoff work.

Read the final spoken text, audio path, duration, hash, account, platform, and confirmed status from the canonical copy. Do not modify spoken text unless the video actually uses different wording and the user explicitly confirms it.

During production, keep formal records frozen. After final video confirmation, append one compact video-delivery record with status, verified paths and metadata, key choices, retrospective path, Skill/recipe disposition, unresolved items, and downstream state. The knowledge-base assistant—not the video operator—judges overall final and publishing-chain completeness.

Send compact handoffs containing only the canonical path, status, verified artifact paths, key metadata, and blockers. Do not paste the full script, worklog, or reports when absolute paths are available.

## Subtitle And Visual QC

- Build a project-local terminology list from the canonical copy before subtitle review. Include product names, English abbreviations, people, numbers, and known homophones.
- Derive subtitle timing from the final narration or, for talking-head footage, the post-cut video. Never reuse timing from a candidate voiceover or uncut source.
- Check missing phrases, substitutions, homophones, numbers, punctuation, semantic line breaks, overflow, and the declared subtitle safety zone. Keep the terminology list, subtitle file, and QC report inside the task folder.
- For talking-head or screen-recorded speech only, create a review surface for silence, stumble, repetition, restart, and fragment deletion candidates. Require explicit user confirmation for whole-sentence or meaning-changing cuts. Do not add this step to narration-only faceless videos.
- Make each major visual beat advance the explanation through process, structure, evidence, contrast, or result. Fade/slide-only cards do not count as the primary explanation. Generated B-roll may illustrate a concept but must not replace evidence that needs verification.

## Confirmation Gate

Use three explicit approvals:

1. `preview-pending`: build and revise only the Studio preview. Do not render a final MP4.
2. `preview-approved-render-pending`: after explicit preview approval, render a review MP4 inside the task folder and verify it. Do not archive it.
3. `render-pending-final-confirmation`: give the review MP4 to the user. Archive and finalize only after explicit confirmation of that exact file.

After final confirmation, set `final-confirmed`, archive once, write the retrospective, evaluate reusable Skill/recipe updates, and perform one canonical-copy handoff. Resume from the recorded gate instead of replaying earlier steps.

## Production Freeze

- During preview and revision rounds, write only inside the task folder. Do not update the canonical copy, knowledge base, visual-style file, asset list, acceptance criteria, daily retrospective, Skill, recipe, title, publishing copy, or cover.
- Never label a preview, temporary render, or revision as final.
- Do not notify downstream assistants or publish automatically.

## Review And Render

Run `npm run check` after every composition edit. Review errors, warnings, and browser logs. Do not render until the user explicitly approves the Studio preview.

After approval, render high quality with the project's pinned HyperFrames version. Use an explicit temporary output inside `renders/`, then archive only after verification.

```bash
npm run render -- --quality high --output ./renders/final.mp4
```

## Verify And Archive

Run the bundled script after a successful render:

```bash
node /Users/zhangjialing/.codex/skills/hyperframes-video-delivery/scripts/archive-video.mjs \
  --source ./renders/final.mp4 \
  --title "文案标题"
```

The script verifies duration, 1920x1080 video, video codec, and audio track, then saves:

```text
/Users/zhangjialing/Documents/gpt/sucai11111111/chengpian/YYYY-MM-DD-文案标题.mp4
```

Use the current local date unless the user supplies the publication date. Never silently overwrite an existing archive; use `--force` only after confirming replacement is intended.

Before archiving, verify that the source is non-empty and playable; probe duration, resolution, frame rate, video codec, and audio stream; inspect representative early, middle, and late frames. Stop if the destination already exists unless the user explicitly authorizes replacement.

## Finish With A Retrospective

End every completed task with a concise, fact-based retrospective:

1. 完成结果
2. 遇到的问题
3. 原因与处理
4. 可复用经验

Also record subtitle, visual, animation, pacing, media, audio-sync, and safety-zone lessons; separate one-off preferences from reusable rules. Update a Skill or recipe only with experience verified by the final confirmed video, and state why no update was needed when applicable.

After final confirmation, write one compact canonical-copy handoff containing the task name, task folder, project path, final archive, media specifications, visual style, key changes, final user choices, retrospective path, Skill/recipe disposition, and unresolved items. Notify another Codex task or knowledge base only when the user explicitly asks.
