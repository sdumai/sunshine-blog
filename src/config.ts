export const SITE = {
  website: "https://sdumai.github.io", // replace this with your deployed domain
  author: "Sun Shine",
  profile: "https://satnaing.dev/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "不蔓不枝",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 30,
  postPerPage: 30,
  scheduledPostMargin: 0, // 0 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.github.io/sunshine-blog/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
