---
description: ""
---

# اعداد فارسی

## مسئله

بعضی وقتا مشاهده میشه که دانشجوها برای نمایش اعداد فارسی از کاراکترهای `۰۱۲۳۴۵۶۷۸۹` استفاده می‌کنن؛
یا حتی بعضاً یه تابع می‌نویسن که کاراکترهای انگلیسی رو به فارسی تبدیل کنه.

## راه‌حل

پیشنهاد می‌کنم به هیچ‌وجه چنین کاری نکنید؛
در عوض از فونتی استفاده کنید که کاراکترهای `0123456789` رو به شکل درست نمایش بده.

به‌عنوان مثال اگه از فونت وزیرمتن استفاده کنید، می‌تونید با این Declaration تمام اعداد رو فارسی نمایش بدید:

```css
html {
  font-family: "Vazirmatn", system-ui;
  /* highlight-next-line */
  font-feature-settings: "ss01";
}
```
