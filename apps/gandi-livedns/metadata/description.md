## gandi-livedns

The purpose of this container is to update DNS zone records using Gandi's LiveDNS (http://doc.livedns.gandi.net/) with your WAN IP.

This image is extremely lightweight  (Alpine Linux based) and has very few dependencies. The actual DNS update program is coded in shell script only.

***Warning : update scripts have been updated to use Gandi's Personal Access Tokens (PATs).***

You need to create a new Personal Access Token for this application, with at least the "Manage domain name technical configurations" premissions.
See https://api.gandi.net/docs/authentication/

### Configuration
Mandatory variables:
* GANDI_PAT: your Gandi Personal Acces Token (be sure to enable "Manage domain name technical configurations")
* APIKEY: *deprecated* provided for backward compatibility. Value will be used as GANDI_PAT if provided
* DOMAIN: your Gandi domain
* RECORD_LIST: DNS records to update separated by ";"

Optional variables :
* REFRESH_INTERVAL: Delay between updates in seconds (default: 10mn)
* TTL: Set Time To Live for records (default: 300)
* SET_IPV4: Update A record (default: yes)
* SET_IPV6: Update AAAA record (default: no)
* FORCE_IPV4: Force the IPv4 address to be used in DNS A records
* FORCE_IPV6: Force the IPv6 address to be used in DNS AAAA records

### Examples
The easiest way to run gandi-livedns is simply to *docker run* it from a computer in your network, leaving it running in the background with all the default settings.
```sh
docker run -d \
	-e "GANDI_PAT=<YOUR_VERY_SECRET_PERSONAL_ACCESS_TOKEN>" \
	-e "RECORD_LIST=blog;www;@" \
	-e "DOMAIN=your-gandi-hosted-domain.com" \
	jbbodart/gandi-livedns
```
This will update **blog.your-gandi-hosted-domain.com**, **www.your-gandi-hosted-domain.com**, and **your-gandi-hosted-domain.com** with your internet-facing IP (IPv4) every 10 minutes

An equivalent setup using docker-compose could look like this:  
**docker-compose.yml**
```yml
version: '3.7'
...
    services:
    ...
        dyndns:
            image: jbbodart/gandi-livedns
            restart: unless-stopped
            env_file:
                - "dyndns.env"
```

**dyndns.env**
```properties
GANDI_PAT=<YOUR_VERY_SECRET_PERSONAL_ACCESS_TOKEN>
RECORD_LIST=blog;www;@
DOMAIN=your-gandi-hosted-domain.com
```
