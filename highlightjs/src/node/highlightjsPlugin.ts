import type { Plugin } from '@vuepress/core'
import hljs from 'highlight.js/lib/core';
import bash from './custom_bash';
import conventionalCommit from './conventional_commit_spec';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('conventional_commit', conventionalCommit);

export const highlightjsPlugin: Plugin<{ }> = () => ({
    name: '@vuepress/plugin-highlightjs',
    async extendsMarkdown(md) {
        md.options.highlight = ( code) => {
            return hljs.highlightAuto(code).value
        }
    },
})