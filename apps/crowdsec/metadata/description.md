# Crowdsec

CrowdSec - the open-source and participative security solution offering crowdsourced protection against malicious IPs and access to the most advanced real-world CTI

CrowdSec is a free, modern & collaborative behavior detection engine, coupled with a global IP reputation network. It stacks on fail2ban's philosophy but is IPV6 compatible and 60x faster (Go vs Python), it uses Grok patterns to parse logs and YAML scenarios to identify behaviors. CrowdSec is engineered for modern Cloud / Containers / VM-based infrastructures (by decoupling detection and remediation). Once detected you can remedy threats with various bouncers (firewall block, nginx http 403, Captchas, etc.) while the aggressive IP can be sent to CrowdSec for curation before being shared among all users to further improve everyone's security. See FAQ or read below for more.

## App Links

<https://www.crowdsec.net/>

<https://github.com/crowdsecurity/crowdsec>

<https://hub.docker.com/r/crowdsecurity/crowdsec>

## Bouncer API Key

The app stack contains the crowdsec service and a bouncer. The bouncer needs an API Key to connect to the service.
Since the API Key needs to be generated after the initial start, you must provide a temporary dummy Bouncer API Key for the stack to run.

After you started the app, head to a console and use `docker compose exec -t crowdsec cscli bouncers add crowdsec-bouncer-traefik` to get the Bouncer API Key. Use this Key in the settings of the app instead of dummy Bouncer API Key and restart the app.

## Traefik Integration

add the following files and / or settings:

- tipi-compose.yml

  ```yml
  services:
    runtipi-reverse-proxy:
      volumes:
        - /var/log/traefik/:/var/log/
  ```

- traefik.yml

  ```yml
  entryPoints:
    websecure:
      http:
        middlewares:
          - crowdsec-bouncer@file
  ```

- dynamic.yml

  ```yml
  http:
    middlewares:
      crowdsec-bouncer:
        forwardauth:
          address: http://crowdsec-bouncer-traefik:8080/api/v1/forwardAuth
          trustForwardHeader: true
  ```

restart runtipi to apply the settings.