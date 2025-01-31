---
sidebar_position: 2
description: ""
---

# اشتباهات رایج

## CSS

### Component Selector

ما تو CSS چیزی به اسم Component Selector نداریم.
به این معنی که شما نمی‌تونید مستقیماً از اسم Componentهاتون تو CSS استفاده کنید.
به جاش باید بهشون Class بدید و از Class Selector استفاده کنید.

```css title="❌ Wrong Code - HTML"
Image {
  /* */
}
```

```css title="✅ Correct Code - HTML"
.image {
  /* */
}
```

برای مشاهده‌ی لیست Selectorهای پایه به
[این صفحه](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
مراجعه کنید.
