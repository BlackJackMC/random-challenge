# random-challenge


## Setting up

```bash
docker-compose up --build
```


## Cleaning up

```bash
docker-compose down
docker-compose down -v
docker image prune -f
docker image prune -a -f
docker network prune -f
docker volume prune -f
docker system prune -a -f --volumes
```