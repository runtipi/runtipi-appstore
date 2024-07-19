#!/bin/bash

# Make runtipi directory

mkdir -p runtipi/

# Download the cli

cd runtipi/

wget https://github.com/runtipi/runtipi/releases/latest/download/runtipi-cli-linux-x86_64.tar.gz

# Extract cli

tar -xvf runtipi-cli-linux-x86_64.tar.gz

# Rename cli

mv runtipi-cli-linux-x86_64 runtipi-cli

# Delete archive

rm -rf runtipi-cli-linux-x86_64.tar.gz

# Make cli executable

chmod +x runtipi-cli

# Start runtipi

./runtipi-cli start