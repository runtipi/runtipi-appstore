#!/bin/sh
#    Copyright 2022 Shantanoo "Shan" Desai <shantanoo.desai@gmail.com>
#    Licensed under the Apache License, Version 2.0 (the "License");
#    you may not use this file except in compliance with the License.
#    You may obtain a copy of the License at
#
#        http://www.apache.org/licenses/LICENSE-2.0
#
#    Unless required by applicable law or agreed to in writing, software
#    distributed under the License is distributed on an "AS IS" BASIS,
#    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#    See the License for the specific language governing permissions and
#    limitations under the License.

# Setup Script to be executed in a Docker Init Container

# Set Default Admin Credentials for Dynamic Security Plugin Configuration
DEFAULT_DYNSEC_ADMIN=admin
DEFAULT_DYNSEC_PASSWORD=securePassword
DYNSEC_FILE_PATH=/mosquitto/config/dynamic-security.json

# Set values if provided via Environment Variables in the Docker Init Container
MQTT_DYNSEC_ADMIN_USER=${MQTT_DYNSEC_ADMIN_USER:-DEFAULT_DYNSEC_ADMIN}
MQTT_DYNSEC_ADMIN_PASSWORD=${MQTT_DYNSEC_ADMIN_PASSWORD:-DEFAULT_DYNSEC_PASSWORD}

# echo "Admin/Pass: ${MQTT_DYNSEC_ADMIN_USER}/${MQTT_DYNSEC_ADMIN_PASSWORD}" ## DEBUG

# Set the Admin Credentials for RBAC control via Dyamic Security Plugin
mosquitto_ctrl dynsec init ${DYNSEC_FILE_PATH} ${MQTT_DYNSEC_ADMIN_USER} ${MQTT_DYNSEC_ADMIN_PASSWORD}

chmod 700 ${DYNSEC_FILE_PATH}
chown 1883:1883 ${DYNSEC_FILE_PATH}

exec "$@"
