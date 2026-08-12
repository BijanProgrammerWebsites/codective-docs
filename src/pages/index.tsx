import { ReactNode, useMemo } from "react";

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import clsx from "clsx";

import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import { generateRoutes } from "@site/routes";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const routes = useMemo(() => generateRoutes(), []);

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {routes.map((route) => (
            <Link className="button button--secondary button--lg" to={route.to}>
              {route.label}
            </Link>
          ))}
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
