import { ReactElement, useCallback, useState } from "react";

import { Flipped, Flipper } from "react-flip-toolkit";

import { slideAppearAnimation } from "@site/src/animations/slide-appear.animation";
import { slideExitAnimation } from "@site/src/animations/slide-exit.animation";

import styles from "./queue.module.css";

const MAX_COUNT = 5;

export default function QueueComponent(): ReactElement {
  const [items, setItems] = useState<number[]>([]);
  const [counter, setCounter] = useState<number>(1);

  const enqueue = useCallback((): void => {
    if (items.length >= MAX_COUNT) {
      return;
    }

    setItems((old) => [...old, counter]);
    setCounter((old) => old + 1);
  }, [counter, items.length]);

  const dequeue = useCallback((): number | null => {
    if (items.length === 0) {
      return null;
    }

    setItems((old) => old.slice(1));
  }, [items.length]);

  return (
    <Flipper flipKey={items.join("")}>
      <div className={styles.queue}>
        <ol className={styles.items}>
          {items.length === 0 && (
            <li className={styles.empty}>صف خالی است. از دکمه‌ی enqueue برای اضافه‌کردن آیتم جدید استفاده کنید.</li>
          )}
          {items.map((item) => (
            <Flipped key={item} flipId={item} onAppear={slideAppearAnimation} onExit={slideExitAnimation}>
              <li className={styles.item}>{item}</li>
            </Flipped>
          ))}
        </ol>
        <div className={styles.actions}>
          <button className="button button--secondary" onClick={enqueue}>
            enqueue
          </button>
          <button className="button button--secondary" onClick={dequeue}>
            dequeue
          </button>
        </div>
      </div>
    </Flipper>
  );
}
