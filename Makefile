init: docker-down docker-pull docker-build npm-install docker-up ready
up: docker-down docker-up
down: docker-down
restart: docker-down docker-up

.DEFAULT_GOAL := n

docker-pull:
	docker-compose pull

docker-build:
	docker-compose build

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

npm-install:
	docker-compose run --rm node npm install

ready:
	docker run --rm -v ${PWD}/app:/app --workdir=/app alpine touch .ready

n:
	docker-compose run --rm node $(cmd)