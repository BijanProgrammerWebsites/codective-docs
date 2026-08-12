type Route = {
  to: string;
  label: string;
};

export function generateRoutes(): Route[] {
  return [
    {
      to: "/general",
      label: "عمومی",
    },
    {
      to: "/clean-code",
      label: "Clean Code",
    },
    {
      to: "/web",
      label: "Web",
    },
    {
      to: "/test",
      label: "Test",
    },
    {
      to: "/github",
      label: "GitHub",
    },
    {
      to: "/devops",
      label: "DevOps",
    },
    {
      to: "/seo",
      label: "SEO",
    },
    {
      to: "/book",
      label: "کتاب",
    },
    {
      to: "/notes",
      label: "یادداشت‌ها",
    },
  ];
}
