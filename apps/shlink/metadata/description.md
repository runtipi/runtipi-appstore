# Shlink

Shlink is a fast self-hosted URL shortener that offers a RESTful API and a command line interface. Your shortened links are also safely manageable through [app.shlink.io](https://app.shlink.io) which is 100% browser based. Notable features include custom slugs, click tracking, and tag management. 

Please note that the following advanced features are not activated through this Tipi App:
* Multi-domain support
* Geo-Localisation
* RabbitMQ/Mercure real-time updates

During the installation process, you will be prompted to specify the domain for your shortened URLs.

## ℹ️ Required post installation step
After installing Shlink in Tipi, you will have to generate a API Key before being able to use the service through the following command. 
```bash
docker exec -it shlink shlink api-key:generate
```

Keep your API Key secure, as it is essential for link administration. If you lose the key, rerun the command to generate a new one.

If you don't have access to the console of your Tipi server, consider using Portainer which is available on Tipi. Within Portainer, you would have to:
* Select the local environment
* Select the shlink container - not the shlink-db -
* Click on Console within the "Container Status" panel
* Execute a /bin/sh command
* Within the newly opened terminal, enter `shlink api-key:generate`
