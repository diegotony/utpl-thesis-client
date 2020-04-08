# utpl-thesis-client
## Dockerfile
Especificaciones para levantar el Servicio:
```
# Asignar estas varibales de entorno en Dockerfile
MONGO_HOST=url_mongo_db
REDIS_HOST=url_redis
PORT=port
```
## Docker-Compose 
Puedes levantar el servicio localmente con el siguiente comando
```
docker-compose up
```
Ir a [LocalHost](http://0.0.0.0:3011/swagger/client) para ver la Documentacion del Servicio
