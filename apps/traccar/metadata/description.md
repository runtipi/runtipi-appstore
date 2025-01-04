# Traccar

Open-source GPS tracking platform designed for ease of use and extensibility. Perfect for hosting on a Raspberry Pi or a local server. Traccar supports a variety of GPS tracking devices and provides a web interface to monitor them in real-time.

Check out [traccar.org](https://www.traccar.org/) for a [demo](https://demo.traccar.org/), installation [instructions](https://www.traccar.org/download/), and [documentation](https://www.traccar.org/documentation/).

## Custom Configuration

To configure Traccar with custom settings, follow these steps:

1. **Prepare the Directory**
   Navigate to the directory where Traccar is installed, for example:

   ```bash
   cd runtipi/app-data/traccar
   ```

2. **Copy the Docker Compose File**
   Copy a custom `docker-compose.yml` file into the `user-config` directory.

3. **Modify Ports for GPS Devices**
   To add additional ports for GPS devices, edit the `docker-compose.yml` file. Below is an example of how to configure it:

   ```yaml
   services:
     traccar:
       image: traccar/traccar:6.5-ubuntu
       container_name: traccar
       restart: unless-stopped
       ports:
         - ${APP_PORT}:8082
         - 5027:5027 # Default port configuration
         - 5055:5055 # Example of adding a new GPS port
         - 5000:5000 # Example of another custom port
   ```

For more details, refer to the official [Traccar Documentation](https://www.traccar.org/documentation/).
