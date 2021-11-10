export const data = {
  "key": "v-981704f0",
  "path": "/config_reference/",
  "title": "Config",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "foo",
      "slug": "foo",
      "children": []
    },
    {
      "level": 2,
      "title": "bar",
      "slug": "bar",
      "children": []
    }
  ],
  "filePathRelative": "config_reference/README.md",
  "git": {
    "contributors": []
  }
}

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
