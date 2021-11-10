export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "logo.png",
    "tagline": "The conventional commit toolbox",
    "actionText": "Getting Started →",
    "actionLink": "/guide/",
    "features": [
      {
        "title": "Verified commits️",
        "details": "Create conventional compliant commits at ease"
      },
      {
        "title": "Automatic Version bump and changelog",
        "details": "Automatically bump version and changelog generation with your own custom steps and workflows."
      },
      {
        "title": "Release profiles",
        "details": "Your branching model requires different steps for releases, prerelease, hotfix ? We got you covered"
      },
      {
        "title": "No dependency",
        "details": "Cocogitto has two standalone binary, the only system dependency is git"
      },
      {
        "title": "Conventional git log",
        "details": "Search your commit history matching conventional commit items such as scope and commit type."
      },
      {
        "title": "Enforce conventional commits via github actions",
        "details": "Check your commit compliance on every push to the remote and create release from your CI pipeline"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2020 Paul Delafosse"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Installation",
      "slug": "installation",
      "children": [
        {
          "level": 3,
          "title": "Cargo",
          "slug": "cargo",
          "children": []
        },
        {
          "level": 3,
          "title": "Archlinux",
          "slug": "archlinux",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Shell completions",
      "slug": "shell-completions",
      "children": []
    },
    {
      "level": 2,
      "title": "Introduction",
      "slug": "introduction",
      "children": []
    },
    {
      "level": 2,
      "title": "Conventional commits  with coco",
      "slug": "conventional-commits-with-coco",
      "children": []
    },
    {
      "level": 2,
      "title": "Repository management with cog",
      "slug": "repository-management-with-cog",
      "children": []
    }
  ],
  "filePathRelative": "index.md",
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
