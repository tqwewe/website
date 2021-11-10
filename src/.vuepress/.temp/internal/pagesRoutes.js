import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/index.md"]],
  ["v-6beb5861","/coco_guide/","",["/coco_guide/index.html","/coco_guide/README.md"]],
  ["v-94d140a0","/cog_guide/","Managing commit history",["/cog_guide/index.html","/cog_guide/README.md"]],
  ["v-ba934fd8","/config/","Configuration reference",["/config/index.html","/config/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
