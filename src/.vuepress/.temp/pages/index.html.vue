<template><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<h3 id="cargo" tabindex="-1"><a class="header-anchor" href="#cargo" aria-hidden="true">#</a> Cargo</h3>
<p>Cocogitto is available on <a href="https://crates.io/crates/cocogitto" target="_blank" rel="noopener noreferrer">crates.io<OutboundLink/></a> :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>cargo install cocogitto
</code></pre></div><h3 id="archlinux" tabindex="-1"><a class="header-anchor" href="#archlinux" aria-hidden="true">#</a> Archlinux</h3>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>yay -S cocogitto-bin
</code></pre></div><h2 id="shell-completions" tabindex="-1"><a class="header-anchor" href="#shell-completions" aria-hidden="true">#</a> Shell completions</h2>
<p>Before getting started you might want to install shell completions for <code>cog</code> and <code>coco</code> commands.
Supported shells are <code>bash</code>, <code>elvish</code>, <code>fish</code> and <code>zsh</code>.</p>
<p>Example installing completions:</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="hljs-comment"># Bash</span>
cog generate-completions bash &gt; ~/.local/share/bash-completion/completions/cog
<span class="hljs-built_in">coco</span> generate-completions bash &gt; ~/.local/share/bash-completion/completions/coco

<span class="hljs-comment"># Bash (macOS/Homebrew)</span>
cog generate-completions bash &gt; $(brew --prefix)/etc/bash_completion.d/cog.bash-completion
<span class="hljs-built_in">coco</span> generate-completions bash &gt; $(brew --prefix)/etc/bash_completion.d/coco.bash-completion

<span class="hljs-comment"># Fish</span>
<span class="hljs-built_in">mkdir</span> -p ~/.config/fish/completions
cog generate-completions fish &gt; ~/.config/fish/completions/cog.fish
<span class="hljs-built_in">coco</span> generate-completions fish &gt; ~/.config/fish/completions/coco.fish

<span class="hljs-comment"># Zsh</span>
cog generate-completions zsh &gt; ~/.zfunc/_cog
<span class="hljs-built_in">coco</span> generate-completions zsh &gt; ~/.zfunc/_coco
</code></pre></div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Cocogitto comes with two standalone binaries : <code>coco</code> and <code>cog</code>.</p>
<p>Both of them and their subcommands have a <code>--help</code>  to display options and usage :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>cog --<span class="hljs-built_in">help</span>
cog changelog --<span class="hljs-built_in">help</span>
<span class="hljs-comment"># And so on...</span>
</code></pre></div><p>Note that if you do not care about automatic release, changelog generation and just want
to create conventional commit message you can jump to the <RouterLink to="/src/coco_guide/conventional-commits.html">conventional commits section</RouterLink></p>
<h2 id="conventional-commits-with-coco" tabindex="-1"><a class="header-anchor" href="#conventional-commits-with-coco" aria-hidden="true">#</a> Conventional commits  with <code>coco</code></h2>
<p><code>coco</code> is primarily meant to be used as a replacement for the <code>git commit</code> command.
It will produce commits with messages respecting the conventional commits specification with
little effort.</p>
<p><strong>Example :</strong></p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="hljs-comment"># With git commit</span>
<span class="hljs-built_in">git</span> commit -m <span class="hljs-string">&quot;feat: implement the parser specification&quot;</span>

<span class="hljs-comment"># With coco</span>
<span class="hljs-built_in">coco</span> feat <span class="hljs-string">&quot;implement the parser specification&quot;</span>
</code></pre></div><p>Using <code>coco</code> while working on a project using conventional commits is less verbose than good old git cli and prevent
typos and common mistake when writing conventional commit messages.</p>
<h2 id="repository-management-with-cog" tabindex="-1"><a class="header-anchor" href="#repository-management-with-cog" aria-hidden="true">#</a> Repository management with <code>cog</code></h2>
<p>While local commit are made with the <code>coco</code> binary, <code>cog</code> is meant to manage your repository both locally and in a
CI context. For detailed information about each command see.</p>
</template>
