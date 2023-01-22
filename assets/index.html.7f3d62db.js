import{r as l,o as i,c,a as s,b as n,t as r,F as p,e as a,d as e}from"./app.79d3541f.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=a(`<h2 id="repository-initialization" tabindex="-1"><a class="header-anchor" href="#repository-initialization" aria-hidden="true">#</a> Repository initialization</h2><p>To get the most out of cocogitto you need to have a <code>cog.toml</code> config at the root of your repository. You can create this file manually or generate the default one with <code>cog init</code>.</p><h3 id="create-a-new-repository" tabindex="-1"><a class="header-anchor" href="#create-a-new-repository" aria-hidden="true">#</a> Create a new repository</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">mkdir</span> my_repo &amp;&amp; cd my_repo
<span class="hljs-built_in">cog</span> init
</code></pre></div><p><code>cog init</code> works like <code>git init</code> except it create a template <code>cog.toml</code> config file, and an initial commit with the following message : <code>chore: initial commit</code>.</p><p>You can specify the target path of the repository you want to create :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> init my_repo
</code></pre></div><h3 id="initialize-an-existing-repo" tabindex="-1"><a class="header-anchor" href="#initialize-an-existing-repo" aria-hidden="true">#</a> Initialize an existing repo</h3><p>Running <code>cog init</code> on an existing repository will just create a template configuration without creating any commit :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">git</span> init my_repo &amp;&amp; cd my_repo
<span class="hljs-built_in">cog</span> init
</code></pre></div><div class="language-bash ext-sh"><pre class="language-bash"><code>\u276F <span class="hljs-built_in">git</span> status
On branch master
Changes to be committed:
  (use <span class="hljs-string">&quot;git restore --staged &lt;file&gt;...&quot;</span> to unstage)
	new file:   cog.toml
</code></pre></div><h2 id="conventional-commits" tabindex="-1"><a class="header-anchor" href="#conventional-commits" aria-hidden="true">#</a> Conventional commits</h2>`,12),g=s("code",null,"cog commit",-1),m=e(" allows you to easily create commits respecting the "),b={href:"https://www.conventionalcommits.org/en/v1.0.0/",target:"_blank",rel:"noopener noreferrer"},f=e("conventional commits specification"),v=e(". It comes with a set of predefined arguments named after conventional commit types and "),j={href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines",target:"_blank",rel:"noopener noreferrer"},_=e("Angular commit convention"),y=a(" : (<code>feat</code>, <code>fix</code>, <code>style</code>, <code>build</code>, <code>refactor</code>, <code>ci</code>, <code>test</code>, <code>perf</code>, <code>chore</code>, <code>revert</code>, <code>docs</code>).",23),k=a(`<p>As described in the specification conventional commits messages are structured as follows :</p><div class="language-conventional ext-conventional"><pre class="language-conventional"><code><span class="hljs-string">&lt;type&gt;</span>[<span class="hljs-literal">optional</span> scope]: <span class="hljs-string">&lt;description&gt;</span>

[<span class="hljs-literal">optional</span> body]

[<span class="hljs-literal">optional</span> footer(s)]
</code></pre></div><p>All <code>cog commit</code> type subcommands follow the same structure :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> commit [FLAGS] &lt;type&gt; &lt;message&gt; [scope]
</code></pre></div><p>Note that the commit scope comes after the commit description. This allows using positional arguments instead of typing a scope flag every time.</p><p><strong>Example :</strong></p><p>If you want to create the following commit : <code>feat: add awesome feature</code> :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-comment"># With cog</span>
<span class="hljs-built_in">cog</span> commit feat <span class="hljs-string">&quot;add awesome feature&quot;</span>

<span class="hljs-comment"># With git</span>
<span class="hljs-built_in">git</span> commit -m <span class="hljs-string">&quot;feat: add awesome feature&quot;</span>
</code></pre></div><h3 id="helpful-error-messages" tabindex="-1"><a class="header-anchor" href="#helpful-error-messages" aria-hidden="true">#</a> Helpful error messages</h3><p>Using <code>cog commit</code> should prevent a wide range of error in your conventional commit message. But if you still made a mistake, <code>cog</code> will display an error explaining what went wrong :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u276F <span class="hljs-built_in">cog</span> commit feat <span class="hljs-string">&quot;add ability to parse arrays&quot;</span> <span class="hljs-string">&quot;sco(pe&quot;</span>
Error: A scope value cannot contains inner parenthesis

Caused by:
     --&gt; 1:9
      |
    1 | feat(sco(pe): add ability to parse arrays
      |         ^---
      |
      = expected no_parenthesis
</code></pre></div><h3 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h3><p>All <code>cog commit</code> arguments are positional except the optional <code>-B</code> flag used to create breaking changes commits :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> commit fix -B <span class="hljs-string">&quot;add fix a nasty bug&quot;</span> cli
</code></pre></div>`,14),w=e("This would create the following "),q={href:"https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with--to-draw-attention-to-breaking-change",target:"_blank",rel:"noopener noreferrer"},x=e("breaking change"),A=e(" commit : "),E=s("code",null,"fix(cli)!: fix a nasty bug",-1),C=e("."),T=s("code",null,"cog commit",-1),P=e(" use the "),D=s("code",null,"!",-1),I=e(" notation to denote breaking changes commit because it can be easily seen in your git log, however if you manually create breaking changes commits with "),H={href:"https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer",target:"_blank",rel:"noopener noreferrer"},F=e("the footer notation"),N=e(" cocogitto tools will still pick them."),S=a(`<h3 id="commit-body-and-footers" tabindex="-1"><a class="header-anchor" href="#commit-body-and-footers" aria-hidden="true">#</a> Commit Body and footers</h3><p>If you need to create more complex commit messages with body and footers use the <code>--edit</code> flag.</p><p><strong>Example:</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> commit refactor -e -B <span class="hljs-string">&quot;drop support for Node 6&quot;</span> runtime 
</code></pre></div><p>This would open the following commit message template in your <code>$EDITOR</code> of choice :</p><div class="language-editor ext-editor line-numbers-mode"><pre class="language-editor"><code><span class="hljs-comment"># Enter the commit message for your changes.</span>
<span class="hljs-comment"># Lines starting with # will be ignored, and empty body/footer are allowed.</span>
<span class="hljs-comment"># Once you are done, save the changes and exit the editor.</span>
<span class="hljs-comment"># Remove all non-comment lines to abort.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># WARNING: This will be marked as a breaking change!</span>
refactor(runtime): drop support for Node 6

<span class="hljs-comment"># Message body</span>


<span class="hljs-comment"># Message footer</span>
<span class="hljs-comment"># For example, foo: bar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Upon save a commit will be created with the body and footer typed.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>There are to kind of footer separators in conventional commits : <code>token: message</code> and <code>token #message</code>.</p><p>GitHub automatically link issues prefixed with a hash.</p><p><strong>Example:</strong></p><div class="language-text ext-text"><pre class="language-text"><code>    feat(changelog): add full_hash changelog template

    Closes #127
</code></pre></div></div><h3 id="custom-commit-types" tabindex="-1"><a class="header-anchor" href="#custom-commit-types" aria-hidden="true">#</a> Custom commit types</h3><p>By default <code>cog commit</code> supports standard conventional commits type <code>feat</code>, <code>fix</code> plus the angular commit types: <code>build</code>, <code>ci</code>, <code>revert</code>, <code>docs</code>, <code>test</code>, <code>style</code>, <code>chore</code>, <code>perf</code>. If you want to use more types you can add them to a file named <code>cog.toml</code> in your repository root directory :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[commit_types]</span>
<span class="hljs-attr">hotfix</span> = { changelog_title = <span class="hljs-string">&quot;Hotfixes&quot;</span> }
<span class="hljs-attr">release</span> = { changelog_title = <span class="hljs-string">&quot;Releases&quot;</span> }
</code></pre></div><p>The above config would generate a <code>cog commit hotfix</code> and <code>cog commit release</code> subcommands following the same structure as the default ones.</p><h3 id="deal-with-merge-commits" tabindex="-1"><a class="header-anchor" href="#deal-with-merge-commits" aria-hidden="true">#</a> Deal with merge commits</h3><p>By default, git will write the following message to merge commit : <code>Merge my &#39;branch&#39;</code>. These merge commits do not respect the Conventional Commits specification, and we strongly advise avoiding them by setting the following in your <code>.gitconfig</code> :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[merge]</span>
  <span class="hljs-attr">ff</span> = <span class="hljs-literal">on</span>ly
</code></pre></div><p>That said you can simply make Cocogitto ignore merge commits by setting the following in your <code>cog.toml</code>:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">ignore_merge_commits</span> = <span class="hljs-literal">true</span>
</code></pre></div><h2 id="check-commit-history" tabindex="-1"><a class="header-anchor" href="#check-commit-history" aria-hidden="true">#</a> Check commit history</h2><p>Running <code>cog check</code> will check your commit history against the conventional commit specification :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u276F <span class="hljs-built_in">cog</span> check
No errored commits
</code></pre></div><p>Let us create an invalid commit :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">git</span> commit -m <span class="hljs-string">&quot;Your Mother Was A Hamster, And Your Father Smelt Of Elderberries&quot;</span>
</code></pre></div><p>And check our commit history again :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u276F <span class="hljs-built_in">cog</span> check
Error:
Found 1 non compliant commits in db5151..HEAD:

________________________________________________________

Errored commit: db5151486a41f1b694fd8f90144dd02c87268988 &lt;Paul Delafosse&gt;
	Commit message: <span class="hljs-string">&#39;Your Mother Was A Hamster, And Your Father Smelt Of Elderberries&#39;</span>
	Error: Missing commit type separator \`:\`
	
	Caused by:
	     --&gt; 1:5
	      |
	    1 | Your Mother Was A Hamster, And Your Father Smelt Of Elderberries
	      |     ^---
	      |
	      = expected scope or type_separator
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can check your history, starting from the latest tag using <code>--from-latest-tag</code> or <code>-l</code> flag.<br> This is useful when your git repo started to use conventional commits from a certain point in history and you don&#39;t care about editing old commits.</p></div><h2 id="built-in-git-hooks" tabindex="-1"><a class="header-anchor" href="#built-in-git-hooks" aria-hidden="true">#</a> Built-in git hooks</h2>`,26),z=e("To protect your commit history, and your git remote, "),O=s("code",null,"cog",-1),R=e(" have builtins "),G={href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks",target:"_blank",rel:"noopener noreferrer"},B=e("git hooks"),M=e("."),Y=a(`<p>You can install them all by running :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> install-hook all
</code></pre></div><p>Or one by one, specifying the hook name :</p><p><strong>Pre-push hook:</strong></p><p>Enabling this hook will run <code>cog check</code> before pushing to remote.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> install-hooks pre-push
</code></pre></div><p><strong>Pre-commit hook:</strong></p><p>Enabling this hook will run <code>cog verify</code> before creating a new commit.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> install-hook commit-msg
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This hooks will apply on standard git commit as well. If you need to bypass them use the <code>--no-verify</code> flag.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">git</span> commit -m <span class="hljs-string">&quot;WIP&quot;</span> --no-verify
</code></pre></div></div><h2 id="sandbox" tabindex="-1"><a class="header-anchor" href="#sandbox" aria-hidden="true">#</a> Sandbox</h2><p><code>cog verify</code> checks an arbitrary input string against the conventional commit specification. It will not create any commit.</p><p><strong>Example:</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u276F <span class="hljs-built_in">cog</span> verify <span class="hljs-string">&quot;Your Mother Was A Hamster, And Your Father Smelt Of Elderberries&quot;</span>
Error: Missing commit type separator \`:\`

Caused by:
     --&gt; 1:5
      |
    1 | Your Mother Was A Hamster, And Your Father Smelt Of Elderberries
      |     ^---
      |
      = expected scope or type_separator
</code></pre></div><h2 id="rewrite-non-compliant-commits" tabindex="-1"><a class="header-anchor" href="#rewrite-non-compliant-commits" aria-hidden="true">#</a> Rewrite non-compliant commits</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Using <code>cog edit</code> will modify your commit history and change the commit SHA of edited commit and their child.</p></div><p>Once you have spotted invalid commits you can quickly fix your commit history by running <code>cog edit</code>. This will perform an automatic rebase, cycling through each malformed commit, and letting you edit them with your <code>$EDITOR</code> of choice.</p><p><strong>Example :</strong></p><div class="language-editor ext-editor line-numbers-mode"><pre class="language-editor"><code><span class="hljs-comment"># Editing commit c2bb56b93821ff34282f322be4d2231f53b9ada8</span>
<span class="hljs-comment"># Replace this message with a conventional commit compliant one</span>
<span class="hljs-comment"># Save and exit to edit the next errored commit</span>
Your Mother Was A Hamster, And Your Father Smelt Of Elderberries
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use the <code>--from-latest-tag</code> or <code>-l</code> to edit only commits since the latest tag in your repository.</p></div><h2 id="conventional-commit-log" tabindex="-1"><a class="header-anchor" href="#conventional-commit-log" aria-hidden="true">#</a> Conventional commit log</h2><p><code>cog log</code> is just like <code>git log</code> but it displays additional conventional commit information, such as commit scope, commit type etc.</p>`,22),W={href:"https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe",target:"_blank",rel:"noopener noreferrer"},L=s("img",{src:"https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe.svg",alt:"asciicast"},null,-1),V=a(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can filter the log content with the following flags :</p><ul><li><code>-B</code> : display breaking changes only</li><li><code>-t</code> : filter on commit types</li><li><code>-a</code> : filter on commit authors</li><li><code>-s</code> : filter on commit scopes</li><li><code>-e</code> : ignore non compliant commits</li></ul><p>Those flag can be combined to achieve complex search in your commit history :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> log --author <span class="hljs-string">&quot;Paul Delafosse&quot;</span> <span class="hljs-string">&quot;Mike Lubinets&quot;</span> --type feat --scope cli --no-error
</code></pre></div></div><h2 id="changelogs" tabindex="-1"><a class="header-anchor" href="#changelogs" aria-hidden="true">#</a> Changelogs</h2><p><code>cog changelog</code> can generate changelog automatically.</p><p>Let&#39;s assume the following history :</p><div class="language-git ext-git"><pre class="language-git"><code>*<span class="hljs-title function_ invoke__"> e3ff26a </span>- <span class="hljs-string">(HEAD -&gt; master)</span><span class="hljs-keyword"> feat!: </span>implement parser specification <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>
*<span class="hljs-title function_ invoke__"> 78dedea </span>-<span class="hljs-keyword"> feat: </span>a commit <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>
*<span class="hljs-title function_ invoke__"> c361eea </span>-<span class="hljs-keyword"> feat: </span>say hello to the world <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>
*<span class="hljs-title function_ invoke__"> 6d014b4 </span>-<span class="hljs-keyword"> chore: </span>initial commit <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>
</code></pre></div><p>Let us now get a changelog :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> changelog
</code></pre></div><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="hljs-section">## 0.2.0 - 2021-11-10</span>
<span class="hljs-section">#### Features</span>
<span class="hljs-bullet">-</span> <span class="hljs-strong">**(hello)**</span> say hello to the galaxy - (da4af95) - Paul Delafosse
<span class="hljs-section">#### Refactoring</span>
<span class="hljs-bullet">-</span> <span class="hljs-strong">**(hello)**</span> say hello to the martians - (22db158) - Paul Delafosse
<span class="hljs-bullet">-</span> - -
<span class="hljs-section">## 0.1.0 - 2021-11-10</span>
<span class="hljs-section">#### Features</span>
<span class="hljs-bullet">-</span> implement parser specification - (e3ff26a) - Paul Delafosse
<span class="hljs-bullet">-</span> a commit - (78dedea) - Paul Delafosse
<span class="hljs-bullet">-</span> say hello to the world - (c361eea) - Paul Delafosse
</code></pre></div><p>As you can see above a changelog is generated for each semver compliant tag.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can specify a custom changelog range or tag like so :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-comment"># Display the changelog between \`^1\` and \`2.0.0\`</span>
<span class="hljs-built_in">cog</span> changelog --at 2.0.0

<span class="hljs-comment"># From \`8806a5\` to \`1.0.0\`</span>
<span class="hljs-built_in">cog</span> changelog 8806a5..1.0.0

<span class="hljs-comment"># From \`8806a5\` to \`HEAD\`</span>
<span class="hljs-built_in">cog</span> changelog 8806a55..

<span class="hljs-comment"># From first commit to \`1.0.0\`</span>
<span class="hljs-built_in">cog</span> changelog 8806a5..1.0.0
</code></pre></div></div><h3 id="built-in-templates" tabindex="-1"><a class="header-anchor" href="#built-in-templates" aria-hidden="true">#</a> Built-in templates</h3><p>A raw changelog is nice, but its even nicer to generate some links for repository hosted on git web platforms such as GitHub. To do this you can use the <code>--template</code> or <code>t</code> flag. Cocogitto comes with three pre built templates:</p><h4 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> <code>default</code></h4><p>The default template we saw in the previous section</p><h4 id="full-hash" tabindex="-1"><a class="header-anchor" href="#full-hash" aria-hidden="true">#</a> <code>full_hash</code></h4><p>A changelog template tailored for GitHub releases</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> changelog --template hull_hash
</code></pre></div><div class="language-markdown ext-md"><pre class="language-markdown"><code>  #### Features
<span class="hljs-bullet">  -</span> da4af95b223bb8942ffd289d1a62d930c80d7bbd - <span class="hljs-strong">**(hello)**</span> say hello to the galaxy - @oknozor
  #### Refactoring
<span class="hljs-bullet">  -</span> 22db158f6c75aa5e9e7d4ed4a5b5af7b147453d7 - <span class="hljs-strong">**(hello)**</span> say hello to the martians - @oknozor
<span class="hljs-bullet">  -</span> - -
  #### Features
<span class="hljs-bullet">  -</span> e3ff26a8247b9690ce241e9843eea595bcac8d06 - implement parser specification - @oknozor
<span class="hljs-bullet">  -</span> 78dedeaf5e7222cd338627f7ee982e271a3f9a4c - a commit - Paul Delafosse
<span class="hljs-bullet">  -</span> c361eeae958a0a28041aecfed10091dc0e6768dd - say hello to the world - @oknozor
</code></pre></div><p>Below is the changelog as rendered by GitHub release, notice how the committer git signature as been replaced by their github username. To do that you need to tell cocogitto about your contributor&#39;s username in <code>cog.toml</code>:</p><div class="language-toml ext-toml"><pre class="language-toml"><code>  <span class="hljs-section">[changelog]</span>
  <span class="hljs-attr">authors</span> = [
      { username = <span class="hljs-string">&quot;oknozor&quot;</span>, signature = <span class="hljs-string">&quot;Paul Delafosse&quot;</span> }
  ]
</code></pre></div>`,20),$=["src"],J=a(`<h4 id="remote" tabindex="-1"><a class="header-anchor" href="#remote" aria-hidden="true">#</a> <code>remote</code></h4><p>A template generating links for web platform hosted repository.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> changelog --at 0.1.0 -t remote --remote github.com --owner oknozor --repository  cocogitto
</code></pre></div><p>As you can see below a changelog is generated with full links to issues, tags, diff and usernames according to the provided remote, owner and repository flags.</p><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="hljs-section">## [<span class="hljs-string">0.1.0</span>](<span class="hljs-link">https://github.com/oknozor/cocogitto/compare/6d014b40f552fc1ad08f574fe33355175b0783ff..0.1.0</span>) - 2021-11-11</span>
<span class="hljs-section">#### Features</span>
<span class="hljs-bullet">-</span> implement parser specification - ([<span class="hljs-string">e3ff26a</span>](<span class="hljs-link">https://github.com/oknozor/cocogitto/commit/e3ff26a8247b9690ce241e9843eea595bcac8d06</span>)) - [<span class="hljs-string">@oknozor</span>](<span class="hljs-link">https://github.com/oknozor</span>)
<span class="hljs-bullet">-</span> a commit - ([<span class="hljs-string">78dedea</span>](<span class="hljs-link">https://github.com/oknozor/cocogitto/commit/78dedeaf5e7222cd338627f7ee982e271a3f9a4c</span>)) - [<span class="hljs-string">@oknozor</span>](<span class="hljs-link">https://github.com/oknozor</span>)
<span class="hljs-bullet">-</span> say hello to the world - ([<span class="hljs-string">c361eea</span>](<span class="hljs-link">https://github.com/oknozor/cocogitto/commit/c361eeae958a0a28041aecfed10091dc0e6768dd</span>)) - [<span class="hljs-string">@oknozor</span>](<span class="hljs-link">https://github.com/oknozor</span>)
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To avoid typing the remote information and changelog template everytime you can set some default values in <code>cog.toml</code>.</p><p>Here is the config used by cocogitto itself.</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[changelog]</span>
<span class="hljs-attr">path</span> = <span class="hljs-string">&quot;CHANGELOG.md&quot;</span>
<span class="hljs-attr">template</span> = <span class="hljs-string">&quot;remote&quot;</span>
<span class="hljs-attr">remote</span> = <span class="hljs-string">&quot;github.com&quot;</span>
<span class="hljs-attr">repository</span> = <span class="hljs-string">&quot;cocogitto&quot;</span>
<span class="hljs-attr">owner</span> = <span class="hljs-string">&quot;cocogitto&quot;</span>
<span class="hljs-attr">authors</span> = [
  { signature = <span class="hljs-string">&quot;Paul Delafosse&quot;</span>, username = <span class="hljs-string">&quot;oknozor&quot;</span> },
  { signature = <span class="hljs-string">&quot;Jack Dorland&quot;</span>, username = <span class="hljs-string">&quot;jackdorland&quot;</span> },
  { signature = <span class="hljs-string">&quot;Mike Lubinets&quot;</span>, username = <span class="hljs-string">&quot;mersinvald&quot;</span> },
  { signature = <span class="hljs-string">&quot;Marcin Puc&quot;</span>, username = <span class="hljs-string">&quot;tranzystorek-io&quot;</span> },
  { signature = <span class="hljs-string">&quot;Renault Fernandes&quot;</span>, username = <span class="hljs-string">&quot;renaultfernandes&quot;</span> },
  { signature = <span class="hljs-string">&quot;Pieter Joost van de Sande&quot;</span>, username = <span class="hljs-string">&quot;pjvds&quot;</span> },
  { signature = <span class="hljs-string">&quot;orhun&quot;</span>, username = <span class="hljs-string">&quot;orhun&quot;</span> },
  { signature = <span class="hljs-string">&quot;Danny Tatom&quot;</span>, username = <span class="hljs-string">&quot;its-danny&quot;</span> },
]
</code></pre></div></div><h3 id="custom-templates" tabindex="-1"><a class="header-anchor" href="#custom-templates" aria-hidden="true">#</a> Custom templates</h3>`,7),U=e("If you are not happy with the default you can create your own changelog template. Internally cocogitto uses "),K={href:"https://tera.netlify.app/",target:"_blank",rel:"noopener noreferrer"},Q=e("tera"),X=e(" template engine to render changelogs."),Z=a(`<p>Also see <a href="../template">template reference</a>.</p><p><strong>Example:</strong></p><div class="language-tera ext-tera"><pre class="language-tera"><code>{% <span class="hljs-meta">for </span>type, typed_commits in commits | sort(attribute=<span class="hljs-string">&quot;type&quot;</span>)| group_by(attribute=<span class="hljs-string">&quot;type&quot;</span>)%}                            
#### <span class="hljs-keyword">{{ type | upper_first }}</span>
                                                                                                                        
    {% <span class="hljs-meta">for </span>scope, scoped_commits in typed_commits | group_by(attribute=<span class="hljs-string">&quot;scope&quot;</span>) %}                                      
        {% <span class="hljs-meta">for </span>commit in scoped_commits | sort(attribute=<span class="hljs-string">&quot;scope&quot;</span>) %}                                                    
            {% <span class="hljs-number">if </span>commit.author %}                                                                                      
                {% <span class="hljs-built_in">set </span>author = <span class="hljs-string">&quot;@&quot;</span> ~ commit.author %}                                                                  
            {% <span class="hljs-number">else </span>%}                                                                                                  
                {% <span class="hljs-built_in">set </span>author = commit.signature %}                                                                     
            {% <span class="hljs-number">endif </span>%}                                                                                                 
            - <span class="hljs-keyword">{{ commit.id }}</span> - **(<span class="hljs-keyword">{{ scope }}</span>)** <span class="hljs-keyword">{{ commit.summary }}</span> - <span class="hljs-keyword">{{ author }}</span>
        {% <span class="hljs-meta">endfor </span>%}                                                                                                    
    {% <span class="hljs-meta">endfor </span>%}                                                                                                        
    {% <span class="hljs-meta">for </span>commit in typed_commits | unscoped %}                                                                        
        {% <span class="hljs-number">if </span>commit.author %}                                                                                          
            {% <span class="hljs-built_in">set </span>author = <span class="hljs-string">&quot;@&quot;</span> ~ commit.author %}                                                                      
        {% <span class="hljs-number">else </span>%}                                                                                                      
            {% <span class="hljs-built_in">set </span>author = commit.signature %}                                                                         
        {% <span class="hljs-number">endif </span>%}                                                                                                     
            - <span class="hljs-keyword">{{ commit.id }}</span> - <span class="hljs-keyword">{{ commit.summary }}</span> - <span class="hljs-keyword">{{ author }}</span>
    {% <span class="hljs-meta">endfor </span>%}                                                                                                        
{% <span class="hljs-meta">endfor </span>%}                                                                                                            
</code></pre></div><h2 id="automatic-versioning" tabindex="-1"><a class="header-anchor" href="#automatic-versioning" aria-hidden="true">#</a> Automatic versioning</h2><p>The purpose of conventional commits is to be able to bump your project version and changelog automatically. Cocogitto allow you to do this with the <code>cog bump</code> command.</p><p>The <code>bump</code> subcommand will execute the following steps :</p><ol><li>Calculate the next version based on the commit types since the latest tag.</li><li>Execute a set configuration defined pre-bump hooks.</li><li>Append the changes for this version to <code>CHANGELOG.md</code>.</li><li>Create a version commit containing changes made during the previous steps.</li><li>Create a git tag on the version commit.</li><li>Execute a set of configuration defined post-bump hook.</li></ol><h3 id="auto-bump" tabindex="-1"><a class="header-anchor" href="#auto-bump" aria-hidden="true">#</a> Auto bump</h3><p><code>cog bump</code> will calculate the next version based on your commit history since the latest semver tag. Once a tag number as been calculated it will create a tagged commit containing the changelog for this new tag.</p><p><strong>Example:</strong></p><p>Assuming we are working on the following git repository :</p><div class="language-git ext-git"><pre class="language-git"><code>*<span class="hljs-title function_ invoke__"> 8e08b78 </span>- <span class="hljs-string">(HEAD -&gt; master)</span><span class="hljs-keyword"> feat: </span>another cool feature <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>
*<span class="hljs-title function_ invoke__"> 490b846 </span>-<span class="hljs-keyword"> docs: </span>add some documentation <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>
*<span class="hljs-title function_ invoke__"> 8bc0d28 </span>-<span class="hljs-keyword"> fix: </span>fix a ugly bug <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>
*<span class="hljs-title function_ invoke__"> a0c9050 </span>-<span class="hljs-keyword"> feat: </span>add awesome feature <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>
*<span class="hljs-title function_ invoke__"> 6d014b4 </span>-<span class="hljs-keyword"> chore: </span>initial commit <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>
</code></pre></div><p>Let us now create a version :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u276F <span class="hljs-built_in">cog</span> bump --auto
Warning: using <span class="hljs-string">&#39;cog bump&#39;</span> with the default configuration.
You may want to create a <span class="hljs-string">&#39;cog.toml&#39;</span> file in your project root to configure bumps.

Failed to get current version, falling back to 0.0.0
Skipping irrelevant commits:
	- docs: 1

Found feature commit 8e08b7
Found bug fix commit 8bc0d2
Found feature commit a0c905
Bumped version: ... -&gt; 0.1.0
</code></pre></div><p>If we look again at our git log :</p><div class="language-git ext-git"><pre class="language-git"><code>*<span class="hljs-title function_ invoke__"> 76c0ffd </span>- <span class="hljs-string">(HEAD -&gt; master, tag: 0.1.0)</span> chore<span class="hljs-string">(version)</span>: 0.1.0 <span class="hljs-string">(2 minutes ago)</span> <span class="hljs-meta">&lt;Paul Delafosse&gt;</span>
... 
</code></pre></div><p>Also, a <code>CHANGELOG.md</code> file have been created using the <code>default</code> template:</p><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="hljs-section"># Changelog</span>
All notable changes to this project will be documented in this file. See [<span class="hljs-string">conventional commits</span>](<span class="hljs-link">https://www.conventionalcommits.org/</span>) for commit guidelines.
<span class="hljs-bullet">-</span> - -

<span class="hljs-section">## 0.1.0 - 2021-11-11</span>
<span class="hljs-section">#### Bug Fixes</span>
<span class="hljs-bullet">-</span> fix a ugly bug - (8bc0d28) - Paul Delafosse
<span class="hljs-section">#### Documentation</span>
<span class="hljs-bullet">-</span> add some documentation - (490b846) - Paul Delafosse
<span class="hljs-section">#### Features</span>
<span class="hljs-bullet">-</span> another cool feature - (8e08b78) - Paul Delafosse
<span class="hljs-bullet">-</span> add awesome feature - (a0c9050) - Paul Delafosse

<span class="hljs-bullet">-</span> - -
Changelog generated by [<span class="hljs-string">cocogitto</span>](<span class="hljs-link">https://github.com/cocogitto/cocogitto</span>).
</code></pre></div><p>Also see <a href="/config">template config</a> if you need to change the default changelog template.</p>`,19),ss={class:"custom-container tip"},es=s("p",{class:"custom-container-title"},"TIP",-1),as=s("p",null,"Sometimes getting a version number automatically is not what you want. Cocogitto let you specify the target version with the following flags :",-1),os=a("<li><code>--auto</code> : choose the next version for you (based on feature commit, bug fixes commit and BREAKING_CHANGE commit).</li><li><code>--major</code> : increment the MAJOR version.</li><li><code>--minor</code> : increment the MINOR version.</li><li><code>--patch</code> : increment the PATCH version.</li><li><code>--version &lt;version&gt;</code> : set version manually ( ex : <code>cog bump --version 3.2.1</code>).</li>",5),ns=s("code",null,"--pre <metadata>",-1),ts=e(" : set the "),ls={href:"https://semver.org/#spec-item-9",target:"_blank",rel:"noopener noreferrer"},is=e("pre-release metatada"),cs=e("."),rs=a(`<p><strong>Example:</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> bump --major --pre <span class="hljs-string">&quot;beta.1&quot;</span>
<span class="hljs-comment"># 1.2.3 -&gt; 2.0.0-beta.1</span>
</code></pre></div>`,2),ps=a(`<p><strong>Note:</strong> <code>cog bump --auto</code> treats <code>0.y.z</code> versions specially, i.e. it will never do an auto bump to the <code>1.0.0</code> version, even if there are breaking changes. That way, you can keep adding features in the development stage and decide yourself, when your API is stable.</p><h4 id="dry-run" tabindex="-1"><a class="header-anchor" href="#dry-run" aria-hidden="true">#</a> Dry run</h4><p>If you just need to get the next version number without performing the automatic bump use the <code>--dry-run</code> flag :</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-built_in">cog</span> bump --dry-run --auto 
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The <code>dry-run</code> flag can be helpful when writing shell scritps using cocogitto. Since only the version number will output to stdout so you can do the following:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>VERSION=$(<span class="hljs-built_in">cog</span> bump --dry-run --auto) <span class="hljs-comment"># -&gt; VERSION=1.0.0</span>
</code></pre></div></div><h3 id="bump-hooks" tabindex="-1"><a class="header-anchor" href="#bump-hooks" aria-hidden="true">#</a> Bump hooks</h3><h4 id="pre-bump-hooks" tabindex="-1"><a class="header-anchor" href="#pre-bump-hooks" aria-hidden="true">#</a> Pre bump hooks</h4><p>Creating git tag automatically is great, but sometimes you need to edit some file with the new version number, or perform some additional checks before doing so.</p><p>A typical example is editing your project manifest in your package manager configuration file. You can run pre bump commands with the <code>latest</code> and <code>version</code> aliases to reference respectively the latest known tag and the target version.</p><p><strong>Example:</strong></p><p>When adding the following hooks to <code>cog.toml</code>, the hook commands will be run before creating the version commit :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-comment"># cog.toml</span>
<span class="hljs-attr">pre_bump_hooks</span> = [
    <span class="hljs-string">&quot;cargo build --release&quot;</span>,
    <span class="hljs-string">&quot;echo &#39;bumping from {{latest}} to {{version}}&#39;&quot;</span>,
    <span class="hljs-string">&quot;cargo bump {{version}}&quot;</span>,
]
</code></pre></div><p>And result in the following bump:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u276F <span class="hljs-built_in">cog</span> bump --auto
Skipping irrelevant commits:

Found feature commit 9055d9
   Compiling my_awesome_repo v0.1.0 (/home/okno/_Workshop/MyRepos/my_awesome_repo)
    Finished release [optimized] target(s) in 0.86s
bump from 0.1.0 to 0.2.0
Bumped version: 0.1.0 -&gt; 0.2.0
</code></pre></div>`,14),hs={class:"custom-container tip"},ds=s("p",{class:"custom-container-title"},"TIP",-1),us=e("If any of the pre-bump command fails cocogitto will abort the bump. Any changes made to the repository during the pre-bump phase will be stashed under "),gs=e("."),ms=a(`<p><strong>Example:</strong></p><p>cog.toml :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [
  <span class="hljs-string">&quot;cargo build --release&quot;</span>,
  <span class="hljs-string">&quot;echo &#39;bump from {{latest}} to {{version}}&#39;&quot;</span>,
  <span class="hljs-string">&quot;exit 1&quot;</span> <span class="hljs-comment"># Fail on purpose here</span>
]
</code></pre></div><p>run :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u276F <span class="hljs-built_in">cog</span> bump --auto
Skipping irrelevant commits:

Found bug fix commit a0de11
   Compiling my_awesome_repo v0.2.0 (/home/okno/_Workshop/MyRepos/my_awesome_repo)
    Finished release [optimized] target(s) in 0.22s
bump from 0.2.0 to 0.2.1
Error: prehook run \`exit 1\` failed
	All changes made during hook runs have been stashed on \`cog_bump_0.2.1\`
	you can run \`<span class="hljs-built_in">git</span> stash apply stash@0\` to restore these changes.
</code></pre></div>`,5),bs=a(`<h4 id="post-bump-hooks" tabindex="-1"><a class="header-anchor" href="#post-bump-hooks" aria-hidden="true">#</a> Post bump hooks</h4><p>Post-bump hooks works exactly like pre-bum hooks. They are run after the version has been created and are typically used to push changes to the remote, publish packages and apply branching model strategies.</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-comment"># cog.toml</span>
<span class="hljs-attr">post_bump_hooks</span> = [
    <span class="hljs-string">&quot;git push&quot;</span>,
    <span class="hljs-string">&quot;git push origin {{version}}&quot;</span>,
    <span class="hljs-string">&quot;cargo publish&quot;</span>
]
</code></pre></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>There is no rollback procedure for post-bump hook, on failure cog will abort and leave the repository in an undefined state. We are working on allowing user to define there rollback procedures, but it is not there yet.</p></div><h4 id="version-dsl" tabindex="-1"><a class="header-anchor" href="#version-dsl" aria-hidden="true">#</a> Version DSL</h4><p>It is common to bump your development branch version package manifest after creating a new release. A typical example in the java world would be to bump your maven snapshot on your development branch after a release.</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-comment"># cog.toml</span>
<span class="hljs-attr">post_bump_hooks</span> = [
    <span class="hljs-string">&quot;git push&quot;</span>,
    <span class="hljs-string">&quot;git push origin {{version}}&quot;</span>,
    <span class="hljs-string">&quot;git checkout develop&quot;</span>,
    <span class="hljs-string">&quot;git rebase master&quot;</span>,
    <span class="hljs-string">&quot;mvn versions:set -DnewVersion={{version+minor-SNAPSHOT}}&quot;</span>,
    <span class="hljs-string">&quot;cog commit chore \\&quot;bump snapshot to {{version+1minor-SNAPSHOT}}\\&quot;&quot;</span>,
    <span class="hljs-string">&quot;git push&quot;</span>,
]
</code></pre></div><p>As you can see we are bumping the manifest using a small DSL. It as only a few keywords :</p><ul><li>start with the <code>version</code> or <code>latest</code> keyword.</li><li>followed by the <code>+</code> operator.</li><li><code>major</code>, <code>minor</code> and <code>patch</code> to specify the kind of increment you want. Then an optional amount, default being one (<code>version+1minor</code> and <code>version+minor</code> being the same).</li><li>followed by any number of <code>+{amount}{kind}</code> (exemple: <code>version+2major+1patch</code>)</li><li>ended by any alphanumeric character (SemVer additional labels for pre-release and build metadata), here <code>-SNAPSHOT</code>.</li></ul><h4 id="bump-profiles" tabindex="-1"><a class="header-anchor" href="#bump-profiles" aria-hidden="true">#</a> Bump profiles</h4><p>For some branching model or release cadence you might want to bump your versions with different hooks.</p><p>To do so you can define alternate profile hooks in <code>cog.toml</code> :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[bump_profiles.hotfix]</span>
<span class="hljs-attr">pre_bump_hooks</span> = [
  <span class="hljs-comment"># Ensure we are performing a bump from the latest release branch</span>
  <span class="hljs-string">&quot;&quot;&quot;
    [[ &quot;$(git rev-parse --abbrev-ref HEAD)&quot; == &quot;release/{{latest}}&quot; ]] &amp;&amp; echo &quot;On branch release/{{latest}}&quot; || exit 1
    &quot;&quot;&quot;</span>,
]

<span class="hljs-attr">post_bump_hooks</span> = []
</code></pre></div><p>Once your custom hook profile is set you can call it with the <code>--hook-profile</code> flag :</p><div class="language-bash ext-sh"><pre class="language-bash"><code>\u276F <span class="hljs-built_in">cog</span> bump -h hotfix --auto
Skipping irrelevant commits:

Found feature commit 5b21b3
Found bug fix commit a0de11
[[ $(<span class="hljs-built_in">git</span> rev-parse --abbrev-ref HEAD) == release/0.2.0 ]] &amp;&amp; echo On branch release/0.2.0 || exit 1
On branch release/0.2.0
Bumped version: 0.2.0 -&gt; 0.3.0
</code></pre></div><p>Note that for the sake of readability in this documentation, the above example use a oneliner to check the current branch but you would probably want to can a shell script instead :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [
  <span class="hljs-string">&quot;&quot;&quot;
    sh -c &quot;./check_branch.sh&quot;
    &quot;&quot;&quot;</span>,
]
</code></pre></div><h3 id="branch-whitelist" tabindex="-1"><a class="header-anchor" href="#branch-whitelist" aria-hidden="true">#</a> Branch whitelist</h3><p>It is a common practice to bump always from the same set of branches. For instance, you might want to allow bumping only on branch <code>main</code> and branches prefixed with <code>release/</code>.</p><p>To do so add the following to your <code>cog.toml</code> :</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">branch_whitelist</span> = [
  <span class="hljs-string">&quot;main&quot;</span>,
  <span class="hljs-string">&quot;release/**&quot;</span>
]
</code></pre></div><h2 id="automatic-versioning-for-monorepo" tabindex="-1"><a class="header-anchor" href="#automatic-versioning-for-monorepo" aria-hidden="true">#</a> Automatic versioning for monorepo</h2><p>Managing versions for mono-repository is slightly different from the standard Cocogitto flow. Instead of the <a href="#automatic-versioning">standard bump steps</a> using <code>cog bump --auto</code> on a mono-repository will perform the following actions:</p><ol><li>Calculate next version for each package based on commits that changes the package content.</li><li>Calculate a global version based on the created package versions and the commit that does not belong to a specific package.</li><li>Execute global pre-bump hooks.</li><li>Execute per package pre-bump hooks.</li><li>Append the changes for each package to <code>{package_path}/CHANGELOG.md</code>.</li><li>Append global changes and a list of package version to <code>/CHANGELOG.md</code>.</li><li>Create a version commit containing changes made during the previous steps.</li><li>Create global git tag on the version commit.</li><li>Create a tag for each new package version on the version commit.</li><li>Execute per package post-bump hooks.</li><li>Execute global post-bump hooks.</li></ol><h3 id="mono-repository-bump" tabindex="-1"><a class="header-anchor" href="#mono-repository-bump" aria-hidden="true">#</a> Mono-repository bump</h3><p>When using <code>cog bump</code> in a mono-repository context, it behaves slightly differently.</p><ul><li><p><code>cog bump --auto</code>: creates a tag per changed packages since their respective latest releases and creates a global mono-repository tag.</p></li><li><p><code>cog bump</code> used why manual bump flags such as <code>--minor</code>, <code>--major</code>, <code>--patch</code> or <code>--version</code> will only create the monorepo version without bumping packages.</p></li><li><p><code>cog bump --package=my_package --auto</code> creates a single package tag from the latest package tag</p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>We strongly advise to use automatic bump whenever possible. Manual bump should only be used when there are changes that Cocogitto is not able to detect (ex: a breaking change occurring in a package via updating a global dependency).</p></div><h3 id="packages-configuration" tabindex="-1"><a class="header-anchor" href="#packages-configuration" aria-hidden="true">#</a> Packages configuration</h3><p>To set up mono-repository support you only need to define a list of package in your <code>cog.toml</code> config. Once packages are defined, <code>cog</code> will automatically scan your packages during automatic version bump.</p><p><strong>Example:</strong></p>`,31),fs=e("A real life example from "),vs={href:"https://github.com/oknozor/gill/blob/main/cog.toml",target:"_blank",rel:"noopener noreferrer"},js=e("oknozor/gill"),_s=e("."),ys=a(`<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[packages]</span>
<span class="hljs-attr">gill-app</span> = { path = <span class="hljs-string">&quot;crates/gill-app&quot;</span> }
<span class="hljs-attr">gill-authorize-derive</span> = { path = <span class="hljs-string">&quot;crates/gill-authorize-derive&quot;</span>, public_api = <span class="hljs-literal">false</span> }
<span class="hljs-attr">gill-db</span> = { path = <span class="hljs-string">&quot;crates/gill-db&quot;</span>, public_api = <span class="hljs-literal">false</span> }
<span class="hljs-attr">gill-git</span> = { path = <span class="hljs-string">&quot;crates/gill-git&quot;</span>, public_api = <span class="hljs-literal">false</span> }
<span class="hljs-attr">gill-git-server</span> = { path = <span class="hljs-string">&quot;crates/gill-git-server&quot;</span> }
<span class="hljs-attr">gill-markdown</span> = { path = <span class="hljs-string">&quot;crates/gill-markdown&quot;</span>, public_api = <span class="hljs-literal">false</span> }
<span class="hljs-attr">gill-settings</span> = { path = <span class="hljs-string">&quot;crates/gill-settings&quot;</span> }
<span class="hljs-attr">gill-syntax</span> = { path = <span class="hljs-string">&quot;crates/gill-syntax&quot;</span> }
<span class="hljs-attr">gill-web-markdown</span> = { path = <span class="hljs-string">&quot;crates/gill-web-markdown&quot;</span> }
<span class="hljs-attr">syntect-plugin</span> = { path = <span class="hljs-string">&quot;crates/syntect-plugin&quot;</span>, public_api = <span class="hljs-literal">false</span> }
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If some of your packages does not belong to your project public API use <code>public_api = false</code> to prevent <code>--auto</code> bump from updating the global project version.</p></div><h4 id="packages-hooks" tabindex="-1"><a class="header-anchor" href="#packages-hooks" aria-hidden="true">#</a> Packages hooks</h4><p>When creating a monorepo version Cocogitto will execute the pre-bump and post-bump hooks normally. Additionally, it will run <code>pre_package_bump_hooks</code> and <code>post_package_bump_hooks</code> before and after each package bump. To override these you can define per package hooks.</p><p><strong>Example:</strong></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="hljs-comment">## Pre hooks executed before each package bump, here we use a cargo command to bump rust package manifest</span>
pre_package_bump_hooks = [
    <span class="hljs-string">&quot;cargo set-version {{version}}&quot;</span>
]

[packages]
rust-package-one = { path = <span class="hljs-string">&quot;packages/rust-one&quot;</span> }
rust-package-two = { path = <span class="hljs-string">&quot;packages/rust-two&quot;</span> }
<span class="hljs-comment">## We have a java project in the mono-repository so we override the default pre-hook</span>
java-package = { path = <span class="hljs-string">&quot;packages/java-package&quot;</span>, pre_bump_hooks = [ <span class="hljs-string">&quot;mvn build&quot;</span> ] }
</code></pre></div><h3 id="bump-hook-recipes" tabindex="-1"><a class="header-anchor" href="#bump-hook-recipes" aria-hidden="true">#</a> Bump hook recipes</h3><h4 id="cargo-library-projects" tabindex="-1"><a class="header-anchor" href="#cargo-library-projects" aria-hidden="true">#</a> Cargo library projects</h4><p>A recipe for Cargo projects with a git-ignored <code>Cargo.lock</code> file, aka library projects.</p><p>Prerequisites:</p><ul><li><code>cargo-edit</code></li></ul><p>Hooks:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [
  <span class="hljs-string">&quot;cargo build --release&quot;</span>,          <span class="hljs-comment"># verify the project builds</span>
  <span class="hljs-string">&quot;cargo set-version {{version}}&quot;</span>,  <span class="hljs-comment"># bump version in Cargo.toml</span>
]
<span class="hljs-attr">post_bump_hooks</span> = [
  <span class="hljs-string">&quot;git push&quot;</span>,
  <span class="hljs-string">&quot;git push {{version}}&quot;</span>,
]
</code></pre></div><h4 id="cargo-executable-projects" tabindex="-1"><a class="header-anchor" href="#cargo-executable-projects" aria-hidden="true">#</a> Cargo executable projects</h4><p>A recipe for Cargo projects with a managed <code>Cargo.lock</code> file, aka executable projects. Notably, the version bump is also included in the lockfile by running <code>cargo check</code> and then staging the change before creating the bump commit.</p><p>Prerequisites:</p><ul><li><code>cargo-edit</code></li></ul><p>Hooks:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [
  <span class="hljs-string">&quot;cargo build --release&quot;</span>,          <span class="hljs-comment"># verify the project builds</span>
  <span class="hljs-string">&quot;cargo set-version {{version}}&quot;</span>,  <span class="hljs-comment"># bump version in Cargo.toml</span>
  <span class="hljs-string">&quot;cargo check --release&quot;</span>,
  <span class="hljs-string">&quot;git add :/Cargo.lock&quot;</span>,           <span class="hljs-comment"># stage version bump in Cargo.lock</span>
]
<span class="hljs-attr">post_bump_hooks</span> = [
  <span class="hljs-string">&quot;git push&quot;</span>,
  <span class="hljs-string">&quot;git push {{version}}&quot;</span>,
]
</code></pre></div><h4 id="java-maven-projects" tabindex="-1"><a class="header-anchor" href="#java-maven-projects" aria-hidden="true">#</a> Java Maven projects</h4><p>A recipe for Java Maven projects. Notably, the version bump is also included in the <code>pom.xml</code> project manifest by running <code>mvn versions:set</code> and then staging the change before creating the bump commit.</p><p>You can also run <code>mvn deploy</code> if this phase is configured in your <code>pom.xml</code>.</p><p>Hooks:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [
  <span class="hljs-string">&quot;mvn versions:set -DnewVersion={{version}}&quot;</span>,
  <span class="hljs-string">&quot;mvn clean package&quot;</span>,
]

<span class="hljs-attr">post_bump_hooks</span> = [
  <span class="hljs-string">&quot;mvn deploy&quot;</span>, <span class="hljs-comment"># Optional</span>
  <span class="hljs-string">&quot;git push origin {{version}}&quot;</span>,
  <span class="hljs-string">&quot;git push&quot;</span>
]

</code></pre></div><h2 id="tag-prefix" tabindex="-1"><a class="header-anchor" href="#tag-prefix" aria-hidden="true">#</a> Tag prefix</h2>`,25),ks=e("It is common to use a tag prefix when creating version in your repository. This is described in the "),ws={href:"https://semver.org/#is-v123-a-semantic-version",target:"_blank",rel:"noopener noreferrer"},qs=e("SemVer specification FAQ"),xs=e(". This convention provide a handy way to distinguish between release versions and tags that does not represent releases."),As=s("p",null,[e("To tell "),s("code",null,"cog"),e(" to pick only version starting with a prefix set this in your "),s("code",null,"cog.toml"),e(" file :")],-1),Es=s("div",{class:"language-toml ext-toml"},[s("pre",{class:"language-toml"},[s("code",null,[s("span",{class:"hljs-attr"},"tag_prefix"),e(" = "),s("span",{class:"hljs-string"},'"v"'),e(`
`)])])],-1);function Cs(t,Ts){const o=l("ExternalLinkIcon");return i(),c(p,null,[u,s("p",null,[g,m,s("a",b,[f,n(o)]),v,s("a",j,[_,n(o)]),y]),k,s("p",null,[w,s("a",q,[x,n(o)]),A,E,C]),s("p",null,[T,P,D,I,s("a",H,[F,n(o)]),N]),S,s("p",null,[z,O,R,s("a",G,[B,n(o)]),M]),Y,s("p",null,[s("a",W,[L,n(o)])]),V,s("img",{src:t.$withBase("github-release-changelog.png"),alt:"Github release changelog screenshot"},null,8,$),J,s("p",null,[U,s("a",K,[Q,n(o)]),X]),Z,s("div",ss,[es,as,s("ul",null,[os,s("li",null,[ns,ts,s("a",ls,[is,n(o)]),cs])]),rs]),ps,s("div",hs,[ds,s("p",null,[us,s("code",null,"cog_bump_"+r(t.version),1),gs]),ms]),bs,s("p",null,[fs,s("a",vs,[js,n(o)]),_s]),ys,s("p",null,[ks,s("a",ws,[qs,n(o)]),xs]),As,Es],64)}var Is=h(d,[["render",Cs]]);export{Is as default};
