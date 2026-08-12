---
description: ""
---

# ترفندها

## Non-null Assertion Operator

می‌تونید با استفاده از _Non-null Assertion Operator_ به TypeScript بگید که یک مقدار `null` یا `undefined` نیست:

```typescript
const box = document.querySelector("#box")!;
box.style.backgroundColor = "green";
```

## پارامتر Options با مقادیر پیش‌فرض

می‌تونید پارامتر Options رو به
[روش‌های مختلف](https://www.delftstack.com/howto/typescript/typescript-default-parameter/)
تعریف کنید.
مثلاً:

```typescript
interface ImageResizerOptions {
  width: number;
  height: number;
  lossless: boolean;
}

class ImageResizer {
  private options!: ImageResizerOptions;

  public constructor({ width = 1920, height = 1080, lossless = false }: Partial<ImageResizerOptions>) {
    this.options = { width, height, lossless };
  }
}

const resizer = new ImageResizer({ lossless: true });
```
