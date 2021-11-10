<template><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1>
<p>Cocogitto comes with two standalone binaries : <code>coco</code> and <code>cog</code>.</p>
<p>Both of them and their subcommands have a <code>--help</code>  to display options and usage :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>cog --help
cog changelog --help
<span class="token comment"># And so on...</span>
</code></pre></div><p>Note that if you do not care about automatic release, changelog generation and just want
to create conventional commit message you can jump to the <RouterLink to="/home/conventional-commits.html">conventional commits section</RouterLink></p>
<h2 id="conventional-commits-with-coco" tabindex="-1"><a class="header-anchor" href="#conventional-commits-with-coco" aria-hidden="true">#</a> Conventional commits  with <code>coco</code></h2>
<p><code>coco</code> is primarily meant to be used as a replacement for the <code>git commit</code> command.
It will produce commits with messages respecting the conventional commits specification with
little effort.</p>
<p><strong>Example :</strong></p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token comment"># With git commit</span>
<span class="token function">git</span> commit -m <span class="token string">"feat: implement the parser specification"</span>

<span class="token comment"># With coco</span>
coco feat <span class="token string">"implement the parser specification"</span>
</code></pre></div><p>Using <code>coco</code> while working on a project using conventional commits is less verbose than good old git cli and prevent
typos and common mistake when writing conventional commit messages.</p>
<h2 id="repository-management-with-cog" tabindex="-1"><a class="header-anchor" href="#repository-management-with-cog" aria-hidden="true">#</a> Repository management with <code>cog</code></h2>
<p>While local commit are made with the <code>coco</code> binary, <code>cog</code> is meant to manage your repository both locally and in a
CI context. Each subcommands will be explained further in the next chapters.</p>
<table>
<thead>
<tr>
<th style="text-align:left">Command</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">check</td>
<td style="text-align:left">Verify all commit message against the conventional commit specification</td>
</tr>
<tr>
<td style="text-align:left">init</td>
<td style="text-align:left">Install cog config files</td>
</tr>
<tr>
<td style="text-align:left">edit</td>
<td style="text-align:left">Rename all invalid commit message in the repo (interactive rebase)</td>
</tr>
<tr>
<td style="text-align:left">log</td>
<td style="text-align:left">Like git log but for conventional commits</td>
</tr>
<tr>
<td style="text-align:left">verify</td>
<td style="text-align:left">Verify a single commit message</td>
</tr>
<tr>
<td style="text-align:left">changelog</td>
<td style="text-align:left">Display a changelog for a given commit oid range</td>
</tr>
<tr>
<td style="text-align:left">bump</td>
<td style="text-align:left">Commit changelog from latest tag to HEAD and create a new tag</td>
</tr>
<tr>
<td style="text-align:left">install-hook</td>
<td style="text-align:left">Add conventional git hooks to the repository</td>
</tr>
</tbody>
</table>
</template>
