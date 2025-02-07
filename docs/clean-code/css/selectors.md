---
description: ""
---

# Selectors

## Component Selector

ما تو CSS چیزی به اسم Component Selector نداریم.
به این معنی که شما نمی‌تونید مستقیماً از اسم Componentهاتون تو CSS استفاده کنید.
به جاش باید بهشون Class بدید و از Class Selector استفاده کنید.

```css title="❌ Wrong Code"
Image {
  /* */
}
```

```css title="✅ Correct Code"
.image {
  /* */
}
```

بیشتر بدانیم:

- [CSS - Basic CSS selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)

## Child Combinator

تو CSS دو جور میشه فرزندها رو Select کرد:

1. زمانی که بخوایم تمام فرزندها و نوه‌ها و... رو انتخاب کنیم، بدونِ اینکه برامون مهم باشه فرزند مستقیم هستن یا نه.

```css
.parent .child {
  /* ... */
}
```

2. زمانی که بخوایم فقط فرزندهایی رو انتخاب کنیم که مستقیماً و بلافاصله داخل المان مورد نظر قرار گرفتن.

```css
.parent > .child {
  /* ... */
}
```

به اولی میگن Descendant Combinator و به دومی میگن Child Combinator.

این که از کدوم، کجا استفاده کنیم خیلی مهمه.
اکثر مواقع کارمون با Descendant Combinator راه میفته،
اما زمانی که داریم از Selectorهایی استفاده می‌کنیم که ممکنه دوباره به‌عنوان نوه و... استفاده بشن،
باید تصمیم بگیریم آیا می‌خوایم اونا هم Style مورد نظر رو بگیرن یا نه.

این کد HTML رو در نظر بگیرید:

```html
<body>
  <header>This is the body header.</header>
  <main>
    <section>
      <header>This is the section header.</header>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>
  </main>
</body>
```

حالا فرض کنید، بخوایم فونت `header` رو بزرگ‌تر کنیم:

```css
body header {
  font-size: 2rem;
}
```

مشکلی که به وجود میاد اینه که `header`ـی که داخل `section` هست هم تغییر می‌کنه.
پس اینجا بهتر بود از Child Combinator استفاده کنیم:

```css
body > header {
  font-size: 2rem;
}
```

معمولاً بهتره برای این تگ‌ها از Child Combinator استفاده کنیم:

- `header`, `main`, `footer`
- `ul`, `ol`, `li`
- `article`, `section`

بیشتر بدانیم:

- [MDN - Descendant combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator)
- [MDN - Child combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator)

## اسم کلاس‌ها

اسم کلاس‌ها نباید بر مبنای جهت باشه. این کد رو در نظر بگیرید:

```html
<div>
  <div class="left"></div>
  <div class="right"></div>
</div>
```

این اسامی تا زمانی که `direction` ثابت باشه منطقی هستن؛
اما اگه زبان سایت مثلاً از انگلیسی به فارسی تغییر کنه،
اون موقع جهت سایت از `ltr` به `rtl` تغییر می‌کنه و جای این دو المان عوض میشه
و دیگه این اسامی منطقی نخواهند بود.

به جاش باید اسامی رو بر مبنای کاربردی که اون المان تو صفحه داره انتخاب کنید.
