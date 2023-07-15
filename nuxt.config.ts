// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  app: {
    head: {
      title: "Yuki Lun's Portfolio",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      meta: [
        { name: 'description', content: "Welcome to Yuki Lun's portfolio." },
        { name: 'msapplication-TileColor', content: "#ffffff" },
        { name: 'theme-color', content: "#ffffff" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@yukilun" },
        { name: "twitter:title", content: "Yuki Lun's Portfolio" },
        { name: "twitter:description", content: "Welcome to Yuki Lun's portfolio." },
        { name: "twitter:image", content: process.env.URL + "/images/logo.jpg" },
        { property: "og:type", content: "profile" },
        { property: "og:title", content: "Yuki Lun's Portfolio" },
        { property: "og:description", content: "Welcome to Yuki Lun's portfolio." },
        { property: "og:url", content: process.env.URL  },
        { property: "og:image", content: process.env.URL + "/images/logo.jpg" },
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: "icon", type:"image/png", sizes: "32x32", href: "/favicon-32x32.png"},
        { rel: "icon", type:"image/png", sizes: "316x16", href: "/favicon-16x16.png"},
        { rel: "manifest", href: "/site.webmanifest"},
      ]
    }
  },
  runtimeConfig: {
    EMAIL: process.env.EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    URL:process.env.URL
  },
})