git pull
docker compose down --remove-orphans
cp ./env.mtms ./.env
docker compose -f docker-compose.yml -f jigasi.yml -f jibri.yml -f etherpad.yml up -d
docker cp ./mtms/config.js docker-jitsi-meet-web-1:/config/config.js
