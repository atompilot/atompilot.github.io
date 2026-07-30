window.ATOM_SEARCH_INDEX = [
  {
    title: 'Atom Wang',
    type: '主页',
    summary: '王童（Atom Wang）的个人介绍，以及公开项目、报告与实验的入口。',
    keywords: '王童 atom wang atompilot 个人介绍 关于我 个人网站 projects reports notes experiments 宝可梦 主页 首页',
    url: '/'
  },
  {
    title: '公开报告库',
    type: '页面',
    summary: '适合在任何设备上阅读的公开交互式简报。',
    keywords: 'reports report library 报告库 html 简报 看板 调研 公开 交互式',
    url: '/reports/'
  },
  {
    title: '手机 GUI Agent 选型 2026',
    type: '报告 · AI 工程技术选型',
    summary: '已经有截图、视频流、触控、按键接口之后，该给手机自动化配哪个大模型。GUI-Plus、GUI-Owl-1.5、Holo3.1、Gemini Computer Use、Claude computer use、UI-TARS、AgentCPM-GUI 八条路线的动作集对齐度、AndroidWorld 成绩、许可证与价格实测对比。',
    keywords: '手机 GUI Agent 自动操作手机 大模型操作手机 mobile use 手机自动化 安卓自动化 GUI-Plus gui-plus-2026-02-26 百炼 通义 UI Agent GUI-Owl-1.5 Mobile-Agent-v3.5 Holo3.1 H Company UI-TARS UI-TARS-2 AgentCPM-GUI Gemini Computer Use ENVIRONMENT_MOBILE Claude computer use AndroidWorld ScreenSpot grounding 坐标 归一化 ADB Keyboard adb keyevent 动作集 action space 选型 视频流 LivingScreen OmniGUI 2026年7月',
    url: '/reports/2026/07/mobile-gui-agent-models/',
    date: '2026-07-31'
  },
  {
    title: '动作集对不对得上，比榜单分数重要',
    type: '报告内主题 · 选型判据',
    summary: '手机原生动作集（swipe、long_press、系统返回键、开 App）与桌面动作集的差别，以及归一化坐标与绝对像素坐标对集成成本的影响。',
    keywords: 'action space 动作集 对齐 归一化坐标 绝对像素 scale factor swipe long_press system_button 集成成本 手机 桌面 差别',
    url: '/reports/2026/07/mobile-gui-agent-models/#premise',
    date: '2026-07-31'
  },
  {
    title: 'GUI-Plus 的移动端动作与手机接口对照表',
    type: '报告内主题 · 集成指南',
    summary: 'click / swipe / long_press / system_button / key / type / open / wait 八个动作逐条映射到截图与触控接口，以及 ADB Keyboard 输入法这个唯一的意外成本。',
    keywords: 'GUI-Plus 动作 映射 click swipe long_press system_button adb keyevent type open wait ADB Keyboard 输入法 限流 RPM 图像 token 公式 华北2 北京',
    url: '/reports/2026/07/mobile-gui-agent-models/#guiplus',
    date: '2026-07-31'
  },
  {
    title: '手机上的视频流该怎么用',
    type: '报告内主题 · 架构建议',
    summary: '主循环仍是截图驱动，视频流的不可替代位置是判断动画是否结束、动作是否生效、以及短视频这类内容自己在变的界面。',
    keywords: '视频流 screen recording 截图 主循环 LivingScreen 活屏 OmniGUI 帧间差分 动画 加载 短视频 直播 观测过度 观测不足',
    url: '/reports/2026/07/mobile-gui-agent-models/#video',
    date: '2026-07-31'
  },
  {
    title: '手机 agent 上生产前必须知道的四件事',
    type: '报告内主题 · 风险清单',
    summary: '规模化下混合方案优于纯 agent、不可逆动作要设确认门、屏幕内容全是不可信输入（AgentRAE 后门攻击）、OS 级手机助手正遭遇生态反制。',
    keywords: '生产风险 混合方案 确定性脚本 agent 恢复 不可逆动作 确认门 prompt injection AgentRAE 后门攻击 通知图标 触发器 豆包手机助手 生态限制 隐私',
    url: '/reports/2026/07/mobile-gui-agent-models/#risks',
    date: '2026-07-31'
  },
  {
    title: 'Harness 生态全景 2026',
    type: '报告 · AI 工程生态调研',
    summary: 'GitHub 上 harness 相关项目全景：agent harness 是什么、术语从哪来、40 个热门项目的 star 与许可证实测，以及 HN 上支持与质疑的一手声音。',
    keywords: 'harness agent harness harness engineering harness 是什么 AI agent 框架 脚手架 openclaw superpowers ECC hermes agent opencode deepagents CodeWhale Trellis grok-build meta-harness AHE Terminal-Bench lm-evaluation-harness Harness.io CI/CD 消歧 上下文工程 context engineering skills MCP 沙箱 记忆 选型 许可证 AGPL star 通胀 2026',
    url: '/reports/2026/07/agent-harness-landscape/',
    date: '2026-07-31'
  },
  {
    title: '先消歧：三个 harness',
    type: '报告内主题 · 概念辨析',
    summary: 'agent harness（包住模型的脚手架）、Harness.io（CI/CD 平台）、evaluation harness（模型评测框架）是三个互不相干的东西。',
    keywords: 'harness 消歧 区别 agent harness Harness.io CI/CD drone gitness lm-evaluation-harness bigcode 评测框架 测试台架 同名',
    url: '/reports/2026/07/agent-harness-landscape/#disambiguation',
    date: '2026-07-31'
  },
  {
    title: 'harness engineering 这个词是怎么火起来的',
    type: '报告内主题 · 术语溯源',
    summary: 'OpenAI 把 harness engineering 定义为一门学科，Anthropic 同期跟进，随后 2026 年 3 月下旬 GitHub 一周内爆出五个同主题仓库。',
    keywords: 'harness engineering 起源 OpenAI Codex agent loop Anthropic building effective agents 术语 时间线 2026年3月 爆发 arxiv AHE',
    url: '/reports/2026/07/agent-harness-landscape/#origin',
    date: '2026-07-31'
  },
  {
    title: 'HN 上对 harness engineering 的支持与质疑',
    type: '报告内主题 · 社区口碑',
    summary: '一派称其为好的软件工程实践，另一派称其为美化过的调参配置；还有人断言 harness 几乎不重要、魔法全在模型本身。',
    keywords: 'hacker news 评价 口碑 争议 质疑 buzzword 调参 harness 不重要 模型 护城河 粘性 机车党 gearhead 沙箱逃逸 订阅绑定 Codex Claude Code',
    url: '/reports/2026/07/agent-harness-landscape/#voices',
    date: '2026-07-31'
  },
  {
    title: 'harness 项目选型风险',
    type: '报告内主题 · 风险',
    summary: 'Trellis 的 AGPL 传染性、openclaw 许可证未声明、hive 停更且积压 1313 个 issue、以及整个品类的 star 通胀。',
    keywords: '选型 风险 许可证 AGPL 传染 NOASSERTION 未声明 issue 积压 停更 维护 star 通胀 watcher 比例 新项目 时间检验',
    url: '/reports/2026/07/agent-harness-landscape/#risks',
    date: '2026-07-31'
  },
  {
    title: 'Agentic Harness Engineering (AHE)',
    type: '报告内项目 · 研究',
    summary: '冻结模型、只演化 harness 的可观测性框架；GPT-5.5 上 Terminal-Bench 2.0 达 84.7%，排名第 3。',
    keywords: 'AHE agentic harness engineering 论文 arxiv 自动演化 可观测性 Terminal-Bench SWE-bench 冻结模型 meta-harness stanford SkillOpt',
    url: '/reports/2026/07/agent-harness-landscape/?q=AHE',
    date: '2026-07-31'
  },
  {
    title: '终端里还有哪些能用的编程 CLI',
    type: '报告 · 开发工具调研',
    summary: '除 Claude Code 与 Codex 之外的 26 款终端 AI 编程 agent，star 数与活跃度由 GitHub API 当天实测，另附 Reddit / HN 一手用户口碑。',
    keywords: 'AI 编程 CLI coding agent 终端 命令行 claude code 替代 codex 替代 opencode pi coding agent goose crush antigravity cli gemini cli 停服 copilot cli amp sourcegraph factory droid cline qwen code kimi code aider roo code 归档 开源 MCP AGENTS.md 选型 评价 口碑 reddit',
    url: '/reports/2026/07/code-cli-agents/',
    date: '2026-07-30'
  },
  {
    title: '社区怎么评价这些编程 CLI',
    type: '报告内主题 · 用户口碑',
    summary: 'Reddit 与 Hacker News 上关于 Claude Code、Codex、OpenCode、Cursor CLI、Kimi Code 的一手用户发言汇总。',
    keywords: '评价 口碑 用户反馈 reddit hacker news 体验 对比 claude code codex opencode cursor cli kimi code 迁移 用量限制 稳定性 隐私 争议',
    url: '/reports/2026/07/code-cli-agents/#voices',
    date: '2026-07-30'
  },
  {
    title: 'Cursor CLI',
    type: '报告内工具 · 商业独立',
    summary: '命令名 agent，MCP 一等公民、sandbox、print 模式可进 CI；缺 background shell，且必须有 Cursor 订阅。',
    keywords: 'cursor cli agent 命令 MCP sandbox print 模式 CI worktree cloud handoff background shell 订阅 评价 两极',
    url: '/reports/2026/07/code-cli-agents/?q=Cursor',
    date: '2026-07-30'
  },
  {
    title: 'Kimi Code',
    type: '报告内工具 · 大厂原生',
    summary: 'Moonshot 的终端 agent，K3 最高 1M 上下文，配额按周刷新；官方自陈三条限制值得先读。',
    keywords: 'kimi code K3 K2.7 moonshot 月之暗面 订阅 周配额 1M 上下文 thinking history 过度主动 AGENTS.md 数据驻留 ACP MCP 复用',
    url: '/reports/2026/07/code-cli-agents/?q=Kimi',
    date: '2026-07-30'
  },
  {
    title: 'Gemini CLI 已对消费级用户停服',
    type: '报告内主题 · 重大变化',
    summary: 'Google 于 2026-05-19 I/O 宣布，Gemini CLI 自 2026-06-18 起停止服务个人用户，继任者是闭源 Go 写的 Antigravity CLI。',
    keywords: 'gemini cli 停服 退役 deprecated antigravity cli agy google io 2026 迁移 闭源 企业版 例外',
    url: '/reports/2026/07/code-cli-agents/?q=Gemini',
    date: '2026-07-30'
  },
  {
    title: 'Claude 订阅不能驱动第三方 CLI',
    type: '报告内主题 · 成本约束',
    summary: 'Anthropic 自 2026-04-04 起全面禁止用 Claude Pro/Max 订阅的 OAuth token 驱动第三方工具，换 CLI 无法复用订阅额度。',
    keywords: 'claude pro max 订阅 oauth 第三方 工具 禁止 条款 opencode 法务 PR 18186 API key 成本 费用',
    url: '/reports/2026/07/code-cli-agents/?q=opencode',
    date: '2026-07-30'
  },
  {
    title: 'opencode',
    type: '报告内工具 · 开源通用',
    summary: 'GitHub 上 star 最高的编程 agent（191k、MIT），模型无关、LSP 自动接入、认 AGENTS.md 与 Agent Skills。',
    keywords: 'opencode anomaly 开源 MIT 模型无关 LSP AGENTS.md agent skills zen 终端 TUI',
    url: '/reports/2026/07/code-cli-agents/?q=opencode',
    date: '2026-07-30'
  },
  {
    title: 'Pi coding agent',
    type: '报告内工具 · 开源通用',
    summary: '系统提示压到 1000 token 以内的极简 harness，靠 lazy skills 按需加载能力，四种运行形态。',
    keywords: 'pi earendil mario zechner armin ronacher 极简 harness lazy skills 系统提示 token 扩展 typescript MIT',
    url: '/reports/2026/07/code-cli-agents/?q=Pi',
    date: '2026-07-30'
  },
  {
    title: 'Goose',
    type: '报告内工具 · 开源通用',
    summary: 'Block 交给 Linux Foundation 旗下 Agentic AI Foundation 治理的 Rust 通用 agent，MCP 原生、治理中立。',
    keywords: 'goose block square linux foundation agentic ai foundation rust MCP 本地模型 ollama apache 中立治理',
    url: '/reports/2026/07/code-cli-agents/?q=Goose',
    date: '2026-07-30'
  },
  {
    title: '港版 Switch 2，怎么买《赛博朋克 2077》？',
    type: '报告 · 游戏设备购买研究',
    summary: '区分港版本体、香港 eShop 账号、数字支付、实体完整卡带和 DLC 地区匹配，提供安全购买路径。',
    keywords: 'switch 2 港版 香港 eShop 赛博朋克2077 cyberpunk 2077 ultimate edition 数字版 实体卡带 64GB Game-Key Card Nintendo Account DLC 地区 账号 预付卡 购买指南',
    url: '/reports/2026/07/switch-2-hk-cyberpunk-buying-guide/',
    date: '2026-07-30'
  },
  {
    title: '港版 Switch 2 的数字版购买流程',
    type: '报告内主题 · Nintendo eShop',
    summary: '先确认香港账号地区与商品上架，再用可用付款方式按需充值并购买。',
    keywords: '香港 eShop 数字版 购买流程 Nintendo Account 地区 香港 信用卡 预付序号 兑换 下载',
    url: '/reports/2026/07/switch-2-hk-cyberpunk-buying-guide/#digital',
    date: '2026-07-30'
  },
  {
    title: 'Switch 2 实体卡与 Game-Key Card 的区别',
    type: '报告内主题 · 游戏介质',
    summary: '《赛博朋克 2077：终极版》Switch 2 实体版为 64GB 完整游戏卡，非仅启动下载的 Game-Key Card。',
    keywords: '实体卡带 Game-Key Card 64GB 赛博朋克2077 Switch 2 完整游戏卡 下载',
    url: '/reports/2026/07/switch-2-hk-cyberpunk-buying-guide/#physical',
    date: '2026-07-30'
  },
  {
    title: 'Mac 上好用的 AI 软件',
    type: '报告 · 软件调研',
    summary: '11 个领域、40 款 macOS AI 应用清单，标注本地/云端、价格与已知的坑。',
    keywords: 'mac macos ai 软件 应用 app 调研 推荐 本地 大模型 语音 会议 翻译 启动器 浏览器 图像 2026 07',
    url: '/reports/2026/07/mac-ai-apps/',
    date: '2026-07-30'
  },
  {
    title: '本地大模型：Ollama / LM Studio / MLX',
    type: '报告内主题 · 本地大模型',
    summary: 'Ollama 0.19 起在 Apple Silicon 改用原生 MLX runner，便利性不再以性能为代价。',
    keywords: 'ollama lm studio mlx jan 本地大模型 local llm apple silicon 离线 隐私 mac',
    url: '/reports/2026/07/mac-ai-apps/?q=本地大模型',
    date: '2026-07-30'
  },
  {
    title: '语音输入：Superwhisper 与 MacWhisper 的区别',
    type: '报告内主题 · 语音输入',
    summary: 'Superwhisper 是实时听写，MacWhisper 是音频文件转录——解决的是两件不同的事。',
    keywords: 'superwhisper macwhisper wispr flow 听写 语音输入 转录 dictation 离线 whisper mac',
    url: '/reports/2026/07/mac-ai-apps/?q=语音输入',
    date: '2026-07-30'
  },
  {
    title: '会议纪要：Granola 不派机器人进会议',
    type: '报告内主题 · 会议纪要',
    summary: '本地抓系统音频生成结构化纪要，参会者名单里不出现机器人，且不存录音。',
    keywords: 'granola fathom otter 会议纪要 meeting notes 转写 待办 本地 隐私 mac',
    url: '/reports/2026/07/mac-ai-apps/?q=会议纪要',
    date: '2026-07-30'
  },
  {
    title: '翻译：Bob 与免费平替 Easydict',
    type: '报告内主题 · 翻译',
    summary: '划词翻译、离线 OCR 截图翻译与网页双语对照的 Mac 选择。',
    keywords: 'bob easydict 沉浸式翻译 immersive translate 划词翻译 ocr 截图翻译 词典 mac 开源',
    url: '/reports/2026/07/mac-ai-apps/?q=翻译',
    date: '2026-07-30'
  },
  {
    title: '钱、劳动与注意力',
    type: '报告 · 互动学习',
    summary: '通过可调思想实验理解工资、物价、财富分配、个人 IP 与广告收入的共同机制。',
    keywords: '钱 货币 劳动 工资 收入 物价 购买力 财富 分配 集中 平均 个人IP 注意力 信任 广告 文体娱乐 经济学 互动学习',
    url: '/reports/2026/07/money-labor-and-attention/',
    date: '2026-07-30'
  },
  {
    title: '为什么同样劳动收入不同',
    type: '报告内主题 · 劳动市场',
    summary: '比较生产系统效率、客户支付能力、劳动者议价份额与本地物价对收入和购买力的影响。',
    keywords: '同样劳动 收入差距 发达国家 发展中国家 工资 生产率 客户支付能力 议价能力 物价 购买力',
    url: '/reports/2026/07/money-labor-and-attention/',
    date: '2026-07-30'
  },
  {
    title: '财富集中还是平均分配',
    type: '报告内主题 · 财富分配',
    summary: '从财富来源、资本用途、联合融资与规则影响力判断集中或平均的实际后果。',
    keywords: '财富集中 平均分配 贫富差距 创新 垄断 寻租 投资 联合融资 经济权力',
    url: '/reports/2026/07/money-labor-and-attention/',
    date: '2026-07-30'
  },
  {
    title: '个人 IP 为什么能挣钱',
    type: '报告内主题 · 注意力经济',
    summary: '观察稳定触达、信任、付费率、客单价与广告收入如何形成不同商业模式。',
    keywords: '个人IP 个人品牌 注意力 信任 付费率 客单价 广告 票房 订阅 自有产品 文体娱乐',
    url: '/reports/2026/07/money-labor-and-attention/',
    date: '2026-07-30'
  },
  {
    title: 'GitHub 本月热门项目',
    type: '报告 · 开源观察',
    summary: '23 个 GitHub Trending 月度项目的交互式快照，按近期新增 star 排序。',
    keywords: 'github trending 本月 热门项目 开源 热度 star ai agent mcp 调研 2026 07',
    url: '/reports/2026/07/github-hot-projects/'
  },
  {
    title: 'MadsLorentzen/ai-job-search',
    type: '报告内项目 · Agent',
    summary: '本地运行的 Claude Code 求职工作流：评估职位、定制简历与面试准备。',
    keywords: 'github trending agent claude code 求职 简历 interview typescript',
    url: '/reports/2026/07/github-hot-projects/?q=ai-job-search'
  },
  {
    title: 'diegosouzapw/OmniRoute',
    type: '报告内项目 · Agent',
    summary: '连接多家模型提供商的 AI 网关，覆盖 CLI、MCP 与 coding agent。',
    keywords: 'github trending agent ai gateway mcp cli coding typescript 模型 网关',
    url: '/reports/2026/07/github-hot-projects/?q=OmniRoute'
  },
  {
    title: 'permissionlesstech/bitchat',
    type: '报告内项目 · 通信',
    summary: '强调离线近距离通信的蓝牙 mesh 聊天工具。',
    keywords: 'github trending 蓝牙 bluetooth mesh 通信 聊天 离线 swift',
    url: '/reports/2026/07/github-hot-projects/?q=bitchat'
  },
  {
    title: 'usestrix/strix',
    type: '报告内项目 · 安全',
    summary: '开源 AI 渗透测试工具，用于发现和修复应用漏洞。',
    keywords: 'github trending 安全 渗透测试 漏洞 pentest ai python 授权测试',
    url: '/reports/2026/07/github-hot-projects/?q=strix'
  },
  {
    title: 'stablyai/orca',
    type: '报告内项目 · Agent',
    summary: '并行 coding agent 工作台，支持桌面、移动端和 VPS。',
    keywords: 'github trending agent 并行 coding desktop mobile vps typescript',
    url: '/reports/2026/07/github-hot-projects/?q=orca'
  },
  {
    title: 'Zackriya-Solutions/meetily',
    type: '报告内项目 · 生产力',
    summary: '本地优先的 AI 会议助手，提供转写、说话人分离和 Ollama 总结。',
    keywords: 'github trending 会议 转写 speaker diarization ollama 本地 ai rust 生产力',
    url: '/reports/2026/07/github-hot-projects/?q=meetily'
  },
  {
    title: 'emilkowalski/skills',
    type: '报告内项目 · 设计',
    summary: '面向设计工程师的一组可复用技能。',
    keywords: 'github trending 设计 design engineer skills 技能',
    url: '/reports/2026/07/github-hot-projects/?q=emilkowalski'
  },
  {
    title: 'ogulcancelik/herdr',
    type: '报告内项目 · Agent',
    summary: '在终端运行的 agent multiplexer，用于并行协作。',
    keywords: 'github trending agent terminal multiplexer 并行 协作 rust',
    url: '/reports/2026/07/github-hot-projects/?q=herdr'
  },
  {
    title: 'Nutlope/hallmark',
    type: '报告内项目 · 设计',
    summary: '适用于 Claude Code、Cursor 与 Codex 的反 AI 味设计技能。',
    keywords: 'github trending design 设计 claude code cursor codex skills',
    url: '/reports/2026/07/github-hot-projects/?q=hallmark'
  },
  {
    title: 'hasaneyldrm/exercises-dataset',
    type: '报告内项目 · 数据',
    summary: '包含动作、多语言说明、器械与肌群信息的健身数据集。',
    keywords: 'github trending 健身 数据集 exercises dataset 动作 器械 html',
    url: '/reports/2026/07/github-hot-projects/?q=exercises-dataset'
  },
  {
    title: 'asgeirtj/system_prompts_leaks',
    type: '报告内项目 · 研究',
    summary: '汇集多个 AI 产品被提取的系统提示词；来源与使用边界需审查。',
    keywords: 'github trending system prompts leaks 系统提示词 研究 javascript 审查',
    url: '/reports/2026/07/github-hot-projects/?q=system_prompts_leaks'
  },
  {
    title: 'koala73/worldmonitor',
    type: '报告内项目 · 数据',
    summary: '聚合新闻、地缘事件和基础设施信息的实时全球情报看板。',
    keywords: 'github trending world monitor 新闻 地缘 事件 基础设施 数据 typescript',
    url: '/reports/2026/07/github-hot-projects/?q=worldmonitor'
  },
  {
    title: 'catchorg/Catch2',
    type: '报告内项目 · 开发',
    summary: '现代 C++ 单元测试、TDD 与 BDD 框架。',
    keywords: 'github trending c++ 单元测试 tdd bdd catch2 开发',
    url: '/reports/2026/07/github-hot-projects/?q=Catch2'
  },
  {
    title: 'iOfficeAI/OfficeCLI',
    type: '报告内项目 · Agent',
    summary: '供 AI agent 读写和自动化 Word、Excel、PowerPoint 的单文件 Office CLI。',
    keywords: 'github trending agent office word excel powerpoint cli csharp 自动化',
    url: '/reports/2026/07/github-hot-projects/?q=OfficeCLI'
  },
  {
    title: 'Robbyant/lingbot-map',
    type: '报告内项目 · AI 模型',
    summary: '从流式数据重建场景的前馈 3D foundation model。',
    keywords: 'github trending 3d foundation model 模型 streaming python',
    url: '/reports/2026/07/github-hot-projects/?q=lingbot-map'
  },
  {
    title: 'bradautomates/claude-video',
    type: '报告内项目 · Agent',
    summary: '让 Claude 下载视频、抽帧和转录，以理解视频内容。',
    keywords: 'github trending claude video 视频 下载 抽帧 转录 agent python',
    url: '/reports/2026/07/github-hot-projects/?q=claude-video'
  },
  {
    title: 'wonderwhy-er/DesktopCommanderMCP',
    type: '报告内项目 · Agent',
    summary: '为 Claude 提供终端控制、文件搜索与 diff 编辑能力的 MCP server。',
    keywords: 'github trending mcp claude terminal 文件 搜索 diff desktop commander typescript',
    url: '/reports/2026/07/github-hot-projects/?q=DesktopCommanderMCP'
  },
  {
    title: 'xbtlin/ai-berkshire',
    type: '报告内项目 · 金融',
    summary: '基于 Claude Code/Codex 的价值投资研究框架；非投资建议。',
    keywords: 'github trending 金融 投资 value investing claude code codex agent python',
    url: '/reports/2026/07/github-hot-projects/?q=ai-berkshire'
  },
  {
    title: 'openai/codex-plugin-cc',
    type: '报告内项目 · Agent',
    summary: '从 Claude Code 调用 Codex，进行代码审查或任务委派。',
    keywords: 'github trending openai codex claude code plugin review 代码审查 agent javascript',
    url: '/reports/2026/07/github-hot-projects/?q=codex-plugin-cc'
  },
  {
    title: 'ocornut/imgui',
    type: '报告内项目 · 开发',
    summary: '依赖极少、轻量的 C++ 图形界面库 Dear ImGui。',
    keywords: 'github trending imgui dear im gui c++ 图形界面 开发',
    url: '/reports/2026/07/github-hot-projects/?q=imgui'
  },
  {
    title: 'HKUDS/Vibe-Trading',
    type: '报告内项目 · 金融',
    summary: '定位为个人交易 agent 的研究项目；非投资建议。',
    keywords: 'github trending 金融 trading 交易 agent 研究 python',
    url: '/reports/2026/07/github-hot-projects/?q=Vibe-Trading'
  },
  {
    title: 'DeusData/codebase-memory-mcp',
    type: '报告内项目 · Agent',
    summary: '将代码库索引为持久知识图谱的 code-intelligence MCP server。',
    keywords: 'github trending codebase memory mcp 知识图谱 code intelligence agent',
    url: '/reports/2026/07/github-hot-projects/?q=codebase-memory-mcp'
  },
  {
    title: 'OpenCut-app/OpenCut',
    type: '报告内项目 · 创作',
    summary: '开源视频剪辑工具，定位为 CapCut 替代品。',
    keywords: 'github trending 视频剪辑 video editor capcut 开源 创作 typescript',
    url: '/reports/2026/07/github-hot-projects/?q=OpenCut'
  }
].map(item => ({ date: '2026-07-29', ...item }));
