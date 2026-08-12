---
sidebar_position: 2
description: ""
---

# GitHub

## npm Command Was Not Found

اگه از nvm استفاده می‌کنید و یه Self-hosted Runner دارید و میگه که نمی‌تونه npm رو پیدا کنه،
احتمالاً به خاطره اینه که
`nvm`،
Node Environment رو تو مسیر `/usr/local/bin/` نصب نکرده،
پس Runner نمی‌تونه پیدا‌ش کنه.

برای حل این مشکل، یه Soft Link برای هر دستور بسازید:

```shell
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/node" "/usr/local/bin/node"
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npm" "/usr/local/bin/npm"
sudo ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/pm2" "/usr/local/bin/pm2"
```

## Job با موفقیت اجرا میشه اما pm2 پروژه رو اجرا نمی‌کنه

نمی‌دونم چرا، اما انگار GitHub Runner گاهی درست نصب نمی‌شه و باعث میشه Environment Variables پیدا نشه.
تو این حالت، `HOME` موجود نیست، پس pm2 یه Daemon جدید با متغیرهای غلط اجرا میکنه.

برای بررسی متغیرهایی که Runner استفاده می‌کنه از این دستور استفاده کنید:

```shell
strings /proc/$(pgrep -f Runner.Listener)/environ
```

اگه `HOME` رو تو نتیجه نبینید، پس مشکل رو پیدا کردید.

برای حل این موضوع، اول Runner رو Uninstall کنید و بعد دوباره نصبش کنید و دقیق بگید از کدوم User استفاده کنه:

```shell
./svc.sh uninstall
./svc.sh install root
./svc.sh start
```
