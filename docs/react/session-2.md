---
sidebar_position: 2
---

# جلسه 2

## TypeScript

### مقدمه

من اینجا فقط مباحثی از TypeScript که برای React احتیاج دارید رو توضیح میدم.
اگه کسی دوست داره جداگانه در مورد راه‌اندازی TypeScript و Configهایی که داره اطلاعات به‌دست بیاره،
میتونه از این آموزش استفاده کنه:

- [بهترین راه شروع پروژه TypeScript - خشت اول (آپارات)](https://www.aparat.com/v/ghca793)
- [بهترین راه شروع پروژه TypeScript - خشت اول (YouTube)](https://www.youtube.com/watch?v=ePp4JnuXBIs&t=4313s)

### راه‌اندازی

من یه Repo دارم که تو ویدئوی بالا کامل توضیح دادم چطور باید راه‌اندازیش کنید.
اینجا صرفاً میخوایم ازش استفاده کنیم برای اینکه یه محیطی داشته باشیم که بتونیم توش کد TypeScript بنویسیم.

1. ریپو رو از
   [اینجا](https://github.com/BijanProgrammer/boilerno)
   بگیرید و Clone کنید
2. این دستور رو بزنید تا پکیج‌های مورد نظر نصب بشن:

```shell
npm i
```

3. داخل فایلِ `src/main.ts` میتونید کد بنویسید
4. با این دستور پروژه رو در حالت Watch شروع کنید که هر بار فایلی رو تغییر دادید، به طور خودکار از اول اجرا بشه:

```shell
npm run dev
```

### مشکل چی بود؟

به طوری کلی JavaScript سه مشکل اساسی داشت که به همین خاطر زبانی مثل TypeScript به وجود اومد:

#### عدم وجود Type Safety

تو JavaScript شما میتونید یه همچین تابعی داشته باشید:

```javascript
function minus(a, b) {
  return a - b;
}
```

واضحه که انتظار داریم `a` و `b` دو تا عدد باشن و میخوایم اینا رو با هم جمع کنیم.

اما اگه کسی که میخواد از تابع استفاده کنه،
حواسش نباشه یا حتی از قصد تایپ دیگه‌ای رو پاس بده،
عملکرد تابع ما به کلی دچار مشکل میشه.

```javascript
// warning-next-line
minus("bijan", 23); // NaN
```

حالا اینجا از روی اسم تابع میشه فهمید چه ورودی‌هایی باید بگیره؛
اما بعضی وقتا به همین راحتی نمیشه تشخیص داد.

به عنوان مثال این تابع رو برای احراز هویت در نظر بگیرید:

```javascript
async function auth(user) {
  const userInDatabase = await db.find({ user: { phone: user.phone } });

  if (!userInDatabase) {
    return { status: 404, message: "User not found." };
  }

  if (user.password !== userInDatabase.password) {
    return { status: 401, message: "Unauthorized." };
  }

  return { status: 200, message: "Welcome!" };
}
```

با توجه به کد بالا، تابع انتظار داره `user` حاوی `phone` و `password` باشه.
اما کسی که قراره از تابع استفاده کنه لزوماً از این مورد با خبر نیست
و ممکنه فکر کنه تابع با `email` کار میکنه؛
بنابراین این کد رو مینویسه و به مشکل میخوره:

```javascript
// warning-next-line
auth({ email, password }).then(console.log); // { status: 404, message: "User not found." }
```

اما تو TypeScript، تایپ `user` مشخصه و اگه اشتباهی `email` پاس بدید، همون موقع بهتون خطا میده و جلوی اشتباه رو می‌گیره.

#### عدم پیشنهاد بر اساس تایپ

همون مثال ساده رو در نظر بگیرید:

```javascript
function minus(a, b) {
  return a - b;
}
```

کسی که بخواد از این تابع استفاده کنه، هیچ Suggestionی از سمت IDE نمیتونه دریافت کنه
که متوجه بشه الان از چه تایپی و از چه متغیرهایی برای آرگومان‌های این تابع میتونه استفاده کنه.

اما تو TypeScript بر اساس تایپ پارامتر، بهتون میگه چه آرگومانی رو می‌تونید به تابع پاس بدید.

#### عدم خطایابی قبل از اجرای کد

تو JavaScript تا زمانی که کد رو اجرا نکنید، نمی‌تونید متوجه بشید خطا دارید یا نه.

اما تو TypeScript همون موقع که مشغول نوشتن کد هستید، خطا رو بهتون نشون میده.

### TypeScript

تایپ‌اسکریپت یه زبان برنامه‌نویسیه که بر مبنای JavaScript نوشته شده.
اصطلاحاً میگن Supersetشه.
یعنی تمام فیچرهای JavaScript رو داره
و علاوه بر اون‌ها یه سری فیچر دیگه هم داره.

مهم‌ترین فیچری که TypeScript نسبت به JavaScript داره، بحث Type System هست.
به خاطر همین هم این اسم رو روش گذاشتن.

این Type System به ما این امکان رو میده که برای متغیرها، توابع، فیلدها و... تایپ مشخص کنیم.
با این کار میتونیم از مشکلاتی که بالاتر مطرح کردیم جلوگیری کنیم.

در ادامه به بررسی مهم‌ترین ویژگی‌های TypeScript می‌پردازیم.
این ویژگی‌ها برای کار با React گلچین شدن.

### Basic Types

تو JavaScript هم تایپ داریم اما خیلی سختگیرانه ازشون استفاده نمی‌کنیم.
مثلاً این کد درسته:

```javascript
let variable = 23;
variable = "Bijan";
```

همونطور که می‌بینید اول اومدیم یه مقدار عددی ریختیم داخل متغیر
و بعد یه مقدار Stringیی.
خطایی هم بهمون نداد.

اما تو TypeScript می‌تونیم نوع متغیر رو مشخص کنیم و بعدش دیگه حق نداریم مقداری به جز اون تایپ درونش ذخیره کنیم:

```typescript
let variable: number = 23;
// error-next-line
variable = "Bijan"; // TS2322: Type string is not assignable to type number
```

در ادامه چند مثال از تایپ‌های پایه میارم که خیلی کاربردی هستن:

```typescript
const name: string = "Bijan";
const age: number = 23;
const isDeveloper: boolean = true;

const nothing: null = null;
const nothing2: undefined = undefined;

const freinds: string[] = ["Ross", "Rachel", "Chandler", "Monica", "Joey", "Phoebe"];
const friends2: Array<string> = ["Geller", "Green", "Bing", "Geller", "Tribbiani", "Buffay"];
```

:::info

برای تایپ آرایه میشه از هر دو Syntax بالا استفاده کرد و فرقی با هم ندارن.

:::

### Types by Inference

اگه زمانی که متغیر رو تعریف می‌کنیم، همون موقع هم مقداردهی‌ش کنیم،
خودِ TypeScript تایپش رو می‌فهمه.
بنابراین دیگه نیاز نیست دستی بهش تایپ بدیم.

```typescript
// strike-next-line
let message: string = "Hello, friend!";
let message = "Hello, friend!";
```

:::info

به این ویژگی میگن Inference که تو ساخت تایپ‌های پیچیده هم کاربرد داره.

:::

### کاربرد

اینجا چندتا مثال میزنم از به کار بردن تایپ‌ها تو جاهای مختلف پروژه.

```typescript title="Variables"
let name: string;
```

```typescript title="Function parameters"
function minus(a: number, b: number) {
  return a - b;
}
```

```typescript title="Function return type"
function minus(a, b): number {
  return a - b;
}
```

```typescript title="Class fields"
class Circle {
  radius: number;

  constructor(radius) {
    this.radius = radius;
  }
}
```

```typescript title="Constructors"
class Circle {
  radius;

  constructor(radius: number) {
    this.radius = radius;
  }
}
```

### Custom Types

علاوه بر تایپ‌های پایه، می‌تونیم تایپ‌ها رو با هم ترکیب کنیم
و تایپ‌های پیچیده بسازیم.

به عنوان مثال می‌تونیم یه تایپ جدید به اسم `Id` تعریف کنیم که می‌تونه `number` یا `string` باشه:

```typescript
type Id = number | string;
```

همچنین می‌تونیم فقط مقادیر خاصی رو قبول کنیم و اجازه ندیم به جز اونا مقدار دیگه‌ای استفاده بشه:

```typescript
type Status = "active" | "inactive";
```

استفاده کردن از این تایپ‌ها مثل تایپ‌های پایه‌ست:

```typescript
const id1: Id = 23;
const id2: Id = "ab6c8bd0";

const status: Status = "inactive";
```

:::info

اسم تایپ‌ها باید PascalCase باشه.

:::

### Object Types

ما تو JavaScript می‌تونیم از `interface` استفاده کنیم تا شکل و شمایل یه `object` رو مشخص کنیم:

```typescript
interface Person {
  firstName;
  lastName;
}
```

تو TypeScript، علاوه بر `interface`، با تایپ هم میشه این کارو انجام داد:

```typescript
interface Person {
  firstName: string;
  lastName: string;
}

type Person = {
  firstName: string;
  lastName: string;
};
```

این دو نوع تعریف در اکثر موارد شبیه به هم عمل می‌کنن
و می‌تونیم از هر کدوم که می‌خوایم استفاده کنیم.
اما تفاوت‌هایی هم با هم دارن.

به عنوان مثال، شما می‌تونید از `interface` برای تعیین ساختار `class` استفاده کنید اما با `type` نمیشه این کارو انجام داد:

```typescript
interface Database {
  create: () => void;
  read: () => void;
  update: () => void;
  delete: () => void;
}

class SqlDatabase implements Database {
  create(): void {
    // ...
  }

  delete(): void {
    // ...
  }

  read(): void {
    // ...
  }

  update(): void {
    // ...
  }
}
```

از طرفی با `type` میشه یه سری تایپ خیلی پیشرفته درست کرد که با `interface` نمیشه.
بعضی از این کاربردها رو در طول دوره یاد می‌گیریم.

طبق مستندات TypeScript، شما باید به طور پیش‌فرض از `interface` استفاده کنید
و زمانی سراغ `type` برید که واقعاً بهش نیاز دارید.

### Intersection

تو TypeScript می‌تونیم تایپ‌ها رو با هم اشتراک بگیریم.
به عنوان مثال فرض کنیم از قبل یه تایپ به اسم Person داریم.
حالا می‌خوایم یه تایپ جدید درست کنیم که تمام ویژگی‌های Person رو داشته باشه
و بخوایم علاوه بر اون‌ها، username و password رو هم بهش اضافه کنیم:

```typescript
type User = Person & { username: string; password: string };
```

اگه طولانی بشه به این شکل هم می‌تونیم بنویسیم و فرقی با هم ندارن:

```typescript
type User = Person & {
  username: string;
  password: string;
};
```

### Type Assertions

بعضی مواقع هست که ما به عنوان برنامه‌نویس،
بیشتر از TypeScript اطلاعات داریم.
مثلاً می‌دونیم تایپ یه متغیر خاص قطعاً `number` ئه.

تو اینجور مواقع می‌تونیم از Assertion استفاده کنیم.

به عنوان مثال، این کد رو در نظر بگیرید:

```html
<body>
  <h1>Hello, friend!</h1>
  <button>Click Me!</button>
</body>
```

```typescript
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Clicked...");
});
```

تایپِ خروجِ `document.querySelector` برابر با ` Element | null` ئه.
اگه بتونه المان رو پیدا کنه `Element` برمیگردونه؛
اگه نتونه، `null` برمیگردونه.

اما از اونجایی که ما خودمون کد HTML رو نوشتیم،
می‌دونیم که این دکمه وجود داره.

تو چنین جایی ما اطلاعاتمون از TypeScript بیشتره.
پس می‌تونیم یکی از این دو کار رو انجام بدیم:

```typescript
const button = document.querySelector("button")!;
```

```typescript
const button = document.querySelector("button") as Element;
```

مورد اول به مراتب کم‌خطرتره.
صرفاً به TypeScript میگه این تایپ نمی‌تونه `null` باشه.

اما مورد دوم، می‌تونه تایپ رو هر چیزی در نظر بگیره:

```typescript
const button = document.querySelector("button") as number;
```

کاملاً واضحه که کد بالا ایراد داره و امکان نداره خروجیِ `document.querySelector` برابر با `number` باشه.
اما چون از `as` استفاده کردیم، TypeScript به حرف ما اعتماد می‌کنه
و از اینجا به بعد تایپ `button` رو `number` در نظر می‌گیره.

:::danger

تقریباً هیچوقت نباید از as استفاده کنید.
مگر در موارد خیلی نادر و کاملاً محتاطانه که چاره‌ای جز این کار نداشته باشیم.

:::

### Narrowing

به این مثال توجه کنید:

```typescript
type Action = "increment" | "decrement";

type Params = {
  action: Action;
  value: number;
};

function perform({ action, value }: Params): number {
  if (action === "increment") {
    return value + 1;
  }

  if (action === "decrement") {
    return value - 1;
  }

  return value;
}

const result = perform({
  action: "increment",
  value: 23,
});
```

ما اینجا یه تابع داریم که دو تا ورودی می‌گیره.
یکی `action` که مشخص می‌کنه تابع باید چه کاری انجام بده.
و یکی `value` که مقداری که قراره عملیات روش انجام بشه رو به ما میگه.

تا اینجا نکته‌ی خاصی وجود نداره.
اما فرض کنید بخوایم یه نوع عملیات دیگه هم اضافه کنیم که احتیاج به مقدار ثانویه‌ای داشته باشه.

مثلاً می‌خوایم عملیات ضرب داشته باشیم که باید یه ضریب هم تو ورودی دریافت کنه:

```typescript
// highlight-next-line
type Action = "increment" | "decrement" | "multiply";

type Params = {
  action: Action;
  value: number;
  // highlight-next-line
  multiplier: number;
};

// highlight-next-line
function perform({ action, value, multiplier }: Params): number {
  if (action === "increment") {
    return value + 1;
  }

  if (action === "decrement") {
    return value - 1;
  }

  // highlight-start
  if (action === "multiply") {
    return value * multiplier;
  }
  // highlight-end

  return value;
}

const result = perform({
  // highlight-next-line
  action: "multiply",
  value: 23,
  // highlight-next-line
  multiplier: 2,
});
```

به نظر میرسه کد درسته ولی یه مشکلی وجود داره.
الان کسی که بخواد عملیات `increment` رو اجرا کنه،
مجبوره یه `multiplier` هم پاس بده،
در صورتی که برای این عملیات بهش احتیاج نداریم.

پس می‌تونیم به یکی از روش‌های زیر `multiplier` رو اختیاری کنیم:

```typescript
type Params = {
  action: Action;
  value: number;
  // highlight-next-line
  multiplier: number | undefined;
};
```

```typescript
type Params = {
  action: Action;
  value: number;
  // highlight-next-line
  multiplier?: number;
};
```

اما الان یه مشکل دیگه‌ای به وجود اومد.
از کجا معلوم کسی که می‌خواد از `multiply` استفاده کنه، واقعاً `multiplier` رو پاس بده؟

برای حل این مشکل باید شرطمون رو آپدیت کنیم:

```typescript
function perform({ action, value, multiplier }: Params): number {
  if (action === "increment") {
    return value + 1;
  }

  if (action === "decrement") {
    return value - 1;
  }

  // highlight-next-line
  if (action === "multiply" && multiplier !== undefined) {
    return value * multiplier;
  }

  return value;
}
```

همونطور که دیدید، TypeScript کاملاً هوشمندانه متوجه شد که وقتی وارد شرط می‌شیم،
دیگه امکان نداره multiplier برابر با undefined باشه،
بنابراین دیگه به ما خطا نشون نداد.

به این ویژگیِ TypeScript میگن Narrowing.

### Discriminated Unions

ما می‌تونیم پا رو فراتر بذاریم و به TypeScript بگیم تایپ فیلدهامون رو بر اساس مقدار یه فیلد خاص در نظر بگیره.

به عنوان نمونه تو مثال قبل، فیلدِ action تعیین کننده بود که آیا multiplier داریم یا نه.

می‌تونیم به این شکل کد رو پیاده‌سازی کنیم:

```typescript
type Params =
  | {
      action: "increment" | "decrement";
      value: number;
    }
  | {
      action: "multiply";
      value: number;
      multiplier: number;
    };

function perform(params: Params): number {
  const { action, value } = params;

  if (action === "increment") {
    return value + 1;
  }

  if (action === "decrement") {
    return value - 1;
  }

  if (action === "multiply") {
    return value * params.multiplier;
  }

  return value;
}
```

معنی این کد اینه که Params در مجموع دو حالت داره.

1. حالت اول زمانیه که `action` برابر با `increment` یا `decrement` باشه.
   در این صورت یه فیلدِ دیگه به اسم `value` هم باید پاس داده بشه.
2. حالت دوم زمانیه که `action` برابر با `multiply` باشه.
   در این صورت علاوه بر `value`، باید `multiplier` هم به صورت اجباری پاس داده بشه.

خوبیش اینه زمانی که دارید از این تابع استفاده می‌کنید،
بلافاصله بعد از اینکه `action` رو تعیین کردید،
خودِ IDE باقی فیلدها رو بهتون پیشنهاد میده.

### TypeScript-specific Types

1. any (allow anything)
2. unknown (ensure someone using this type declares what the type is)
3. never (it's not possible that this type could happen)
4. void (a function which returns undefined or has no return value)

### Generic

1. Array
2. Stack

### Utility Types

1. Pick
2. Omit
3. ReturnType
4. Reference the doc
   https://www.typescriptlang.org/docs/handbook/utility-types.html

### Further Reading

1. https://www.typescriptlang.org/docs/handbook/intro.html
