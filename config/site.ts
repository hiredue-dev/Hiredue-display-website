export const siteConfig = {
  name: "HireDue",
  url: "https://www.hiredue.com",
	onSiteUrl:{
		aboutUs:"/about-us",
		career:"/career"
	},
  getStartedUrl:
    "https://hiredue.com/",
  ogImage: "https://hiredue.com/",
  description: "HireDue is revolutionizing hiring. Stay tuned!",
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    email: "mailto:contact@hiredue.com",
  },
  pricing: {
    pro: "https://hiredue.com/",
    team: "https://hiredue.com/",
  },
  stats: {
    figma: 4352,
    github: 1049,
    cli: 8092,
    total: "13.4k+",
    updated: "23 Jul 2025",
    sections: 72,
    illustrations: 15,
    animations: 14,
    appTemplates: 2,
    websiteTemplates: 4,
  },
};

export type SiteConfig = typeof siteConfig;
