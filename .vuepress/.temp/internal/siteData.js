export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"橘络人物分析文档\",\"description\":\"一个全面的橘络人物分析项目 - VuePress版本\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/loge/1.png\"}],[\"link\",{\"rel\":\"preconnect\",\"href\":\"https://fonts.gstatic.com\"}],[\"link\",{\"rel\":\"dns-prefetch\",\"href\":\"https://fonts.gstatic.com\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"橘络,人物分析,群聊分析,私人聊天,关系分析\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-capable\",\"content\":\"yes\"}],[\"meta\",{\"name\":\"apple-mobile-web-app-status-bar-style\",\"content\":\"black\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#3eaf7c\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
