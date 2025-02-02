import { ReactElement } from "react";

import clsx from "clsx";

import styles from "./css-rounded-corners.module.css";

export default function CssRoundedCornersComponent(): ReactElement {
  return (
    <div className={styles["css-rounded-corners"]}>
      <div className={clsx(styles.shape, styles["fifty-percent"])}>
        <code>border-radius: 50%</code>
      </div>
      <div className={clsx(styles.shape, styles["large-number"])}>
        <code>border-radius: 999rem</code>
      </div>
    </div>
  );
}
