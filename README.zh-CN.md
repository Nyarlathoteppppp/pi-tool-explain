# pi-tool-explain

[English](./README.md)

这是 [`zhcsyncer/pi-extensions`](https://github.com/zhcsyncer/pi-extensions) 的 fork。本 fork 只修改 [`packages/pi-tool-display-intent`](./packages/pi-tool-display-intent)；其它包保留在仓库中，便于同步上游。**只安装这个子包，不会把其它扩展装进 Pi。**

## 新增：Pi 原生工具展示 + 一行解释

设置 `toolCalls.style: "native"` 后，`read`、`bash`、`edit`、`write`、`grep`、`find`、`ls` 保留 Pi 原生的工具调用和结果展示，并在调用附近增加一行简短的 `displaySummary`。Bash 沿用模型在正常 tool call 中生成的意图；其它内置工具沿用确定性摘要。不会额外请求模型。

这个模式保留原有 schema 包装、摘要清理、fallback、合作式 custom tool API 和工具执行逻辑。原有 `compact`、`claude` 样式及 `aggregate` Run 账本继续可用；`native` 用于 `individual` 布局。

详细功能和设置见[插件说明](./packages/pi-tool-display-intent/README.zh-CN.md)。

## 安装这个 fork

```bash
git clone https://github.com/Nyarlathoteppppp/pi-tool-explain.git
cd pi-tool-explain
pnpm install --frozen-lockfile
pi install "$PWD/packages/pi-tool-display-intent"
```

在 Pi 的 `/tools` 设置中选择 **Tool call style → native**，然后执行 `/reload`。也可以把 `toolCalls.style` 设为 `native`，配置文件位于 `~/.pi/agent/extension-data/pi-tool-display-intent/config.json`。

当前 fork 的改动尚未发布到 npm。`pi install npm:@zhcsyncer/pi-tool-display-intent` 安装的是上游版本。使用本地路径安装时，请保留克隆目录。

## 来源与许可

原仓库中的其它扩展和根 bundle 见[上游项目](https://github.com/zhcsyncer/pi-extensions)。插件的来源、MIT 许可和保留声明见[插件 README](./packages/pi-tool-display-intent/README.zh-CN.md)、[LICENSE](./packages/pi-tool-display-intent/LICENSE) 与[上游许可](./packages/pi-tool-display-intent/UPSTREAM_LICENSE)。
