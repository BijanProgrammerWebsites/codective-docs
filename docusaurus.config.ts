import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Codective Docs",
  tagline: "مستندات Codective شامل آموزش‌ها، دوره‌ها و بوت‌کمپ‌ها.",
  favicon: "meta/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.codective.ir",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "docs",
          routeBasePath: "/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "meta/social-card.jpg",
    navbar: {
      title: "Codective Docs",
      logo: {
        alt: "لوگوی Codective",
        src: "logo/logo.svg",
        srcDark: "logo/logo-dark.svg",
      },
      items: [
        {
          to: "/general",
          label: "عمومی",
          position: "left",
        },
        {
          to: "/guides/clean-code",
          label: "Clean Code",
          position: "left",
        },
        {
          to: "/bootcamps/react",
          label: "React Bootcamp",
          position: "left",
        },
        {
          href: "https://github.com/BijanProgrammerWebsites/codective-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "مستندات",
          items: [
            {
              label: "عمومی",
              to: "/general",
            },
            {
              label: "Clean Code",
              to: "/guides/clean-code",
            },
            {
              label: "React Bootcamp",
              to: "/bootcamps/react",
            },
          ],
        },
        {
          title: "شبکه‌های اجتماعی",
          items: [
            {
              label: "تلگرام",
              href: "https://t.me/Codective",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/bijanprogrammer",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@BijanProgrammer?sub_confirmation=1",
            },
            {
              label: "آپارات",
              href: "https://www.aparat.com/BijanProgrammer",
            },
          ],
        },
        {
          title: "متفرقه",
          items: [
            {
              label: "سایت اصلی",
              href: "https://codective.ir",
            },
          ],
        },
      ],
      copyright: "تمامی حقوق مادی و معنوی این وب‌سایت متعلق به بیژن عیسی‌پور می‌باشد.",
    },
    tableOfContents: {
      maxHeadingLevel: 5,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "custom-code-block-warning-line",
          line: "warning-next-line",
        },
        {
          className: "custom-code-block-error-line",
          line: "error-next-line",
        },
        {
          className: "custom-code-block-diff-remove-line",
          line: "diff-remove-next-line",
          block: { start: "diff-remove-start", end: "diff-remove-end" },
        },
        {
          className: "custom-code-block-diff-add-line",
          line: "diff-add-next-line",
          block: { start: "diff-add-start", end: "diff-add-end" },
        },
        {
          className: "custom-code-block-strike-line",
          line: "strike-next-line",
        },
        {
          className: "custom-code-block-prettier-ignore",
          line: "prettier-ignore",
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
