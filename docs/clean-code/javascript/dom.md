---
description: ""
---

# DOM

## Data Attributes

با استفاده از `dataset` میشه به Data Attribute دسترسی پیدا کرد:

```javascript
element.dataset.state = "collapsed";
```

## دسترسی مستقیم به المنت با استفاده از ID

می‌تونید المنتی که ID داره رو مستقیم از `globalThis` فراخوانی کنید.
نیاز نیست از `getElementById` استفاده کنید:

```html
<div id="box">This is a Box</div>
```

```javascript
box.style.backgroundColor = "green";
```
