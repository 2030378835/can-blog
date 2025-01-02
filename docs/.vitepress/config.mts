import { defineConfig } from 'vitepress'
import {getSidebar} from '../router';
// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  title: "CAN BLOG",
  description: "墙灿的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '归档', link: '/archive' },
      { 
        text: '空间', 
        items: [
          { text: '音乐空间', link: '/music' },
          { text: '相册空间', link: '/album' }
        ]
      },
      {
        text: '作品集',
        items: [
          { text: 'can-cli（未发布）', link: 'https://gitee.com/qq2057187934/can-cli' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full' as const,  // 使用常量断言确保类型正确
        timeStyle: 'medium' as const // 使用常量断言确保类型正确
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
            javascriptEnabled: true,
        },
      },
    },
  }
};
export default defineConfig(getSidebar(vitePressOptions));

export {
  vitePressOptions
}