---
description: ""
---

# Tips

## استفاده از آکلاد برای بدنه‌های تک‌خطی

بعضی نکات هستن که رعایت نکردنشون خیلی مشکلات خاصی ایجاد نمیکنه
اما رعایت کردنشون باعث میشه از دردسرهای آینده جلوگیری کنیم.

به عنوان مثال تو JavaScript می‌تونیم شرط‌هامون رو به یکی از دو روش زیر بنویسیم:

```javascript
if (!username?.trim()) console.log("Username is required.");
```

```javascript
if (!username?.trim()) {
  console.log("Username is required.");
}
```

هر دو حالت به درستی کار میکنه و باگ نمیخوره.  
اما مشکل جایی خودش رو نشون میده که در آینده بخوایم کد رو تغییر بدیم
و به جای اینکه `if` فقط شامل یک Statement باشه، شامل دو تا بشه.

تو کد اول مجبوریم آکلادها رو اضافه کنیم تا بتونیم دو تا Statement تو بدنه‌ی if بنویسیم.  
به همین خاطر زمانی که تو PR تغییرات رو می‌بینیم، به نظر میرسه 4 خط تغییر کرده، در صورتی که ما فقط یک خط کد اضافه کردیم:

```javascript
// diff-remove-start
if (!username?.trim()) console.log("Username is required.");
// diff-remove-end
// diff-add-start
if (!username?.trim()) {
  console.log("Username is required.");
  return false;
}
// diff-add-end
```

اما تو کد دوم این مشکل پیش نمیاد و فقط خطی که اضافه شده نمایش داده میشه:

```javascript
if (!username?.trim()) {
  console.log("Username is required.");
  // diff-add-start
  return false;
  // diff-add-end
}
```

همونطور که قبلاً گفته شد، این مشکل باگی در برنامه ایجاد نمی‌کنه اما رعایت کردن این نکته می‌تونه Developer Experience یا DX رو بهبود ببخشه:

:::tip

بهتره تمام بدنه‌ها رو داخل آکلاد بذاریم، حتی اگه فقط یک Statement داشته باشیم و نیازی به آکلاد نباشه.

این نکته در خصوص `if`، `for`، `while` و موارد مشابه صدق میکنه.

:::

## استفاده از کاما برای خط آخر Array یا Object

مشابه چیزی که تو قسمت قبل گفته شد، ما می‌تونیم در خط آخر Array یا Object از کاما استفاده کنیم.  
به این شکل موقع PR، فقط بخشی از کد که تغییر کرده نمایش داده میشه.

فرض کنید کد اولیه به این شکل نوشته شده:

<!-- prettier-ignore-start -->
```javascript
const user = {
  username: "BijanProgrammer",
  password: "1234"
};
```
<!-- prettier-ignore-end -->

```javascript
const user = {
  username: "BijanProgrammer",
  password: "1234",
};
```

بعد از اضافه‌شدن خط جدید، به این شکل تو PR نمایش داده میشه:

<!-- prettier-ignore-start -->
```javascript
const user = {
  username: "BijanProgrammer",
  // diff-remove-start
  password: "1234"
  // diff-remove-end
  // diff-add-start
  password: "1234",
  role: "admin"
  // diff-add-end
};
```
<!-- prettier-ignore-end -->

```javascript
const user = {
  username: "BijanProgrammer",
  password: "1234",
  // diff-add-start
  role: "admin",
  // diff-add-end
};
```

:::tip

بهتره برای خط آخر Array و Object از کاما استفاده کنیم.

:::
