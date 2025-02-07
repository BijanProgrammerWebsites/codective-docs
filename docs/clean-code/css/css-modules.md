---
description: ""
---

# CSS Modules

## Case Style

اگه تو پروژه CSS Modules داشته باشیم،
اسم کلاس همزمان تو CSS و JavaScript استفاده می‌شه؛
بنابراین مختاریم بین kebab-case یا camelCase انتخاب کنیم.

```jsx title="طبق استاندارد CSS"
<input className={styles["global-search-box"]} />
```

```jsx title="طبق استاندارد JavaScript"
<input className={styles.globalSearchBox} />
```

:::warning

توجه داشته باشید که باید یکی رو انتخاب کنید و تو کل پروژه از همون استفاده کنید.
نباید بعضی جاها kebab-case و بعضی جاهای دیگه camelCase باشه.

:::
