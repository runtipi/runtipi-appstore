## Usage

⚠️ This app runs on port **11436**. Take this into account when configuring tools connecting to the app.

### Use with a frontend

- [LobeChat](https://github.com/lobehub/lobe-chat)
- [LibreChat](https://github.com/danny-avila/LibreChat)
- [OpenWebUI](https://github.com/open-webui/open-webui)
- [And more ...](https://github.com/ollama/ollama)

---

### Try the REST API

Ollama has a REST API for running and managing models.

**Generate a response**

```sh
curl http://localhost:11434/api/generate -d '{
  "model": "llama3",
  "prompt":"Why is the sky blue?"
}'
```

**Chat with a model**

```sh
curl http://localhost:11434/api/chat -d '{
  "model": "llama3",
  "messages": [
    { "role": "user", "content": "why is the sky blue?" }
  ]
}'
```

---

## Model library

Ollama supports a list of models available on [ollama.com/library](https://ollama.com/library 'ollama model library')

Here are some example models that can be downloaded:

| Model              | Parameters | Size  | Download                       |
| ------------------ | ---------- | ----- | ------------------------------ |
| Llama 3            | 8B         | 4.7GB | `ollama run llama3`            |
| Llama 3            | 70B        | 40GB  | `ollama run llama3:70b`        |
| Phi-3              | 3,8B       | 2.3GB | `ollama run phi3`              |
| Mistral            | 7B         | 4.1GB | `ollama run mistral`           |
| Neural Chat        | 7B         | 4.1GB | `ollama run neural-chat`       |
| Starling           | 7B         | 4.1GB | `ollama run starling-lm`       |
| Code Llama         | 7B         | 3.8GB | `ollama run codellama`         |
| Llama 2 Uncensored | 7B         | 3.8GB | `ollama run llama2-uncensored` |
| LLaVA              | 7B         | 4.5GB | `ollama run llava`             |
| Gemma              | 2B         | 1.4GB | `ollama run gemma:2b`          |
| Gemma              | 7B         | 4.8GB | `ollama run gemma:7b`          |
| Solar              | 10.7B      | 6.1GB | `ollama run solar`             |

> Note: You should have at least 8 GB of RAM available to run the 7B models, 16 GB to run the 13B models, and 32 GB to run the 33B models.
