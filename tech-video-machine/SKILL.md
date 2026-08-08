---
name: tech-video-machine
description: Build or adapt Remotion knowledge videos in this project's 科技风 system style. Use for 科技风、蓝色科技、深色科技、系统界面、AI risk, security, data-path, terminal, dashboard, or control-gate visuals.
---

# 科技造片机

用于 `/Users/zhangjialing/Documents/gpt/remotion-studio` 的科技主题知识视频。“科技风”为正式名称，“蓝色科技/蓝色科技风”为兼容别名。项目文件管理、回写、复盘和确认闸门以 `AGENTS.md` 为唯一来源，本 Skill 只保留科技制作规则。

## 开始前

1. 读取 `AGENTS.md`。
2. 读取 `src/templates/blue-tech/README.md` 与 `src/templates/blue-tech/techKnowledgePreset.ts`。
3. 修改 Wenge 案例时，读取 `references/wenge-agent-case.md`；新主题不得复制其文案、品牌或素材。
4. 读取 `docs/WORK-RETROSPECTIVE.md` 的相关条目。
5. 按需加载 `remotion-best-practices`；字幕用 `remotion-captions`，只有获准正式渲染才加载 `remotion-render`。

## 模式选择

- `blue-tech-template`：短、少旁白、适合模板六幕的内容。
- `tech-narration`：30–120 秒、有配音、系统风险、事故分析、权限机制或定制场景的视频。
- 只有用户明确要求修改 Wenge 案例时才扩展该案例，并保留已批准的配音和边界。
- 新主题在 `src/projects/` 建立独立 Composition，不覆盖参考案例。

## 科技制作规则

- 输入先冻结：最终文案、已批准配音、品牌、比例、素材和时长。不得自行改文案、变速或重排批准的配音。
- 以真实配音停顿和短语结束点确定场景与场内揭示，不按平均时长切分。
- 按语义组织 7–12 个场景：钩子、系统路径、冲突、证据、机制、风险组合、边界、护栏、结论和 CTA 可按主题取舍。
- 使用深色系统背景、青蓝信息态、红色风险态、琥珀警告态、克制紫色、终端、路径、证据面板、权限矩阵、护盾和审批闸门。
- 颜色必须有语义；红色只表示风险，不用于装饰；不使用无依据的假指标填充画面，不用全屏霓虹制造密度。
- 每屏一个视觉重心，避免终端行、标签、连接端点、卡片和字幕碰撞；所有文字与主画面遵守项目/验收标准中的安全区。
- 动效使用 `useCurrentFrame()`、`interpolate()`、`spring()` 等 Remotion 帧逻辑；禁止 CSS 自主动画和不可确定的计时器。
- 音效必须对应可见动作：扫描配路径绘制，故障配状态损坏，警报配风险识别，锁定配护栏，成功音配控制确认。
- 音效 ID 默认最多使用 2 次，且检查相邻重复；混音顺序为配音 → 语义音效 → BGM，密集旁白和动作处下潜 BGM。

## 验收清单

- 检查每个场景的入场、动作中、完成态；重点看钩子、证据、机制、风险组合、护栏、结论和 CTA。
- 检查字幕与长句溢出、连接线对齐、文字碰撞、转场节奏、音效语义、音效复用、配音清晰度和 BGM 冲突。
- 执行 `npm run lint`；涉及注册、素材、导入或渲染行为时执行 `npm run build` 与 `npx remotion compositions src/index.ts`。
- 按 `AGENTS.md` 停在预览确认、渲染授权和最终成片验收闸门，不自行发布。

## 交付边界

正式成片必须按 `AGENTS.md` 保存到统一目录；其余产物留在当前视频任务目录。最终确认后，canonical copy、知识库、复盘和本 Skill 的更新范围均按 `AGENTS.md` 执行，不在这里重复定义。

## Skill Change Record

- 2026-08-08：精简重复的项目级文件管理、回写和验收流程，保留科技专属的场景选择、颜色语义、系统视觉、动效和音频规则。适用范围：未来科技风 Remotion 视频；单期标题、账号、素材路径和一次性偏好不写入本 Skill。
