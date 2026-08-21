# ai-director-viral-breakdown

把对标内容拆成 AI 编导能直接使用的生产决策，而不只是内容摘要。

输入抖音、小红书、B站、YouTube、公众号的单条或账号链接，Skill 会完成公开取数、视频下载、Whisper 转写、视觉抽帧和多模态读图，并交付：

1. 传播诊断
2. 画面、口播与留存时间轴
3. 主张—证据与风险
4. 可复用创作公式
5. AI 编导生产说明书与改编方案
6. 单变量测试与复盘计划

报告自动存到 `benchmarks/<平台>-<账号>/`。

## 安装

```bash
git clone https://github.com/zjl364151230-ctrl/skill-treasure-bag.git /tmp/skill-treasure-bag
cp -R /tmp/skill-treasure-bag/ai-director-viral-breakdown ~/.codex/skills/
bash ~/.codex/skills/ai-director-viral-breakdown/scripts/check-deps.sh
```

依赖和本地 API 部署见 [INSTALL.md](INSTALL.md)。

## 使用

```text
用 $ai-director-viral-breakdown 拆解这条视频，给出 AI 编导生产包：<链接>
```

```bash
bash scripts/prepare-assets.sh "<链接>" [output_dir]
```

## 与普通拆解的差异

- 区分已确认事实、传播假设、编导判断和待验证项。
- 区分播放、收藏、分享、评论、涨粉和转化目标。
- 钩子拆成首帧、首句、未闭合问题、首次兑现。
- 时间轴同时标注内容功能、情绪、证据、留存和流失风险。
- 建立主张—证据表，不把作者宣称当作实测事实。
- 区分剪辑、信息和叙事三种节奏。
- 输出可拍时间轴、素材清单、表演/剪辑指令和验收点。
- 给单变量 A/B 测试，而不是声称掌握平台算法。

## 文件结构

```text
ai-director-viral-breakdown/
├── SKILL.md
├── agents/openai.yaml
├── INSTALL.md
├── scripts/
│   ├── bootstrap-local-apis.sh
│   ├── check-deps.sh
│   └── prepare-assets.sh
├── references/
│   ├── fetch-playbook.md
│   ├── director-framework.md
│   ├── visual-framework.md
│   └── output-template.md
└── benchmarks/
```

## 证据边界

完整短视频拆解必须同时具备元数据、完整转写和视觉帧，并实际读图。缺项时只能输出初筛或部分拆解。单条爆款不能证明平台算法偏好；技术能力、价格、成功率和商业结果需要独立核验。

## License

MIT。作者：鱼亦乐（@yuyile）。
