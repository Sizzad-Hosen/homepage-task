export type MenuItem = {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
  }[];
};

export const mobileMenuItems: MenuItem[] = [
  {
    label: "Services",
    children: [
      { label: "Digital PR", href: "#" },
      { label: "Organic Social & Content", href: "#" },
      { label: "Search & Growth Strategy", href: "#" },
      { label: "Content Experience", href: "#" },
      { label: "Data & Insights", href: "#" },
      { label: "Onsite SEO", href: "#" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Retail", href: "#" },
      { label: "Travel", href: "#" },
      { label: "Finance", href: "#" },
      { label: "B2B", href: "#" },
    ],
  },
  {
    label: "International",
    children: [
      { label: "UK", href: "#" },
      { label: "USA", href: "#" },
      { label: "Europe", href: "#" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Culture", href: "#" },
    ],
  },
  {
    label: "Work",
    href: "#",
  },
  {
    label: "Careers",
    href: "#",
  },
  {
    label: "Blog & Resources",
    children: [
      { label: "Blog", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Webinars", href: "#" },
    ],
  },
  {
    label: "Webinar",
    href: "#",
  },
  {
    label: "Get in touch",
    href: "#",
  },
];