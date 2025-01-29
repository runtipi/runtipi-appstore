# Checklist
## Dynamic compose for tailscale
This is a tailscale update for using dynamic compose.
##### Reaching the app :
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Volumes mapping :
- [ ] ${APP_DATA_DIR}/data/state:/var/lib/tailscale
- [ ] ${APP_DATA_DIR}/data/config:/config
- [ ] /dev/net/tun:/dev/net/tun
##### Specific instructions :
- [ ] 🌳 Environment
- [ ] 🔓 Capacity add

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "tailscale",
      "image": "tailscale/tailscale:v1.78.3",
      "isMain": true,
      "environment": {
        "TS_SERVE_CONFIG": "${TAILSCALE_SERVE_CONFIG}",
        "TS_ACCEPT_DNS": "${TAILSCALE_ACCEPT_DNS-false}",
        "TS_AUTH_ONCE": "${TAILSCALE_AUTH_ONCE-false}",
        "TS_AUTHKEY": "${TAILSCALE_AUTHKEY}",
        "TS_HOSTNAME": "${TAILSCALE_HOSTNAME-runtipi}",
        "TS_ROUTES": "${TAILSCALE_ROUTES}",
        "TS_EXTRA_ARGS": "${TAILSCALE_EXTRA_ARGS}",
        "TS_USERSPACE": "${TAILSCALE_USERSPACE-true}",
        "TS_STATE_DIR": "/var/lib/tailscale"
      },
      "volumes": [
        {
          "hostPath": "${APP_DATA_DIR}/data/state",
          "containerPath": "/var/lib/tailscale"
        },
        {
          "hostPath": "${APP_DATA_DIR}/data/config",
          "containerPath": "/config"
        },
        {
          "hostPath": "/dev/net/tun",
          "containerPath": "/dev/net/tun"
        }
      ],
      "capAdd": [
        "net_admin",
        "sys_module"
      ]
    }
  ]
} 
```
# Original YAML
```yaml
services:
  tailscale:
    container_name: tailscale
    image: tailscale/tailscale:v1.78.3
    environment:
    - TS_SERVE_CONFIG=${TAILSCALE_SERVE_CONFIG}
    - TS_ACCEPT_DNS=${TAILSCALE_ACCEPT_DNS-false}
    - TS_AUTH_ONCE=${TAILSCALE_AUTH_ONCE-false}
    - TS_AUTHKEY=${TAILSCALE_AUTHKEY}
    - TS_HOSTNAME=${TAILSCALE_HOSTNAME-runtipi}
    - TS_ROUTES=${TAILSCALE_ROUTES}
    - TS_EXTRA_ARGS=${TAILSCALE_EXTRA_ARGS}
    - TS_USERSPACE=${TAILSCALE_USERSPACE-true}
    - TS_STATE_DIR=/var/lib/tailscale
    cap_add:
    - net_admin
    - sys_module
    restart: unless-stopped
    volumes:
    - ${APP_DATA_DIR}/data/state:/var/lib/tailscale
    - ${APP_DATA_DIR}/data/config:/config
    - /dev/net/tun:/dev/net/tun
    labels:
      runtipi.managed: true
 
```
