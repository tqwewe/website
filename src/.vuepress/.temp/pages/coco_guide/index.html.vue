<template><h2 id="conventional-commits" tabindex="-1"><a class="header-anchor" href="#conventional-commits" aria-hidden="true">#</a> Conventional commits</h2>
<p><code>coco</code> allows you to easily create commits respecting the
<a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank" rel="noopener noreferrer">conventional commits specification<OutboundLink/></a>. It comes with a set of predefined
arguments named after conventional commit types and
<a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noopener noreferrer">Angular commit convention<OutboundLink/></a>
: (<code>feat</code>, <code>fix</code>, <code>style</code>, <code>build</code>, <code>refactor</code>, <code>ci</code>, <code>test</code>, <code>perf</code>, <code>chore</code>, <code>revert</code>, <code>docs</code>).</p>
<p>As described in the specification conventional commits messages are structured as follows :</p>
<div class="language-conventional ext-conventional"><pre v-pre class="language-conventional"><code><span class="hljs-string">&lt;type&gt;</span>[<span class="hljs-literal">optional</span> scope]: <span class="hljs-string">&lt;description&gt;</span>

[<span class="hljs-literal">optional</span> body]

[<span class="hljs-literal">optional</span> footer(s)]
</code></pre></div><p>All <code>coco</code> commit type subcommands follows the same structure :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>coco <span class="hljs-string">&lt;type&gt;</span> <span class="hljs-string">&lt;message&gt;</span> [<span class="hljs-literal">optional</span> scope] [<span class="hljs-literal">optional</span> body] [<span class="hljs-literal">optional</span> footer]
</code></pre></div><p>You need to remember that <code>coco</code> commit scope comes after the commit description.
This allows using positional arguments instead of typing a scope flag every time.</p>
<p><strong>Example :</strong></p>
<p>If you want to create the following commit : <code>feat: add awesome feature</code> :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="hljs-comment"># With coco</span>
<span class="hljs-built_in">coco</span> feat <span class="hljs-string">&quot;add awesome feature&quot;</span>
<span class="hljs-comment"># With git</span>
<span class="hljs-built_in">git</span> commit -m <span class="hljs-string">&quot;add awesome feature&quot;</span>
</code></pre></div><h2 id="helpful-error-messages" tabindex="-1"><a class="header-anchor" href="#helpful-error-messages" aria-hidden="true">#</a> Helpful error messages</h2>
<p>Using <code>coco</code> should prevent a wide range of error in your conventional commit message. But if you still made a mistake
<code>coco</code> will display an error explaining what went wrong :</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>❯ <span class="hljs-built_in">coco</span> feat <span class="hljs-string">&quot;add ability to parse arrays&quot;</span> <span class="hljs-string">&quot;sco(pe&quot;</span>
Error: A scope value cannot contains inner parenthesis

Caused by:
     --&gt; 1:9
      |
    1 | feat(sco(pe): add ability to parse arrays
      |         ^---
      |
      = expected no_parenthesis
</code></pre></div><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h2>
<p>All <code>coco</code> argument are positional except the optional <code>-B</code> flag used to create breaking changes commits :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="hljs-built_in">coco</span> fix -B <span class="hljs-string">&quot;add fix a nasty bug&quot;</span> cli
</code></pre></div><p>This would create the following <a href="https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with--to-draw-attention-to-breaking-change" target="_blank" rel="noopener noreferrer">breaking change<OutboundLink/></a>
commit : <code>fix(cli)!: fix a nasty bug</code>.</p>
<p><code>coco</code> use the <code>!</code> notation to denote breaking changes commit because it can be easily seen in your git log, however if
you manually create breaking changes commits with <a href="https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer" target="_blank" rel="noopener noreferrer">the footer notation<OutboundLink/></a>
cocogitto tools will still pick them.</p>
<h2 id="commit-body-and-footers" tabindex="-1"><a class="header-anchor" href="#commit-body-and-footers" aria-hidden="true">#</a> Commit Body and footers</h2>
<p>If you need to create more complex commit messages with body and footers use the <code>--edit</code> flag.</p>
<p><strong>Example:</strong></p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="hljs-built_in">coco</span> refactor -e -B <span class="hljs-string">&quot;drop support for Node 6&quot;</span> runtime 
</code></pre></div><p>This would open the following commit message template in your <code>$EDITOR</code> of choice :</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code><span class="hljs-comment"># Enter the commit message for your changes.</span>
<span class="hljs-comment"># Lines starting with # will be ignored, and empty body/footer are allowed.</span>
<span class="hljs-comment"># Once you are done, save the changes and exit the editor.</span>
<span class="hljs-comment"># Remove all non-comment lines to abort.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># WARNING: This will be marked as a breaking change!</span>
refactor(runtime): drop support <span class="hljs-keyword">for</span> Node 6

<span class="hljs-comment"># Message body</span>


<span class="hljs-comment"># Message footer</span>
<span class="hljs-comment"># For example, foo: bar</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Upon save a commit will be created with the body and footer typed.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>There are to kind of footer separators in conventional commits : <code>token: message</code> and <code>token #message</code>.</p>
<p>Github automatically link issues prefixed with a hash.</p>
<p><strong>Example:</strong></p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>    feat(changelog): add full_hash changelog template

    Closes <span class="hljs-comment">#127</span>
</code></pre></div></div>
<h2 id="custom-commit-types" tabindex="-1"><a class="header-anchor" href="#custom-commit-types" aria-hidden="true">#</a> Custom commit types</h2>
<p>By default <code>coco</code> supports standard conventional commits type <code>feat</code>, <code>fix</code> and the angular commit types <code>build</code>, <code>ci</code>,
<code>revert</code>, <code>docs</code>, <code>test</code>, <code>style</code>, <code>chore</code>, <code>perf</code>. If you want to use more types you can add them to a file named
<code>cog.toml</code> in your repository root directory :</p>
<div class="language-toml ext-toml"><pre v-pre class="language-toml"><code><span class="hljs-comment"># An optional list of additional allowed commit type</span>
<span class="hljs-comment"># `coco {commit_type}` commit command will be generated at runtime</span>
[commit_types]
hotfix = { changelog_title = <span class="hljs-string">&quot;Hotfixes&quot;</span> }
release = { changelog_title = <span class="hljs-string">&quot;Releases&quot;</span> }
</code></pre></div><p>The above config would generate a <code>coco hotfix</code> and <code>coco release</code> subcommandsg following the same structure as the default ones.</p>
</template>
