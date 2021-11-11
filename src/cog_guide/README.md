## Repository initialization

To get the most out of cocogitto you need to have a `cog.toml` config at the root of your repository.
You can create this file manually or generate the default one with `cog init`.

### Create a new repository

```bash
mkdir my_repo && cd my_repo
cog init
```

`cog init` works like `git init` except it create a template `cog.toml` config file,
and an initial commit with the following message : `chore: initial commit`.

You can specify the target path of the repository you want to create :

```bash
cog init my_repo
```

### Initialize an existing repo

Running `cog init` on an existing repository will just create a template configuration without creating any commit :

```bash
git init my_repo && cd my_repo
cog init
```

```bash
❯ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   cog.toml
```

## Check commit history

Running `cog check` will check your commit history against the conventional commit specification :

```bash
❯ cog check
No errored commits
```

Let us create an invalid commit :
```bash
git commit -m "Your Mother Was A Hamster, And Your Father Smelt Of Elderberries"
```

And check our commit history again :
```bash
❯ cog check
Error:
Found 1 non compliant commits in c7bee8..HEAD:

_________________________________________________________

Errored commit: 097a12f9c124b7015afa8c9b0e0be95ac6db89ad <Paul Delafosse>
	Commit message: 'Your Mother Was A Hamster, And Your Father Smelt Of Elderberries'
	Cause: Missing commit type separator `:`
```


::: tip
You can check your history, starting from the latest tag using `--from-latest-tag` or `-l` flag.  
This is useful when your git repo started to use conventional commits from a certain point in history and you
don't care about editing old commits.
:::

## Rewrite non-compliant commits

::: danger
Using `cog edit` will modify your commit history and change the commit SHA of edited commit
and their child.
:::

Once you have spotted invalid commits you can quickly fix your commit history by running `cog edit`.
This will perform an automatic rebase, cycling through each malformed commit, and letting you edit them with your `$EDITOR`
of choice.

**Example :**

```editor:line-numbers
# Editing commit c2bb56b93821ff34282f322be4d2231f53b9ada8
# Replace this message with a conventional commit compliant one
# Save and exit to edit the next errored commit
Your Mother Was A Hamster, And Your Father Smelt Of Elderberries
```

::: tip
You can use the `--from-latest-tag` or `-l` to edit only commits since the latest tag in your repository.
:::

## Conventional commit log

`cog log` is just like `git log` but it displays additional conventional commit information, such as commit scope,
commit type etc.


[![asciicast](https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe.svg)](https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe)


::: tip
You can filter the log content with the following flags :

- `-B` : display breaking changes only
- `-t` : filter on commit types
- `-a` : filter on commit authors
- `-s` : filter on commit scopes
- `-e` : ignore non compliant commits

Those flag can be combined to achieve complex search in your commit history :

```bash
cog log --author "Paul Delafosse" "Mike Lubinets" --type feat --scope cli --no-error
```
:::

## Changelogs 

`cog changelog` can generate changelog automatically. 

Let's assume the following history : 

```git
* e3ff26a - (HEAD -> master) feat!: implement parser specification <Paul Delafosse>
* 78dedea - feat: a commit <Paul Delafosse>
* c361eea - feat: say hello to the world <Paul Delafosse>
* 6d014b4 - chore: initial commit <Paul Delafosse>
```

Let us now get a changelog : 
```bash
cog changelog
```

```markdown
## 0.2.0 - 2021-11-10
#### Features
- **(hello)** say hello to the galaxy - (da4af95) - Paul Delafosse
#### Refactoring
- **(hello)** say hello to the martians - (22db158) - Paul Delafosse
- - -
## 0.1.0 - 2021-11-10
#### Features
- implement parser specification - (e3ff26a) - Paul Delafosse
- a commit - (78dedea) - Paul Delafosse
- say hello to the world - (c361eea) - Paul Delafosse
```

As you can see above a changelog is generated for each semver compliant tag.

::: tip
You can specify a custom changelog range or tag like so :
```bash
# Display the changelog between `^1` and `2.0.0`
cog changelog --at 2.0.0

# From `8806a5` to `1.0.0`
cog changelog 8806a5..1.0.0

# From `8806a5` to `HEAD`
cog changelog 8806a55..

# From first commit to `1.0.0`
cog changelog 8806a5..1.0.0
```
:::

### Buit-in templates

A raw changelog is nice, but its even nicer to generate some links for repository hosted on git web platforms 
such as GitHub. To do this you can use the `--template` or `t` flag. Cocogitto comes with three pre built templates: 

#### `default`

The default template we saw in the previous section

#### `full_hash`

A changelog template tailored for GitHub releases
```bash
cog changelog --template hull_hash
```

```markdown
  #### Features
  - da4af95b223bb8942ffd289d1a62d930c80d7bbd - **(hello)** say hello to the galaxy - @oknozor
  #### Refactoring
  - 22db158f6c75aa5e9e7d4ed4a5b5af7b147453d7 - **(hello)** say hello to the martians - @oknozor
  - - -
  #### Features
  - e3ff26a8247b9690ce241e9843eea595bcac8d06 - implement parser specification - @oknozor
  - 78dedeaf5e7222cd338627f7ee982e271a3f9a4c - a commit - Paul Delafosse
  - c361eeae958a0a28041aecfed10091dc0e6768dd - say hello to the world - @oknozor
```
  
Below is the changelog as rendered by github release, notice how the committer git signature as been replaced 
by their github username. To do that you need to tell cocogitto about your contributor's username in `cog.toml`:

```toml
  [changelog]
  authors = [
      { username = "oknozor", signature = "Paul Delafosse" }
  ]
  ```
<img :src="$withBase('github-release-changelog.png')" alt="Github release changelog screenshot">

#### `remote`

A template generating links for web platform hosted repository.
  
```bash
cog changelog --at 0.1.0 -t remote --remote github.com --owner oknozor --repository  cocogitto
```

As you can see below a changelog is generated with full links to issues, tags, diff and usernames according
to the provided remote, owner and repository flags. 

```markdown
## [0.1.0](https://github.com/oknozor/cocogitto/compare/6d014b40f552fc1ad08f574fe33355175b0783ff..0.1.0) - 2021-11-11
#### Features
- implement parser specification - ([e3ff26a](https://github.com/oknozor/cocogitto/commit/e3ff26a8247b9690ce241e9843eea595bcac8d06)) - [@oknozor](https://github.com/oknozor)
- a commit - ([78dedea](https://github.com/oknozor/cocogitto/commit/78dedeaf5e7222cd338627f7ee982e271a3f9a4c)) - [@oknozor](https://github.com/oknozor)
- say hello to the world - ([c361eea](https://github.com/oknozor/cocogitto/commit/c361eeae958a0a28041aecfed10091dc0e6768dd)) - [@oknozor](https://github.com/oknozor)
```
::: tip 
To avoid typing the remote information and changelog template everytime you can set  some default values in `cog.toml`.

Here is the config used by cocogitto itself. 

```toml
[changelog]
path = "CHANGELOG.md"
template = "remote"
remote = "github.com"
repository = "cocogitto"
owner = "cocogitto"
authors = [
  { signature = "Paul Delafosse", username = "oknozor" },
  { signature = "Jack Dorland", username = "jackdorland" },
  { signature = "Mike Lubinets", username = "mersinvald" },
  { signature = "Marcin Puc", username = "tranzystorek-io" },
  { signature = "Renault Fernandes", username = "renaultfernandes" },
  { signature = "Pieter Joost van de Sande", username = "pjvds" },
  { signature = "orhun", username = "orhun" },
  { signature = "Danny Tatom", username = "its-danny" },
]
```
:::

### Custom templates

If you are not happy with the default you can create your own changelog template. 
Internally cocogitto uses [tera](https://tera.netlify.app/) template engine to render changelogs. 

**Example:**

```tera
{% for type, typed_commits in commits | sort(attribute="type")| group_by(attribute="type")%}                            
#### {{ type | upper_first }}
                                                                                                                        
    {% for scope, scoped_commits in typed_commits | group_by(attribute="scope") %}                                      
        {% for commit in scoped_commits | sort(attribute="scope") %}                                                    
            {% if commit.author %}                                                                                      
                {% set author = "@" ~ commit.author %}                                                                  
            {% else %}                                                                                                  
                {% set author = commit.signature %}                                                                     
            {% endif %}                                                                                                 
            - {{ commit.id }} - **({{ scope }})** {{ commit.summary }} - {{ author }}
        {% endfor %}                                                                                                    
    {% endfor %}                                                                                                        
    {% for commit in typed_commits | unscoped %}                                                                        
        {% if commit.author %}                                                                                          
            {% set author = "@" ~ commit.author %}                                                                      
        {% else %}                                                                                                      
            {% set author = commit.signature %}                                                                         
        {% endif %}                                                                                                     
            - {{ commit.id }} - {{ commit.summary }} - {{ author }}
    {% endfor %}                                                                                                        
{% endfor %}                                                                                                            
```


## Automatic versioning

The purpose of conventional commits is to be able to bump your project version and changelog
automatically. Cocogitto allow you to do this with the `cog bump` command.

The `bump` subcommand will execute the following steps :

1. Calculate the next version based on the commit types since the latest tag.
2. Append the changes for this version to `CHANGELOG.md`.
3. Execute a set configuration defined pre-bump hooks.
4. Create a version commit containing changes made during the previous steps.
5. Create a git tag on the version commit.
6. Execute a set of configuration defined post-bump hook.

### Auto bump

Assuming we are working on the following git repository :
```git
* e3ff26a - (HEAD -> master) feat: another cool feature
* 78dedea - docs: add some documentation
* c361eea - fix: fix ugly bug
* 6d014b4 - feat: add awesome feature
* 5854799 - chore: initial commit
```

Let us now create a version :
```bash
❯ cog bump --auto
Found feature commit caef0f, bumping to 0.1.0
Skipping irrelevant commit 78dedea with type : docs
Found bug fix commit e2af66, bumping to 0.1.1
Found feature commit 1b87aa, bumping to 0.2.0
Bumped version : 0.0.0 -> 0.2.0
```

If we look again at our git log :
```git
* 5854799 - (HEAD -> master, tag: 0.2.0) chore(version): 0.2.0
... 
```

Also, a `CHANGELOG.md` file have been created.

```markdown
# Changelog
All notable changes to this project will be documented in this file.
See [conventional commits](https://www.conventionalcommits.org/) for commit guidelines.

- - -
## 0.2.0 - 2020-09-30


### Bug Fixes

e2af66 - fix ugly bug - Paul Delafosse


### Documentation

025cc0 - add some documentation - Paul Delafosse


### Features

caef0f - another cool feature - Paul Delafosse

1b87aa - add awesome feature - Paul Delafosse


- - -

This changelog was generated by [cocogitto](https://github.com/oknozor/cocogitto).
```

You need to run `cog bump` with one of the following flags :
- `--auto` : choose the next version for you (based on feature commit, bug fixes commit and BREAKING_CHANGE commit).
- `--major` : increment the MAJOR version.
- `--minor` : increment the MINOR version.
- `--patch` : increment the PATCH version.
- `--version <version>` : set version manually (ex : `cog bump --version 3.2.1`).

You can also create pre-release version by adding the `--pre` flag to the bump command :

```bash
cog bump --major --pre "beta.1"
```

Coming from `1.2.3` this would create the following tag : `2.0.0-beta.0`.


If you create a new version, the version changelog will be prepended to your changelog file separated by `- - -`.
Note that if your project already contains a changelog you can tell `cog` about it by adding this to the file :

```markdown
- - -
- - -
```

You might also need to adjust `changelog_path` in `cog.toml`.

**Note:** `cog bump --auto` treats `0.y.z` versions specially,
i.e. it will never do an auto bump to the `1.0.0` version, even if there are breaking changes.
That way, you can keep adding features in the development stage and decide yourself, when your API is stable.

### Bump hooks

#### Pre bump hooks

Creating git tag automatically is great but sometimes you need to edit some file with the new version number,
or perform some additional checks before doing so.

A typical example is editing your project manifest in your package manager configuration file.
You can run pre bump commands with the `{{version}}` alias to reference the newly created version :

```toml
# cog.toml
pre_bump_hooks = [
    "cargo build --release",
    "cargo bump {{version}}",
]
```

When running `cog bump` these command will be run before creating the version commit.
Assuming we are bumping to `1.1.0`, the `{{version}}` alias will be replaced with `1.1.0`.

#### Post bump hooks

You can tell `cog` to run commands after the bump.

```toml
# cog.toml
post_bump_hooks = [
    "git push",
    "git push origin {{version}}",
    "cargo publish"
]
```  

### Version DSL

It is common to bump your development branch version package manifest after creating a new release.
A typical example in the java world would be to bump your maven snapshot on your development branch after a release.

```toml
# cog.toml
post_bump_hooks = [
    "git push",
    "git push origin {{version}}",
    "git checkout develop",
    "git rebase master",
    "mvn versions:set -DnewVersion={{version+minor-SNAPSHOT}}",
    "coco chore \"bump snapshot to {{version+1minor-SNAPSHOT}}\"",
    "git push",
]
```

As you can see we are bumping the manifest using a small DSL. It as only a few keywords :
- start with the `version` keyword.
- followed by the `+` operator.
- `major`, `minor` and `patch` to specify the kind of increment you want.
  Then an optional amount, default being one (`version+1minor` and `version+minor` being the same).
- followed by any number of `+{amount}{kind}` (exemple: `version+2major+1patch`)
- ended by any alphanumeric character (SemVer additional labels for pre-release and build metadata), here `-SNAPSHOT`.

## Builtin git hooks

To protect your commit history, and your git remote, cog have builtins
[git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks).

You can install them all by running :

```bash
cog install-hook all
```

Or one by one, specifying the hook name :

**Pre-push hook:**

Enabling this hook will run `cog check` before pushing to remote.
```bash
cog install-hooks pre-push
```

**Pre-commit hook:**

Enabling this hook will run `cog verify` before creating a new commit.

 ```bash
 cog install-hook pre-commit
```
]()