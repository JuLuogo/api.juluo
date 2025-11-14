import comp from "D:/github/api.juluo/.vuepress/.temp/pages/resources/index.html.vue"
const data = JSON.parse("{\"path\":\"/resources/\",\"title\":\"资源库\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1763123194000,\"contributors\":[{\"name\":\"JuLuogo\",\"username\":\"JuLuogo\",\"email\":\"1576586736@qq.com\",\"commits\":1,\"url\":\"https://github.com/JuLuogo\"}],\"changelog\":[{\"hash\":\"5365c993391bdde0d2f81570e62ca4e1b192871a\",\"time\":1763123194000,\"email\":\"1576586736@qq.com\",\"author\":\"JuLuogo\",\"message\":\"feat(docs): 新增橘络人物分析文档和资源库\"}]},\"filePathRelative\":\"resources/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
