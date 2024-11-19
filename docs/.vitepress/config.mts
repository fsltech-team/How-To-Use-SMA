import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "How To Use SMA",
      description: "Document of How To Use Strinova Map Assistant.",
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      title: "如何使用卡丘地图助手",
      description: "卡丘地图助手说明文档.",
    },
    jp: {
      label: '日本語',
      lang: 'jp',
      title: "How To Use SMA",
      description: "Document of How To Use Strinova Map Assistant.",
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Global Release', link: 'https://strinova.fsltech.cn/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'For Developers', link: '/developers' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fsltech-team/Strinova-Map-Assistant' },
      { icon: 'discord', link: 'https://discord.com/invite/Zn6fWgT4Sb' }
    ]
  }
})
