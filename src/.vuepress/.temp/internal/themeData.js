export const themeData = {
  "logo": "logo.png",
  "repo": "https://github.com/oknozor/cocogitto",
  "editLinks": false,
  "editLinkText": "",
  "lastUpdated": false,
  "navbar": [
    {
      "link": "/coco_guide/",
      "text": "Coco guide"
    },
    {
      "link": "/cog_guide/",
      "text": "Cog guide"
    },
    {
      "link": "/config/",
      "text": "Configuration reference"
    }
  ],
  "sidebar": [
    {
      "link": "/coco_guide/",
      "text": "Coco guide"
    },
    {
      "link": "/cog_guide/",
      "text": "Cog guide"
    },
    {
      "link": "/config/",
      "text": "Configuration reference"
    }
  ],
  "plugins": [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom"
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
