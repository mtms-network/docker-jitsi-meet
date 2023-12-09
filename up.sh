git pull
docker compose down
cp ~/env.mtms ~/.env
docker compose -f docker-compose.yml -f jigasi.yml -f jibri.yml -f etherpad.yml up -d
