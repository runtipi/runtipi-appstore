#!/bin/bash
# This script copies the version from docker-compose.yml to config.json.

app_name=$1

# find all docker-compose files under apps/$app_name (there should be only one)
docker_compose_files=$(find apps/"$app_name" -name docker-compose.yml)

for docker_compose_file in $docker_compose_files; do
  # Assuming that the app version will be from the first docker image
  first_service=$(yq '.services | keys | .[0]' "$docker_compose_file")

  image=$(yq .services."$first_service".image "$docker_compose_file")

  # Only apply changes if the format is <image>:<version>
  if [[ "$image" == *":"* ]]; then
    version=$(cut -d ":" -f2- <<<"$image")

    # Trim the "v" prefix
    trimmed_version=${version/#"v"/}

    # ------------------- Update config.json -------------------
    config_file=${docker_compose_file/docker-compose.yml/config.json}

    current_config_version=$(jq -r '.version' "$config_file")
    echo "Current config version: $current_config_version"

    if [[ "$current_config_version" != "$trimmed_version" ]]; then
      # Update the version in config.json
      contents="$(jq --arg trimmed_version "$trimmed_version" '.version=$trimmed_version' "$config_file")"
      echo "${contents}" >"$config_file"

      # ------------------- Update docker-compose.json -------------------
      # Update the version in docker-compose.json if it exists
      if [[ -f ${docker_compose_file/docker-compose.yml/docker-compose.json} ]]; then
        compose_file=${docker_compose_file/docker-compose.yml/docker-compose.json}

        echo "Updating $compose_file with version $image"

        main_service_index=$(yq '.services | to_entries[] | select(.value.isMain == true) | .key' "$compose_file")

        # apply trimmed version to docker-compose.json's main service
        contents="$(jq --arg image "$image" --arg main_service_index "$main_service_index" '.services[$main_service_index | tonumber].image=$image' "$compose_file")"
        echo "${contents}" >"$compose_file"
        npx @biomejs/biome check "$compose_file" --write
      fi

      # ------------------- Update config.json -------------------
      tipi_version=$(jq -r '.tipi_version' "$config_file")
      tipi_version=$((tipi_version + 1))

      created_at=$(jq -r '.created_at // 0' "$config_file")
      updated_at=$(date +%s | awk '{print int($1*1000)}')

      contents="$(jq --argjson tipi_version "$tipi_version" --argjson created_at "$created_at" --argjson updated_at "$updated_at" '.tipi_version = $tipi_version | .created_at = $created_at | .updated_at = $updated_at' "$config_file")"
      echo "${contents}" >"$config_file"
      npx @biomejs/biome check "$config_file" --write
    fi
  fi
done
