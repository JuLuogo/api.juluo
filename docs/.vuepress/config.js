const { defaultTheme } = require('vuepress')

module.exports = {
  // 基础配置
  base: '/',
  lang: 'zh-CN',
  title: '橘络人物分析文档',
  description: '一个全面的橘络人物分析项目 - VuePress版本',
  
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
                '/detailed-character-analysis/document-navigation-map.md',
                '/detailed-character-analysis/final-integrated-analysis-report.md',
                '/detailed-character-analysis/character-interaction-analysis.md',
                '/detailed-character-analysis/juluo-relationship-analysis.md'
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
                    '/detailed-character-analysis/dp-chat-group/README.md',
                    '/detailed-character-analysis/dp-chat-group/dp-detailed-analysis.md',
                    '/detailed-character-analysis/dp-chat-group/xiaoding-detailed-analysis.md',
                    '/detailed-character-analysis/dp-chat-group/dp-chat-group-themes-keywords.md'
                  ]
                },
                {
                  text: '基友交流群♂',
                  collapsible: true,
                  children: [
                    '/detailed-character-analysis/bros-chat-group/README.md',
                    '/detailed-character-analysis/bros-chat-group/dowen-detailed-analysis.md',
                    '/detailed-character-analysis/bros-chat-group/juluo-group-chat-analysis.md',
                    '/detailed-character-analysis/bros-chat-group/qialuoyi-detailed-analysis.md'
                  ]
                }
              ]
            },
            {
              text: '私人聊天',
              collapsible: true,
              children: [
                '/detailed-character-analysis/private-chat/README.md',
                '/detailed-character-analysis/private-chat/juluo-private-chat-analysis.md',
                '/detailed-character-analysis/private-chat/dowen-private-chat-analysis.md',
                '/detailed-character-analysis/private-chat/private-chat-themes-keywords.md'
              ]
            },
            {
              text: '关系分析',
              collapsible: true,
              children: [
                '/detailed-character-analysis/juluo-dowen-relationship-analysis/README.md',
                '/detailed-character-analysis/juluo-wangxinrui-relationship-analysis.md',
                '/detailed-character-analysis/juluo-overnight-dowen-relationship-analysis.md',
                '/detailed-character-analysis/juluo-changting-luoyuwai-relationship-analysis.md',
                '/detailed-character-analysis/juluo-happy-chocolate-relationship-analysis.md'
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
}