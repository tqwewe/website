export const data = {
  "key": "v-055b5ca3",
  "path": "/guide/versioning.html",
  "title": "Automatic versioning",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "Auto bump",
      "slug": "auto-bump",
      "children": []
    },
    {
      "level": 2,
      "title": "Bump hooks",
      "slug": "bump-hooks",
      "children": [
        {
          "level": 3,
          "title": "Pre bump hooks",
          "slug": "pre-bump-hooks",
          "children": []
        },
        {
          "level": 3,
          "title": "Post bump hooks",
          "slug": "post-bump-hooks",
          "children": []
        },
        {
          "level": 3,
          "title": "Version DSL",
          "slug": "version-dsl",
          "children": []
        },
        {
          "level": 3,
          "title": "Builtin git hooks",
          "slug": "builtin-git-hooks",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "guide/versioning.md",
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
