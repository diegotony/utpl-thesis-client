# IMAGE := diegotony/client-micro:travis
IMAGE := diegotony/client-micro:kubernetes

test:
	true

image:
	docker build -t $(IMAGE) .

push-image:
	docker push $(IMAGE)


.PHONY: image push-image test

