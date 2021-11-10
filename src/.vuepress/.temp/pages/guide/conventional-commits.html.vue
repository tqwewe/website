<template><h2 id="conventional-commits" tabindex="-1"><a class="header-anchor" href="#conventional-commits" aria-hidden="true">#</a> Conventional commits</h2>
<p><code>coco</code> allows you to easily create commits respecting the
<a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank" rel="noopener noreferrer">conventional commits specification<OutboundLink/></a>. It comes with a set of predefined
arguments named after conventional commit types and
<a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noopener noreferrer">Angular commit convention<OutboundLink/></a>
:  <code>feat</code>, <code>fix</code>, <code>style</code>, <code>build</code>, <code>refactor</code>, <code>ci</code>, <code>test</code>, <code>perf</code>, <code>chore</code>, <code>revert</code>, <code>docs</code>.</p>
<p>As described in the specification conventional commits messages are structured as follows :</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>&lt;type>[optional scope]: &lt;description>

[optional body]

[optional footer(s)]
</code></pre></div><p>All <code>coco</code> commit type subcommands follows the same structure :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>coco <span class="token punctuation">{</span>type<span class="token punctuation">}</span> <span class="token punctuation">{</span>message<span class="token punctuation">}</span> <span class="token punctuation">[</span>optional scope<span class="token punctuation">]</span> <span class="token punctuation">[</span>optional body<span class="token punctuation">]</span> <span class="token punctuation">[</span>optional footer<span class="token punctuation">]</span>
</code></pre></div><p>You need to remember that <code>coco</code> commit scope comes after the commit description.
This allows using positional arguments instead of typing flags (ex: <code>coco -t {type} -s {scope} -m {message}... and so on</code>).</p>
<p><strong>Example :</strong>
If you want to create the following commit : <code>feat: add awesome feature</code> :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>coco feat <span class="token string">"add awesome feature"</span>
</code></pre></div><h3 id="helpful-error-messages" tabindex="-1"><a class="header-anchor" href="#helpful-error-messages" aria-hidden="true">#</a> Helpful error messages</h3>
<p>Using <code>coco</code> should prevent a wide range of error in your conventional commit message. But if you still made a mistake
<code>coco</code> will display an error explaining what went wrong :</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>❯ coco feat "add ability to parse arrays" "sco(pe"
Error: A scope value cannot contains inner parenthesis

Caused by:
     --> 1:9
      |
    1 | feat(sco(pe): add ability to parse arrays
      |         ^---
      |
      = expected no_parenthesis
</code></pre></div><h3 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h3>
<p>All <code>coco</code> argument are positional except the optional <code>-B</code> flag used to create breaking changes commits :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>coco fix -B <span class="token string">"add fix a nasty bug"</span> cli
</code></pre></div><p>This would create the following <a href="https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with--to-draw-attention-to-breaking-change" target="_blank" rel="noopener noreferrer">breaking change<OutboundLink/></a>
commit : <code>fix(cli)!: fix a nasty bug</code>.</p>
<p><code>coco</code> use the <code>!</code> notation to denote breaking changes commit because it can be easily seen in your git log, however if
you manually create breaking changes commits with <a href="https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer" target="_blank" rel="noopener noreferrer">the footer notation<OutboundLink/></a>
cocogitto tools will still pick them.</p>
</template>
