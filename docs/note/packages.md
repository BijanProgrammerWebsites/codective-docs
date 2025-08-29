---
description: ""
---

# Packages

## Syntax Highlighter

### [Shiki](https://shiki.style/)

یه Syntax Highlighter سبک که رو سرور Render میشه و HTML خام میفرسته سمت کلاینت؛ بنابراین JavaScript اضافه فرستاده نمیشه.

## Icon Packs

### [Maki](https://labs.mapbox.com/maki-icons/)

آیکن مخصوص اماکنی که معمولاً در نقشه نمایش داده میشن؛ مثل پارک، موزه و مسجد.

## Maintenance

### [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

ورژن تمام پکیج‌های package.json رو به آخرین نسخه‌ی موجود تغییر میده.

```shell
npx npm-check-updates
```

```shell
npm i
```

## Utils

### [Immer](https://immerjs.github.io/immer/)

یه کتابخونه‌ی کوچیک که کمک می‌کنه بتونیم `setState` کوتاه‌تری بنویسیم و نیازی نباشه دستی از Array یا Object کپی بگیریم.

```javascript
const [array, setArray] = useState([1, 2, 3]);

const add = () => {
  setArray(produce((draft) => draft.push(4)));
};
```
