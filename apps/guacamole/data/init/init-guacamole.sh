#!/bin/bash
set -eou pipefail

psql --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <config/sql/001-create-schema.sql
psql --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <config/sql/002-create-admin-user.sql