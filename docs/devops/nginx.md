---
sidebar_position: 1
description: ""
---

# NGINX

## نصب NGINX روی Ubuntu

[این آموزش](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04)
رو دنبال کنید.

## ثبت دامنه‌ی جدید

1. به
   [nic.ir](https://nic.ir/)
   یا هر DNS Provider دیگه‌ای برید و یه دامنه‌ی جدید بخرید.
2. به
   [Cloudflare Dashboard](https://dash.cloudflare.com/)
   برید و یه Site جدید بسازید.
3. Nameserverهای
   دامنه رو تو Cloudflare مشخص کنید.  
   معمولاً `kyrie.ns.cloudflare.com` و `laylah.ns.cloudflare.com` هستند.
4. تو بخش Cloudflare DNS یه رکورد `A` بسازید.
5. توی Server یه فایل جدید تو `/etc/nginx/sites-available/` بسازید. اسم فایل باید هم‌نام با دامنه باشه.
6. هر Configـی که لازمه رو تو فایل بالا بذارید.
7. یه Soft Link تو `/etc/nginx/sites-enabled/` بسازید:
   ```shell
   ln -s /etc/nginx/sites-available/DOMAIN /etc/nginx/sites-enabled/DOMAIN
   ```
8. از طریق مرورگر به آدرس دامنه برید و چک کنید که صفحه پیش‌فرض NGINX رو نشون میده.  
    همچنین می‌تونید به
   [nic.ir](https://nic.ir/)
   برید و بررسی کنید که Status از `Reserved` به `Registered` تغییر کرده یا نه.  
   ممکنه زمان‌بر باشه، صبر کنید.
9. برای راه‌اندازی HTTPS، از [این آموزش](#دریافت-certificate-https-رایگان) استفاده کنید.
10. فایل `DOMAIN.ssl.conf` رو تو `/etc/nginx/common-configs/` بسازید.
11. کانفیگ SSL رو تو این فایل بذارید:
    ```shell
    ssl_certificate /etc/letsencrypt/live/DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/DOMAIN/privkey.pem;
    ```
12. NGINX
    رو با این دستور Reload کنید.
    ```shell
    systemctl reload nginx
    ```

## دریافت HTTPS Certificate رایگان

به
[سایت Certbot](https://certbot.eff.org/)
برید و Web Server و System خودتون رو انتخاب کنید.
بعدش Certbot دستورالعمل‌هایی رو برای ساخت Certificate رایگان نشونتون میده.

## فعال‌کردن Gzip

DigitalOcean
یه
[مقاله](https://www.digitalocean.com/community/tutorials/how-to-improve-website-performance-using-gzip-and-nginx-on-ubuntu-20-04)
خیلی خوب داره که این موضوع رو کامل توضیح میده.

## Restart در مقابل Reload

موقع تغییر Config File، دو راه برای اعمال تغییرات وجود داره:

1. `systemctl restart nginx`
2. `systemctl reload nginx`

راه اول کاملاً NGINX Service رو متوقف می‌کنه و بعدش دوباره شروع میکنه.
این باعث میشه کلاینت‌های متصل، قطع بشن.
همچنین اگه فرایند ناموفق باشه، Service متوقف می‌مونه.

از طرف دیگه، راه دوم سعی می‌کنه Config‌های ویرایش‌شده رو بدون متوقف‌کردن Service اعمال کنه، پس کلاینت‌ها قطع نمی‌شن.
اگه فرایند ناموفق باشه، Service به کارش ادامه میده و از Config‌های قدیمی استفاده می‌کنه.

:::caution

اگه `reload` ناموفق باشه، هیچ خطایی تو Terminal نمایش نمی‌ده.  
قبل از Reloadکردنِ سرویس، درستیِ Config رو با دستور `nginx -t` بررسی کنید.

:::

---

## بررسی آخرین خط فایل Log

```shell title="Access Log"
tail -1 /var/log/nginx/access.log
```

```shell title="Error Log"
tail -1 /var/log/nginx/error.log
```

---

## اولویت Location Block

اگه بیش‌تر از یه دونه Location Block وجود داشته باشه که URL رو بتونه هندل کنه،
اولویت انتخاب به این شکله:

1. Exact Match (`location = /some/path`)
2. Preferential Prefix Match (`location ^~ /some/path`)
3. Regex Match (`location ~* /some/.*/path`)
4. Prefix Match (`location /some/path`)
