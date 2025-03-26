import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "R&TT",
  description: "空空如也",
  base: '/ResourcesTechnicalMC/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/start/前言' },
      { text: 'Wiki', link: 'https://zh.minecraft.wiki/' }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '前言', link: '/start/前言' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yizhi9jiyan9/ResourcesTechnicalMC' }
    ],
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short", // full
        timeStyle: "short", // medium
      },
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      message: 'Released under the ARR License.',
      copyright: 'Copyright © 2025 yizhi9jiyan9'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/ResourcesTechnicalMC/logo.png' }]
  ],
})
