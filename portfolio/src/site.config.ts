type SocialObjects = {
  // Iconify icon name
  icon: string;
  href: string;
  linkTitle: string;
  label: string;
}[];

export const SITE = {
  url: "https://azan-n.com",
  author: "Azan Farooqi",
  title: "Azan Farooqi",
  postPerPage: 20,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const SOCIALS: SocialObjects = [
  {
    icon: "ph:envelope-simple-duotone",
    href: "mailto:work@azan-n.com",
    linkTitle: `Email me.`,
    label: "Email",
  },
  {
    icon: "ph:github-logo-duotone",
    href: "https://github.com/azan-n",
    linkTitle: ` ${SITE.title} on GitHub`,
    label: "GitHub",
  },
];
