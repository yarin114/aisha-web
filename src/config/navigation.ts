export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "בית" },
  { href: "/gallery", label: "גלריה" },
  { href: "/book", label: "לקביעת ייעוץ" },
];
