---
description: ""
---

# Case Styles

تو برنامه‌نویسی بخش‌های مختلف یک خط کد رو با Space از هم جدا می‌کنیم تا Compiler بتونه دستور ما رو متوجه بشه.

به‌عنوان مثال، اینجا بین کلمات Space گذاشتیم تا اسامی و کلیدواژه‌ها و... از هم قابل‌تفکیک باشن:

```javascript
const name = "Bijan";
```

به همین خاطر، اگه بخوایم از عبارتی استفاده کنیم که شامل چند کلمه باشه، نمی‌تونیم بین کلمات Space بذاریم.

به‌عنوان مثال، این کد اشتباهه:

```javascript
// error-next-line
const first name = "Bijan";
```

یه مفهومی به اسم Case Styles وجود داره که به ما میگه کلماتِ یک عبارت رو چطور بنویسیم.

هر Case Style کاربرد خاص خودش رو داره که اینجا سعی می‌کنیم به چند مورد اشاره کنیم.

## lowercase

تمام حروف رو کوچیک می‌نویسیم.
کلمات باید بدون فاصله به هم بچسبن.

```html title="HTML"
<!-- Tag -->
<textarea></textarea>

<!-- Attribute -->
<button onmouseenter="chiz()"></button>
```

:::note علت نام‌گذاری

تو چاپخونه‌های قدیمی، از حروف فلزی برای چاپ استفاده می‌کردن
که تو دو کشو تقسیم‌شون کرده بودن.
کشوی بالایی مربوط به حروف بزرگ بود (Upper Case)،
وکشوی پایینی مربوط به حروف کوچیک (Lower Case).

:::

## UPPERCASE

تمام حروف رو بزرگ می‌نویسیم.
کلمات باید بدون فاصله به هم بچسبن.

:::info

این Case Style معمولاً خیلی تو وب استفاده نمیشه.

:::

:::note علت نام‌گذاری

تو قسمت lowercase توضیح داده شد.

:::

## PascalCase

حرف اول هر کلمه رو بزرگ و باقی حروف رو کوچیک می‌نویسیم.

```javascript title="JavaScript"
// Class
class SqlOrm {}
```

```typescript title="TypeScript"
// Type
type UserAddress = {};

// Interface
interface ChocolateFactory {}

// Enum
enum FileUploadStatus {}
```

```jsx title="React"
// Component
function EditUserForm() {}
```

:::note علت نام‌گذاری

تو زبان برنامه‌نویسی Pascal ازش استفاده میشد.

:::

## camelCase

دقیقاً مشابه PascalCase ولی حرف اولِ اولین کلمه باید کوچیک باشه.

```javascript title="JavaScript"
// Variable
const firstName = "";

// Object Key
const user = {
  username: "",
  password: "",
  isAdmin: false,
};

// Function
function sortItemsByName() {}
const fetchAllPosts = () => {};

// Function Parameter
function fetchMeSomething(baseUrl, httpHeaders) {}

// Class Field
class Shape {
  sidesCount;
  register() {}
  login() {}
}
```

:::note علت نام‌گذاری

وقتی عبارت رو می‌نویسیم، شبیه به شتری میشه که از بغل داریم بهش نگاه می‌کنیم و کوهان‌هاش بالاتر از بقیه‌ی بدنش قرار دارن.

:::

## kebab-case

تمام حروف رو کوچیک می‌نویسیم و کلمات رو با خط تیره (Hyphen) از هم جدا می‌کنیم.

```html title="HTML & CSS"
<!-- ID -->
<button id="remove-user">Remove User</button>

<!-- Class -->
<img class="user-profile-picture" src="" alt="" />
```

:::info

برای نام‌گذاری تمام فایل‌ها و فولدرها باید از kebab-case استفاده کنیم.

:::

:::note علت نام‌گذاری

شبیه به کبابه؛ کلمات گوشتن و خط تیره‌ی بینشون سیخه.

:::

## snake_case

تمام حروف رو کوچیک می‌نویسیم و کلمات رو با Underline از هم جدا می‌کنیم.

:::info

این Case Style معمولاً خیلی تو وب استفاده نمیشه.

:::

:::note علت نام‌گذاری

شبیه به ماره؛ چون تمام کاراکترها، حتی Underline، روی زمین قرار دارن و انگار بدن یه ماره که داره میخزه.

:::

## SCREAMING_SNAKE_CASE

تمام حروف رو بزرگ می‌نویسیم و کلمات رو با Underline از هم جدا می‌کنیم.

```typescript title="TypeScript"
// Enum Key
enum FileUploadStatus {
  PENDING,
  SUCCESSFUL,
  FAILED,
}

// Readonly Variable
const OPTIONS = ["to be", "not to be"] as const;
```

:::note علت نام‌گذاری

شبیه به snake_case ئه اما تمام حروفش بزرگن و انگار دارن فریاد میزنن.

:::
