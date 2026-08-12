---
description: ""
---

# Grid

## نام‌گذاری خطوط گرید

می‌تونید خطوط گرید رو نام‌گذاری کنید:

```css
.chiz {
  grid-template-columns: [fullbleed-start] auto [main-start] min(90%, 60ch) [main-end] auto [fullbleed-end];
}
```

و به این شکل ازشون استفاده کنید:

```css
.alternative {
  grid-column: fullbleed;
}

.content {
  grid-column: main;
}
```

## نادیده گرفتن ارتفاع فرزند

بعضی وقتا پیش میاد که می‌خوایم ارتفاع یکی از المنت‌ها بر اساس المنت‌های کناریش مشخص بشه و تاثیری تو ارتفاع پدرش نداشته باشه:

```html
<div class="parent">
  <div class="consider">...</div>
  <div class="ignore">...</div>
</div>
```

```css
.parent {
  display: grid;
}

.ignore {
  min-height: 100%;
  height: 0;
}
```
