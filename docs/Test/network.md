---
description: ""
---

# Network

## Local SSL

همون‌طور که احتمالاً می‌دونید، می‌تونید localhost رو روی شبکه خصوصی‌تون در دسترس قرار بدید تا بتونید اپلیکیشن‌تون رو روی دستگاه‌های مختلفی که به همون شبکه وصلن، تست کنید.
اما برای تست بعضی قابلیت‌ها، مثل دسترسی به وب‌کم، لازمه localhost شما SSL داشته باشه و از `https` استفاده کنه.
برای این کار هم می‌تونید خیلی راحت از `devcert` استفاده کنید.

1. به صورت Global نصبش کنید
   ```shell
   npm i -g devcert
   ```
2. برنامه Git Bash رو باز کنید (چون می‌تونه دستورات `openssl` رو اجرا کنه)
3. یه پوشه بسازید برای اینکه Certificateها رو داخلش بذاریم
   ```shell
   cd ~
   mkdir certs
   cd certs
   ```
4. Certificateها
   رو برای localhost ایجاد کنید
   ```shell
   devcert generate localhost
   ```
5. براش رمز انتخاب کنید

دو تا فایل ایجاد میشه که می‌تونید به عنوان `CRT` و `Key` ازش استفاده کنید.

### پروژه React

این مقادیر رو داخل فایل `.env` قرار بدید:

```dotenv
HTTPS=true
SSL_CRT_FILE=C:/Users/Bijan/certs/localhost.cert
SSL_KEY_FILE=C:/Users/Bijan/certs/localhost.key
```

تو فایل `package.json`، پارامتر `host` رو به اسکریپتِ `start` اضافه کنید:

```json
{
  "scripts": {
    "start": "react-scripts start --host 0.0.0.0"
  }
}
```

:::info

همچنین لازمه فایروال شبکه خصوصی رو از بخش `Windows Security` غیرفعال کنید.

:::
