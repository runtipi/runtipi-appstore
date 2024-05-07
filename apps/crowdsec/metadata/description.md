# CrowdSec

CrowdSec - the open-source and participative security solution offering crowdsourced protection against malicious IPs and access to the most advanced real-world CTI

CrowdSec is a free, modern & collaborative behavior detection engine, coupled with a global IP reputation network. It stacks on fail2ban's philosophy but is IPV6 compatible and 60x faster (Go vs Python), it uses Grok patterns to parse logs and YAML scenarios to identify behaviors. CrowdSec is engineered for modern Cloud / Containers / VM-based infrastructures (by decoupling detection and remediation). Once detected you can remedy threats with various bouncers (firewall block, nginx http 403, Captchas, etc.) while the aggressive IP can be sent to CrowdSec for curation before being shared among all users to further improve everyone's security. See FAQ or read below for more.

## App Links

<https://www.crowdsec.net/>

<https://github.com/crowdsecurity/crowdsec>

<https://hub.docker.com/r/crowdsecurity/crowdsec>

## Bouncer API Key

The app stack contains the crowdsec service and a bouncer. The bouncer needs an API Key to connect to the service.
Since the API Key needs to be generated after the initial start, you must provide a temporary dummy Bouncer API Key for the stack to run.

After you started the app, head to a console and use 

```bash
docker exec -t crowdsec cscli bouncers add crowdsec-bouncer-traefik
```

```bash
# docker exec -t crowdsec cscli bouncers add crowdsec-bouncer-traefik
API key for 'crowdsec-bouncer-traefik':

   djC0YxRO3xzKG1mctemSzaUfs2yj4vG7cQ7fliTOJR0

Please keep this key since you will not be able to retrieve it!
```

To get the Bouncer API Key, use this Key in the settings of the app instead of the dummy Bouncer API Key and restart the app.

## Check Metrics

```bash
docker exec crowdsec cscli metrics
```

## Integrate in crowdsec Console

https://app.crowdsec.net/security-engines

With the key from the command line in the section `Enroll your CrowdSec Security Engine`execute:

```bash
docker exec crowdsec cscli console enroll {{ KEY }}
```

## Dashboard

The dashboard comes with a preconfigured user:

Email address: crowdsec@crowdsec.net

Password: !!Cr0wdS3c_M3t4b4s3??


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
  log:
    filePath: "/var/log/traefik.log"
    level: INFO

  accessLog:
    filePath: "/var/log/access.log"
    bufferingSize: 100
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
