# Lumina Changelog

All notable changes to Lumina are documented here.

---

## [0.1.24] — 2026-10-02

### Added — Web Search (Free DuckDuckGo)
- **Built-in DuckDuckGo Web Search** — Added free native web search tool (`web_search`) without requiring API keys or third-party paid subscriptions.
- **Asynchronous scraping engine** with fallback to DuckDuckGo Instant Answers API. Available automatically in Agent and Gather modes.
- **Chat Web Toggle Button (Globe Icon)** — Added an interactive Web button in the bottom chat toolbar next to model & mode selectors. Allows enabling (blue) or disabling (gray) web search on the fly with a single click.

### Added — Dynamic API Model Listing
- **Dynamic Model Fetching** — Implemented provider model listing (`list`) for remote providers: OpenRouter, OpenAI-Compatible, Groq, Gemini, Anthropic, DeepSeek, Mistral, xAI, LiteLLM, Moonshot, Ollama and more.
- **IPC resilience** — Hardened IPC communication channels to prevent UI locking in "Searching..." when API keys are invalid or endpoints are unreachable.

### Fixed — Build & Toolchain
- **Visual Studio 18 / 2026 Build Tools support** — Integrated Microsoft's official `vswhere.exe` in `build/npm/preinstall.js` for Windows compilers detection and fixed `npm_execpath` crash.
- **npm list ELSPROBLEMS tolerance** — Added automated build patch (`build/lib/patch-vsce.cjs`) so `@vscode/vsce` tolerates npm 10+ exit codes when packaging internal extensions.
- **Type definitions** — Fixed `OpenaiCompatibleModelResponse` imports in `sendLLMMessage.impl.ts`.

### Security & Privacy
- **Private development model** — Removed external contribution templates and automated GitHub triage hooks. Contributions are managed exclusively by Neuronal.

---


## [0.1.1] — 2025-05-11

### Fixed
- **Agent mode broken** — Tool calls were never executed. The `onFinalMessage` callback in the OpenAI-compatible provider was incorrectly placed inside an `if (!fullText && !toolName)` block, causing it to never fire when the model returned a tool call. The agent would say "I will use tool X" and hang indefinitely. Fixed by moving `onFinalMessage` outside the empty-response guard.

### Updated — LLM SDKs
- `openai`: `4.96.0` → `5.23.2`
- `@anthropic-ai/sdk`: `0.40.0` → `0.62.0`
- `@google/genai`: `0.13.0` → `1.52.0`
- `groq-sdk`: `0.20.1` → `0.32.0`

### Updated — Models

**OpenAI:** Added `gpt-5`, `gpt-5.5`, `gpt-5-mini`

**Anthropic:** Added `claude-opus-4-7`, `claude-opus-4-6`, `claude-opus-4-5`, `claude-sonnet-4-6`, `claude-sonnet-4-5`, `claude-haiku-4`

**xAI:** Added `grok-4`, `grok-4-fast`

**Gemini:** Updated to stable IDs — `gemini-2.5-pro`, `gemini-2.5-flash`, `gemini-2.5-flash-lite` (removed expired preview IDs)

**DeepSeek:** Added `deepseek-v4-pro`, `deepseek-v4-flash` (legacy aliases `deepseek-chat` and `deepseek-reasoner` kept for compatibility until 2026-07-24)

**Groq:** Added `llama-4-maverick`, `llama-4-scout`, `deepseek-r1-distill-llama-70b`

**Mistral:** Added `devstral-2`, `devstral-small-2507`, `mistral-large-3`, `mistral-medium-3`, `mistral-small-3`

**OpenRouter:** Updated with latest models from all providers

---

## [0.1.0] — 2025-05-05

### Initial Lumina Release (fork of Void 1.4.9)

#### Rebranding
- Renamed from Void to Lumina throughout the codebase
- New `product.json` with Lumina identity, GUIDs, and URLs pointing to `neuronal.ia.br/lumina`
- Installer renamed to `Lumina-win32-x64-user-setup.exe`
- Data folder: `.lumina-editor`
- Application name: `lumina`

#### Theme
- Added **Lumina Dark** theme — deep navy background (`#070f1c`) with cyan (`#00c8f0`) and violet (`#7b4fff`) accents
- Added **Lumina Cyberpunk** theme — near-black with magenta neon (`#ff2d78`), electric yellow (`#ffe600`), and cyan (`#00fff9`)
- Added **Lumina Light** theme — clean white with blue (`#0066ff`), green for numbers, orange for strings

#### Layout
- Activity bar default changed to `top` (horizontal tabs, Fleet-style)
- Default window background color set to `#070f1c` (Lumina Dark) — eliminates green flash on startup

#### Build
- Added `scripts/build-installer-win32-x64.bat` — automates full build + inno-updater + installer in one command
- Added `scripts/bump-version.js` — auto-increments `luminaVersion` and `luminaRelease` before each build
- Added `BUILDING.md` — complete build guide
- Added `LLAMA_LOCAL_INFERENCE.md` — implementation plan for bundled local model inference

#### Fixes
- Fixed `AzureOpenAI` constructor incompatibility with openai v5 (`apiKey` type mismatch)
- Fixed default background color to prevent VSCode green flash on startup
- Removed expired Gemini preview model IDs

#### Extensions
- Remote SSH/WSL extensions updated to point to `lumina-ide/lumina` binaries
- Theme extension renamed from `theme-neuronal` to `theme-lumina`
