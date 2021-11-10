import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/okno/_Workshop/MyRepos/cocogitto_org/website/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/okno/_Workshop/MyRepos/cocogitto_org/website/src/.vuepress/theme/layouts/Layout.vue")),
}
