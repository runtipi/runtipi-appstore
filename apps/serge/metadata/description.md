# Deprecation Notice
Serge hasn't been updated for a long time and has been officially archived on July 20 2026.
This app will be remove from the appstore before the end of the year.

# Serge - LLaMA made easy 🦙

Serge is a chat interface crafted with [llama.cpp](https://github.com/ggerganov/llama.cpp) for running Alpaca models. No API keys, entirely self-hosted!

- 🌐 **SvelteKit** frontend
- 💾 **[Redis](https://github.com/redis/redis)** for storing chat history & parameters
- ⚙️ **FastAPI + LangChain** for the API, wrapping calls to [llama.cpp](https://github.com/ggerganov/llama.cpp) using the [python bindings](https://github.com/abetlen/llama-cpp-python)


## 🧠 Supported Models

| Category      | Models |
|:-------------:|:-------|
| **Alpaca 🦙** | Alpaca-LoRA-65B, GPT4-Alpaca-LoRA-30B |
| **Chronos 🌑**| Chronos-13B, Chronos-33B, Chronos-Hermes-13B |
| **GPT4All 🌍**| GPT4All-13B |
| **Koala 🐨**  | Koala-7B, Koala-13B |
| **LLaMA 🦙**  | FinLLaMA-33B, LLaMA-Supercot-30B, LLaMA2 7B, LLaMA2 13B, LLaMA2 70B |
| **Lazarus 💀**| Lazarus-30B |
| **Nous 🧠**   | Nous-Hermes-13B |
| **OpenAssistant 🎙️** | OpenAssistant-30B |
| **Orca 🐬**   | Orca-Mini-v2-7B, Orca-Mini-v2-13B, OpenOrca-Preview1-13B |
| **Samantha 👩**| Samantha-7B, Samantha-13B, Samantha-33B |
| **Vicuna 🦙** | Stable-Vicuna-13B, Vicuna-CoT-7B, Vicuna-CoT-13B, Vicuna-v1.1-7B, Vicuna-v1.1-13B, VicUnlocked-30B, VicUnlocked-65B |
| **Wizard 🧙** | Wizard-Mega-13B, WizardLM-Uncensored-7B, WizardLM-Uncensored-13B, WizardLM-Uncensored-30B, WizardCoder-Python-13B-V1.0 |

Additional weights can be added to the `serge_weights` volume using `docker cp`:

```bash
docker cp ./my_weight.bin serge:/usr/src/app/weights/
```

## ⚠️ Memory Usage

LLaMA will crash if you don't have enough available memory for the model:

| Model       | Max RAM Required |
|-------------|------------------|
| 7B          | 4.5GB            |
| 7B-q2_K     | 5.37GB           |
| 7B-q3_K_L   | 6.10GB           |
| 7B-q4_1     | 6.71GB           |
| 7B-q4_K_M   | 6.58GB           |
| 7B-q5_1     | 7.56GB           |
| 7B-q5_K_M   | 7.28GB           |
| 7B-q6_K     | 8.03GB           |
| 7B-q8_0     | 9.66GB           |
| 13B         | 12GB             |
| 13B-q2_K    | 8.01GB           |
| 13B-q3_K_L  | 9.43GB           |
| 13B-q4_1    | 10.64GB          |
| 13B-q4_K_M  | 10.37GB          |
| 13B-q5_1    | 12.26GB          |
| 13B-q5_K_M  | 11.73GB          |
| 13B-q6_K    | 13.18GB          |
| 13B-q8_0    | 16.33GB          |
| 33B         | 20GB             |
| 33B-q2_K    | 16.21GB          |
| 33B-q3_K_L  | 19.78GB          |
| 33B-q4_1    | 22.83GB          |
| 33B-q4_K_M  | 22.12GB          |
| 33B-q5_1    | 26.90GB          |
| 33B-q5_K_M  | 25.55GB          |
| 33B-q6_K    | 29.19GB          |
| 33B-q8_0    | 37.06GB          |
| 65B         | 50GB             |
| 65B-q2_K    | 29.95GB          |
| 65B-q3_K_L  | 37.15GB          |
| 65B-q4_1    | 43.31GB          |
| 65B-q4_K_M  | 41.85GB          |
| 65B-q5_1    | 51.47GB          |
| 65B-q5_K_M  | 48.74GB          |
| 65B-q6_K    | 56.06GB          |
| 65B-q8_0    | 71.87GB          |

## 🧾 License

[Nathan Sarrazin](https://github.com/nsarrazin) and [Contributors](https://github.com/serge-chat/serge/graphs/contributors). `Serge` is free and open-source software licensed under the [MIT License](https://github.com/serge-chat/serge/blob/master/LICENSE).

## 💬 Support

Need help? Join our [Discord](https://discord.gg/62Hc6FEYQH)
