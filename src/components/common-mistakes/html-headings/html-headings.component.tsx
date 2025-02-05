import { ReactElement } from "react";

import type { TOCItem } from "@docusaurus/mdx-loader";
import CodeBlock from "@theme/CodeBlock";

import styles from "./html-headings.module.css";

type Props = {
  readonly toc: readonly TOCItem[];
};

export default function HtmlHeadingsComponent({ toc }: Props): ReactElement {
  console.log(toc);

  const code = toc
    .map((heading) => {
      const indent = "  ".repeat(heading.level - 1);
      const openingTag = `<h${heading.level}>`;
      const closingTag = `</h${heading.level}>`;

      return `${indent}${openingTag}${heading.value}${closingTag}`;
    })
    .join("\n");

  return (
    <div className={styles.headings}>
      <CodeBlock language="html">{code}</CodeBlock>
    </div>
  );
}
