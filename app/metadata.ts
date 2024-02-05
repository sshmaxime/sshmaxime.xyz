export type PageMetadata = {
  name: string;
  description: string;
  href: string;
};

export const METADATA: { [key: string]: PageMetadata } = {
  DASHBOARD: {
    name: "Dashboard",
    description: "",
    href: "",
  },

  PRIVACY: {
    name: "Privacy",
    description: "",
    href: "privacy",
  },

  TERMS: {
    name: "Terms and Policies",
    description: "",
    href: "terms",
  },
};
