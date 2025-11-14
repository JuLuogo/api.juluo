import comp from "D:/github/api.juluo/.vuepress/.temp/pages/tools/terrasavr-plus.html.vue"
const data = JSON.parse("{\"path\":\"/tools/terrasavr-plus.html\",\"title\":\"Terrasavr Plus - 字符存档编辑器\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1763123571000,\"contributors\":[{\"name\":\"JuLuogo\",\"username\":\"JuLuogo\",\"email\":\"1576586736@qq.com\",\"commits\":1,\"url\":\"https://github.com/JuLuogo\"}],\"changelog\":[{\"hash\":\"64d8cfa6c0f9c64c89904da28f9e4c3f1f5b67bf\",\"time\":1763123571000,\"email\":\"1576586736@qq.com\",\"author\":\"JuLuogo\",\"message\":\"chore: 更新依赖模块的类型声明文件及配置\"}]},\"filePathRelative\":\"tools/terrasavr-plus.md\"}")
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
