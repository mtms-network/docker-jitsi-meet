git pull
docker compose down
docker compose -f docker-compose.yml -f jigasi.yml -f jibri.yml -f etherpad.yml up -d
