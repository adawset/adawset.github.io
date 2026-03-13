import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My blog",
  description: "A VitePress Site",

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/adawset' }
    ]
  },

  rewrites: {
    'en/:path*': ':path*'
  }
})
