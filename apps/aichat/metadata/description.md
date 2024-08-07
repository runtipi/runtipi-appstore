# AIChat: All-in-one AI tool

AIChat is an all-in-one AI tool featuring an OpenAI-API-compatible API and a chat playground and arena. It also provides a Chat-REPL, Shell Assistant, RAG, AI Tools & Agents, and more in a CLI interface.

## Getting Started on Tipi

The provided configuration file initializes clients for several of OpenRouter's, OpenAI's, and Anthropic's Claude LLMs. API Keys provided in the settings fields will be used to authenticate to those APIs. By default AIChat's playground interface on Tipi will use OpenRouter's  `auto` "model".

Additional clients and models may be provisioned in the config file (using a custom app store to enable access to the `config.yaml` content); see the [example config file](https://github.com/sigoden/aichat/blob/main/config.example.yaml) for guidance.

## Features on Tipi

AIChat provides a terminal user interface with many features that are accessible on the server. See the [project README](https://github.com/sigoden/aichat) for more details.

On Tipi, AIChat provides web-based access to the following features.

### Multi-Platform Support

Effortlessly connect with over 20 leading LLM platforms through a unified interface:

- **OpenAI:** GPT-4/GPT-3.5 (paid, chat, embedding, vision, function-calling)
- **Gemini:** Gemini-1.5/Gemini-1.0 (free, paid, chat, embedding, vision, function-calling)
- **Claude:** Claude-3.5/Claude-3 (paid, chat, vision, function-calling)
- **Ollama:** (free, local, chat, embedding, vision, function-calling)
- **Groq:** Llama-3.1/Mixtral/Gemma2 (free, chat, function-calling)
- **Azure-OpenAI:** GPT-4/GPT-3.5 (paid, chat, embedding, vision, function-calling)
- **VertexAI:** Gemini/Claude/Mistral (paid, chat, embedding, vision, function-calling)
- **Bedrock:** Llama3.1/Claude3.5/Mistral/Command-R+ (paid, chat, embedding, function-calling)
- **Mistral:** (paid, chat, embedding, function-calling)
- **Cohere:** Command-R/Command-R+ (paid, chat, embedding, reranker, function-calling)
- **Perplexity:** Llama-3/Mixtral (paid, chat, online)
- **Cloudflare:** (free, chat, embedding)
- **OpenRouter:** (paid, chat, function-calling)
- **Replicate:** (paid, chat)
- **Ernie:** (paid, chat, embedding, reranker, function-calling)
- **Qianwen:** Qwen (paid, chat, embedding, vision, function-calling)
- **Moonshot:** (paid, chat, function-calling)
- **Deepseek:** (paid, chat, function-calling)
- **ZhipuAI:** GLM-4 (paid, chat, embedding, vision, function-calling)
- **LingYiWanWu:** Yi-Large (paid, chat, vision, function-calling)
- **Jina:**  (free, paid, embedding, reranker)
- **VoyageAI:**  (paid, embedding, reranker)
- **OpenAI-Compatible Platforms** 

### Local Server

AIChat comes with a built-in lightweight http server.

```
$ aichat --serve
Chat Completions API: http://127.0.0.1:8000/v1/chat/completions
Embeddings API:       http://127.0.0.1:8000/v1/embeddings
LLM Playground:       http://127.0.0.1:8000/playground
LLM Arena:            http://127.0.0.1:8000/arena?num=2
```

#### Proxy LLM APIs

AIChat offers the ability to function as a proxy server for all LLMs. This allows you to interact with different LLMs using the familiar OpenAI API format, simplifying the process of accessing and utilizing these LLMs.

Test with curl:

```sh
curl -X POST -H "Content-Type: application/json" -d '{
  "model":"claude:claude-3-opus-20240229",
  "messages":[{"role":"user","content":"hello"}], 
  "stream":true
}' http://127.0.0.1:8000/v1/chat/completions
```

#### LLM Playground

The LLM Playground is a webapp that allows you to interact with any LLM supported by AIChat directly in your browser.

![aichat-llm-playground](https://github.com/sigoden/aichat/assets/4012553/d2334c03-9a07-41a4-a326-e4ee37477ce3)

#### LLM Arena

The LLM Arena is a web-based platform where you can compare different LLMs side-by-side. 

![aichat-llm-arena](https://github.com/sigoden/aichat/assets/4012553/eb1eab0c-4685-4142-89c6-089714b4822c)

