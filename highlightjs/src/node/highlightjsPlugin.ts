import type {Plugin} from '@vuepress/core'
import hljs from 'highlight.js/lib/core';
import toml from 'highlight.js/lib/languages/ini';
import markdown from 'highlight.js/lib/languages/markdown';
import bash from './bash_with_coco';
import git_log from './git_log';
import conventionalCommit from './conventional_commit_spec';
import editor from "./editor";

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('conventional', conventionalCommit);
hljs.registerLanguage('toml', toml);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('git', git_log);
hljs.registerLanguage('editor', editor);

export const highlightjsPlugin: Plugin<{}> = () => ({
    name: '@vuepress/plugin-highlightjs',
    async extendsMarkdown(md) {
        md.options.highlight = (code, lang) => {
            if (lang == "text") {
                return code;
            } else {
                return hljs.highlight(code, {language: lang, ignoreIllegals: true}).value
            }
        }
    },
})