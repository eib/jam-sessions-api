IMAGE_NAME=jam-sessions-api
AWS_ACCOUNT_ID=072045398012
DOCKER_REMOTE=$(AWS_ACCOUNT_ID).dkr.ecr.us-east-1.amazonaws.com
PORT=5355

default: build

# Node
serve:
	node .

# Docker
build:
	docker build -t $(IMAGE_NAME) .
run:
	docker run -p $(PORT):$(PORT) -e PORT=$(PORT) $(IMAGE_NAME)

# AWS
push:
	`aws ecr get-login --no-include-email --region us-east-1`
	docker tag $(IMAGE_NAME):latest $(DOCKER_REMOTE)/$(IMAGE_NAME):latest
	docker push $(DOCKER_REMOTE)/$(IMAGE_NAME):latest

.PHONY: default build push serve run
