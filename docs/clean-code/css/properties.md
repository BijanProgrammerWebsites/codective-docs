---
description: ""
---

# Properties

## Shorthands - بخش 1

تو CSS می‌تونیم به جای این که چند تا Property رو تو چند خط بنویسیم، از Shorthandـش استفاده کنیم:

```css title="Longhand"
.chiz {
  border-width: 1px;
  border-style: solid;
  border-color: hsl(0deg 0% 0%);
}
```

```css title="Shorthand"
.chiz {
  border: 1px solid hsl(0deg 0% 0%);
}
```

منتهی باید دقت کنیم که Shorthand لزوماً مقداری که روبروش نوشتیم رو تغییر نمی‌ده؛
بلکه ممکنه به طور ناخواسته، مقادیر دیگه‌ای رو هم تغییر بده.

به‌عنوان مثال این کد رو در نظر بگیرید:

```css title="Shorthand"
.chiz {
  background: hsl(0deg 0% 0%);
}
```

این کد در واقع داره تمام مقادیر زیر رو تغییر میده:

```css title="Longhand"
.chiz {
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: hsl(0deg 0% 0%);
}
```

یعنی ما می‌خواستیم فقط یه Property رو تغییر بدیم اما در اصل داریم 9 تا رو تعییر می‌دیم.
این موضوع زمانی مشکل‌ساز میشه که مقدار یکی از این Propertyها جای دیگه تنظیم شده باشه.

مثلاً فرض کنید `background-image` قبلاً تنظیم شده و می‌خوایم جاهایی که Transparent هست، رنگ مشکی نمایش داده بشه.
اگه این کد رو بنویسیم، باعث میشه `background-image` کلاً در نظر گرفته نشه و تمام پس‌زمینه مشکی شه:

```css title="❌ Wrong Code"
.chiz {
  background: hsl(0deg 0% 0%);
}
```

اما اگه از این کد استفاده کنیم، فقط `background-color` عوض میشه و `background-image` سر جای خودش باقی می‌مونه:

```css title="✅ Correct Code"
.chiz {
  background-color: hsl(0deg 0% 0%);
}
```

به طور کلی بهتره واسه Propertyهای زیر، از Shorthand استفاده نکنید:

- `background`
- `font`
- `flex`

## Shorthands - بخش 2

فرض کنید بخوایم Marginـِ بالا و پایین یه المان رو عوض کنیم.
می‌تونیم این کد رو بنویسیم:

```css
.chiz {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
```

اما خیلی وقت‌ها دانشجوها به خاطر تنبلی یا جلوگیری از کد تکراری، این کد رو می‌نویسن:

```css title="❌ Wrong Code"
.chiz {
  margin: 1rem 0;
}
```

این کد زمانی مشکل ایجاد می‌کنه، که مقادیر `margin-left` یا `margin-right` قبلاً تنظیم شده باشه.

به‌عنوان مثال کد زیر رو در نظر بگیرید:

```css title="❌ Wrong Code"
body {
  > * {
    margin-left: auto;
    margin-right: auto;
  }
}

body main {
  margin: 1rem 0;
}
```

ما اینجا قصد داشتیم Marginـِ بالا و پایین رو تغییر بدیم، اما در اصل Marginـِ چپ و راست رو هم تغییر دادیم
و باعث شدیم دیگه مقدار auto نداشته باشن.

تو اینجور مواقع بهتره Propertyهایی که مد نظرتون هست رو عیناً بنویسید و از تغییر ناخواسته‌ی باقی Propertyها جلوگیری کنید.

همچنین می‌تونید و توصیه‌ی اکید میشه که از Logical Properties استفاده کنید:

```css title="✅ Correct Code"
body {
  > * {
    margin-inline: auto;
  }
}

body main {
  margin-block: 1rem;
}
```
