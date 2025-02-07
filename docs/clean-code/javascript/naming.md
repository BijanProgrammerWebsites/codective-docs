---
description: ""
---

# نام‌گذاری

## کلمات رزروشده

در JavaScrip، مثل هر زبان دیگه، یه سری کلمات رزروشده هستن و معنای خاصی دارن.
به عنوان مثال کلمه‌ی function برای ساخت تابع استفاده میشه.

بهتره از این کلمات برای نام‌گذاری استفاده نکنیم تا از بروز اشتباه یا کج‌فهمی جلوگیری کنیم.

چند مدل نام‌گذاری اشتباه و اصلاحشون رو می‌تونید اینجا ببینید:

```javascript
// diff-remove-start
function deleteUser(id) {
  // ...
}
// diff-remove-end

// diff-add-start
function removeUser(id) {
  // ...
}
// diff-add-end
```

```javascript
// diff-remove-start
const newUser = {};
// diff-remove-end

// diff-add-start
const user = {};
// diff-add-end
```
