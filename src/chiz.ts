type Action = "increment" | "decrement" | "multiply";

type Params = {
  action: Action;
  value: number;
  multiplier?: number;
};

function perform({ action, value, multiplier }: Params): number {
  if (action === "increment") {
    return value + 1;
  }

  if (action === "decrement") {
    return value - 1;
  }

  if (action === "multiply") {
    return value * multiplier;
  }

  return value;
}

const result = perform({
  action: "multiply",
  value: 23,
});

console.log(result);
