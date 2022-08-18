/bin/ash .github/docker/entrypoint.sh
php artisan p:user:make --email=$PTERODACTYL_EMAIL --username=$PTERODACTYL_USERNAME --password=$PTERODACTYL_PASSWORD --name-first=admin --name-last=admin --admin=1 && supervisord -n -c /etc/supervisord.conf
supervisord -n -c /etc/supervisord.conf
