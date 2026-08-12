---
sidebar_position: 3
description: ""
---

# DOCKER

## شروع به کار

### نصب

Net Ninja
یه
[آموزش](https://www.youtube.com/watch?v=8Ev1aXl7TGY&list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&index=2&pp=iAQB)
خوب داره برای نصب Docker.

## Images

### ساخت Image

```shell title="Template"
docker build $(DOCKERFILE_PATH) [-t $(IMAGE_NAME)[:$(VERSION)]]
```

```shell title="Example"
docker build . -t my-image:0.0.1
```

| Variable        | Description                                        | Example  | Explanation       |
| --------------- | -------------------------------------------------- | -------- | ----------------- |
| DOCKERFILE_PATH | The path of the directory that contains Dockerfile | .        | Current directory |
| IMAGE_NAME      | The name of the image                              | my-image |                   |
| VERSION         | The version of the image                           | 0.0.1    |                   |

### نمایش تمام Imageها

```shell
docker images
```

### حذف Image

```shell
docker images rm $(IMAGE_NAME)
```

:::tip

اگه میخواید یه Image رو حذف کنید که توسط یه Container استفاده میشه،
می‌تونید از `-f` استفاده کنید.

:::

## Containers

### ساخت Container

```shell title="Template"
docker run $(IMAGE_NAME) --name $(CONTAINER_NAME) -p $(PUBLISH_PORT):$(CONTAINER_PORT)
```

```shell title="Example"
docker run my-image --name my-container -p 5000:4200
```

| Variable       | Description                                | Example      | Explanation                                                     |
| -------------- | ------------------------------------------ | ------------ | --------------------------------------------------------------- |
| CONTAINER_NAME | The name of the Container                  | my-container |                                                                 |
| PUBLISH_PORT   | The port which end user will use           | 5000         | End user can visit website by going to https://example.com:5000 |
| CONTAINER_PORT | The port which is exposed by the container | 4200         |                                                                 |

:::info

این دستور، اول Container رو می‌سازه و بعد اجراش می‌کنه.

:::

:::tip

اگه از
`-d`
استفاده کنید، می‌تونید بعد از اجرای برنامه، Container رو Detach کنید.

:::

### اجرای Container

```shell title="Template"
docker start $(CONTAINER_NAME)
```

```shell title="Example"
docker start my-container
```

### متوقف‌کردن Container

```shell title="Template"
docker stop $(CONTAINER_NAME)
```

```shell title="Example"
docker stop my-container
```

### نمایش Containerهای در حال اجرا

```shell
docker ps
```

### نمایش تمام Containerها

```shell
docker ps -a
```

### حذف Container

```shell
docker container rm $(CONTAINER_NAME)
```

## Compose

### Up

```shell
docker compose up
```

### Up و Rebuild

```shell
docker compose up --build
```

### Down

```shell
docker compose down
```

## Prune

```shell
docker system prune -a
```

این دستور موارد زیر رو حذف می‌کنه:

- تمام Containerهای متوقف‌شده
- تمام Networkهایی که توسط هیچ Containerـی استفاده نمیشن
- تمام Imageهایی که هیچ Containerـی ندارن
- Build Cache
