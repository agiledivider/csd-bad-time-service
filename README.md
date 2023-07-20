# csd-bad-time-service

## build locally
1. ```docker build --platform linux/amd64 . -t csd-bad-time-service && docker tag csd-bad-time-service devisive/csd-bad-time-service:latest && docker push devisive/csd-bad-time-service```

## deployment on server

1. ```docker pull devisive/csd-bad-time-service```
1. ```docker run -d --rm -e "VIRTUAL_HOST=csd-timeservice.idiot.games" -e "LETSENCRYPT_HOST=csd-timeservice.idiot.games" --name csd-timeservice devisive/csd-bad-time-service```