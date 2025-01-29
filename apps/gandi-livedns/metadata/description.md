# Checklist
## Dynamic compose for gandi-livedns
This is a gandi-livedns update for using dynamic compose.
##### Reaching the app :
##### In app tests :
- [ ] 📝 Register and log in
- [ ] 🖱 Basic interaction
- [ ] 🌆 Uploading data
- [ ] 🔄 Check data after restart
##### Specific instructions :
- [ ] 🌳 Environment

# New JSON
```json
{
  "$schema": "../dynamic-compose-schema.json",
  "services": [
    {
      "name": "gandi-livedns",
      "image": "jbbodart/gandi-livedns:latest",
      "isMain": true,
      "environment": {
        "GANDI_PAT": "${GANDI_LIVEDNS_PAT}",
        "RECORD_LIST": "${GANDI_LIVEDNS_RECORD_LIST}",
        "DOMAIN": "${GANDI_LIVEDNS_DOMAIN}",
        "REFRESH_INTERVAL": "${GANDI_LIVEDNS_REFRESH_INTERVAL}",
        "TTL": "${GANDI_LIVEDNS_TTL}",
        "SET_IPV4": "${GANDI_LIVEDNS_SET_IPV4}",
        "SET_IPV6": "${GANDI_LIVEDNS_SET_IPV6}",
        "FORCE_IPV4": "${GANDI_LIVEDNS_FORCE_IPV4}",
        "FORCE_IPV6": "${GANDI_LIVEDNS_FORCE_IPV6}"
      }
    }
  ]
} 
```
# Original YAML
```yaml
version: '3.7'
services:
  gandi-livedns:
    image: jbbodart/gandi-livedns:latest
    container_name: gandi-livedns
    restart: unless-stopped
    environment:
      GANDI_PAT: ${GANDI_LIVEDNS_PAT}
      RECORD_LIST: ${GANDI_LIVEDNS_RECORD_LIST}
      DOMAIN: ${GANDI_LIVEDNS_DOMAIN}
      REFRESH_INTERVAL: ${GANDI_LIVEDNS_REFRESH_INTERVAL}
      TTL: ${GANDI_LIVEDNS_TTL}
      SET_IPV4: ${GANDI_LIVEDNS_SET_IPV4}
      SET_IPV6: ${GANDI_LIVEDNS_SET_IPV6}
      FORCE_IPV4: ${GANDI_LIVEDNS_FORCE_IPV4}
      FORCE_IPV6: ${GANDI_LIVEDNS_FORCE_IPV6}
    networks:
    - tipi_main_network
    labels:
      runtipi.managed: true
 
```
