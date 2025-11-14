import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // 基础配置
  base: '/',
  lang: 'zh-CN',
  title: '橘络人物分析文档',
  description: '一个全面的橘络人物分析项目 - VuePress版本',
  
  // Bundler配置
  bundler: viteBundler(),
  
  // 主题配置
  theme: defaultTheme({
    // 导航栏
    navbar: [
      { text: '首页', link: '/' },
      { text: '详细人物分析', link: '/detailed-character-analysis/' },
      { text: '资源库', link: '/resources/' },
      { text: '实用工具', link: '/tools/' }
    ],
    
    // 侧边栏
    sidebar: {
      '/detailed-character-analysis/': [
        {
          text: '详细人物分析',
          collapsible: true,
          children: [
            '/detailed-character-analysis/README.md',
            {
              text: '综合报告',
              collapsible: true,
              children: [
                '/detailed-character-analysis/橘络社交关系全景分析报告.md',
                '/detailed-character-analysis/聊天记录综合分析报告.md',
                '/detailed-character-analysis/聊天记录综合对比分析报告.md',
                '/detailed-character-analysis/橘络社交关系综合对比分析报告.md'
              ]
            },
            {
              text: '群聊分析',
              collapsible: true,
              children: [
                {
                  text: 'DPの交流群',
                  collapsible: true,
                  children: [
                    '/detailed-character-analysis/dp-chat-group/README.md'
                  ]
                },
                {
                  text: '基友交流群♂',
                  collapsible: true,
                  children: [
                    '/detailed-character-analysis/bros-chat-group/README.md'
                  ]
                }
              ]
            },
            {
              text: '私人聊天',
              collapsible: true,
              children: [
                '/detailed-character-analysis/private-chat/README.md'
              ]
            },
            {
              text: '思考过程',
              collapsible: true,
              children: [
                '/detailed-character-analysis/thinking-process/README.md'
              ]
            }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源库',
          collapsible: true,
          children: [
            '/resources/kamian.md',
            '/resources/winter-tree-cg.md',
            '/resources/lolita-clothing-illustrations.md'
          ]
        }
      ],
      '/tools/': [
        {
          text: '实用工具',
          collapsible: true,
          children: [
            '/tools/terrasavr-plus.md'
          ]
        }
      ]
    },
    
    // 其他主题配置
    logo: '/loge/1.png',
    repo: '',
    docsDir: 'docs',
    
    // 编辑链接
    editLink: false,
    
    // 最后更新时间
    lastUpdated: true,
    lastUpdatedText: '最后更新',
    
    // 贡献者
    contributors: false,
    
    // 页面信息
    pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime']
  }),
  
  // 插件配置
  plugins: [
    // 搜索插件
    ['@vuepress/plugin-search', {
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
    }],
    
    // 返回顶部
    ['@vuepress/plugin-back-to-top', true],
    
    // 图片缩放
    ['@vuepress/plugin-medium-zoom', {
      selector: '.theme-default-content :not(a) > img',
    }],
    
    // 进度条
    ['@vuepress/plugin-nprogress', true],
  ],
  
  // 性能优化配置
  bundlerConfig: {
    vite: {
      build: {
        chunkSizeWarningLimit: 2000,
        rollupOptions: {
          output: {
            manualChunks: {
              'vuepress': ['vue', 'vue-router'],
              'theme': ['@vuepress/theme-default'],
            }
          }
        }
      }
    }
  },
  
  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/loge/1.png' }],
    ['meta', { name: 'keywords', content: '橘络,人物分析,群聊分析,私人聊天,关系分析' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ]
})