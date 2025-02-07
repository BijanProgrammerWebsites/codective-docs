---
description: ""
---

# Logical Properties

## مسئله

اگه قبلاً پروژه‌ای داشتید که باید هم‌زمان از فارسی و انگلیسی پشتیبانی میکردید،
حتماً متوجه شدید که باید استایل‌هایی که به راست یا چپ مربوط میشن رو تغییر می‌دادید.
مثلاً اگه تو نسخه‌ی انگلیسی از `margin-left` استفاده کردید،
تو نسخه‌ی فارسی باید به `margin-right` تغییرش می‌دادید.

طبیعتاً این کار خیلی طاقت‌فرساست و احتمال بروز اشتباه انسانی توش زیاده.

## راه‌حل

خوشبختانه تو CSS میشه از Logical Properties برای حل این مشکل استفاده کرد؛
به این ترتیب، مرورگر طبق Direction سایت استایل‌ها رو اعمال میکنه.

به عنوان مثال، معادل چند Property پُر استفاده اینجا آورده شده.

### Margin

| Logical Property      | LTR Property    | RTL Property    |
| :-------------------- | :-------------- | :-------------- |
| `margin-block-start`  | `margin-top`    | `margin-top`    |
| `margin-block-end`    | `margin-bottom` | `margin-bottom` |
| `margin-inline-start` | `margin-left`   | `margin-right`  |
| `margin-inline-end`   | `margin-right`  | `margin-left`   |

### Padding

| Logical Property       | LTR Property     | RTL Property     |
| :--------------------- | :--------------- | :--------------- |
| `padding-block-start`  | `padding-top`    | `padding-top`    |
| `padding-block-end`    | `padding-bottom` | `padding-bottom` |
| `padding-inline-start` | `padding-left`   | `padding-right`  |
| `padding-inline-end`   | `padding-right`  | `padding-left`   |

### Size

| Logical Property  | LTR Property | RTL Property |
| :---------------- | :----------- | :----------- |
| `block-size`      | `height`     | `height`     |
| `min-block-size`  | `min-height` | `min-height` |
| `max-block-size`  | `max-height` | `max-height` |
| `inline-size`     | `width`      | `width`      |
| `min-inline-size` | `min-width`  | `min-width`  |
| `max-inline-size` | `max-width`  | `max-width`  |

### Position

| Logical Property     | LTR Property | RTL Property |
| :------------------- | :----------- | :----------- |
| `inset-block-start`  | `top`        | `top`        |
| `inset-block-end`    | `bottom`     | `bottom`     |
| `inset-inline-start` | `left`       | `right`      |
| `inset-inline-end`   | `right`      | `left`       |

### Shorthands

همچنین میتونید دو Logical Property که هر دو Inline یا Block هستن رو همزمان مقداردهی کنید.
برای روشن‌تر شدن موضوع، سه کد معادل زیر رو در نظر بگیرید:

```css
.item {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* or */

.item {
  padding-block-start: 1rem;
  padding-block-end: 1rem;
}

/* or */

.item {
  padding-block: 1rem;
}
```

بیشتر بدانیم:

- [MDN - CSS Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
