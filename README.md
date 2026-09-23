# pi-tool-explain

[简体中文](./README.zh-CN.md)

This is a fork of [`zhcsyncer/pi-extensions`](https://github.com/zhcsyncer/pi-extensions). This fork changes only [`packages/pi-tool-display-intent`](./packages/pi-tool-display-intent); the other packages remain in the repository for upstream syncing. **Installing this subpackage does not install the other extensions into Pi.**

## New: Pi's native tool display with one explanation line

With `toolCalls.style: "native"`, `read`, `bash`, `edit`, `write`, `grep`, `find`, and `ls` keep Pi's original tool-call and result display, with one short `displaySummary` line near each call. Bash keeps the model-written intent from the normal tool call; the other built-ins use deterministic summaries. No extra model request is made.

This mode preserves schema wrapping, summary sanitization, fallback behavior, the cooperative custom-tool API, and tool execution. The existing `compact` and `claude` styles and `aggregate` Run ledger remain available. `native` applies to the `individual` layout.

See the [plugin README](./packages/pi-tool-display-intent/README.md) for the full feature set and settings.

## Install this fork

```bash
git clone https://github.com/Nyarlathoteppppp/pi-tool-explain.git
cd pi-tool-explain
pnpm install --frozen-lockfile
pi install "$PWD/packages/pi-tool-display-intent"
```

In Pi's `/tools` settings, choose **Tool call style → native**, then run `/reload`. You can also set `toolCalls.style` to `native` in `~/.pi/agent/extension-data/pi-tool-display-intent/config.json`.

This fork's changes are not published to npm yet. `pi install npm:@zhcsyncer/pi-tool-display-intent` installs the upstream version. Keep the cloned directory when installing from its local path.

## Origin and license

See the [upstream project](https://github.com/zhcsyncer/pi-extensions) for the other extensions and root bundle. Plugin provenance, MIT license, and preserved notices are in the [plugin README](./packages/pi-tool-display-intent/README.md), [LICENSE](./packages/pi-tool-display-intent/LICENSE), and [upstream license](./packages/pi-tool-display-intent/UPSTREAM_LICENSE).
