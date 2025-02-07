---
sidebar_position: 2
description: ""
---

# Review Dictionary

## مقدمه

خیلی وقت‌ها اشتباهاتی که تو Code Review دیده میشه بین دانشجوها متداوله.
برای اینکه سرعت Review بره بالاتر،
با ذکر علائم و اختصارات به بعضی از اشتباهات رایج اشاره می‌کنم
و تو کامنت‌ها جمله‌ی کامل نمی‌نویسم.

به عنوان مثال اگه تو کامنت نوشتم `ree` یعنی یه خط خالی اضافه تو کد وجود داره که باید پاک بشه.

## دیکشنری

|     کامنت     |                                                                                                                                                                                معنی |
| :-----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       x       |                                                                                                                                                                       این خط پاک شه |
|       ^       |                                                                                                                                                   بالای این خط، یک خط خالی اضافه شه |
|       v       |                                                                                                                                                   پایین این خط، یک خط خالی اضافه شه |
|      ree      |                                                                                                                                                                خط خالی اضافه پاک شه |
| اشتباه تکراری | این مشکل قبلاً تذکر داده شده؛ برای جلوگیری از تعدد کامنت‌ها، دوباره تذکر داده نمیشه؛ اما باید خودتون تو کل پروژه بگردید و جاهایی رو که این مشکل و باقی مشکلات وجود داره، اصلاح کنید |
|    دیکشنری    |                                                                                                 به این مشکل تو همین صفحه اشاره شده؛ بنابراین انتظار دارم نیازی به تذکر دوباره نباشه |
|      چسب      |                                           تو HTML، زمانی که محتوای یه المان خالی باشه، باید Closing Tag رو به Opening Tag بچسبونید و هیچ فاصله‌ای، حتی Enter یا Space، بینشون نباشه |
|     unit      |                                                                                                       تو CSS، از Unit مناسبی استفاده نشده. تو اکثر مواقع باید از `rem` استفاده کنید |
|     nest      |                                                                                      از قابلیت Nesting تو CSS استفاده کنید و ساختاری که تو HTML وجود داره رو عیناً تو CSS هم بیارید |
|   short it    |                                                                                                             تو CSS به جای آوردن چند دستور تو چند خط، از فرمت Shorthand استفاده کنید |
|    long it    |                                                                                                                        از Shorthand استفاده نکنید و دستورات رو تو چند خط جدا بیارید |
|       غ       |                                                                                                                                                                        غیرقابل‌قبول |
|   😐 یا :/    |                                                                                                                                                                        تَهِ اعتراض! |

در ادامه مثال‌هایی از کدهای اشتباه و اصلاح‌شده‌شون میارم که مطلب بهتر جا بیفته.

## x

```javascript title="💩 Messy Code"
function sum(a, b) {
  console.log(`a: ${a}, b: ${b}`); // Comment: x
  return a + b;
}
```

```javascript title="🧼 Clean Code"
function sum(a, b) {
  return a + b;
}
```

## ^

<!-- prettier-ignore-start -->

```javascript title="💩 Messy Code"
function reverse(items) {
  const result = []; 
  for (let i = items.length - 1; i >= 0; i--) { // Comment: ^
    result.push(i);
  } 
  return result; // Comment: ^
}
```

<!-- prettier-ignore-end -->

```javascript title="🧼 Clean Code"
function reverse(items) {
  const result = [];

  for (let i = items.length - 1; i >= 0; i--) {
    result.push(i);
  }

  return result;
}
```

## v

```javascript title="💩 Messy Code"
function reverse(items) {
  const result = []; // Comment: v
  for (let i = items.length - 1; i >= 0; i--) {
    result.push(i);
  } // Comment: v
  return result;
}
```

```javascript title="🧼 Clean Code"
function reverse(items) {
  const result = [];

  for (let i = items.length - 1; i >= 0; i--) {
    result.push(i);
  }

  return result;
}
```

## ree

```javascript title="💩 Messy Code"
function reverse(items) {
  const result = [];

  // Comment: ree

  for (let i = items.length - 1; i >= 0; i--) {
    result.push(i);
  }

  return result;
}
```

```javascript title="🧼 Clean Code"
function reverse(items) {
  const result = [];

  for (let i = items.length - 1; i >= 0; i--) {
    result.push(i);
  }

  return result;
}
```

## چسب (Enter)

```html title="💩 Messy Code"
<textarea>
// prettier-ignore
  
</textarea>
```

```html title="🧼 Clean Code"
<textarea></textarea>
```

## چسب (Space)

```html title="💩 Messy Code"
<textarea> </textarea>
```

```html title="🧼 Clean Code"
<textarea></textarea>
```

## unit

```css title="💩 Messy Code"
.chiz {
  font-size: 16px;
}
```

```css title="🧼 Clean Code"
.chiz {
  font-size: 1rem;
}
```

## nest

```css title="💩 Messy Code"
button {
  /* ... */
}

button svg {
  /* ... */
}

button.primary {
  /* ... */
}

button:hover {
  /* ... */
}
```

```css title="🧼 Clean Code"
button {
  /* ... */

  svg {
    /* ... */
  }

  &.primary {
    /* ... */
  }

  &:hover {
    /* ... */
  }
}
```

## short it

```css title="💩 Messy Code"
.chiz {
  border-width: 1px;
  border-style: solid;
  border-color: hsl(0deg 0% 0%);
}
```

```css title="🧼 Clean Code"
.chiz {
  border: 1px solid hsl(0deg 0% 0%);
}
```

## long it

```css title="💩 Messy Code"
.chiz {
  background: hsl(0deg 0% 0%);
}
```

```css title="🧼 Clean Code"
.chiz {
  background-color: hsl(0deg 0% 0%);
}
```
