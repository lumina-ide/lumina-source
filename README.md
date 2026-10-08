# Welcome to Lumina / Bem-vindo ao Lumina

<div align="center">
	<img
		src="./resources/lumina-ide-logo.png"
		alt="Lumina IDE - AI-Powered Code Editor"
		width="450"
		height="auto"
	/>
	<p><strong>The Open-Source, 100% Local AI-Powered Code Editor</strong></p>
	<p><em>O Editor de Código de Código Aberto com Inteligência Artificial 100% Local</em></p>
</div>

<hr />

## 🚀 Downloads / Baixar

Get the latest stable release for Windows. Linux and macOS builds coming soon!
*Obtenha a versão estável mais recente para Windows. Builds de Linux e macOS em breve!*

<div align="center">
	<a href="https://www.neuronal.ia.br/downloads/Lumina-win32-x64-user-setup.exe">
		<img src="https://img.shields.io/badge/Download-Lumina%20for%20Windows%20(x64)-007acc?style=for-the-badge&logo=windows&logoColor=white" alt="Download Lumina for Windows" />
	</a>
	<br />
	<small>Direct Link: <a href="https://www.neuronal.ia.br/downloads/Lumina-win32-x64-user-setup.exe">Lumina Windows x64 Installer (.exe)</a></small>
</div>

<hr />

## 🇬🇧 English

**Lumina** is a modern, open-source, AI-powered code editor built on top of VS Code, designed and maintained by [Neuronal](https://neuronal.ia.br). 

Unlike other AI editors, Lumina focuses on privacy, developer autonomy, and offline capability. It allows you to run AI agents and autocomplete directly on your local hardware without sending your code to third-party servers.

### Key Features
*   **100% Local Inference & Bundled CUDA 13.4:** Built-in integration with `llama.cpp` (build `b11476`) with pre-packaged **NVIDIA CUDA 13.4** acceleration libraries and transparent Vulkan/CPU fallbacks.
*   **Autonomous & Grounded AI Agent:** Proactive workspace inspection (`read_file`, `ls_dir`, `search_for_files`), autonomous multi-step reasoning, and direct workspace modifications without copy-pasting diffs.
*   **Reasoning & Thinking Models Support:** Automatic detection and budget allocation slider (`budget_slider`) for reasoning models (NVIDIA Nemotron 3 Ultra 550B, MiniMax-01, DeepSeek-R1, QwQ, etc.) with up to 1,000,000 (1M) context window and dedicated token spaces.
*   **Resilient Tool Execution & Leak Protection:** Real-time streaming interception for `<invoke>` and MiniMax tool formats, preventing raw parameters from leaking into chat while executing tools flawlessly.
*   **Built-in Free Web Search:** Native DuckDuckGo web search tool (`web_search`) without API keys, costs or subscriptions, with an intuitive 1-click toggle button directly in the chat toolbar.
*   **Dynamic API Model Listing:** Instantly fetch and update available models from remote providers (OpenRouter, Groq, Gemini, Anthropic, DeepSeek, Mistral, xAI, Ollama, etc.).
*   **Privacy First:** Directly communicates with your local services (or remote APIs) with zero data retention or telemetry from our side.
*   **Fine-Grained Parameter Controls:** Upgraded settings panel with manual parameter tuning (GPU layers, threads, temperature, repetition penalty, reasoning budgets).
*   **VS Code Ecosystem:** Full compatibility with VS Code themes, extensions, and keyboard shortcuts.

### Local Llama Backend Setup (Windows x64)
Lumina packages the required runtime binaries out of the box in installer releases. If you need to manually update or customize the `llama.cpp` binaries:

1.  **Download:** Go to [llama.cpp Releases](https://github.com/ggerganov/llama.cpp/releases) (build `b11476`+ recommended).
    *   For **CPU/Vulkan**: Download `llama-bXXXX-bin-win-x64.zip`.
    *   For **CUDA (NVIDIA)**: Download `llama-bXXXX-bin-win-cu13.4-x64.zip` (along with CUDA 13.4 runtime DLLs: `cudart64_13.dll`, `cublas64_13.dll`, `cublasLt64_13.dll`).
2.  **Placement:** Extract the files (including `llama-server.exe` and `.dll` dependencies) into:
    *   *CPU:* `resources/llama/win32-x64/cpu/`
    *   *CUDA:* `resources/llama/win32-x64/cuda/`
    *   *Vulkan:* `resources/llama/win32-x64/vulkan/`

*Note: Lumina dynamically detects your GPU and falls back to Vulkan/CPU if CUDA is not available.*

### ⚠️ Hardware Guidelines & Model Recommendations
Running models locally requires selecting a model that matches your system's hardware. 

*   **Be Careful with RAM/VRAM:** Local execution loads models directly into your system memory (RAM/VRAM). Running models that are too large for your hardware can freeze your system or cause crashes.
*   **Hardware Baseline Example:** A system with an **Intel i7 (8th Gen), 16GB RAM, and an NVIDIA GeForce GTX 1660 OC** can comfortably run models up to **4B parameters**. Attempting to run larger models (such as 32B) on this hardware is highly discouraged as it will exceed resource limits.
*   **Recommended & Tested Models:** We recommend using the following custom-quantized models (quantized in `Q4_K_M` format, which retains the intelligence of the F16 version while drastically reducing memory requirements):
    *   **Gemma 4B:** [gemma-4-E4B-it-GGUF by armandosds](https://huggingface.co/armandosds/gemma-4-E4B-it-GGUF) (Tested for local agentic workflow)
    *   **Qwen 3.5 4B:** [qwen3.5-4b-agentic-coder-v4-i1-GGUF by armandosds](https://huggingface.co/armandosds/qwen3.5-4b-agentic-coder-v4-i1-GGUF) (Fine-tuned for agentic code tasks)

---

## 🇧🇷 Português

O **Lumina** é um editor de código moderno, de código aberto e alimentado por inteligência artificial, construído sobre a base do VS Code e mantido pela [Neuronal](https://neuronal.ia.br).

Ao contrário de outros editores de IA, o Lumina é focado em privacidade, autonomia do desenvolvedor e capacidade offline. Ele permite que você execute agentes de IA e autocompletar diretamente no seu hardware local, sem enviar seu código para servidores de terceiros.

### Principais Funcionalidades
*   **Inferência 100% Local & CUDA 13.4 Integrado:** Integração nativa com `llama.cpp` (build `b11476`) pré-empacotada com bibliotecas oficiais de aceleração **NVIDIA CUDA 13.4**, além de fallbacks automáticos para Vulkan e CPU.
*   **Agente de IA Autônomo e Fundamentado:** Inspeção proativa do workspace (`read_file`, `ls_dir`, `search_for_files`), raciocínio multi-etapas autônomo e modificação direta de arquivos sem colar diffs no chat.
*   **Suporte a Modelos de Raciocínio (Thinking/Reasoning):** Identificação automática e controle de budget de pensamento via slider dedicado (`budget_slider` para NVIDIA Nemotron 3 Ultra 550B, MiniMax-01, DeepSeek-R1, QwQ, etc.) com janela de contexto de até 1.000.000 (1M) de tokens e alocação reservada.
*   **Execução Resiliente de Ferramentas & Proteção Contra Fuga de Tags:** Interceptação em streaming de tags `<invoke>` e formatos MiniMax, eliminando vazamento de parâmetros no chat e executando ferramentas com perfeição.
*   **Busca Web Gratuita Integrada:** Ferramenta nativa DuckDuckGo (`web_search`) sem necessidade de chaves de API, custos ou assinaturas, com botão prático no chat para ligar/desligar com 1 clique.
*   **Listagem Dinâmica de Modelos:** Busca automática dos modelos disponíveis em provedores remotos (OpenRouter, Groq, Gemini, Anthropic, DeepSeek, Mistral, xAI, Ollama, etc.).
*   **Privacidade em Primeiro Lugar:** Comunicação direta com seus serviços locais (ou APIs remotas) com zero retenção de dados ou telemetria de nossa parte.
*   **Controle Detalhado de Parâmetros:** Painel de configurações aprimorado com controle manual de parâmetros (GPU layers, threads, temperatura, repetition penalty, budget de raciocínio).
*   **Ecossistema VS Code:** Compatibilidade total com temas, extensões e atalhos do VS Code.

### Configuração do Servidor Llama Local (Windows x64)
O Lumina já empacota as binárias e DLLs necessárias no instalador oficial. Caso você queira atualizar ou personalizar manualmente os binários do `llama.cpp`:

1.  **Download:** Acesse as [Releases do llama.cpp](https://github.com/ggerganov/llama.cpp/releases) (build `b11476`+ recomendada).
    *   Para **CPU/Vulkan**: Baixe `llama-bXXXX-bin-win-x64.zip`.
    *   Para **CUDA (NVIDIA)**: Baixe `llama-bXXXX-bin-win-cu13.4-x64.zip` (junto com as DLLs de runtime CUDA 13.4: `cudart64_13.dll`, `cublas64_13.dll`, `cublasLt64_13.dll`).
2.  **Onde colocar:** Extraia os arquivos (incluindo `llama-server.exe` e as dependências `.dll`) nas pastas:
    *   *CPU:* `resources/llama/win32-x64/cpu/`
    *   *CUDA:* `resources/llama/win32-x64/cuda/`
    *   *Vulkan:* `resources/llama/win32-x64/vulkan/`

*Nota: O Lumina detectará automaticamente a presença de suporte CUDA e reverterá de forma transparente para Vulkan ou CPU caso necessário.*

### ⚠️ Recomendações de Modelos & Diretrizes de Hardware
A execução local de IA exige a escolha de um modelo compatível com o hardware do seu computador.

*   **Cuidado com a Memória (RAM/VRAM):** A inferência local consome recursos diretamente da sua memória. Tentar executar modelos grandes demais para as suas especificações pode travar o sistema operacional.
*   **Configuração de Referência:** Um computador equipado com **processador Intel i7 (8ª geração), 16GB de RAM e placa de vídeo NVIDIA GeForce GTX 1660 OC** consegue rodar com ótimo desempenho modelos de até **4B parâmetros**. Tentar rodar modelos muito superiores (como de 32B) nessa configuração irá sobrecarregar os recursos e travar a máquina.
*   **Modelos Recomendados e Testados:** Indicamos o uso dos seguintes modelos de alta performance, quantizados em `Q4_K_M` (mantêm a inteligência da versão F16 original com consumo de recursos otimizado):
    *   **Gemma 4B:** [gemma-4-E4B-it-GGUF no HuggingFace](https://huggingface.co/armandosds/gemma-4-E4B-it-GGUF) (Excelente para tarefas gerais do agente local)
    *   **Qwen 3.5 4B:** [qwen3.5-4b-agentic-coder-v4-i1-GGUF no HuggingFace](https://huggingface.co/armandosds/qwen3.5-4b-agentic-coder-v4-i1-GGUF) (Otimizado e testado para tarefas de código e agentes)

<hr />

## 📖 Reference & Development / Referência e Desenvolvimento

Lumina is a fork of [Void](https://github.com/voideditor/void), which is itself a fork of [VS Code](https://github.com/microsoft/vscode).

*   For codebase overview / *Visão geral da estrutura:* [LUMINA_CODEBASE_GUIDE](./LUMINA_CODEBASE_GUIDE.md)
*   For compilation and build guides / *Instruções de compilação e build:* [BUILDING](./BUILDING.md)

> **Notice:** Lumina is maintained privately by Neuronal and currently does not accept external contributions, pull requests, or third-party feature requests.
>
> *Nota: O Lumina é mantido de forma privada pela Neuronal e atualmente não aceita contribuições externas, pull requests ou solicitações de terceiros.*

## 📞 Support & Contact / Suporte e Contato

*   **Website:** [neuronal.ia.br](https://neuronal.ia.br)
*   **Email:** contato@neuronal.ia.br

