#!/bin/bash
# This script copies the version from docker-compose.yml to config.json.

# find all docker-compose files
docker_compose_files=$(find apps -name docker-compose.yml)

for docker_compose_file in $docker_compose_files
do
	# Assuming that the app version will be from the first docker image
	first_service=$(yq '.services | keys | .[0]' $docker_compose_file)

	image=$(yq .services.$first_service.image $docker_compose_file)

	# Only apply changes if the format is <image>:<version>
	if [[ "$image" == *":"* ]]; then
	  version=$(cut -d ":" -f2- <<< "$image")

	  # Trim the "v" prefix
	  trimmed_version=${version/#"v"}

	  # Find config file
	  config_file=${docker_compose_file/docker-compose.yml/config.json}

	  # Update the version in config.json
	  contents="$(jq --arg trimmed_version "$trimmed_version" '.version=$trimmed_version' $config_file)" &&
	  echo "${contents}" > $config_file
	fi
done