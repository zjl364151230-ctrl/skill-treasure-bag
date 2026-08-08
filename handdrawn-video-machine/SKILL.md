---
name: handdrawn-video-machine
description: Build or adapt Remotion knowledge-narration videos in this project's warm hand-drawn paper style. Use for 手绘风、手账风、纸张卡片风、hand-drawn explainers, or changes to hand-drawn-template / Meeting-Agent-Three-Questions.
---

# 手绘造片机

用于 `/Users/zhangjialing/Documents/gpt/remotion-studio` 的手绘知识口播视频。项目文件管理、任务目录、回写、复盘和确认闸门以 `AGENTS.md` 为唯一来源，本 Skill 只保留手绘制作规则。

## 开始前

1. 读取 `AGENTS.md`。
2. 读取 `src/templates/hand-drawn/README.md` 与 `src/templates/hand-drawn/handDrawn.knowledgePreset.ts`。
3. 修改 Meeting Agent 案例时，读取 `references/meeting-agent-case.md`；新主题不得复制其文案、品牌或素材。
4. 读取 `docs/WORK-RETROSPECTIVE.md` 的相关条目。
5. 按需加载 `remotion-best-practices`；字幕用 `remotion-captions`，只有获准正式渲染才加载 `remotion-render`。

## 模式选择

- `hand-drawn-template`：短、少旁白、适合模板十一幕的内容。
- `knowledge-narration`：30–90 秒、有配音、需要逐句编排或定制场景的知识视频。
- 只有用户明确要求修改 Meeting Agent 时才扩展该案例，并保留已批准的配音和边界。
- 新主题在 `src/projects/` 建立独立 Composition，不覆盖参考案例。

## 手绘制作规则

- 输入先冻结：最终文案、已批准配音、品牌、比例、素材和时长。不得自行改文案、变速或重排批准的配音。
- 以中文句号 `。` 定义完整句。每句必须有对应语义内容、主画面和帧驱动动效。
- 完整句超过 6 秒时，只能在句内逗号 `，` 后增加第二主画面；禁止按平均时长任意切分。
- 1920×1080 横版的手绘基线：主画面 `x=40–1880,y=48–940`，字幕 `x=80–1840,y=940–1040`。主画面下移时不得侵入字幕区或遮挡字幕。
- 使用暖白纸张、深色墨线、砖红/蓝灰辅助色、纸卡、胶带、箭头和低权重涂鸦；每屏只保留一个视觉重心，空白只用来放不抢焦点的装饰。
- 版式由语义对象决定：任务链、网页/表格、流程图、时间线、漏斗、工作台和插画动作应有不同构图，避免连续复用同一组卡片。
- 按配音顺序逐个出现；在句末前完成稳定态。根据语义选择放大回落、跳动、绘制、路径推进、打字、波浪行进等动效。
- 所有动画使用 `useCurrentFrame()`、`interpolate()`、`spring()` 等 Remotion 帧逻辑；禁止 CSS 自主动画和不可确定的计时器。
- 句内逗号分屏若表达连续动作，不使用转场；其他主画面边界中，同一种转场全片最多 2 次，且不得连续使用。用代码断言校验。

## 手绘音频规则

- 音效必须对应可见动作，并绑定配音/字幕时间。写代码聊天框必须使用真实键盘录音，不用噪声脉冲或普通点击冒充。
- `scan-flick` 永久禁用。音效 ID 不得相邻重复，单个 ID 全片最多 2 次，并在代码中硬校验。
- BGM 从批准素材生成覆盖全片的本地无损文件；预览前检查长度、循环跨淡化、淡入淡出、响度、真峰值和无长静音接缝。
- 混音顺序：配音 → 语义音效 → BGM。音效密集处自动下潜 BGM，完整预览中确认配音清晰。

## 验收清单

- 检查每个主画面的入场、动作中、完成态；重点看长句分屏、字幕长句、主画面缩放和装饰抢焦点。
- 检查安全区、文字溢出、卡片碰撞、转场次数/相邻重复、逐句动效与音效同步。
- 执行 `npm run lint`；涉及注册、素材、导入或渲染行为时执行 `npm run build` 与 `npx remotion compositions src/index.ts`。
- 按 `AGENTS.md` 停在预览确认、渲染授权和最终成片验收闸门，不自行发布。

## 交付边界

正式成片必须按 `AGENTS.md` 保存到统一目录；其余产物留在当前视频任务目录。最终确认后，canonical copy、知识库、复盘和本 Skill 的更新范围均按 `AGENTS.md` 执行，不在这里重复定义。

## Skill Change Record

- 2026-08-08：精简重复的项目级文件管理、回写和验收流程，保留手绘专属的逐句设计、安全区、版式差异、转场、音效和 BGM 规则。适用范围：未来手绘 Remotion 视频；单期标题、账号、素材路径和一次性偏好不写入本 Skill。
