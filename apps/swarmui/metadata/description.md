# SwarmUI


SwarmUI (formerly StableSwarmUI), is a modular Stable Diffusion Web-User-Interface, with an emphasis on powerful, easily accessible tools, high performance, and extensibility.

Supports local Stable Diffusion, Flux, etc. AI image models, with plans to support AI video, audio, and more in the future. Provides an embedded [ComfyUI](https://github.com/comfyanonymous/ComfyUI) installation with some default nodes; install other nodes to utilize LLM Provider APIs.

![SwarmUI screenshot; Generate Tab showing many kitties](https://raw.githubusercontent.com/mcmonkeyprojects/SwarmUI/master/.github/images/swarmui.jpg)

## Status

This project is in Beta status. This means for most tasks, Swarm has excellent tooling available to you, but there is much more planned. Swarm is recommended as an ideal UI for most users, beginners and pros alike. There are still some things to be worked out.

Beginner users will love Swarm's primary Generate tab interface, making it easy to generate anything with powerful, built-in features. Advanced users may favor the Comfy Workflow tab to get the unrestricted raw graph, but will still have reason to come back to the Generate tab for convenience features (image editor, auto-workflow-generation, etc.) and powertools (e.g. Grid Generator).

## Installation

1. **Install via Tipi**: After Tipi installation, open the app to begin the app's installation and configuration wizard.
2. There is no step 2.

## Configuration Notes

### GPU Inference

SwarmUI is only well-tested with Nvidia GPUs; the default configuration acknowledges this. If you don't have an Nvidia GPU, you have a couple of options:

1. Run without a local "backend". During the SwarmUI install process you can choose to skip installing a backend and use a custom node (perhaps with the help of [ComfyUI-Manager](https://github.com/ltdrdata/ComfyUI-Manager)) in the Comfy Workflows tab to connect to a remote API (e.g. use [ComfyUI-Flux-Replicate-API](https://github.com/smlbiobot/ComfyUI-Flux-Replicate-API) to access the Flux models on Replicate).

2. If you have an AMD GPU, you can try the untested AMD installation process during the setup. To do so, you'll need to make sure you've installed the appropriate drivers and GPU toolkits (e.g. ROCm) on your host. You'll also need to enable it for the swarmui service in a [user-config](https://runtipi.io/docs/guides/customize-app-config), which might look like a `docker-compose.yml` file in `runtipi/user-config/swarmui` with the content:


```yaml
services:
  swarmui:
    deploy:
      resources:
        reservations:
          devices:
            - driver: amdgpu
              count: all
              capabilities:
                - gpu
```

### Data persistence

The Tipi implementation uses `APP_DATA_DIR`-mapped volumes for the volumes the SwarmUI container needs. Most importantly, this means your custom nodes and workflows will be installed in your Tipi app-data directory (e.g. assuming you install ComfyUI, custom nodes will be stored at `app-data/swarmui/swarmbackend/ComfyUI/custom_nodes/`).

### Advanced configuration

For more detailed instructions and advanced configuration options, refer to the [SwarmUI GitHub repository](https://github.com/mcmonkeyprojects/SwarmUI).
