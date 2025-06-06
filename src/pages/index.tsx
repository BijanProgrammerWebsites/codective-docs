import type { ReactNode } from "react";

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import clsx from "clsx";

import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/general">
            عمومی
          </Link>
          <Link className="button button--secondary button--lg" to="/clean-code">
            Clean Code
          </Link>
          <Link className="button button--secondary button--lg" to="/typescript">
            Typescript
          </Link>
          <Link className="button button--secondary button--lg" to="/github">
            GitHub
          </Link>
          <Link className="button button--secondary button--lg" to="/book">
            کتاب
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
    </Layout>
  );
}
