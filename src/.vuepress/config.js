const {description} = require('../../package.json')
const {highlightjsPlugin} = require('vuepress-highlightjs')
const { path } = require('@vuepress/utils')

module.exports = {
    title: 'Cocogitto',
    docsDir: 'docs',
    editLink: true,
    base: "/",
    description: description,
    markdown: {
        code: {
            lineNumbers: false
        }
    },

    plugins: [
        highlightjsPlugin,
    ],

    head: [
        ['meta', {name: 'theme-color', content: '#f86b6a'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['meta', {property: 'og:title', content: 'Cocogitto'}],
        ['meta', {property: 'og:image', content: 'https://docs.cocogitto.io/logo.png'}],
        ['meta', {property: 'twitter:card', content: 'https://docs.cocogitto.io/logo.png'}],
        ['meta', {property: 'og:description', content: 'The conventional commits toolbox'}],
        ['meta', {property: 'og:width', content: '100'}],
    ],

    theme: path.resolve(__dirname, './theme'),

    themeConfig: {
        logo: 'logo.png',
        repo: 'https://github.com/cocogitto/cocogitto',
        docsRepo: 'https://github.com/cocogitto/website',
        docsDir: 'src',
        lastUpdated: true,
        navbar: [
            {
                link: '/coco_guide/',
                text: 'Coco guide',
            },
            {
                link: '/cog_guide/',
                text: 'Cog guide',
            },
            {
                link: '/config/',
                text: 'Configuration reference',
            },
            {
                link: '/template/',
                text: 'Template reference',
            }
        ],
        // sidebar object
        // pages under different sub paths will use different sidebar
        sidebar: [
            {
                link: '/coco_guide/',
                text: 'Coco guide',
            },
            {
                link: '/cog_guide/',
                text: 'Cog guide',
            },
            {
                link: '/config/',
                text: 'Configuration reference',
            },
            {
                link: '/template/',
                text: 'Changelog template reference',
            }
        ],

        plugins: [
            '@vuepress/plugin-back-to-top',
            '@vuepress/plugin-medium-zoom',
        ]
    },
}
