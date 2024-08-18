# Lobe Chat

LobeChat is an open-source, high-performance chatbot framework that supports
speech synthesis, multimodal, and extensible
([Function Call](https://platform.openai.com/docs/guides/function-calling)) plugin system.

## Settings
| Environment Variable | Required | Description | Example |
| -------------------- | -------- | ------------| --------|
| `OPENAI_API_KEY`     | Yes      | API key for OpenAI. You can generate it on [your OpenAI account page](https://platform.openai.com/api-keys). **Note:** Keep your `OPENAI_API_KEY` secure to prevent unauthorized access. | `sk-xxxxxx...xxxxxx` |
| `OPENAI_PROXY_URL`   | No       | Override the default OpenAI API base URL for requests. **Caution:** Only use a trusted proxy to ensure the security of your data. | `https://api.chatanywhere.cn/v1`<br/>The default value is<br/>`https://api.openai.com/v1` |
| `ACCESS_CODE`        | No       | Password to avoid leaking. If you want to have multiple passwords, use a comma separated list. **Security Best Practice:** Avoid storing passwords directly in environment variables. Use a secrets management service to protect sensitive information. | `awCTe)re_r74` or `rtrt_ewee3@09!` or `code1,code2,code3` |
| `CUSTOM_MODELS`      | No       | Control the model list. Use `+` to add a model, `-` to hide a model, and `model_name=display_name` to customize the display name of a model, separated by commas. | `qwen-7b-chat,+glm-6b,-gpt-3.5-turbo` |
