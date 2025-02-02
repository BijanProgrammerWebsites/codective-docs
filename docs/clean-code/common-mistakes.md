---
sidebar_position: 2
description: ""
---

# اشتباهات رایج

## CSS

### Selectors

#### Component Selector

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
