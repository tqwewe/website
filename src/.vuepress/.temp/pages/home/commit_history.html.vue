<template><h1 id="managing-commit-history" tabindex="-1"><a class="header-anchor" href="#managing-commit-history" aria-hidden="true">#</a> Managing commit history</h1>
<p><code>cog</code> as several subcommands to examine and manipulate your commit history.</p>
<h2 id="validate-repository-history-compliance-with-the-specification" tabindex="-1"><a class="header-anchor" href="#validate-repository-history-compliance-with-the-specification" aria-hidden="true">#</a> Validate repository history compliance with the specification</h2>
<p>Running <code>cog check</code> will check your commit history against the conventional commit specification :</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>❯ cog check
No errored commits
</code></pre></div><p>Let us create an invalid commit :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit -m <span class="token string">"Your Mother Was A Hamster, And Your Father Smelt Of Elderberries"</span>
</code></pre></div><p>And check our commit history again :</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>❯ cog check
Error: ERROR - Your Mother Was A Hamster, And Your Father Smelt Of Elderberries - (c2bb56)
	cause: Missing commit type separator `:
</code></pre></div><p>Additionally, you can check your history, starting from the latest tag to HEAD using <code>from-latest-tag</code> flag.<br>
This is useful when your git repo started to use conventional commits from a certain point in history, and you
don't care about editing old commits.</p>
<h2 id="rewrite-non-compliant-commits" tabindex="-1"><a class="header-anchor" href="#rewrite-non-compliant-commits" aria-hidden="true">#</a> Rewrite non-compliant commits</h2>
<p>Once you have spotted invalid commits you can quickly fix your commit history by running <code>cog edit</code>.
This will perform an automatic rebase and let you edit each malformed commit message with your <code>$EDITOR</code>
of choice.</p>
<p><strong>Example :</strong></p>
<p><code>cog edit</code> will cycle to each malformed commit to rewrite their message :</p>
<div class="language-text ext-text"><pre v-pre class="language-text"><code># Editing commit c2bb56b93821ff34282f322be4d2231f53b9ada8
# Replace this message with a conventional commit compliant one
# Save and exit to edit the next errored commit
Your Mother Was A Hamster, And Your Father Smelt Of Elderberries
</code></pre></div><p>⚠️ Beware that using <code>cog edit</code> will modify your commit history and change the commit SHA of edited commit
and their child.</p>
<h2 id="conventional-commits-git-log" tabindex="-1"><a class="header-anchor" href="#conventional-commits-git-log" aria-hidden="true">#</a> Conventional commits git log</h2>
<p><code>cog log</code> is like <code>git log</code> but it displays additional conventional commit information, such as commit scope,
commit type etc.</p>
<p><a href="https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe" target="_blank" rel="noopener noreferrer"><img src="https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe.svg" alt="asciicast"><OutboundLink/></a></p>
<p>You can also filter the log content with the following flags (<code>cog log --help</code>) :</p>
<ul>
<li><code>-B</code> : display breaking changes only</li>
<li><code>-t</code> : filter on commit type</li>
<li><code>-a</code> : filter on commit author</li>
<li><code>-s</code> : filter on commit scope</li>
<li><code>-e</code> : ignore errors</li>
</ul>
<p>Those flag can be combined to achieve complex search in your commit history :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>cog log --author <span class="token string">"Paul Delafosse"</span> <span class="token string">"Mike Lubinets"</span> --type feat --scope cli --no-error
</code></pre></div><h3 id="changelog-summary" tabindex="-1"><a class="header-anchor" href="#changelog-summary" aria-hidden="true">#</a> Changelog summary</h3>
<p>There are two ways to generate changelog with <code>cog</code> :</p>
<ul>
<li>
<p>To your repo <code>CHANGELOG.md</code> file with <code>cog bump</code> (see: <RouterLink to="/home/versioning.html#auto-bump">auto bump</RouterLink>)</p>
</li>
<li>
<p>To stdout with <code>cog changelog</code>.</p>
<div class="language-markdown ext-md"><pre v-pre class="language-markdown"><code>❯ cog changelog

<span class="token title important"><span class="token punctuation">##</span> 0.30.0..HEAD - 2020-09-30</span>


<span class="token title important"><span class="token punctuation">###</span> Bug Fixes</span>

7f04a9 - fix ci cross build command bin args - Paul Delafosse

<span class="token title important"><span class="token punctuation">###</span> Features</span>

fc7420 - move check edit to dedicated subcommand and fix rebase - Paul Delafosse
1028d0 - remove config commit on init existing repo - Paul Delafosse

<span class="token title important"><span class="token punctuation">###</span> Refactoring</span>

d4aa61 - change config name to cog.toml - Paul Delafosse
</code></pre></div><p>You can specify a custom changelog range or tag like so :</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>  <span class="token comment"># Display the changelog between `^1` and `2.0.0`</span>
  cog changelog --at <span class="token number">2.0</span>.0

  <span class="token comment"># Display the changelog between `8806a5` and `HEAD`</span>
  <span class="token comment"># Note that shortened git oid are not supported yet for this command</span>
  cog changelog --from 8806a55727b6c1767cca5d494599623fbb5dd1dd

  <span class="token comment"># Display the changelog between `8806a5` and `1.0.0`</span>
  cog changelog --from 8806a55727b6c1767cca5d494599623fbb5dd1dd --to <span class="token number">1.0</span>.0é
</code></pre></div></li>
</ul>
</template>
